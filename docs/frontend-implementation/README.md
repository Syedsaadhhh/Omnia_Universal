# Open Register review packet

The founder selected A and authorized implementation. Start with [CHECKPOINT.md](CHECKPOINT.md) for the before/after findings, review boundaries and remaining work; [PERFORMANCE.md](PERFORMANCE.md) for measured limits; root WORK_STATE.md for exact branch/PR/test/approval state. PRODUCT.md describes truth and audiences; DESIGN.md describes the implemented visual system, with its machine-readable record in .impeccable/design.json.

- F1: shared identity/shell/fonts and two audience routes. [Details](F1.md).
- F2: homepage/research/work and evidence records. [Details](F2.md).
- F3: supporting pages, font/reflow fixes, SEO and expanded acceptance evidence. [Verification story](VERIFICATION_STORY.md).
- Internal business strategy: [curated operating guide](../strategy/STARTUP_AND_PRODUCT_PLAYBOOK.md). It is internal working guidance in the source repository, not a book-marketing section or claim of business success. Public method/intake/template features apply useful principles without inventing completed research.

Review actual screenshots in .impeccable/review/: desktop1440px, tablet768px, phone390px and narrow320px, plus menu focus/Escape. Full 24-route×4-width regression captures are available in test-results/screenshots and in the hosted Engineering workflow's regression-evidence artifact (seven-day retention). The persistent40-page representative matrix is accompanied by browser-summary.json. Files ending first.png are preserved initial defect evidence and are not final screenshots.

Run with Node24: `npm ci --ignore-scripts --no-audit --no-fund`, then `npm run typecheck`, `npm test`, `npm run build` and `npm run test:integration`. Local Chromium may be selected with `PLAYWRIGHT_CHROMIUM_EXECUTABLE=/usr/bin/chromium`; hosted CI installs its matching browser. `npm start` serves the prepared standalone build. No secrets or email service are required for the tested flow; the contact API remains disabled for delivery.

The Impeccable comp-engine state is intentionally preserved with its open plates/component-review phase. Owner-selected study approval and direct browser/fresh reviewer verification are documented; automated fidelity completion is not claimed. Generated font-match/build diagnostics are authoring evidence, not an application dependency. The existing security workflow and Docker/runtime checks remain intact.
