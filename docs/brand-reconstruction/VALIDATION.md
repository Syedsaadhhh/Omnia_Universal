# Validation and limitations

Date: 2026-10-16. Application baseline: c5d2500. No application redesign has occurred.

## Existing engineering foundation

| Check | Observed result |
|---|---|
| Production build | Pass; Next 16.4.2, static content routes preserved |
| TypeScript | Pass |
| Unit tests | 48 passed, zero failed/skipped |
| Production integration | 39 passed, zero skipped; system Chromium through the supported environment override |
| Dependency audit | Zero reported findings; see engineering/npm-audit.txt |
| GitHub Actions at PR #6 c5d2500 | Engineering success; [run 38828095156](https://github.com/Syedsaadhhh/Omnia_Universal/actions/runs/38828095156) |
| Cloudflare Workers | Existing failing integration check remains visible; not changed or bypassed |

Logs, PR states, PR #6 changed-file list and remote refs: evidence/engineering/. The initial local integration invocation failed to launch the missing default bundled browser; the installed /usr/bin/chromium override fixed that environmental issue. This is explicitly preserved in the logs. Docker was not rebuilt for a documentation/static-study-only change; PR #6's verified container checkpoint remains the reference. No new hosted frontend CI run or PR is claimed.

## Browser and accessibility evidence

- Baseline: 40 local route/viewport captures, one local menu interaction state, ten ordinary live-page captures. All ten live routes returned 200 in this environment. No active public security testing or submissions.
- Twenty baseline axe scans (1440 and 320px, all ten routes), no reported violations. No document overflow in 40 local samples. Current screenshots use reduced motion for stable capture.
- Studies: six HTML documents at 1440/768/390/320, 24 automated accessibility/overflow/asset/fragment/heading samples; three keyboard menu state checks. Final samples have no reported axe violation, document overflow, missing fragment or broken image. Escape closes and returns focus in all three menus.
- Initial study review found low-contrast notes in A/C identity documents and narrow-screen wireframe overflow. One bounded correction batch changed the review-note color and grid/word reflow. The final second capture confirms these corrections. Initial evidence remains available.
- Main homepages are static, with no running CSS animation in sampled reduced-motion states. Final production interaction/screen-reader/zoom/touch/performance acceptance remains future work. There is no WCAG certification claim.
- Impeccable detector ran once; 130 observations and manual disposition are recorded in README.md. Its incumbent-token differences are expected during identity exploration. Two contrast warnings were real and corrected; a green detector score is not claimed.

## Local lab performance baseline

Source: [performance-baseline.json](evidence/performance-baseline.json). Six fresh-context Chromium homepage samples at 390×844, three per motion preference; cache disabled, 4× CPU slowdown, 150ms network latency, 1.6Mbps down / 750kbps up, local origin. Medians:

| Motion | LCP | Observed CLS | Encoded script bytes |
|---|---:|---:|---:|
| Normal | 1,248ms | 0 | 146,515 |
| Reduced | 1,332ms | 0 | 146,515 |

These are a bounded lab baseline, not production field p75 or proof that motion improves/worsens performance. Concurrent cloud work and the limited observation window affect results. No INP or real-user interaction measurement was collected; click duration must not be substituted for field INP. No live after-redesign performance comparison exists because the redesign is not approved or implemented.

Future implementation target: LCP ≤2.5s, CLS ≤0.1 and INP ≤200ms where measurable. Repeat the same profile plus desktop and representative detail pages, and compare actual field data if available. First-load JS should not exceed the baseline without a demonstrated need.

## Concept asset costs and residual risks

The study CSS is about 17KiB uncompressed. Navigation is a small native-details enhancement, not an added library. Review fonts are self-hosted OFL subsets. A loads roughly 229KiB compressed fonts (Literata variable plus Schibsted Grotesk), B roughly 82KiB, C roughly 99KiB, before cache; only used faces load. A is above the proposed ≤140KiB initial font budget and must be reduced through approved fixed-axis/style/subset choices, or reconsidered before integration. Do not claim the three static HTML studies predict the final Next.js bundle or web vitals. Original TTFs are retained for authoring, not loaded by study CSS.

Pending: owner direction selection; naming clearance in Pakistan and prioritized international markets; mark similarity and small-size/print review; founder/project-fact reconfirmation; manual screen-reader/zoom/forced-color/touch testing; final font/language budget. Existing CSP inline allowances, future ingress budgets and www/provider verification remain tracked under PR #6 rather than silently considered solved by branding.

## Production boundary

No merge, main write, feature push, release, deployment, DNS/provider/environment change, external email or paid service. Vercel production was verified as main@9cc1399, deployment dpl_8RmUj4RirHa6JEiuoY5gZStoZFr4. Current Vercel branch skip covers only the security branch; Cloudflare's previous owner confirmation covers audit/* and fix/*. This new feat/* branch is committed locally and must not be published until its integration safety is established.
