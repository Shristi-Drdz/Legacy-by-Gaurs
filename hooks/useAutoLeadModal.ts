"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLeadStore } from "@/store/lead-store";
import { trackEvent } from "@/lib/analytics";

const SESSION_KEY = "legacy-lead-modal-shown";

export function AutoLeadTrigger() {
  const pathname = usePathname();
  const openModal = useLeadStore((s) => s.openModal);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let triggered = false;
    const delay = 8000 + Math.random() * 4000;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      trackEvent("modal_open", { trigger: "auto", page: pathname });
      openModal({ sourceCTA: "Auto Popup" });
    };

    const timer = window.setTimeout(trigger, delay);

    const onScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercent >= 50) {
        window.removeEventListener("scroll", onScroll);
        window.clearTimeout(timer);
        trigger();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, openModal]);

  return null;
}
