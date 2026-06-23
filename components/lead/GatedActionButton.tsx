"use client";

import { useLeadStore } from "@/store/lead-store";
import { openLeadModalWithTracking } from "@/components/lead/LeadModal";
import type { GatedAction } from "@/lib/actions/gatedActions";
import { GATED_ACTION_LABELS } from "@/lib/actions/gatedActions";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface GatedActionButtonProps {
  action?: GatedAction;
  sourceCTA: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  ungated?: boolean;
}

export function GatedActionButton({
  action,
  sourceCTA,
  children,
  variant = "primary",
  size = "md",
  className,
  ungated = false,
}: GatedActionButtonProps) {
  const openModal = useLeadStore((s) => s.openModal);

  const handleClick = () => {
    if (ungated) {
      openLeadModalWithTracking(openModal, { sourceCTA });
      return;
    }
    openLeadModalWithTracking(openModal, {
      sourceCTA: action ? GATED_ACTION_LABELS[action] : sourceCTA,
      pendingAction: action ?? null,
    });
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
