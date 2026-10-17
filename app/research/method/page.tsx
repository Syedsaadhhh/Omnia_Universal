import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ReadPage } from "@/components/ui";

export const metadata = pageMetadata(
  "/research/method",
  "From problem to useful technology",
  "The intended Omniasec Labs method: problem discovery, evidence gates, team formation, bounded prototypes, user testing and possible products or ventures.",
);
const steps = [
  [
    "Research",
    "Understand the domain, existing approaches and whose perspective is missing.",
    "A sourced problem brief with assumptions and limits.",
  ],
  [
    "Problem discovery",
    "Discuss recent real events, their cost and current workarounds. Separate an affected user from the person who can approve or pay for change.",
    "Evidence that the problem matters to identifiable people—not just praise for an idea.",
  ],
  [
    "Validation",
    "Name the most consequential uncertainty. Define a small test, what would change the decision and a stop condition before running it.",
    "A dated record of observations, contrary evidence and the next decision.",
  ],
  [
    "Team formation",
    "Bring together the expertise the problem requires. Agree on scope, time, responsibilities, attribution and any ownership or commercial terms.",
    "A realistic commitment and clear boundaries, not an assumed team or equity promise.",
  ],
  [
    "Prototype engineering",
    "Build the smallest safe artifact that can test the uncertain part. A manual or non-software experiment may be enough.",
    "An inspectable artifact, constraints, test plan and known risks.",
  ],
  [
    "User testing",
    "Observe relevant people using or assessing the prototype. Test usefulness alongside feasibility; technical correctness alone does not establish demand.",
    "Task outcomes, feedback, limitations and a decision to continue, revise or stop.",
  ],
  [
    "Product development",
    "Consider support, reliability, accessibility, privacy, delivery cost and a sustainable way to reach users. A customer solution needs its own agreed scope.",
    "Evidence and available capacity for maintaining a useful solution.",
  ],
  [
    "Potential venture",
    "Only consider a separate commercial venture when the opportunity, team, ownership and economics justify it. Research can also conclude, remain open or become a tool.",
    "A separate, explicit business decision—not a promised investment or automatic startup launch.",
  ],
];
export default function MethodPage() {
  return (
    <ReadPage
      title="From a problem to useful technology."
      description="An intended operating method, not a claim that each stage has already been achieved. Decisions should follow evidence, with room to revise or stop."
    >
      <h2>Eight stages, with room to go back.</h2>
      <ol className="or-step-list">
        {steps.map(([title, copy, evidence]) => (
          <li key={title}>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <p className="or-note">
                <strong>Decision evidence:</strong> {evidence}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <h2>What a research record contains</h2>
      <p>
        The question and its author; the user and context; existing
        alternatives; assumptions; a method or experiment; dated source
        evidence; findings and counterevidence; limitations; and a next
        decision. Distinguish direct observations from interpretation. Obtain
        consent before recording or publishing someone’s information.
      </p>
      <p>
        <a href="/research-record-template.md">
          Download the blank research-record template
        </a>
        . It is a writing aid, not a database or a claim of completed research.
      </p>
      <h2>Ideas that inform this approach</h2>
      <p>
        We draw on publicly described approaches to learning through experiments
        and customer discovery: Eric Ries’s{" "}
        <a href="https://theleanstartup.com/principles">
          Lean Startup principles
        </a>
        , Rob Fitzpatrick’s{" "}
        <a href="https://www.momtestbook.com/">
          customer-conversation guidance
        </a>
        , Steve Blank’s{" "}
        <a href="https://steveblank.com/category/customer-development-manifesto/">
          Customer Development work
        </a>
        , and Strategyzer’s{" "}
        <a href="https://www.strategyzer.com/library/testing-business-ideas-book">
          Testing Business Ideas
        </a>
        .
      </p>
      <p>
        These are useful lenses, not proof of demand or guaranteed outcomes.
        Exploratory and public-interest research may need different success
        measures from a commercial product. The lab’s process should be revised
        as real work supplies evidence.
      </p>
      <h2>Next steps</h2>
      <p>
        <Link href="/for-organizations">Bring an organizational problem</Link>,{" "}
        <Link href="/collaborate">discuss collaboration</Link>, or{" "}
        <Link href="/projects">inspect the existing work</Link>.
      </p>
    </ReadPage>
  );
}
