import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { labTools, projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Flagship Omnia products, lab tools, research concepts, and clearly labeled team-built case studies.",
};

export default function ProjectsPage() {
  const flagship = projects[0];
  const ciro = projects.find((project) => project.title === "CIRO");
  const casemind = projects.find((project) => project.title === "CASEMIND");

  return (
    <>
      <PageHero
        eyebrow="PROJECT ARCHIVE"
        title={<>Systems built to <span>compound.</span></>}
        copy="Omnia separates flagship products, solo-built lab tools, research concepts, and team event work so every project is presented honestly and professionally."
      />

      <section className="section projects-page-list">
        <article id="gns3-agent" className="project-page-card">
          <div className="project-page-index">{flagship.number}</div>
          <div className="project-page-main">
            <div className="project-meta"><span>{flagship.kind}</span><b>{flagship.status}</b></div>
            <h2>{flagship.title}</h2>
            <p>{flagship.description}</p>
            <p className="project-detail">Current proof: typed GNS3 REST connectivity, Windows diagnostics, server and project inspection, configuration migration, report artifacts, and a mocked test suite.</p>
            <div className="tag-row">{flagship.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <Link className="text-link" href={flagship.href}>Open dedicated product page →</Link>
          </div>
          <div className="project-glyph glyph-1" aria-hidden="true"><span>G</span><i /><i /></div>
        </article>
      </section>

      <section className="section projects-page-list">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 / Omnia Lab Tools</div>
            <h2>Small tools with service potential.</h2>
          </div>
          <p>These solo-built prototypes can become hosted utilities, student tools, cybersecurity demos, or future Omnia micro-services after hardening.</p>
        </div>
        {labTools.map((tool, index) => (
          <article id={tool.title.toLowerCase().replaceAll(" ", "-")} key={tool.title} className="project-page-card">
            <div className="project-page-index">{tool.number}</div>
            <div className="project-page-main">
              <div className="project-meta"><span>{tool.kind}</span><b>{tool.status}</b></div>
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <p className="project-detail">{tool.proof}</p>
              <p className="project-detail"><strong>Deployment path:</strong> {tool.deployStatus}</p>
              <div className="tag-row">{tool.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href={tool.repo} target="_blank" rel="noreferrer">View GitHub repo →</a>
            </div>
            <div className={`project-glyph glyph-${index + 2}`} aria-hidden="true"><span>{tool.title.charAt(0)}</span><i /><i /></div>
          </article>
        ))}
      </section>

      {ciro && (
        <section className="section projects-page-list">
          <div className="section-heading">
            <div>
              <div className="section-kicker">03 / Case Study</div>
              <h2>Team-built event work stays credited.</h2>
            </div>
            <p>CIRO is preserved as a Google AI Seekho 2026 / Team Zero Trace case study. It should not be framed as a standalone Omnia service.</p>
          </div>
          <article id="ciro" className="project-page-card">
            <div className="project-page-index">{ciro.number}</div>
            <div className="project-page-main">
              <div className="project-meta"><span>{ciro.kind}</span><b>{ciro.status}</b></div>
              <h2>{ciro.title}</h2>
              <p>{ciro.description}</p>
              <p className="project-detail">Built for Google AI Seekho 2026 with Team Zero Trace as a Karachi-first crisis intelligence prototype. The case study highlights the architecture, execution discipline, and learning outcomes without claiming it as an Omnia-owned product.</p>
              <p className="project-detail"><strong>Certificate slot:</strong> Google AI Seekho certificate will be displayed here once uploaded.</p>
              <div className="tag-row">{ciro.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href="https://github.com/Syedsaadhhh/ciro-khi" target="_blank" rel="noreferrer">View CIRO repository →</a>
            </div>
            <div className="project-glyph glyph-2" aria-hidden="true"><span>C</span><i /><i /></div>
          </article>
        </section>
      )}

      {casemind && (
        <section className="section projects-page-list">
          <div className="section-heading">
            <div>
              <div className="section-kicker">04 / Research Concepts</div>
              <h2>Ideas under evaluation.</h2>
            </div>
            <p>Research concepts remain clearly marked until they become implemented software with working repositories and evidence.</p>
          </div>
          <article id="casemind" className="project-page-card">
            <div className="project-page-index">{casemind.number}</div>
            <div className="project-page-main">
              <div className="project-meta"><span>{casemind.kind}</span><b>{casemind.status}</b></div>
              <h2>{casemind.title}</h2>
              <p>{casemind.description}</p>
              <p className="project-detail">A conceptual DFIR assistant focused on incident timelines, evidence organization, attacker hypotheses, severity, and response planning. It remains a research direction rather than a public product.</p>
              <div className="tag-row">{casemind.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="text-link" href="/contact?interest=Technical%20discussion">Discuss this research direction →</Link>
            </div>
            <div className="project-glyph glyph-3" aria-hidden="true"><span>R</span><i /><i /></div>
          </article>
        </section>
      )}
    </>
  );
}
