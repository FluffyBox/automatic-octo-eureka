import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="border-b border-border bg-primary">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl text-primary-foreground">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">{description}</p>
          {cta && (
            <div className="mt-8">
              <Button href={cta.href} variant="primary">
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
