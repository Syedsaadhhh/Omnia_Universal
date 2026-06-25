import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Build Log", description: "Transparent development notes from Omnia Sec AI Labs." };

const entries = [
  { date: "24 JUN 2026", type: "GNS3 AGENT / PHASE 1.5", title: "The agent can now inspect a real GNS3 environment.", body: "Added direct API connectivity, Windows diagnostics, environment checks, read-only inspection commands, structured reports, updated configuration, and automated tests.", tags: ["Python", "GNS3", "Diagnostics", "Testing"] },
  { date: "22 JUN 2026", type: "OMNIA / FOUNDATION", title: "The lab identity moved from idea to operating system.", body: "Established the Omnia vision, project architecture, roadmap, founder narrative, visual language, and a clear distinction between active work and future direction.", tags: ["Brand system", "Product strategy", "Web"] },
  { date: "MAY 2026", type: "CIRO / HACKATHON", title: "A crisis prototype became proof of operational ambition.", body: "CIRO combined multi-agent reasoning, Roman Urdu crisis parsing, realtime synchronization, operational traces, and a map-based command interface. Team Zero Trace ranked 6th in the Karachi region among 200+ teams.", tags: ["Gemini", "FastAPI", "Firebase", "Maps"] },
];

export default function BuildLogPage() {
  return (
    <>
      <PageHero eyebrow="PUBLIC BUILD LOG" title={<>Progress should leave<br /><span>evidence.</span></>} copy="A transparent record of meaningful capability changes, architecture decisions, failed assumptions, and the work still unfinished." />
      <section className="section build-log-list">
        {entries.map((entry, index) => <article key={entry.title}><div className="log-rail"><span>0{index + 1}</span><i /></div><div className="log-entry"><div className="log-meta"><time>{entry.date}</time><b>{entry.type}</b></div><h2>{entry.title}</h2><p>{entry.body}</p><div className="tag-row">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}
      </section>
    </>
  );
}
