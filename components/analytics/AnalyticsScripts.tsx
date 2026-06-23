"use client";

/**
 * Analytics integration placeholder.
 * Configure environment variables when ready:
 * - NEXT_PUBLIC_GA_ID
 * - NEXT_PUBLIC_GTM_ID
 * - NEXT_PUBLIC_META_PIXEL_ID
 */
export function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (!gaId && !gtmId && !pixelId) return null;

  return (
    <>
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
    </>
  );
}

export function initGtag(gaId: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args as unknown as Record<string, unknown>);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaId);
}

export function initMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;
  type FbqStub = ((...args: unknown[]) => void) & { q?: unknown[] };
  const w = window as Window & { fbq?: FbqStub };
  w.fbq =
    w.fbq ||
    function fbq(...args: unknown[]) {
      (w.fbq!.q = w.fbq!.q || []).push(args);
    };
  w.fbq("init", pixelId);
  w.fbq("track", "PageView");
}
