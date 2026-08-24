# Website Challenge hub — build notes

Branch: `hub/website-challenge-v1` (off `main`). Worktree: `code/_hub`. Not pushed, not merged, not deployed. This file travels with the branch for the human reviewer.

## What this is

The `/website-challenge-v1/` hub: the human- and LLM-readable pages that explain and rank the "Website Challenge" design run (four AI design tools each built the same site from one frozen vision). The four exhibit subdomains are the frozen `noindex` evidence; this hub is the canonical explanation, optimized for both traditional SEO and AEO (answer-engine / LLM consumption). Primary source: `workstreams/thetokendad-website/docs/design-run/REPORT-v1.md`.

## Preview it locally

```
cd code/_hub
bun install
bun run build
bunx astro preview --port 4321
# then open the routes below; stop with: bunx astro preview stop
```

Routes (all 200, `trailingSlash: 'always'`):

- `/website-challenge-v1/` — index / direct-answer landing + FAQ
- `/website-challenge-v1/methodology/` — control surface, clean-context runners, intake proxy, parallelism, verification
- `/website-challenge-v1/results/` — headline finding, process-not-taste divergence, the unwinnable-check defect, stats tables, cost method
- `/website-challenge-v1/exhibits/` — the four tools, per-arm context + stats + links out, caveats
- `/llms.txt` — machine-readable index pointing at the hub

## Final information architecture (and why)

Four pages, not more. The proposed IA offered "one exhibits page with four sections OR a page per arm"; I chose **one `exhibits.astro` with four `<h2>` sections**. Rationale: the per-arm content is short enough that four separate routes would be thin pages competing with each other for the same query intent, and a single page lets an answer engine compare the four tools in one retrieval. Same logic kept methodology and results as single rich pages rather than splitting.

## Files created

- `src/pages/website-challenge-v1/index.astro`
- `src/pages/website-challenge-v1/methodology.astro`
- `src/pages/website-challenge-v1/results.astro`
- `src/pages/website-challenge-v1/exhibits.astro`
- `src/layouts/HubLayout.astro` — hub-scoped layout (see decision below)
- `public/llms.txt` — root machine-readable index
- `HUB-BUILD-NOTES.md` — this file

No shared/human-track files were edited: `BaseLayout.astro`, `BaseHead.astro`, `consts.ts`, `global.css`, `index.astro`, `about.astro` are all untouched.

## Decisions & assumptions (flagged)

1. **New `HubLayout.astro` instead of editing `BaseHead`/`BaseLayout`.** The SEO brief said to extend `BaseHead`, but `BaseHead` exposes no head slot and is included by `BaseLayout` with no pass-through, so injecting per-page JSON-LD would have required editing `BaseLayout` — a human-track shared file. Instead, `HubLayout` mirrors `BaseLayout`'s semantic shell (same header/nav/footer) and reuses the **unmodified** `BaseHead` for title/description/canonical/OG/Twitter, adding only a `jsonLd` prop that renders `<script type="application/ld+json">` blocks. Zero changes to shared files; hub is fully self-contained. If the human track later wants JSON-LD site-wide, the clean move is to add an optional head slot to `BaseHead` + `BaseLayout` and collapse `HubLayout` into `BaseLayout`.
2. **No `consts.ts` changes.** Author/publisher/site strings ("Mel", "The Token Dad", URLs) are inlined in each page's JSON-LD rather than imported from a new constant, to honor the "do not edit consts.ts" boundary. If these should be shared constants, that's a small human-track follow-up.
3. **JSON-LD distribution:** every page carries a `TechArticle` + `BreadcrumbList`. Index adds `FAQPage` (5 Q&A). Results adds `Dataset` (the stats tables, with `variableMeasured` + `measurementTechnique` stating the modelled-cost method). Exhibits adds `ItemList` (the four exhibits). All grounded strictly in REPORT-v1 numbers — no invented figures.
4. **AEO copy discipline:** each page opens with a direct, self-contained answer paragraph; headings are question-shaped; every claim is numeric/attributable. FAQ answers mirror the JSON-LD verbatim.
5. **Design posture:** pages use plain semantic HTML with **no `class` attributes and no CSS added** — matching the deliberately-undesigned `main` baseline. Visual design is left entirely to the human track.
6. **Tailwind prose trap honored.** No banned visual utilities (ring/blur/shadow/gradient/grayscale/invert/drop-shadow) leaked into the shipped CSS — grep-verified against the built bundle. One worker's frontmatter comment listed those words for self-reference; I removed it because Tailwind scans comments too. The shipped CSS (4.4KB) contains only baseline Tailwind reset plus a few harmless structural display utilities (`.block`, `.flex`, `.table`, `.static`) minted from ordinary English words in prose — no visual effect, unused by any element.

## Needs a human call

1. **Cloudflare crawler block gates the hub's reach.** `thetoken.dad/robots.txt` (Cloudflare zone-managed) currently disallows `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, `Bytespider`, `Amazonbot`, `Applebot-Extended`, `meta-externalagent`, and sets `Content-Signal: ai-train=no`. The hub and its `llms.txt` are designed to be read by exactly those crawlers. **As configured, the hub ships an `llms.txt` to an audience the zone has already turned away at the door.** `llms.txt` is necessary but not sufficient. This is a dashboard setting, not a code change, and it must be decided before the hub ships. I did not touch it.
2. **Homepage → hub link handoff.** The homepage (`index.astro`) does not link to the hub. Per the boundaries I did **not** edit `index.astro`. A human-track change should add a link from the homepage (and likely the nav) to `/website-challenge-v1/`.
3. **`public/robots.txt` sitemap-only file is unchanged** and correct; no change needed from the hub, but note the zone-managed block above sits in front of it.

## Deliberately left to the human track

- The About page bio (TASK-005) — untouched.
- Any `/showcase` page — not created.
- Homepage hero / `index.astro` — untouched (see handoff above).
- Visual design / design system / any CSS in `global.css` — untouched.

## Verification results (all pass)

- `bun run build` — success, 8 pages, all four hub routes generated.
- `bunx astro check` — 0 errors, 0 warnings, 0 hints (the JSON-LD `is:inline` hint was resolved by adding the directive).
- Sitemap — all four hub routes present in `dist/sitemap-0.xml`.
- JSON-LD — present in all four built HTML pages and parses as valid JSON (TechArticle ×4, FAQPage, Dataset, ItemList, BreadcrumbList ×4).
- CSS leak grep — clean: no banned visual utilities in the shipped bundle.
- `llms.txt` — shipped to `dist/llms.txt`.
- Preview smoke test — all four routes + `/llms.txt` return HTTP 200; canonical + meta description resolve per page with unique titles/descriptions.
