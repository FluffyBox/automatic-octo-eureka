import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export type AboutMiniItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function AboutSplit({
  eyebrow,
  title,
  description,
  items,
  cta,
  stat,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: AboutMiniItem[];
  cta: { label: string; href: string };
  stat: { value: string; label: string };
  image: { src: string; alt: string };
}) {
  return (
    <Container className="grid grid-cols-1 items-center gap-16 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
      <div className="relative mx-auto w-full max-w-md lg:mx-0">
        <div
          aria-hidden="true"
          className="absolute -left-4 -top-4 h-28 w-28 opacity-60"
          style={{
            backgroundImage: "radial-gradient(var(--color-accent) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[160px] rounded-b-3xl shadow-xl">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
        </div>
        <div className="absolute -bottom-6 right-2 flex w-36 flex-col items-center justify-center rounded-t-[56px] rounded-b-2xl bg-accent px-6 py-7 text-center text-accent-foreground shadow-xl sm:right-6">
          <span className="font-heading text-3xl font-bold">{stat.value}</span>
          <span className="mt-1 text-xs font-medium leading-snug">{stat.label}</span>
        </div>
      </div>

      <div>
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
          <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary sm:text-4xl">{title}</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">{description}</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button href={cta.href} variant="primary" className="mt-9">
          {cta.label}
        </Button>
      </div>
    </Container>
  );
}
