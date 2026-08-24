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
 *                                ever stored, only a SHA-256 hash of it
 *   rl:<iphash>               -> "1", short TTL — coarse rate limit
 *
 * KV is eventually-consistent with no transactions, so a genuine race (two
 * requests from the same IP landing on different edge colos in the same
 * instant) could in principle double-count once before the dedup key is
 * visible everywhere. That is an accepted limitation for a lightweight
 * upvote counter, not a security control — see the notes doc.
 */

const EXHIBITS = ['design', 'impeccable', 'taste', 'gstack'];

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

function corsHeaders(env) {
  return {
    'access-control-allow-origin': env.ALLOWED_ORIGIN,
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
    vary: 'origin',
  };
}

function json(body, env, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'content-type': 'application/json',
      ...corsHeaders(env),
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

async function handleVotes(env) {
  const counts = await getAllCounts(env);
  return json(counts, env);
}

async function handleVote(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid json body' }, env, { status: 400 });
  }

  const exhibit = body && typeof body === 'object' ? body.exhibit : undefined;
  if (!isExhibit(exhibit)) {
    return json({ error: 'unknown exhibit' }, env, { status: 400 });
  }

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const ipHash = await hashIp(ip);

  // Coarse rate limit: one write of any kind per IP per 3 seconds. Cheap
  // to defeat by a determined attacker, sufficient to stop an accidental
  // double-click or a naive script loop.
  const rlKey = `rl:${ipHash}`;
  if (await env.VOTES_KV.get(rlKey)) {
    return json({ error: 'rate limited' }, env, { status: 429 });
  }
  await env.VOTES_KV.put(rlKey, '1', { expirationTtl: 3 });

  const votedKey = `voted:${exhibit}:${ipHash}`;
  const alreadyVoted = await env.VOTES_KV.get(votedKey);
  const counts = await getAllCounts(env);

  if (alreadyVoted) {
    // Idempotent: same response shape as a fresh vote, count unchanged.
    return json({ exhibit, count: counts[exhibit] }, env, { status: 200 });
  }

  const nextCount = counts[exhibit] + 1;
  await Promise.all([
    env.VOTES_KV.put(`count:${exhibit}`, String(nextCount)),
    env.VOTES_KV.put(votedKey, '1'),
  ]);

  return json({ exhibit, count: nextCount }, env, { status: 201 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    if (url.pathname === '/votes' && request.method === 'GET') {
      return handleVotes(env);
    }

    if (url.pathname === '/vote' && request.method === 'POST') {
      return handleVote(request, env);
    }

    return json({ error: 'not found' }, env, { status: 404 });
  },
};
