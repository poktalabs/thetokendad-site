---
name: The Token Dad
description: An instrument faceplate — enamelled panel, silkscreen caps, engraved hairlines, coded channel colour, and an authored glyph legend.
colors:
  panel: "#14181e"
  plate: "#1b212a"
  engrave: "#313c4a"
  silk: "#ece9e3"
  label: "#97a2b1"
  ch-source: "#2fbfa0"
  ch-meter: "#f2a93b"
  ch-signal: "#9a86f5"
  bay-a: "#2fbfa0"
  bay-b: "#9a86f5"
  bay-c: "#f2a93b"
  field: "#0e5f57"
  field-signal: "#342a6e"
  field-ink: "#ece9e3"
  field-mute: "#bcd6d0"
  field-mark: "#6fe0c2"
  readout: "#12171f"
  readout-edge: "#2b3542"
  readout-ink: "#e6e3dd"
  readout-a: "#4fd0b2"
  readout-b: "#a996ff"
  readout-c: "#8d99a8"
  readout-d: "#ffc46b"
  readout-e: "#ff8a75"
typography:
  display:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "clamp(2.5rem, 8.5vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 88"
  headline:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 680
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 90"
  section:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 92"
  page-header:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "clamp(1.875rem, 4.5vw, 3rem)"
    fontWeight: 660
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 92"
  title:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "clamp(1.375rem, 2.8vw, 2rem)"
    fontWeight: 620
    lineHeight: 1.12
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 94"
  prose-heading:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 94"
  prose-subheading:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 680
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 94"
  body:
    fontFamily: "'Faustina Variable', ui-serif, Georgia, serif"
    fontSize: "clamp(1.0625rem, 0.35vw + 1rem, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  lede:
    fontFamily: "'Faustina Variable', ui-serif, Georgia, serif"
    fontSize: "clamp(1.0625rem, 0.5vw + 0.95rem, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  wordmark:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 86"
  nav:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 88"
  label:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 620
    letterSpacing: "0.16em"
    fontVariation: "'wdth' 84"
  micro:
    fontFamily: "'Archivo Variable', ui-sans-serif, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 620
    letterSpacing: "0.2em"
    fontVariation: "'wdth' 84"
  readout:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3rem)"
  rail-h: "3.5rem"
  measure-wide: "68rem"
  measure-read: "36rem"
  measure-lede: "34rem"
  legend-max: "46rem"
  stack-page: "clamp(4rem, 9vw, 7.5rem)"
  stack-section: "clamp(2.25rem, 4.5vw, 3.5rem)"
  stack-post: "clamp(2.75rem, 6vw, 4.25rem)"
  stack-channel: "clamp(2.5rem, 5vw, 4rem)"
  stack-legend: "clamp(1.75rem, 4vw, 2.75rem)"
  field-pad-block: "clamp(3rem, 8vw, 6rem)"
  field-pad-inline: "clamp(1.5rem, 6vw, 4.5rem)"
  field-sm-pad-block: "clamp(2.25rem, 5.5vw, 3.75rem)"
  field-sm-pad-inline: "clamp(1.5rem, 5vw, 3rem)"
  ground-pad: "2rem"
components:
  rail:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.silk}"
    height: "3.5rem"
    padding: "0 clamp(1.25rem, 5vw, 3rem)"
    rounded: "{rounded.none}"
  rail-nav-link:
    textColor: "{colors.label}"
    typography: "{typography.nav}"
    padding: "0.5rem 0"
    rounded: "{rounded.none}"
  rail-nav-link-hover:
    textColor: "{colors.silk}"
  rail-nav-link-current:
    textColor: "{colors.silk}"
  switch:
    backgroundColor: "{colors.plate}"
    width: "34px"
    height: "18px"
    padding: "0"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.field-ink}"
    typography: "{typography.display}"
    padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4.5rem)"
    rounded: "{rounded.none}"
  field-sm:
    backgroundColor: "{colors.field}"
    textColor: "{colors.field-ink}"
    typography: "{typography.page-header}"
    padding: "clamp(2.25rem, 5.5vw, 3.75rem) clamp(1.5rem, 5vw, 3rem)"
    rounded: "{rounded.none}"
  channel:
    backgroundColor: "transparent"
    textColor: "{colors.silk}"
    typography: "{typography.title}"
    padding: "clamp(2.5rem, 5vw, 4rem) 0 0"
    rounded: "{rounded.none}"
  panel-link:
    backgroundColor: "transparent"
    textColor: "{colors.label}"
    typography: "{typography.label}"
    padding: "0.75rem 1.25rem"
    rounded: "{rounded.none}"
  panel-link-hover:
    textColor: "{colors.silk}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.label}"
    typography: "{typography.micro}"
    padding: "0.3125rem 0.625rem"
    rounded: "{rounded.none}"
  pending:
    backgroundColor: "transparent"
    textColor: "{colors.label}"
    padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3rem)"
    rounded: "{rounded.none}"
  code-inline:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.silk}"
    padding: "0.1em 0.35em"
    rounded: "{rounded.none}"
  code-block:
    backgroundColor: "{colors.readout}"
    textColor: "{colors.readout-ink}"
    typography: "{typography.readout}"
    padding: "1.125rem 1.25rem"
    rounded: "{rounded.none}"
  ground:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.label}"
    typography: "{typography.label}"
    padding: "2rem 0"
    rounded: "{rounded.none}"
---

# Design System: The Token Dad

## Overview

**Creative North Star: "The Instrument Faceplate"**

The site is a panel off a piece of well-made equipment: a dark enamelled board, silkscreened micro-caps, hairlines engraved rather than drawn, saturated colour used as code rather than as decoration, and a printed legend that teaches the reader the symbols before the words. Density lives in the *production* — the labels, the registration ticks, the coded channels, the authored symbol set. The *listening* stays unhurried: gallery-scale spacing, symmetric centred composition, one authored moment on arrival and then complete stillness. The reader is a tired parent, not a student; the panel does the signalling so the prose does not have to. All four page types open on the same enamel plate, so no surface arrives on bare board.

The world is deliberately positioned against two references, and both refusals are load-bearing. It refuses **the dated blog column** — display serif masthead, hairline rule under a kicker, a list of dated links — because that shape reads as a publication rather than a person. It equally refuses **the terminal mono grid**, the opposite cliché, where monospace is worn as a costume to signal technical credibility. Here monospace exists in exactly one place: inside actual code, on a lit readout that never changes with the theme. Everything else that looks technical is a real drawn symbol or a real hairline.

There are two themes and neither is a tint of the other. **Both themes drench the plate; what flips is the value relationship** — the dark theme lays light ink on a deep enamel, the light theme lays dark ink on a pale one. The channel hues are re-picked for a pale board rather than lightened copies of the dark set. One thing is genuinely fixed across both: the readout, because a code block does not change when you turn the room lights on. The three ribbon bays are re-picked like everything else, but they stay fully saturated rather than being muted for legibility, because they carry no text. (The stylesheet comment claims the bays do not change; the tokens say otherwise, and the tokens are the build.)

