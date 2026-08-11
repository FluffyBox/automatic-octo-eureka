import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/servicii/consultanta-masuratori" },
  title: "Consultanță și măsurători pentru uși",
  description: "Primește recomandări pentru alegerea ușilor și programează măsurătorile necesare înainte de comandă și montaj.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Servicii", path: "/servicii" },
  { name: "Consultanță și măsurători", path: "/servicii/consultanta-masuratori" },
]);

export default function ConsultantaMasuratoriPage() {
  return (
    <>
      <JsonLd data={[serviceSchema("/servicii/consultanta-masuratori"), breadcrumb]} />
      <PageHero
        title="Consultanță și măsurători pentru uși de interior"
        description="Prin consultanță și măsurători, stabilim ce soluții se potrivesc locuinței tale și verificăm informațiile tehnice necesare proiectului."
        cta={{ label: "Programează măsurătorile", href: "/oferta" }}
      />

      <Section>
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <SectionHeading title="Ce include consultanța" />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {[
                "discutarea nevoilor și preferințelor;",
                "alegerea stilului și a finisajelor;",
                "compararea variantelor disponibile;",
                "analizarea cerințelor fiecărei încăperi;",
                "stabilirea serviciilor necesare;",
                "pregătirea informațiilor pentru ofertă.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Ce includ măsurătorile" />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {[
                "verificarea dimensiunilor golurilor;",
                "analizarea particularităților spațiului;",
                "verificarea elementelor relevante pentru montaj;",
                "notarea dimensiunilor necesare pregătirii proiectului;",
                "identificarea eventualelor situații care necesită clarificări.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <h2>De ce se măsoară înainte de comandă, nu după</h2>
            <p>
              Ușile sunt executate pe comandă, în dimensiunile golului tău. Odată începută execuția,
              dimensiunile nu se mai pot schimba — de aceea măsurarea este etapa care decide dacă
              montajul decurge fără surprize. Cele mai multe probleme la montaj nu vin din execuție,
              ci dintr-o măsurătoare aproximativă făcută înainte.
            </p>

            <h2>Ce se stabilește la măsurători</h2>
            <p>
              Dincolo de lățimea și înălțimea golului, se verifică trei lucruri care schimbă
              configurația și, implicit, prețul:
            </p>
            <ul>
              <li>
                <strong>Grosimea zidului.</strong> Tocul standard are 10 cm și acoperă, cu pervazuri
                reglabile, ziduri de până la aproximativ 11 cm. Peste această grosime este nevoie de
                căptușeală — 175 lei pentru zid de 15 cm, 350 lei pentru zid de 25 cm.
              </li>
              <li>
                <strong>Verticalitatea și starea golului.</strong> Un gol care nu este drept cere
                ajustări la montaj, care trebuie anticipate.
              </li>
              <li>
                <strong>Spațiul lateral disponibil.</strong> Decisiv dacă iei în calcul{" "}
                <Link href="/usi-de-interior/usi-glisante">uși glisante</Link>, care au nevoie de
                perete liber pe lățimea foii.
              </li>
            </ul>

            <h2>Ce primești după măsurători</h2>
            <p>
              O ofertă fermă, pe configurația reală, care înlocuiește estimarea din{" "}
              <Link href="/preturi">lista de prețuri</Link>. Oferta include termenul estimativ de
              execuție și, dacă ai solicitat,{" "}
              <Link href="/servicii/montaj">montajul</Link>. Contactarea noastră și măsurătorile nu
              implică nicio obligație de cumpărare.
            </p>
          </article>
        </Container>
      </Section>

      <CtaBanner
        title="Pregătește proiectul corect de la început"
        description="Solicită o consultație și spune-ne unde se află proiectul și câte uși ai nevoie."
        primaryCta={{ label: "Solicită programare", href: "/oferta" }}
      />
    </>
  );
}
