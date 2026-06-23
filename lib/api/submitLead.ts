import { API_ENDPOINT } from "@/lib/content/site";

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  interest: string;
  timeline: string;
  message?: string;
  sourcePage: string;
  sourceCTA: string;
}

export interface LeadResponse {
  success: boolean;
  message?: string;
}

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      interest: payload.interest,
      timeline: payload.timeline,
      message: payload.message ?? "",
      sourcePage: payload.sourcePage,
      sourceCTA: payload.sourceCTA,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Submission failed");
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  try {
    const data = (await response.json()) as LeadResponse;
    return { success: true, message: data.message };
  } catch {
    return { success: true };
  }
}
