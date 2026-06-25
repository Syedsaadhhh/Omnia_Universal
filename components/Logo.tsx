import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Omnia Sec AI Labs home">
      <span className="brand-mark">
        <Image src="/logo-mark.svg" alt="" width={40} height={40} priority />
      </span>
      {!compact && (
        <span className="brand-type">
          <strong>OMNIA</strong>
          <small>SEC AI LABS</small>
        </span>
      )}
    </Link>
  );
}
