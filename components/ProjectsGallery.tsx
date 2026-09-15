"use client";

import Link from "next/link";
import { useState } from "react";
import { projectShowcase, type ProjectCategory } from "@/lib/site";

const filters = ["All", "Flagship", "Hackathons", "Security Tools"] as const;
type ProjectFilter = (typeof filters)[number];

function statusClass(status: string) {
  if (status === "Active Build") return "status-active";
  if (status === "Regional Shortlist" || status.startsWith("Verified")) return "status-verified";
  if (status === "Public Prototype") return "status-pass";
  return "status-research";
}

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const visibleProjects = activeFilter === "All"
    ? projectShowcase
    : projectShowcase.filter((project) => project.categories.includes(activeFilter as ProjectCategory));

  return (
    <div className="projects-showcase">
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="project-result-count" aria-live="polite">
        Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
      </p>

      <div className="project-card-grid">
        {visibleProjects.map((project) => (
          <article className="showcase-card" id={project.title.toLowerCase().replaceAll(" ", "-")} key={project.title}>
            <div className="showcase-card-top">
              <span className="event-badge">{project.event}</span>
              <span className={`status-badge ${statusClass(project.status)}`}>{project.status}</span>
            </div>
            <div className="showcase-card-copy">
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            <div className="tag-row" aria-label={`${project.title} technology stack`}>
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="showcase-card-actions">
              <Link className="button button-primary" href={project.primary.href} target={project.primary.href.startsWith("http") ? "_blank" : undefined} rel={project.primary.href.startsWith("http") ? "noreferrer" : undefined}>
                {project.primary.label}
              </Link>
              {project.github && project.github !== project.primary.href ? (
                <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
