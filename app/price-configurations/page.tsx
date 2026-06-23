import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GatedActionButton } from "@/components/lead/GatedActionButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import {
  CONFIGURATION_TABLE,
  INCLUDED_FEATURES,
  PAYMENT_PLANS,
} from "@/lib/content";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Price & Configurations | Legacy by Gaurs at Jaypee Greens",
  description:
    "Get the latest price list for Legacy by Gaurs — Trecento Residences. 4 BHK condominiums and lavish villas at Pari Chowk, Greater Noida. RERA UPRERAPRJ688396.",
  path: "/price-configurations",
});

export default function PricePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Price & Configurations", url: "/price-configurations" },
        ])}
      />

      <PageHero
        title="Configurations & Pricing"
        subtitle="Price & Configurations"
        image={HERO_IMAGES.price}
        height="tall"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Price & Configurations" }]} />
          <SectionHeader
            description="Legacy by Gaurs is offered in two distinct formats — magnificent 4 BHK condominiums within four 36-storey towers, and lavish villas within a gated enclave at Plot B-10, Jaypee Greens. Pricing is shared on a one-to-one basis to ensure you receive the most current floor-specific offer."
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-gold/30">
                  <th className="py-4 pr-4 text-xs tracking-widest uppercase text-gold-dark">Type</th>
                  <th className="py-4 pr-4 text-xs tracking-widest uppercase text-gold-dark">Format</th>
                  <th className="py-4 pr-4 text-xs tracking-widest uppercase text-gold-dark">Floors</th>
                  <th className="py-4 text-xs tracking-widest uppercase text-gold-dark">Pricing</th>
                </tr>
              </thead>
              <tbody>
                {CONFIGURATION_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-charcoal/10">
                    <td className="py-4 pr-4 text-sm">{row.type}</td>
                    <td className="py-4 pr-4 text-sm text-charcoal/70">{row.format}</td>
                    <td className="py-4 pr-4 text-sm text-charcoal/70">{row.floors}</td>
                    <td className="py-4 text-sm font-medium text-gold-dark">{row.pricing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl text-deep-black">What&apos;s Included</h3>
              <ul className="mt-6 space-y-3">
                {INCLUDED_FEATURES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="text-gold">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-deep-black">Payment Plan Options</h3>
              <ul className="mt-6 space-y-3">
                {PAYMENT_PLANS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="text-gold">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border border-gold/20 bg-ivory p-8">
            <h3 className="font-serif text-xl text-deep-black">Booking Details</h3>
            <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
              <li>• Booking amount, allotment letter and unit blocking handled in person at the sales lounge</li>
              <li>• All payments made to: {SITE.collectionAccount.name}</li>
              <li>• Project Collection Account No.: {SITE.collectionAccount.number}</li>
              <li>• IFSC: {SITE.collectionAccount.ifsc}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <GatedActionButton action="get-price-sheet" sourceCTA="Get the Latest Price Sheet" variant="gold">
                Get the Latest Price Sheet →
              </GatedActionButton>
              <GatedActionButton action="download-payment-plan" sourceCTA="Download Payment Plan" variant="secondary">
                Download Payment Plan
              </GatedActionButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
