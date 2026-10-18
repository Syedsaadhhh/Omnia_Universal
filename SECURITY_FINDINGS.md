# Severity-ranked security, privacy, reliability, and product findings

Baseline: `main@9cc1399fb1ca9642d5f91c898e0f533e85aae5fc`, inspected 2026-10-15 UTC. No remediation is implemented in this documentation checkpoint. Reproduction described here occurred only in isolated local copies; live checks were passive GETs, DNS, headers, and ordinary browser rendering.

Severity is site-specific. **Verified vulnerability** means a reproduced security control failure within the stated environment; **design weakness** means a confirmed implementation limitation with conditional exploitability; **operational gap** means missing observable engineering controls; **business/UX debt** is not a security exploit. **Unverified concern** requires further access/evidence. No confirmed production compromise or critical exploitable application vulnerability was found.

## Top ten backlog

| Rank / ID | Severity | Classification | Finding and evidence quality | First action |
| --- | --- | --- | --- | --- |
| 1 / F01 | High | Dependency exposure; production exploitability unverified | Pinned Next `16.2.9`, overridden PostCSS `8.5.10`, resolved Sharp `0.34.5` match advisories; npm registry/audit and source verified | Evaluate current patched Next 16 release and compatible transitive fixes; remove/update unsafe override; lock and test |
| 2 / F02 | High | Operational gap | No tracked lockfile; Docker uses `npm install`; fresh dependency resolutions vary | Commit reviewed root lockfile; use `npm ci`; record aligned Node version |
| 3 / F03 | High | Operational gap | No workflows/runs or test script; main reports unprotected; rulesets empty; environments lack review rules | Add meaningful CI; owner-approved GitHub and provider release gating |
| 4 / F04 | Medium | Verified local limiter bypass; conditional production weakness | Fifth request from one forwarded IP gets 429, replacement header gets 503; process-local Map never prunes keys | Keep unused email API disabled or add trustworthy provider-aware, bounded/durable controls before activation |
| 5 / F05 | Medium | Design weakness and verified local input defects | No byte/deadline limit; 1 MiB reaches handler; malformed/null JSON gets 500; fallback origin trusts forwarded host | Bound input, require canonical allowlist, safe errors and delivery timeout; test proxy assumptions |
| 6 / F06 | Medium | Reliability / SEO debt | Live canonicals on all ten pages point to old Vercel homepage; robots and sitemap use old host | Correct default origin and per-route canonical/OG URLs; verify built output |
| 7 / F07 | Medium | Privacy / operational debt | Privacy describes form; actual page is mailto-only; retention/provider operations unverified | Reconcile notice with selected intake mode and actual provider practices |
| 8 / F08 | Medium | Accessibility / UX defect | Local keyboard focus enters closed mobile navigation; Escape fails; shared brand name mismatch flagged by axe | Hide/inert closed menu, predictable keyboard dismissal/focus; align visible/accessibility names |
| 9 / F09 | Medium (high business priority) | Business / UX debt | Live hero/metadata/research/roadmap and taxonomy remain AI/cyber/flagship-led | Implement evidence-led multidisciplinary lab narrative after review; preserve credits and old work |
| 10 / F10 | Low | Defense-in-depth weakness | Source and live CSP permit `script-src 'unsafe-inline'`; no injection proved | Evaluate nonce/hash-compatible rendering and test Next navigation before tightening |

## Detailed findings and acceptance tests

### F01 — affected dependency versions

**Evidence:** `package.json:12`, `package.json:28`, isolated resolved lock, and [npm audit JSON](docs/audit/evidence/npm-audit.json). Audit reports 1 critical and 2 high **package entries**. Production Next is pinned in the deployed source; full production resolution and platform mitigations were not retrieved. No exploit payload was sent to production.

Relevant primary advisories and applicability:

