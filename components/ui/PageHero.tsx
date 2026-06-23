"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: "full" | "tall" | "medium";
  overlay?: boolean;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  image,
  height = "full",
  overlay = true,
  children,
}: PageHeroProps) {
  const heights = {
    full: "min-h-screen",
    tall: "min-h-[85vh]",
    medium: "min-h-[70vh]",
  };

  return (
    <section className={cn("relative flex items-end overflow-hidden", heights[height])}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/40 to-deep-black/20" />
      )}
      <div className="relative z-10 w-full pb-24 pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {subtitle && (
              <p className="mb-4 text-xs tracking-[0.4em] uppercase text-gold">
                {subtitle}
              </p>
            )}
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-ivory md:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>
            {children && <div className="mt-10">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
