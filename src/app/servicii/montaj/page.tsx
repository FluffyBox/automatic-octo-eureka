import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/servicii/montaj" },
  title: "Montaj uși de interior București — 305 lei",
  description:
    "Montaj uși de interior în București la 305 lei cu TVA per ușă. Verificarea alinierii, testarea deschiderii și predarea lucrării incluse.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Servicii", path: "/servicii" },
  { name: "Montaj", path: "/servicii/montaj" },
]);

export default function MontajPage() {
  return (
    <>
      <JsonLd data={[serviceSchema("/servicii/montaj"), breadcrumb]} />
      <PageHero
        title="Montaj uși de interior în București"
        description="305 lei cu TVA per ușă în București. Instalarea corectă influențează atât aspectul, cât și funcționarea ușii, așa că urmărim fiecare etapă până la predarea lucrării."
        cta={{ label: "Solicită montaj", href: "/oferta" }}
      />

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading title="Ce presupune montajul" />
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {[
              "verificarea produselor și a spațiului;",
              "pregătirea zonei de lucru;",
              "instalarea elementelor componente;",
              "verificarea alinierii;",
              "testarea deschiderii și închiderii;",
              "realizarea ajustărilor necesare;",
              "predarea lucrării.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-primary">Cât costă montajul</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Montajul în București costă <strong className="text-primary">305 lei cu TVA</strong> per
            ușă și acoperă toate etapele de mai sus. Tariful este separat de prețul ușii, care
            pornește de la 1.850 lei — vezi{" "}
            <Link href="/preturi" className="text-accent-text underline">
              lista completă de prețuri
            </Link>
            . Pentru proiecte din județul Ilfov sau din afara Bucureștiului, tariful se confirmă în
            funcție de adresă.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Montajul se programează după ce ușile sunt gata de livrare și după ce{" "}
            <Link href="/servicii/consultanta-masuratori" className="text-accent-text underline">
              măsurătorile
            </Link>{" "}
            au fost efectuate. Măsurarea corectă a golurilor înainte de comandă este ceea ce previne
            cele mai multe probleme la montaj.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-primary">Pregătirea spațiului</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pentru desfășurarea montajului în condiții bune, zona trebuie să fie accesibilă și
            eliberată de obiectele care pot împiedica lucrările. Dacă parchetul sau alt tip de
            pardoseală este deja montat, recomandăm o protecție temporară în zona de lucru. Orice
            cerințe suplimentare vor fi comunicate înainte de programare.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-primary">
            Montăm și uși care nu sunt cumpărate de la noi?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Disponibilitatea se confirmă de la caz la caz, în funcție de tipul ușii și de
            configurația tocului. Menționează acest lucru când ne{" "}
            <Link href="/contact" className="text-accent-text underline">
              contactezi
            </Link>{" "}
            și îți spunem dacă putem prelua lucrarea.
          </p>
        </Container>
      </Section>

      <CtaBanner
        title="Ai deja măsurătorile sau ai nevoie de evaluare?"
        description="Trimite-ne detaliile proiectului, iar noi îți vom spune care sunt pașii următori."
        primaryCta={{ label: "Cere o ofertă de montaj", href: "/oferta" }}
      />
    </>
  );
}
