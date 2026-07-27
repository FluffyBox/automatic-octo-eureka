import type { Metadata } from "next";
import { MessageSquare, Ruler, Wrench, ListChecks } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CardGrid } from "@/components/sections/CardGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/servicii" },
  title: "Servicii",
  description: "Consultanță, măsurători, montaj și asistență pentru alegerea modelului de ușă potrivit locuinței tale.",
};

export default function ServiciiPage() {
  return (
    <>
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

      <CtaBanner
        title="Programează o consultație"
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />
    </>
  );
}
