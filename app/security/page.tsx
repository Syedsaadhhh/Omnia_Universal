import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ReadPage } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata = pageMetadata(
  "/security",
  "Security",
  "Security boundaries, responsible disclosure and evidence for the Omniasec Labs website. No complete-security or compliance guarantee.",
);
export default function SecurityPage() {
  return (
    <ReadPage
      title="Security needs evidence and boundaries."
      description="A practical reporting channel and an honest account of limits. This page is not a security certification or a guarantee that every issue has been found."
    >
      <h2>Report a security issue</h2>
      <p>
        Email{" "}
        <a href={`mailto:${site.email}?subject=Security%20disclosure`}>
          {site.email}
        </a>{" "}
        with the affected component, a clear description, minimal reproduction
        steps and potential impact. Keep sensitive details out of a public
        issue. No response-time or bounty commitment is established here.
      </p>
      <p>
        Do not access data that is not yours, disrupt services or test beyond
        your authorization. For disputed scope, ask before testing.
      </p>
      <h2>Website boundaries</h2>
      <p>
        The website is informational. Contact uses direct email links; the
        retained submission API is closed for delivery. Do not assume a form,
        account system or data store exists because it appears in a historical
        project.
      </p>
      <p>
        Dependency checks, input handling, metadata, keyboard operation, builds
        and containers have documented regression evidence. A passing check
        describes its tested scope, not a vulnerability-free system.
      </p>
      <h2>Research and software principles</h2>
      <p>
        Use the least authority required for the task. Make material actions
        inspectable, obtain approval where needed, protect sensitive data, and
        preserve a way to stop or recover. Experimental capability must not be
        marketed as a verified production control.
      </p>
      <h2>Source changes and deployed behavior</h2>
      <p>
        Work under review is not automatically deployed. Consult the linked
        change record and its release status before relying on a source fix.
        Provider configuration, hosting availability and operational practices
        need their own review.
      </p>
      <p>
        See the{" "}
        <Link href="/build-log/security-foundation">
          dated engineering checkpoint
        </Link>{" "}
        and{" "}
        <a href="https://github.com/Syedsaadhhh/Omnia_Universal/pull/6">
          security foundation PR
        </a>
        . No SOC 2 certification, full hardening or complete security is
        claimed.
      </p>
    </ReadPage>
  );
}
