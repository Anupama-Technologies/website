import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 size-[34rem] rounded-full bg-accent-2/10 blur-3xl"
      />
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="animate-rise">
          <SectionHeading as="h1" eyebrow={eyebrow} title={title}>
            {children}
          </SectionHeading>
        </div>
      </Container>
    </section>
  );
}
