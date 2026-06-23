import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GatedActionButton } from "@/components/lead/GatedActionButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import { SPECIFICATIONS } from "@/lib/content";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Floor Plans | Legacy by Gaurs — 4 BHK Trecento Residences & Villas",
  description:
    "Floor plans for Legacy by Gaurs — Trecento Residences. Magnificent 4 BHK condominiums and lavish villas at Jaypee Greens, Greater Noida.",
  path: "/floor-plans",
});

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Floor Plans", url: "/floor-plans" },
        ])}
      />

      <PageHero
        title="Trecento Residences — Layouts That Live Larger"
        subtitle="Floor Plans"
        image={HERO_IMAGES.floorPlans}
        height="tall"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Floor Plans" }]} />
          <SectionHeader
            description="The homes at Legacy by Gaurs are designed for those who refuse to choose between view, space and finish. Each Trecento Residence opens to the golf course on one side and Pari Chowk on the other, ensuring an uninterrupted horizon in every direction. Choose from magnificent 4 BHK condominiums across four towers, or curated villas designed as private estates within the township."
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="border border-charcoal/10 bg-ivory p-8 md:p-10">
              <h3 className="font-serif text-2xl text-deep-black">4 BHK Condominiums</h3>
              <p className="mt-2 text-sm tracking-widest uppercase text-gold">Trecento Residences</p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal/80">
                <p><strong>Configuration:</strong> 4 Bedrooms + Master Suite with Walk-in Closet + Living Room + Family Lounge + Formal Dining + Modular Kitchen + Utility + 4 Toilets + Pooja Room + Multiple Balconies + Servant Quarter (select units)</p>
                <div>
                  <strong>Tower Layout:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• 4 Iconic Towers (Tower 1 to Tower 4)</li>
                    <li>• 36 Storeys per Tower</li>
                    <li>• Limited apartments per floor for privacy</li>
                    <li>• Golf course frontage and Pari Chowk skyline aspect</li>
                    <li>• Double-height tower lobbies on the ground floor</li>
                  </ul>
                </div>
                <p><strong>Saleable Area Range:</strong> Available across multiple configurations — speak to a project advisor for the exact unit sheet matching your requirement.</p>
              </div>
            </div>

            <div className="border border-charcoal/10 bg-ivory p-8 md:p-10">
              <h3 className="font-serif text-2xl text-deep-black">Lavish Villas</h3>
              <p className="mt-2 text-sm tracking-widest uppercase text-gold">Private Estates</p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal/80">
                <p><strong>Configuration:</strong> Independent villa plots within the gated Legacy enclave, designed with classical French detailing, private lawns, multiple-car parking, dedicated entrance courts and pool-ready terraces. Floor plans, plot sizes and orientations are offered on a select-availability basis.</p>
                <p><strong>Best for:</strong> Buyers seeking a standalone, low-density home with the security and amenities of an integrated condominium community.</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-8 font-serif text-2xl text-deep-black">Specifications — Every Trecento Residence</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {SPECIFICATIONS.map((spec) => (
                <li key={spec} className="flex items-start gap-3 border-l-2 border-gold pl-4 text-sm text-charcoal/80">
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <GatedActionButton action="download-floor-plans" sourceCTA="Request Detailed Floor Plan PDF" variant="gold" size="lg">
              Request Detailed Floor Plan PDF →
            </GatedActionButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
