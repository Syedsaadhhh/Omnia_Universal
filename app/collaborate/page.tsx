import { pageMetadata } from "@/lib/metadata";
import { Action, Intro, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "/collaborate",
  "Collaborate",
  "Explore research and engineering collaboration with Omniasec Labs. Share your expertise, interests and availability with the founder.",
);
export default function CollaboratePage() {
  return (
    <>
      <Intro
        title={
          <>
            Good questions need
            <br />
            different perspectives.
          </>
        }
        actions={
          <Action
            href={`mailto:${site.email}?subject=Research%20collaboration`}
            primary
          >
            Discuss collaboration
          </Action>
        }
      >
        <p>
          For researchers, engineers, designers and people who understand a
          problem from the inside. Help shape useful research and technology as
          the lab takes form.
        </p>
        <p className="or-note">
          Founder-led, in formation. This is an invitation to explore fit—not an
          advertised paid role, equity offer or funding commitment.
        </p>
      </Intro>
      <Section title="What you could bring." pale>
        <p>
          Technical skill matters. So do domain knowledge, careful observation,
          clear writing and the ability to test an assumption.
        </p>
        <ul>
          <li>
            Research and problem discovery: investigate real workflows and
            existing approaches.
          </li>
          <li>
            Engineering: build small, testable systems and explain their limits.
          </li>
          <li>
            Design and user research: understand people, prototype interactions
            and assess usefulness.
          </li>
          <li>
            Industry knowledge: help distinguish an interesting demo from a
            problem worth solving.
          </li>
        </ul>
      </Section>
      <Section title="How collaboration starts.">
        <ol className="or-step-list">
          <li>
            <div>
              <h3>Share context</h3>
              <p>
                Introduce your interests, relevant work, what you could
                contribute and the time you realistically have available.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Explore a question together</h3>
              <p>
                Discuss a specific problem, the evidence available and a small
                next step. No open project or position is implied by the
                invitation.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Agree before committing</h3>
              <p>
                Clarify scope, time, communication, attribution, ownership and
                any commercial terms before work begins. Do not assume
                compensation or equity.
              </p>
            </div>
          </li>
        </ol>
      </Section>
      <Section title="A useful first message." pale>
        <p>
          Tell Syed Saad what you want to investigate, how your experience
          connects to it, and link to one or two pieces of relevant work. An
          email does not commit either party to a project.
        </p>
        <div className="or-actions">
          <Action
            href={`mailto:${site.email}?subject=Research%20collaboration`}
            primary
          >
            Email the founder
          </Action>
          <Action href="/projects">Examine the work</Action>
        </div>
      </Section>
    </>
  );
}
