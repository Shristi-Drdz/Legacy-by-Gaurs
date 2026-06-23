import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getOrganizationSchema,
  getRealEstateSchema,
} from "@/lib/seo/schemas";
import { SITE } from "@/lib/content/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Ultra-Luxury 4 BHK at Jaypee Greens`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Legacy by Gaurs — Trecento Residences. Four iconic 36-storey towers of ultra-luxury 4 BHK condominiums and lavish villas at Jaypee Greens, Greater Noida. RERA approved.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <JsonLd data={[getRealEstateSchema(), getOrganizationSchema()]} />
      </head>
      <body className="min-h-screen antialiased">
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
