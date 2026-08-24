/**
 * thetokendad-votes-api — a minimal standalone Cloudflare Worker.
 *
 * Backs the upvote mechanic on the showcase section of thetoken.dad. This
 * Worker is intentionally isolated from the main site: its own directory,
 * its own wrangler config, its own KV namespace. The main site stays a pure
 * static build regardless of whether this is ever deployed. See
 * ../../SHOWCASE-VOTING-NOTES.md for the full deviation writeup and the
 * sign-off this needs before it goes anywhere near production.
 *
 * Plain JS on purpose: this directory intentionally has no tsconfig of its
 * own and is not wired into the site's TypeScript project, so it can't
 * regress `astro check` for the main build. See README.md.
 *
 * Endpoints
 *   GET  /votes  -> { [exhibitSlug]: number }  — current counts, all exhibits
 *   POST /vote   -> { exhibit } in body -> { exhibit, count } — casts one
 *                    vote, idempotent per (hashed IP, exhibit) pair
 *
 * Storage (Workers KV, binding VOTES_KV)
 *   count:<exhibit>          -> string integer, the running total
 *   voted:<exhibit>:<iphash> -> "1", permanent — dedup marker, no raw IP
 *                                ever stored, only a SHA-256 hash of it.
 *                                This is the one-vote-per-IP-per-exhibit control.
 *
 * KV is eventually-consistent with no transactions, so a genuine race (two
 * requests from the same IP landing on different edge colos in the same
 * instant) could in principle double-count once before the dedup key is
 * visible everywhere. That is an accepted limitation for a lightweight
 * upvote counter, not a security control — see the notes doc.
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

async function handleVotes(env, origin) {
  const counts = await getAllCounts(env);
  return json(counts, origin);
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

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const ipHash = await hashIp(ip);

  // No coarse rate-limit key: Workers KV rejects any expirationTtl below 60s,
  // so the intended 3s guard is impossible, and a 60s guard would block a
  // visitor from upvoting a second exhibit for a full minute. The permanent
  // per-(exhibit, IP) dedup key below is the real "one vote per IP" control.
  const votedKey = `voted:${exhibit}:${ipHash}`;
  const alreadyVoted = await env.VOTES_KV.get(votedKey);
  const counts = await getAllCounts(env);

  if (alreadyVoted) {
    // Idempotent: same response shape as a fresh vote, count unchanged.
    return json({ exhibit, count: counts[exhibit] }, origin, { status: 200 });
  }

  const nextCount = counts[exhibit] + 1;
  await Promise.all([
    env.VOTES_KV.put(`count:${exhibit}`, String(nextCount)),
    env.VOTES_KV.put(votedKey, '1'),
  ]);

  return json({ exhibit, count: nextCount }, origin, { status: 201 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = resolveOrigin(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === '/votes' && request.method === 'GET') {
      return handleVotes(env, origin);
    }

    if (url.pathname === '/vote' && request.method === 'POST') {
      return handleVote(request, env, origin);
    }

    return json({ error: 'not found' }, origin, { status: 404 });
  },
};
