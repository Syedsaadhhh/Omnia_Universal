import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Omnia Sec AI Labs for GNS3 Agent early access, research, partnerships, and technical discussions." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT OMNIA" title={<>Bring context.<br /><span>Skip the pitch theater.</span></>} copy="Share the real problem, current constraints, and what a useful outcome would look like. Serious messages receive a direct founder response." />
      <section className="section contact-page-layout">
        <div className="contact-sidebar">
          <div><span>GOOD REASONS TO WRITE</span><h2>Early access, research, partnerships, technical collaboration, or a difficult operational problem.</h2></div>
          <div className="contact-direct"><b>Direct email</b><a href={`mailto:${site.email}`}>{site.email}</a><small>Use your preferred email app to get in touch.</small></div>
          <div className="contact-expectations"><b>What to expect</b><p>Personal response, no automated sales funnel, no mailing list enrollment, and no promise of immediate product availability.</p></div>
        </div>
        <div className="contact-form">
          <span className="section-kicker">DIRECT CONTACT</span>
          <h2>Tell us what you are working through.</h2>
          <p>Include the problem, the constraints, and what a useful first conversation would cover.</p>
          <a className="button button-primary" href={`mailto:${site.email}?subject=Omnia%20inquiry`}>Email {site.email} <span aria-hidden="true">↗</span></a>
          <small>This opens your email app. Review the message there before sending.</small>
        </div>
      </section>
    </>
  );
}
