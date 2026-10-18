---
name: Omniasec Labs — Open Register
description: The implemented pine, mineral and sage editorial system for inspectable research and useful technology.
colors:
  or-ground: "#101f1d"
  or-surface: "#162a25"
  or-ink: "#eaf1eb"
  or-muted: "#a5beb6"
  or-accent: "#b3d4a0"
  or-on-accent: "#152b22"
  or-rule: "#4c6b60"
  or-pale-ground: "#eaf1eb"
  or-pale-surface: "#dce6dc"
  or-pale-ink: "#18362c"
  or-pale-muted: "#405b4e"
  or-pale-accent: "#315a42"
  or-pale-on-accent: "#f1f6ef"
  or-pale-rule: "#8c9e91"
  footer-ground: "#0d1917"
typography:
  display:
    fontFamily: "var(--font-literata), Georgia, serif"
    fontSize: "clamp(42px, 5.2vw, 73px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-literata), Georgia, serif"
    fontSize: "clamp(32px, 3.2vw, 46px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-schibsted), sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "var(--font-schibsted), sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "var(--font-schibsted), sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "var(--font-schibsted), sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
spacing:
  or-gutter: "clamp(18px, 4vw, 48px)"
components:
  action:
    backgroundColor: "transparent"
    textColor: "{colors.or-ink}"
    typography: "{typography.action}"
    padding: "12px 20px"
  action-primary:
    backgroundColor: "{colors.or-accent}"
    textColor: "{colors.or-on-accent}"
    typography: "{typography.action}"
    padding: "12px 20px"
  action-hover:
    backgroundColor: "{colors.or-ink}"
    textColor: "{colors.or-ground}"
  menu-button:
    backgroundColor: "transparent"
    textColor: "{colors.or-ink}"
    padding: "10px 12px"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.or-ink}"
    padding: "10px 17px"
  filter-selected:
    backgroundColor: "{colors.or-accent}"
    textColor: "{colors.or-on-accent}"
---

# Design System: Omniasec Labs — Open Register

## Overview

**Creative North Star: "Open Register"**

Open questions become inspectable evidence and useful technology. The founder-selected system is candid, precise and editorial: upright serif statements sit beside plain-language explanation, ordered methods and genuine work records. Flat pine fields, mineral reading surfaces, sage actions and thin rules give the site a recognizable material without implying institutional scale or operational telemetry.

This is a normative extraction of the implemented review-branch source, chiefly `styles/open-register.css`, `app/layout.tsx` and shared components, following the founder's selection of A on 17 October 2026. It supersedes the incumbent reference archived at `docs/brand-reconstruction/INCUMBENT_DESIGN_at_c5d2500.md`. PRODUCT.md and the surface contract remain authoritative for product truth and page strategy. The public name remains Omniasec Labs; the open-frame mark is provisional pending optical and professional legal clearance.

The source implementation is not a production release. The fresh finish review inspected 46 captures and found no material visual/UX/truth defect; its `fix` disposition also retains an incomplete formal build ledger. This documentation resolves the stale design-record item only. `.impeccable/build/state.json` remains at plates=open with downstream phases pending; no hero/final comp-diff reports or numerical fidelity score exist. Owner-authorized manual comparison and review do not certify formal Impeccable completion, WCAG compliance or release readiness.

**Key Characteristics:**
- Upright Literata statements and Schibsted Grotesk explanation.
- Pine and mineral fields separated by fine editorial rules.
- Square, flat controls and inspectable evidence records.
- An asymmetric open-frame mark with the full public name.
- Semantic reflow, visible keyboard focus and restrained motion.

## Colors

Tinted dark pine carries the identity; pale mineral provides readable contrast and sage identifies actions and deliberate emphasis. Frontmatter values are normative and preserve the source hex notation.

### Primary

- **Sage** (`or-accent`): primary-action fill, selected filters, headline emphasis, ordered-method markers and focus outlines on dark surfaces.
- **On-sage pine** (`or-on-accent`): foreground on sage controls and text selection.
- **Reading-surface pine** (`or-pale-accent`): scoped accent used by actions and focus on mineral sections; its corresponding foreground is `or-pale-on-accent`.

### Neutral

- **Pine ground** (`or-ground`) and **pine surface** (`or-surface`): page field and the declared inset surface.
- **Mineral ink** (`or-ink`): principal text on pine; also the mineral reading-section ground and action hover fill.
- **Muted mineral** (`or-muted`): stage notes, dates, metadata and secondary explanation, never the sole carrier of status.
- **Pine rule** (`or-rule`): one-pixel dividers and control borders.
- **Mineral ground/surface, reading ink, muted ink and reading rule**: the `or-pale-*` entries describe the exact local overrides in the mineral section.
- **Footer pine** (`footer-ground`): the footer's directly declared darker background.

