# Seed Grow — Editorial Layout System (v1.0)

Seed Grow publishes editorial-style Instagram carousels (trend reports, research, AI commentary, opinion pieces, case studies). This design system captures the **Editorial Layout System** brief they supplied: not a fixed template library, but a set of layout *principles* and 12 composable page types, so every carousel page looks unique while still reading as part of the same premium editorial publication.

**Source material:** the "Editorial Layout System — Seed Grow — Version 1.0" brand/brief document (pasted directly by the user; no Figma file or codebase was attached). Two logo files were uploaded: `uploads/logo seed grow 1.png` (cream wordmark) and `uploads/logo seed grow 2.png` (dark teal wordmark) — copied into `assets/`.

No product codebase or Figma link was provided, so there is no existing UI to recreate. Colors were sampled directly from the wordmark artwork; typefaces are Google Font substitutions chosen to match the "contemporary magazine" brief (see Visual Foundations — flag this to the user and ask for real brand fonts if they exist).

## System architecture

This is not a template library. It defines principles, art direction, visual behavior, and editorial rules — the 12 layouts are reference compositions to adapt, never fixed components to reproduce exactly. Consistency comes from repeating the *principles*, not the layouts: every carousel should read as the same publication even when no two pages share a composition.

Three levels of information, per the brand's own architecture:

1. **Editorial Design System** (this project) — the permanent rules: philosophy, art direction, visual identity, color, type, layout references, photography, composition, hierarchy, spacing, legibility, editorial rules. Respected in every piece, always.
2. **Editorial Playbook** — narrative structure per content archetype (Trend Report, Research, Case Study, Opinion, Framework, Big Idea, News, AI, Ranking, Data Story…). Each archetype defines only objective, narrative, card order, visual rhythm, and editorial intent — never a fixed set of layouts. The five combinations documented below (Trend Report, Research, AI, Opinion, Case Study) are a starting Playbook; extend it with more archetypes as Seed Grow needs them.
3. **Visual Inspiration Library** — the brand's best-performing cards, used to teach art direction, text/image proportion, visual rhythm, photography use, contrast, and hierarchy — analyzed for identity, never copied literally. No reference cards have been supplied yet; this library is empty until Seed Grow provides real published carousels.

The layout components and cards in `components/layouts/` exist in this project only because the platform that reads this design system requires a visual specimen to preview each primitive — treat every one of them as a reference composition to adapt to new content, not a fixed template to reuse as-is. Each new layout should read as an evolution of the identity, not a repeat of an existing card.

## Post Grid System (layout variations for social posts)

A modular grid system for assembling Seed Grow posts beyond the 12 core editorial layouts — built on the same 1080×1350 canvas, safe area, and type scale. Components in `components/post/`:

- `PostLabel` — small content-category tag (Branding, Marketing, Strategy, Performance, Growth, Content, Framework, Case, Insight, Opinion).
- `PostCallout` — visual-interruption block for a stat, quote, or CTA, anchored by the 2px accent rule.
- `PostFooter` — discreet closing row: logo, @seedgrow, website, optional secondary CTA.

Ten reusable layout variations in `components/post-layouts/`, each composing the primitives above plus the shared `PhotoPlaceholder`:

 1. **`P01HeroHeadline`** — giant headline + small supporting image.
 2. **`P02FullBackground`** — image fills the canvas, type overlays with a scrim.
 3. **`P03TypographyOnly`** — pure type composition, no imagery.
 4. **`P04Editorial`** — headline broken into alternating blocks.
 5. **`P05KeywordFocus`** — one giant word dominates the composition.
 6. **`P06ImageCutOut`** — image overlaps and crosses the headline.
 7. **`P07MinimalPoster`** — mostly negative space, tiny type footprint.
 8. **`P08MagazineCover`** — masthead + issue label + cover photography.
 9. **`P09CarouselLayout`** — modular slide frame with a progress-dot indicator, for continuity across a multi-slide carousel.
10. **`P10InsightCard`** — a callout (stat/quote/CTA) as the whole page.

