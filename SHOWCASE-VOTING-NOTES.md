# Showcase + voting — deviation notes and sign-off

Written for the `canvas/task-showcase` branch, which adds a showcase of the four Website Challenge exhibits to the landing page, plus an optional upvote mechanic. Read this before deploying anything described below. Nothing in this branch deploys on its own — see "What ships without any sign-off" first.

## The two locks this reopens

Arm 1's canvas (the design that became this site) is locked on two axes: **static output** and **no client-side JavaScript**. Both locks came from `DECISIONS.md` in the design-run workstream, and both were deliberate — a static site with no JS is simpler to host, cheaper, faster, and has no attack surface.

The **showcase itself does not reopen either lock.** Four cards linking to the four exhibits are plain server-rendered HTML — no script required, nothing to hydrate, nothing to fetch. They satisfy the actual goal ("showcase the sites, drive traffic to them") completely on their own.

**Voting is what reopens both locks, and only voting:**

1. It reopens **no-client-side-JS**: `src/components/Showcase.astro` ships one inline `<script>` that fetches vote counts on load and posts a vote on click.
2. It does **not** reopen **static output**: `astro.config.mjs` is untouched, still `output: 'static'`, and the site's own `wrangler.jsonc` is untouched. The dynamic part — the counting, the per-IP dedup — lives entirely outside the Astro build, in a separate Cloudflare Worker (`workers/votes/`) that this repo does not deploy and does not reference from the site's build or deploy config.

If the deviation from the no-JS lock is unacceptable, the fix is one line: delete the `<script>` block from `Showcase.astro` (or delete the vote button markup from the loop) and the showcase section is fully static again, with the same four cards and links.

## What ships without any sign-off

Everything in this branch as committed:

- The showcase section on the landing page: four hairline-ruled cards (one signal accent — Open, green — for the whole section, no per-card colour), each with the tool name, a one-line honest description, and a link to the live exhibit.
- All four links work with JavaScript fully disabled. Verified against the built `dist/index.html`, not the dev server.
- The vote button on each card. **It renders disabled, showing a dash (`—`) for a count, on every page load**, until (and unless) the inline script successfully fetches `https://votes.thetoken.dad/votes`. Nothing about the showcase's appearance or the exhibit links depends on that fetch succeeding.
- `workers/votes/` — a complete, self-contained Worker implementation. It is not deployed. It has no KV namespace yet (`wrangler.jsonc` holds a placeholder id). Nothing in the main site's config references it.

In other words: merging and deploying this branch as-is ships the showcase and ships an inert vote button that will silently never do anything, because `votes.thetoken.dad` will not exist yet. That is intentional and safe — no error, no broken UI, just a button that stays a dash forever until someone deploys the Worker.

## What needs Mel's explicit sign-off before it can actually work

Voting only becomes live after all of the following, none of which this branch does:

1. **Deploy the Worker.** `cd workers/votes && npx wrangler kv namespace create VOTES_KV`, paste the real namespace id into `workers/votes/wrangler.jsonc`, then `npx wrangler deploy`. Full steps in `workers/votes/README.md`.
2. **Confirm the custom domain resolves.** The Worker's `routes` declares `votes.thetoken.dad` as a custom domain, the same pattern the main site (`thetoken.dad`) and the redirect Worker (`thetokendad.com`) already use — `workers.dev` is disabled on this Cloudflare account (see the design-run `REPORT-v1.md`, Deployment section), so this is the only reachable option, not a style choice. That same report also documents one exhibit's custom-domain binding taking ~10 minutes and a delete-and-re-add cycle to actually resolve despite the API reporting success immediately — budget for that possibility here too.
3. **If the site ever gets a Content-Security-Policy** (it does not have one today — checked: no `_headers` file at `public/`, no CSP meta tag in `BaseHead.astro`), its `connect-src` needs `https://votes.thetoken.dad` added, or the browser will silently block the fetch calls. The vote buttons would just stay dashes forever — no visible error, no broken layout, so this could go unnoticed for a while if forgotten.
4. **Decide whether the vote mechanic is wanted at all.** It is genuinely optional. The showcase's core job — send readers to the four exhibits — is done without it.

## Design of the voting mechanism

- **Client** (`src/components/Showcase.astro`, inline `<script>`): vanilla JS, no framework. On load, fetches `GET /votes`, fills in each button's count, and enables the buttons — all wrapped in try/catch, so a failed fetch (Worker not deployed, CORS rejected, offline) leaves every button exactly as the server rendered it. On click, `POST /vote` with `{ exhibit: <slug> }`; on success the count updates from the response and the button is marked voted (`data-voted="true"`, disabled) both visually and via `localStorage` so a page reload remembers the client already voted — the server-side IP dedup is the real enforcement, `localStorage` is only a UX nicety and is itself wrapped in try/catch for private-mode browsers.
- **Worker** (`workers/votes/src/index.js`): plain JS on purpose, not TypeScript — it has no `tsconfig.json` of its own and is excluded from the site's TypeScript project, so it can never regress `astro check` on the main build. Implements `GET /votes` and `POST /vote`, CORS restricted to `ALLOWED_ORIGIN` (default `https://thetoken.dad`), a 3-second per-IP rate limit on writes, and vote counts + dedup in Workers KV.
- **Dedup**: `CF-Connecting-IP` is SHA-256-hashed before it ever touches storage — the raw IP is never written to KV, only `voted:<exhibit>:<iphash>`. A repeat vote from the same IP for the same exhibit is a no-op (200, count unchanged), not an error.
- **Known limitation, stated plainly**: KV has no transactions and is eventually consistent, so a genuine race (same IP, two requests landing on different edge colos in the same instant) could double-count once before the dedup key propagates globally. Acceptable for a lightweight upvote counter. Not appropriate if this ever needs to be tamper-proof or auditable.

## Files touched or added by this branch

- `src/pages/index.astro` — one insertion: `<Showcase />` between the marks-key section and the writing list. The hero and the marks-key section are untouched.
- `src/styles/global.css` — one new block (`Showcase` section) appended before the `Post` section comment. Nothing existing was changed.
- `src/components/Showcase.astro` — new. Section markup, card data, and the vote script.
- `workers/votes/` — new, entirely self-contained: `wrangler.jsonc`, `src/index.js`, `README.md`.
- `SHOWCASE-VOTING-NOTES.md` — this file.

`astro.config.mjs`, `src/consts.ts`, the site's own `wrangler.jsonc`, and every layout/other component were not touched.
