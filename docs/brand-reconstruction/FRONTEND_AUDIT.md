# Frontend discovery — verified baseline

2026-10-16; application source c5d2500. This is an evidence-based manual UX assessment informed by Impeccable's init/document/audit/shape references, not a claim that its complete dual-agent critique command ran. No live detector overlay, user research, certification or full manual assistive-technology evaluation is claimed.

## Evidence and engineering integrity

- Local production build: all ten public routes at **1440, 768, 390 and 320px**, 40 full-page screenshots plus mobile menu state. Ten ordinary live-page browser reads returned 200. No public submissions or disruptive testing.
- Source, computed styles, content, resources, image loading, overflow and automated checks: [baseline-browser.json](evidence/baseline-browser.json). [Contact sheet](evidence/baseline-sheet.jpg); individual captures in evidence/baseline/.
- All 40 local route/viewport samples had no horizontal document overflow. Twenty axe scans (ten routes at 1440 and 320px; WCAG 2 A/AA, 2.1 AA and 2.2 AA tags) reported no violations. Automated coverage does not establish conformance.
- Menu Escape closes and restores toggle focus in browser evidence. Existing integration suite also checks hidden-menu tab order, route changes, same-route selection and resize behavior.
- Fresh build/typecheck passed, **48 unit tests and 39 integration tests passed**, no skipped tests. The first integration invocation could not launch the default Playwright browser; setting the already supported `PLAYWRIGHT_CHROMIUM_EXECUTABLE=/usr/bin/chromium` resolved the environment issue without changing tests or application code. Preserve the failed-launch record rather than presenting it as an application defect.
- PR #5 and #6 remain open draft PRs. PR #6 head c5d2500 has successful Engineering CI; Cloudflare Workers remains an independently failing integration check. Production was verified at main@9cc1399, not PR #6.

## Ranked findings

| Priority | Verified problem and visitor impact | Proposed response after selection |
|---|---|---|
| P1 — positioning | Home introduces an "independent AI & cybersecurity lab" and "verified autonomy"; Research narrows to agent control. This excludes the broader problem-led operating model approved by the founder. | Explain multidisciplinary research/product development and the current formation stage in the first viewport. Methods follow problems, not the reverse. |
| P1 — trust | CommandPanel hardcodes SYSTEM ACTIVE, timestamped execution traces and VERIFIED/PASS material. These are illustrative UI, not measured operational evidence. ReproForge occupies a dominant homepage position, with maturity terminology that needs revalidation. | Remove simulated operations from the lab introduction; keep actual project artifacts on Work with provenance and explicit historical/current labels. Do not infer funding from "pre-seed" copy. |
| P1 — audience journeys | Both prospective collaborators and organizations converge on generic Contact; there are no dedicated Collaborate or For Organizations routes. | Add separate paths with expectations, useful intake prompts, scope boundaries and direct email links. Do not activate the dormant API or imply paid vacancies. |
| P1 — identity | Brand link and wordmark still say Omnia Sec AI Labs; shield and SEC AI hierarchy reinforce security specialization. Publicly used nearby names create a naming-review dependency. | Keep approved Omniasec Labs as the working name; do not isolate SEC; resolve naming risk before final mark production. |
| P2 — research credibility | Research is organized as broad themes rather than inspectable question/evidence/limitation records. Work cards mix differing artifact types; Updates needs disciplined dates and evidence links. | Reusable research record and project-maturity schemas, visible provenance, and an honest empty state instead of fabricated publications or progress. |
| P2 — mobile hierarchy | At 320px, tall page-hero spacing and large wrapped headings occupy much of the initial viewport. The name is absent from the compact mobile header, leaving only the shield. | Keep full lab name visible, use compact navigation, fit positioning/stage/first action early, retain comfortable reading and touch targets. No global overflow was observed. |
| P2 — typography and accessibility risk | CSS names Inter but no local font-face supplies it. Many diagram/status labels are 8–10px; all-uppercase and technical chrome increase reading effort. Axe success does not validate readability or text resizing. | Self-host licensed, subset fonts after selection; larger useful body/label scale, test 200% text and 400% zoom/reflow, forced colors and manual screen-reader reading order. |
| P2 — maintenance and performance | Seven global CSS imports, competing overrides, component-specific hardcoding, embedded base64 founder imagery, decorative canvas and animated trace styling complicate predictable changes. | Incremental token migration and dead-style removal only after route parity is demonstrated. Prefer static SVG/content; retain only interactions that help a visitor. |
| P2 — production gap | Live is still the original baseline. www returns an upstream failure from this environment; provider policy and the failing Workers check remain unresolved. | Keep source changes separate from deployed behavior; release remains owner-controlled. No assertion of global www outage or cause. |
| P3 — optional aesthetic | Repeated gradient highlights, panel shapes and tiny labels make pages feel mechanically similar despite differing tasks. | Introduce a coherent but varied editorial rhythm, evidence records and intentional page-specific layouts within one selected identity. |

P1 here means material to comprehension/trust/conversion, not a critical security vulnerability. No P0 frontend issue was verified. Optional aesthetic choices must not displace the P1 work.

## Route-by-route assessment

| Existing route | Keep | Change / intended successor |
|---|---|---|
| / | Evidence ethos, real work links | Lead with lab purpose/stage/process; separate audiences; historical work is supporting evidence. |
| /research | Questions connected to engineering | Distinguish intended research from completed findings; structured evidence/limitations records. |
| /projects | Filter behavior and source links | Public label Work; retain URL; explicit type, maturity, attribution and review dates. |
| /gns3-agent | Existing detail and source material | Preserve as historical/prototype detail until status revalidated; avoid relabeling it a current commercial product. |
| /about | Founder-led honesty, real founder | Broaden purpose; reconfirm bio; explain formation and collaboration rather than inventing staff. |
| /build-log | Progress-as-evidence premise | Public label Updates, same URL; factual dated engineering/research records. |
| /contact | PR #6's mailto-only disclosure | Route people from distinct journeys; clear copied address option later, no fake form success state. |
| /security | Boundaries and limitations | Keep distinct from marketing; preserve candid security posture and reporting channel. |
| /privacy | Truthful current contact functionality | Review against any approved new assets/providers; no analytics or font-provider requests added by default. |
| /terms | Emerging-lab boundaries | Reconcile final legal identity and actual offerings, without inventing legal guarantees. |

## Interaction, accessibility and performance limits

Existing reduced-motion CSS and the canvas's reduced-motion guard are useful. Current captures use reduced motion to avoid animation-timing artifacts. Normal-motion costs need a separate measured sample; no claim that disabling motion alone fixes performance. Keyboard/menu behavior is backed by the security suite. Full screen-reader testing, cognitive accessibility research, forced-color behavior, touch hardware testing, zoom and real-user task completion remain work for the approved implementation.

Performance evidence at this checkpoint is a local lab baseline, not real-user Core Web Vitals. Resource transfer counts and paint/layout observations are not interchangeable with LCP, INP or field p75. Future acceptance targets: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms where measurable. Compare identical routes/device/network/cache profiles before and after; use repeated throttled lab runs plus field data when available. Do not make a future-CWV guarantee from the static mockups.
