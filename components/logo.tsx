import Link from "next/link";

export function LogoMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff6b9d" />
          <stop offset="1" stopColor="#a77bff" />
        </linearGradient>
      </defs>
      <path
        d="M14 50 32 12l18 38"
        fill="none"
        stroke="url(#logo-g)"
        strokeWidth="6"
        strokeLinecap="square"
      />
      <rect x="25" y="38" width="14" height="6" fill="#f7f4ff" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.18em] text-fg"
    >
      <LogoMark />
      <span>ANUPAMA TECHNOLOGIES</span>
    </Link>
  );
}
