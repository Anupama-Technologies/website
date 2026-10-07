import { Button } from "./button";
import { PhoneMockup } from "./phone-mockup";
import { carnival, carnivalScreenshot } from "@/lib/site";

type Props = {
  as?: "h2" | "h3";
  tagline: string;
  description: string;
  cta: string | undefined;
  screenshot?: { src: string; alt: string };
};

/** Flagship product presentation. Pass `screenshot` to swap the CSS mockup for a real image. */
export function ProductCard({ as: Heading = "h3", tagline, description, cta, screenshot }: Props) {
  return (
    <article className="relative grid overflow-hidden rounded-lg border border-line-strong bg-card md:grid-cols-2">
      <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative flex flex-col justify-center p-7 sm:p-10 md:p-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Flagship product</p>
        <Heading className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">{carnival.name}</Heading>
        <p className="mt-1 text-sm text-muted">by Anupama Technologies</p>
        <p className="accent-text mt-8 text-xl font-medium">{tagline}</p>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted">{description}</p>
        {carnival.url && cta && (
          <div className="mt-8">
            <Button href={carnival.url}>{cta}</Button>
          </div>
        )}
      </div>
      <div className="relative flex items-center justify-center border-t border-line bg-linear-to-br from-card-2 to-card px-6 py-12 md:border-l md:border-t-0">
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-70" />
        <PhoneMockup screenshot={screenshot ?? carnivalScreenshot} className="relative" />
      </div>
    </article>
  );
}
