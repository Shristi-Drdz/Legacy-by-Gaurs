"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/api/submitLead";
import {
  INTEREST_OPTIONS,
  TIMELINE_OPTIONS,
  TOWER_OPTIONS,
} from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  interest: z.string().min(1),
  tower: z.string().optional(),
  timeline: z.string().min(1),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: INTEREST_OPTIONS[0],
      timeline: TIMELINE_OPTIONS[1],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      await submitLead({
        name: data.name,
        phone: data.phone,
        email: data.email,
        interest: data.interest,
        timeline: data.timeline,
        message: [data.tower ? `Tower: ${data.tower}` : "", data.message ?? ""]
          .filter(Boolean)
          .join(" | "),
        sourcePage: pathname,
        sourceCTA: "Request a Call Back",
      });
      trackEvent("lead_submission", { sourceCTA: "Request a Call Back", page: pathname });
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed");
    }
  };

  const inputClass =
    "w-full border border-charcoal/15 bg-marble px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none";
  const labelClass = "mb-2 block text-xs tracking-widest uppercase text-charcoal/60";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} className={inputClass} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input type="tel" {...register("phone")} className={inputClass} placeholder="+91" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Email Address *</label>
        <input type="email" {...register("email")} className={inputClass} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Preferred Configuration</label>
          <select {...register("interest")} className={inputClass}>
            {INTEREST_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Preferred Tower (Optional)</label>
          <select {...register("tower")} className={inputClass}>
            <option value="">Select tower</option>
            {TOWER_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>When are you planning to buy?</label>
        <select {...register("timeline")} className={inputClass}>
          {TIMELINE_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Message / Specific Requirements</label>
        <textarea {...register("message")} rows={4} className={inputClass} />
      </div>

      <label className="flex items-start gap-3">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-gold" />
        <span className="text-xs text-charcoal/70">
          I authorise the Legacy by Gaurs project team to contact me via call / SMS / WhatsApp / email.
        </span>
      </label>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      {status === "success" && (
        <div className="border border-gold/30 bg-gold/10 px-4 py-3 text-sm">
          Thank you. A project advisor will reach out within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <Button type="submit" variant="gold" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Request a Call Back"}
      </Button>
    </form>
  );
}
