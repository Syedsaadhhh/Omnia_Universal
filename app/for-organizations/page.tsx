import { pageMetadata } from "@/lib/metadata";
import { Action, Intro, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "/for-organizations",
  "For Organizations",
  "Discuss a real technical problem with Omniasec Labs: discovery, feasibility and a possible prototype or software scope, subject to fit and capacity.",
);
export default function OrganizationsPage() {
  return (
    <>
      <Intro
        title={
          <>
            Understand the problem.
            <br />
            Then decide what to build.
          </>
        }
        actions={
          <Action
            href={`mailto:${site.email}?subject=Problem%20discovery`}
            primary
          >
            Bring a problem
          </Action>
        }
      >
        <p>
          When a workflow is slow, fragile or poorly understood, a useful first
          step may be investigation—not another software purchase. Let’s explore
          the problem before promising a solution.
        </p>
        <p className="or-note">
          Omniasec Labs is founder-led and in formation. Any delivery depends on
          fit, feasibility, available capacity and a separately agreed scope.
        </p>
      </Intro>
      <Section title="Start with the real workflow." pale>
        <p>
          We are interested in problems where research and engineering could
          make a practical difference: a manual process, unreliable integration,
          difficult technical decision, missing tool or untested product idea.
        </p>
        <p>
          AI, security, automation and software are possible approaches. The
          right method follows the problem and its constraints; no particular
          technology or outcome is guaranteed.
        </p>
      </Section>
      <Section title="A measured way forward.">
        <ol className="or-step-list">
          <li>
            <div>
              <h3>Problem intake</h3>
              <p>
                Describe who experiences the problem, where the workflow fails,
                existing approaches and the desired change.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Discovery and feasibility</h3>
              <p>
                Explore evidence, technical constraints, risks and the value of
                solving it. A conclusion that building is not justified is a
                useful result.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Scope and team fit</h3>
              <p>
                If there is a worthwhile next step, agree on scope,
                responsibilities, available capacity, evidence and commercial
                terms separately.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Possible prototype and testing</h3>
              <p>
                A bounded prototype can test an assumption with users before a
                larger customer solution or product is considered.
              </p>
            </div>
          </li>
        </ol>
      </Section>
      <Section title="What to include." pale>
        <ul>
          <li>The organization or context and the people affected.</li>
          <li>A concrete example of the failing workflow.</li>
          <li>What has already been tried and what cannot change.</li>
          <li>
            What a useful outcome would look like, and any timing or budget
            constraints you can share.
          </li>
        </ul>
        <p>
          Keep the first message non-confidential. Do not send credentials,
          customer records, sensitive personal information or proprietary
          datasets. Information-sharing arrangements can be discussed separately
          if needed.
        </p>
        <div className="or-actions">
          <Action
            href={`mailto:${site.email}?subject=Problem%20discovery`}
            primary
          >
            Start a conversation
          </Action>
          <Action href="/projects">Review the evidence</Action>
        </div>
      </Section>
    </>
  );
}