**Key Characteristics:**
- Flat by construction: no gradient, no glow, no shadow, no blur, no border-radius anywhere in the system.
- Structure is carried entirely by 1px engraved hairlines, generous vertical air, and centred symmetry.
- Two variable faces, one voice each: Archivo for every printed panel label from 10px caps to the 84px title, Faustina for every word the reader actually reads.
- Colour is a code, not a palette: a post's tags derive its glyph and its hue together, so shape and hue always agree — and the three-bay ribbon at the top of every page carries the same three channel hues in the printed Key's own order.
- Nine authored SVG glyphs on a shared 24×24 grid, decoded in a printed Key on the home page.
- Every page type opens on the enamel plate: the hero at display scale, the blog index and About at page-header scale.
- One arrival animation in three staged parts, then the site is still — nothing animates on scroll, and hover changes only colour and stroke weight.

## Colors

A blue-slate enamel ground carrying a drenched enamel plate on every page, three saturated coded channel hues, and a fixed lit readout that ignores the theme entirely. Twenty-four colour tokens, all of them consumed — there is no unreferenced colour in the system.

Every token below is declared in the `@theme static` block of `src/styles/global.css` as `--color-<name>` and re-declared, with the light values, in **both** `@media (prefers-color-scheme: light) :root:not([data-theme='dark'])` and `:root[data-theme='light']`. The frontmatter carries the dark value (the real theme); the light value is given here per token.

### Primary

- **Drenched Teal Field** (`field`, dark `#0e5f57` / light `#7ec0ad`): the source channel's enamel, and the default plate colour. Carries the home hero at display scale and the About header at page-header scale. A page plate is the only large area of colour anywhere.
- **Drenched Violet Field** (`field-signal`, dark `#342a6e` / light `#bdb2ef`): the writing channel's enamel, on the blog index header. It is never applied directly — `.field-signal` rebinds `--color-field` to it, so one plate implementation serves both channels.
- **Field Ink** (`field-ink`, dark `#ece9e3` / light `#0f1c1a`): the title and registration ticks laid on the field.
- **Field Mute** (`field-mute`, dark `#bcd6d0` / light `#22403a`): the premise line under the title, on the field only.
- **Field Mark** (`field-mark`, dark `#6fe0c2` / light `#0a4d43`): the drawn mark on the **home hero only**. Brighter than the ink in dark, darker than the ink in light — in both cases the one thing on that plate that reads as *drawn*. Page-header plates deliberately do not get it: their glyph is knocked out in `field-ink`, so the hero stays singular.

### Secondary — the coded channels

Three hues, each permanently bound to one glyph. See **The Agreement Rule**.

- **Source Teal** (`ch-source`, dark `#2fbfa0` / light `#0a6a5e`): the genesis / origin channel. Also the site's ambient accent — the rail mark, the nav underline on hover and `aria-current`, the switch knob on hover, the `panel-link` hover border, `::selection` background, and the fallback channel colour inside prose that has no channel set.
- **Meter Amber** (`ch-meter`, dark `#f2a93b` / light `#8a5a06`): the receipts / measured channel. Also the **only** focus-visible outline colour, site-wide.
- **Signal Violet** (`ch-signal`, dark `#9a86f5` / light `#4f3ab8`): the default writing channel — any post that is neither receipts nor genesis.

### Tertiary — ribbon bays

The three flat segments of the 4px ribbon at the top of every page — **one bay per coded channel, in the printed Key's own order**, so the site's wordless mark decodes against the legend rather than standing for nothing. They carry no text, so they stay saturated in **both** themes instead of being darkened for contrast. They are separate tokens from the channel hues because they answer to the ribbon's layout, not to any one post.

- **Bay A** (`bay-a`, dark `#2fbfa0` / light `#0e8f78`): source teal, widest segment, `flex: 6`.
- **Bay B** (`bay-b`, dark `#9a86f5` / light `#5a45c4`): writing violet, `flex: 4`.
- **Bay C** (`bay-c`, dark `#f2a93b` / light `#d08a10`): measured amber, `flex: 3`.

### Neutral

- **Panel Slate** (`panel`, dark `#14181e` / light `#e9ebe9`): the board itself. Set on both `html` and `body`; also the rail background and the `::selection` foreground.
- **Plate** (`plate`, dark `#1b212a` / light `#d7ddd8`): the one raised-but-flat surface tone. Used for the switch body and inline code backgrounds. This is the system's entire depth vocabulary.
- **Engrave** (`engrave`, dark `#313c4a` / light `#b8c1bb`): every 1px hairline in the system — rail underline, channel row tops, post-head underline, endmark top, footer top, `pending` border, `panel-link` border, tag borders, `hr`, table body rules, switch border, and the `.sep` slash in meta rows.
- **Silk** (`silk`, dark `#ece9e3` / light `#131a19`): primary ink. Body text colour, every heading, prose body, link text, hover state for label-coloured links.
- **Label** (`label`, dark `#97a2b1` / light `#556059`): secondary ink. Every silkscreen micro-cap (nav, meta, legend, tags, footer, table heads), every lede and channel description, the `pending` block, prose `h3`, blockquotes, and every glyph that is *not* channel-coded.

### Fixed — the readout

A code block is the panel's lit display. A display does not change when you turn the room lights on, so **these eight tokens are declared once and never re-declared in either light-theme block.** They hold their dark values in both themes.

- **Readout Ground** (`readout`, `#12171f`): `pre` background.
- **Readout Edge** (`readout-edge`, `#2b3542`): the 1px border around `pre`. Note this is the one hairline in the system that is *not* `engrave`.
- **Readout Ink** (`readout-ink`, `#e6e3dd`): default code text.
- **Readout A** (`readout-a`, `#4fd0b2`): strings and inserted content.
- **Readout B** (`readout-b`, `#a996ff`): functions and entities.
- **Readout C** (`readout-c`, `#8d99a8`): comments. Deliberately lifted off the imported palette's grey, which does not clear the contrast floor.
- **Readout D** (`readout-d`, `#ffc46b`): constants and parameters.
- **Readout E** (`readout-e`, `#ff8a75`): keywords.

The syntax highlighter ships `github-dark` as inline `style` attributes. Those are remapped onto the readout tokens with attribute selectors on the literal source hex (`#E1E4E8` → ink, `#9ECBFF`/`#85E89D` → a, `#B392F0` → b, `#6A737D` → c, `#79B8FF`/`#FFAB70` → d, `#F97583` → e), each with `!important`. If the highlighter theme changes, this map must be re-derived — it is keyed to source values, not to token names.

### Named Rules

**The Agreement Rule.** A post's channel is derived from its own tags, and the derivation returns the glyph and the colour together, from one function, in one place: `tags.includes('receipts')` → `g-meter` + `ch-meter`; else `tags.includes('genesis')` → `g-source` + `ch-source`; else `g-signal` + `ch-signal`. The result is written to the row's root as an inline `--color-ch` custom property, and every coded element on that row reads `var(--color-ch)`. Shape and hue always agree, so the code never depends on colour alone, and a colour-blind reader loses nothing. Never introduce a channel colour without its glyph, and never let a surface pick a channel hue independently of the glyph it shows. Section heads obey the same rule: `.head svg` reads `var(--color-ch, var(--color-label))`, so a head that names a channel sets `--color-ch` inline and its glyph matches the Key at the point of use, not only inside the Key.

**The One Field Rule.** Exactly one drenched colour field exists **per page** — the home hero at display scale, the blog index and About headers at page-header scale via `.field-sm`. It is always the page's opening surface, never a mid-page band, and every surface below it is `panel` with hairlines on it. A second field on the same page would make the first stop meaning anything.

