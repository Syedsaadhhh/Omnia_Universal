# Omniasec Labs website

Existing Next.js website for Omniasec Labs, founded by Syed Saad. Official domain: https://omniaseclabs.com. PR 1 addresses engineering/security foundations; the broader multidisciplinary identity and information architecture are planned in `POSITIONING_AND_IA.md` and remain a separate implementation phase.

## Local development

Use Node 24 (`.node-version`: 24.22.0, matching the pinned Docker base) and npm. The local cloud checks also exercised Node 24.19.0. Install from the committed lock without dependency lifecycle scripts:

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run dev
```

Current native platform dependencies work without lifecycle scripts. Review this assumption when updating dependencies; do not disable TLS verification to install packages.

## Checks

```bash
npm run audit:dependencies
npm run check:secrets
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:integration
```

`npm run build` prepares the standalone server with public/static assets. `npm start` serves it. Integration tests start that production server on loopback port 3100 and use synthetic input only. Where Chromium is already installed, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to its path. CI runs unit, production HTTP/browser/accessibility, lock/advisory/credential checks and pinned Docker build/runtime tests without deployment credentials or a deploy step.

## Contact and configuration

The public contact page uses `mailto:contact@omniaseclabs.com`. The retained API validates bounded requests but cannot send or persist a message. Valid requests return 503 with a direct email alternative; malformed/null payloads return 400, unsupported types 415, and oversized bodies 413. No Resend or contact-provider variables can enable delivery. The former component remains unused; source history and the audit preserve the previous implementation.

Canonical identity is fixed in `lib/site-origin.ts`, independent of forwarded headers or the legacy `NEXT_PUBLIC_SITE_URL` variable. No application secrets or database are required. Preview builds receive noindex instructions when Vercel supplies its preview environment marker. `.env.example` documents the current configuration boundary.

A future live form requires an explicitly approved design with trusted ingress identity, durable multi-instance limits, a global sending budget, provider deadlines, privacy/retention verification and relevant regression tests. It must not reactivate an in-memory IP limiter.

## Hosting, review and evidence

The audit verified Vercel project `omniaseclabs.ai`, production branch `main`, serving the apex domain. Docker/Railway configuration is retained as an alternative; a failed Cloudflare build integration also exists. See `DEPLOYMENT.md` for limits and release gates.

The PR 1 branch is disabled for automatic Vercel deployments in its branch-scoped `vercel.json` rule; no `main` rule or live provider setting is changed. The owner confirmed Cloudflare cannot deploy audit/* or fix/* branches to production. Provider check failures are reported separately from application CI.

Start resumption with `WORK_STATE.md`. Baseline evidence: `AUDIT_BASELINE.md`, `SECURITY_FINDINGS.md`, `docs/audit/`. PR 1: `docs/pr1/`, including advisory applicability, before/after findings, actual checks and remaining risks. Source baseline `9cc1399` and preserved audit commit `ab3068b` remain intact. No merge, production deployment, DNS change or production environment modification is authorized by these documents.
