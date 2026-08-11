import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Ruler, Wrench, ListChecks } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CardGrid } from "@/components/sections/CardGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema, SERVICES } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/servicii" },
  title: "Servicii pentru uși de interior în București",
  description:
    "Consultanță, măsurători la domiciliu și montaj pentru uși de interior în București și Ilfov. Montaj de la 305 lei cu TVA.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Servicii", path: "/servicii" },
]);

const page = webPageSchema({
  type: "CollectionPage",
  name: "Servicii pentru uși de interior",
  description:
    "Consultanță, măsurători, montaj și asistență pentru alegerea modelului de ușă potrivit locuinței tale.",
  path: "/servicii",
});

export default function ServiciiPage() {
  return (
    <>
      <JsonLd data={[...SERVICES.map((s) => serviceSchema(s.path)), breadcrumb, page]} />
      <PageHero
        title="Servicii pentru un proces complet și bine organizat"
        description="Te sprijinim de la alegerea soluției potrivite până la instalarea finală."
      />

      <CardGrid
        columns={4}
        items={[
          {
            icon: MessageSquare,
            title: "Consultanță",
            description: "Analizăm nevoile tale și îți prezentăm opțiuni potrivite pentru stilul locuinței, dimensiunile disponibile și bugetul estimat.",
            cta: { label: "Programează o consultație", href: "/servicii/consultanta-masuratori" },
          },
          {
            icon: Ruler,
            title: "Măsurători",
            description: "Verificăm dimensiunile golurilor de ușă și particularitățile spațiului înainte de comandă și montaj.",
            cta: { label: "Programează măsurătorile", href: "/servicii/consultanta-masuratori" },
          },
          {
            icon: Wrench,
            title: "Montaj",
            description: "Instalăm ușile cu atenție la aliniere, funcționare și finisaj, pentru un rezultat cât mai curat și durabil.",
            cta: { label: "Solicită montaj", href: "/servicii/montaj" },
          },
          {
            icon: ListChecks,
            title: "Asistență pentru alegerea modelului",
            description: "Te ajutăm să compari variantele și să alegi în funcție de design, utilizare, întreținere și compatibilitatea cu interiorul.",
            cta: { label: "Cere o recomandare", href: "/usi-de-interior" },
          },
        ]}
      />

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <h2>Cum se leagă serviciile între ele</h2>
            <p>
              Cele patru servicii nu se contractează separat, ci fac parte din același traseu.
              Consultanța restrânge opțiunile la două-trei variante realiste pentru locuința ta.{" "}
              <Link href="/servicii/consultanta-masuratori">Măsurătorile</Link> transformă acele
              variante într-o configurație concretă — dimensiuni, tip de toc, necesarul de
              căptușeală. Abia după măsurători se poate emite o ofertă fermă, pentru că până atunci
              nu se știe dacă zidul cere căptușeală sau dacă golul are nevoie de ajustări.
            </p>
            <p>
              <Link href="/servicii/montaj">Montajul</Link> încheie procesul și costă 305 lei cu TVA
              per ușă în București. Poți comanda și fără montaj, dar disponibilitatea se confirmă în
              funcție de produs și de condițiile proiectului.
            </p>

            <h2>Unde lucrăm</h2>
            <p>
              Acoperim Bucureștiul și localitățile apropiate din județul Ilfov. Atelierul se află pe
              Strada Vitejilor 29, în Sectorul 3. Pentru adrese din afara acestei zone,
              disponibilitatea măsurătorilor și a montajului se confirmă când ne{" "}
              <Link href="/contact">contactezi</Link>.
            </p>

            <h2>Cât durează</h2>
            <p>
              Termenul depinde de model, finisaj, numărul de uși și localitate, și este comunicat în
              ofertă. Măsurătorile se programează, de regulă, în câteva zile de la solicitare, iar
              montajul după ce ușile sunt gata de livrare. Alte întrebări despre termene și garanție
              sunt tratate în <Link href="/intrebari-frecvente">întrebările frecvente</Link>.
            </p>
          </article>
        </Container>
      </Section>

      <CtaBanner
        title="Programează o consultație"
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />
    </>
  );
}
