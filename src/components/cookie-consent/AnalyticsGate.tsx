"use client";

import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "@/lib/use-cookie-consent";

export function AnalyticsGate() {
  const consent = useCookieConsent();
  return consent === "accepted" ? <Analytics /> : null;
}
