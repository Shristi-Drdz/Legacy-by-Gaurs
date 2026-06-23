"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck } from "lucide-react";
import { LeadForm } from "@/components/lead/LeadForm";
import { useLeadStore } from "@/store/lead-store";
import { trackEvent } from "@/lib/analytics";
import { SITE } from "@/lib/content/site";

export function LeadModal() {
  const { isOpen, closeModal, showSiteVisitConfirmation } = useLeadStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-deep-black/70 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-ivory shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 p-2 text-charcoal/60 transition-colors hover:text-charcoal"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-gold/30 bg-marble px-8 py-10">
              {showSiteVisitConfirmation ? (
                <div className="text-center py-6">
                  <CalendarCheck className="mx-auto h-12 w-12 text-gold mb-4" />
                  <h2 id="lead-modal-title" className="font-serif text-2xl text-deep-black mb-3">
                    Site Visit Requested
                  </h2>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                    Thank you. Our project advisor will contact you within 24 hours to confirm your personal site visit at {SITE.name}.
                  </p>
                  <p className="text-xs text-charcoal/50">
                    Site Visit Hours: {SITE.siteVisitHours}
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 text-xs tracking-widest uppercase text-gold hover:text-gold-dark"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <p className="mb-2 text-xs tracking-[0.35em] uppercase text-gold">Exclusive Access</p>
                  <h2 id="lead-modal-title" className="font-serif text-2xl text-deep-black md:text-3xl">
                    Unlock Exclusive Pricing & Priority Inventory
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                    Get the latest brochure, floor plans, pricing, and availability directly from our project advisors.
                  </p>
                </>
              )}
            </div>

            {!showSiteVisitConfirmation && (
              <div className="px-8 py-8">
                <LeadForm
                  onSuccess={() => {
                    if (!useLeadStore.getState().pendingAction) {
                      setTimeout(closeModal, 2000);
                    }
                  }}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function openLeadModalWithTracking(
  openModal: ReturnType<typeof useLeadStore.getState>["openModal"],
  options?: Parameters<ReturnType<typeof useLeadStore.getState>["openModal"]>[0]
) {
  trackEvent("modal_open", { sourceCTA: options?.sourceCTA ?? "Enquire Now" });
  openModal(options);
}
