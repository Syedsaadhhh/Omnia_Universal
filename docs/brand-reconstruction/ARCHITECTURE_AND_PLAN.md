# Page hierarchy, journeys and implementation boundaries

Planning only. No selected identity or main redesign is implemented. Branch: feat/impeccable-frontend-reconstruction, stacked directly on security PR #6 at c5d2500. Keep #5/#6 unmerged until the founder's separate release approval.

## Proposed hierarchy and routes

| Page | Route | Visitor question / primary next action |
|---|---|---|
| Home | / | What is this lab, what stage is it at, and which path fits me? → Collaborate or For Organizations. |
| Research | /research | How are problems investigated and claims assessed? → Read an evidence record or discuss a question. |
| Research record | /research/[slug] | What question, method, evidence and limitations support this finding? Only create real records. |
| Work | **/projects** | What has actually been built, by whom, and how mature is it? → Inspect source/detail/evidence. |
| Work detail | /projects/[slug] | What was the problem, contribution, result and limitation? Add only when content warrants a page. |
| GNS3 Agent | **/gns3-agent** | Existing historical detail; preserve its URL, material and attribution. |
| For Organizations | /for-organizations | Could investigation, feasibility, a prototype or custom software fit this problem? → Direct contact with useful context. |
| About | /about | Who is behind this and what is the formation stage? → Founder / principles / collaboration. |
| Collaborate | /collaborate | How could my expertise fit, what is expected, and what is not promised? → Direct conversation. |
| Updates | **/build-log** | What changed, when, and where is the evidence? → Read a factual dated update. |
| Update detail | /build-log/[slug] | What was learned or tested? Create only for real material. |
| Contact | /contact | Which channel works and what should I send? Mailto-only; no form-success fiction. |
| Supporting | /security, /privacy, /terms | Boundaries, handling of information and actual policies. |

The earlier POSITIONING_AND_IA.md used /studio as an option for the organization page; **/for-organizations is the proposed clearer route**, pending owner review. Neither exists today. If /studio has ever been published, retain a redirect; do not invent redirect obligations without evidence. Avoid a parallel /work or /updates index that duplicates canonical /projects or /build-log. If aliases become useful later, redirect deliberately. Preserve project fragment IDs as well as page paths and sources.

Primary navigation: Research · Work · For Organizations · About · Collaborate · Updates. Home is the full-name brand link. Contact and policies remain accessible in the footer and appropriate page actions. At intermediate widths switch to a labeled menu before links collide. Proposed menu behavior follows the tested PR #6 model: hidden links absent from tab order, Escape closes and returns focus, route/same-route/desktop-resize closure, no focus trap unless it becomes a genuine modal. Native details in isolated studies are not a replacement for the production implementation.

## Journeys and evidence requirements

**Collaborator:** Home → intended method / formation statement → real work or Research → Collaborate → role, relevant work, available time and interests → mailto. Show expectations for evidence, attribution, communication and scope discussion. No application portal, invented vacancies, pay/equity offer or guaranteed response time.

**Organization / problem owner:** Home → For Organizations → problem intake → discovery discussion → feasibility and risk assessment → separately agreed scope/capacity → possible prototype and user testing. Ask for the failing workflow, affected people, constraints and desired outcome. Say not to send credentials or confidential customer data in an initial email. No automated intake backend or promised deliverable until a scoped agreement.

**Technical evaluator / prospective partner:** Home / search → Work detail → source, attribution, evidence and limitations → related Research or Update → relevant contact path. Avoid self-awarded "verified" badges detached from a named test and date.

**Research record minimum fields:** title/question, status, author/contributors, created/updated dates, problem context, method, evidence links, findings (including negative findings), limitations, next decision, reproducibility instructions where applicable. A question is not a publication; a notebook is not peer review.

**Work record minimum fields:** type (Research / Experiment / Prototype / Product / Historical), maturity, current maintenance status and last verification date, problem and intended user, actual contribution, team/event attribution, repository/license, demo state, evidence, limitations, next step. Keep type distinct from maturity; historical is a presentation/maintenance classification, not a claim that a project never progressed. No promotions to Product without supporting evidence.

## Small PR boundaries after selection

