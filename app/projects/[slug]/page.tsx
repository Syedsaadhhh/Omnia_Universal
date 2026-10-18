import { notFound } from "next/navigation";
import { detailEntries } from "@/lib/work";
import { pageMetadata } from "@/lib/metadata";
import { Action, Intro, Section } from "@/components/ui";

export const dynamicParams = false;
export function generateStaticParams() {
  return detailEntries.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = detailEntries.find((item) => item.slug === slug);
  return project
    ? pageMetadata(project.detail, project.title, project.summary)
    : {};
}
export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = detailEntries.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Intro title={project.title}>
        <p>{project.summary}</p>
        <p className="or-note">
          Historical {project.kind.toLowerCase()} record. Current maintenance
          and production suitability have not been independently reverified.
        </p>
      </Intro>
      <Section title="Context and attribution." pale>
        <p>
          {project.credit}. This record preserves the attribution and links
          supplied in the original website archive. It does not assert sole
          ownership of team work.
        </p>
        <dl className="or-inline-facts">
          <div>
            <dt>Artifact type</dt>
            <dd>{project.kind}</dd>
          </div>
          <div>
            <dt>Maintenance</dt>
            <dd>Not verified</dd>
          </div>
          <div>
            <dt>Commercial status</dt>
            <dd>No availability claim</dd>
          </div>
        </dl>
        <p>
          Relevant technologies in the original record:{" "}
          {project.tags.join(", ")}.
        </p>
      </Section>
      <Section title="Inspect the evidence.">
        <p>
          The source is the starting point for assessing what was built, by
          whom, and under which license. A repository link or demo is not
          independent verification of correctness or security.
        </p>
        <div className="or-actions">
          {project.source && (
            <Action href={project.source} primary>
              Inspect original source
            </Action>
          )}
          {project.originalLink.startsWith("https:") &&
            project.originalLink !== project.source && (
              <Action href={project.originalLink}>Original demo</Action>
            )}
          <Action href={`/projects#${project.slug}`}>
            Return to work archive
          </Action>
        </div>
        <p className="or-note">
          External demo availability and data handling may change. Review its
          own documentation before using it or sharing information.
        </p>
      </Section>
      <Section title="Limits and next questions." pale>
        <p>
          Before treating this artifact as a maintained tool, verify its current
          branch, installation instructions, test evidence, supported
          environment, contributor roles and license. No customer adoption,
          funding, benchmark result or service commitment is implied.
        </p>
        <p>
          A useful follow-up is to ask which real workflow the artifact improves
          and what evidence would justify further work.
        </p>
        <div className="or-actions">
          <Action href="/collaborate">Discuss a contribution</Action>
          <Action href="/for-organizations">Explore a related problem</Action>
        </div>
      </Section>
    </>
  );
}
