"use client";

import { Phone, MessageCircle, FileText, IndianRupee } from "lucide-react";
import { GatedActionButton } from "@/components/lead/GatedActionButton";
import { SITE } from "@/lib/content/site";
import { trackEvent } from "@/lib/analytics";
import { useLeadStore } from "@/store/lead-store";
import { openLeadModalWithTracking } from "@/components/lead/LeadModal";

function WhatsAppLink({ className }: { className?: string }) {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click")}
      className={className}
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

function CallLink({ className }: { className?: string }) {
  return (
    <a
      href={`tel:${SITE.phone}`}
      onClick={() => trackEvent("call_click")}
      className={className}
    >
      <Phone className="h-4 w-4" />
      Call
    </a>
  );
}

export function DesktopStickyPanel() {
  return (
    <aside className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col border border-gold/20 bg-deep-black/95 shadow-2xl backdrop-blur-md">
        <GatedActionButton
          action="download-brochure"
          sourceCTA="Download Brochure"
          variant="ghost"
          size="sm"
          className="flex-col gap-1 border-b border-ivory/10 px-4 py-4 text-ivory hover:bg-gold/10 hover:text-gold"
        >
          <FileText className="h-4 w-4" />
          <span className="text-[10px]">Brochure</span>
        </GatedActionButton>
        <GatedActionButton
          action="get-price-sheet"
          sourceCTA="Get Price"
          variant="ghost"
          size="sm"
          className="flex-col gap-1 border-b border-ivory/10 px-4 py-4 text-ivory hover:bg-gold/10 hover:text-gold"
        >
          <IndianRupee className="h-4 w-4" />
          <span className="text-[10px]">Price</span>
        </GatedActionButton>
        <GatedActionButton
          action="schedule-site-visit"
          sourceCTA="Book Site Visit"
          variant="ghost"
          size="sm"
          className="flex-col gap-1 border-b border-ivory/10 px-4 py-4 text-ivory hover:bg-gold/10 hover:text-gold"
        >
          <Phone className="h-4 w-4" />
          <span className="text-[10px]">Visit</span>
        </GatedActionButton>
        <WhatsAppLink className="flex flex-col items-center gap-1 px-4 py-4 text-xs text-ivory transition-colors hover:bg-gold/10 hover:text-gold" />
      </div>
    </aside>
  );
}

export function MobileStickyBar() {
  const openModal = useLeadStore((s) => s.openModal);

  const barClass =
    "flex flex-1 flex-col items-center justify-center gap-1 py-3 text-[10px] tracking-wider uppercase text-ivory transition-colors hover:bg-gold/10";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold/20 bg-deep-black/98 backdrop-blur-md lg:hidden">
      <div className="flex">
        <CallLink className={barClass} />
        <WhatsAppLink className={barClass} />
        <button
          className={barClass}
          onClick={() =>
            openLeadModalWithTracking(openModal, {
              sourceCTA: "Download Brochure",
              pendingAction: "download-brochure",
            })
          }
        >
          <FileText className="h-4 w-4" />
          Brochure
        </button>
        <button
          className={barClass}
          onClick={() => openLeadModalWithTracking(openModal, { sourceCTA: "Enquire" })}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}
