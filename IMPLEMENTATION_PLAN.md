# Phased implementation and release plan

Status: proposed; checkpoint awaiting founder review. No application implementation, remote branch push, PR, merge, deployment, domain change, provider configuration change, or deletion has occurred in this audit pass.

The source baseline is `9cc1399fb1ca9642d5f91c898e0f533e85aae5fc`. Keep this as the known source rollback reference. The existing READY production deployment is `dpl_8RmUj4RirHa6JEiuoY5gZStoZFr4`. Its future availability as a rollback target must be confirmed at release time; this document does not guarantee a retained provider artifact.

## Gate 0 — review this baseline

Review `AUDIT_BASELINE.md`, `SECURITY_FINDINGS.md`, `POSITIONING_AND_IA.md` and the screenshot/evidence index. Confirm spelling/logo direction and approve starting code changes on feature branches. A local documentation branch is ready. Publishing a branch/PR can trigger existing Vercel/Cloudflare Git builds; obtain explicit preview-build authorization or verify a provider-supported no-build path before publication. Do not infer that a draft PR prevents deployments.

Implementation approval does not authorize merging, releasing, altering DNS/provider settings, enabling email delivery, deleting old projects or buying services. Continue preparing concrete, tested PRs; obtain approval for the exact release/infrastructure action as the final step.

## PR 1 — reproducible dependencies, security boundaries and metadata

Suggested branch: `fix/reproducible-build-and-contact-boundaries`.

| Area | Proposed files | Acceptance evidence |
| --- | --- | --- |
| Dependency remediation | `package.json`, new root `package-lock.json`, `Dockerfile` | Reviewed patched Next 16 candidate; compatible PostCSS/Sharp tree; `npm ci`; no blind major upgrades; audit residuals documented |
| Toolchain | `package.json`, Docker docs, optionally version file | Deliberate Node version agreement with Vercel Node24 or documented supported Docker22 alternative; clean build |
| Tests and CI | test files, `.github/workflows/ci.yml`, package scripts | Input-contract tests plus real production browser/route checks; read-only job token, SHA-pinned reviewed actions, no deploy step, no production secrets, no skipped success |
| Contact boundary | `app/api/contact/route.ts`, focused helpers under `lib/` if needed | Default-disabled unused delivery or explicit safe enablement; byte limits, safe JSON/object errors, canonical allowlist, bounded provider behavior; no real email in CI |
| Secrets prevention | `.gitignore` | `.env*` ignored with intentional `.env.example` exception; no environment values in repo/logs |
| Canonical origin | `lib/site.ts`, metadata declarations in layout/pages, robots/sitemap | Apex-domain default and distinct page paths verified in built output; correct social image/URL; preview indexing handled deliberately |
| Operational docs | README, DEPLOYMENT | Actual Vercel linkage, role/limits of existing Docker/Railway alternative and Cloudflare failure; exact environment **names**, not values |

Recommended first intake choice: keep the existing visible email path. A dormant API can fail closed before parsing/delivery rather than adding a new database/paid limiter. Retain source and interface for a later need. If the owner chooses a live form, trusted-ingress and multi-instance enforcement must be proven before activation, not deferred behind an in-memory Map.

Test cases: JSON malformed/null/array, content type, byte threshold including missing/misleading length, invalid/valid fields, literal consent, honeypot, allowed/absent/forged origin, trusted proxy key selection, missing provider settings, fixed recipient and escaped HTML, delivery error/timeout, retries as appropriate. Do not encode the baseline's undesirable 500/oversize behavior as a passing regression contract.

Run clean install → typecheck → unit/integration → production build → production-server smoke → dependency audit → diff/secret check. Build and metadata checks must exercise generated output, not only string-match source. If supporting Docker at release, build/run that exact image using the environment's proxy/CA guidance; it was not validated in the audit.

Rollback: revert this PR on a branch and rerun the same checks; preserve prior lock/toolchain evidence. Reverting dependencies can restore vulnerable versions, so security rollback needs an explicit risk decision. No production rollback is executed automatically.

## PR 2 — broad public identity, navigation and homepage

Suggested branch: `feat/multidisciplinary-lab-identity`.

Files: `lib/site.ts` or extracted `lib/content/site.ts`; `app/page.tsx`, `app/layout.tsx`, `app/manifest.ts`, `app/opengraph-image.tsx`; `components/Header.tsx`, `Footer.tsx`, `Logo.tsx`, and the illustrative `CommandPanel.tsx` if retained; focused CSS edits.

Implement the approved full spelling and broad mission; founder-led formation stage; research-to-validation-to-engineering process; collaborator and organization CTAs; current scope/capacity boundaries. Deprioritize ReproForge/GNS3 on home without deleting links/history. Remove or clearly label simulated “Verified”/“SYSTEM ACTIVE” presentation. Do not add invented team logos, counts, funding, clients, patents or claims.

Fix mobile closed-menu focus and keyboard dismissal with dedicated browser checks. Retain the current cohesive visual system; keep the brand name readable on mobile. Capture desktop/tablet/mobile screenshots and compare page hierarchy with this baseline. Verify headers and hydration if CSP is changed. CSP tightening may be a separate focused PR if nonces alter rendering/caching substantially.

