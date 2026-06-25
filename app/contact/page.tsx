import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Omnia Sec AI Labs for GNS3 Agent early access, research, partnerships, and technical discussions." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="SECURE CONTACT CHANNEL" title={<>Bring context.<br /><span>Skip the pitch theater.</span></>} copy="Share the real problem, current constraints, and what a useful outcome would look like. Serious messages receive a direct founder response." />
      <section className="section contact-page-layout">
        <div className="contact-sidebar">
          <div><span>GOOD REASONS TO WRITE</span><h2>Early access, research, partnerships, technical collaboration, or a difficult operational problem.</h2></div>
          <div className="contact-direct"><b>Direct email</b><a href={`mailto:${site.email}`}>{site.email}</a><small>Use email directly if the form is unavailable.</small></div>
          <div className="contact-expectations"><b>What to expect</b><p>Personal response, no automated sales funnel, no mailing list enrollment, and no promise of immediate product availability.</p></div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
