# Product — The Token Dad

<!-- impeccable:product-schema 1 -->

status: **frozen for the design run** · 2026-08-08
supersedes: `docs/brand.md`, deleted 2026-08-08 — its visual half was replaced by `docs/design-run/VISION.md`, this file carries the rest unchanged

Non-visual product truth. Nothing here describes how the site should look; that is `VISION.md`'s job and the two are designed not to overlap. Written to Impeccable's `PRODUCT.md` schema because it is a published shape, which means one tool reads it natively and the other three read it as ordinary markdown.

## Platform

Web. Public, static, no app, no login.

## Stack

Astro 7.2.0, static output, no adapter. Tailwind 4.3.3, CSS-first — brand tokens go in a `@theme` block in `src/styles/global.css`, which is the single styling entry point. MDX content collections. No component library, no React, no client-side framework. Deployed to Cloudflare Workers static assets, CI on push.

Four page types exist and no new routes are in scope: home, blog index, blog post, about.

Two build behaviours that are constraints, not preferences:

- `compressHTML: 'jsx'` strips whitespace between adjacent inline elements at build time. Spacing between inline elements must come from `flex`/`gap` — never from a literal space or `&nbsp;`. **This is currently broken on the live site** (the nav renders `WritingAbout`) and fixing it is in scope.
- `trailingSlash: 'always'`. Internal links must agree.

## Users

**Primary, and deliberately weighted: a tired, competent millennial parent who half-follows AI news.** Has no time. Is not a student and should not be addressed as one. Suspects this stuff could hand them back an hour a day.

**Secondary: a DevRel/AI hiring audience.** Explicitly subordinate. The decision on record is *parent-first, even at the cost of hires* — the hiring audience is won by the receipts and the numbers, not by the design signalling competence.

## Product Purpose

**A dad building in public.**

The home page leads with the person and the premise — not a portfolio, not a dashboard. **The blog is the main body of the site.** The showcase, the cost tables and the tutorials are *evidence for the premise*, not the pitch itself.

Rejected, and why:

- *DevRel portfolio with the dad framing as a byline* — optimises for getting hired, but it is not something one parent forwards to another, which is the distribution mechanic the brand was built on.
- *Public lab notebook* — strongest differentiator, but it makes the person secondary and leaves the site empty until experiments land. Survives as a section, not as the frame.

## Positioning

The hook is Mel's own life, not a persona: *everyone knows a dad who forgets things and gets overwhelmed — here's one building his way out.*

**The "the" is load-bearing.** "Token dad" is a category. *The* Token Dad is a specific person who will be wrong in public, on the record, with his name on it.

The site is a **creative outlet**. Not a portfolio and not a sales surface. This is a hard constraint, stated by Mel, and it outranks any instinct to make the site convert.

## Operating Context

English only for v1. No i18n routing, no `/es/` tree, no locale config — adding it later is a route change, not an architecture change.

`thetoken.dad` is canonical. `thetokendad.com` exists to catch the reflex typo and 301s in, preserving path and query. The handle is `@thetokendad` — no dot.

This site is one of three separate rooms. It feeds builders toward the community brand rather than competing with it, and does not blend into the commercial/clinical brand. Nothing on this site should read as either of those.

## Capabilities and Constraints

- **Static. No server routes.** There is nowhere to POST, so there is no email capture and no form. RSS and Instagram are the only follow mechanics that exist today.
- **No new routes** beyond the four page types above.
- **Content is fixed.** Two real posts, published or staged. No lorem ipsum, no invented copy, and post prose must not be rewritten.
- Design may touch `global.css`, the two layouts, and the four page files. Nothing else.

## Brand Commitments

- **Real numbers over adjectives.** "$16.18" beats "surprisingly expensive." Every published number carries its method.
- **Publish what didn't work.** That is the differentiator, not a disclaimer. A wrong number already got corrected in public and that will happen again.
- **First person. Short sentences. Concrete nouns.**
- **No em-dash-heavy AI cadence**, no "in today's fast-paced world", no rule-of-three flourishes.
- **Warm and specific, not corporate and not smug.** The reader is tired; don't make them work for the joke.
- **Self-deprecating about the dad part, precise about the technical part.** Credibility comes from the numbers being real; warmth comes from admitting what broke.
- **Fun is not the same as loud.** It shows up as personality, pacing and detail — not as neon and animation for their own sake.
- **The reader is a peer, not a student.**

## Evidence on Hand

- *"Why I'm building this in public"* — published 2026-08-08, the genesis post.
- *"I deployed the same site to two hosts and got two different URL structures"* — ~1,800 words, staged, publishing shortly. The site's primary reading surface is a post of about this length.
- `v0.thetoken.dad` — the undesigned day-zero canvas, frozen at a permanent URL. Every subsequent version is archived the same way.
- Measurement records with methods attached, for hosting and for package managers.

## Product Principles

1. The premise is the person. Evidence supports it; it does not replace it.
2. Receipts over claims. If a number appears, its method appears with it.
3. Corrections are published, not quietly patched.
4. The parent is the reader. Everything else is a side effect.
5. Nothing ships that the author would be embarrassed to have shared onward.

## Accessibility & Inclusion

Not previously specified, and **left open rather than guessed**. The floor every design tool already enforces applies: body text ≥ 4.5:1 contrast, large text ≥ 3:1, visible focus states, motion respecting `prefers-reduced-motion`. Anything beyond that floor is a tool's own call and is one of the things being compared.
