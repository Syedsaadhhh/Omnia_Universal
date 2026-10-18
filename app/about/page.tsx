import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Action, Intro, Section } from "@/components/ui";
export const metadata = pageMetadata(
  "/about",
  "About",
  "Meet Syed Saad and the founder-led Omniasec Labs initiative: multidisciplinary research, team formation and useful technology, with honest limits.",
);
export default function AboutPage() {
  return (
    <>
      <Intro title="Build the lab worth growing into.">
        <p>
          Omniasec Labs is a founder-led technology research and
          product-development initiative by Syed Saad, based in Pakistan with an
          international outlook.
        </p>
        <p className="or-note">
          In formation. No established staff roster, funding, customers or
          institutional partnerships are implied.
        </p>
      </Intro>
      <Section title="A purpose beyond one technology." pale>
        <p className="or-large-copy">
          The aim is to discover worthwhile problems, bring capable people
          together and turn careful investigation into technology that proves
          useful.
        </p>
        <p>
          AI and cybersecurity are part of the existing work, alongside
          software, infrastructure and automation. Future fields should follow
          real problems and market evidence—not a permanent restriction in the
          name of a technology.
        </p>
      </Section>
      <Section title="Founder-led, with room for others.">
        <p>
          Syed Saad is building the initiative and its operating methods. The
          existing archive includes personal experiments and team/event work;
          those contributions retain their original attribution.
        </p>
        <p>
          The next team should form around a specific problem and the expertise
          it needs. An invitation to collaborate is not a claim that a large
          team already exists.
        </p>
        <div className="or-actions">
          <Action href="/collaborate" primary>
            Explore collaboration
          </Action>
          <Action href="/projects">Inspect the archive</Action>
        </div>
      </Section>
      <Section title="Principles worth working by." pale>
        <div className="or-record-list">
          <article className="or-record">
            <h3>Start from reality</h3>
            <p>
              Understand a real workflow, the people affected and what has
              already been tried.
            </p>
          </article>
          <article className="or-record">
            <h3>Make claims inspectable</h3>
            <p>
              Link to artifacts, separate observations from interpretation, and
              explain what the evidence cannot establish.
            </p>
          </article>
          <article className="or-record">
            <h3>Respect people and boundaries</h3>
            <p>
              Discuss consent, privacy, contribution, ownership and scope before
              collecting information or committing to work.
            </p>
          </article>
          <article className="or-record">
            <h3>Leave room to stop</h3>
            <p>
              A failed assumption or negative finding can save time and guide a
              better next question. Not every project should become a venture.
            </p>
          </article>
        </div>
      </Section>
      <Section title="A long horizon. A useful next step.">
        <p>
          Research, prototypes, customer solutions and possible independent
          ventures are different outcomes. Progress comes from the evidence for
          the next decision, not from presenting every experiment as a product.
        </p>
        <p>
          Read the <Link href="/research/method">intended method</Link>, or{" "}
          <Link href="/for-organizations">
            bring a problem worth investigating
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
