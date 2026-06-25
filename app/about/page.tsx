import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Founder", description: "The founder story and operating philosophy behind Omnia Sec AI Labs." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="FOUNDER / SYED SAAD" title={<>Start before permission.<br /><span>Compound the work.</span></>} copy="Omnia is being built by a Digital Forensics and Cyber Security student in Karachi with a long horizon, limited resources, and an unwillingness to treat those constraints as an excuse." />
      <section className="section founder-story">
        <div className="founder-story-visual"><div className="founder-large-monogram">SS</div><span>KARACHI / PKT / UTC+5</span></div>
        <div className="founder-story-copy">
          <h2>I am building the lab I want to grow into.</h2>
          <p>I’m Syed Saad, studying Digital Forensics and Cyber Security at Hamdard University. My strongest interests sit at the intersection of agentic AI, cloud security, infrastructure, digital forensics, and systems that can perform real technical work.</p>
          <p>Omnia started as a way to connect projects that would otherwise remain disconnected: crisis intelligence, incident reasoning, network automation, security tooling, and future autonomous workflows.</p>
          <p>The operating thesis is simple: every serious build should create reusable code, knowledge, design language, or infrastructure for the next one. Over time, that compounding work can become a platform rather than a collection of demos.</p>
          <blockquote>Build something real. Explain what it cannot do. Improve it until the limitation moves.</blockquote>
        </div>
      </section>
      <section className="section operating-principles">
        <SectionHeading index="01" label="Operating philosophy" title="Long horizon. Daily execution." />
        <div className="two-column-copy">
          <article><h3>Ambition without fiction</h3><p>The vision can be large without pretending the company, customer base, or product maturity already exists.</p></article>
          <article><h3>Learning through systems</h3><p>Courses, hackathons, labs, and personal projects become inputs to a focused technical direction.</p></article>
          <article><h3>Constraint as architecture</h3><p>Modest hardware and low budgets encourage local-first design, careful dependency choices, and resource awareness.</p></article>
          <article><h3>Leadership through ownership</h3><p>Lead the plan, absorb the hard last mile, document the work, and make the next execution easier for the team.</p></article>
        </div>
      </section>
      <section className="section cta-section"><div className="wide-cta"><div><span>COLLABORATION</span><h2>Serious builders are welcome.</h2><p>Especially around infrastructure automation, cybersecurity, cloud security, DFIR, and agent control systems.</p></div><Link className="button button-primary" href="/contact">Start a conversation ↗</Link></div></section>
    </>
  );
}
