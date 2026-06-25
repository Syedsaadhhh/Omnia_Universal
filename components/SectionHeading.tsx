import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  copy,
}: {
  index: string;
  label: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="section-kicker">{index} / {label}</div>
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}
