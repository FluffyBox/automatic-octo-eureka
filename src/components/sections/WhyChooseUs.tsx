import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export type WhyChooseStat = { value: string; label: string };

export function WhyChooseUs({
  eyebrow,
  title,
  description,
  checklist,
  stats,
  cta,
  images,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  checklist: string[];
  stats: WhyChooseStat[];
  cta: { label: string; href: string };
  images: { main: { src: string; alt: string }; secondary: { src: string; alt: string } };
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -left-6 bottom-6 h-3/4 w-2/3 rounded-t-[120px] bg-accent/70"
          />
          <div className="relative aspect-[3/4] w-4/5 overflow-hidden rounded-t-[140px] rounded-b-2xl shadow-xl">
            <Image src={images.main.src} alt={images.main.alt} fill sizes="(min-width: 1024px) 35vw, 80vw" className="object-cover" />
          </div>
          <div className="absolute -right-4 -top-6 aspect-[3/4] w-2/5 overflow-hidden rounded-t-[80px] rounded-b-xl border-4 border-background shadow-xl sm:-right-8">
            <Image src={images.secondary.src} alt={images.secondary.alt} fill sizes="(min-width: 1024px) 15vw, 40vw" className="object-cover" />
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary sm:text-4xl">{title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground">
                <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <Button href={cta.href} variant="primary" className="mt-8">
            {cta.label}
          </Button>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
