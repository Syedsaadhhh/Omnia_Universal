import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = {
  ...pageMetadata("/", "Omnia Sec AI Labs — Secure Autonomous Systems", site.description),
  title: { absolute: "Omnia Sec AI Labs — Secure Autonomous Systems" },
};

import Link from "next/link";
import { CommandPanel } from "@/components/CommandPanel";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <NetworkCanvas />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow glow-one" aria-hidden="true" />
        <div className="hero-glow glow-two" aria-hidden="true" />
        <div className="hero-shell">
          <div className="hero-copy">
            <div className="eyebrow"><i /> Independent AI & cybersecurity lab · Karachi</div>
            <h1>Building the intelligence layer for <span>verified autonomy.</span></h1>
            <p>Omnia builds public-interest systems that keep working when plans, infrastructure, or evidence break—without giving up human control.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/projects#reproforge">View ReproForge <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" href="#manifesto">Read Manifesto <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-proof" aria-label="Core focus areas"><span>Resilient agents</span><span>Cybersecurity</span><span>Public-interest systems</span><span>Verifiable outcomes</span></div>
          </div>
          <div className="hero-visual"><CommandPanel /></div>
        </div>
        <div className="scroll-indicator"><span /> Scroll to enter the lab</div>
      </section>

      <section className="signal-strip" aria-label="Omnia system statement"><div><span>HUMAN CONTROL</span><i>✦</i><span>SAFE RECOVERY</span><i>✦</i><span>PUBLIC BENEFIT</span><i>✦</i><span>VERIFIABLE OUTCOMES</span><i>✦</i><span>HUMAN CONTROL</span><i>✦</i><span>SAFE RECOVERY</span><i>✦</i><span>PUBLIC BENEFIT</span><i>✦</i><span>VERIFIABLE OUTCOMES</span><i>✦</i></div></section>

      <section className="section active-work homepage-active-work">
        <SectionHeading index="01" label="Active work" title={<>Proof before promises.</>} copy="ReproForge is the flagship verification layer: it reruns claims, captures evidence, and makes the limits visible before a result is trusted." />
        <article className="flagship-card venture-card" id="reproforge">
          <div className="flagship-copy">
            <div className="project-meta"><span className="live-chip"><i /> ACTIVE BUILD</span><span>FRONTIEROPS / AMD ACT II</span></div>
            <h3>ReproForge</h3>
            <p>A claim-to-evidence system for AI demos, benchmarks, and research. Controlled reruns produce signed reproducibility passports with execution traces, policy events, hashes, limitations, and exportable proof.</p>
            <div className="capability-list">
              <div><b>01</b><span><strong>Rerun</strong> declared code, prompts, data, and configuration inside bounded environments.</span></div>
              <div><b>02</b><span><strong>Capture</strong> runtime details, blocked commands, approvals, and evidence integrity.</span></div>
              <div><b>03</b><span><strong>Report</strong> what passed, what failed, and what remains unverified.</span></div>
            </div>
            <div className="flagship-actions"><a className="button button-primary" href="https://reproforge-sentinel.onrender.com" target="_blank" rel="noreferrer">Open live demo ↗</a><Link className="text-link" href="/projects">View all resilient systems →</Link></div>
          </div>
          <div className="reproforge-passport" aria-label="ReproForge passport preview">
            <div className="passport-top"><span>REPROFORGE PASSPORT</span><b>PRE-SEED BUILD</b></div>
            <div className="passport-verdict"><i /> CLAIM STATUS: UNDER VERIFICATION</div>
            <div className="passport-claim">“A result should carry enough evidence to be challenged, rerun, and trusted.”</div>
            <div className="passport-grid">
              <div><span>TEAM</span><b>FrontierOps</b></div>
              <div><span>EVENT</span><b>AMD ACT II</b></div>
              <div><span>MODE</span><b>Bounded rerun</b></div>
              <div><span>OUTPUT</span><b>PDF · JSON · Share link</b></div>
            </div>
            <div className="passport-chain"><span /> ingest claim <i /> rerun safely <i /> capture evidence <i /> sign report</div>
          </div>
        </article>
      </section>

      <section className="section manifesto manifesto-compact" id="manifesto">
        <SectionHeading index="02" label="Manifesto" title={<>Complexity belongs in the system.<br /><span>Control stays with people.</span></>} />
        <div className="manifesto-compact-grid">
          <p><strong>Observe reality.</strong> Start from the real workflow, not the demo script.</p>
          <p><strong>Fail safely.</strong> Bound every action and preserve a human handoff.</p>
          <p><strong>Prove outcomes.</strong> A claim is useful only when its evidence travels with it.</p>
        </div>
      </section>

      <section className="section ecosystem-section ecosystem-compact">
        <SectionHeading index="03" label="System architecture" title={<>One control layer.<br /><span>Three resilient behaviors.</span></>} copy="Every Omnia system is designed around visible decisions, bounded action, and evidence-led recovery." />
        <div className="platform-glance">
          <article><span>OBSERVE</span><h3>Read the real state</h3><p>Collect signals, constraints, and human intent before acting.</p></article>
          <article><span>GOVERN</span><h3>Stay inside authority</h3><p>Apply policy, approval gates, budgets, and a safe stop.</p></article>
          <article><span>VERIFY</span><h3>Measure the outcome</h3><p>Return traceable evidence or escalate instead of guessing.</p></article>
        </div>
      </section>

      <section className="section roadmap-section roadmap-compact">
        <SectionHeading index="04" label="Roadmap" title={<>From useful agents<br />to resilient public infrastructure.</>} />
        <div className="roadmap-glance">
          <article><b>NOW</b><span>Prove ReproForge and focused recovery agents in real workflows.</span></article>
          <article><b>NEXT</b><span>Reuse policy, audit, recovery, and evidence infrastructure.</span></article>
          <article><b>LATER</b><span>Coordinate specialized agents behind shared human controls.</span></article>
        </div>
      </section>

      <section className="section homepage-teasers" aria-label="Learn more about Omnia">
        <article><div className="section-kicker">ABOUT</div><h2>Built with ambition and honest constraints.</h2><p>Meet the founder and the operating principles behind an independent lab in Karachi.</p><Link className="text-link" href="/about">Read the founder story →</Link></article>
        <article><div className="section-kicker">RESEARCH</div><h2>Questions tied to working systems.</h2><p>Explore trustworthy execution, reproducible claims, cyber defense, and human-agent coordination.</p><Link className="text-link" href="/research">Explore the research →</Link></article>
      </section>

      <section className="section contact-preview homepage-final-cta">
        <div className="wide-cta">
          <div><span>WORK WITH OMNIA</span><h2>Bring a difficult public-interest problem.</h2><p>Especially where failure, ambiguity, or weak evidence leaves people carrying the operational burden.</p></div>
          <Link className="button button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
