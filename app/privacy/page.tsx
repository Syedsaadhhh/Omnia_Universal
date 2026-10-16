import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata = pageMetadata("/privacy", "Privacy", "Privacy notice for this website and direct email inquiries.");

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL / PRIVACY" title="A minimal-data website." copy="This notice describes the current website and direct email contact. Last updated: 15 October 2026." />
      <section className="section legal-copy">
        <h2>Contact by email</h2><p>This website offers direct email links, not an online contact form. Following a link opens your email application. The website does not send the message for you. The retained online submission endpoint is disabled for delivery.</p>
        <h2>Information you choose to send</h2><p>Your email address, message and any details you include are used to review and respond to your inquiry. Include only what is needed for that conversation. Do not send passwords, identity documents or confidential third-party information. An inquiry does not enroll you in a mailing list or give permission to publish your identity or work.</p>
        <h2>Providers and technical data</h2><p>The website is hosted on Vercel. The hosting platform may process request information, including IP addresses, request times and browser details, for delivery, security and troubleshooting. Direct correspondence is processed by your email provider and the receiving mailbox provider. This website does not use Resend to deliver inquiries or store them in an application database.</p>
        <h2>Cookies and analytics</h2><p>The application does not include advertising cookies, behavioral analytics scripts or an animation-related session-storage flag. Hosting and email providers have their own processing practices.</p>
        <h2>Retention and requests</h2><p>Correspondence may be retained while needed for the conversation, project records, security or legal obligations. Provider log and mailbox retention have not been independently verified; no fixed deletion period is promised here. You may ask about processing or request deletion, subject to applicable obligations and provider capabilities.</p>
        <h2>Contact</h2><p>Privacy questions and deletion requests can be sent to <a href={`mailto:${site.email}?subject=Privacy%20request`}>{site.email}</a>.</p>
      </section>
    </>
  );
}
