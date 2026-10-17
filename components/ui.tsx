import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}
export function Action({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  const content = (
    <>
      {children}
      <Arrow />
    </>
  );
  const className = `or-action${primary ? " or-action-primary" : ""}`;
  return href.startsWith("mailto:") || href.startsWith("https:") ? (
    <a className={className} href={href}>
      {content}
    </a>
  ) : (
    <Link className={className} href={href}>
      {content}
    </Link>
  );
}
export function Intro({
  title,
  children,
  actions,
}: {
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="or-intro or-shell">
      <h1>{title}</h1>
      <div className="or-intro-copy">{children}</div>
      {actions && <div className="or-actions">{actions}</div>}
    </header>
  );
}
export function Section({
  id,
  title,
  children,
  pale = false,
}: {
  id?: string;
  title: ReactNode;
  children: ReactNode;
  pale?: boolean;
}) {
  return (
    <section id={id} className={`or-section${pale ? " or-pale" : ""}`}>
      <div className="or-shell or-split">
        <h2>{title}</h2>
        <div className="or-prose">{children}</div>
      </div>
    </section>
  );
}
export function ReadPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <Intro title={title}>
        <p>{description}</p>
      </Intro>
      <div className="or-pale">
        <article className="or-reading or-shell">{children}</article>
      </div>
    </>
  );
}
