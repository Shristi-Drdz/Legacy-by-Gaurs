import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/content/site";
import { buildPageMetadata } from "@/lib/seo/schemas";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description: `Terms and Conditions for using the ${SITE.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section className="pt-32">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
        <h1 className="font-serif text-4xl text-deep-black">Terms & Conditions</h1>
        <div className="prose prose-sm mt-8 space-y-6 text-charcoal/80">
          <p>
            By accessing and using this website for {SITE.name}, you agree to the following terms and conditions.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Website Purpose</h2>
          <p>
            This website is an authorised marketing channel for {SITE.name}, a RERA-registered project ({SITE.rera}). All information provided is for general guidance and marketing purposes only.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Accuracy of Information</h2>
          <p>
            Floor plans, specifications, images, amenities and pricing details displayed on this website are indicative and subject to change without notice. Final terms shall be as per the RERA-approved sanctioned plans and the Builder-Buyer Agreement.
          </p>
          <h2 className="font-serif text-xl text-deep-black">No Contractual Obligation</h2>
          <p>
            Submission of an enquiry form or download request does not constitute a booking, allotment or contractual agreement. All bookings are subject to availability, verification and execution of official documentation at the project sales lounge.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Intellectual Property</h2>
          <p>
            All content, images, logos and materials on this website are the property of the respective owners and may not be reproduced without prior written consent.
          </p>
          <h2 className="font-serif text-xl text-deep-black">Governing Law</h2>
          <p>
            These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Uttar Pradesh.
          </p>
          <p className="text-xs text-charcoal/50">Last updated: {new Date().getFullYear()}</p>
        </div>
      </Container>
    </Section>
  );
}
