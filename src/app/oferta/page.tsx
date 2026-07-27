import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactOptions } from "@/components/sections/ContactOptions";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: { canonical: "/oferta" },
  title: "Solicită o ofertă",
  description: "Spune-ne câte uși ai nevoie, ce stil preferi și unde se află proiectul. Îți pregătim o ofertă adaptată cerințelor tale.",
};

export default function OfertaPage() {
  return (
    <>
      <PageHero
        title="Cauți uși potrivite pentru locuința ta?"
        description="Spune-ne câte uși ai nevoie, ce stil preferi și unde se află proiectul. Alege una dintre variantele de mai jos și intrăm în legătură cu tine cât mai curând."
      />

      <Section>
        <Container className="max-w-4xl">
          <SectionHeading
            title="Solicită o ofertă personalizată"
            description="Menționează numărul aproximativ de uși, localitatea proiectului și serviciile de care ai nevoie (consultanță, măsurători, montaj sau pachet complet) — te ajutăm să pregătim o estimare corectă."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <ContactOptions />
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Contactarea noastră nu implică nicio obligație de cumpărare.
          </p>
        </Container>
      </Section>
    </>
  );
}
