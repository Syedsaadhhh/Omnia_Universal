import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Action, Intro, Section } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata = pageMetadata(
  "/contact",
  "Contact",
  "Contact Syed Saad at Omniasec Labs by direct email for research collaboration, organizational problems and technical discussion.",
);
export default function ContactPage() {
  return (
    <>
      <Intro title="Start with the real context.">
        <p>
          Share the problem, the constraints and what a useful first
          conversation would cover. Direct contact is with the founder; no
          response time or project availability is guaranteed.
        </p>
      </Intro>
      <Section title="A direct conversation." pale>
        <p className="or-large-copy">
          <a className="or-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p>
          You can copy the address into your preferred email app, or use the
          link below. Review your message there before sending. This website
          does not submit it for you.
        </p>
        <div className="or-actions">
          <Action
            href={`mailto:${site.email}?subject=Omniasec%20Labs%20inquiry`}
            primary
          >
            Open email app
          </Action>
        </div>
        <p className="or-note">
          Direct email links, not an online contact form. No automatic
          mailing-list enrollment.
        </p>
      </Section>
      <Section title="Make the first message useful.">
        <p>
          For an organizational problem, include a recent example, affected
          people, existing attempts, constraints and the outcome you want. For
          collaboration, share relevant experience, interests, work links and
          realistic availability.
        </p>
        <p>
          Keep initial messages non-confidential. Do not send credentials,
          identity documents or sensitive third-party information. Discuss
          information-sharing arrangements separately when necessary.
        </p>
        <div className="or-actions">
          <Action href="/for-organizations">For organizations</Action>
          <Action href="/collaborate">Collaborate</Action>
        </div>
      </Section>
      <Section title="Clear expectations." pale>
        <p>
          A conversation does not establish a delivery contract, employment,
          equity, a partnership or guaranteed product access. Any work depends
          on fit, capacity and separately agreed terms.
        </p>
        <p>
          See <Link href="/privacy">Privacy</Link> for information handling and{" "}
          <Link href="/security">Security</Link> for reporting a technical
          issue.
        </p>
      </Section>
    </>
  );
}
