import Link from "next/link";
import { Logo } from "./Logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-shell">
        <div className="footer-lead">
          <Logo />
          <p>
            Building secure autonomous systems for infrastructure, cybersecurity,
            and real-world operations.
          </p>
          <div className="status-line">
            <i /> Independent lab · {site.location}
          </div>
        </div>
        <div className="footer-columns">
          <div>
            <b>Explore</b>
            {navItems.slice(0, 4).map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
          <div>
            <b>Company</b>
            <Link href="/about">Founder</Link>
            <Link href="/security">Security</Link>
            <Link href="/contact">Contact</Link>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div>
            <b>Legal</b>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Omnia Sec AI Labs</span>
        <span>Designed and built from Karachi.</span>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
