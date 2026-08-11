import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { doorModels, getDoorModel } from "@/lib/doors";

export function generateStaticParams() {
  return doorModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = getDoorModel(slug);
  if (!model) return {};
  return {
    title: model.metaTitle,
    description: model.metaDescription,
    alternates: { canonical: `/usi-de-interior/${slug}` },
  };
}

/** Bulleted list with the accent dot used across the site. */
function DotList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function DoorModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = getDoorModel(slug);
  if (!model) notFound();

  const related = model.related
    .map((s) => getDoorModel(s))
    .filter((m): m is NonNullable<typeof m> => m !== null);

  const schema = productSchema({
    name: model.name,
    description: model.metaDescription,
    offers: [{ name: model.priceKey, description: model.summary, price: model.price }],
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Acasă", path: "" },
    { name: "Uși de interior", path: "/usi-de-interior" },
    { name: model.name, path: `/usi-de-interior/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[schema, breadcrumb]} />
      <PageHero
        title={`${model.name} — de la ${model.price.toLocaleString("ro-RO")} lei`}
        description={model.summary}
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <p className="lead">{model.intro}</p>
            <p>
              Prețul de {model.price.toLocaleString("ro-RO")} lei include TVA, feroneria (trei
              balamale, broască și mâner) și geamul mat sablat acolo unde modelul are decupaj.
              Montajul în București se tarifează separat, la{" "}
              <Link href="/servicii/montaj">305 lei cu TVA</Link> per ușă.
            </p>
          </article>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="max-w-3xl grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <SectionHeading title="Pentru ce se potrivește" />
            <DotList items={model.bestFor} />
          </div>
          <div>
            <SectionHeading title="Construcție" />
            <DotList items={model.construction} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading
            title="De reținut înainte de comandă"
            description="Aspecte practice care merită cântărite, nu doar argumente de vânzare."
          />
          <DotList items={model.considerations} />

          <div className="mt-12 rounded-2xl border border-border bg-card p-8">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Finisaje disponibile pentru acest model
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Stejar auriu, nuc, wenge, mahon și cireș, cu alte nuanțe disponibile la cerere. Nuanța
              finală poate varia în funcție de textura naturală a furnirului. Detaliile
              constructive complete sunt descrise pe pagina{" "}
              <Link href="/structura-usilor" className="text-accent-text underline">
                structura ușilor
              </Link>
              , iar galeria pe finisaje se află pe{" "}
              <Link href="/usi-de-interior" className="text-accent-text underline">
                pagina de uși de interior
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="max-w-3xl">
          <SectionHeading title="Compară cu alte modele" />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/usi-de-interior/${r.slug}`}
                className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-heading text-base font-semibold text-primary">{r.name}</h3>
                  <span className="whitespace-nowrap text-sm font-semibold text-primary">
                    {r.price.toLocaleString("ro-RO")} lei
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Toate cele șapte configurații și prețurile lor sunt pe pagina de{" "}
            <Link href="/preturi" className="text-accent-text underline">
              prețuri
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CtaBanner
        title={`Vrei o ofertă pentru ${model.name.toLowerCase()}?`}
        description="Spune-ne câte uși ai nevoie și în ce localitate se află proiectul. Prețul final se confirmă după măsurători."
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
        secondaryCta={{ label: "Programează măsurătorile", href: "/servicii/consultanta-masuratori" }}
      />
    </>
  );
}