Documentation keys `or-*` map to source custom properties `--or-*`. The qualified `or-pale-*` keys map to the same `--or-*` properties inside `.or-pale`; they are not additional CSS variables. `footer-ground` names a directly declared source color. Dark and mineral sections declare dark and light `color-scheme` respectively. The sidecar's synthesized tonal ramps are preview metadata, not additional implemented palette tokens.

**The Local Palette Rule.** Resolve semantic colors in their section scope; mineral sections must use their local ink, muted, accent and rule values rather than inheriting dark-surface pairs.

The four detector color advisories arose because the implemented pine/mineral/sage/muted Open Graph colors differed from the discarded incumbent DESIGN.md. They are recorded as selected-system drift from that old reference, not suppressed, ignored, cosmetically rerun or recast as certification.

## Typography

**Display Font:** upright Literata, with Georgia and serif fallback.

**Body Font:** Schibsted Grotesk, with sans-serif fallback.

**Label Font:** the body family; no separate mono or icon font.

Literata contributes deliberate editorial contrast; Schibsted keeps navigation, evidence and explanation direct. Literata is a real self-hosted regular instance (weight 400, optical size 48), not italic or a system-display substitution. Schibsted is self-hosted with weights 400–700. The two Latin WOFF2 files total 86,644 compressed bytes and use `font-display: swap`; preserved SIL OFL notices accompany them. This is an English/Latin implementation, not a complete multilingual font system.

**The Root Font Scope Rule.** Keep both `next/font/local` variable classes on `html`: root `--or-display` and `--or-body` resolve the font variables there. Successful downloads alone do not prove custom glyphs render; the recorded browser check verifies actual platform fonts.

### Hierarchy

- **Display:** frontmatter display role; Home statement. At widths through 760px it becomes `clamp(40px, 8vw, 60px)` with line height (1.12) and a (16ch) cap. Above 760px its editorial column determines wrapping without a character cap.
- **Headline:** frontmatter headline role; section headings. On phones the section-heading size is (35px); split-section headings use (34px). General h1/h2 line height is (1.15).
- **Page introduction:** upright Literata (400), `clamp(40px, 4.7vw, 66px)`, line height (1.15), measure (20ch); through 760px `clamp(38px, 7.8vw, 55px)`, and through 360px (37px).
- **Title:** frontmatter title role for ordinary h3. Work summaries use Literata (400, 27px); path headings use Literata (400, 34px; 31px on phones). Work archive h2 is (30px); reading h2 is (31px; 29px on phones).
- **Body:** frontmatter body role, with paragraph measure up to (70ch). Lead and intro copy are (20px/1.65), reducing to (18px) on phones; the Home lead measure is (48ch).
- **Label and metadata:** sentence case, typically (14px) or (13px); the phone descriptor is (12px). Labels explain real content. They are not decorative uppercase kickers.
- **Action:** frontmatter action role, becoming (14px) on phones. Headings use balanced wrapping and tracking (-0.025em); body copy retains its normal tracking.

## Layout

The shared shell is fluid, centered and bounded at (1296px), including inline padding. Its only declared spacing primitive is `--or-gutter`; it is overridden to (32px) through 1100px, (22px) through 760px and (18px) through 360px. There is no fabricated generic spacing scale: exact recurring component spacing below is extracted from the cascade.

Desktop Home uses two shrinking tracks (`minmax(0, 1.6fr)` / `minmax(0, 0.75fr)`), gap (80px) and vertical padding (82px 78px). Through 1100px the ratio becomes (1.4fr / 0.85fr) and the gap (45px). Through 760px it stacks in reading order, gap (34px), padding (45px 48px); the intended-method list uses two columns then one through 360px. This is the implemented Home composition, not a required template for every new surface.

Sections use vertical padding (76px; 50px on phones). Split reading and audience sections use two equal shrinking columns and gap (80px; 45px through 1100px). Work summaries use three columns with gap (34px); archive records use two columns with horizontal gap (45px). These become one column with gap (28px) through 760px. Reading articles are bounded at (900px), with vertical padding (65px 80px; 42px 55px on phones). Updates change from date/content/link tracks to one column. Inline facts similarly stack. Footer columns are (1.8fr 1fr 1fr), becoming two columns with its identity spanning both on phones.

The header is in document flow, with minimum row height (102px; 85px on phones), row gap (24px; 12px on phones), vertical padding (18px) and wrapping. Brand and grid children can shrink. Long names, record headings, action text, email addresses and prose links wrap rather than being clipped. Paired actions wrap with gap (14px; 12px on phones), and become full-width through 360px. Preserve these text-enlargement corrections rather than forcing the default screenshot's line breaks.

**The Reading Order Rule.** Keep semantic order through reflow, allow shrinking grid tracks and children, and retain visible content at narrow widths and enlarged text.

## Elevation & Depth

The implemented system has no box shadows, gradients, backdrop blur or raised cards. Depth comes from pine/mineral section changes, the darker footer and one-pixel rules. The stylesheet also declares a flat inset surface style; no current page instantiates that callout. Hover changes color or underline; it does not lift controls. No shadow vocabulary is introduced.

