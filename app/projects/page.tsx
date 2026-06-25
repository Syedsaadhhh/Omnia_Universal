import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/lib/site";

export const metadata: Metadata = { title: "Projects", description: "Flagship products, operational prototypes, and research concepts developed inside Omnia Sec AI Labs." };

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="PROJECT ARCHIVE" title={<>Systems built to <span>compound.</span></>} copy="Each project is evaluated as a potential building block for a larger secure-autonomy ecosystem—not as an isolated demo." />
      <section className="section projects-page-list">
        {projects.map((project, index) => (
          <article id={project.title.toLowerCase()} key={project.title} className="project-page-card">
            <div className="project-page-index">{project.number}</div>
            <div className="project-page-main">
              <div className="project-meta"><span>{project.kind}</span><b>{project.status}</b></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.title === "GNS3 Agent" && <p className="project-detail">Current proof: typed GNS3 REST connectivity, Windows diagnostics, server and project inspection, configuration migration, report artifacts, and a mocked test suite.</p>}
              {project.title === "CIRO" && <p className="project-detail">Built for Google AI Seekho 2026 as a Karachi-first crisis intelligence platform using staged multi-agent reasoning, Roman Urdu processing, telemetry validation, realtime state, maps, and human approval boundaries.</p>}
              {project.title === "CASEMIND" && <p className="project-detail">A conceptual DFIR assistant focused on incident timelines, evidence organization, attacker hypotheses, severity, and response planning. It remains a research direction rather than a public product.</p>}
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="text-link" href={project.href}>{index === 0 ? "Open dedicated product page" : "Discuss this project"} →</Link>
            </div>
            <div className={`project-glyph glyph-${index + 1}`} aria-hidden="true"><span>{project.title.charAt(0)}</span><i /><i /></div>
          </article>
        ))}
      </section>
    </>
  );
}
