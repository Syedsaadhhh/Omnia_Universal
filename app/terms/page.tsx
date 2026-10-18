import { pageMetadata } from "@/lib/metadata";
import { ReadPage } from "@/components/ui";
export const metadata = pageMetadata(
  "/terms",
  "Terms",
  "Boundaries for this informational website, historical project material, external links and separately agreed collaboration or services.",
);
export default function TermsPage() {
  return (
    <ReadPage
      title="Clear boundaries for an emerging lab."
      description="Terms for the public informational website. Updated 17 October 2026."
    >
      <h2>Informational website</h2>
      <p>
        This site presents the purpose, methods, historical work and intended
        direction of Omniasec Labs, a founder-led initiative by Syed Saad. It
        does not guarantee that a product, feature, collaboration, service or
        timeline will become available.
      </p>
      <h2>No professional advice</h2>
      <p>
        Content is for general technical and informational purposes. It is not
        legal, financial, security, incident-response or other professional
        advice for a specific situation.
      </p>
      <h2>Accuracy and maturity</h2>
      <p>
        Research questions, experiments, prototypes, historical work and
        products require different evidence. Historical records may not reflect
        current maintenance or capability. Source links are not independent
        verification of correctness, safety, ownership or commercial
        availability.
      </p>
      <h2>Collaboration and commercial work</h2>
      <p>
        An inquiry or invitation establishes no employment, compensation,
        equity, confidentiality, investment or delivery commitment. Any work
        requires separate agreement on scope, responsibilities, capacity,
        ownership and relevant terms.
      </p>
      <h2>Intellectual property and attribution</h2>
      <p>
        Original contributions and third-party material remain subject to their
        applicable ownership and licenses. Team and event work retains its
        attribution. Consult each repository's license and history before reuse;
        no blanket license to every linked project is granted here. No trademark
        registration or exclusive worldwide rights are asserted by this notice.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not disrupt the website, attempt unauthorized access, bypass security
        controls, impersonate others or misuse contact channels. Do not submit
        credentials or sensitive third-party information in an initial inquiry.
      </p>
      <h2>External links and availability</h2>
      <p>
        External sites are provided for context. Their availability, security,
        privacy and content are outside this website's control. The site is
        provided as available, without a guarantee of uninterrupted operation or
        fitness for a particular purpose, to the extent permitted by applicable
        law.
      </p>
    </ReadPage>
  );
}
