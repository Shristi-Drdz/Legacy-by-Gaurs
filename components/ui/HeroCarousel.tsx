"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  images: string[];
  className?: string;
}

export function HeroCarousel({ images, className }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, i) => (
            <div key={i} className="embla__slide relative min-h-[100vh]">
              <Image src={src} alt="" fill className="object-cover" priority={i === 0} sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-deep-black/20" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 p-2 text-ivory/70 hover:text-ivory"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 p-2 text-ivory/70 hover:text-ivory"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      <div className="absolute bottom-32 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1 w-8 transition-all",
              i === selectedIndex ? "bg-gold" : "bg-ivory/30"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