**The Coded Enamel Rule.** A plate's enamel *is* its channel code. The home page and About are the source channel and take `field`; the writing index is the writing channel and takes `field-signal` via the `.field-signal` modifier. Because the plate has already stated the hue, the glyph on a coded enamel is knocked out in `field-ink` and never re-states it — only the home hero's mark carries `field-mark`. A new page type picks its enamel from its channel, never for variety.

**The Fixed Readout Rule.** Code blocks do not theme. The eight `readout-*` tokens are declared once, in the base `@theme` block, and never re-declared in a light-theme block. A future surface that is genuinely an instrument display (a log, a meter, a terminal capture) may join them; ordinary content may not.

**The Saturated Bay Rule.** The ribbon's three bays are re-picked for the light board like every other themed token, but they keep their full saturation because they carry no text and therefore have no contrast obligation. There is one bay per coded channel, in the Key's order — source, writing, measured — so adding a bay means adding a channel, and adding a channel means authoring its glyph. Every token that *does* carry or sit behind text is re-picked for the pale board rather than lightened.

## Typography

**Panel Font:** Archivo Variable — `@fontsource-variable/archivo@5.3.0`, imported as `@fontsource-variable/archivo/wdth.css`. The published face declares `font-weight: 100 900` and `font-stretch: 62% 125%`, i.e. both `wght` and `wdth` axes are live. **The design uses only `wdth` 84–94 of that range** — 84 on the tightest tracked micro-caps, 94 on running headings — with 100 as the `body` default. The remaining 62–125 is headroom the system deliberately does not spend. Stack: `'Archivo Variable', ui-sans-serif, sans-serif` (token `--font-panel`).

**Read Font:** Faustina Variable — `@fontsource-variable/faustina@5.3.0`, imported as `@fontsource-variable/faustina/wght.css` **and** `@fontsource-variable/faustina/wght-italic.css`. `font-weight: 300 800`, `wght` axis only; the italic file exists so blockquote italics are real italics, not a synthesised slant. Stack: `'Faustina Variable', ui-serif, Georgia, serif` (token `--font-read`).

**Mono:** no webfont. System stack only, `ui-monospace, SFMono-Regular, Menlo, monospace`, and only inside `code`.

**Character:** Archivo is the silkscreen — one printed voice for the whole panel, from 10px legend caps to the 84px title, exercising its width axis the way a real faceplate exercises a condensed grade for tight labels. Faustina is the manual — a low-contrast reading serif, not a display serif, chosen to carry an 1,800-word post without ever competing with the panel voice.

`body` sets the global baseline: `font-family: var(--font-panel)`, `font-variation-settings: 'wdth' 100`, `font-feature-settings: 'tnum' 1`. Tabular figures are on everywhere by default, so dates and numbers align without per-element opt-in.

### Hierarchy

Every panel role below is Archivo. `wdth` values are raw axis units on the 62–125 axis, applied via `font-variation-settings`, never via `font-stretch`, and the system only ever uses 84–94 of it. Sizes are `rem`; the base is 16px. Measured on the built post at a 390px viewport: `h2` 20px / 650, `h3` 18px / 680, body 17.4px / 400 — all three in `silk` (`rgb(236, 233, 227)`), with `text-transform: none` on `h3`.

**Panel voice — Archivo**

- **Display** (`.field h1`, weight 700, `wdth` 88, `clamp(2.5rem, 8.5vw, 5.25rem)`, tracking `-0.03em`, leading 0.94, `text-wrap: balance`, `max-width: 14ch`): the site name on the hero plate. One instance, home page only.
- **Headline** (`.post-head h1`, weight 680, `wdth` 90, `clamp(2rem, 5vw, 3.5rem)`, tracking `-0.03em`, leading 1.02, balance, `max-width: 20ch`): the post title.
- **Page Header** (`.field-sm h1`, weight 660, `wdth` 92, `clamp(1.875rem, 4.5vw, 3rem)`, tracking `-0.025em`, leading 1.02, `max-width: 20ch`): the title on a page-header plate — "Writing", "About".
- **Section** (`.head h1, .head h2`, weight 650, `wdth` 92, `clamp(1.75rem, 4vw, 2.75rem)`, tracking `-0.02em`, leading 1.05, balance): a centred in-page section heading, under a 30px glyph that inherits `var(--color-ch, var(--color-label))`. One live instance — the home page's "Writing" head, which sets `--color-ch: var(--color-ch-signal)` so the glyph matches the Key.
- **Title** (`.channel h2`, weight 620, `wdth` 94, `clamp(1.375rem, 2.8vw, 2rem)`, tracking `-0.02em`, leading 1.12, balance, `max-width: 24ch`): a post title in the channel list.
- **Prose Heading** (`.prose h2`, weight 650, `wdth` 94, `clamp(1.25rem, 2vw, 1.5rem)`, tracking `-0.015em`, leading 1.2, balance, `margin-top: 2.75em`): the panel voice interrupting the reading serif. Carries a 3px × 0.85em channel-coloured bar in the left margin.
- **Prose Subheading** (`.prose h3`, weight 680, `wdth` 94, `1.125rem`, tracking `-0.01em`, `silk` colour, `margin-top: 2.25em`): sentence case, heavier and larger than the body it heads. It is deliberately **not** uppercase and not `label`-coloured — a subheading that is quieter than its own paragraph is not a heading.
- **Wordmark** (`.rail-mark span`, weight 650, `wdth` 86, `0.8125rem`, tracking `0.14em`, uppercase; at ≤30rem: `0.6875rem`, tracking `0.1em`).
- **Nav** (`.rail-nav a`, weight 600, `wdth` 88, `0.75rem`, tracking `0.14em`, uppercase, `label` colour; at ≤30rem: `0.6875rem`, tracking `0.1em`).
- **Label** (weight 620, `wdth` 84, `0.6875rem`, uppercase, `label` colour): the workhorse silkscreen cap. Tracking varies by role and is part of the role: `.channel-meta` and `.panel-link` at `0.16em`; `.ground-mark` and `.ground-links a` at `0.14em`; `.legend > h2` (the word "Key") at `0.22em`, the widest tracking in the system.
- **Micro** (weight 620, `wdth` 84, `0.625rem`, uppercase, `label` colour): `.legend-set span` at `0.2em` tracking; `.tags li` and `.prose th` at `0.14em`.
- **Table body** (`.prose table`, `0.875rem`, `font-variant-numeric: tabular-nums`): panel voice, because a table is a receipt.
- **List markers** (`.prose ol > li::marker`, weight 620, `0.8em`, `label` colour): panel voice inside a serif list.

**Reading voice — Faustina**

- **Body** (`.prose`, weight 400, `clamp(1.0625rem, 0.35vw + 1rem, 1.1875rem)`, leading 1.72, `silk`, `text-wrap: pretty`, `max-width: 36rem`): post prose. `strong` steps to weight 650. `blockquote` is italic and `label`-coloured.
- **Lede** (`.lede` and `.field p`, weight 400, `clamp(1.0625rem, 0.5vw + 0.95rem, 1.25rem)`, `max-width: 34rem`, centred, `text-wrap: pretty`): leading 1.6 and `field-mute` colour on `.field p`, the hero premise; leading 1.62 and `label` colour on `.lede`, which now carries only the empty-list line.
- **Description** (`.channel p` and `.pending p`, weight 400, `1.0625rem`, `max-width: 34rem`): leading 1.62 on `.channel p` (`label` colour), 1.6 on `.pending p`.

