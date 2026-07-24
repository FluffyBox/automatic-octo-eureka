import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export type ProcessStep = {
  title: string;
  description: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  steps,
  cta,
  className,
}: {
  eyebrow?: string;
  title: string;
  steps: ProcessStep[];
  cta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" className="mx-auto" />
        <ol className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
        {cta && (
          <div className="mt-12 flex justify-center">
            <Button href={cta.href} variant="primary">
              {cta.label}
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
