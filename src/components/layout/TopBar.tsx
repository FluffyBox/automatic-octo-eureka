import { MapPin, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig, mailtoHref } from "@/lib/site-config";

export function TopBar() {
  return (
    <div className="hidden bg-primary text-primary-foreground lg:block">
      <Container className="flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {siteConfig.address}
          </span>
          <a href={mailtoHref()} className="flex items-center gap-2 transition-colors hover:text-accent">
            <Mail className="size-3.5 text-accent" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>
        <span className="flex items-center gap-2">
          <Clock className="size-3.5 text-accent" aria-hidden="true" />
          {siteConfig.hours}
        </span>
      </Container>
    </div>
  );
}
