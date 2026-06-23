import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery | Legacy by Gaurs — Tower Views, Interiors & Club Imperial",
  description:
    "Browse the gallery of Legacy by Gaurs — tower elevations, French-inspired interiors, Club Imperial clubhouse, Helix Sky Bridge and Jaypee Greens township views.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ])}
      />

      <PageHero
        title="A Glimpse of a Legacy in the Making"
        subtitle="Gallery"
        image={HERO_IMAGES.gallery}
        height="medium"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <SectionHeader
            description="From the grand drop-off zone inspired by the French Fleur to the sweeping pool deck of Club Imperial and the herbal gardens of the Helix Sky Bridge — here is a closer look at what life at Legacy by Gaurs looks like."
          />
          <GalleryGrid />
        </Container>
      </Section>

      <CTABand
        title="Want to See the Property in Person?"
        primaryCTA={{ label: "Book a Site Visit", action: "schedule-site-visit" }}
      />
    </>
  );
}
