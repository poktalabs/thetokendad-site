# thetokendad-votes-api

A minimal, standalone Cloudflare Worker that backs the "upvote an exhibit" mechanic on the showcase section of thetoken.dad. It is deliberately isolated from the main site build: its own directory, its own `wrangler.jsonc`, its own KV namespace, its own deploy command. It is **not** referenced by the site's `wrangler.jsonc`, `astro.config.mjs`, or any deploy script. The site remains `output: 'static'` whether or not this Worker is ever deployed.

Read `../../SHOWCASE-VOTING-NOTES.md` at the repo root before deploying anything — it has the full writeup of why this exists, what static/no-JS locks it deviates from, and the sign-off this needs first.

## What it does

- `GET /votes` — returns current vote counts for all four exhibits as JSON: `{ "design": 3, "impeccable": 1, "taste": 0, "gstack": 2 }`.
- `POST /vote` — body `{ "exhibit": "design" }`, casts one vote. Idempotent per (hashed IP, exhibit): voting twice from the same IP for the same exhibit returns the existing count unchanged rather than erroring.

## How dedup and rate limiting work

- The caller's IP (`CF-Connecting-IP`) is hashed with SHA-256 before it ever touches storage. The raw IP is never written to KV.
- A `voted:<exhibit>:<iphash>` key marks that IP as having voted for that exhibit, permanently (no TTL). A second vote from the same IP for the same exhibit is a no-op that still returns 200 with the current count.
- A coarse rate limit (`rl:<iphash>`, 3-second TTL) caps writes per IP regardless of exhibit — enough to stop an accidental double-click or a naive script loop, not a serious anti-abuse control.
- KV is eventually consistent with no transactions. A genuine race — two requests from the same IP hitting different edge colos in the same instant — could in principle double-count once before the dedup key propagates. Accepted for a lightweight upvote counter; not appropriate if this ever needs to be tamper-proof.

## CORS

`ALLOWED_ORIGIN` (set in `wrangler.jsonc` under `vars`, default `https://thetoken.dad`) is echoed as `Access-Control-Allow-Origin`. Update it (or pass `--var ALLOWED_ORIGIN:...` at deploy time) if this is ever tested against a preview URL.

## Deploy steps (do NOT run without sign-off — see the notes doc)

```sh
cd workers/votes

# 1. Create the KV namespace (one-time). Copy the returned id.
npx wrangler kv namespace create VOTES_KV

# 2. Paste that id into wrangler.jsonc:
#    "kv_namespaces": [{ "binding": "VOTES_KV", "id": "<the real id>" }]

# 3. Dry run first.
npx wrangler deploy --dry-run

# 4. Deploy for real.
npx wrangler deploy
```

This also creates the `votes.thetoken.dad` custom-domain binding declared in `wrangler.jsonc`'s `routes`, the same pattern the main site and the redirect Worker already use (`workers.dev` is disabled on this Cloudflare account, so a custom domain is the only reachable option — see `REPORT-v1.md`'s Deployment section for the account-level context and for a caution about custom-domain bindings sometimes needing a delete-and-re-add cycle to actually resolve).

After deploying, the front-end script in `src/components/Showcase.astro` needs its `VOTES_API` constant pointed at the real, live origin (it already defaults to `https://votes.thetoken.dad`, so this only matters if the domain changes) — and if the site ever adds a Content-Security-Policy, its `connect-src` needs `https://votes.thetoken.dad` added, or the fetch calls will be silently blocked by the browser while the cards keep rendering fine (that's the intended degrade-gracefully behavior, but it's worth knowing why votes would stop working).

## Local dev

```sh
cd workers/votes
npx wrangler dev
```

Wrangler will use `wrangler.jsonc`'s placeholder KV id for a local, ephemeral namespace unless a real one is supplied — fine for exercising the endpoints, not representative of production counts.
