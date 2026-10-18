import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { workEntries, operatingSteps } from "@/lib/work";
import { Action, Arrow, Section } from "@/components/ui";

export const metadata = {
  ...pageMetadata(
    "/",
    "Omniasec Labs — Research & Product Development",
    site.description,
  ),
  title: { absolute: "Omniasec Labs — Research & Product Development" },
};
const selected = ["dwellguard", "reproforge", "gns3-agent"].map((slug) =>
  workEntries.find((item) => item.slug === slug)!,
);

export default function HomePage() {
  return (
    <>
      <section className="or-hero or-shell">
        <div>
          <h1>
            Research real problems.
            <br />
            <span>Build what proves useful.</span>
          </h1>
          <p className="or-lead">
            A founder-led initiative to investigate real problems, form capable
            teams and develop useful technology.
          </p>
          <p className="or-stage">
            Founded by Syed Saad. Building the lab, its methods and its next
            collaborations.
          </p>
          <div className="or-actions">
            <Action href="/collaborate" primary>
              Explore collaboration
            </Action>
            <Action href="/for-organizations">Bring a problem</Action>
          </div>
        </div>
        <aside className="or-method" aria-labelledby="method-title">
          <h2 id="method-title">
            From a question to something worth building.
          </h2>
          <ol>
            {operatingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>
            Our intended method. Progress depends on evidence; not every
            question should become a product.
          </p>
        </aside>
      </section>
      <section className="or-section">
        <div className="or-shell">
          <div className="or-section-heading">
            <h2>Work you can examine.</h2>
            <p>
              Selected material from the existing archive. These artifacts show
              areas of exploration—not an established product portfolio or
              customer outcomes.
            </p>
          </div>
          <div className="or-work-grid">
            {selected.map((project) => (
              <article key={project.slug} className="or-work">
                <h3>{project.title}</h3>
                <span className="or-meta">
                  Historical {project.kind.toLowerCase()} · {project.credit}
                </span>
                <p>{project.summary}</p>
                <Link className="or-text-link" href={project.detail}>
                  Examine {project.title}
                  <Arrow />
                </Link>
              </article>
            ))}
          </div>
          <p className="or-note" style={{ marginTop: 28 }}>
            Current maintenance is not independently verified.{" "}
            <Link href="/projects">Explore the complete work archive</Link>.
          </p>
        </div>
      </section>
      <Section title="The problem comes before the technology." pale>
        <p className="or-large-copy">
          We want to investigate where a real workflow breaks, what existing
          approaches miss, and what evidence would justify building something
          new.
        </p>
        <p>
          AI, software, security, automation and infrastructure are tools—not
          the limits of the lab. Future industries will follow validated
          opportunities, not a fixed technology label.
        </p>
        <p className="or-note">
          Questions, experiments and findings need different evidence. No
          academic publication record is implied.
        </p>
        <Link className="or-text-link" href="/research">
          Explore the research approach
          <Arrow />
        </Link>
      </Section>
      <section className="or-section">
        <div className="or-shell">
          <div className="or-section-heading">
            <h2>Useful work starts with a conversation.</h2>
            <p>
              We are forming the lab around real questions and capable people.
              Explore fit before making commitments.
            </p>
          </div>
          <div className="or-paths">
            <article className="or-path">
              <h3>Build with the lab.</h3>
              <p>
                For researchers, engineers, designers and people with domain
                expertise. Share what you can contribute and what you want to
                investigate.
              </p>
              <p className="or-note">
                An invitation to discuss collaboration, not an advertised paid
                role or equity offer.
              </p>
              <Action href="/collaborate" primary>
                Explore collaboration
              </Action>
            </article>
            <article className="or-path">
              <h3>Bring a real problem.</h3>
              <p>
                Tell us where the workflow fails, who experiences it and what a
                useful outcome would look like. Start with discovery and
                feasibility.
              </p>
              <p className="or-note">
                Technical delivery depends on fit, capacity and a separately
                agreed scope.
              </p>
              <Action href="/for-organizations">For organizations</Action>
            </article>
          </div>
        </div>
      </section>
      <Section title="Ambition, with an honest starting point." pale>
        <p className="or-large-copy">
          Omniasec Labs is a founder-led initiative by Syed Saad. The
          organization is being formed—not presented as an established institute
          or large delivery team.
        </p>
        <p>
          The aim is to assemble the right people around worthwhile problems,
          develop evidence through prototypes and user testing, and pursue
          products or independent ventures when justified.
        </p>
        <Link className="or-text-link" href="/about">
          Meet the founder and the lab
          <Arrow />
        </Link>
      </Section>
      <section className="or-section">
        <div className="or-shell">
          <div className="or-section-heading">
            <h2>Progress, with a record.</h2>
            <p>What changed, what was tested and what remains uncertain.</p>
          </div>
          <article className="or-update">
            <time dateTime="2026-10-18">18 October 2026</time>
            <div>
              <h3>The engineering foundation and website release</h3>
              <p>
                The research-led website and its tested engineering foundation
                are now live. The dated record links the checks and names the
                remaining limits; a passing release does not settle every
                security or operational question.
              </p>
            </div>
            <Link
              className="or-text-link"
              href="/build-log/security-foundation"
            >
              Read the record
              <Arrow />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
