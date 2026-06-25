import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms", description: "Website terms for Omnia Sec AI Labs." };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL / TERMS" title="Clear boundaries for an emerging lab." copy="These website terms describe the current public information site. Last updated: 25 June 2026." />
      <section className="section legal-copy">
        <h2>Informational website</h2><p>This website presents the direction, experiments, prototypes, and active work of Omnia Sec AI Labs. It does not constitute a guarantee that a described product, feature, timeline, collaboration, or service will become available.</p>
        <h2>No professional advice</h2><p>Content is provided for general technical and informational purposes. It is not legal, financial, security, incident-response, or other professional advice for a specific situation.</p>
        <h2>Accuracy and maturity</h2><p>Reasonable care is taken to distinguish active development, implemented capability, prototype work, research concepts, and future vision. Information may change as projects evolve.</p>
        <h2>Intellectual property</h2><p>Unless otherwise stated, the Omnia name, identity, written content, interface design, and original graphics are owned by their respective creator. Third-party names and technologies remain the property of their owners.</p>
        <h2>Acceptable use</h2><p>Do not attempt to disrupt the website, abuse the contact form, bypass security controls, submit malicious payloads, impersonate others, or use the site for unlawful activity.</p>
        <h2>External links</h2><p>External websites are provided for convenience. Omnia is not responsible for their availability, security, privacy, or content.</p>
        <h2>Limitation</h2><p>The website is provided on an “as is” basis to the extent permitted by applicable law, without warranties of uninterrupted availability or fitness for a particular purpose.</p>
      </section>
    </>
  );
}
