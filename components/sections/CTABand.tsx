import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { GatedActionButton } from "@/components/lead/GatedActionButton";
import { Button } from "@/components/ui/Button";

interface CTABandProps {
  title: string;
  description?: string;
  primaryCTA?: {
    label: string;
    action?: "schedule-site-visit";
    ungated?: boolean;
    href?: string;
  };
  secondaryCTA?: {
    label: string;
    action:
      | "download-brochure"
      | "get-price-sheet"
      | "download-floor-plans"
      | "schedule-site-visit";
  };
}

export function CTABand({ title, description, primaryCTA, secondaryCTA }: CTABandProps) {
  return (
    <section className="bg-charcoal py-20 md:py-24">
      <Container className="text-center">
        <h2 className="font-serif text-3xl text-ivory md:text-4xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-beige/80">
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {primaryCTA?.href ? (
            <Link href={primaryCTA.href}>
              <Button variant="gold">{primaryCTA.label}</Button>
            </Link>
          ) : primaryCTA ? (
            <GatedActionButton
              action={primaryCTA.action}
              sourceCTA={primaryCTA.label}
              variant="gold"
              ungated={primaryCTA.ungated}
            >
              {primaryCTA.label}
            </GatedActionButton>
          ) : null}
          {secondaryCTA && (
            <GatedActionButton
              action={secondaryCTA.action}
              sourceCTA={secondaryCTA.label}
              variant="secondary"
              className="border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal"
            >
              {secondaryCTA.label}
            </GatedActionButton>
          )}
        </div>
      </Container>
    </section>
  );
}
