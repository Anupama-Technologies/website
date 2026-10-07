import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-[transform,background-color,border-color,box-shadow] duration-200 active:translate-y-px";

const variants = {
  primary:
    "bg-linear-to-r from-accent to-accent-2 text-[#1a0b2e] hover:shadow-[0_8px_30px_-8px_rgb(255_107_157/0.55)] hover:-translate-y-0.5",
  secondary:
    "border border-line-strong text-fg hover:border-fg/40 hover:bg-fg/5",
};

const sizes = { md: "h-12 px-6 text-[15px]", sm: "h-9 px-4 text-sm" };

export function Button({ href, children, variant = "primary", size = "md", className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
