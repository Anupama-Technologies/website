import { Box, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { HeroVisual } from "@/components/hero-visual";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { carnival, company } from "@/lib/site";

const pillars = [
  {
    icon: Box,
    title: "Product",
    text: "Consumer products designed around meaningful user experiences.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "Modern software built with thoughtful engineering and product design.",
  },
  {
    icon: Sparkles,
    title: "Experiences",
    text: "Digital experiences that are simple, engaging and intuitive.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -left-40 top-0 size-[40rem] rounded-full bg-accent/10 blur-3xl" />
        <Container className="relative grid items-center gap-14 pb-20 pt-32 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28">
          <div>
            <p className="animate-rise mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Anupama Technologies · Gurgaon, India
            </p>
            <h1 className="animate-rise text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-7xl">
              Building technology products <span className="accent-text">people love to use.</span>
            </h1>
            <p className="animate-rise mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
              {company.description}
            </p>
            <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              {carnival.url && <Button href={carnival.url}>Explore Carnival</Button>}
              <Button href="/about" variant={carnival.url ? "secondary" : "primary"}>
                About us
              </Button>
            </div>
          </div>
          <div className="animate-rise [animation-delay:200ms]">
            <HeroVisual />
          </div>
        </Container>
      </section>

      <section id="carnival" className="border-t border-line bg-raised py-20 sm:py-28">
        <Container>
          <div className="reveal mb-12 sm:mb-16">
            <SectionHeading index="01" eyebrow="Current flagship" title="Meet Carnival.">
              Carnival is a social dating experience designed to make meeting people feel spontaneous,
              engaging and fun.
            </SectionHeading>
          </div>
          <div className="reveal">
            <ProductCard
              tagline="Social dating, reimagined."
              description="Carnival is built and operated by Anupama Technologies."
              cta={carnival.host ? `Visit ${carnival.host}` : undefined}
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <SectionHeading index="02" eyebrow="Philosophy" title="Technology should feel human." />
          </div>
          <p className="reveal text-pretty text-lg leading-relaxed text-muted lg:col-span-5 lg:pt-14">
            We focus on creating products around real human experiences rather than technology for
            technology&rsquo;s sake. Good software should make time with people feel easier, not more
            complicated.
          </p>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="reveal">
            <SectionHeading index="03" eyebrow="What we build" title="Products, technology and experiences." />
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:mt-16 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal group bg-base p-7 transition-colors duration-300 hover:bg-card sm:p-9">
                <Icon aria-hidden="true" className="size-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-10 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-line bg-raised py-24 sm:py-32">
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-50" />
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/15 blur-3xl" />
        <Container className="reveal relative text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Building what&rsquo;s next.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-muted">
            Explore what we&rsquo;re building at Anupama Technologies.
          </p>
          {carnival.url && (
            <div className="mt-10 flex justify-center">
              <Button href={carnival.url}>Explore Carnival</Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
