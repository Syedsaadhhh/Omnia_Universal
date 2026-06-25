import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Security", description: "Security principles and responsible disclosure guidance for Omnia Sec AI Labs." };

export default function SecurityPage() {
  return (
    <>
      <PageHero eyebrow="SECURITY POSTURE" title={<>Autonomy earns authority<br />through <span>control.</span></>} copy="Security is treated as architecture: least privilege, visible execution, bounded tools, verification gates, recovery paths, and honest capability labels." />
      <section className="section security-grid">
        {[
          ["01", "Least authority", "Agents should receive the narrowest tools and permissions required for the current operation."],
          ["02", "Observable execution", "Material actions should produce traces that a human can inspect, understand, and challenge."],
          ["03", "Verification gates", "High-impact operations should pause for checks, policy evaluation, or explicit approval."],
          ["04", "Recoverable state", "Systems should know how to stop, retry safely, roll back when possible, and return control."],
          ["05", "Local-first options", "Sensitive tasks should be able to minimize data movement and unnecessary third-party dependence."],
          ["06", "Truthful maturity", "Experimental capabilities are not described as hardened security controls or production deployments."],
        ].map(([id, title, copy]) => <article key={id}><span>{id}</span><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
      <section className="section disclosure-panel"><div><span>RESPONSIBLE DISCLOSURE</span><h2>Found a security issue?</h2><p>Email <a href={`mailto:${site.email}?subject=Security%20disclosure`}>{site.email}</a> with a clear description, reproduction steps, affected component, and potential impact. Do not access data that is not yours, disrupt services, or publish an unresolved issue.</p></div></section>
    </>
  );
}
