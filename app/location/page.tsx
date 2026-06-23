import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import { LOCATION_CONNECTIVITY } from "@/lib/content";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Location | Legacy by Gaurs at Plot B-10, Jaypee Greens, Greater Noida",
  description:
    "Legacy by Gaurs is located at Plot B-10, Jaypee Greens, Sector 19 & 25, Pari Chowk, Greater Noida — minutes from metro, expressway and the upcoming Noida International Airport.",
  path: "/location",
});

function LocationGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="mb-4 font-serif text-xl text-deep-black">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-charcoal/80">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function LocationPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Location", url: "/location" },
        ])}
      />

      <PageHero
        title="Where Growth Meets Grandeur"
        subtitle="Location & Connectivity"
        image={HERO_IMAGES.location}
        height="tall"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Location" }]} />
          <SectionHeader
            description="Legacy by Gaurs is nestled at Plot B-10, Jaypee Greens, Sector 19 & 25, Gautam Buddha Nagar — at the very heart of Greater Noida's most established luxury corridor. The location pairs the serenity of a 452-acre golf township with the energy of Pari Chowk, the recognised entry point of Greater Noida and one of the most connected nodes in the entire NCR."
          />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <LocationGroup title="Connectivity" items={LOCATION_CONNECTIVITY.connectivity} />
            <LocationGroup title="Education" items={LOCATION_CONNECTIVITY.education} />
            <LocationGroup title="Healthcare" items={LOCATION_CONNECTIVITY.healthcare} />
            <LocationGroup title="Workspaces Nearby" items={LOCATION_CONNECTIVITY.workspaces} />
            <LocationGroup title="Lifestyle & Shopping" items={LOCATION_CONNECTIVITY.lifestyle} />
          </div>

          <div className="mt-16 border-l-4 border-gold bg-ivory p-8">
            <h3 className="font-serif text-2xl text-deep-black">The Big Picture</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Greater Noida is gearing up for rapid business expansion. The arrival of the Noida International Airport, the Film City, the Jewar–YEIDA corridor and the ongoing Metro expansion are turning this region into one of India&apos;s fastest-appreciating real estate markets. An address inside Jaypee Greens — already a delivered, mature township with full social infrastructure — combines lifestyle and investment in a way few NCR projects can match.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory pt-0">
        <Container>
          <div className="aspect-[16/9] w-full overflow-hidden">
            <iframe
              src={SITE.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Legacy by Gaurs Location Map"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href={SITE.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-charcoal px-8 py-3 text-xs tracking-widest uppercase transition-colors hover:bg-charcoal hover:text-ivory"
            >
              Get Driving Directions →
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