**The Flat Register Rule.** Use surface contrast and rules for grouping; preserve the selected flat editorial material.

## Shapes

Controls and ruled records are square; no border-radius scale is declared. Records are open sections rather than enclosed floating panels. Rules and control borders are one pixel. The signature arrow is drawn inline SVG (20×20 displayed in a 24×24 viewBox, stroke width 1.6), with path `M4 12h15m-6-6 6 6-6 6`.

The provisional mark consists of two asymmetric open angular frames in a (56×56) viewBox, using the exact path `M7 7h25v9H16v25H7Z M25 25h25v25H25v-9h16v-7H25Z`. It inherits currentColor, without gradient, shield, glow or baked-in text. Display sizes are (36×36), (28×28) through 760px, and (24×24) through 360px. Preserve this geometry pending an explicitly approved mark refinement; legal clearance is not implied by its use.

## Components

### Actions and links

Square, legible actions use the frontmatter variants, a one-pixel rule border and drawn arrow. Minimum height is (52px; 50px on phones); text/arrow gap is (25px; 18px on phones). Both outlined and sage actions hover to local ink fill, local ground text and ink border. No custom active or disabled appearance is defined. Native text links remain underlined with offset (0.25em), thickening to (2px) on hover; text-action links have minimum height (44px).

Links, buttons and summaries use a (3px) local-accent `:focus-visible` outline, offset (4px). The skip link appears at the document top on focus and targets the main landmark. Selection uses local accent/on-accent. No information depends on hover alone.

### Navigation and wordmark

The full-name link pairs the mark with Schibsted (600, 22px/1.1); it becomes (20px) on phones and (18px) through 360px. Gap is (12px; 10px; 8px). The wordmark remains live wrapping text with accessible name “Omniasec Labs home.”

Desktop navigation uses (14px) type, gap (26px) and links at least (44px) high. Hover and `aria-current` underline the desktop link. Through 1100px an explicit Menu/Close button replaces desktop navigation; it is at least (48px) high and (64px) wide, narrowing to (60px) and (55px) at the smaller breakpoints. The expanded in-flow menu has ruled links at least (48px) high. `aria-expanded`, `aria-controls` and `hidden` expose its state. Escape closes it and returns focus; navigation, same-route activation and resize back to desktop close it. Current Work includes the historical GNS3 route. Mobile links retain semantic `aria-current`; no additional mobile active visual is prescribed.

### Work records and filters

Records use a top rule, descriptive title, artifact/maturity/attribution context, explanation, text tags and inspectable links. Work archive padding is (28px) vertically, becoming (24px) on phones. Tags are plain wrapping (13px) text, not pill-shaped status badges. Preserve historical/maintenance limitations beside the relevant artifact.

Filters use square native buttons, minimum height (46px), (15px) text and the frontmatter padding. `aria-pressed="true"` applies local accent/on-accent and accent border; unselected controls remain transparent with rule border. The button group has a descriptive accessible name; a polite atomic live region announces record counts. No custom filter-hover color is defined; global keyboard focus applies.

### Reading sections and method

Mineral sections rebind the semantic palette and use live HTML. The method is a genuine ordered list with tabular numbers and an evidence/stop caveat, not simulated activity. Reading step lists pair a number track (30px; 20px through 360px) with a shrinking content track. No public input/form component exists; the contact route is mailto-only and the closed API/security foundation is unchanged.

### Motion and accessibility states

Only smooth document scrolling is implemented; `prefers-reduced-motion: reduce` sets it to auto. There are no continuous CSS animations, decorative canvas, mandatory transitions or animation library. Do not introduce a synthetic motion-duration scale.

Forced-colors mode gives actions/menu/filter buttons a ButtonText border, primary/selected controls Highlight and HighlightText, and mineral sections Canvas and CanvasText. The brand SVG permits forced-color adjustment. Keep these system-color adaptations and non-color semantics. WCAG 2.2 AA is the target; recorded automated scans and browser checks do not establish certification, every assistive setup or physical-device testing.

## Do's and Don'ts

### Do:

- **Do** resolve semantic palette variables locally on pine and mineral surfaces.
- **Do** retain upright Literata, the Schibsted full-name wordmark and font-variable classes on html.
- **Do** use live text, inline vector geometry, fine rules and inspectable evidence records.
- **Do** preserve semantic reading order, keyboard focus, menu behavior and text reflow.
- **Do** keep provisional identity, historical maturity and formation-stage limitations visible where relevant.

### Don't:

- **Don't** reinstate the discarded security-badge, telemetry, gradient/glow or rounded-dashboard identity.
- **Don't** turn ordered method stages or the shared product descriptor into invented decorative kickers.
- **Don't** substitute fabricated people, traction, capacity or operational status for evidence.
- **Don't** describe this source record or manual review as deployment, legal clearance, accessibility certification or formal build/fidelity completion.
