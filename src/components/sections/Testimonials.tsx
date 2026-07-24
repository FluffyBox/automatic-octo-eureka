import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export function Testimonials({
  eyebrow,
  title,
  description,
  items,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Testimonial[];
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" className="mx-auto" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <figure key={index} className="rounded-2xl border border-border bg-card p-6">
              <Quote className="size-6 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                &bdquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-primary">
                {item.name}
                <span className="block font-normal text-muted-foreground">{item.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
