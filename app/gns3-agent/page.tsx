import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "GNS3 Agent", description: "A Windows-first diagnostic and automation agent for GNS3 labs, infrastructure inspection, evidence capture, and reporting." };

export default function GNS3AgentPage() {
  return (
    <>
      <PageHero eyebrow="FLAGSHIP PRODUCT / 001" title={<>A technical operator for <span>GNS3 labs.</span></>} copy="GNS3 Agent is being built to diagnose environments, inspect real GNS3 state, execute bounded workflows, capture evidence, and explain what happened.">
        <Link className="button button-primary" href="/contact?interest=GNS3%20Agent%20early%20access">Request early access ↗</Link>
        <a className="button button-secondary" href="https://github.com/Syedsaadhhh" target="_blank" rel="noreferrer">View GitHub ↗</a>
      </PageHero>
      <section className="section product-status-section"><div className="product-status-grid"><div><span>STATUS</span><b><i /> Active development</b></div><div><span>CURRENT PHASE</span><b>Diagnostics + real REST connectivity</b></div><div><span>PRIMARY ENVIRONMENT</span><b>Windows · GNS3 2.x</b></div><div><span>OPERATING PRINCIPLE</span><b>Read first. Act with boundaries.</b></div></div></section>
      <section className="section product-problem">
        <SectionHeading index="01" label="Problem" title={<>Network labs fail in the gaps<br />between tools, instructions, and evidence.</>} />
        <div className="three-column-cards"><article><span>01</span><h3>Environment ambiguity</h3><p>Python, packages, virtualization, local paths, ports, server processes, and GNS3 versions can fail independently.</p></article><article><span>02</span><h3>Execution overhead</h3><p>Students and engineers repeatedly translate lab documents into device, topology, validation, and troubleshooting steps.</p></article><article><span>03</span><h3>Evidence fragmentation</h3><p>Commands, screenshots, state checks, and written reports are produced separately, often without a reliable audit trail.</p></article></div>
      </section>
      <section className="section product-capabilities">
        <SectionHeading index="02" label="Current capabilities" title="What the agent can inspect today." copy="The current phase emphasizes truthful diagnostics and read-only visibility before expanding execution authority." />
        <div className="capability-table">{[["Environment doctor", "Python runtime, required packages, Windows paths, GNS3 installation, processes, and virtualization checks.", "IMPLEMENTED"],["REST connectivity", "Typed direct connection to the GNS3 REST API with structured success and error results.", "IMPLEMENTED"],["Server inspection", "Server information, projects, templates, configuration, and diagnostic summaries.", "IMPLEMENTED"],["Report artifacts", "JSON and Markdown reports for diagnostics and read-only inspection output.", "IMPLEMENTED"],["Topology execution", "Bounded creation and configuration workflows with checkpoints and rollback awareness.", "IN PROGRESS"],["Evidence automation", "Scope-aware screenshots, command evidence, validation output, and submission-ready reporting.", "PLANNED"]].map(([title,copy,status],index) => <article key={title}><b>0{index + 1}</b><div><h3>{title}</h3><p>{copy}</p></div><span className={status === "IMPLEMENTED" ? "implemented" : "planned"}>{status}</span></article>)}</div>
      </section>
      <section className="section product-flow-section">
        <SectionHeading index="03" label="Operating model" title="A visible execution loop." />
        <div className="execution-flow">{[["01", "Understand", "Parse the environment, request, lab instructions, constraints, and required evidence."],["02", "Plan", "Produce a device and command plan with validation checkpoints before modifying state."],["03", "Execute", "Call approved tools and GNS3 endpoints through bounded, observable operations."],["04", "Verify", "Check device state, connectivity, expected outputs, and failure conditions."],["05", "Recover", "Stop, explain, retry safely, or return control when confidence or policy is insufficient."],["06", "Document", "Package commands, results, screenshots, and explanations into traceable artifacts."]].map(([id,title,copy]) => <article key={id}><span>{id}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="section architecture-section">
        <SectionHeading index="04" label="Architecture" title="Local-first by default. Extensible by design." />
        <div className="architecture-stack">{[["Interface layer", "CLI today; desktop and guided workflow interfaces later."],["Orchestration layer", "Task planning, typed results, policy checks, checkpoints, and execution state."],["GNS3 adapter", "Direct typed REST client for server, project, template, node, and link operations."],["System diagnostics", "Windows process, path, port, package, install, and virtualization inspection."],["Evidence layer", "Structured logs, JSON/Markdown artifacts, screenshots, and report generation."],["Model layer", "Optional reasoning assistance with local or cloud models based on task sensitivity."]].map(([title,copy],index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>
      <section className="section audience-section"><SectionHeading index="05" label="Initial audience" title="Built first for the people closest to the pain." /><div className="audience-grid"><article><h3>Students</h3><p>Understand lab failures, execute repeatable workflows, and create better evidence without hiding the learning process.</p></article><article><h3>Educators</h3><p>Standardize lab setup, inspect environments, and reduce time spent debugging unrelated workstation problems.</p></article><article><h3>Technical teams</h3><p>Automate controlled GNS3 test environments, reusable topology tasks, and infrastructure validation.</p></article></div></section>
      <section className="section cta-section"><div className="wide-cta"><div><span>EARLY ACCESS</span><h2>Help shape the first useful release.</h2><p>Share your GNS3 environment, recurring lab pain, or automation use case.</p></div><Link className="button button-primary" href="/contact?interest=GNS3%20Agent%20early%20access">Join the early conversation ↗</Link></div></section>
    </>
  );
}
