import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { AddressLines } from "@/components/info-list";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { company } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact | Anupama Technologies",
  description: "Contact Anupama Technologies Private Limited, Gurgaon, Haryana, India.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch">
        <p>The best way to reach us is by email.</p>
      </PageHero>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          <div className="bg-base p-7 sm:p-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Company</h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight">{company.legalName}</p>
            <div className="mt-10 flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm text-muted">Email</h3>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 inline-block break-all text-xl font-medium underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {company.email}
                </a>
              </div>
            </div>
            <div className="mt-8 flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm text-muted">Location</h3>
                <p className="mt-1 text-xl font-medium">{company.location}</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-7 sm:p-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Registered Office</h2>
            <div className="mt-4 text-xl leading-relaxed">
              <AddressLines lines={company.address} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