Rollback: revert identity/navigation changes as a unit; existing public paths remain valid. Deploy remains separately gated.

## PR 3 — research, work, collaboration and organization intake

Suggested branch: `feat/research-work-and-collaboration`.

Files: new `lib/content/projects.ts`, `research.ts`, `updates.ts` as justified; update `app/research/page.tsx`, `app/projects/page.tsx`, `components/ProjectsGallery.tsx`, `app/about/page.tsx`; new `/studio` and `/collaborate` pages; sitemap/navigation entries and metadata.

Separate maturity from topic and site-archive state. Record ownership/team credit, evidence, limitations and verification dates. Consolidate duplicate project data without dropping work. Publish honest empty states where new research evidence is absent. Do not describe proposed contributors as employees or promise compensation. Make collaboration and organization inquiries possible with minimal, purpose-specific email prompts and privacy context; no login/CMS/database is needed.

Tests: filter combinations and empty results, anchors/direct links, preserved credits, accessible result count, real page metadata, all internal destinations, consent/privacy text and no unsolicited network submission on contact-page load. Cross-check elevated project claims with owner/source evidence before publication. Existing demos remain links; do not modify those projects under website authorization alone.

Rollback: restore previous content modules/pages together; preserve old slug aliases if new details are added.

## PR 4 — legacy context, privacy/legal and operating documentation

Suggested branch: `docs/truthful-project-context-and-privacy` (may include page code).

Files: `/gns3-agent`, Work records, About, Updates, Privacy, Terms, Security, README, DEPLOYMENT, robots/sitemap; redirects only if genuinely needed and approved. Keep founder/team attribution and source repositories intact. Distinguish website archival/deprioritization from project discontinuation. Clarify whether a case-study CTA opens an actual detail view rather than its own card.

Reconcile privacy copy with enabled email/form behavior, host/mail processors, actual retention and deletion route. Do not promise provider policies that have not been confirmed. Separate website security facts from product operating principles. Add a release/rollback/incident checklist with non-sensitive commit evidence and a live inbox acceptance test to be run only after owner authorizes real delivery.

Tests: route/redirect/fragment matrix, content-truth review, privacy-to-intake consistency, mailto encoding, evidence links and safe external rel attributes. Owner supplies any missing provider practice/claim approval through official access or factual confirmation; do not request secrets in chat.

Rollback: restore affected pages/docs; preserve permanent URL behavior and credit records.

## PR 5 — responsive, accessibility and measured performance polish

Suggested branch: `fix/accessibility-and-responsive-polish`.

Files depend on measured issues: shared components, founder image semantics, `styles/*`, `app/globals.css`, and relevant assets. Consolidate CSS incrementally and remove dead presentation only after reference/visual checks. Profile canvas/animations before changing implementation; preserve useful reduced-motion behavior. Do not introduce a new framework or generic dashboard.

Checks: keyboard navigation, 200% text/zoom checks, axe plus manual landmarks/headings and speech/screen-reader spot checks where available, 320/390/768/1440 widths, touch targets, all critical user journeys, browser console, CSP errors, image loading, real performance measurements on a defined device/profile. Report field Core Web Vitals only if a field data source exists. One bounded batched inspection, then a focused confirmation after fixes, avoids endless cosmetic iteration.

Rollback: revert isolated style/behavior batches and compare saved screenshots.

## Release/infrastructure gate — separate explicit approval

Prepare all of the following before requesting the final release action:

1. Exact approved PR commits, passing required checks, source diff, no secret-bearing artifacts, and reviewer-ready screenshots.
2. Verified Vercel team/project, production branch, build/runtime Node version, environment variable **names/scopes**, domain assignment and current deployment. Never pull or publish production secret values to make a report.
3. If a preview is approved, exercise it with appropriate Vercel protection access; no public auth bypass changes. Validate build-time canonical behavior and provider headers. Do not promote a preview on the assumption it is the exact production build.
4. Decide the intended `www` behavior and validate DNS/TLS independently before preparing a precise optional change. Keep current HSTS subdomain scope until verified.
5. Record current provider deployment/source rollback references, confirm retention/rollback availability and costs, and preserve backups of any state/configuration through official tools. Do not promise a zero-downtime rollback without a rehearsal.
6. Prepare minimal GET uptime/error monitoring, provider email budget/alerts if email is activated, privacy-safe log retention and ownership. No automatic test emails on health probes.
7. Ask approval for the exact merge/deployment/configuration action with target and rollback. Then, only when authorized, release through the existing provider and independently verify domain, revision, routes, headers, metadata, mobile navigation and authorized inbox test.

The failed Cloudflare integration and Railway configuration remain intact until their purpose is understood. There is no authorized cleanup/deletion step. Never mark a finding “fixed in production” from local code/tests or an unmerged PR.

## Every PR handoff

Describe the concrete trigger and resulting behavior, relevant files, exact checks and outcomes, evidence/screenshots, residual risk, deployment state, and rollback. Update `WORK_STATE.md` with branch, commit, PR link, unresolved access needs and exact next command. Keep speculative product claims and personal submissions out of the repository. Do not merge, deploy, or enable auto-merge in a PR-creation step.
