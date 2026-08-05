"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { whatsappHref } from "@/lib/site-config";
import { priceCategories, priceValue } from "@/lib/pricing";

const widths = ["70 cm", "80 cm", "90 cm"];
const heights = ["200 cm", "210 cm"];

const finishes = [
  { slug: "stejar-auriu", name: "Stejar auriu", image: "/images/usi/stejar-auriu/stejar-auriu-01.webp" },
  { slug: "wenge", name: "Wenge", image: "/images/usi/wenge/wenge-01.webp" },
  { slug: "nuc-ciresi", name: "Nuc și cireș", image: "/images/usi/nuc-ciresi/nuc-01.webp" },
  { slug: "decupaj-decorativ", name: "Decupaj decorativ", image: "/images/usi/decupaj-decorativ/decupaj-01.webp" },
];

// Real door models — kept in sync with the "Uși de interior" category in src/lib/pricing.ts.
const doorModels = priceCategories.find((c) => c.title === "Uși de interior")!.items;
const openings = ["Stânga", "Dreapta"];
const PAINT_SURCHARGE = 450;
const MONTAJ_BUCURESTI = 305;

function PillOption({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active ? "border-accent bg-accent text-accent-foreground" : "border-border text-foreground hover:bg-muted"
      )}
    >
      {label}
    </button>
  );
}

function OptionGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-primary">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function CustomDoorConfigurator({ className }: { className?: string }) {
  const [width, setWidth] = useState(widths[1]);
  const [height, setHeight] = useState(heights[1]);
  const [finish, setFinish] = useState(finishes[0].slug);
  const [doorModel, setDoorModel] = useState(doorModels[0].name);
  const [opening, setOpening] = useState(openings[0]);
  const [painted, setPainted] = useState(false);
  const [montajBucuresti, setMontajBucuresti] = useState(false);

  const selectedFinish = finishes.find((item) => item.slug === finish) ?? finishes[0];
  const selectedModel = doorModels.find((item) => item.name === doorModel) ?? doorModels[0];

  const total = priceValue(selectedModel) + (painted ? PAINT_SURCHARGE : 0) + (montajBucuresti ? MONTAJ_BUCURESTI : 0);

  const message = useMemo(
    () =>
      `Bună ziua! Doresc o ofertă pentru o ușă la comandă: model ${selectedModel.name} (preț estimat ${total} lei), dimensiune ${width} x ${height}, finisaj ${selectedFinish.name}, deschidere ${opening.toLowerCase()}${painted ? ", ușă vopsită" : ""}${montajBucuresti ? ", montaj în București" : ""}.`,
    [selectedModel, total, width, height, selectedFinish, opening, painted, montajBucuresti]
  );

  return (
    <Section className={className}>
      <Container>
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-text">
            <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Configurator
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            Uși la comandă, exact cum le vrei
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Alege dimensiunea, finisajul și configurația dorită, iar noi îți pregătim o ofertă
            personalizată pe baza selecției tale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div className="flex flex-col gap-8">
            <OptionGroup label="Lățime">
              {widths.map((option) => (
                <PillOption key={option} label={option} active={width === option} onClick={() => setWidth(option)} />
              ))}
            </OptionGroup>

            <OptionGroup label="Înălțime">
              {heights.map((option) => (
                <PillOption key={option} label={option} active={height === option} onClick={() => setHeight(option)} />
              ))}
            </OptionGroup>

            <div>
              <p className="text-sm font-semibold text-primary">Finisaj / culoare</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {finishes.map((option) => (
                  <button
                    key={option.slug}
                    type="button"
                    onClick={() => setFinish(option.slug)}
                    aria-pressed={finish === option.slug}
                    className={cn(
                      "flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-medium transition-colors",
                      finish === option.slug ? "border-accent bg-accent/10" : "border-border hover:bg-muted"
                    )}
                  >
                    <span className="relative size-8 shrink-0 overflow-hidden rounded-full">
                      <Image src={option.image} alt="" fill sizes="32px" className="object-cover" />
                    </span>
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            <OptionGroup label="Model ușă">
              {doorModels.map((option) => (
                <PillOption
                  key={option.name}
                  label={`${option.name} · ${option.price}`}
                  active={doorModel === option.name}
                  onClick={() => setDoorModel(option.name)}
                />
              ))}
            </OptionGroup>

            <OptionGroup label="Sens deschidere">
              {openings.map((option) => (
                <PillOption key={option} label={option} active={opening === option} onClick={() => setOpening(option)} />
              ))}
            </OptionGroup>

            <OptionGroup label="Ușă vopsită">
              <PillOption label="Da (+450 lei)" active={painted} onClick={() => setPainted(true)} />
              <PillOption label="Nu" active={!painted} onClick={() => setPainted(false)} />
            </OptionGroup>

            <OptionGroup label="Montaj în București">
              <PillOption label="Da (+305 lei)" active={montajBucuresti} onClick={() => setMontajBucuresti(true)} />
              <PillOption label="Nu" active={!montajBucuresti} onClick={() => setMontajBucuresti(false)} />
            </OptionGroup>
          </div>

          <div className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-text">Sumarul selecției tale</p>
            <dl className="mt-4 flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">Dimensiune</dt>
                <dd className="font-medium text-foreground">{width} x {height}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">Finisaj</dt>
                <dd className="font-medium text-foreground">{selectedFinish.name}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">Model</dt>
                <dd className="font-medium text-foreground">{selectedModel.name}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">Deschidere</dt>
                <dd className="font-medium text-foreground">{opening}</dd>
              </div>
              {painted && (
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Ușă vopsită</dt>
                  <dd className="font-medium text-foreground">+{PAINT_SURCHARGE} lei</dd>
                </div>
              )}
              {montajBucuresti && (
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Montaj în București</dt>
                  <dd className="font-medium text-foreground">+{MONTAJ_BUCURESTI} lei</dd>
                </div>
              )}
            </dl>

            <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-border pt-4">
              <p className="text-sm font-semibold text-primary">Preț estimat</p>
              <p className="font-heading text-2xl font-bold text-primary">{total} lei</p>
            </div>

            <a
              href={whatsappHref(message)}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-colors duration-200 hover:bg-accent/90"
            >
              Trimite selecția pe WhatsApp
            </a>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Disponibilitatea exactă a dimensiunilor și finisajelor se confirmă în momentul solicitării ofertei.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
