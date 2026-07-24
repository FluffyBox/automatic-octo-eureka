import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function IconFeatureGrid({
  eyebrow,
  title,
  description,
  items,
  columns = 4,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const gridCols =
    columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" className="mx-auto" />
        <div className={`mt-12 grid grid-cols-1 gap-8 ${gridCols}`}>
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
