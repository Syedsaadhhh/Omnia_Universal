import Link from "next/link";
import { BootSequence } from "@/components/BootSequence";
import { CommandPanel } from "@/components/CommandPanel";
import { ContactForm } from "@/components/ContactForm";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { SectionHeading } from "@/components/SectionHeading";
import { labTools, researchQuestions } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <BootSequence />
      <section className="hero" id="top">
        <NetworkCanvas />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow glow-one" aria-hidden="true" />
        <div className="hero-glow glow-two" aria-hidden="true" />
        <div className="hero-shell">
          <div className="hero-copy">
            <div className="eyebrow"><i /> Independent AI & cybersecurity lab · Karachi</div>
            <h1>Building the intelligence layer for <span>autonomous systems.</span></h1>
            <p>Omnia Sec AI Labs creates agents, security tooling, and operational software that transform human intent into secure, observable execution.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/gns3-agent">Explore GNS3 Agent <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" href="#manifesto">Read the manifesto</Link>
            </div>
            <div className="hero-proof" aria-label="Core focus areas"><span>Agentic AI</span><span>Cybersecurity</span><span>Infrastructure automation</span><span>Digital forensics</span></div>
          </div>
          <div className="hero-visual"><CommandPanel /></div>
        </div>
        <div className="scroll-indicator"><span /> Scroll to enter the lab</div>
      </section>

      <section className="signal-strip" aria-label="Omnia system statement"><div><span>INTELLIGENT SYSTEMS</span><i>✦</i><span>SECURE FUTURES</span><i>✦</i><span>OBSERVABLE AUTONOMY</span><i>✦</i><span>REAL-WORLD EXECUTION</span><i>✦</i><span>INTELLIGENT SYSTEMS</span><i>✦</i><span>SECURE FUTURES</span><i>✦</i><span>OBSERVABLE AUTONOMY</span><i>✦</i><span>REAL-WORLD EXECUTION</span><i>✦</i></div></section>

      <section className="section manifesto" id="manifesto">
        <SectionHeading index="01" label="Manifesto" title={<>Software should carry the complexity.<br /><span>People should carry the vision.</span></>} />
        <div className="manifesto-layout">
          <div className="manifesto-statement"><p>Most AI still waits inside a chat box. Omnia is interested in what happens when intelligence leaves the box and enters the workflow.</p><p>We build systems that can observe, reason, act, verify, and recover—without abandoning security, traceability, or human control.</p></div>
          <div className="principle-grid">
            <article><span>01</span><h3>Build relentlessly</h3><p>Useful systems emerge through prototypes, evidence, failure, and another iteration.</p></article>
            <article><span>02</span><h3>Automate responsibly</h3><p>Autonomy needs boundaries, approval points, audit trails, and a clear stop button.</p></article>
            <article><span>03</span><h3>Solve reality</h3><p>Every product must reduce a genuine operational burden beyond the demo.</p></article>
            <article><span>04</span><h3>Design for constraint</h3><p>Low-cost, local-first architecture is not a compromise; it is an engineering discipline.</p></article>
          </div>
        </div>
      </section>

      <section className="section active-work">
        <SectionHeading index="02" label="Active work" title={<>Proof before promises.</>} copy="The flagship is narrow by design: prove reliable autonomy in one difficult technical environment, then extract the reusable system beneath it." />
        <article className="flagship-card">
          <div className="flagship-copy">
            <div className="project-meta"><span className="live-chip"><i /> ACTIVE DEVELOPMENT</span><span>FLAGSHIP / 001</span></div>
            <h3>GNS3 Agent</h3>
            <p>A Windows-first diagnostic and automation agent for network labs. It connects to the real GNS3 API, inspects the environment, explains failures, and builds toward safe execution, evidence capture, and reporting.</p>
            <div className="capability-list">
              <div><b>01</b><span><strong>Diagnose</strong> Python, packages, GNS3 processes, ports, API access, paths, and virtualization.</span></div>
              <div><b>02</b><span><strong>Inspect</strong> projects, templates, server state, configuration, and read-only lab artifacts.</span></div>
              <div><b>03</b><span><strong>Execute</strong> future lab workflows with visible steps, checkpoints, and recovery boundaries.</span></div>
              <div><b>04</b><span><strong>Document</strong> evidence and outcomes as traceable technical reports.</span></div>
            </div>
            <div className="flagship-actions"><Link className="button button-primary" href="/gns3-agent">View product architecture ↗</Link><Link className="text-link" href="/contact?interest=GNS3%20Agent%20early%20access">Request early access →</Link></div>
          </div>
          <div className="agent-console" aria-label="GNS3 Agent diagnostic preview">
            <div className="console-top"><span><i /><i /><i /></span><b>omnia://gns3-agent/doctor</b><em>LIVE TRACE</em></div>
            <div className="console-lines"><p><time>00:00.131</time><span className="ok">PASS</span> Python runtime located</p><p><time>00:00.284</time><span className="ok">PASS</span> GNS3 install path resolved</p><p><time>00:00.517</time><span className="ok">PASS</span> Port 3080 reachable</p><p><time>00:00.863</time><span className="ok">PASS</span> REST API authenticated</p><p><time>00:01.106</time><span className="warn">INFO</span> 4 projects · 12 templates</p><p className="running"><time>00:01.449</time><span>RUN</span> Building diagnostic report<i /></p></div>
            <div className="topology-preview"><div className="router r1">R1</div><div className="router r2">R2</div><div className="switch sw">SW1</div><div className="host h1">PC1</div><div className="host h2">PC2</div><svg viewBox="0 0 500 190" aria-hidden="true"><path d="M112 52H238"/><path d="M288 52H412"/><path d="M263 76V124"/><path d="M263 149H112"/><path d="M263 149H412"/></svg></div>
            <div className="console-progress"><span /></div><div className="console-bottom"><span>REPORT: JSON + MARKDOWN</span><b>82%</b></div>
          </div>
        </article>
        <div className="project-teasers">
          {labTools.map((tool) => <article key={tool.title}><div><span>{tool.kind}</span><b>{tool.number}</b></div><h3>{tool.title}</h3><p>{tool.description}</p><div className="tag-row">{tool.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href={`/projects#${tool.title.toLowerCase().replaceAll(" ", "-")}`}>View lab tool ↗</Link></article>)}
        </div>
      </section>

      <section className="section ecosystem-section">
        <SectionHeading index="03" label="System architecture" title={<>One intelligence layer.<br /><span>Many specialized systems.</span></>} copy="Omnia is structured as a parent lab and future platform—not a single product trapped inside one interface." />
        <div className="ecosystem-visual"><div className="eco-grid" aria-hidden="true" /><div className="eco-core"><div className="eco-halo" /><strong>OMNIA</strong><span>CONTROL PLANE</span></div>{[["01", "Runtime", "Execution & recovery", "eco-a"],["02", "Trace", "Observability & audit", "eco-b"],["03", "Gate", "Verification & approval", "eco-c"],["04", "Connect", "Tools & integrations", "eco-d"],["05", "Studio", "Workflow design", "eco-e"],["06", "Agents", "Specialized intelligence", "eco-f"]].map(([id,title,copy,className]) => <div className={`eco-node ${className}`} key={id}><i>{id}</i><b>{title}</b><span>{copy}</span></div>)}<svg viewBox="0 0 1200 720" aria-hidden="true"><path d="M600 360 250 130"/><path d="M600 360 950 130"/><path d="M600 360 145 360"/><path d="M600 360 1055 360"/><path d="M600 360 250 590"/><path d="M600 360 950 590"/></svg></div>
        <p className="architecture-note">These platform names describe the intended architecture. They are not presented as released products until the corresponding capability exists.</p>
      </section>

      <section className="section roadmap-section">
        <SectionHeading index="04" label="Roadmap" title={<>From one useful agent<br />to a governed autonomous platform.</>} />
        <div className="roadmap-list">{[["NOW", "GNS3 Agent", "Harden diagnostics, API connectivity, read-only inspection, and the first safe execution workflows.", "Document intelligence · GNS3 operations · evidence · reports"],["NEXT", "Reusable agent infrastructure", "Extract execution, policy, trace, recovery, and plugin layers from the flagship product.", "Runtime · observability · local-first controls · connectors"],["LATER", "Multi-agent ecosystem", "Coordinate security, infrastructure, research, and operations agents around shared governance.", "Shared context · verification gates · orchestration"],["VISION", "Secure autonomous platform", "Translate high-level human objectives into observable, bounded, real-world execution.", "Human control · enterprise governance · continuous learning"]].map(([phase,title,copy,detail],index) => <article key={phase}><div className="roadmap-phase"><span>0{index + 1}</span><b>{phase}</b></div><div className="roadmap-marker"><i /></div><div><h3>{title}</h3><p>{copy}</p><small>{detail}</small></div></article>)}</div>
      </section>

      <section className="section founder-preview"><div className="founder-card"><div className="founder-portrait"><div className="portrait-grid" /><div className="portrait-monogram">SS</div><div className="portrait-scan" /><span><i /> BUILDING FROM KARACHI</span></div><div className="founder-copy"><div className="section-kicker">05 / Founder</div><h2>Credible ambition under constraint.</h2><p>I’m <strong>Syed Saad</strong>, a Digital Forensics and Cyber Security student at Hamdard University. I build where agentic AI, infrastructure, cloud security, and DFIR intersect.</p><p>Omnia exists because isolated demos are not enough. Each project should create reusable knowledge and infrastructure for the next—until the ecosystem becomes real.</p><blockquote>“The ambition is long-term. The work is daily.”</blockquote><div className="founder-facts"><div><b>Current focus</b><span>GNS3 Agent · Secure autonomy</span></div><div><b>Background</b><span>DFIR · Cybersecurity · AI</span></div><div><b>Operating model</b><span>Student founder · Independent lab</span></div><div><b>Long-term direction</b><span>Cloud security + autonomous systems</span></div></div><Link className="text-link" href="/about">Read the founder story →</Link></div></div></section>

      <section className="section research-preview"><SectionHeading index="06" label="Research direction" title="Questions worth building toward." copy="The research agenda stays attached to product reality: action, verification, orchestration, security, and human control." /><div className="research-grid">{researchQuestions.map((item) => <article key={item.id}><span>{item.id}</span><h3>{item.title}</h3><p>{item.question}</p></article>)}</div><div className="section-link"><Link className="button button-secondary" href="/research">Open research direction ↗</Link></div></section>

      <section className="section contact-preview"><div className="contact-panel"><div className="contact-copy"><div className="section-kicker">07 / Contact</div><h2>Bring a difficult problem.</h2><p>Open to serious conversations around GNS3 Agent, research collaboration, technical partnerships, cybersecurity, and agentic infrastructure.</p><div className="contact-pills"><span>Early access</span><span>Research</span><span>Partnerships</span><span>Technical discussion</span></div><small>Direct founder response · Karachi / PKT (UTC+5)</small></div><ContactForm compact /></div></section>
    </>
  );
}
