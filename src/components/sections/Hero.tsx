import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  trustText,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustText?: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="text-primary-foreground">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
          {trustText && (
            <p className="mt-8 text-sm font-medium tracking-wide text-primary-foreground/60">
              {trustText}
            </p>
          )}
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl lg:aspect-[3/4]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
