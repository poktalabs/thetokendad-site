# Design System — The Token Dad

Produced by `/design-consultation` on 2026-08-19. The single source of truth for the look of `thetoken.dad`. Read this before making any visual change.

## Product Context

- **What this is:** A personal site and blog. A dad building in public. Explicitly a creative outlet, not a portfolio and not a sales surface.
- **Who it's for:** Primary, and deliberately weighted — a tired, competent millennial parent who half-follows AI news, has no time, and is a peer rather than a student. Secondary and explicitly subordinate — a DevRel/AI hiring audience.
- **Space/industry:** Personal publishing. Adjacent to developer blogs and to parenting content, belonging cleanly to neither.
- **Project type:** Marketing-ish home page plus an editorial blog. The blog is the main body, and the primary surface is a post of about 1,800 words.
- **The memorable thing:** *"We're all growing constantly, and at this stage of my life I have to BALANCE my family commitments with my interests: I need to become an artist who uses his creativity to build cool stuff to support my role as a parent."*

## The North Star

**A token is a disc.** The site is called The Token Dad, a token is a stamped disc, the Mexico City metro ran on them, and every mark in this system is a disc stamped with a different face. That single idea carries the identity, the wayfinding, the arrival motion and the favicon, and it is why the glyph system reads as a language rather than as an icon set.

The site behaves like signage in a dark museum: a large quiet ground, hairlines instead of boxes, and a small number of fully saturated marks that carry all the meaning.

## Aesthetic Direction

