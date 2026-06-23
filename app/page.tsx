import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTABand } from "@/components/sections/CTABand";
import { GatedActionButton } from "@/components/lead/GatedActionButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import {
  PROJECT_SNAPSHOT,
  WHY_LEGACY,
  HOME_FAQS,
} from "@/lib/content";
import {
  buildPageMetadata,
  getFaqSchema,
  getAggregateRatingSchema,
} from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Legacy by Gaurs | Ultra-Luxury 4 BHK Condominiums & Villas at Jaypee Greens",
  description:
    "Legacy by Gaurs — Trecento Residences. Four iconic 36-storey towers of ultra-luxury 4 BHK condominiums and lavish villas at Jaypee Greens, Greater Noida. RERA approved.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[getFaqSchema([...HOME_FAQS]), getAggregateRatingSchema()]} />

      <PageHero
        title="A Legacy of Timeless Elegance, Prestige & Heritage"
        subtitle="Trecento Residences"
        image={HERO_IMAGES.home}
        height="full"
      >
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg">
          When a creation shapes not only the present but also the unseen future, it becomes a Legacy. Presenting Trecento Residences at Legacy by Gaurs — magnificent 4 BHK condominiums and lavish villas, set amidst the 452-acre Jaypee Greens golf township at Pari Chowk, Greater Noida.
        </p>
        <div className="flex flex-wrap gap-4">
          <GatedActionButton sourceCTA="Enquire Now" variant="gold" ungated>
            Enquire Now
          </GatedActionButton>
          <GatedActionButton action="download-brochure" sourceCTA="Download Brochure" variant="secondary" className="border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal">
            Download Brochure
          </GatedActionButton>
        </div>
      </PageHero>

      <TrustStrip />

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECT_SNAPSHOT.map((item) => (
              <div key={item.label} className="border border-charcoal/10 bg-ivory p-6">
                <p className="text-xs tracking-widest uppercase text-gold-dark">{item.label}</p>
                <p className="mt-2 font-serif text-lg text-deep-black">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImageReveal src={HERO_IMAGES.about} alt="Legacy by Gaurs" aspect="portrait" />
            <div>
              <SectionHeader
                eyebrow="The Vision"
                title="Designed Across Generations"
                align="left"
              />
              <p className="text-base leading-relaxed text-charcoal/80 md:text-lg">
                Legacy by Gaurs is not designed for a generation — it is designed across generations. Inspired by the French Fleur-de-lis, an emblem of nobility, refinement and timeless heritage, Trecento Residences rises in four sky-high towers above one of India&apos;s most iconic golf townships. Each home is a private sanctuary of marble, light and uninterrupted green vistas — golf course on one side, the cosmopolitan Pari Chowk skyline on the other. This is a residence that transcends luxury to create a true legacy of refined living.
              </p>
              <Link href="/about" className="mt-8 inline-block text-xs tracking-widest uppercase text-gold hover:text-gold-dark">
                Discover The Project →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Why Legacy"
            title="Six Pillars of Extraordinary Living"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {WHY_LEGACY.map((item, i) => (
              <div key={item.title} className="group border-t border-gold/30 pt-8">
                <span className="font-serif text-4xl text-gold/30">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-xl text-deep-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand
        title="A Residence Designed to Be Carried Forward"
        description="Speak to a project advisor for floor availability, villa configurations and the most current pricing."
        primaryCTA={{ label: "Enquire Now", ungated: true }}
        secondaryCTA={{ label: "Download Brochure", action: "download-brochure" }}
      />
    </>
  );
}
