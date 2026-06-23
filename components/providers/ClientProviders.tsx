"use client";

import { LeadModal } from "@/components/lead/LeadModal";
import { AutoLeadTrigger } from "@/hooks/useAutoLeadModal";
import { ScrollDepthTracker } from "@/hooks/useScrollDepth";
import {
  DesktopStickyPanel,
  MobileStickyBar,
} from "@/components/layout/StickyCTA";

export function ClientProviders({ children }: { children?: React.ReactNode }) {
  return (
    <>
      {children}
      <LeadModal />
      <AutoLeadTrigger />
      <ScrollDepthTracker />
      <DesktopStickyPanel />
      <MobileStickyBar />
    </>
  );
}
