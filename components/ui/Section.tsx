import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        dark ? "bg-charcoal text-ivory" : "bg-marble text-charcoal",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs tracking-[0.35em] uppercase",
            light ? "text-gold" : "text-gold-dark"
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "font-serif text-3xl leading-tight md:text-4xl lg:text-5xl",
            light ? "text-ivory" : "text-deep-black"
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed md:text-lg",
            light ? "text-beige/90" : "text-charcoal/80"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-8 h-px w-16 bg-gold",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
