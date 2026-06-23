import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Disclaimer",
  description: `Disclaimer for ${SITE.name} — important notices regarding project information and marketing content.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <Section className="pt-32">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Disclaimer" }]} />
        <h1 className="font-serif text-4xl text-deep-black">Disclaimer</h1>
        <div className="prose prose-sm mt-8 space-y-6 text-charcoal/80">
          <p>
            This is an authorised channel partner / marketing partner website for {SITE.name} ({SITE.tagline}).
          </p>
          <h2 className="font-serif text-xl text-deep-black">RERA Disclosure</h2>
          <p>
            RERA Registration Number: <strong>{SITE.rera}</strong>. Project details are available at{" "}
            <a href={SITE.reraUrl} className="text-gold underline" target="_blank" rel="noopener noreferrer">
              up-rera.in/projects
            </a>.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Indicative Content</h2>
          <p>
            All details, plans, specifications, images, renderings and artist impressions displayed on this website are indicative and subject to the RERA-approved sanctioned plans and the Builder-Buyer Agreement. Actual deliverables may vary.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Pricing</h2>
          <p>
            Prices are subject to change without notice. The latest pricing, offers and availability are shared on a one-to-one basis by authorised project advisors.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Payment Information</h2>
          <p>
            All payments must be made only to the official project collection account: {SITE.collectionAccount.name}, Account No. {SITE.collectionAccount.number}, IFSC: {SITE.collectionAccount.ifsc}. Do not transfer funds to any unauthorised account.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. We are not responsible for the content or privacy practices of external sites.
          </p>
          <p className="text-xs text-charcoal/50">Last updated: {new Date().getFullYear()}</p>
        </div>
      </Container>
    </Section>
  );
}
