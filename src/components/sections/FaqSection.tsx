import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

export function FaqSection({
  eyebrow,
  title,
  description,
  items,
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: AccordionItem[];
  className?: string;
  dark?: boolean;
}) {
  return (
    <Section className={dark ? `bg-dark ${className ?? ""}` : className}>
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className={dark ? "mx-auto [&_h2]:text-dark-foreground [&_p]:text-dark-foreground/70" : "mx-auto"}
        />
        <div className="mt-12">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
