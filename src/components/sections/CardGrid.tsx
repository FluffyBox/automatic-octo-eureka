import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export type CardItem = {
  title: string;
  description: string;
  image?: { src: string; alt: string };
  icon?: LucideIcon;
  cta?: { label: string; href: string };
};

export function CardGrid({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  note,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
  note?: string;
  className?: string;
}) {
  const gridCols =
    columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section className={className}>
      <Container>
        {title && (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" className="mx-auto" />
        )}
        <div className={cn(title && "mt-12", "grid grid-cols-1 gap-8", gridCols)}>
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              {item.image && (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 90vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {item.icon && !item.image && (
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="size-6" aria-hidden="true" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.cta && (
                  <Button href={item.cta.href} variant="outline" className="mt-5 self-start">
                    {item.cta.label}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        {note && <p className="mt-8 text-center text-sm text-muted-foreground">{note}</p>}
      </Container>
    </Section>
  );
}
