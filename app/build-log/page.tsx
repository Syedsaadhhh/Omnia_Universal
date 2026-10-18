import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Intro, Section, Arrow } from "@/components/ui";
export const metadata = pageMetadata(
  "/build-log",
  "Updates",
  "Dated engineering records and historical development notes from Omniasec Labs, with evidence links and explicit limits.",
);
const legacy = [
  [
    "2026-06-24",
    "24 June 2026",
    "GNS3 inspection and diagnostics",
    "The original development note reported API connectivity, Windows diagnostics, environment checks and structured reports. Current capability and maintenance have not been independently reverified.",
    "/gns3-agent",
  ],
  [
    "2026-06-22",
    "22 June 2026",
    "The original lab foundation",
    "An earlier identity, roadmap and project architecture were recorded. The selected Open Register reconstruction broadens the lab beyond that original AI/security positioning.",
    "/about",
  ],
  [
    "2026-05",
    "May 2026",
    "CIRO team/event work",
    "The existing archive attributes a crisis-intelligence prototype to Team Zero Trace in the Google AI Seekho event context. No competition rank or adoption claim is reasserted here without independent evidence.",
    "/projects/ciro",
  ],
];
export default function UpdatesPage() {
  return (
    <>
      <Intro title="Progress should leave a record.">
        <p>
          Engineering changes, decisions and limitations. Dates identify the
          record; they do not imply that every source change is deployed or
          every historical project is maintained.
        </p>
      </Intro>
      <section className="or-section">
        <div className="or-shell">
          <div className="or-section-heading">
            <h2>Engineering evidence.</h2>
            <p>
              Inspect the linked change and test result alongside what remains
              unresolved.
            </p>
          </div>
          <article className="or-update">
            <time dateTime="2026-10-16">16 October 2026</time>
            <div>
              <h3>The engineering foundation checkpoint</h3>
              <p>
                Draft security PR #6, deterministic builds, disabled contact
                delivery and bounded regression evidence. Source improvements
                under review, not a release announcement.
              </p>
            </div>
            <Link
              className="or-text-link"
              href="/build-log/security-foundation"
            >
              Read the record
              <Arrow />
            </Link>
          </article>
        </div>
      </section>
      <Section title="From the earlier archive." pale>
        <div className="or-record-list">
          {legacy.map(([date, label, title, copy, href]) => (
            <article className="or-record" key={date}>
              <time dateTime={date} className="or-note">
                {label} · Historical note
              </time>
              <h3 style={{ marginTop: 14 }}>{title}</h3>
              <p>{copy}</p>
              <Link className="or-text-link" href={href}>
                Read the related record
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
