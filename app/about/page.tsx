import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "About Legacy by Gaurs | Trecento Residences at Jaypee Greens",
  description:
    "Discover Legacy by Gaurs — Trecento Residences. Four 36-storey towers of ultra-luxury 4 BHK condominiums and villas inspired by the French Fleur-de-lis at Jaypee Greens.",
  path: "/about",
});

const SECTIONS = [
  {
    eyebrow: "The Vision",
    title: "A Different League. A True Legacy.",
    body: "Legacy by Gaurs is the answer to a question very few projects ever ask — can a residence outlive the generation that lived in it? Inspired by the world's most enduring icons of craft — Rolls-Royce, Da Vinci, Chanel, the Wright Brothers — Legacy is built on the idea that some experiences are meant not only for you to cherish, but for the generations following your footsteps to celebrate.",
    image: HERO_IMAGES.about,
  },
  {
    eyebrow: "Inspired by the Fleur",
    title: "French Heritage, Timeless Design",
    body: "The Fleur-de-lis, rooted in French heritage, has long symbolised nobility, refinement and excellence. At Legacy by Gaurs, the Fleur is more than an emblem — it is a design philosophy. From the iconic grand entrance to the classical pillars, arches and engineering detail that runs through every public space, the project honours the grandeur of French artistry while blending it with contemporary luxury.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    eyebrow: "Sky-High Majesty",
    title: "Four Iconic Towers",
    body: "Legacy is composed of four sky-piercing towers, each rising to 36 storeys above the Greater Noida skyline. The master plan is laid out for the discerning elite — generous tower spacing, double-height drop-off lobbies and apartments arranged so every window frames an exhilarating green oasis. Residences offer stunning views of the pristine 18-hole golf course on one side and the expansive Pari Chowk on the other.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    eyebrow: "Trecento Residences",
    title: "A Residence for Generations",
    body: "Trecento Residences — the homes at Legacy — are not simply 4 BHK apartments and villas. They are sumptuous living spaces designed with classical proportions, sweeping balconies and finishes that echo the timeless beauty of Roman pillars and Renaissance vaults. Each detail is meticulously crafted to provide an extraordinary living experience that will be cherished across generations.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  },
  {
    eyebrow: "Jaypee Greens",
    title: "Inside the 452-Acre Township",
    body: "Legacy by Gaurs sits at Plot B-10 within Jaypee Greens — a 182-hectare (approx. 452-acre) golf-centric township that is already one of India's most established luxury addresses. Residents enjoy direct access to the 18-hole Greg Norman championship golf course (one of the longest in India at 7,347 yards), the 9-hole Graham Cooke chip-and-putt course, the 60-acre Nature Reserve Park, Atlantis the Club, Boomerang Club, the Six Senses Golf & Spa Resort, the Town Centre and a full ecosystem of schools, healthcare and dining.",
    image: "https://images.unsplash.com/photo-1587174486073-9210e9c3d10f?w=1200&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About The Project", url: "/about" },
        ])}
      />

      <PageHero
        title="A Different League. A True Legacy."
        subtitle="About The Project"
        image={HERO_IMAGES.about}
        height="tall"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "About The Project" }]} />

          <div className="space-y-24">
            {SECTIONS.map((section, i) => (
              <div
                key={section.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <SectionHeader
                    eyebrow={section.eyebrow}
                    title={section.title}
                    align="left"
                  />
                  <p className="text-base leading-relaxed text-charcoal/80">{section.body}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <ImageReveal src={section.image} alt={section.title} aspect="landscape" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border border-gold/20 bg-ivory p-8 md:p-12">
            <h3 className="font-serif text-2xl text-deep-black">RERA & Compliance</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Legacy by Gaurs is a RERA-approved development under registration number{" "}
              <strong>{SITE.rera}</strong>. Full project details are available at{" "}
              <a href={SITE.reraUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                up-rera.in/projects
              </a>.
            </p>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Explore Your Future Residence"
        primaryCTA={{ label: "Explore Floor Plans →", href: "/floor-plans" }}
        secondaryCTA={{ label: "Schedule a Visit", action: "schedule-site-visit" }}
      />
    </>
  );
}
