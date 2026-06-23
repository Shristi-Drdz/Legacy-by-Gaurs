"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { SITE } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { GatedActionButton } from "@/components/lead/GatedActionButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-deep-black/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-deep-black/60 to-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group">
          <p className="font-serif text-xl tracking-wide text-ivory md:text-2xl">
            {SITE.name}
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold/80">
            {SITE.tagline}
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs tracking-widest uppercase transition-colors",
                pathname === link.href
                  ? "text-gold"
                  : "text-ivory/70 hover:text-ivory"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GatedActionButton sourceCTA="Enquire Now" variant="gold" size="sm" ungated>
            Enquire Now
          </GatedActionButton>
        </div>

        <button
          className="p-2 text-ivory lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ivory/10 bg-deep-black/98 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-widest uppercase",
                  pathname === link.href ? "text-gold" : "text-ivory/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <GatedActionButton sourceCTA="Enquire Now" variant="gold" size="md" ungated className="mt-4 w-full">
              Enquire Now
            </GatedActionButton>
          </div>
        </nav>
      )}
    </header>
  );
}
