"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("omnia-booted");
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const a = window.setTimeout(() => setPhase(1), 450);
    const b = window.setTimeout(() => setPhase(2), 1100);
    const c = window.setTimeout(() => setPhase(3), 1750);
    const d = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("omnia-booted", "1");
    }, 2450);

    return () => [a, b, c, d].forEach(window.clearTimeout);
  }, []);

  if (!visible) return null;

  const labels = [
    "Initializing secure intelligence",
    "Loading autonomous systems",
    "Verifying human control layer",
    "Omnia online",
  ];

  return (
    <div className={`boot-sequence phase-${phase}`} aria-live="polite">
      <div className="boot-grid" />
      <div className="boot-core">
        <div className="boot-rings" aria-hidden="true"><i /><i /><i /></div>
        <Image src="/logo-mark.svg" alt="" width={150} height={150} priority />
        <strong>OMNIA</strong>
        <p>{labels[phase]}<span className="typing-dots">...</span></p>
        <div className="boot-progress"><span /></div>
        <small>SEC AI LABS / BUILD 01</small>
      </div>
    </div>
  );
}
