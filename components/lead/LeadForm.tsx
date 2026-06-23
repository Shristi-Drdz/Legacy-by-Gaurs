"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/api/submitLead";
import { INTEREST_OPTIONS, TIMELINE_OPTIONS } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import {
  executeGatedAction,
  isSiteVisitAction,
  type GatedAction,
} from "@/lib/actions/gatedActions";
import { useLeadStore } from "@/store/lead-store";
import { cn } from "@/lib/utils";

const leadSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid mobile number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an option"),
  timeline: z.string().min(1, "Please select a timeline"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required to proceed",
  }),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  variant?: "modal" | "inline";
  sourceCTA?: string;
  pendingAction?: GatedAction | null;
  onSuccess?: () => void;
  submitLabel?: string;
  className?: string;
}

export function LeadForm({
  variant = "modal",
  sourceCTA,
  pendingAction,
  onSuccess,
  submitLabel = "Unlock Details",
  className,
}: LeadFormProps) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const setSiteVisitConfirmation = useLeadStore((s) => s.setSiteVisitConfirmation);
  const storeSourceCTA = useLeadStore((s) => s.sourceCTA);
  const storePendingAction = useLeadStore((s) => s.pendingAction);

  const cta = sourceCTA ?? storeSourceCTA;
  const action = pendingAction ?? storePendingAction;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      interest: INTEREST_OPTIONS[0],
      timeline: TIMELINE_OPTIONS[1],
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: data.name,
        phone: data.phone,
        email: data.email,
        interest: data.interest,
        timeline: data.timeline,
        sourcePage: pathname,
        sourceCTA: cta,
      });

      trackEvent("lead_submission", { sourceCTA: cta, page: pathname });
      setStatus("success");

      if (action) {
        if (isSiteVisitAction(action)) {
          setSiteVisitConfirmation(true);
        } else {
          executeGatedAction(action);
        }
      }

      onSuccess?.();
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const inputClass = cn(
    "w-full border-b border-charcoal/20 bg-transparent px-0 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none",
    variant === "modal" && "text-charcoal"
  );

  const labelClass = "mb-1 block text-xs tracking-widest uppercase text-charcoal/60";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)}>
      <div>
        <label htmlFor="name" className={labelClass}>Full Name</label>
        <input id="name" {...register("name")} className={inputClass} placeholder="Your full name" />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Mobile Number</label>
        <input id="phone" type="tel" {...register("phone")} className={inputClass} placeholder="+91" />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input id="email" type="email" {...register("email")} className={inputClass} placeholder="you@email.com" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="interest" className={labelClass}>Interested In</label>
          <select id="interest" {...register("interest")} className={inputClass}>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.interest && <p className="mt-1 text-xs text-red-600">{errors.interest.message}</p>}
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>Preferred Purchase Timeline</label>
          <select id="timeline" {...register("timeline")} className={inputClass}>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.timeline && <p className="mt-1 text-xs text-red-600">{errors.timeline.message}</p>}
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-gold" />
        <span className="text-xs leading-relaxed text-charcoal/70">
          I authorize the project team to contact me via Call, WhatsApp, SMS and Email.
        </span>
      </label>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      {status === "error" && (
        <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
          <button type="button" onClick={() => setStatus("idle")} className="ml-2 underline">
            Retry
          </button>
        </div>
      )}

      {status === "success" && !action && (
        <div className="rounded border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-charcoal">
          Thank you. A project advisor will reach out shortly.
        </div>
      )}

      <Button type="submit" variant="gold" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
