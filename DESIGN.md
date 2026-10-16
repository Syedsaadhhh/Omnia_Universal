---
name: Omniasec Labs — incumbent reference, not an approved future identity
description: Extracted from PR 6 at c5d2500; all visual choices are open to replacement.
colors:
  background: "#060811"
  background-elevated: "#0a0d18"
  text: "#f3f6ff"
  muted-override: "#b0b0b0"
  muted-secondary-override: "#a3a3a3"
  cyan: "#67e8f9"
  blue: "#6687ff"
  violet: "#b86cff"
rounded:
  sm: "12px"
  md: "20px"
  lg: "30px"
spacing:
  shell-inset: "24px"
components:
  button-primary:
    backgroundColor: "#ffffff"
    textColor: "#0a0a0a"
    height: "48px"
---

## Overview

Descriptive extraction of the existing application, not a prescription for reconstruction. Source: styles/part-1.css, styles/part-5.css, styles/framer-startup.css, styles/ux-refactor.css and components. Later stylesheet overrides compete with initial tokens. No future direction has been selected. Proposed systems live separately in docs/brand-reconstruction/DIRECTIONS.md.

## Colors

Blue-black surfaces, pale foreground, cyan/blue/violet gradient, additional green and amber status colors. The final UX stylesheet replaces muted text tokens and primary buttons with neutral values; component hardcoding remains. A future system needs explicit semantic light/dark roles and measured foreground/background pairs.

## Typography

CSS requests Inter, ui-sans-serif and platform fallbacks. No self-hosted Inter font is declared, so requesting the name does not establish that it loads. Main headings start at clamp(52px, 6.2vw, 91px), with -0.055em tracking in the base stylesheet and responsive overrides. Numerous 8–10px uppercase labels and monospace traces compete with narrative content. Computed browser styles are recorded in evidence/baseline-browser.json.

## Layout

1240px maximum shell; 48px total viewport inset in the base token; fixed 78px header; split hero and command visualization. Responsive rules stack content and alter diagrams. Seven globally imported stylesheets make final values dependent on cascade order. Preserve route compatibility and behavior rather than these particular dimensions.

## Elevation & Depth

Large rounded panels, radial surface gradients, soft shadows, backdrop blur and glows. Decorative network canvas and simulated trace reinforce the current autonomous-security positioning; these are replacement candidates, not proof of a running system.

## Shapes

Rounded rectangles and pills dominate. Existing SVG symbol is a gradient shield surrounding a split circular/power-like motif with a glow. Fine internal detail and a security emblem conflict with the broader brief. It must be evaluated in monochrome and at favicon scale; it is not protected from replacement.

## Components

Header, Logo, Footer, PageHero, SectionHeading and ProjectsGallery are useful functional boundaries. Preserve PR #6 menu visibility, Escape, focus return, resize and navigation tests. Preserve accessible project filtering, actual repository links, closed contact API and truthful contact disclosures. Refactor visual styling only after direction approval. The current brand link's name and wordmark still say "Omnia Sec AI Labs"; update as part of the approved brand integration.

## Do's and Don'ts

Keep evidence links, explicit limitations and honest founder-led content. Replace narrow public identity, simulated operational status and unsupported maturity language. Avoid transplanting the old gradient, shields, dashboard hero or dense labels into every alternative. Do not copy this reference into a future normative design system: after approval, record the implemented system and its tokens anew, with this extraction preserved in Git history.