**Readout voice — system mono**

- **Code** (`.prose code`, `0.85em` of its context): inline code sits on `plate` with an `engrave` hairline and `silk` ink. Inside `pre` it inherits the block's `0.8125rem` / leading 1.6 and drops its own background, border and padding.

### Named Rules

**The One Printed Voice Rule.** The panel has exactly one sans face and it is used at every printed size, 10px to 84px, differentiated by width axis and tracking rather than by swapping families. Do not add a third family. Do not reach for a display face for the title — the title is Archivo at `wdth` 88.

**The Mono-Is-Code Rule.** Monospace appears only inside `code`. It is never used for labels, metadata, nav, timestamps, tags, or headings, because monospace-as-costume is exactly the cliché this world refuses. If something needs to look technical, give it a glyph and a hairline, not a mono font.

**The Width-Tracks-Size Rule.** Width and tracking move in opposite directions to size. Big type goes narrower and tighter (`wdth` 88, tracking `-0.03em`); small caps go narrowest and widest (`wdth` 84, tracking `0.14`–`0.22em`). The mid-scale titles sit at `wdth` 92–94. A new role picks its `wdth` by where it falls on that ramp, not arbitrarily.

**The Narrow Band Rule.** The whole system lives in `wdth` 84–94 of an axis that runs 62–125. The condensed grade is a nudge that makes tight labels sit right, not a costume: never reach below 84 for effect, and never let a role's width be chosen for variety rather than by the ramp above.

**The Serif-Reads Rule.** Every string the reader actually *reads* — lede, description, post body, empty-state sentence — is Faustina. Every string that *labels* something is Archivo caps. Headings are the exception that proves it: they are Archivo, and prose `h3` is Archivo in sentence case at `silk`, because a heading labels and is read at once. If a new element is ambiguous, ask whether a reader would read it aloud.

**The No-Kicker Rule.** Letterspaced uppercase metadata never sits above the heading it belongs to. The date row (`.channel-meta`) renders *after* the `h2` on both index surfaces and after the `h1` in the post head — a small caps line stacked above a title is a kicker, and this system does not ship one.

## Layout

Everything is centred, single-column, and symmetric. There is no asymmetric grid, no sidebar, and no card grid anywhere in the system — the only grid in the stylesheet is the legend's `3 × auto` icon set.

**Measures.** Three tokens, all in `@theme`: `--measure-wide: 68rem` (the outer container), `--measure-read: 36rem` (prose and the pending block), `--measure-lede: 34rem` (lede, hero premise, channel descriptions). Prose is additionally capped by nothing else — the 36rem measure at the 17–19px body size lands at roughly a 66-character line.

**Content detection is scoped to `src/`, and must stay that way.** The stylesheet opens `@import 'tailwindcss' source(none);` followed by an explicit `@source '../**/*.{astro,ts,mdx}';`. Tailwind 4 otherwise auto-detects every non-ignored file in the project, which means a prose document that merely *names* a utility mints it — this document's own ban list, naming `gradient`, `drop-shadow` and `blur`, shipped all three into the stylesheet before the scope was narrowed. Design docs are not content. Never widen the `@source` glob to the project root, and never assume a word written here is inert.

**Gutter.** `--gutter: clamp(1.25rem, 5vw, 3rem)`, declared on `.shell` (the `html` element) rather than in `@theme`, because it is a layout variable and not a design token. `.rail` and `.wide` both consume it as `padding-inline`.

**Primitives.**

- `.shell` — the `html` element. Declares `--gutter`. Nothing else.
- `.rail` — the header. Flex row, space-between, `gap: 1.5rem`, `min-height: var(--rail-h)` (3.5rem), gutter padding, 1px `engrave` bottom border, `panel` background. Not sticky.
- `.wide` — the standard container: `width: 100%`, `max-width: 68rem`, `margin-inline: auto`, gutter `padding-inline`.
- `.bleed` — the same 68rem box **without** gutter padding, so a coloured plate can run edge to edge inside the measure. Used only by the hero.
- `main` — `flex: 1 1 auto`, column, `gap: clamp(4rem, 9vw, 7.5rem)` between top-level sections, `padding-block: clamp(2.5rem, 6vw, 5rem)` top and `clamp(4.5rem, 10vw, 8rem)` bottom. The bottom is deliberately near double the top.
- `.section` — a column with `gap: clamp(2.25rem, 4.5vw, 3.5rem)`.
- `.post` — the article column, `gap: clamp(2.75rem, 6vw, 4.25rem)`.
- `.field` — a page plate. See Components.
- `.field-sm` — the same plate at page-header scale: `padding: clamp(2.25rem, 5.5vw, 3.75rem) clamp(1.5rem, 5vw, 3rem)`, `gap: 1.125rem`, a `clamp(34px, 4vw, 42px)` mark in `field-ink`, and the Page Header `h1`. Composed as `class="field field-sm ticked"` — it modifies `.field`, it does not replace it.
- `.field-signal` — a one-line channel modifier that rebinds `--color-field: var(--color-field-signal)`. The only mechanism by which a plate changes channel; add a channel plate by adding a token and a modifier, never by hard-coding an enamel.
- `.channel` — one post row. See Components.
- `.legend` — the printed Key block. Column, centred, `gap: clamp(1.75rem, 4vw, 2.75rem)`.
- `.legend-set` — `grid-template-columns: repeat(3, minmax(0, 1fr))`, `gap: clamp(1.75rem, 4vw, 2.75rem)` row / `clamp(1.25rem, 4vw, 3.5rem)` column, `max-width: 46rem`.
- `.prose` — the reading surface at 36rem. See Components.
- `.pending` — the honest empty state at 36rem. See Components.
- `.head` — a centred in-page section heading: column, `gap: 1rem`, a 30px glyph inheriting `var(--color-ch, var(--color-label))` over the Section heading.
- `.ticked` — adds registration corner marks to any positioned box. See Shapes.
- `.ground` — the footer plate. 1px `engrave` top border, `padding-block: 2rem`, inner `.ground-in` flex row, wrap, space-between, `gap: 1.25rem`.

**Vertical rhythm inside prose.** `.prose > * + *` gets `margin-top: 1.4em`. `h2` gets `2.75em` and `h3` gets `2.25em`, but the element immediately following either drops back to `0.85em` so a heading stays bound to its paragraph. `li + li` is `0.5em`. `hr` is `margin-block: 2.75em`. All in `em`, so the rhythm scales with the fluid body size.

**Body layout.** `body` is `display: flex; flex-direction: column; min-height: 100svh`, with `.ribbon` carrying `flex: none` so the ribbon never compresses and `main` carrying `flex: 1 1 auto` so the footer sits at the bottom of a short page.

**Breakpoints.** Only two, both `max-width`, and both handling real overflow rather than a redesign:

- **≤40rem (640px):** `.prose table` switches to `display: block; width: fit-content; min-width: 100%; overflow-x: auto` — receipts scroll only where the measure genuinely cannot hold them. `.legend-set` drops from 3 columns to 2. `.ground-in` becomes a left-aligned column with `gap: 1.5rem`. The `.prose h2` channel bar moves from `left: -1.25rem` / 3px wide to `left: -0.875rem` / 2px wide, so it survives the narrower gutter.
- **≤30rem (480px):** the rail tightens — `.rail` gap 1.5rem → 1rem, `.rail-mark` gap 0.625rem → 0.5rem plus `min-width: 0`, the mark glyph 22px → 19px, the wordmark 0.8125rem → 0.6875rem and tracking 0.14em → 0.1em, `.rail-side` and `.rail-nav` gaps 1.25rem → 0.875rem, nav links 0.75rem → 0.6875rem and tracking 0.14em → 0.1em.

