import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Intro, Section, Action, Arrow } from "@/components/ui";
export const metadata = pageMetadata(
  "/research",
  "Research",
  "A problem-led research approach: discover real workflows, test assumptions, document evidence and limits, and decide whether to build.",
);
export default function ResearchPage() {
  return (
    <>
      <Intro title="Begin with a question worth answering.">
        <p>
          Research should help decide what to build, what to change and when to
          stop. Our intended approach connects real problems with evidence,
          people and engineering.
        </p>
        <p className="or-note">
          The lab is in formation. These are methods and areas of inquiry, not a
          claimed academic publication portfolio.
        </p>
      </Intro>
      <Section title="A wide horizon. A specific problem." pale>
        <p>
          Software, infrastructure, cybersecurity, automation and AI can be part
          of the work. Finance, logistics, industrial systems and other fields
          may become relevant when real problems and accessible evidence justify
          exploration.
        </p>
        <p>
          For each investigation, define the people affected, existing
          alternatives, the uncertainty that matters most, and what a useful
          answer would change.
        </p>
      </Section>
      <Section title="Evidence before momentum.">
        <div className="or-record-list">
          <article className="or-record">
            <h3>Observe the existing workflow</h3>
            <p>
              Ask about recent events and current workarounds. Enthusiasm for an
              idea is not the same as a recurring problem or a commitment to use
              a solution.
            </p>
          </article>
          <article className="or-record">
            <h3>Test the uncertain part first</h3>
            <p>
              Set a hypothesis, a bounded test, a success or stop condition and
              a review date before building a larger system.
            </p>
          </article>
          <article className="or-record">
            <h3>Make the record inspectable</h3>
            <p>
              Separate observations from interpretation. Keep sources, methods,
              findings, limitations and the next decision together. A negative
              finding can be a useful outcome.
            </p>
          </article>
        </div>
      </Section>
      <Section title="A record others can challenge." pale>
        <p>
          Our proposed record format distinguishes a question, an experiment, a
          prototype and a finding. Each needs attribution, context and
          limitations; none becomes a publication or product by assertion.
        </p>
        <Link className="or-text-link" href="/research/method">
          Read the research-to-product method
          <Arrow />
        </Link>
        <p className="or-note">
          No completed research findings are being presented as publications
          here. Engineering evidence is linked in Updates and historical
          artifacts in Work.
        </p>
        <div className="or-actions">
          <Action href="/projects">Examine the work</Action>
          <Action href="/for-organizations" primary>
            Bring a question
          </Action>
        </div>
      </Section>
    </>
  );
}