| Advisory | Upstream severity / fix | Observed prerequisites and limits |
| --- | --- | --- |
| [GHSA-vcvr-r3jv-pc5j](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j) | Critical; Next 16.3.6 | Node `next/og` with attacker-controlled SVG values. `app/opengraph-image.tsx` uses fixed content and was prerendered; that input prerequisite was not found |
| [GHSA-2xp9-vwfh-vxw4](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4) | Critical; Next 16.3.3 | AVIF image processing via native libraries. No upload route, remote image allowlist, or AVIF asset was found; reachable attacker-controlled image processing is unverified |
| [GHSA-p293-qw3h-jr36](https://github.com/advisories/GHSA-p293-qw3h-jr36) | Critical; Next 16.3.3 | Windows-hosted servers. Audited environment and declared Docker are Linux; no evidence of Windows production hosting |
| [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q), [GHSA-fxqj-rqcc-2cmp](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp) | High / moderate; later PostCSS fixes needed | Untrusted CSS source maps can reach filesystem reads. Current CSS is repository-controlled; relevant to build supply chain rather than a demonstrated anonymous website attack |
| [GHSA-wq5f-xc86-pv6w](https://github.com/advisories/GHSA-wq5f-xc86-pv6w) | High; Sharp 0.35.5 | Native SVG processing; actual image input reachability and Vercel's image pipeline differ from local resolution |
| [GHSA-cjq9-62q9-8jv4](https://github.com/advisories/GHSA-cjq9-62q9-8jv4) | High; Next 16.3.8 | Image optimization SSRF prerequisites need configuration-specific review |

The full audit also lists proxy/middleware, Server Action, cache, and development-server issues. This repository has no middleware/proxy, authored Server Actions, external rewrites, or production dev-server evidence. Do not report those prerequisites as present. Absence of an application-level exploit demonstration is not a reason to retain affected dependencies.

**Impact / prerequisite:** exposure if vulnerable framework/native paths receive eligible attacker input, or untrusted build inputs are processed. **Mitigation:** evaluate Next `16.4.2` (registry current at audit), review release notes and compatibility, remove/update PostCSS override, verify Sharp tree, commit a deterministic lock. Do not run blanket `npm audit fix --force`.

**Proposed tests:** clean `npm ci`, inspect actual dependency tree, `npm audit --json`, typecheck, production build, rendered pages, image/OG routes, API contract checks. Remaining advisories require written applicability decisions. **Residual uncertainty:** deployed transitive tree, provider patching, native image behavior; application-level exploitability not established.

### F02 — non-reproducible installations

**Evidence:** no root lock in 52 tracked files; `Dockerfile:3–4` copies optional lock then runs `npm install`; `package.json` contains caret ranges. Fresh audit resolution produced React 19.3.1 and Resend 6.33.0 rather than the lower declared range endpoints. Baseline audit fails `ENOLOCK`.

**Impact / prerequisite:** identical source commits can install different code when registry ranges change; rollback/review cannot reliably identify deployed dependencies. A compromised eligible package version could enter an unattended build. This is a confirmed engineering gap, not evidence of a supply-chain attack.

**Mitigation:** reviewed root `package-lock.json`; `npm ci` in Docker/CI; explicit supported Node choice matching Vercel and local checks; document snapshot provenance. **Test:** two clean installs produce the same lock/tree, lock drift fails CI, clean production build. **Residual:** base image tags and optional platform packages also need controlled update policy; do not blindly pin an unverified image digest.

### F03 — insufficient visible release/test controls

**Evidence:** GitHub workflows/runs count 0; no tests/script; `main.protected=false`, rulesets `[]`; Production/Preview environment rules empty. A Vercel status is green but Cloudflare Workers check failed on the same source. Detailed branch administration returned 403 and provider release policies were not fully exposed.

**Impact / prerequisite:** a mistaken or compromised authorized write can reach a Git-linked deployment without demonstrated correctness checks or an independent review. **Mitigation:** branch-local tests/CI first; then owner-approved required checks, review rules, and provider deployment controls. Do not assume a GitHub environment reviewer gates Vercel Git integration. Investigate Cloudflare's intended role before changing or deleting anything.

**Test:** invalid fixture/check failure blocks the intended merge/release path; inspect provider production branch and documented promotion policy without triggering a release. **Residual:** admin bypass/integration permissions, webhook scope, and actual provider policies remain unverified. No settings changed here.

### F04 — throttling is caller-header dependent and process-local

**Evidence:** `app/api/contact/route.ts:17–35`. Actual-handler harness: attempts 1–4 using `203.0.113.99` returned 503 (provider deliberately absent); attempt 5 returned 429; changing `x-forwarded-for` to `203.0.113.100` returned 503. Thus changing the supplied key bypassed that local bucket. Map entries are never globally removed; only a revisited key is reset after expiry.

**Impact / prerequisite:** spam and email budget abuse if the public proxy preserves an attacker-controlled chosen header and provider delivery is enabled. Buckets are inherently separate across workers/restarts; unique keys can grow memory in long-lived instances. Provider rewriting, real production configuration, and fleet behavior were not tested. Origin headers are forgeable by non-browser clients, so same-origin checks are not a spam barrier.

**Mitigation:** because the visible UI uses mailto, prefer explicitly disabling unused delivery until needed, retaining source. If a form is approved, use a documented trusted proxy boundary with a shared limiter or provider-native enforcement, bounded fallback storage, global send budget, and rate-limit response metadata. Do not introduce paid storage without authorization.

**Test:** exhausted-key behavior, forged headers at the trusted ingress, worker/restart behavior, bounded expiry, missing limiter/config fails closed, no real provider calls. **Residual:** NAT fairness, bot evasion, provider cost limits; no abuse-control design guarantees zero spam.

### F05 — input/resource/error boundary gaps

**Evidence:** `app/api/contact/route.ts:45–63,76–97`. `request.json()` consumes body before schema limits; unknown fields are stripped after parsing. A synthetic 1 MiB unknown field reached the configuration check over the local production HTTP server (503), and reached mocked delivery in the actual-handler harness (200). This demonstrates missing application byte enforcement, not production unlimited body acceptance. Malformed JSON and `null` returned generic 500 locally. There is no explicit provider deadline or idempotency key; two identical mocked submissions produced two deliveries.

When `NEXT_PUBLIC_SITE_URL` is absent, `sameOrigin` constructs expected origin from forwarded host/protocol. In the harness, a matching forged origin/forwarded host advanced to validation (400); setting the canonical environment origin restored 403. Exploitability depends on ingress behavior. Browser CSRF was not demonstrated.

**Impact:** unnecessary parsing/memory/log volume; accidental double mail; brittle preview/production origin behavior and delivery waits. Platform limits can reduce impact but do not replace an explicit application contract.

**Mitigation:** reject excess bytes while reading, including chunked/unknown length requests; JSON/object failures → 400, unsupported types → 415, oversized payload → 413; exact approved origin allowlist; bounded delivery timeout and privacy-safe error classes. Use idempotency only if needed for the chosen active intake. Check subject control characters without claiming header injection through the JSON email API. Do not log raw provider errors or request contents.

**Test:** byte limit just below/at/above threshold, false content-length/chunked delivery, malformed/null/array JSON, honeypot, consent validation, fixed recipient, HTML escaping, missing config, 429, provider error/timeout, duplicate retry. Existing escaping and fixed destination worked in mocks and should be preserved. **Residual:** real provider handling/retry semantics and production ingress limits are unverified.

### F06 — deployed canonical and social-origin drift

**Evidence:** `lib/site.ts:6–8`, `app/layout.tsx:43`, `app/robots.ts`, `app/sitemap.ts`; live route evidence. All content routes inherit root canonical `/`; deployed output resolves it to `https://omniaseclabsai.vercel.app`. Robots and all sitemap locations use that host. Shared OG URL is also rooted in `site.url`.

**Impact:** preferred domain and distinct page identities are misrepresented to crawlers/social consumers; ranking loss itself was not measured. **Mitigation:** validated production-domain default, explicit per-page canonical/OG URLs, intentional preview indexing policy; use stable factual content dates. A runtime variable change alone may not repair already-built static metadata and would itself require deployment approval.

**Test:** inspect built HTML for each route, unique correct canonical path, OG/Twitter image URL and sitemap/robots host. **Residual:** search index refresh and provider build-time environment values remain outside the audit.

### F07 — intake/privacy account does not match the current visitor flow

**Evidence:** `app/contact/page.tsx:14–23` is mailto-only; `app/privacy/page.tsx:12–16` describes a form and email provider; README says the form uses Resend. The dormant API can still accept calls if configured. No application database/analytics script was found, and no third-party resource host was observed in sampled browser loads. A session-storage animation flag is described in privacy but no current source access to sessionStorage was found.

**Impact:** visitors cannot understand the actual collection path, processors, retention, and options; prospective collaborators need a clearer submission/use boundary. Raw provider exceptions are logged by the API, with unknown production log visibility/retention; no real personal data leak was observed.

**Mitigation:** choose and document mailto-first intake initially; clarify email-client/mail-host handling and any separately active API. Confirm mailbox/hosting/log retention before promising numbers or deletion behavior. For later forms, link privacy at consent; purpose-limited fields, no automated mailing-list enrollment, no publishing collaborator identity without separate permission. **Test:** rendered text matches enabled paths; no network request occurs merely by opening contact; synthetic logs exclude payload/credentials; consent and failure states tested before form release. **Residual:** provider processing agreements, jurisdictional/legal review, inbox operation not established.

### F08 — keyboard navigation and accessible naming defects

**Evidence:** `components/Header.tsx:42–65`, `styles/part-1.css:68–70`. At 390px, closed menu uses `max-height:0` with overflow clipping but links are still in the focus sequence. After six Tabs, focus was on “Build Log” inside the closed menu. Opening works, Escape-close assertion fails, route selection closes it. No focus trap is claimed. Axe also flags shared Logo links at desktop (`components/Logo.tsx:6–13`): visible child text and `aria-label` differ in whitespace; assistive/speech behavior needs manual confirmation.

**Impact:** keyboard users can navigate clipped links and lose context; menu dismissal is less predictable; speech labels may differ. **Mitigation:** `hidden`/inert or conditional rendering with appropriate transition, `aria-controls`, Escape and focus return, consistent label text. Preserve skip link, button semantics, aria-expanded, focus-visible styles, reduced-motion support, and aria-pressed project filters.

**Test:** tab order closed/open at desktop/mobile, Escape, route change, active route semantics, axe; inspect founder portrait alternative when CSS hides `<img>`. **Residual:** eight automated scans are not full WCAG conformance, screen-reader, zoom, or speech-control testing.

### F09 — public positioning conflicts with the founder's direction

**Evidence:** `app/page.tsx:15–20,32–55,73–85`, `lib/site.ts:1–8,23–34,229–254`, shared layout/footer/manifest/social image and research page. Live copy promises a narrow verified-autonomy story, prioritizes ReproForge, and displays simulated “SYSTEM ACTIVE”/“Verified” traces. Project maturity strings and “PRE-SEED BUILD” presentation lack a linked claim register here. This audit does not declare those projects or claims false; underlying work was not separately audited.

**Impact:** collaborators and prospective customers may misunderstand lab scope, operating stage, product evidence, or capacity. **Mitigation:** research → validation → engineering → products/ventures narrative, explicit founder-led formation, two audience CTAs, evidence-typed projects with truthful credits and optional domains. Label illustrative visuals as illustrative or replace with process illustration. Deprioritize older projects without deleting them or asserting they are abandoned.

**Test:** content review against owner-confirmed facts, no invented members/customers/funding/claims, preserved project paths/credits, consent-respecting collaboration CTA, browser screenshots. **Residual:** founder must confirm final spelling/logo and project evidence/ownership for claims newly elevated.

### F10 — CSP inline allowance

**Evidence:** `next.config.ts:20–21` and live apex response. Inline scripts/styles are allowed. Organization JSON-LD is trusted today; no user-controlled HTML rendering or demonstrated XSS found.

**Impact / prerequisite:** if an injection flaw is introduced elsewhere, this policy supplies weaker script containment. **Mitigation:** assess static hashes vs request nonces and Next rendering/cache implications; optionally validate report-only policy before enforcement. Keep necessary styles functional. **Test:** production build, hydration, navigation, JSON-LD and OG, console/CSP violations; ensure security headers survive provider proxy. **Residual:** a nonce is not a substitute for safe data handling and may alter static-rendering economics; HSTS is already present and should not be expanded across unverified subdomains.

## Additional findings and access-limited concerns

| ID | Severity / class | Evidence, impact, action, validation, remaining uncertainty |
| --- | --- | --- |
| F11 | Medium priority / unverified operational concern | `www` resolves differently and returns upstream 503 in this environment via HTTP and browser. Apex works. Confirm intended alias and independent public reachability in domain/provider dashboard; validate TLS and redirect before an approved DNS change. No public outage/root cause claimed |
| F12 | Low / secrets-prevention gap | `.gitignore` does not cover `.env.production`/`.env.staging`; `git check-ignore` confirmed. Add `.env*` with `.env.example` exception and tests/checks; current historical pattern scan found no secret match, not a guarantee |
| F13 | Low / operations gap | Health route is static liveness and deployment guide lacks revision/rollback verification. Document readiness separately without external email sends on probes; add sanitized commit evidence, monitored GET uptime and rollback runbook when approved. Production monitoring/backup settings unknown |
| F14 | Low / documentation and configuration debt | README/DEPLOYMENT say Railway; actual apex Vercel Node24, Docker Node22; failed Workers check has no explained role. Correct documentation after provider inventory; keep all projects/configuration intact until owner chooses disposition |
| F15 | Medium business risk / naming concern | Primary sites at `docs.omniasec.ai`, `omnialabs.ai`, and `omnialabs.com.br` use similar names in overlapping technology markets. Document differentiation and seek jurisdiction-appropriate trademark/company-name checks before investing in final brand assets. No trademark infringement or legal clearance asserted |

## What worked and what was not established

Verified positives: HTTPS redirect and existing HSTS on apex, deployed defense headers, non-root Docker runner, strict TypeScript, Zod constraints, literal consent check, honeypot neutral response, HTML escaping, fixed email recipient, generic client error messages, mailto fallback, no observed behavioral analytics, functioning internal links, responsive route rendering, working project filters, founder attribution, and team context for existing work.

Not established: real contact delivery, email credentials or sender verification, production request-header rewriting, origin TLS chain, fleet/restart exploitability, provider cost budgets, production log retention, organization-wide GitHub controls, secret-scanning results behind 403, Cloudflare failure cause, Railway deployment history, real customer/product outcomes, public `www` outage, or legal brand clearance. None is silently counted as a passed check or an exploited vulnerability.