Composition principles for this system (per the brief): typography is always the protagonist — large headlines, strong hierarchy, generous negative space, asymmetric composition, text/image overlap, contemporary-poster rhythm. Photography supports the narrative; it is never the protagonist here (contrast with the photography-led L001/L006 core layouts). Reference imagery supplied for direction should only be mined for principles (dominant type, overlap, cropping, negative space, rhythm) — never reproduced as a layout.

## Core principles (from the brief)

- Each page communicates exactly one main idea, with a single focal point.
- White space is part of the design, not empty leftover space.
- Content determines the layout — never force content into a fixed template.
- Never repeat the same composition on consecutive pages.
- Every page should surprise visually without losing the brand identity.

## The 12 layouts

| Code | Name | Feeling | Component |
| --- | --- | --- | --- |
| L001 | Editorial Cover | Curiosity | `L001EditorialCover` |
| L002 | Editorial Story | Context | `L002EditorialStory` |
| L003 | Hero Statistic | Credibility | `L003HeroStatistic` |
| L004 | Magazine Split | Balance | `L004MagazineSplit` |
| L005 | Insight Grid | Organization | `L005InsightGrid` |
| L006 | Image First | Immersion | `L006ImageFirst` |
| L007 | Editorial Comparison | Clarity | `L007EditorialComparison` |
| L008 | Quote Page | Reflection | `L008QuotePage` |
| L009 | Timeline | Progression | `L009Timeline` |
| L010 | Image + Data | Evidence | `L010ImageData` |
| L011 | Editorial List | Simplicity | `L011EditorialList` |
| L012 | Editorial Manifesto | Memorability | `L012EditorialManifesto` |

Each is a 1080×1350 (4:5) React component in `components/layouts/`, styled entirely from the tokens in `styles.css`. See each `L0XX*.prompt.md` for usage and variants, and each layout's own `.card.html` for a visual specimen.

### Layout combinations (from the brief)

- **Trend Report** — L001 → L002 → L003 → L004 → L012
- **Research** — L001 → L003 → L007 → L005 → L012
- **AI** — L001 → L002 → L010 → L005 → L012
- **Opinion** — L001 → L004 → L008 → L002 → L012
- **Case Study** — L001 → L004 → L009 → L003 → L012

All five are wired up, click-through, in `ui_kits/carousel/index.html`.

## Composition rules (mandatory — overrides any aesthetic decision)

Priority order on every card, in this exact sequence: (1) respect margins, (2) visual balance, (3) legibility, (4) typographic hierarchy, (5) font size. Never grow type at the expense of margins; never push content to the footer; never compress text to fill space — a slightly smaller headline beats a cramped layout, and an extra line break beats text touching an edge.

- **Safe area:** 96px minimum inset on left/right/top, 120px on the bottom (`--slide-margin` / `--slide-margin-bottom`) — no text, number, image, or graphic element may cross it by default. Only hero headlines or large editorial compositions may intentionally break these bounds for emphasis.
- **Titles:** should occupy roughly 45–65% of the card's usable height. Over that, reduce type size/line-height, adjust block width, or reflow line breaks — never shrink the margins instead.
- **Vertical distribution:** balance top margin → primary content → breathing room → secondary content → bottom margin. Never stack everything at the top or bottom; use any free space to balance the composition.
- **Secondary content** (captions, lists, stats, footnotes) must sit clear of the bottom edge inside the safe area — never jammed against it — and should distribute vertically when space allows, not clump at the bottom.
- Before finalizing a card: margins equal on all sides, nothing compressed, visual weight balanced across top/middle/bottom, enough negative space to feel premium.

## Canvas, composition & readability (mandatory — overrides layout defaults)

These rules take priority over any individual layout:

