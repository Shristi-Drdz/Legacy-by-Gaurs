export type AnalyticsEvent =
  | "modal_open"
  | "lead_submission"
  | "brochure_download"
  | "price_sheet_download"
  | "floor_plans_download"
  | "payment_plan_download"
  | "cost_sheet_download"
  | "site_visit_guide_download"
  | "site_visit_request"
  | "whatsapp_click"
  | "call_click"
  | "scroll_depth";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  const payload = { event, ...params };

  window.dataLayer?.push(payload);

  window.gtag?.("event", event, params);

  window.fbq?.("trackCustom", event, params);
}

export function trackScrollDepth(percentage: number) {
  trackEvent("scroll_depth", { percentage });
}

export function initAnalytics() {
  // Placeholder for GTM / GA / Meta Pixel initialization.
  // Configure IDs in environment variables when ready:
  // NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_META_PIXEL_ID
}
