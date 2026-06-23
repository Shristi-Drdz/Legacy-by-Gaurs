import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";
import { SITE } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="bg-deep-black text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-ivory">{SITE.name}</p>
            <p className="mt-2 text-xs tracking-[0.3em] uppercase text-gold">{SITE.tagline}</p>
            <p className="mt-6 text-sm leading-relaxed">
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.state}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-widest uppercase text-gold">Explore</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-widest uppercase text-gold">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>{SITE.email}</li>
              <li>{SITE.phoneDisplay}</li>
              <li>{SITE.siteVisitHours}</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-widest uppercase text-gold">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-8 text-xs leading-relaxed text-ivory/50">
          <p className="mb-2">
            RERA Registration Number: <strong className="text-ivory/70">{SITE.rera}</strong> — Available at{" "}
            <a href={SITE.reraUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
              up-rera.in/projects
            </a>
          </p>
          <p className="mb-2">
            Project Collection Account: {SITE.collectionAccount.name}, A/c No. {SITE.collectionAccount.number}, IFSC: {SITE.collectionAccount.ifsc}
          </p>
          <p>
            This is an authorised channel partner / marketing partner website. All details, plans, specifications and images are indicative and subject to the RERA-approved sanctioned plans and the Builder-Buyer Agreement. Prices are subject to change without notice.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
