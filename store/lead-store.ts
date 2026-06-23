import { create } from "zustand";
import type { GatedAction } from "@/lib/actions/gatedActions";

interface LeadStore {
  isOpen: boolean;
  sourceCTA: string;
  pendingAction: GatedAction | null;
  showSiteVisitConfirmation: boolean;
  openModal: (options?: {
    sourceCTA?: string;
    pendingAction?: GatedAction | null;
  }) => void;
  closeModal: () => void;
  setSiteVisitConfirmation: (show: boolean) => void;
}

export const useLeadStore = create<LeadStore>((set) => ({
  isOpen: false,
  sourceCTA: "Enquire Now",
  pendingAction: null,
  showSiteVisitConfirmation: false,
  openModal: (options) =>
    set({
      isOpen: true,
      sourceCTA: options?.sourceCTA ?? "Enquire Now",
      pendingAction: options?.pendingAction ?? null,
      showSiteVisitConfirmation: false,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      showSiteVisitConfirmation: false,
    }),
  setSiteVisitConfirmation: (show) =>
    set({ showSiteVisitConfirmation: show }),
}));
