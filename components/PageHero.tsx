import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero" id="top">
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="page-hero-inner">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
    </section>
  );
}
