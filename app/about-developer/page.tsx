import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import {
  DEVELOPER_MILESTONES,
  DEVELOPER_AWARDS,
  SIGNATURE_PROJECTS,
} from "@/lib/content";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "About Gaurs Group | 27+ Years of Trust & 65,000+ Delivered Homes",
  description:
    "Gaurs Group is one of North India's most trusted real estate developers — 65+ delivered projects, 1 lakh+ happy families, 6 million+ sq.m. developed since 1995.",
  path: "/about-developer",
});

export default function AboutDeveloperPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About Developer", url: "/about-developer" },
        ])}
      />

      <PageHero
        title="Every Brick a Stepping Stone to Crafting More Luxurious Lives"
        subtitle="About Gaurs Group"
        image={HERO_IMAGES.developer}
        height="tall"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "About Developer" }]} />

          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="The Gaurs Story"
              title="An Icon of Excellence Since 1995"
              align="left"
            />
            <div className="space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>
                Since its inception in 1995, the Gaurs Group has been revered as an icon of excellence in the world of Indian real estate. From affordable family homes to ultra-luxury residences, from commercial towers to integrated townships, Gaurs has consistently delivered on its commitments — earning the trust of over one lakh happy families across the National Capital Region.
              </p>
              <p>
                The unwavering focus on customer trust, perfect locations and excellence in execution has powered Gaurs through 27+ years of growth — and the same conviction now shapes Legacy by Gaurs, designed to be the group&apos;s most defining luxury statement.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="mb-8 font-serif text-2xl text-deep-black">Milestones We Are Proud Of</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DEVELOPER_MILESTONES.map((item) => (
                <div key={item} className="border-l-2 border-gold pl-4 text-sm text-charcoal/80">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="mb-8 font-serif text-2xl text-deep-black">Awards & Recognition</h3>
            <ul className="space-y-3">
              {DEVELOPER_AWARDS.map((award) => (
                <li key={award} className="border-b border-charcoal/10 pb-3 text-sm text-charcoal/80">
                  {award}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl text-deep-black">A Diversified Group</h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                Beyond real estate, the Gaurs Group operates across Retail, Education, Hotels, NBFC, Contracting, Sports and Energy — making it one of the most diversified business houses in the NCR.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-deep-black">Other Signature Luxury Projects</h3>
              <ul className="mt-4 space-y-2">
                {SIGNATURE_PROJECTS.map((project) => (
                  <li key={project} className="text-sm text-charcoal/80">• {project}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={SITE.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-widest uppercase text-gold hover:text-gold-dark"
            >
              Explore More Gaurs Projects →
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
