# Omniasec Labs — proposed positioning and information architecture

Proposal for review, grounded in `main@9cc1399` and the founder's [master specification](docs/engineering/MASTER_SPEC.md). No public copy or branding has changed.

## Positioning

**Proposed identity:** Omniasec Labs, a founder-led, multidisciplinary technology research and product-development lab.

**Proposed mission:** “Discover consequential problems. Validate what matters. Build useful technology.”

**Supporting copy:** “Omniasec Labs investigates problems across industries, brings complementary builders together, and develops research into tested prototypes, customer solutions, and potential products or ventures.”

**Stage statement:** “Founder-led and forming a small founding team. Research and collaboration are the next steps.” This describes the intended operating stage without inventing a staffed organization or an established research pipeline. Do not publish team members, a project engagement, research interviews, customer traction, or a launched venture until verified.

Security, AI, automation, infrastructure, finance, logistics, and productivity may be areas of exploration. They are optional tags, not permanent navigation boundaries. The lab's identity is its method and outputs, rather than a list of technologies.

Keep founder credit as **Syed Saad / Saad**. Explain how work moves from problem evidence to technical feasibility, experiments, user evaluation, customer delivery, and possible standalone ventures. A venture is an outcome to earn, not a current organizational claim.

## Naming and asset checkpoint

Use **Omniasec Labs** as the working spelling requested by the founder. Obtain confirmation before a brand-wide replacement of “Omnia Sec AI Labs,” logo typography, metadata, and designer assets. Retain the current mark as a proposed continuity option; do not invent or replace a logo in this checkpoint.

A limited public naming search on 2026-10-15 found:

