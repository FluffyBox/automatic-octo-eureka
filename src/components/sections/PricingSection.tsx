import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export type PricingPlan = {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: { label: string; href: string };
};

export function PricingSection({
  eyebrow,
  title,
  description,
  plans,
  note,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
  note?: string;
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" className="mx-auto" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-8",
                plan.highlighted ? "border-accent shadow-lg sm:-translate-y-2" : "border-border"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  Recomandat
                </span>
              )}

              <h3 className="font-heading text-xl font-semibold text-primary">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-primary">{plan.price}</span>
                {plan.unit && <span className="text-sm text-muted-foreground">{plan.unit}</span>}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={plan.cta.href}
                variant={plan.highlighted ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {plan.cta.label}
              </Button>
            </div>
          ))}
        </div>

        {note && <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">{note}</p>}
      </Container>
    </Section>
  );
}
