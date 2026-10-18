import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="or-brand" href="/" aria-label="Omniasec Labs home">
      <svg
        width="36"
        height="36"
        viewBox="0 0 56 56"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7 7h25v9H16v25H7Z M25 25h25v25H25v-9h16v-7H25Z" />
      </svg>
      {!compact && <span>Omniasec Labs</span>}
    </Link>
  );
}
