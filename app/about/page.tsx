import { Container } from "@/components/container";
import { AddressLines, InfoList } from "@/components/info-list";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { pageMetadata } from "@/lib/metadata";
import { carnival, company } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About | Anupama Technologies",
  description:
    "Anupama Technologies Private Limited is a technology company focused on building digital products for modern users.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="About Anupama Technologies">
        <p>
          Anupama Technologies Private Limited is a technology company focused on building digital
          products for modern users.
        </p>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="01" eyebrow="What we do" title="We build our own products." />
          </div>
          <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted lg:col-span-7 lg:pt-14">
            <p>
              We develop and operate technology products. Our current flagship product is{" "}
              {carnival.url ? (
                <a
                  href={carnival.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg underline underline-offset-4 transition-colors hover:text-accent"
                >
                  Carnival<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                "Carnival"
              )}
              , a social dating application.
            </p>
            <p>
              We care about products built around real human experiences, with thoughtful engineering
              and design behind them.
            </p>
            <div className="pt-3">
              <Button href="/products" variant="secondary">
                See our products
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-raised py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading index="02" eyebrow="Company information" title="Company details" />
          </div>
          <div className="lg:col-span-8 lg:pt-14">
            <InfoList
              items={[
                { label: "Legal Name", value: company.legalName },
                { label: "CIN", value: <span className="font-mono text-[1rem] text-fg">{company.cin}</span> },
                { label: "Incorporated", value: company.incorporated },
                { label: "Registered Office", value: <AddressLines lines={company.address} /> },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
