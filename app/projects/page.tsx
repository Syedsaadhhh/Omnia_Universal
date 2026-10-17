import { pageMetadata } from "@/lib/metadata";
import { Intro, Section, Action } from "@/components/ui";
import { ProjectsGallery } from "@/components/ProjectsGallery";
export const metadata = pageMetadata(
  "/projects",
  "Work",
  "Inspect historical prototypes, experiments and research concepts with original attribution, source links and explicit maturity limits.",
);
export default function ProjectsPage() {
  return (
    <>
      <Intro title="Useful work leaves evidence.">
        <p>
          A growing archive of research concepts, experiments and prototypes.
          Follow the source, distinguish intent from tested capability, and keep
          the original contributors in view.
        </p>
      </Intro>
      <section className="or-section">
        <div className="or-shell">
          <div className="or-section-heading">
            <h2>Examine the artifacts.</h2>
            <p>
              Artifact type is separate from readiness. Inclusion here does not
              establish current maintenance, independent validation, commercial
              availability or customer use.
            </p>
          </div>
          <ProjectsGallery />
        </div>
      </section>
      <Section title="What a mature record needs." pale>
        <p>
          A clear problem, an inspectable artifact, contributors and ownership,
          a dated test, reproducibility where possible, and an honest account of
          limitations. Archived material is not promoted to a product by
          changing its label.
        </p>
        <div className="or-actions">
          <Action href="/research/method">Read the evidence standard</Action>
          <Action href="/collaborate" primary>
            Contribute to the next question
          </Action>
        </div>
      </Section>
    </>
  );
}
