# Deployment and operations

This is an existing live site. Production remains at the separately verified revision until the founder authorizes a specific merge/release. This document and CI do not authorize or execute a deployment.

## Verified provider and publication boundaries

- Repository: `Syedsaadhhh/Omnia_Universal`; original reference: `9cc1399fb1ca9642d5f91c898e0f533e85aae5fc`.
- Audit preserved as `ab3068b` and documentation draft PR #5.
- Vercel team `syedsaadhhhs-projects`, project `omniaseclabs.ai`, ID `prj_NWhj0oMX8aDwSo93bs3tMEkYCTsE`.
- Existing production deployment: `dpl_8RmUj4RirHa6JEiuoY5gZStoZFr4`, source `main@9cc1399`, alias `omniaseclabs.com`.
- Vercel Git integration can create protected branch previews. The preserved audit branch produced a preview, which is not a production release. PR 1's `vercel.json` blocks automatic deployment of `fix/security-engineering-foundation` only. Other branch policy is unchanged. Do not treat a draft PR as a deployment gate.
- A Cloudflare Workers build check remains failed; it was already failed on main and also failed for the audit branch. Dashboard URLs containing `production/builds` are not independent proof of a successful production deployment. The owner confirmed audit/* and fix/* cannot deploy to production; Cloudflare branch policy/build logs were not independently accessible here. Preserve the integration pending provider review.
- GitHub required-review/check rules are separate from CI and provider Git automation. No repository or provider protection settings were changed. CI cannot itself prevent an authorized direct main push from triggering the existing provider integration.

## Runtime configuration

Node 24, recommended 24.22.0 from `.node-version`, with a reviewed lockfile. The Docker base is pinned to an immutable multi-platform `node:24-alpine` manifest digest in `Dockerfile`. Dependency resolution uses `npm ci --ignore-scripts`; Next 16.4.2 supplies patched PostCSS and Sharp without the obsolete override.

The current site requires no application secrets. Legacy `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` and `NEXT_PUBLIC_SITE_URL` are not read by the contact route/canonical helper. They cannot enable sending or change the canonical domain. Removing old provider variables from production would be a separate owner-approved settings change; none were inspected or changed here.

Contact UI: direct email. API: no outbound provider/storage path; bounded UTF-8 JSON, exact canonical origin, generic no-store errors and disabled-delivery 503 for valid submissions. Arbitrary clients can forge Origin, so it is not advertised as bot protection. Trusted-IP extraction, Redis or a process-local throttle are unnecessary for this closed send path. A live form needs separate durable ingress/budget validation before activation.

## Local production and container verification

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run typecheck
npm test
npm run build
npm start
```

The build script copies required public/static assets into `.next/standalone`. Tests can start this server on loopback port 3100. The Docker runner copies the prepared standalone tree, runs as UID 1001, and needs no public writable directory for current functionality. Container smoke was exercised with a read-only root filesystem and a temporary `/tmp` mount.

A normal local image build uses the checked-in Dockerfile. In the managed cloud environment, use the supplied proxy defaults and pass the session CA through the optional BuildKit `proxy_ca` secret mount, with `NODE_EXTRA_CA_CERTS` set only during installation. Never copy proxy credentials or session CA into runtime layers; never use `strict-ssl=false` or host networking to bypass policy.

Pinned inputs and clean installs provide repeatable dependency/build procedures. Bit-for-bit image reproducibility is not claimed: Next build identifiers and build timestamps may differ. Keep the exact image digest and commit for an approved release. Base image digest and package lock updates require review and rerunning checks.

## Canonical domain, www, metadata and CSP

Canonical domain is `https://omniaseclabs.com`, fixed in source. Per-page canonical/OG URLs, social-image origin, robots and sitemap are checked in built output. Vercel preview marker adds noindex/nofollow and a disallow rule. Avoid indexing any externally hosted preview without equivalent protections.

Apex HTTP redirects to HTTPS and the original apex content remains reachable. `www` has a different A record and returned an upstream 503 from this environment; public availability, intended alias and origin TLS chain require independent/provider-side verification. The cloud proxy intercepts certificates, so no origin certificate-chain certification is claimed. No DNS change is included. If www is approved as an alias later, verify ownership/TLS/provider assignment and a permanent HTTPS redirect to apex before changing DNS.

CSP now denies inline event attributes, base elements, objects, frames, workers and media while preserving static Next hydration and current inline styles. Production does not allow unsafe-eval. Script/style unsafe-inline remains a documented limitation. Request nonces force dynamic rendering/cache changes; experimental SRI does not automatically solve every hydration script. Those changes need a focused architecture decision and production-cache testing. Existing apex HSTS remains provider-controlled; do not add includeSubDomains/preload until all relevant hosts are verified.

## Logs, health and future release gate

The contact handler emits no payload, header, email, IP or provider exception. Expected client errors are not logged. Its unexpected-error log is a fixed event name. CI scans tracked files for selected credential patterns and rejects tracked environment files except the example; that is not proof of secret-free history. Provider log access, retention and organization-wide secret scanning remain unverified. Health is deliberately non-sensitive application liveness, not an email send or dependency readiness claim.

Before requesting release approval, prepare:

1. Exact reviewed commit/PR, passing application checks and screenshots; explain external integration failures and remaining risks.
2. Verify intended Vercel team/project/branch, environment scopes without values, domain assignment and existing production deployment. No auto-merge.
3. Confirm provider rollback retention for the original known deployment; record previous source and image/artifact identifiers. No database migration exists here.
4. Review provider headers/cache/preview indexing and independent www/TLS evidence. Keep public testing passive.
5. Confirm mailbox ownership/delivery/retention through official access if needed; no automated real-email health probes.
6. Obtain founder approval for the exact merge, production release and any separate infrastructure action. Stage/verify the intended production artifact according to provider procedures; do not assume a preview promotion preserves all build-time configuration.
7. After an authorized release, independently verify apex revision, routes, headers, canonical/social output, menu keyboard behavior and mailto. Maintain a documented rollback decision; do not silently restore vulnerable dependencies.

Existing `railway.json` and the Dockerfile remain an alternative deployment path, not evidence that Railway serves the apex or permission to create a project. No projects, domain records, production variables, provider integrations or existing repositories were deleted or modified.
