"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Arrow } from "./ui";
import { navItems } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const activePath = pathname === "/gns3-agent" ? "/projects" : pathname;
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const viewport = window.matchMedia("(max-width: 1100px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setOpen(false);
    };
    viewport.addEventListener("change", onChange);
    return () => viewport.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="or-header" id="top">
      <div className="or-shell or-header-row">
        <Logo />
        <nav className="or-desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={activePath.startsWith(item.href) ? "active" : ""}
              aria-current={
                activePath.startsWith(item.href) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="or-header-actions">
          <button
            ref={menuButton}
            className="or-menu-button"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className="or-mobile-menu or-shell"
        hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                activePath.startsWith(item.href) ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
              <Arrow />
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact Omniasec Labs
            <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}
