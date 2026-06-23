import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import {
  CLUB_IMPERIAL_AMENITIES,
  HELIX_AMENITIES,
  TOWNSHIP_AMENITIES,
} from "@/lib/content";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Amenities at Legacy by Gaurs | Club Imperial & Helix Sky Bridge",
  description:
    "Discover the amenities at Legacy by Gaurs — Club Imperial with 18+ indoor luxuries, Helix Sky Bridge with sky-high recreation, plus access to all of Jaypee Greens township.",
  path: "/amenities",
});

function AmenityList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AmenitiesPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Amenities", url: "/amenities" },
        ])}
      />

      <PageHero
        title="A Sanctuary for Body, Mind & Soul"
        subtitle="Amenities"
        image={HERO_IMAGES.amenities}
        height="tall"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Amenities" }]} />
          <SectionHeader
            title="Two Signature Worlds of Indulgence"
            description="Legacy by Gaurs is built around two signature amenity worlds — Club Imperial, the House of Royals at ground level, and Helix, the sky-high luxuries that drift above the everyday. Beyond these, residents enjoy the unmatched township amenities of the 452-acre Jaypee Greens — making this one of the most amenity-rich addresses in the National Capital Region."
          />
        </Container>
      </Section>

      <Section className="bg-ivory pt-0">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <ImageReveal
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80"
                alt="Club Imperial"
                aspect="landscape"
              />
            </div>
            <div>
              <p className="mb-2 text-xs tracking-widest uppercase text-gold">Zone 1</p>
              <h2 className="font-serif text-3xl text-deep-black">Club Imperial</h2>
              <p className="mt-2 text-sm italic text-charcoal/60">The House of Royals</p>
              <p className="mt-4 mb-8 text-sm text-charcoal/70">
                Your gateway to ultimate indulgence. An ultra-modern clubhouse designed to offer state-of-the-art facilities and a sophisticated ambiance where elegance meets comfort.
              </p>
              <AmenityList items={CLUB_IMPERIAL_AMENITIES} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="lg:order-2">
              <ImageReveal
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80"
                alt="Helix Sky Bridge"
                aspect="landscape"
              />
            </div>
            <div className="lg:order-1">
              <p className="mb-2 text-xs tracking-widest uppercase text-gold">Zone 2</p>
              <h2 className="font-serif text-3xl text-deep-black">Helix Sky Bridge</h2>
              <p className="mt-2 text-sm italic text-charcoal/60">Your everyday escape, just a walk away</p>
              <p className="mt-4 mb-8 text-sm text-charcoal/70">
                A serene zone above the ordinary — a sky bridge that blends greenery with recreation, designed to elevate everyday living.
              </p>
              <AmenityList items={HELIX_AMENITIES} />
            </div>
          </div>
        </Container>
      </Section>

      <Section dark className="pt-0">
        <Container>
          <SectionHeader
            eyebrow="Zone 3"
            title="Jaypee Greens Township"
            description="The legacy of an already-delivered, world-class township."
            light
          />
          <AmenityList items={TOWNSHIP_AMENITIES} />
          <p className="mt-12 text-center font-serif text-xl text-beige/90">
            From Roman-inspired club lobbies to herbal sky gardens, Legacy by Gaurs is engineered so that every hour of the day belongs to you.
          </p>
        </Container>
      </Section>
    </>
  );
}
