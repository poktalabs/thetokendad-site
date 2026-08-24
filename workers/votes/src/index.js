/**
 * thetokendad-votes-api — a minimal standalone Cloudflare Worker.
 *
 * Backs the "which one would you ship" ballot on the showcase section of
 * thetoken.dad. This Worker is intentionally isolated from the main site: its
 * own directory, its own wrangler config, its own KV namespace. The main site
 * stays a pure static build regardless of whether this is ever deployed. See
 * ../../SHOWCASE-VOTING-NOTES.md for the deviation writeup.
 *
 * Plain JS on purpose: this directory intentionally has no tsconfig of its
 * own and is not wired into the site's TypeScript project, so it can't
 * regress `astro check` for the main build. See README.md.
 *
 * Endpoints
 *   GET  /votes  -> { counts: {slug:number}, youVoted: slug|null } — counts
 *                    for all exhibits plus this IP's standing choice, if any.
 *   POST /vote   -> { exhibit } in body -> { youVoted, counts } — casts one
 *                    vote. ONE VOTE PER IP TOTAL (a ballot, not per-exhibit
 *                    upvotes): once an IP has voted, every further vote is a
 *                    no-op that returns the standing choice unchanged.
 *
 * Storage (Workers KV, binding VOTES_KV)
 *   count:<exhibit> -> string integer, the running total.
 *   voted:<iphash>  -> the chosen exhibit slug, permanent. No raw IP is ever
 *                      stored, only a SHA-256 hash. One key per IP = one vote.
 *
 * KV is eventually-consistent with no transactions, so a genuine race (two
 * requests from the same IP landing on different edge colos in the same
 * instant) could in principle double-count once before the marker is visible
 * everywhere. Accepted for a lightweight ballot, not a security control.
 */

const EXHIBITS = ['design', 'impeccable', 'taste', 'gstack'];

// Local preview origins allowed to call the API in addition to the production
// origin (env.ALLOWED_ORIGIN). Safe to allow permanently: a third-party page
// cannot cause a browser to send `Origin: http://localhost:...`, so this only
// ever helps someone running the site locally.
const DEV_ORIGINS = new Set([
  'http://localhost:4321',
  'http://127.0.0.1:4321',
  'http://localhost:4331',
  'http://127.0.0.1:4331',
]);

function isExhibit(value) {
  return typeof value === 'string' && EXHIBITS.includes(value);
}

async function hashIp(ip) {
  const data = new TextEncoder().encode(ip);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// The CORS origin to echo: the production origin, or a known local dev origin
// when testing the preview. Anything else falls back to the production origin
// so the browser blocks it.
function resolveOrigin(request, env) {
  const origin = request.headers.get('origin');
  if (origin && (origin === env.ALLOWED_ORIGIN || DEV_ORIGINS.has(origin))) {
    return origin;
  }
  return env.ALLOWED_ORIGIN;
}

function corsHeaders(origin) {
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
    vary: 'origin',
  };
}

function json(body, origin, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'content-type': 'application/json',
      ...corsHeaders(origin),
      ...(init.headers ?? {}),
    },
  });
}

async function getAllCounts(env) {
  const entries = await Promise.all(
    EXHIBITS.map(async (slug) => {
      const raw = await env.VOTES_KV.get(`count:${slug}`);
      const n = raw ? parseInt(raw, 10) : 0;
      return [slug, Number.isFinite(n) ? n : 0];
    }),
  );
  return Object.fromEntries(entries);
}

function ipHashFrom(request) {
  return hashIp(request.headers.get('cf-connecting-ip') ?? 'unknown');
}

async function handleVotes(request, env, origin) {
  const ipHash = await ipHashFrom(request);
  const [counts, youVoted] = await Promise.all([
    getAllCounts(env),
    env.VOTES_KV.get(`voted:${ipHash}`),
  ]);
  return json({ counts, youVoted: youVoted ?? null }, origin);
}

async function handleVote(request, env, origin) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid json body' }, origin, { status: 400 });
  }

  const exhibit = body && typeof body === 'object' ? body.exhibit : undefined;
  if (!isExhibit(exhibit)) {
    return json({ error: 'unknown exhibit' }, origin, { status: 400 });
  }

  const ipHash = await ipHashFrom(request);

  // One vote per IP, total — not per exhibit. The ballot is "which one would
  // you ship", so a single `voted:<iphash>` marker records the chosen exhibit
  // and locks every further vote from that IP. KV's 60s-minimum TTL rules out
  // a short rate limit; this permanent marker is the whole control.
  const votedKey = `voted:${ipHash}`;
  const already = await env.VOTES_KV.get(votedKey);
  const counts = await getAllCounts(env);

  if (already) {
    // Already voted, possibly for a different exhibit. No increment; report
    // their standing choice and the current counts.
    return json({ youVoted: already, counts }, origin, { status: 200 });
  }

  counts[exhibit] = counts[exhibit] + 1;
  await Promise.all([
    env.VOTES_KV.put(`count:${exhibit}`, String(counts[exhibit])),
    env.VOTES_KV.put(votedKey, exhibit),
  ]);

  return json({ youVoted: exhibit, counts }, origin, { status: 201 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = resolveOrigin(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === '/votes' && request.method === 'GET') {
      return handleVotes(request, env, origin);
    }

    if (url.pathname === '/vote' && request.method === 'POST') {
      return handleVote(request, env, origin);
    }

    return json({ error: 'not found' }, origin, { status: 404 });
  },
};
