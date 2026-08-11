import type { Metadata } from "next";
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
        title="Alege corect înainte de a comanda"
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

      <CtaBanner
        title="Pregătește proiectul corect de la început"
        description="Solicită o consultație și spune-ne unde se află proiectul și câte uși ai nevoie."
        primaryCta={{ label: "Solicită programare", href: "/oferta" }}
      />
    </>
  );
}
