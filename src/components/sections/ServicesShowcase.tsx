import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DoorIllustration } from "@/components/sections/DoorIllustration";
import { cn } from "@/lib/cn";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceRow({ item, align }: { item: ServiceItem; align: "left" | "right" }) {
  return (
    <div className={cn("flex gap-4", align === "right" && "lg:flex-row-reverse lg:text-right")}>
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border-2 border-accent/50 text-accent">
        <item.icon className="size-6" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-primary">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
}

export function ServicesShowcase({
  eyebrow,
  title,
  description,
  left,
  right,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  left: ServiceItem[];
  right: ServiceItem[];
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <div className="flex flex-col gap-6 border-b border-border pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 pt-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <div className="flex flex-col gap-10">
            {left.map((item) => (
              <ServiceRow key={item.title} item={item} align="left" />
            ))}
          </div>

          <DoorIllustration className="order-first lg:order-none lg:px-6" />

          <div className="flex flex-col gap-10">
            {right.map((item) => (
              <ServiceRow key={item.title} item={item} align="right" />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
