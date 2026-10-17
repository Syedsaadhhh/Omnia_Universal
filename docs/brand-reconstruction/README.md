# Omniasec Labs — brand and design selection checkpoint

2026-10-16. **No identity is selected, no main redesign is implemented, and nothing in this branch has been deployed.** The complete existing logo/palette/type system is open to replacement. The name remains Omniasec Labs unless the founder approves a naming change.

## Review in this order

1. [Research, naming risks and proposed brand strategy](RESEARCH.md).
2. [Verified frontend UX audit](FRONTEND_AUDIT.md).
3. [Three directions and recommendation](DIRECTIONS.md).
4. [Review index](concepts/index.html), [logo/wordmark applications](concepts/identity.html), [desktop/mobile wireframes](concepts/wireframes.html).
5. [Architecture, visitor journeys, small PR plan and approval boundaries](ARCHITECTURE_AND_PLAN.md).
6. Root [PRODUCT.md](../../PRODUCT.md) (confirmed facts/proposed record), [DESIGN.md](../../DESIGN.md) (incumbent extraction, not the future system), and [WORK_STATE.md](../../WORK_STATE.md).

The generated raster identity board is an interpretive concept sheet, not the exact SVG/HTML specification. It also explores a serif wordmark for A and an arch form for C. The editable browser studies are reproducible alternatives, not approved matches to that raster. There is no approved comp or final commercial logo. No third-party reference screenshot is a licensed website asset.

## Open the standalone studies

From the repository root:

```bash
python -m http.server 4173 --bind 127.0.0.1 --directory docs/brand-reconstruction/concepts
# Open http://127.0.0.1:4173/ in your browser. Stop with Ctrl-C.
```

The archive can also be extracted and the HTML opened directly; serving locally gives more consistent font/browser behavior. No npm install or application server is required just to view the studies. The six HTML files are review artifacts outside app/ and public/ and do not create public application routes. Links to external project evidence or the existing policy pages are labeled as such; no emails were sent. A native details menu demonstrates menu behavior; final React implementation must preserve PR #6 tests.

Evidence logs normalize line endings/trailing whitespace only; test outcomes are retained. Original font-license text is unmodified.

Actual Chromium screenshots cover 1440/768/390/320px, the three phone menu states and the identity/wireframe documents. See [checks.json](evidence/concepts/checks.json) and evidence/concepts/. The first inspection and its confirmed defects are preserved as checks-initial.json, with initial identity/wireframe captures. One correction batch fixed review-note contrast and wireframe reflow; a second capture confirms the result. This is a limited design-review check, not production acceptance or WCAG certification.

## Impeccable provenance and scope

Official project: [impeccable.style](https://impeccable.style), [pbakaus/impeccable](https://github.com/pbakaus/impeccable). Verified npm identity **impeccable@4.6.0**, Apache-2.0, author Paul Bakaus; official source inspected at dd47ec83eca2dcc57be2c5d2e3f927a167ce6cf4. Engine **0.1.15**. The available connector skill was version 4.3.1; this project-local official installation is 4.6.0.

Documented project installation executed:

```bash
npx --yes impeccable@4.6.0 install --providers=codex --scope=project --no-hooks --yes
.agents/skills/impeccable/scripts/impeccable context --target .
```

Installed under .agents/skills/impeccable/, including references, Codex agent definitions, scripts and a Linux engine binary. All created file paths, sizes and SHA-256 hashes are recorded in [the manifest](evidence/impeccable-install-manifest.json). The generated installation is locally excluded using .git/info/exclude; it is not vendored into this branch or the application dependency graph. Resume by running the pinned command. No hook manifest was installed and no hooks approval is represented as granted. `.impeccable/config.json` contains the founder-confirmed image-first workflow preference only.

Codex invocation is **`$impeccable init`**, `$impeccable document`, `$impeccable audit`, `$impeccable shape` inside the agent conversation; these are skill instructions, not shell commands. This session read and applied the relevant references to create product truth, document the incumbent, assess UX/technical evidence and shape alternatives. It did not invoke imaginary init/document shell binaries, nor complete a formal dual-agent critique/finish pipeline. The user requested equivalents for discovery and explicitly required selection before implementation; this checkpoint does not claim implementation polish, a selected contract, approved comp, full critique score or final logo production.

Mechanical detector actually executed once on the isolated studies:

```bash
.agents/skills/impeccable/scripts/impeccable detect --json docs/brand-reconstruction/concepts
```

It returned findings (exit 2), preserved in [impeccable-detector.json](evidence/impeccable-detector.json): 130 observations—111 colors outside the **incumbent** DESIGN.md, 16 padding warnings, two real contrast defects in the identity review notes, and one cream-palette warning on B. New alternatives intentionally use new palettes; they have not been approved as normative design tokens. Padding warnings include containers whose actual inset is supplied by nested shells and logical CSS properties; browser inspection, not automatic suppression, governs those. B's light chalk palette is a deliberate explored alternative, not an unexamined default. The contrast defects were corrected and independently rechecked with axe. The detector was not rerun until a cosmetic green result, and no ignore list was added. No visible detector overlay is claimed.

## Tooling and asset provenance

Editable geometric SVGs, outlined type explorations and HTML are built by tools/build-concepts.py. Python FontTools is an authoring tool, not an app dependency. Fonts and original OFL notices: concepts/fonts/SOURCES.json and matching OFL.txt files. Compressed review subsets use FontTools 4.61.1 with tool-only brotli 1.2.0 in /tmp/omnia-font-compression; original TTFs remain available. Do not alter font licensing or assume a Latin-focused review subset covers every future language.

Playwright and axe reuse the repository's existing dev dependencies. Research browser capture was ordinary browsing of public primary sources. The only generated raster is the clearly provisional mood board; its prompt and provenance are recorded beside it. Inkscape/Penpot/SVGO were researched, not installed or represented as executed. No new runtime dependency, design framework, provider, CMS or external API was added.

## Review boundary

Recommend **A — Open Register** for evidence-led research credibility and the reusable record system, with B and C as genuinely different studio/collaboration alternatives. Owner selection/refinement is required before final mark work and application integration. Name clearance remains separate. This branch is kept local because existing Vercel skip and Cloudflare branch confirmation do not establish safety for feat/* publication. Production remains the original baseline; see WORK_STATE for exact continuation actions.
