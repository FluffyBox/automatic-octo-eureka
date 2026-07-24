import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  note,
}: {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  note?: string;
}) {
  return (
    <section className="bg-dark py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-dark-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-base leading-relaxed text-dark-foreground/70">{description}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="outline"
              className="border-dark-foreground/30 text-dark-foreground hover:bg-dark-foreground/10"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
        {note && <p className="text-xs text-dark-foreground/50">{note}</p>}
      </Container>
    </section>
  );
}