- **Direction:** Editorial wayfinding. Museum signage lineage (Lance Wyman's 1968 Mexico Olympics and the metro pictograms that followed it) applied to a reading site.
- **Decoration level:** Minimal. Typography, hairlines and pictograms only. There is not one decorative element anywhere in the system.
- **Mood:** Vibrant and relaxing at the same time, resolved by **area** rather than by compromise. The accent is fully saturated and occupies under five percent of the pixels; the other ninety-five percent is still, monotone and unhurried. That is exactly how the dense-but-unhurried music references work.
- **Elevation and depth philosophy:** There is none. The site is flat printed matter. No shadows, no blur, no gradients, no glows. The only depth cue in the entire system is the weight of a hairline and the value step between `ground` and `lift`.
- **Component philosophy:** There are no components in the framework sense. There are four page types, one shell, and one glyph sprite. Nothing is a card. Nothing has a border radius.

## Typography

Three variable families, self-hosted from `@fontsource-variable/*` at exact pins. `standard.css` is imported for each because it carries every registered axis; `unicode-range` in each `@font-face` means a latin reader downloads one file per family.

- **Display / headings / UI labels:** **Archivo Variable** 5.3.0 (`@fontsource-variable/archivo`, axes `wght` 100-900 and `wdth` 62-125). Omnibus-Type, Buenos Aires. Built on American gothic *signage* lineage and shipped with a real width axis, which is why it earns the slot over a neutral UI sans: station labels and display lines can be the same voice at different widths. Its figures are strong, which matters on a site whose brand commitment is real numbers over adjectives.
- **Body / all long-form:** **Piazzolla Variable** 5.3.0 (`@fontsource-variable/piazzolla`, axes `wght` and `opsz`, roman and italic). Huerta Tipográfica, Buenos Aires. Drawn for extended screen reading with a slightly irregular rhythm that keeps 1,800 words from reading like documentation. Deliberately not one of the reflex display serifs.
- **Meta / dates / labels / data / code:** **Martian Mono Variable** 5.3.0 (`@fontsource-variable/martian-mono`, axes `wght` 100-800 and `wdth` 75-112.5). Reads as instrument labelling rather than as a terminal, which is the museum register. Width axis is used: 100% for tracked uppercase labels, 87.5% for table cells and inline code, 75% for code blocks.
- **Loading:** self-hosted, `font-display: swap`, no CDN, no JS loader, no network request to a third party.

The assignment is deliberately the inverse of the reflex: **sans display, serif body.** A long-form reading surface wants a text serif; signage wants a grotesque. Museums do exactly this — sans on the wall, serif in the catalogue.

### Scale

| Role | Value | Family |
|---|---|---|
| Home title | `clamp(2rem, 1.25rem + 3vw, 3rem)`, wght 600, `font-stretch: 112%` | Archivo |
| Post title | `clamp(1.75rem, 1.15rem + 2.5vw, 2.5rem)`, wght 600, `font-stretch: 106%` | Archivo |
| Prose h2 | `1.5rem`, wght 600, `font-stretch: 104%` | Archivo |
| Prose h3 | `1.1875rem`, wght 600, `font-stretch: 104%` | Archivo |
| Rail title | `1.3125rem`, wght 600, `font-stretch: 106%` | Archivo |
| Lede | `1.3125rem` / 1.55 | Piazzolla |
| Body | `1.1875rem` (19px) / 1.75 | Piazzolla |
| Rail dek | `1rem` / 1.6 | Piazzolla |
| Meta / labels | `0.6875rem` (11px), uppercase, `letter-spacing: 0.14em`-`0.18em` | Martian Mono |
| Table cell | `0.75rem`, `font-stretch: 87.5%`, `tabular-nums` | Martian Mono |
| Code block | `0.8125rem` / 1.7, `font-stretch: 75%` | Martian Mono |

Headings carry `text-wrap: balance`; prose and deks carry `text-wrap: pretty`. Global letter-spacing on headings is `-0.012em`.

## Color

**Approach:** restrained. Two hues plus neutrals, with fixed roles. Colour is never mood; it is always information.

The neutral pair is the quiet half of "vibrant and relaxing": a **cool near-black ground under a warm ivory ink** in dark, and a **warm limestone paper under a cool near-black ink** in light. The tension lives at the neutral level, so the accent never has to shout.

### Dark — the real theme, and the default when the reader has no stated preference

| Token | Hex | Role | Contrast on ground |
|---|---|---|---|
| `--c-ground` | `#0b0d12` | page | — |
| `--c-lift` | `#141821` | code blocks, quoted matter | 1.1 |
| `--c-rule` | `#262d3a` | hairlines, the only depth cue | 1.4 |
| `--c-ink` | `#edeae3` | body and headings | **16.2:1** |
| `--c-muted` | `#949caa` | deks, meta, secondary | **7.0:1** |
| `--c-mark` | `#4c79ff` | glyph strokes, focus ring, rules | 4.4:1 (graphical, floor 3:1) |
| `--c-link` | `#7fa0ff` | link text | **7.8:1** |
| `--c-alert` | `#ff4b3a` | corrections only; appears almost never | **5.9:1** |

### Light — a second design, not an inversion

| Token | Hex | Role | Contrast on ground |
|---|---|---|---|
| `--c-ground` | `#f4f1e9` | limestone paper, never white | — |
| `--c-lift` | `#eae6da` | code blocks, quoted matter | 1.1 |
| `--c-rule` | `#d2cbba` | hairlines, warmer and heavier | 1.3 |
| `--c-ink` | `#12141a` | body and headings | **16.3:1** |
| `--c-muted` | `#585e6a` | deks, meta, secondary | **5.8:1** |
| `--c-mark` / `--c-link` | `#1b3fd8` | ink-strength ultramarine, one value for both | **6.8:1** |
| `--c-alert` | `#c0271a` | corrections only | **5.3:1** |
| `--c-knock` | `#f4f1e9` | the knockout colour inside an enamel plaque | — |

**What makes light a redesign rather than an inversion:** on dark, a token is line art — a blue ring floating in the void. On light, the same token becomes a **solid blue enamel plaque with the mark knocked out in paper**, which is how the CDMX station signs are actually manufactured. The link and mark blues collapse to a single ink-strength value on paper because a paper ground does not need two. The hairlines get warmer and read heavier. Nothing about the light theme is `filter: invert()`.

**Theming mechanism:** `prefers-color-scheme` only. There is no toggle, because a toggle needs client-side JavaScript this stack does not have, and because a control is a thing to notice on a site whose whole thesis is having few things to notice. `color-scheme: dark light` is declared so form controls and scrollbars follow.

## The Glyph System

The recurring idea in the vision, implemented as an actual language rather than as decoration.

**Construction.** Ten marks on a strict 24-unit grid, built from five primitives only — circle, solid dot, rule, square, diagonal — so they read as one family the way the 1968 pictograms do. Strokes are 2 units, `stroke-linecap: square`, `stroke-linejoin: miter`, colour is `currentColor` so the marks are theme-aware for free. Delivered as **one inline SVG `<symbol>`/`<defs>` sprite** emitted once in `BaseLayout.astro` and referenced with `<use href="#s-name">`. Zero network requests, zero JavaScript, no icon font.

**Two grammatical forms.**

- A **stamp** is the mark alone, at 16-34px. It means *a subject*.
- A **token** is a stamp inside a ring, at 18px (masthead) or 72-112px (plate). It means *a place*. The ring is the disc; the stamp is what is struck into it.

**The section stamps** — page identity, used in the plate token:

| Stamp | Geometry | Means |
|---|---|---|
| `home` | solid dot, centred | you are here |
| `writing` | three horizontal rules | the index |
| `about` | dot above a vertical rule | the information mark |

**The topic stamps** — used beside every post, in the index and in the post header:

| Stamp | Geometry | Tags that map to it |
|---|---|---|
| `origin` | an axis corner with a solid dot at the origin | genesis, building in public |
| `route` | three nodes on a line | hosting, cloudflare, vercel, deploy |
| `frame` | a square inside a square | astro, stack, build |
| `measure` | a vertical rule with three graduated ticks | receipts, cost, numbers |
| `repair` | a broken rule, offset, with a stitch — **renders in `--c-alert`** | correction, postmortem |
| `mark` | an open lozenge | anything unmapped |

**How the reader learns it, wordlessly.** A post header shows stamp *and* tag word together, once. The index then shows the stamp alone. By the second visit the reader reads the index without reading it. `about` carries **the key** — the six topic stamps with their one-word names — for the reader who noticed there was a system; the reader who did not notice loses nothing by walking past.

**A post page carries its own subject, not a generic "post" mark**, the way a metro station carries its own pictogram rather than a generic station symbol. There is deliberately no `post` glyph.

## Spacing & Layout

- **Base unit:** 4px, with a 2px half-step permitted only at meta scale (the 11px label line, the wordmark gap, hairline offsets), where a 4px jump is visibly coarse. Everything at body scale and above is a clean multiple of 4px. Stated honestly because the alternative — claiming a pure 4px grid the stylesheet does not keep — is a spec that lies.
- **Density:** gallery. Generous everywhere, consistent from the home page to a long post, few things per screen.
- **Composition:** symmetric and calm. One centred column. The **plate** — token, page name, one line of wall text — is centred on every page type without exception. Everything below the plate is left-aligned inside that centred column. Centred *composition*, left-aligned *reading*: that is how the vision's symmetry is honoured without falling into the centred-everything slop pattern.
- **Widths:** `--spacing-rail: 42rem` for the shell, `--spacing-measure: 36rem` for prose (about 64 characters at 19px Piazzolla), `1.5rem` inline padding.
- **Vertical rhythm:** `main` padding 4.5rem/6rem mobile and 7rem/9rem desktop. Section dividers 4rem mobile, 5.5rem desktop. Rail rows 2rem. Prose paragraph gap 1.5rem, h2 top 3.5rem, h3 top 2.5rem.
- **Border radius: 0, everywhere.** Signage is sharp.
- **Breakpoints:** one, at `48rem`, and nothing else. The glyph key sizes itself with `auto-fit` inside a bounded track rather than taking a second breakpoint.

## Motion

- **Approach:** one authored moment on arrival, then permanent stillness.
- **The moment:** the page's token is **struck**. The ring draws itself around over 560ms via `stroke-dashoffset` on a `stroke-dasharray: 133` circle rotated `-90deg` so it starts at twelve o'clock; the stamp lands inside it at 340ms on a 220ms opacity step; the page title, lede and meta settle in over 400ms with 100/180/240ms delays, rising 6px. Total about 640ms. Easing is `cubic-bezier(0.2, 0.7, 0.2, 1)` (`--ease-strike`) for anything spatial, linear for the opacity step. `animation-fill-mode: both`, so a mid-flight arrival never shows a blank.
- **After that, nothing on this site ever moves.** No scroll reveals, no hover transforms, no transitions on layout properties, no parallax. The masthead token is furniture and is explicitly excluded from the animation.
- **State, not motion:** links transition `color` and `text-decoration-color` over 120ms and thicken their underline on hover. That is the entire remaining motion budget.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` sets every animation to `none` and clears the dash array, so the resting state is what renders. Link transitions are dropped too.

## States

- **Focus:** `2px solid var(--color-mark)` with `3px` offset, on `:focus-visible`. Never removed.
- **Hover:** links change colour and underline thickness. Rail rows tint their title and nothing else moves.
- **Current page:** the masthead nav link carries `aria-current="page"` and takes the link colour.
- **Visited:** a post already read drops its rail title from `--color-ink` to `--color-muted`, and returns to the link colour on hover. Value, not a new hue, so a returning reader can see what they have read without a word being spent on it.
- **Selection:** `--color-mark` ground with `--color-ground` text.
- **Empty:** "Nothing published yet." in muted, in the rail's own slot. Designed, not a fallback.

## Accessibility

Above the floor the brief set, this design commits to: a **skip link** that sits off-canvas until focused and then renders as a mark-coloured plaque in the top-left, targeting `main` (a keyboard reader otherwise passes the wordmark and the whole nav before reaching an 1,800 word post); a **44px minimum hit area** on the wordmark, both nav links, the RSS link and the rail-more link, achieved with `min-height`/`min-width` so the 11px labels and the 18px mark keep their size and only the target grows; every glyph is `aria-hidden` and never the sole carrier of meaning (a stamp always sits beside real text on the surface that teaches it); nav uses a real `<nav aria-label>` with a list; `aria-current="page"` marks position; heading order is unbroken on every page type; the reduced-motion path renders the resting frame rather than a shortened animation; body text is 19px, well above the 16px floor; and colour is never the only encoding — `repair` is the one stamp that uses a second hue, and it is also the only stamp with a distinct silhouette.

Deliberately **not** done: inline links inside prose are left at their natural ~27px height. WCAG 2.5.8 exempts links inline in a sentence, and inflating them would break the line rhythm of the reading surface, which is this site's primary asset.

## Files

The design lives in exactly seven files. `src/styles/global.css` is the single styling entry point and holds the `@theme static` block; `src/layouts/BaseLayout.astro` owns the shell, the sprite and the plate; `src/layouts/PostLayout.astro` owns the post header; `src/pages/index.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[...slug].astro` and `src/pages/about.astro` are the four page types.

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-08-19 | Initial design system created | `/design-consultation`, working from `VISION.md` + `PRODUCT.md` and its own design knowledge. No web research, by the human's instruction. |
| 2026-08-19 | Sans display, serif body — the inverse of the reflex | The primary surface is a 1,800 word post, so the reading face must be a text serif; signage is sans. Also the least likely way to land on an obvious AI serif. |
| 2026-08-19 | Two hues, not four | Three independent voices converged on blue plus a very restricted red. A four-hue palette on a gallery-dense page is the fastest route to "loud", which the vision fences off. |
| 2026-08-19 | Light theme re-manufactures the glyphs as enamel plaques | The clearest possible proof that light is its own design and not an inversion, and it is how the reference signage is actually made. |
| 2026-08-19 | No theme toggle | Needs client-side JS the stack forbids, and adds a control to a site whose thesis is having few controls. |
| 2026-08-19 | No generic `post` glyph | A post page carries its own subject stamp. Removes an arbitrary mark and ties the large plate to the small mark the reader already met in the index. |
| 2026-08-19 | Code blocks are monochrome | Astro's Shiki ships `github-dark` as inline styles. A rainbow of unmanaged hues inside a two-hue system is exactly the bad palette selection this design exists to avoid. |
| 2026-08-19 | 44px hit areas, skip link, visited state added | `/design-review`, confirmed across two independent voices. All three are additions the vision left to the tool ("accessibility beyond the floor" was an open axis). |
| 2026-08-19 | The About page keeps its placeholder | `/design-review` asked for a real bio to be written. Refused: inventing biographical copy about a real person is outside what a design pass may do. The page gets an honest empty state and the key instead, and the placeholder is escalated as a content blocker. |
