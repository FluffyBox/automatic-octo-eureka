"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useCookieConsent } from "@/lib/use-cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Classify a contact link into a lead "method" for GA4, or null if it isn't one. */
function leadMethod(href: string): string | null {
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("wa.me") || href.includes("api.whatsapp.com")) return "whatsapp";
  return null;
}

/**
 * Consent-gated GA4. Renders nothing (and loads no Google script) until the
 * visitor accepts cookies — mirrors AnalyticsGate. Also tracks lead intent by
 * delegating clicks on WhatsApp / phone / email links to a `generate_lead` event,
 * so every contact CTA is measured without wiring each component.
 */
export function GoogleAnalytics() {
  const consent = useCookieConsent();
  const enabled = consent === "accepted" && Boolean(GA_ID);

  useEffect(() => {
    if (!enabled) return;

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const method = leadMethod(href);
      if (!method) return;
      window.gtag?.("event", "generate_lead", {
        method,
        link_url: href,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
