import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy", description: "Privacy notice for the Omnia Sec AI Labs website and contact form." };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL / PRIVACY" title="A minimal-data website." copy="This notice explains what the current Omnia website collects and why. Last updated: 25 June 2026." />
      <section className="section legal-copy">
        <h2>Information you provide</h2><p>The contact form collects your name, email address, optional organization, inquiry category, and message. This information is used only to review and respond to your inquiry.</p>
        <h2>How messages are handled</h2><p>Contact submissions are delivered to the configured Omnia inbox through an email delivery provider. The website does not intentionally write inquiry content to its own application database.</p>
        <h2>Technical data</h2><p>The hosting platform may process ordinary server information such as IP address, request time, browser details, and error logs for security, availability, and troubleshooting. Basic IP-based rate limiting is applied to the contact endpoint.</p>
        <h2>Cookies and analytics</h2><p>The current site does not use advertising cookies or third-party behavioral analytics. A session-storage flag may be used to avoid replaying the opening animation during the same browser session.</p>
        <h2>Retention</h2><p>Email correspondence may be retained while the conversation remains relevant, for project records, security, or legal obligations. You may request deletion where reasonably possible.</p>
        <h2>Contact</h2><p>Privacy questions can be sent to <a href={`mailto:${site.email}?subject=Privacy%20request`}>{site.email}</a>.</p>
      </section>
    </>
  );
}