- **Canvas:** every piece is 1080×1350px (4:5), Instagram feed only. Never adapt a horizontal/square layout after the fact — design for 4:5 from the start.
- **Mobile-first, 2–3 second read:** on scroll, the subject, the single most prominent element, and the information hierarchy must all register immediately, or the composition needs to be simplified.
- **Photography as protagonist:** full-bleed / full-card whenever a good image exists, especially covers. No thumbnails, no visible frames or boxes around photos. Use overlays/gradients/duotone to integrate photography into the layout rather than dropping an image on top of one.
- **Mandatory type scale (never reduced):** Headline 90–110px · Subtitle 45px · Quote 45px · Body 35–40px · Caption 28–30px · Section Label 18–22px. If content doesn't fit, summarize, redistribute, or split into another card — never shrink type or margins.
- **Quote composition:** set at Subtitle size (45px), positioned centrally with generous surrounding space, source line small and discreet directly below. A quote is a focal point, never a footer.
- **Margins & safe area:** generous margins on every layout (96px left/right/top, 120px bottom); nothing important sits close to an edge. Negative space is identity, not empty space.
- **Visual hierarchy:** every page must answer, in order — what's seen first, what's read next, what supports it. Never more than one visual protagonist.
- **Canvas occupancy:** not every inch needs filling — negative space, balance, and contrast beat an overstuffed layout.

`tokens/typography.css` encodes the mandatory scale as `--fs-headline/subtitle/quote/body/caption/label`; every layout component reads from these tokens.

## Content fundamentals

The brief is written as strict, prescriptive production rules (Portuguese), not marketing copy — so tone is inferred from its own voice and applied to the sample copy in this system:

- **Direct, declarative sentences.** Rules read like a style guide: "Cada página comunica apenas uma ideia principal." No hedging, no filler adjectives.
- **Third person / imperative, not "you"-facing.** The brief instructs the *system*, not the reader — sample headlines follow suit with observational, magazine-style statements ("The quiet return of attention") rather than second-person marketing speak ("You need to pay attention!").
- **One idea per page.** Headlines are short — a single clause, sometimes a sentence fragment ending on the highlighted word.
- **A single word is always highlighted** (italic, accent color) in cover and manifesto headlines — never a whole phrase.
- **No emoji, no exclamation points.** The tone is credible and editorial (executive report / magazine), not social-casual.
- **Numbers over adjectives.** Where possible, a statistic replaces descriptive copy (L003, L010) — "73% of teams now ship weekly" rather than "many teams ship often."
- **Quote blocks are sourced**, never anonymous — always pair a quote with an attribution line when one exists.
- Closing pages (L012) are written as a **memorable, quotable line**, not a call-to-action or recap.

## Content fundamentals

The brief is written as strict, prescriptive production rules (Portuguese), not marketing copy — so tone is inferred from its own voice and applied to the sample copy in this system:

- **Direct, declarative sentences.** Rules read like a style guide: "Cada página comunica apenas uma ideia principal." No hedging, no filler adjectives.
- **Third person / imperative, not "you"-facing.** The brief instructs the *system*, not the reader — sample headlines follow suit with observational, magazine-style statements ("The quiet return of attention") rather than second-person marketing speak ("You need to pay attention!").
- **One idea per page.** Headlines are short — a single clause, sometimes a sentence fragment ending on the highlighted word.
- **A single word is always highlighted** (italic, accent color) in cover and manifesto headlines — never a whole phrase.
- **No emoji, no exclamation points.** The tone is credible and editorial (executive report / magazine), not social-casual.
- **Numbers over adjectives.** Where possible, a statistic replaces descriptive copy (L003, L010) — "73% of teams now ship weekly" rather than "many teams ship often."
- **Quote blocks are sourced**, never anonymous — always pair a quote with an attribution line when one exists.
- Closing pages (L012) are written as a **memorable, quotable line**, not a call-to-action or recap.

### Brand voice — interpreting the news, not reporting it

Seed Grow does not report news. Seed Grow interprets market movements. Every news-based post must answer three questions, in order:

1. What happened?
2. What does this reveal about marketing, positioning, or growth?
3. What can a business owner or marketer *do* with this information?

The voice is **strategic, provocative, elegant, objective, and principle-based — never hype-based.** Write like someone who understands business and marketing, not like a journalist summarizing news. The reader should finish every post thinking *"I'd never looked at it from that angle."*

Every piece must end with an **actionable insight**, not just a conclusion or recap.

**Avoid generic filler phrases** — these are explicitly banned:
- "isso mostra que..." ("this shows that...")
- "é importante porque..." ("it's important because...")
- "essa tendência reforça..." ("this trend reinforces...")

Replace them with a clear, original point of view — an interpretation only Seed Grow would make, not a neutral observation anyone could write.

