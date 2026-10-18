import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ReadPage } from "@/components/ui";
export const metadata = pageMetadata(
  "/gns3-agent",
  "GNS3 Agent",
  "Historical record of a Windows-first network-lab diagnostics and automation project, including original architecture, reported capabilities and unverified current status.",
);
const capabilities = [
  [
    "Environment doctor",
    "Python runtime, packages, Windows paths, GNS3 installation, processes and virtualization checks.",
    "Originally reported implemented",
  ],
  [
    "REST connectivity",
    "Typed connection to the GNS3 REST API with structured success and error results.",
    "Originally reported implemented",
  ],
  [
    "Server inspection",
    "Server information, projects, templates, configuration and diagnostic summaries.",
    "Originally reported implemented",
  ],
  [
    "Report artifacts",
    "JSON and Markdown reports for diagnostic and read-only inspection output.",
    "Originally reported implemented",
  ],
  [
    "Topology execution",
    "Bounded creation/configuration workflows with checkpoints and rollback awareness.",
    "Originally reported in progress",
  ],
  [
    "Evidence automation",
    "Scope-aware screenshots, command evidence, validation and reporting.",
    "Originally planned",
  ],
];
const layers = [
  [
    "Interface",
    "CLI in the earlier description; desktop and guided workflow interfaces were future ideas.",
  ],
  [
    "Orchestration",
    "Task planning, typed results, policy checks, checkpoints and execution state.",
  ],
  [
    "GNS3 adapter",
    "Typed REST operations for server, project, template, node and link workflows.",
  ],
  [
    "System diagnostics",
    "Windows process, path, port, package, installation and virtualization inspection.",
  ],
  [
    "Evidence",
    "Structured logs, JSON/Markdown artifacts, screenshots and reporting.",
  ],
  [
    "Model assistance",
    "Optional local or cloud reasoning assistance according to task sensitivity.",
  ],
];
export default function GNS3Agent() {
  return (
    <ReadPage
      title="GNS3 Agent: a network-lab exploration."
      description="Historical project record. The original page described Windows-first diagnostics, GNS3 connectivity and evidence capture. Current maintenance and capability have not been independently reverified."
    >
      <h2>The problem being explored</h2>
      <p>
        Network labs can fail between environment setup, instructions and
        evidence. Python packages, virtualization, local paths, ports and server
        versions can fail independently. Students and engineers then spend time
        translating lab instructions into device actions, validation and
        reports.
      </p>
      <p>
        The intended project explored visible, bounded assistance for those
        workflows. The earlier target environment was Windows and GNS3 2.x; that
        is context, not a current compatibility guarantee.
      </p>
      <h2>Original capability record</h2>
      <p>
        The labels below preserve the earlier archive's distinctions. They are
        attributed historical reports, not new verification of implementation,
        support or production readiness.
      </p>
      <dl className="or-capabilities">
        {capabilities.map(([title, copy, status]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>
              {copy}
              <span className="or-meta">{status}; not reverified here.</span>
            </dd>
          </div>
        ))}
      </dl>
      <h2>The intended execution loop</h2>
      <ol>
        <li>
          Understand the environment, request, instructions, constraints and
          required evidence.
        </li>
        <li>
          Plan device actions and validation checkpoints before modifying state.
        </li>
        <li>
          Execute only approved tools and endpoints with visible boundaries.
        </li>
        <li>
          Verify state, connectivity, expected outputs and failure conditions.
        </li>
        <li>
          Stop, explain or return control when confidence or authority is
          insufficient.
        </li>
        <li>
          Document commands, results and limitations in traceable artifacts.
        </li>
      </ol>
      <h2>Architecture described in the archive</h2>
      <dl className="or-capabilities">
        {layers.map(([title, copy]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{copy}</dd>
          </div>
        ))}
      </dl>
      <h2>Audience and limits</h2>
      <p>
        The original intent included students learning through repeatable labs,
        educators investigating setup problems and technical teams exploring
        controlled test environments. No current early-access program, release
        timeline, supported service or capacity is promised.
      </p>
      <p>
        Before use, request current source, installation instructions, tests,
        permissions and supported environments. The earlier page linked to the{" "}
        <a href="https://github.com/Syedsaadhhh">founder's GitHub profile</a>,
        not a dedicated public repository; no repository URL is invented here.
      </p>
      <p>
        <Link href="/contact">Discuss the project</Link> or{" "}
        <Link href="/projects#gns3-agent">return to the work archive</Link>.
      </p>
    </ReadPage>
  );
}