- [OmniaSec AI's own privacy page](https://docs.omniasec.ai/privacy-policy/) identifies a separate Spanish cybersecurity operation and controller.
- [Omnia Labs](https://omnialabs.ai/) describes a separate video-AI research/product business.
- [Omnia Labs Brazil](https://omnialabs.com.br/) offers technology consulting and custom software/products.

These verified public uses establish potential search/reputational confusion, not a legal trademark conclusion. Avoid adopting “Omnia Labs” as a shortened public name by default. Keep the full name, founder attribution, and owned domain visible. Before final identity investment, check relevant trademark/company registries, jurisdictions and classes with appropriate professional support. No affiliation or legal clearance is claimed; these entities were only viewed passively.

## Audiences and successful journeys

| Audience | What they need to establish | Proposed journey | Honest conversion |
| --- | --- | --- | --- |
| Technical collaborators | Mission, stage, working method, expectations, actual work and credit | Home → About / Work → Collaborate | Send interests, relevant public work, availability, preferred collaboration type |
| Organizations / problem owners | Whether the lab can investigate their problem and what the first step involves | Home → For organizations → Contact | Describe problem, constraints, current workaround and desired outcome; no guaranteed delivery or response SLA |
| Researchers / curious visitors | Evidence quality, method, limitations and real artifacts | Home → Research → Work / Updates | Read available evidence or start a research conversation |

Do not call collaboration vacancies “jobs” or promise employment, salary, equity, or a fixed team. Agree arrangements individually before substantive work; separate that discussion from consent to process an inquiry.

## Proposed routes and navigation

Keep existing paths wherever possible. Use primary links **Research · Work · For organizations · About**, plus **Collaborate** as the primary navigation action. Put Updates, Contact, Security, Privacy, and Terms in the footer and contextual links. Mobile navigation exposes the same destinations with predictable keyboard behavior. Validate actual header width before committing to the arrangement.

| Path | Public label | Content and truth boundary |
| --- | --- | --- |
| `/` | Home | Broad mission, founder-led formation, operating method, selected evidence if verified, two audience CTAs |
| `/about` | About | Saad, origins, actual stage, operating principles, team-formation needs; named collaborators only with permission |
| `/research` | Research | Problem-discovery method, research questions/records, evidence and uncertainty; empty state when no validated record exists |
| `/projects` | Work | Research / Experiment / Prototype / Product filters, optional archive filter; domain tags separate from maturity; ownership/credit and evidence |
| `/studio` | For organizations | Problem intake → discovery → feasibility → scoped proposal → evaluation; capacity assessed individually |
| `/collaborate` | Collaborate | Desired complementary capabilities, expected contribution and time discussion, collaboration types, submission privacy; no fake vacancies |
| `/build-log` | Updates | Dated outcomes, evidence links, what changed/was learned, next step; retain current URL |
| `/contact` | Contact | Mailto-first contact, visible copyable address and useful inquiry prompts; well-tested form only if later justified |
| `/security` | Security | Website controls and disclosure contact, separated from aspirational product principles; never imply certification |
| `/privacy`, `/terms` | Privacy / Terms | Actual enabled intake, hosts/providers, purpose/retention boundaries, accurate emerging-lab limitations |
| `/gns3-agent` | GNS3 Agent, historical work | Preserve URL/content/attribution; remove flagship priority; contextual status and verification date only when justified |

No redirect is necessary merely to rename Projects to Work or Build Log to Updates. If route renaming is later approved, preserve anchors and add explicit permanent redirects with tests. Do not redirect all old pages to the homepage. Deprioritizing ReproForge/GNS3 on home does not establish that their underlying development is abandoned; “archived on this website” and project operational status must remain distinct.

## Wireframe recommendations

### Home, desktop

```text
[Current mark + full lab name] [Research] [Work] [For organizations] [About] [Collaborate]

[Founder-led · forming the founding team]
Discover consequential problems.
Build useful technology.
[Short explanation of research → validation → engineering → potential products/ventures]
[Collaborate with the lab] [Bring a problem]

[How we work: Investigate → Validate → Assemble → Prototype → Test → Decide]
  Each stage has a one-sentence output and a clear go/no-go boundary.

[Where the lab is today]
  Saad, formation priorities, what is being sought, current capacity boundaries.

[Selected work, if evidence supports selection]
  At most 2–3 genuine artifacts, each with maturity, attribution, limitations and evidence link.
  Otherwise: a clear link to the existing work archive and an honest research empty state.

[For builders]                              [For organizations]
[Contribution expectations + contact]      [Problem discovery + scoped conversation]

[Latest evidenced update, if available]
[Footer: full identity, Updates, Contact, Security, Privacy, Terms, source profile]
```

Use one dominant mission statement and two clearly differentiated actions. Replace the simulated execution console with a restrained process diagram or label it as an illustration; remove “Verified”/“SYSTEM ACTIVE” styling that could be read as a live lab status. No fabricated technical telemetry or statistics.

### Home, mobile

Header → stage → mission → supporting paragraph → stacked CTAs → compact six-stage process → current formation state → selected work/archive → audience prompts → update/footer. Keep mission and actions before decorative illustration. Limit long card stacks; current mobile home is visually coherent but lengthy and dominated by the old flagship story. Keep mobile brand text readable rather than hiding the entire name at narrow widths.

### Research / Work

Lead with method or context, then filters, result count, and records. A research record shows problem, affected users, evidence sources/dates, alternatives, feasibility, risks, next validation step, and status. Work cards expose maturity, context/ownership, last verification date and artifact link. Detailed claims need evidence on a detail page or linked source, not just a colored badge. Empty filters explain that no record is available; do not manufacture projects to fill space.

### Collaborate / For organizations

Each gets a short introduction, honest fit/capacity statement, expectations, clear next step, and privacy-linked contact path. Collaboration prompts: skill/interests, relevant public work, availability, expected arrangement. Organization prompts: workflow/problem, who experiences it, current workaround, constraints and desired outcome. Do not collect government IDs, private employer data, confidential attachments, or detailed personal profiles merely to start a conversation. A mailto link can prefill a subject without submitting anything on page load.

## Lightweight content architecture

Keep Next.js/TypeScript and repository content. Start with typed records under `lib/content/`, reused by pages and metadata. No CMS, auth, database, paid analytics, or applicant-tracking system is necessary.

Suggested models:

- `Project`: stable ID/slug, summary, maturity (`Research | Experiment | Prototype | Product`), separate `archivedOnSite`, optional domain tags, ownership context, contributor credits, source/artifact links, evidence-backed claims, limitations, verified date where applicable.
- `ResearchRecord`: problem and affected users, dated public sources, alternatives, feasibility, uncertainty, validation plan, go/no-go decision and rationale. Evidence must be public-safe; private interview records do not belong in the public repository.
- `Update`: actual date, outcome, evidence links, lessons, next step. Avoid changing historical dates to appear active.
- `Site`: approved name, production origin, founder identity, contact paths, shared navigation and metadata helpers.

Model an empty list honestly. A `Product` label requires explicit evidence/owner validation; a public demo is not proof of paying customers or production readiness. Do not add a global `verified: true` flag whose meaning varies between a certificate, a rehearsal and deployed software.

## Research-to-product method

1. Write a specific problem statement, affected users/workflow and current workaround; gather dated public sources and voluntary interviews when authorized.
2. Compare alternatives and competitors using sourced claims; record urgency, frequency, cost of inaction, distribution access and willingness-to-pay evidence.
3. Document feasibility, resource/privacy risks, differentiation and a falsifiable validation target before building.
4. Decide go/no-go based on evidence and available collaborators; record why an opportunity is rejected as well as selected.
5. Build the smallest useful prototype, agree evaluation with actual consenting users, record failures and limitations, then iterate.
6. Consider customer engagement, reusable product or venture only when value, ownership, distribution, support and commercial evidence justify it.

This is a proposed method, not a claim that the lab has already completed these activities. Do not fabricate interviews, market sizing, test customers or outcomes.

## Existing visual strengths and technical UX debt

Preserve the dark identity, restrained cyan accents, typographic hierarchy, existing responsive shell, reusable section components, clear focus styles, skip link, reduced-motion handling, and project result announcements. Improve content hierarchy and semantic behavior before considering wholesale visual replacement.

The design skill launcher was unavailable; there was no existing PRODUCT/DESIGN document. Recommendations use source, real screenshots and browser observations. Provisional technical-design scores below are heuristic review judgments, not performance measurements or accessibility certification:

| Dimension | Score / 4 | Evidence and limit |
| --- | --- | --- |
| Accessibility | 2 | Hidden navigation remains focusable, Escape missing, desktop brand label findings; keyboard indicators and skip link exist; screen readers/zoom untested |
| Performance | 3 | Static pages, no observed third-party assets, modest dependencies; perpetual canvas and CSS blur/animation need profiling; no Core Web Vitals claim |
| Responsive behavior | 3 | 30 route/viewport captures without page overflow; narrow brand name is hidden; text zoom/touch target review incomplete |
| Theming consistency | 2 | Shared CSS variables exist; seven CSS layers with hard-coded colors and overrides complicate maintenance; dark-only presentation is intentional |
| Implementation integrity | 1 | Product-specific visual consistency exists, but simulated verified telemetry, duplicated content/status data, and the old narrative conflict with current mission |

Heuristic total: 11/20. Product alignment fails the new brief until copy/navigation/evidence models change. Prioritize keyboard access, truthful scope/status, then consolidate styling in measured small changes. No benchmark, Lighthouse score, user study, or claim of full WCAG compliance is supplied.

## Decisions needed before broad implementation

Approve the Phase 0/1 checkpoint and branch-local implementation sequence. Confirm **Omniasec Labs** as final visible spelling and whether to retain the existing mark with updated typography. Recommended initial intake is mailto-first; a secure form can follow if it has a demonstrated need and provider validation. Only ask for additional project/people evidence when publishing a specific claim requires it.
