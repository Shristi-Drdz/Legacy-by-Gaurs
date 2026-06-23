import { SITE } from "@/lib/content/site";

export function TrustStrip() {
  return (
    <div className="border-y border-gold/20 bg-charcoal py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-center text-xs tracking-widest uppercase text-ivory/80 lg:px-8">
        <span>RERA No. {SITE.rera}</span>
        <span className="hidden text-gold sm:inline">•</span>
        <span>By Gaurs — 27+ Years, 65,000+ Units Delivered</span>
      </div>
    </div>
  );
}
