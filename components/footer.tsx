import Link from "next/link";
import { Container } from "./container";
import { LogoMark } from "./logo";
import { carnival, company } from "@/lib/site";

const linkCls = "text-sm text-muted transition-colors hover:text-fg";

export function Footer() {
  return (
    <footer className="border-t border-line bg-raised">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.18em]">
              <LogoMark />
              ANUPAMA TECHNOLOGIES
            </p>
            <p className="mt-4 max-w-xs text-pretty text-muted">{company.tagline}</p>
            <address className="mt-6 space-y-1 text-sm not-italic text-muted">
              <p>
                <a href={`mailto:${company.email}`} className="text-fg transition-colors hover:text-accent">
                  {company.email}
                </a>
              </p>
              <p>{company.location}</p>
            </address>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:pl-8">
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Company</h2>
              <ul className="space-y-3">
                <li><Link href="/about" className={linkCls}>About</Link></li>
                <li><Link href="/contact" className={linkCls}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Products</h2>
              <ul className="space-y-3">
                <li>
                  {carnival.url ? (
                    <a href={carnival.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                      Carnival<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className={linkCls}>Carnival</span>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Legal</h2>
              <ul className="space-y-3">
                <li><Link href="/privacy" className={linkCls}>Privacy Policy</Link></li>
                <li><Link href="/terms" className={linkCls}>Terms of Service</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-sm text-muted">
          © 2026 {company.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
