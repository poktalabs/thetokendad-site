# thetoken.dad — the canvas

The official site for **The Token Dad**. Static marketing + blog, built by hand.

This is *surface 1* of the `thetokendad-website` workstream. Surface 2 — the **showcase**, where each Nebius Token Factory model builds its own version of a site from a free brief — is a separate thing entirely and does not live in this repo.

- **Workstream:** `../../workstreams/thetokendad-website/`
- **Stack lock and rationale:** `../../workstreams/thetokendad-website/docs/stack.md`
- **Decision record:** `../../workstreams/thetokendad-website/DECISIONS.md`
- **Build log (how this repo got here):** `../../workstreams/thetokendad-website/docs/build-log.md`

## Running it

**Bun 1.3.14** (or newer) is both the package manager and the script runner — pinned via `packageManager` and `engines.bun` in `package.json`. `.nvmrc` and `engines.node` (24.19.0) are **kept**, not vestigial: Cloudflare Pages and Vercel both resolve a Node version for the build image from those fields even when the build command itself runs through Bun, so removing them would break deploy-time Node resolution on either platform — the deploy target is still undecided between the two.

```bash
nvm use            # reads .nvmrc → 24.19.0. NOT optional, see trap 9 below
bun install
bun run dev        # http://localhost:4321
bun run build      # → dist/
bun run check      # astro check — must stay at 0 errors / 0 warnings / 0 hints
bun run preview    # serve dist/
```

The gate before anything is considered done: **`bun run build` clean and `bun run check` at 0/0/0.**

