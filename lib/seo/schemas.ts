import { SITE } from "@/lib/content/site";

export function getRealEstateSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: SITE.name,
    description:
      "Trecento Residences at Legacy by Gaurs — ultra-luxury 4 BHK condominiums and lavish villas at Jaypee Greens, Greater Noida.",
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      addressCountry: "IN",
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.developer,
    url: SITE.developerUrl,
    logo: `${SITE.url}/logo.svg`,
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE.name,
    brand: {
      "@type": "Brand",
      name: SITE.developer,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
    },
  };
}

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website" as const,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}
