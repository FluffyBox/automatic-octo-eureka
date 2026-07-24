"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useCookieConsent, setCookieConsent } from "@/lib/use-cookie-consent";

export function CookieBanner() {
  const consent = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Setări cookie-uri"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-foreground">
          Folosim cookie-uri necesare pentru funcționarea website-ului și, cu acordul tău,
          cookie-uri pentru analiză și îmbunătățirea experienței de navigare.{" "}
          <Link href="/politica-de-cookie-uri" className="underline hover:text-accent">
            Vezi politica de cookie-uri
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" onClick={() => setCookieConsent("rejected")}>
            Doar cele necesare
          </Button>
          <Button variant="primary" onClick={() => setCookieConsent("accepted")}>
            Acceptă toate
          </Button>
        </div>
      </div>
    </div>
  );
}