Everything else responds through `clamp()`. There is no tablet layout, no `min-width` query, and no container query in the system.

### Named Rules

**The Centred Panel Rule.** Every block on the site is centred on the measure and internally centre-aligned, except prose body copy, table cells, and the footer's two flex ends. A left-aligned marketing section would read as a different site.

**The Air-Before-Rule Rule.** Separation is achieved by space first and a hairline second. A `.channel` row carries `clamp(2.5rem, 5vw, 4rem)` of padding above its 1px rule and the same again as gap below the previous row — the rule is a registration mark on the air, not a divider doing the work. A separator therefore only ever appears *between* siblings: `.channel:first-child` zeroes its own rule and padding, because a hairline above the first item separates it from nothing.

## Elevation & Depth

**This system has no elevation.** There is no `box-shadow`, no `text-shadow`, no `filter`, no `backdrop-filter`, no gradient and no glow anywhere in the stylesheet. Depth is not simulated at all; the whole site is one flat enamelled board.

What stands in for depth is a three-part vocabulary:

1. **Hairline** — a 1px `engrave` border, always on one edge (`border-top` on a channel row, `border-bottom` on the rail and post head), never as a full box outline except on the four elements that are genuinely boxes: `.pending`, `.panel-link`, `.tags li`, and `.switch`.
2. **Tone** — exactly one surface tone above the board, `plate`, used for the switch body and inline code. There is no `plate-2`. If a surface needs to separate itself and `plate` is already in play, it gets a hairline instead.
3. **Field** — the drenched `field` plate that opens every page, which reads as a *different material* rather than a raised one, and is reinforced by its own `field-enamel` layer at `z-index: -1` inside an `isolation: isolate` context.

`.field` is the only stacking-context author in the system: `position: relative; isolation: isolate`, with `.field-enamel` at `inset: 0; z-index: -1`. Nothing else in the stylesheet sets `z-index`.

### Named Rules

**The Flat Board Rule.** Nothing on this site casts, glows, blurs or lifts. If a new element seems to need separation, it gets a hairline, more air, or the `plate` tone — in that order. A shadow would immediately break the faceplate reading, because a faceplate is a single machined surface.

## Shapes

**Radius is zero everywhere.** `border-radius` is never declared in the stylesheet, and no element — not the switch, not the tags, not the code block, not the buttons — is rounded. Corners are square by construction; do not add a radius token.

**Hairlines are 1px and `engrave`-coloured**, with three deliberate exceptions: the code block's border is `readout-edge`, the `.prose th` bottom border and `.prose blockquote` left border are the channel colour, and the `.prose h2::before` bar is a 3px channel-coloured block rather than a hairline.

**Registration ticks.** The panel's recurring silhouette device. `.ticked` places two 14×14px right-angle corner marks — `::before` at `top: 10px; left: 10px` drawing top + left edges, `::after` at `bottom: 10px; right: 10px` drawing bottom + right — both `border-color: currentColor`, `opacity: 0.55`, `pointer-events: none`. On a plate, `.field-enamel` supplies the *other* diagonal pair (`::before` top-right, `::after` bottom-left) explicitly coloured `field-ink`, because `.ticked` has already claimed both pseudo-elements on the same box and a pseudo-element can only be claimed once. The four marks together frame the plate like a print registration guide.

### The glyph set

Nine symbols authored inline in `BaseLayout.astro` as a hidden `<svg class="sprite">` containing a `<defs>` of `<symbol>` elements, referenced everywhere else by `<use href="#id">`. The sprite is `position: absolute; width: 0; height: 0; overflow: hidden`, marked `aria-hidden="true" focusable="false"`; `svg { display: block }` is set globally.

**Drawing grammar, identical for all nine:** `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="1.75"`. No `stroke-linecap` or `stroke-linejoin` is authored, so all nine render with the SVG defaults — **butt caps and miter joins** — which is what gives them their drafted, un-rounded feel and matches the zero-radius rule. Every drawn shape inside every symbol carries `pathLength="100"`, so a single `stroke-dasharray: 100` on the host `<svg>` normalises stroke length across shapes of different real lengths and makes the draw animation uniform. Colour is always inherited: a glyph is coloured by setting `color` on the host `<svg>`, never by a `fill` or `stroke` attribute.

| id | Meaning | Drawing | Where it is used | Rendered size |
| --- | --- | --- | --- | --- |
| `g-source` | Source / genesis — the site's own mark | A circle at `r=10.25` with a three-lobe sine wave running through it | Rail wordmark (22px, `ch-source`); hero `.field-mark` (`clamp(56px, 9vw, 84px)`, `field-mark`); the About plate (`clamp(34px, 4vw, 42px)`, `field-ink`); the genesis channel; the Key | 19–84px |
| `g-signal` | Writing / signal — the default channel | A vertical bar at `x=4.5` and a solid-outline right-pointing triangle from `x=9` to `x=20.5` | The blog index plate (`clamp(34px, 4vw, 42px)`, `field-ink` on the violet enamel); the home page Writing head (30px, `ch-signal` set inline); any post whose tags are neither `receipts` nor `genesis` (34px, `ch-signal`); the Key | 28–42px |
| `g-meter` | Measured / receipts — the numbers channel | A baseline plus three rising bars at `x=7.25`, `12`, `16.75` and a 1.5-unit tick above the centre bar | Any post tagged `receipts` (34px, `ch-meter`); the Key | 28–38px |
| `g-patched` | Pending / unpatched — the empty state | A dashed lead line (`stroke-dasharray="2.5 3"`) running into a jack: a circle at `r=5` with a filled-looking `r=1.25` core | The `.pending` block on About (30px, `label`); the Key | 28–30px |
| `g-feed` | Feed / RSS | Two concentric arcs and a `r=1.5` dot at the origin corner | Footer RSS link (15px, `label`); the Key | 15–28px |
| `g-ground` | End / ground | An electrical ground symbol: a stem into three descending horizontal bars (16, 10, 4 units wide) | The post `.endmark` (24px, `label`); footer copyright mark (20px, `label`); the Key | 20–28px |
| `g-next` | Forward | A horizontal shaft with a chevron head at the right | The "All writing" `.panel-link` on the home page (15px) | 15px |
| `g-back` | Return | The mirror of `g-next` | The "All writing" `.panel-link` at the foot of a post (15px) | 15px |
| `g-out` | Leaves the site | An open-cornered box with a diagonal arrow escaping the top-right | Footer Instagram link (15px, `label`) | 15px |

**The Key.** Six of the nine are decoded in a printed legend on the home page — `g-source` "Source", `g-signal` "Writing", `g-meter` "Measured", `g-patched` "Pending", `g-feed` "Feed", `g-ground` "End" — each at 28px over a 10px micro-cap. The first three are shown in their channel colour; the last three in `label`. `g-next`, `g-back` and `g-out` are omitted because directional arrows need no decoding.

### Named Rules

