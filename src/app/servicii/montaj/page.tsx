import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/servicii/montaj" },
  title: "Montaj uși de interior",
  description: "Servicii de montaj pentru uși de interior, realizate cu atenție la funcționare, aliniere și finisaj.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Servicii", path: "/servicii" },
  { name: "Montaj", path: "/servicii/montaj" },
]);

export default function MontajPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PageHero
        title="Montaj atent pentru un rezultat bine finisat"
        description="Instalarea corectă influențează atât aspectul, cât și funcționarea ușii. Echipa noastră urmărește fiecare etapă pentru un rezultat curat și bine integrat."
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

          <h2 className="mt-12 text-2xl font-semibold text-primary">Pregătirea spațiului</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pentru desfășurarea montajului în condiții bune, zona trebuie să fie accesibilă și
            eliberată de obiectele care pot împiedica lucrările. Orice cerințe suplimentare vor fi
            comunicate înainte de programare.
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
