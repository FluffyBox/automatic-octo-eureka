import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

export type IconStripItem = {
  icon: LucideIcon;
  label: string;
};

export function IconStrip({ items }: { items: IconStripItem[] }) {
  return (
    <div className="border-t border-border">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3 text-center">
            <item.icon className="size-7 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">{item.label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
