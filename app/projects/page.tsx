import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProjectsGallery } from "@/components/ProjectsGallery";

export const metadata = pageMetadata("/projects", "Projects",
  "Explore Omnia flagship products, public-interest hackathon builds, and resilient security tools with clear status, evidence, and links.");

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="PROJECTS / VERIFIED WORK"
        title={<>Built in public.<br /><span>Judged by evidence.</span></>}
        copy="A focused archive of flagship systems, public-interest hackathon work, and compact security tools—each clearly labeled by maturity, context, and proof."
      />

      <section className="section projects-gallery-section">
        <div className="section-heading projects-gallery-heading">
          <div>
            <div className="section-kicker">01 / PROJECT INDEX</div>
            <h2>Find the relevant build fast.</h2>
          </div>
          <p>Filter by strategic role, then open the strongest available artifact: a live demo, a product architecture, a case study, or source code.</p>
        </div>
        <ProjectsGallery />
      </section>

      <section className="section projects-contact-section">
        <div className="wide-cta">
          <div>
            <span>COLLABORATE</span>
            <h2>Have a hard system to verify?</h2>
            <p>Bring the workflow, the constraints, and the evidence standard.</p>
          </div>
          <Link className="button button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
