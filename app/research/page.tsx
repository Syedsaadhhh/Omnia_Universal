import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { researchQuestions } from "@/lib/site";

export const metadata: Metadata = { title: "Research", description: "Omnia research direction: trustworthy agent execution, local-first intelligence, agentic cyber defense, and human-agent coordination." };

export default function ResearchPage() {
  return (
    <>
      <PageHero eyebrow="RESEARCH DIRECTION" title={<>Build the control systems<br />around <span>intelligence.</span></>} copy="The difficult part is no longer making a model answer. It is making an autonomous system act safely, visibly, recoverably, and usefully." />
      <section className="section research-page-grid">
        {researchQuestions.map((item) => <article key={item.id}><span>{item.id}</span><h2>{item.title}</h2><p>{item.question}</p><div className="research-lines"><i /><i /><i /></div></article>)}
      </section>
      <section className="section research-principles">
        <SectionHeading index="01" label="Principles" title="Research that remains answerable to reality." />
        <div className="two-column-copy">
          <article><h3>Product-connected</h3><p>Research questions are tested through working systems, observed failure modes, and real operational constraints.</p></article>
          <article><h3>Transparent about maturity</h3><p>Concepts, prototypes, active products, and verified capabilities are labeled differently. Vision is not presented as deployment.</p></article>
          <article><h3>Security before authority</h3><p>More capable agents should receive more instrumentation, narrower policies, stronger approval gates, and clearer recovery paths.</p></article>
          <article><h3>Accessible under constraint</h3><p>Useful autonomy should not require unlimited compute, premium hardware, or an expensive API call for every decision.</p></article>
        </div>
      </section>
      <section className="section publication-note"><div className="wide-cta"><div><span>PUBLICATION PIPELINE</span><h2>Technical notes will live here.</h2><p>Architecture decisions, failure reports, experiments, and build lessons will be published as the systems mature.</p></div><Link className="button button-secondary" href="/build-log">Open build log ↗</Link></div></section>
    </>
  );
}