| PR | Scope and files | Acceptance / dependencies |
|---|---|---|
| Brand discovery (this checkpoint) | PRODUCT.md, incumbent DESIGN.md, research, alternatives, isolated concepts, evidence, WORK_STATE; no app changes | Founder selects/refines direction; naming review scope understood. Publish only after branch integration safety is established. |
| F1 — identity and foundation | Approved/refined SVG assets, font licenses, next/font/local setup, semantic tokens, shared header/footer/buttons/reading container; retire old brand wording in metadata/accessible names | Preserve canonical helpers, CSP and contact API. Existing suite plus 320/390/768/1440, menu/focus/reduced-motion/contrast/forced-colors tests. No homepage rewrite beyond shared shell. Identity and font approval first. |
| F2 — Home and audience paths | Homepage, /collaborate and /for-organizations, internal navigation, truthful founder/stage copy | Dedicated collaborator/org journeys work by keyboard and touch; plain mailto fallback; new routes/canonicals/OG/sitemap together; no server form or promised capacity. |
| F3 — Research and Work | /research, /projects, reusable record components and only evidence-supported detail pages | Preserve /gns3-agent and existing fragments, source links and historical attribution; maturity schema reviewed; filters announce results; no fake empty content. |
| F4 — About, Updates and policy alignment | Broader founder/formation page; factual Updates; Contact/policies consistent with actual functionality | Biographical/current-project claims confirmed; truthful data handling; dated evidence; all route metadata/link checks extended. |
| F5 — accessibility, performance and style consolidation | Remove obsolete CSS/imports only after visual parity; optimize approved fonts/images; complete edge-state and contrast/interaction audit | Existing security CI plus new route suite; repeated comparable lab measurements, screenshots and manual accessibility checks; record limitations. No provider changes. |

Keep each branch stacked on the reviewed predecessor while #6 is open. Reconcile upstream and retarget bases only after authorized merges. Do not rewrite approved security history. Each PR should include focused before/after screenshots, evidence/claim changes, test output and residual risks. Prefer further splitting if one boundary produces a difficult diff. PR creation is not permission to merge or deploy.

## Engineering, accessibility and performance expectations

- Use current Next.js/React/TypeScript and server-rendered/static content where practical. Reuse functional component boundaries; no CMS/database/auth/API/animation library by default.
- Contact API stays closed. Do not reintroduce Resend, provider keys, client-side submission theater or a process-local limiter masquerading as durable abuse protection.
- All new metadata uses the fixed canonical-origin helper; robots/sitemap and new-route tests change in the same PR. Preview indexing remains blocked. New fonts/assets cannot weaken CSP or add remote tracking requests by accident.
- Target WCAG 2.2 AA: correct landmarks/heading structure, meaningful names, keyboard/focus/zoom, reduced motion, color-independent status, 24px minimum target criterion and preferably 44px primary touch controls. Test 200% text, 400% zoom/reflow, long names, very narrow screens and menu states. Automated axe scans supplement manual checks and assistive-technology testing.
- Font budget proposal: at most two families, only needed styles; aim for ≤140 KiB initial compressed font transfer, with a one-family option if the chosen system cannot justify the cost. Retain licensing, language coverage and fallback metrics. Concept fonts are review assets, not an approved production asset pipeline.
- Avoid unnecessary hydrated components; preserve current first-load script budget or reduce it. Baseline measured encoded script bytes are recorded, not a universal bundle limit. No decorative animation loop in the new homepage.
- Images need explicit dimensions/aspect ratio and appropriate formats; remove legacy embedded duplicate founder imagery only when a proper replacement is verified. Do not fabricate staff or facility photos.
- Core Web Vitals targets: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms. Distinguish local/throttled lab results from field p75. Measure before/after with identical route, CPU/network, viewport, cache and sample count. Synthetic key/click timings are not field INP. No guaranteed scores or certification.
- Add real route/link/asset/heading/metadata tests and accessibility scenarios; do not add screenshot tests that merely fossilize an unapproved composition. Avoid broad CSS rewrites before shared tokens and representative route snapshots exist.

## Integration and legal risks / pending approvals

1. **Name:** near-identical Omniasec AI public use and other Omnia Labs companies. Pakistan establishment and worldwide ambition confirmed by founder; prioritize real sales jurisdictions, registry/public-use review and counsel before final mark commitment. No rename is authorized.
2. **Identity:** symbol similarity, type licensing, optical small-size recognition and wordmark spacing remain review items. AI-assisted construction does not prove commercial originality or clearance.
3. **Evidence:** founder biography/current availability, project maintenance, historical team ownership and future content need verification. No team/customer/traction/publication inventions.
4. **Preview safety:** current vercel.json disables only fix/security-engineering-foundation; a new feat/* branch would normally create a preview. Prior Cloudflare owner confirmation covers audit/* and fix/*, not this new prefix. This checkpoint stays local and committed; no frontend push/draft PR is claimed. Before publication, establish a branch-specific Vercel skip or approved isolated preview and confirm Cloudflare branch policy. Do not disable the failing Workers check or change production settings.
5. **Release:** PR #5/#6 remain unmerged, Workers check failing, www behavior unresolved, production baseline unpatched. A source-only brand decision is not release approval. DNS, provider policies, secrets and deployment require their own approved review.
6. **Workflow:** founder chose image-mockup-first for future approved showcase/homepage work, recorded as buildPath=comp. A generated mood board is not an approved comp. No direction is marked selected, and no main redesign starts until the selection checkpoint is reviewed.
