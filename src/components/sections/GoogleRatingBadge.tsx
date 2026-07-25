import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function GoogleRatingBadge({ className }: { className?: string }) {
  const { value, count } = siteConfig.googleRating;

  return (
    <div className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-accent text-accent" />
        ))}
      </span>
      <span className="text-sm font-medium">
        {value.toFixed(1)} · {count} recenzii Google
      </span>
    </div>
  );
}
