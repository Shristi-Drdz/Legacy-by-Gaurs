import { DOWNLOADS } from "@/lib/content/site";
import { trackEvent } from "@/lib/analytics";

export type GatedAction =
  | "download-brochure"
  | "download-floor-plans"
  | "get-price-sheet"
  | "download-payment-plan"
  | "request-cost-sheet"
  | "request-site-visit-guide"
  | "schedule-site-visit";

export const GATED_ACTION_LABELS: Record<GatedAction, string> = {
  "download-brochure": "Download Brochure",
  "download-floor-plans": "Download Floor Plans",
  "get-price-sheet": "Get Latest Price Sheet",
  "download-payment-plan": "Download Payment Plan",
  "request-cost-sheet": "Request Cost Sheet",
  "request-site-visit-guide": "Request Site Visit Guide",
  "schedule-site-visit": "Schedule Site Visit",
};

function triggerDownload(url: string, filename: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export function executeGatedAction(action: GatedAction): void {
  switch (action) {
    case "download-brochure":
      trackEvent("brochure_download");
      triggerDownload(DOWNLOADS.brochure, "Legacy-by-Gaurs-Brochure.pdf");
      break;
    case "download-floor-plans":
      trackEvent("floor_plans_download");
      triggerDownload(DOWNLOADS.floorPlans, "Legacy-by-Gaurs-Floor-Plans.pdf");
      break;
    case "get-price-sheet":
      trackEvent("price_sheet_download");
      triggerDownload(DOWNLOADS.priceSheet, "Legacy-by-Gaurs-Price-Sheet.pdf");
      break;
    case "download-payment-plan":
      trackEvent("payment_plan_download");
      triggerDownload(DOWNLOADS.paymentPlan, "Legacy-by-Gaurs-Payment-Plan.pdf");
      break;
    case "request-cost-sheet":
      trackEvent("cost_sheet_download");
      triggerDownload(DOWNLOADS.costSheet, "Legacy-by-Gaurs-Cost-Sheet.pdf");
      break;
    case "request-site-visit-guide":
      trackEvent("site_visit_guide_download");
      triggerDownload(DOWNLOADS.siteVisitGuide, "Legacy-by-Gaurs-Site-Visit-Guide.pdf");
      break;
    case "schedule-site-visit":
      trackEvent("site_visit_request");
      break;
  }
}

export function isSiteVisitAction(action: GatedAction | null): boolean {
  return action === "schedule-site-visit";
}
