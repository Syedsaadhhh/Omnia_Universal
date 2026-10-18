# Performance comparison

Measured 18 October 2026 against the saved c5d2500 lab baseline. Same scripted profile: Chromium,390×844, fresh context/cache disabled, CPU4× slowdown,150ms latency,1.6Mbps down/750kbps up, three runs per motion setting. Raw samples: [baseline](../brand-reconstruction/evidence/performance-baseline.json) and [Open Register](evidence/performance.json). Authoring script: tools/measure-frontend.mjs.

| Observation | PR6 baseline | Open Register F3 |
|---|---:|---:|
| Median LCP, ordinary motion | 1,248ms | 660ms |
| Median LCP, reduced motion | 1,332ms | 652ms |
| Median observed CLS | 0 | 0.00174 |
| Encoded script resource bytes | 146,515 | 139,715 |
| Initial selected-font compressed bytes | Not the selected brand | 86,644 |
| Continuously running CSS animations | 0 | 0 |
| Decorative canvas | 1 | 0 |

These samples meet the requested LCP≤2.5s and CLS≤0.1 lab targets. They do not establish real-user Core Web Vitals or field p75. No meaningful INP measurement was performed; short scripted navigation is not a substitute for field INP. The sessions occurred on different dates/cloud instances and load can vary. The before/after timing difference is an observation, not a controlled causal benchmark or a guaranteed production improvement. Resources are measured at the local origin rather than a production CDN; browser encoded script bytes are not an overall page transfer budget.

Selected fonts were independently reduced from roughly229KiB in the exploratory study to about85KiB by choosing the used Literata axes/style and Latin character coverage. A file-download check alone missed an initial CSS variable scope error; the final suite now verifies actual rendered custom-font glyphs with Chromium's platform-font API. The small observed layout shift remains well below0.1 but is not represented as zero. Both fonts self-host; no external runtime requests were observed in the tested homepage flow. No remote font provider, analytics, video, canvas animation or animation library is loaded.

The browser tests cover reduced motion, forced colors, narrow screens and text enlargement. Mobile navigation/filter interactions are functionally tested; this does not establish INP≤200ms on customer devices. Future release validation should use the approved deployment and, when sufficient traffic/consent exists, appropriate real-user field measurements. No analytics service was added merely to claim a measurement.
