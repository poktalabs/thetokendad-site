# thetoken.dad — the canvas

The official site for **The Token Dad**. Static marketing + blog, built by hand.

This is *surface 1* of the `thetokendad-website` workstream. Surface 2 — the **showcase**, where each Nebius Token Factory model builds its own version of a site from a free brief — is a separate thing entirely and does not live in this repo.

- **Workstream:** `../../workstreams/thetokendad-website/`
- **Stack lock and rationale:** `../../workstreams/thetokendad-website/docs/stack.md`
- **Decision record:** `../../workstreams/thetokendad-website/DECISIONS.md`
- **Build log (how this repo got here):** `../../workstreams/thetokendad-website/docs/build-log.md`

## Running it

Node **24.19.0** is required — `.nvmrc` and `engines.node` both pin it, and the stack was verified on it.

```bash
nvm use            # reads .nvmrc → 24.19.0
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run check      # astro check — must stay at 0 errors / 0 warnings / 0 hints
npm run preview    # serve dist/
```

The gate before anything is considered done: **`npm run build` clean and `npm run check` at 0/0/0.**

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

`draft: true` removes the post from **every** surface — the home page, the blog index, its own route, and the RSS feed. It is not merely unlinked; it does not exist in the build. That is enforced in one place, `src/lib/posts.ts`, so there is no way for a surface to drift and leak a draft.

`.mdx` files can import and render `.astro` components. `.md` files cannot. Use `.mdx` by default.

## Things that will bite you

These are load-bearing and each one is written up in `docs/stack.md`:

1. **Do not upgrade TypeScript to 7.x.** `@astrojs/check@0.9.10` peers `^5 || ^6`; TS 7 breaks `astro check`. This looks like an oversight. It is not.
2. **Import `z` from `zod`, never from `astro:content`.** The re-export is deprecated in Astro 7 and emits `ts(6385)` on every schema field.
3. **Do not add an adapter casually.** `@astrojs/vercel` ends the static lock, which is a recorded decision, not a dependency bump.
4. **Astro 7 uses Sätteri, not remark/rehype.** Any markdown plugin (reading time, heading anchors, footnotes) has to be checked against Sätteri rather than assumed. Tracked as TASK-037.
5. **The Rust compiler is strict.** Every non-void element needs a closing tag, and invalid HTML nesting is no longer silently corrected.
6. **`src/fetch.ts` is a reserved filename.** Do not create one.
7. **`compressHTML` defaults to `'jsx'`.** Whitespace between adjacent inline elements gets stripped. Watch for lost spaces in typography-heavy sections.

## Deploy

Vercel, as a plain static site — no adapter, no framework preset gymnastics beyond Astro's default. `thetoken.dad` is canonical; `thetokendad.com` 301s in. Not wired yet — TASK-036.
