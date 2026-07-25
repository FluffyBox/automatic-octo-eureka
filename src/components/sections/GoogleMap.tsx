import { MapPin } from "lucide-react";
import { siteConfig, googleMapsEmbedSrc, googleMapsDirectionsHref } from "@/lib/site-config";

export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
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
      <div className="flex flex-col gap-2 bg-card p-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4 text-accent" aria-hidden="true" />
          {siteConfig.address}
        </span>
        <a
          href={googleMapsDirectionsHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent hover:underline"
        >
          Deschide în Google Maps →
        </a>
      </div>
    </div>
  );
}
