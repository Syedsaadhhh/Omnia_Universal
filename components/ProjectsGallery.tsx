"use client";
import Link from "next/link";
import { useState } from "react";
import { workEntries } from "@/lib/work";

const filters = ["All", "Prototypes", "Experiments", "Concepts"] as const;
type Filter = (typeof filters)[number];
export function ProjectsGallery() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All"
      ? workEntries
      : workEntries.filter((project) => `${project.kind}s` === active);
  return (
    <div>
      <div
        className="or-filters"
        role="group"
        aria-label="Filter work by artifact type"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="project-result-count" aria-live="polite" aria-atomic="true">
        Showing {visible.length} {visible.length === 1 ? "record" : "records"}.
        All are presented as historical material or concepts; current
        maintenance is unverified.
      </p>
      <div className="or-project-list">
        {visible.map((project) => (
          <article
            className="or-work showcase-card"
            id={project.slug}
            key={project.slug}
          >
            <h2>{project.title}</h2>
            <span className="or-meta">
              {project.kind} · {project.credit}
            </span>
            <p>{project.summary}</p>
            <div
              className="or-project-tags"
              aria-label={`${project.title} technologies`}
            >
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="or-project-links">
              <Link href={project.detail}>Read {project.title} record</Link>
              {project.source && <a href={project.source}>Original source</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
