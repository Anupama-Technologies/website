import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products | Anupama Technologies",
  description: "Carnival, the social dating application built by Anupama Technologies.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Our products">
        <p>What we are building at Anupama Technologies today.</p>
      </PageHero>
      <section className="py-16 sm:py-24">
        <Container>
          <ProductCard
            as="h2"
            tagline="Social dating, reimagined."
            description="Carnival is a social dating application designed around spontaneous discovery and engaging interactions."
            cta="Visit Carnival"
          />
        </Container>
      </section>
    </>
  );
}
