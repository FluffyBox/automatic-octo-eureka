"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { siteConfig, googleMapsEmbedSrc, googleMapsDirectionsHref } from "@/lib/site-config";
import { useCookieConsent } from "@/lib/use-cookie-consent";

export function GoogleMap() {
  const consent = useCookieConsent();
  const [requested, setRequested] = useState(false);
  const canLoad = consent === "accepted" || requested;

  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      {canLoad ? (
        <iframe
          title={`Locația ${siteConfig.brandName} pe Google Maps`}
          src={googleMapsEmbedSrc()}
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full"
        />
      ) : (
        <div className="flex h-[360px] flex-col items-center justify-center gap-3 bg-muted p-6 text-center">
          <MapPin className="size-6 text-accent" aria-hidden="true" />
          <p className="max-w-sm text-sm text-muted-foreground">
            Harta este furnizată de Google și încarcă propriile cookie-uri. O afișăm doar la
            cererea ta.
          </p>
          <button
            type="button"
            onClick={() => setRequested(true)}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Afișează harta
          </button>
        </div>
      )}
      <div className="flex flex-col gap-2 bg-card p-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4 text-accent" aria-hidden="true" />
          {siteConfig.address}
        </span>
        <a
          href={googleMapsDirectionsHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent-text hover:underline"
        >
          Deschide în Google Maps →
        </a>
      </div>
    </div>
  );
}