**The Authored Symbol Rule.** Every symbol on this site is drawn in this repo on the 24×24 / 1.75-stroke / `pathLength=100` grid. No unicode arrows, no emoji, no icon font, no third-party icon package. A new symbol is authored into the sprite to that grammar, or it does not ship.

**The Inherited Colour Rule.** A glyph never carries its own colour. It inherits `currentColor` from a host that sets `color`, which is what lets one `<symbol>` appear as `ch-meter` on one row, `label` in the footer, and `field-mark` on a page plate without duplication. Every host that can name a channel resolves it the same way — `var(--color-ch, …)` with a neutral fallback — so a glyph on a channelled surface is always the Key's colour and a glyph on a neutral one is always `label`.

**The Square Corner Rule.** Radius is zero and stroke caps are butt. A rounded corner or a rounded cap anywhere reads as a different, softer product.

## Components

### Ribbon

The site's wordless mark and the first thing painted on every page.

- **Shape:** `display: flex`, `height: 4px`, `width: 100%`, `flex: none`. Three `<i>` children, no text, `aria-hidden="true"` on the container.
- **Bays:** unequal by design — `flex: 6 / 4 / 3` against `bay-a / bay-b / bay-c`, which is source / writing / measured in the printed Key's own order. The mark is decodable: a reader who has seen the Key can read the ribbon.
- **Motion:** each `<i>` runs `bay-in` — `scaleX(0)` → 1 from `transform-origin: left center` — over 320ms `cubic-bezier(0.2, 0.9, 0.25, 1)`, `both`, staggered 0 / 70 / 140ms.
- **States:** none. It is not interactive and never changes.

### Rail (navigation)

- **Style:** `panel` background, 1px `engrave` bottom hairline, 3.5rem min-height, gutter padding, not sticky. Left: the `.rail-mark` link — 22px `ch-source` `g-source` glyph plus the wordmark, `gap: 0.625rem`. Right: `.rail-side` holding the nav and the switch at `gap: 1.25rem`.
- **Links:** Nav role type (12px, weight 600, `wdth` 88, `0.14em`, uppercase), `label` colour, `padding-block: 0.5rem`, `border-bottom: 1px solid transparent`.
- **Hover and current:** identical treatment — `color` → `silk`, `border-bottom-color` → `ch-source`. Transition `color 140ms linear, border-color 140ms linear`. `aria-current="page"` is set server-side from the pathname (`/blog*` → Writing, `/about*` → About).
- **Focus:** the global 2px `ch-meter` outline at `3px` offset.
- **Mobile:** no hamburger, no drawer. Two links always visible; at ≤30rem the type and gaps shrink (see Layout).
- **Whitespace constraint:** the build strips whitespace between adjacent inline elements, so all spacing between rail items comes from `flex` + `gap`. Never rely on a literal space or `&nbsp;`.

### Switch (theme control)

A wordless two-position panel control — no sun, no moon, no label text.

- **Shape:** `34 × 18px`, `padding: 0`, 1px `engrave` border, `plate` background, `flex: none`, square corners.
- **Knob:** `::after`, `14 × 14px`, `margin: 1px`, `label` background, positioned by `transform: translateX(calc(var(--knob) * 16px))`. `--knob: 0` by default (dark); `:root[data-theme='light'] .switch { --knob: 1 }`.
- **Hover:** knob background → `ch-source`.
- **Motion:** `transform 160ms cubic-bezier(0.2, 0.9, 0.25, 1), background 160ms linear`.
- **Semantics:** `<button type="button">` with `aria-label="Switch between the dark and light panel"` and `aria-pressed` synced by script (`true` when the light panel is active). It is a control, not a checkbox.
- **Persistence:** a blocking inline script in `<head>` reads `localStorage['panel-theme']` and sets `document.documentElement.dataset.theme` before first paint, so there is no flash. Clicking writes the new value back; both reads and writes are wrapped in `try/catch` so a storage-less browser falls through to the system preference.

### Field (page plate)

The world's own surface, and the opening block of every page type.

- **Shape:** square, full width of the 68rem `.bleed` box, `padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4.5rem)`, centred column with `gap: clamp(1.5rem, 3vw, 2.25rem)`, `text-align: center`.
- **Background:** supplied by a separate `<i class="field-enamel">` child at `inset: 0; z-index: -1`, not by the container, so the container's own `::before`/`::after` stay free for registration ticks. It paints `var(--color-field)`, which a channel modifier on the parent can rebind.
- **Ticks:** the plate carries all four registration corners — two from `.ticked` in `field-ink` via `currentColor`, two from `.field-enamel` explicitly `field-ink`.
- **Contents, in order:** the `field-mark` glyph (`g-source`, `clamp(56px, 9vw, 84px)`, `field-mark` colour), the Display `h1`, the Lede `p` in `field-mute`.
- **`.field-sm` variant:** the same plate at page-header scale, composed as `class="field field-sm ticked"`. Overrides three things and nothing else — `padding: clamp(2.25rem, 5.5vw, 3.75rem) clamp(1.5rem, 5vw, 3rem)`, `gap: 1.125rem`, and a `clamp(34px, 4vw, 42px)` mark recoloured to `field-ink` — and swaps the Display `h1` for the Page Header role. It carries a glyph and a title, no lede. Used by `/about/` (`g-source` on the teal source enamel) and `/blog/` (`g-signal`, plus `.field-signal` for the violet writing enamel), so no page opens on bare board.
- **`.field-signal` modifier:** one declaration, `--color-field: var(--color-field-signal)`. The plate implementation is unchanged; only the enamel token it resolves changes.
- **States:** none. It is not a link and not interactive.

### Channel (post row)

Rows on a panel, not cards. There is no card in this system.

- **Shape:** no box, no background, no shadow, no radius. A 1px `engrave` `border-top`, `padding-top: clamp(2.5rem, 5vw, 4rem)`, centred column, `gap: 1rem`. Rows are separated by a further `clamp(2.5rem, 5vw, 4rem)` of list gap. **`.channel:first-child` drops both** (`padding-top: 0; border-top: 0`), so a rule appears only *between* entries and the list never opens on a hairline.
- **Channel binding:** the row's `<li>` carries an inline `style="--color-ch: …"` written by the shared `channelOf(tags)` function; the glyph id comes from the same call.
- **Contents, in order:** the 34px channel glyph in `var(--color-ch)`; the Title `h2` linking to the post; a `.channel-meta` row — an 18 × 1px `var(--color-ch)` tick, `gap: 0.75rem`, then the date in Label type; the description in Faustina at 17px, `label` colour, 34rem measure. **The date follows the title, never precedes it** (see The No-Kicker Rule), and this order matches the post head exactly.
- **Link affordance:** persistent, not hover-only. The title carries a 1px underline in `var(--color-ch)` at `text-underline-offset: 0.18em` at rest, thickening to 3px on hover over `160ms linear`. Nothing lifts, nothing tints, nothing scales. The old scale-in underline is gone: a link that only announces itself on hover is not announced on touch.
- **Focus:** global 2px `ch-meter` outline.
- **Post head variant:** `.post-head` is the same idea at article scale — centred column, `gap: 1.25rem`, `border-bottom` instead of top, `padding-bottom: clamp(2rem, 5vw, 3.25rem)`, a 38px channel glyph, the Headline `h1`, the same `.channel-meta` row (with an optional `/`-separated "Updated" date using `.sep` in `engrave`), then the tag list.
- **Derivation, and why it is triplicated:** `channelOf(tags)` is authored three times — in `src/pages/index.astro`, `src/pages/blog/index.astro` and `src/layouts/PostLayout.astro` — because `src/lib/` and `src/components/` are outside the file set this design is permitted to touch. It is a scoping artefact, not a pattern. Keep the three copies byte-identical; a divergence silently breaks the agreement between shape and hue on one surface only.

