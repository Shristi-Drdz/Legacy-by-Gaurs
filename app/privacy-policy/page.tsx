import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} — how we collect, use and protect your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-32">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="font-serif text-4xl text-deep-black">Privacy Policy</h1>
        <div className="prose prose-sm mt-8 space-y-6 text-charcoal/80">
          <p>
            This Privacy Policy governs the collection, use and disclosure of personal information by {SITE.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) through this website and related marketing channels.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Information We Collect</h2>
          <p>
            When you submit an enquiry form, we may collect your name, phone number, email address, property preferences, purchase timeline and any message you provide. We also collect technical data such as your browser type, device information and pages visited for analytics purposes.
          </p>
          <h2 className="font-serif text-xl text-deep-black">How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your enquiry, share project details, schedule site visits and provide updates about {SITE.name}. We do not sell your personal data to third parties.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Communication Consent</h2>
          <p>
            By submitting a form and providing consent, you authorise our authorised sales team to contact you via call, SMS, WhatsApp and email regarding this project.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Data Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your personal information. However, no method of transmission over the internet is completely secure.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Contact</h2>
          <p>
            For privacy-related queries, contact us at {SITE.email}.
          </p>
          <p className="text-xs text-charcoal/50">Last updated: {new Date().getFullYear()}</p>
        </div>
      </Container>
    </Section>
  );
}
