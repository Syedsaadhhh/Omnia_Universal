# Audit evidence and controlled reproduction

Date: 2026-10-15 UTC. Source: `main@9cc1399fb1ca9642d5f91c898e0f533e85aae5fc`.

Read the root audit/findings/architecture/plan and `WORK_STATE.md` first. These artifacts record a baseline, not a code fix, deployment, penetration-test certification, or claim of production exploitability. The audit scripts are investigation tools; some expected results intentionally reproduce undesirable baseline behavior. They must not become passing security regression requirements unchanged.

## Evidence index

| File | What it establishes |
| --- | --- |
| `evidence/source-inventory.json` | 52 tracked source files with sizes/hashes before documentation additions |
| `evidence/github-controls.json` | Curated branch/ruleset/workflow/environment responses and scope-limited controls |
| `evidence/hosting-linkage.json` | Non-secret Vercel project/deployment metadata, alias and repository SHA linkage |
| `evidence/network-observations.json` | Curated DNS/redirect/mail observations, with certificate and reachability limitations |
| `evidence/public-routes.json` | Passive GET status/headers/metadata for 15 public paths, including expected GET 405 on contact |
| `evidence/browser-results.json` | 30 live route/viewport captures plus local interactions; page errors/resources/labels/links |
| `evidence/screenshots/` | All ten public content routes at desktop 1440×1000, tablet 768×1024, mobile 390×844; full-page PNGs, reduced-motion setting |
| `evidence/axe-results.json` | Eight local page/width scans; violations and incomplete checks, not full WCAG certification |
| `evidence/link-results.json` | Internal destination/fragment check for 284 observed link occurrences; external links explicitly unverified |
| `evidence/contact-results.json` | 24 isolated actual-handler assertions, Resend mocked; includes limiter/origin/parse/size/duplicate/error behavior |
| `evidence/contact-http.json` | Actual local production-server status checks with synthetic input and absent provider config |
| `evidence/resolved-package-lock.json` | Audit-only dependency resolution; not a root application lock or production dependency snapshot |
| `evidence/npm-audit.json` | Advisory snapshot for that resolution; exit 1, one critical and two high package entries |
| `evidence/typecheck.txt`, `evidence/build.txt` | Actual successful isolated Node24 output; terminal line endings/trailing whitespace normalized |
| `scripts/` | Baseline investigation scripts retained for resumption; never submit real visitor data |

Representative captures:

- [Desktop home](evidence/screenshots/live-desktop-home.png)
- [Mobile home](evidence/screenshots/live-mobile-home.png)
- [Desktop projects](evidence/screenshots/live-desktop-projects.png)
- [Tablet research](evidence/screenshots/live-tablet-research.png)
- [Mobile contact](evidence/screenshots/live-mobile-contact.png)
- [Desktop founder page](evidence/screenshots/live-desktop-about.png)

No private messages, authentication storage, provider credentials, production environment values or cookies were captured. Public-page screenshots include the already-public founder portrait. Do not add personal inquiry data to these artifacts.

## Commands actually used

In the isolated `/tmp/omnia-audit-runtime` copy of baseline source:

```bash
npm install --package-lock=false --ignore-scripts --no-fund --no-audit
npm run typecheck
NEXT_TELEMETRY_DISABLED=1 npm run build
npm audit --package-lock-only --json
npm install --package-lock-only --ignore-scripts --no-fund --no-audit
npm audit --json
```

The first audit returned `ENOLOCK`, exit 1. The second audit returned advisories, exit 1. Neither was described as a clean result. Build/typecheck exited 0. Installation ignored lifecycle scripts; a Docker build was not run.

For a faithful dependency reproduction in a new isolated directory, export the exact baseline using `git archive`, copy `evidence/resolved-package-lock.json` into that copy as `package-lock.json`, and use `npm ci --ignore-scripts`. Confirm Node/npm/platform and network/proxy policy first. Avoid overwriting a current working checkout. A new unlocked install may resolve differently and is not the same snapshot.

Local standalone server setup used:

```bash
cp -a public .next/standalone/public
mkdir -p .next/standalone/.next/static
cp -a .next/static/. .next/standalone/.next/static/
HOSTNAME=127.0.0.1 PORT=3100 NEXT_TELEMETRY_DISABLED=1 node .next/standalone/server.js
```

These operations were in the isolated runtime copy, with no Resend/contact credentials. Check port ownership before starting it again. The static/public copies are needed for standalone browser checks; they do not change repository source.

Contact investigation:

```bash
OMNIA_AUDIT_RUNTIME=/tmp/omnia-audit-runtime node docs/audit/scripts/contact-check.cjs
```

This transpiles the actual TypeScript handler in memory, substitutes a fake Resend client **before importing it**, and uses only synthetic `.test` email addresses. The script sets/clears process-local test variables; it never contacts Resend. It writes `/tmp/omnia-audit-evidence/contact-results.json` and intentionally logs synthetic provider errors. The 24 matched assertions include observed defects (500 on malformed/null JSON, oversized body accepted, duplicate delivery attempts); do not interpret their success as secure behavior. The separate HTTP JSON file records local Next-server behavior, not just constructed requests.

Browser tools:

```bash
python3 docs/audit/scripts/browser-check.py
python3 docs/audit/scripts/axe-check.py
```

These scripts assume Python Playwright, `/usr/bin/chromium`, `/tmp/omnia-audit-evidence`, and a local server on port 3100. The axe script also requires `axe-core` under `/tmp/omnia-audit-tools/node_modules/`. The browser script performs live public GET rendering for screenshots, then **local-only** menu/filter/contact interactions; `www` is an independent browser reachability observation. It sends no form POST and no email. Do not rerun live checks without a reason; changing upstream content can invalidate baseline expectations. Captured resources contain no third-party host in the sampled pages, which is narrower than proving that a provider never processes telemetry.

The link inventory was computed from saved browser anchor and ID lists. A route/fragment pass says nothing about the availability or claim quality of linked external demos. Axe ran WCAG 2 A/AA and WCAG 2.1 A/AA rule tags on Home, Projects, About and Contact at 1440px and 390px. Incomplete results are preserved; no screen-reader or field performance benchmark is implied.

## Review and release boundaries

No code/dependency changes are included. Application source hashes remain the baseline. The review branch is local because publishing could trigger connected provider builds. There is no PR URL or new deployment URL to report. Obtain the owner's checkpoint review and appropriate publication/preview authorization before advancing; production release and infrastructure changes always remain separately gated.