### Panel link

The one control that is not a nav item — the system's entire button vocabulary.

- **Shape:** `inline-flex`, `align-self: center`, `gap: 0.75rem`, `padding: 0.75rem 1.25rem`, 1px `engrave` border, square, transparent background.
- **Type:** Label role (11px, weight 620, `wdth` 84, `0.16em`, uppercase), `label` colour.
- **Icon:** a 15px glyph, `g-next` when moving forward (home → all writing), `g-back` when returning (post → all writing). The label text comes first, the glyph second, in both directions.
- **Hover:** `color` → `silk`, `border-color` → `ch-source`, over `160ms linear` each. No fill, no lift.
- **Focus:** global 2px `ch-meter` outline.
- **There is no filled button.** If an action ever needs more weight, it gets the channel colour on its border, not a solid fill.

### Tags

- **Style:** 1px `engrave` border, transparent background, `padding: 0.3125rem 0.625rem`, square. Micro type (10px, weight 620, `wdth` 84, `0.14em`, uppercase), `label` colour.
- **Layout:** flex, wrap, `justify-content: center`, `gap: 0.5rem`.
- **States:** none — tags are printed labels, not filters. They are not links and have no hover.

### Pending (empty state)

The panel's honest unpatched module, and the system's answer to missing content.

- **Style:** 36rem max width, centred, 1px `engrave` border on all four sides, `padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3rem)`, `gap: 1.25rem`, `label` colour, `text-align: center`.
- **Contents:** the 30px `g-patched` glyph over one sentence of Faustina at 17px stating plainly what is missing and where it is tracked.
- **Doctrine:** the design never fills a content gap with invented copy or lorem ipsum. It shows this block instead.

### Legend (signature component)

Museum wayfinding, printed on the panel. The glyphs are used in place across the site; this is the one surface where they are decoded.

- **Heading:** the single word "Key" in Label type at `0.22em` tracking — the widest tracking in the system, and the only place it appears.
- **Set:** a 3-column grid (2 at ≤40rem) capped at 46rem, `gap: clamp(1.75rem, 4vw, 2.75rem)` / `clamp(1.25rem, 4vw, 3.5rem)`. Each cell is a centred column, `gap: 0.75rem`: a 28px glyph over a 10px micro-cap at `0.2em`.
- **Colour:** each `<li>` carries an inline `--color-ch`; the SVG reads `var(--color-ch, var(--color-label))`, so a legend entry without a channel falls back to `label`.
- **Placement:** last section of the home page, after the writing list — the reader meets the glyphs in use before meeting their names.

### Prose (reading surface)

- **Measure and voice:** 36rem, Faustina, `clamp(1.0625rem, 0.35vw + 1rem, 1.1875rem)`, leading 1.72, `silk`, `text-wrap: pretty`. Inherits the article's `--color-ch`, with `var(--color-ch, var(--color-ch-source))` as the fallback everywhere it is read.
- **Headings:** `h2` in the panel voice with a 3px × 0.85em channel bar at `left: -1.25rem; top: 0.55em` (2px at `left: -0.875rem` below 40rem). `h3` in the panel voice at 18px / weight 680 / `wdth` 94 in `silk`, sentence case — heavier and larger than the body beneath it. Sectioning is done with the engraved tick, **never** with a rule across the column.
- **Links:** `silk` text with a 1px underline in the channel colour at `text-underline-offset: 0.2em`; on hover the underline thickens to 3px over `140ms linear`. Colour does not change.
- **Unordered lists:** `list-style: none`, `padding-left: 1.5rem`, each item marked by an 8 × 1px channel-coloured dash at `left: -1.25rem; top: 0.72em`. A drawn tick, not a bullet.
- **Ordered lists:** real `decimal` markers, rendered in the panel voice at `0.8em`, weight 620, `label` colour.
- **Blockquote:** 1px channel-coloured left border, `padding-left: 1.5rem`, italic, `label` colour. No quotation glyph, no background.
- **Rule:** `hr` is a 1px `engrave` band, `margin-block: 2.75em`. It is the only full-width rule allowed in the column, and it is content, not sectioning.
- **Images:** `max-width: 100%; height: auto`. No frame, no caption styling, no radius.
- **Tables:** treated as receipts. `width: 100%; border-collapse: collapse` on the centred measure, so a table reads as part of the column rather than as an escaped object. Only below 40rem, where the measure genuinely cannot hold them, does it become `display: block; width: fit-content; min-width: 100%; overflow-x: auto` and scroll inside its own box rather than the page. Panel voice at 14px, `font-variant-numeric: tabular-nums`. `th` is left-aligned Micro caps in `label` with a **channel-coloured** 1px bottom border and `white-space: nowrap`; `td` has an `engrave` 1px bottom border and `vertical-align: top`. Last cell in each row drops its right padding so the column ends flush.
- **Code:** inline `code` on `plate` with an `engrave` hairline, `0.1em 0.35em` padding, `silk` ink, `0.85em`. Block `pre` on `readout` with a `readout-edge` hairline, `1.125rem 1.25rem` padding, 13px / leading 1.6, `overflow-x: auto`; `pre code` drops background, border and padding and inherits the size.

### Endmark

Closes every post: a 24px `g-ground` glyph in `label` over the return `panel-link`, centred, `gap: 1.75rem`, above a 1px `engrave` top border with `padding-top: clamp(2.5rem, 5vw, 3.5rem)`.

### Ground (footer)

- **Style:** 1px `engrave` top border, `padding-block: 2rem`, inner `.wide.ground-in` flex row with wrap and space-between, `gap: 1.25rem`. Column and left-aligned at ≤40rem with `gap: 1.5rem`.
- **Left:** a 20px `g-ground` glyph plus the copyright line in Label type at `0.14em`.
- **Right:** two links at `gap: 1.5rem`, each an icon-plus-label pair at `gap: 0.5rem` — RSS with `g-feed`, Instagram with `g-out` and `rel="me noopener"`. Both 15px glyphs.
- **Hover:** `color` → `silk` over `140ms linear`. No underline.

### Motion — the one authored moment

One authored moment on arrival, in three staged parts, and then the site is still.

1. **The bays snap in.** Each ribbon segment runs `bay-in` — `transform: scaleX(0)` → 1 from `transform-origin: left center` — over **320ms** `cubic-bezier(0.2, 0.9, 0.25, 1)`, `both`, staggered at **0 / 70 / 140 / 210ms**. Fast and mechanical, like strips being seated.
2. **The enamel wipes across.** On every page type, `.field-enamel` runs `field-in` — `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` — over **620ms** `cubic-bezier(0.16, 1, 0.3, 1)` after a **100ms** delay, `both`. Because the enamel is a separate `z-index: -1` element, the copy on the plate is never hidden: the colour arrives *behind* text that was already readable.
3. **The mark draws once.** On every page type, `.field-mark` runs `draw` — `stroke-dashoffset: 100` → 0 against `stroke-dasharray: 100` — over **900ms** `cubic-bezier(0.16, 1, 0.3, 1)` after a **260ms** delay, `both`. `stroke-dashoffset` is an inherited SVG property, which is what lets it animate on the `<svg>` host and still reach the shapes inside the `<use>` shadow tree; `pathLength="100"` on every shape is what makes the two-path glyph draw evenly.

