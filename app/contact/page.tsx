import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/lead/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_IMAGES } from "@/lib/content/images";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us | Enquire About Legacy by Gaurs at Jaypee Greens",
  description:
    "Get in touch for current pricing, floor availability and site visits at Legacy by Gaurs — Trecento Residences. RERA-approved 4 BHK & villas at Jaypee Greens, Greater Noida.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <PageHero
        title="Speak to a Project Advisor"
        subtitle="Enquire"
        image={HERO_IMAGES.contact}
        height="medium"
      />

      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeader
                title="Request a Personal Consultation"
                description="For the latest pricing, floor availability, villa options, payment plans or to schedule a personal site visit, fill in your details below and one of our project advisors will reach out within 24 hours. Your information is shared only with our authorised sales team and never sold to third parties."
                align="left"
              />
              <ContactForm />
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-28 space-y-8 border border-charcoal/10 bg-ivory p-8">
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-gold">Project Address</h3>
                  <p className="mt-3 font-serif text-xl text-deep-black">{SITE.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                    {SITE.address.line1}<br />
                    {SITE.address.line2}<br />
                    {SITE.address.state}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-gold">Contact</h3>
                  <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
                    <li>{SITE.url.replace("https://", "www.")}</li>
                    <li>{SITE.email}</li>
                    <li>{SITE.phoneDisplay}</li>
                    <li>Site Visit Hours: {SITE.siteVisitHours}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-gold">Corporate Office</h3>
                  <p className="mt-3 text-sm text-charcoal/80">{SITE.corporateOffice}</p>
                  <a href={SITE.developerUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-gold hover:underline">
                    gaursonsindia.com
                  </a>
                </div>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-gold bg-gold/10 py-3 text-center text-xs tracking-widest uppercase text-charcoal transition-colors hover:bg-gold hover:text-deep-black"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </aside>
          </div>

          <div className="mt-16 aspect-[16/9] w-full overflow-hidden">
            <iframe
              src={SITE.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Project Location"
            />
          </div>

          <div className="mt-16 border border-charcoal/10 bg-marble p-8 text-xs leading-relaxed text-charcoal/60">
            <p><strong className="text-charcoal">RERA Registration Number:</strong> {SITE.rera} — Available at {SITE.reraUrl}</p>
            <p className="mt-2"><strong className="text-charcoal">Project Collection Account:</strong> {SITE.collectionAccount.name}, A/c No. {SITE.collectionAccount.number}, IFSC: {SITE.collectionAccount.ifsc}</p>
            <p className="mt-2">This is an authorised channel partner / marketing partner website. All details, plans, specifications and images are indicative and subject to the RERA-approved sanctioned plans and the Builder-Buyer Agreement. Prices are subject to change without notice.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
