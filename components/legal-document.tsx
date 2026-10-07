import Link from "next/link";
import { PageHero } from "./page-hero";
import { Container } from "./container";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

export function LegalDocument({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        <p>{intro}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em]">Last updated: {updated}</p>
      </PageHero>
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[14rem_1fr] lg:gap-20">
        <nav aria-label="On this page" className="hidden lg:block">
          <ol className="sticky top-24 space-y-3 text-sm">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex gap-3 text-muted transition-colors hover:text-fg">
                  <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-2xl space-y-12">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`} className="text-xl font-semibold tracking-tight sm:text-2xl">
                <span className="mr-3 font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted [&_a]:text-fg [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                {s.body}
              </div>
            </section>
          ))}
          <p className="border-t border-line pt-8 text-sm text-muted">
            See also our <Link href="/contact" className="text-fg underline underline-offset-4">contact details</Link>.
          </p>
        </div>
      </Container>
    </>
  );
}
