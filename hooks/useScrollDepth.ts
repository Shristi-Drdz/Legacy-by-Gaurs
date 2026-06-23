"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100];

export function useScrollDepth() {
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const percent = Math.round((window.scrollY / maxScroll) * 100);

      for (const milestone of MILESTONES) {
        if (percent >= milestone && !tracked.current.has(milestone)) {
          tracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function ScrollDepthTracker() {
  useScrollDepth();
  return null;
}
