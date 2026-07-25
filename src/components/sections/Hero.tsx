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
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
      </div>

      <Container className="flex min-h-[560px] flex-col justify-center py-20 sm:min-h-[620px] lg:min-h-[680px]">
        <div className="max-w-2xl text-dark-foreground">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dark-foreground/80">
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
                className="border-dark-foreground/30 text-dark-foreground hover:bg-dark-foreground/10"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
          {trustText && (
            <p className="mt-8 text-sm font-medium tracking-wide text-dark-foreground/70">
              {trustText}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
