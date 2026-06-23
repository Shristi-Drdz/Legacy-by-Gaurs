"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  priority?: boolean;
}

const aspects = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function ImageReveal({
  src,
  alt,
  className,
  aspect = "landscape",
  priority,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("group relative overflow-hidden", aspects[aspect], className)}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/0 transition-colors duration-500 group-hover:bg-deep-black/10" />
    </motion.div>
  );
}