## Visual foundations

- **Color:** two base neutrals sampled from the logotype — `--ink-900 #03302f` (deep teal, near-black) and `--cream-100 #f4f5ec` (warm off-white). Two editorial accents named directly in the brief, "Yellow Green" (`--yellow-green-500 #c3d82e`) and "Cayenne" (`--cayenne-500 #e55812`) — used sparingly, as a single accent rule, highlighted word color, or one data point, never as a background. Max one accent per page.
- **Atmospheres:** the brief names four moods to choose per carousel — *Editorial Light* (cream bg, ink text), *Editorial Dark* (ink bg, cream text), *Balanced* (mixed light/dark across the sequence), *Photography First* (image-dominant, minimal type). Every layout component exposes an `atmosphere` prop (`'light' | 'dark'`) to switch between the first two; alternate atmospheres across a sequence rather than holding one for all five pages.
- **Type:** a serif *display* face (`Newsreader`, substituted — see Caveats) for all headlines, statistics, and quotes, paired with a grotesk *body* sans (`Archivo`) for kickers, captions, and body copy. Display type is set large and tight; the single highlighted word is always italic.
- **Spacing:** 4px base unit, slide margin fixed at 96px (left/right/top) and 120px (bottom) on every layout so pages align visually inside a carousel despite very different compositions. Generous negative space is treated as a design element, not an afterthought.
- **Imagery:** always full-bleed or large-format (40–100% of the page) — never thumbnails, never a small inset photo. No sample photography was provided, so every layout renders a dashed-border placeholder labeled with what should go there — swap in real photography before publishing. Contrast against overlaid type comes from a dark gradient scrim.
- **Graphic elements:** minimal — a single 40×4px accent rule (`L002`), thin 1px hairline rules (`L005`, `L007`, `L009`), or a 12px accent dot (`L009` timeline marker). No icons, no illustration, no decorative shapes.
- **Corners & shadows:** square corners throughout (`--radius-card: 2px`) — no card shadows, no rounded containers, no borders around content blocks.
- **Animation / interaction:** none — these are static carousel pages. The `ui_kits/carousel` viewer adds simple prev/next navigation purely for review purposes.
- **Backgrounds:** flat color only (cream or ink) — no gradients, patterns, or textures behind type. Gradients are used exclusively as image scrims.

## Iconography

**No icon system is defined or implied by the brief.** The brand's graphic vocabulary is limited to hairline rules, accent dots, and the mandatory logo mark. Do not introduce an icon font, emoji, or unicode glyphs; reuse the existing accent-dot pattern from `L009Timeline` rather than adding a new icon system.

## Caveats — please help iterate

- **Fonts are a substitution.** No font files or names were provided, so `Newsreader` (display) + `Archivo` (body) were chosen from Google Fonts to match the "contemporary magazine" brief. If Seed Grow has real brand fonts, please attach the files and I'll swap `tokens/typography.css`.
- **Yellow Green is an estimate** (`#c3d82e`) — Cayenne was corrected by the user to `#e55812` (secondary `#efe7da`); confirm Yellow Green against real brand assets if available.
- **All photography is a placeholder** (dashed frame + label) — no images were provided.
- Only two logo lockups exist (dark-on-cream, cream-on-dark) — no icon-only mark.

## Index

- `styles.css` — root stylesheet, imports all tokens.
- `tokens/` — `colors.css`, `typography.css` (incl. Google Font imports and the mandatory type scale), `spacing.css` (incl. the 72px safe area).
- `assets/` — `logo-dark.png` (teal, for light backgrounds), `logo-light.png` (cream, for dark backgrounds).
- `components/layouts/` — the 12 layout components (`L001…L012`) + shared `PhotoPlaceholder`, each with its own `.card.html` specimen.
- `guidelines/` — foundation specimen cards: base palette, accent colors, semantic surfaces, mandatory type scale, display/body/giant-statistic type, spacing scale, wordmark, layout-rotation rule.
- `ui_kits/carousel/index.html` — interactive viewer cycling through all five layout combinations (Trend Report, Research, AI, Opinion, Case Study).
- `SKILL.md` — portable skill definition for use in Claude Code or other agent environments.
