"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  GALLERY_ITEMS,
  GALLERY_TABS,
  type GalleryCategory,
} from "@/lib/content/images";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filtered =
    activeTab === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {GALLERY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-xs tracking-widest uppercase transition-colors",
              activeTab === tab.id
                ? "bg-charcoal text-ivory"
                : "bg-transparent text-charcoal/60 hover:text-charcoal"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setLightbox(item)}
              className="group relative aspect-[4/3] overflow-hidden text-left"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-sm text-ivory opacity-0 transition-opacity group-hover:opacity-100">
                {item.title}
              </p>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-deep-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 text-ivory"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative h-[70vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <p className="mt-4 text-center text-sm text-ivory/80">{lightbox.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
