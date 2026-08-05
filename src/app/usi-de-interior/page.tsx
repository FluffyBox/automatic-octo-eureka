import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { productSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/usi-de-interior" },
  title: "Uși de interior pentru locuințe",
  description: "Descoperă modele de uși de interior pentru amenajări moderne, clasice sau minimaliste. Consultanță, măsurători și montaj disponibile.",
};

// Offer tiers — keep in sync with the price list in src/lib/pricing.ts.
const doorProductSchema = productSchema({
  name: "Uși de interior Parquet Doors",
  description:
    "Uși de interior în finisaje de stejar, wenge, nuc și cireș, disponibile cu toc plin, toc decupat, stratificate sau glisante.",
  image: "/images/usi/stejar-auriu/stejar-auriu-06.webp",
  offers: [
    { name: "Ușă cu toc plină", description: "Ușă de interior cu toc plin.", price: 1850 },
    { name: "Ușă stratificată", description: "Ușă de interior stratificată.", price: 2450 },
    { name: "Ușă glisantă masivă", description: "Ușă glisantă masivă de interior.", price: 2650 },
  ],
});

const doorBreadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Uși de interior", path: "/usi-de-interior" },
]);

const finishes = [
  {
    slug: "stejar-auriu",
    name: "Stejar auriu",
    description: "Nuanță caldă și luminoasă, potrivită amenajărilor clasice și contemporane deopotrivă.",
    count: 7,
  },
  {
    slug: "wenge",
    name: "Wenge",
    description: "Ton închis și elegant, pentru un aspect modern și minimalist.",
    count: 7,
  },
  {
    slug: "nuc-ciresi",
    name: "Nuc și cireș",
    description: "Nuanțe calde de nuc și cireș, cu un aspect rafinat și tradițional.",
    count: 7,
  },
  {
    slug: "decupaj-decorativ",
    name: "Decupaj decorativ",
    description: "Modele cu inserții și decupaje care aduc un plus de personalitate spațiului.",
    count: 1,
  },
];

export default function UsiDeInteriorPage() {
  return (
    <>
      <JsonLd data={[doorProductSchema, doorBreadcrumb]} />
      <PageHero
        title="Uși de interior potrivite stilului casei tale"
        description="Descoperă opțiuni pentru diferite tipuri de amenajări și solicită ajutor pentru alegerea modelului, finisajului și configurației potrivite."
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />

      <Section>
        <Container className="max-w-3xl">
          <p className="leading-relaxed text-muted-foreground">
            Fiecare locuință are propriul stil și propriile cerințe. Alegerea unei uși de interior
            trebuie să țină cont de design, dimensiuni, modul de utilizare și integrarea în
            ansamblul amenajării.
          </p>
        </Container>
      </Section>

      {finishes.map((finish, index) => (
        <Section key={finish.slug} className={index % 2 === 1 ? "bg-muted/40" : undefined}>
          <Container>
            <SectionHeading title={finish.name} description={finish.description} />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {Array.from({ length: finish.count }).map((_, i) => {
                const num = String(i + 1).padStart(2, "0");
                const src = `/images/usi/${finish.slug}/${finish.slug === "decupaj-decorativ" ? "decupaj" : finish.slug === "nuc-ciresi" ? "nuc" : finish.slug}-${num}.webp`;
                return (
                  <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                    <Image
                      src={src}
                      alt={`Ușă de interior finisaj ${finish.name}`}
                      fill
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container className="max-w-3xl rounded-3xl border border-border bg-card p-10 text-center">
          <h2 className="text-2xl font-semibold text-primary">Nu știi ce model să alegi?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trimite-ne câteva informații despre locuință, numărul de uși și stilul preferat. Te
            ajutăm să restrângi opțiunile și să identifici soluțiile potrivite.
          </p>
        </Container>
      </Section>

      <CtaBanner
        title="Cere o recomandare personalizată"
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />
    </>
  );
}
