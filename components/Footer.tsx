import Link from "next/link";
import { Logo } from "./Logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="or-footer">
      <div className="or-shell or-footer-main">
        <div>
          <Logo />
          <p>
            Technology research &amp; product development.
            <br />
            Founder-led. In formation.
          </p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <nav aria-label="Explore the lab">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Contact and policies">
          <Link href="/contact">Contact</Link>
          <a href={site.github}>GitHub</a>
          <Link href="/security">Security</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
      <div className="or-shell or-footer-bottom">
        <span>© {new Date().getFullYear()} Omniasec Labs · Syed Saad</span>
        <Link href="#top">Back to top</Link>
      </div>
    </footer>
  );
}