The lockfile is `bun.lock` (Bun 1.2+'s text/JSONC format, not the legacy binary `bun.lockb`) — it is the artifact, same as `package-lock.json` was under npm. Do not hand-edit it.

## Structure

```
src/
  consts.ts              site title, description, author, socials — content, not layout
  content.config.ts      the blog collection schema (Zod)
  lib/posts.ts           getPublishedPosts() — the single source of "what is live"
  components/
    BaseHead.astro       <head>: canonical, OG, Twitter, RSS autodiscovery, sitemap
    FormattedDate.astro  <time> with a readable en-US date
  layouts/
    BaseLayout.astro     html/head/body shell, header, footer
    PostLayout.astro     article wrapper for a blog post
  pages/
    index.astro          home — the proposition + 5 most recent posts
    about.astro          bio — CONTENT PENDING, blocked on TASK-005
    blog/index.astro     all posts
    blog/[...slug].astro one post
    rss.xml.ts           the feed
  styles/global.css      Tailwind entry. Intentionally carries no design yet.
public/
  robots.txt
```

## Writing a post

Drop a `.md` or `.mdx` file in `src/content/blog/`. The filename becomes the slug.

```yaml
---
title: "Post title"
description: "One or two sentences. Used in the feed, the listing, and og:description."
pubDate: 2026-08-07
updatedDate: 2026-08-09   # optional
tags: ["genesis"]          # optional, defaults to []
draft: true                # optional, defaults to false
---
```

`draft: true` removes the post from **every** built surface — the home page, the blog index, its own route, and the RSS feed. It is not merely unlinked; it does not exist in the build. That is enforced in one place, `src/lib/posts.ts`, so there is no way for a surface to drift and leak a draft.

**Drafts are visible in `bun run dev`**, so you can read and screenshot a post before publishing it. The gate is `import.meta.env.DEV`, which is false in every `astro build` — and a build is the only thing that ever gets deployed, so this cannot leak. If you want to see exactly what will ship, run `bun run build && bun run preview`.

`.mdx` files can import and render `.astro` components. `.md` files cannot. Use `.mdx` by default.

## Things that will bite you

These are load-bearing and each one is written up in `docs/stack.md`:

1. **Do not upgrade TypeScript to 7.x.** `@astrojs/check@0.9.10` peers `^5 || ^6`; TS 7 breaks `astro check`. This looks like an oversight. It is not.
2. **Import `z` from `zod`, never from `astro:content`.** The re-export is deprecated in Astro 7 and emits `ts(6385)` on every schema field.
3. **Do not add an adapter casually.** `@astrojs/vercel` ends the static lock, which is a recorded decision, not a dependency bump.
4. **Astro 7 uses Sätteri, not remark/rehype.** Any markdown plugin (reading time, heading anchors, footnotes) has to be checked against Sätteri rather than assumed. Tracked as TASK-037.
5. **The Rust compiler is strict.** Every non-void element needs a closing tag, and invalid HTML nesting is no longer silently corrected.
6. **`src/fetch.ts` is a reserved filename.** Do not create one.
7. **`compressHTML` defaults to `'jsx'`.** Whitespace between adjacent inline elements gets stripped — **and this is already happening in this repo.** The header nav renders `WritingAbout` and the post listing renders `Why I'm building this in publicAugust 7, 2026`, in both dev and production, because a newline between two `<a>` tags is removed rather than collapsed to a space. Do not patch it with `&nbsp;` — fix it with layout (`flex` + `gap`) during the design pass.
9. **`nvm use` before `bun run dev`.** Nothing enforces `.nvmrc`. Astro's dev server daemonises itself **under Node, not under Bun** — `bun run dev` only means Bun executed the script — so it silently picks up whatever `node` is on `PATH`. Check the Astro dev toolbar's debug info: it should say `Node v24.19.0`.
8. **`bun install` migrates `package-lock.json` automatically** the first time it runs against an npm-installed tree, and produces exact-pin resolutions identical to npm's — verified against all 8 pinned packages (`astro`, `tailwindcss`, `@tailwindcss/vite`, `typescript`, `@astrojs/mdx`, `@astrojs/markdown-satteri`, `zod`, `sharp`, `@astrojs/check`) with zero drift. No `trustedDependencies` entry was needed: `bun pm untrusted` reports 0 untrusted packages with scripts — `sharp`'s native `libvips` binding and `esbuild`'s platform binary both installed and ran correctly under Bun's default trust list. If a future dependency's postinstall gets silently skipped, `bun pm untrusted` is the first thing to check.

## Version archive

Every visual iteration of the canvas stays **live and reachable forever**, not just screenshotted. The evolution is content — the design post shows real pages you can click, not a carousel of PNGs.

```bash
./scripts/cut-version.sh 1 "First design pass"
```

That builds, freezes `dist/` into `archive/v1/`, writes `archive/wrangler.v1.jsonc`, and deploys it as its own Worker.

| Version | Live at |
|---|---|
| **v0** — undesigned scaffold, 2026-08-07 | **[v0.thetoken.dad](https://v0.thetoken.dad)** |

Three decisions in here that are load-bearing:

1. **The archive is the built output, not the source.** Rebuilding a two-year-old Astro tree needs a registry, a Node version and native binaries to all still exist. A frozen `dist/` is ~36KB of static HTML and CSS that renders as long as browsers do. Git tags (`site-v0`) record the source alongside it, but the artifact is what's guaranteed.
2. **One Worker and one hostname per version.** Not a subpath of the live site. Every asset path Astro emits is absolute (`/_astro/…`, `/blog/`), so a version served from `/v/0/` would fetch the *live* stylesheet and render as whatever the current design is — silently destroying the thing the archive exists to show. Cloudflare static assets are free and uncapped, so hostnames are the cheap axis here.
3. **Archives are `noindex`.** `_headers` sets `X-Robots-Tag: noindex, nofollow` and `robots.txt` disallows everything. These two files are the **only** deviation from a byte-exact copy of `dist/` — both non-visual. Without them, every version competes with the live site for identical content in search.

Versions are immutable. `cut-version.sh` refuses to overwrite an existing one.

## Deploy

Three Workers, three configs, one repo. **Only the first is safe to automate.**

| Worker | Config | Serves | Deploys |
|---|---|---|---|
| `thetokendad-site` | `wrangler.jsonc` | `thetoken.dad`, `www.thetoken.dad` | **CI, on push to `main`** |
| `thetokendad-v0` | `archive/wrangler.v0.jsonc` | `v0.thetoken.dad` | **manual, once, never again** |
| `thetokendad-com-redirect` | `redirect/wrangler.jsonc` | `thetokendad.com`, `www.…` | manual — the code never changes |

🔴 **Never put the archive Workers on CI.** Their configs point at `archive/vN/`, a frozen snapshot — but a CI job wired to the wrong config would redeploy them from whatever `dist/` currently holds, silently overwriting a historical version with the present design. That destroys the one thing the archive exists to prove. Archives are deployed once, by hand, by `cut-version.sh`.

### Manual deploys

```bash
bunx wrangler deploy                                      # the live site
bunx wrangler deploy --config redirect/wrangler.jsonc     # the .com redirect
```

### CI deploys (Workers Builds)

Connecting the repo requires authorizing Cloudflare's GitHub App, so it is a one-time dashboard action:

1. Cloudflare → **Workers & Pages** → **`thetokendad-site`** → **Settings** → **Build**
2. **Connect** → authorize the Cloudflare GitHub App → pick **`poktalabs/thetokendad-site`**
3. Configure:
   - **Branch:** `main`
   - **Root directory:** `/`
   - **Build command:** `bun run build`
   - **Deploy command:** `npx wrangler deploy`
4. Save, then push a commit to confirm it fires.

The build image detects Bun from `bun.lock` and reads `.nvmrc` for the Node version — the two files that made the local toolchain reproducible do the same job in CI. `npx wrangler deploy` resolves the **pinned** `wrangler@4.120.0` from `node_modules`, not the latest release, because it is a devDependency.

**Connected 2026-08-08.** Production branch `main`, root `/`, non-production branch builds **disabled**.

### Turning on branch previews (deferred, two steps)

Non-production builds are off because there are no non-production branches yet, and because **the checkbox alone would not work**. Declaring custom domains disabled preview URLs at the Worker level — wrangler says so on every deploy:

> *Because your 'workers.dev' route is disabled and your 'preview_urls' setting is not in your Wrangler file, Preview URLs will be disabled for this deployment by default.*

So enabling only the checkbox uploads versions with no URL to open. When a branch workflow exists — the design pass is the likely trigger — do both:

1. Add `"preview_urls": true` to `wrangler.jsonc`.
2. Tick **Builds for non-production branches**, leaving the command as `npx wrangler versions upload`.

`versions upload` publishes a version *without* promoting it, so `thetoken.dad` keeps serving `main` while the branch gets its own URL. Note those URLs are public — unguessable and short-lived, but a previewed draft technically exists on the internet.

**Custom domains are declared in `wrangler.jsonc`, not the dashboard**, so a CI deploy re-asserts the hostnames rather than depending on state someone clicked once. The whole topology rebuilds from the repo.

## Deploy notes

**Host is undecided — Cloudflare Pages or Vercel.** TASK-036. Whichever it is, this ships as a **plain static site**: no adapter, no framework preset gymnastics beyond Astro's default. `thetoken.dad` is canonical; `thetokendad.com` 301s in.

The undecidedness is deliberate and cheap. Static output plus a `dist/` directory is the most portable thing a build can produce, so the two platforms are a same-day switch and neither is load-bearing on the stack. What actually differs between them — build-image Bun support, redirect and header config, edge behaviour, pricing at zero traffic — is worth measuring rather than assuming, and the comparison is itself a post.

Build command on either platform is `bun run build`, output directory `dist`. Both resolve a Node version for the build image from `.nvmrc` / `engines.node` even when the build itself runs through Bun, which is why those fields are retained.