Because all four page types open on a plate, the arrival moment now plays on all four rather than only on the home page — the same three parts, at the same timings, at whichever plate scale that page uses. Nothing else animates: no scroll-triggered reveal, no parallax, no entrance on the post list, no loading skeleton.

**State transitions** are short, linear where they carry no motion, and eased only where something physically travels: nav link `color` + `border-color` `140ms linear`; footer link `color` `140ms linear`; prose link `text-decoration-thickness` `140ms linear`; `panel-link` `color` + `border-color` `160ms linear`; channel title `text-decoration-thickness` `160ms linear`; switch knob `transform 160ms cubic-bezier(0.2, 0.9, 0.25, 1)` with `background 160ms linear`.

**Reduced motion.** Under `@media (prefers-reduced-motion: reduce)`, `*`, `*::before` and `*::after` get `animation: none !important` and `transition-duration: 1ms !important`. The arrival moment does not degrade to a shortened version — it is removed, and the page simply arrives finished. Because the field's copy was never hidden and the mark's `stroke-dashoffset` rests at 0, removing the animations leaves the correct final state with nothing missing.

### States

- **Focus-visible** — the only focus treatment in the system: `outline: 2px solid var(--color-ch-meter); outline-offset: 3px`, set globally on `:focus-visible`. Amber is used for nothing else at that weight, so a focus ring is never confusable with a channel.
- **Selection** — `::selection` is `ch-source` background with `panel` foreground, i.e. the accent inverted against the board.
- **Hover** — colour and stroke weight only, in four forms: `label` → `silk` (nav, panel-link, footer links); transparent → `ch-source` border (nav underline, panel-link border); `label` → `ch-source` fill (switch knob); an underline thickening 1px → 3px (prose links and channel titles alike). No hover state creates an affordance that did not already exist at rest.
- **Current page** — `aria-current="page"`, set server-side from the pathname, renders identically to hover: `silk` text over a `ch-source` bottom border. There is no separate "active" style.
- **Pressed** — only the switch, via `aria-pressed`, synced on load and on click.
- **Empty** — the `.pending` block. Named, bordered, glyphed, and honest.
- **Disabled, error, loading** — none exist. The site is static, has no forms, no server routes, and nowhere to POST, so no such states are defined. Do not invent them.

## Do's and Don'ts

### Do:

- **Do** derive a post's glyph and its channel colour from one function reading the post's own tags, and write the result to the row root as an inline `--color-ch`. Shape and hue always agree.
- **Do** keep every symbol on the 24×24 / `stroke-width: 1.75` / `pathLength="100"` grid with default butt caps and miter joins, authored into the `BaseLayout.astro` sprite and referenced by `<use>`.
- **Do** colour glyphs by setting `color` on the host `<svg>` and letting `currentColor` inherit.
- **Do** separate blocks with air first and a single 1px `engrave` hairline second, on one edge only.
- **Do** keep the whole panel in one sans face, differentiating roles with the `wdth` axis (84 for micro-caps, 88–94 for headings) and tracking (`0.14`–`0.22em` for caps, `-0.015` to `-0.03em` for headings) rather than by adding a family.
- **Do** set every string a reader actually reads in Faustina, and every string that labels something in Archivo uppercase caps.
- **Do** keep prose at the 36rem measure and the lede at 34rem, both centred.
- **Do** get all inline spacing from `flex` + `gap`; the build strips whitespace between adjacent inline elements.
- **Do** state a content gap honestly with the `.pending` block and the `g-patched` glyph, naming where the missing work is tracked.
- **Do** keep the `readout-*` tokens out of both light-theme blocks; a lit display does not change with the room.
- **Do** re-pick every themed hue for the pale board rather than lightening the dark value, and keep the three ribbon bays saturated when you do — they carry no text and so have no contrast obligation. Only the eight `readout-*` tokens skip the light block entirely.
- **Do** give a link its underline at rest and let hover only thicken it (1px → 3px). Hover may change a colour, a border colour or a stroke weight; it may not be the first moment a link looks like a link.
- **Do** open every page on the enamel plate — `.field` at display scale for the home hero, `.field field-sm` at page-header scale for everything else — and pick its enamel from the page's channel, adding `.field-signal` for the writing channel.
- **Do** put the date row *after* the heading it belongs to, on every surface that has one.
- **Do** keep the three `channelOf` copies byte-identical, and delete two of them the moment `src/lib/` comes into the permitted file set.

### Don't:

- **Don't** add `border-radius` anywhere. Radius is zero by construction and there is no radius token.
- **Don't** add `box-shadow`, `text-shadow`, `filter`, `backdrop-filter`, a gradient, or a glow. The system has no elevation at all; use a hairline, more air, or the `plate` tone.
- **Don't** use monospace outside `code`. No mono labels, no mono timestamps, no mono nav — monospace-as-costume is a refused reference.
- **Don't** ship a unicode arrow, an emoji, an icon font, or a third-party icon package. Author the symbol into the sprite or drop it.
- **Don't** put a second drenched field on one page, or use a field anywhere but as the page's opening surface.
- **Don't** introduce a filled button. The only control surface is the outlined `.panel-link`; extra weight comes from a channel-coloured border, never a solid fill.
- **Don't** wrap post rows in cards, boxes, or backgrounds. They are rows on a panel with a hairline above them.
- **Don't** section prose with a rule across the column. Use the `h2` channel bar; `hr` is content, not structure.
- **Don't** signal state with colour alone — a channel colour always arrives with its glyph, in section heads as well as in rows.
- **Don't** stack letterspaced uppercase metadata above a heading. That is a kicker, and this system does not ship one.
- **Don't** set a subheading quieter than the text it heads — `h3` is 18px / 680 / `silk`, not a `label`-coloured micro-cap.
- **Don't** add a colour token without a consumer. The palette is 24 colour tokens and all 24 are referenced; a reserved swatch is a decoration waiting to happen.
- **Don't** re-state a plate's hue in its glyph. On a coded enamel the mark is knocked out in `field-ink`; only the home hero carries `field-mark`.
- **Don't** add an animation. The site has exactly one authored moment, replayed at each page's plate, and is otherwise still: nothing animates on scroll and nothing moves on hover.
- **Don't** left-align a section. Everything is centred on the measure.
- **Don't** fill a content gap with invented copy or placeholder prose.
- **Don't** re-declare a `readout-*` token in a theme block, and don't re-key the highlighter remap without re-deriving it from the highlighter's actual output hexes.
- **Don't** add a breakpoint. Two `max-width` queries (40rem, 30rem) exist for real overflow; everything else is `clamp()`.
- **Don't** widen Tailwind's `@source` glob beyond `src/`. With `source(none)` removed or the glob loosened, naming a utility in prose ships it — this file's own ban list once minted `gradient`, `drop-shadow` and `blur`.
- **Don't** reach outside `wdth` 84–94. The rest of the axis is headroom, not a range to explore.
- **Don't** rule above the first item in a list. `.channel:first-child` carries no `border-top` and no `padding-top`.
