import { pageMetadata } from "@/lib/metadata";
import { ReadPage } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata = pageMetadata(
  "/privacy",
  "Privacy",
  "How this informational website and direct email contact handle information, including provider and retention limitations.",
);
export default function PrivacyPage() {
  return (
    <ReadPage
      title="A minimal-data website."
      description="This notice describes the current website and direct email contact. Updated 17 October 2026."
    >
      <h2>Contact by email</h2>
      <p>
        This website offers direct email links, not an online contact form.
        Following a link opens your email application. The website does not send
        the message for you. The retained online submission endpoint is disabled
        for delivery.
      </p>
      <h2>Information you choose to send</h2>
      <p>
        Your email address, message and details you include are used to review
        and respond to your inquiry. Include only what is needed for that
        conversation. Do not send passwords, identity documents or confidential
        third-party information. An inquiry does not enroll you in a mailing
        list or give permission to publish your identity or work.
      </p>
      <h2>Providers and technical data</h2>
      <p>
        The website is hosted on Vercel. Hosting platforms may process request
        information, including IP addresses, request times and browser details,
        for delivery, security and troubleshooting. Direct correspondence is
        processed by your email provider and the receiving mailbox provider.
        This website does not use Resend to deliver inquiries or store them in
        an application database.
      </p>
      <h2>Cookies, fonts and analytics</h2>
      <p>
        The application does not include advertising cookies, behavioral
        analytics scripts or animation-related session storage. Website fonts
        are hosted with the application; viewing them does not require a request
        to a third-party font service. Hosting and email providers have their
        own processing practices.
      </p>
      <h2>External links and research records</h2>
      <p>
        Project repositories, external demos and references have their own
        privacy practices. Review those before sharing data. Blank research
        templates do not submit data to this website. Do not place confidential
        interview or customer information in public records.
      </p>
      <h2>Retention and requests</h2>
      <p>
        Correspondence may be retained while needed for the conversation,
        project records, security or legal obligations. Provider log and mailbox
        retention have not been independently verified; no fixed deletion period
        is promised. You may ask about processing or request deletion, subject
        to applicable obligations and provider capabilities.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy questions and deletion requests can be sent to{" "}
        <a href={`mailto:${site.email}?subject=Privacy%20request`}>
          {site.email}
        </a>
        .
      </p>
    </ReadPage>
  );
}
