import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalNotice } from "@/components/sections/LegalNotice";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  robots: { index: false },
};

export default function PoliticaConfidentialitatePage() {
  return (
    <>
      <PageHero title="Politica de confidențialitate" description={`${siteConfig.brandName} | ${siteConfig.legalName}`} />
      <Section>
        <Container className="max-w-3xl">
          <LegalNotice />
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary">
            <h2>Ce date colectăm</h2>
            <p>
              Datele transmise prin canalele de contact (WhatsApp, telefon, e-mail) sunt utilizate
              exclusiv pentru analizarea solicitării și contactarea persoanei interesate.
            </p>
            <h2>Cum folosim datele</h2>
            <p>
              Folosim informațiile furnizate doar pentru a răspunde solicitărilor de ofertă, a
              programa măsurători sau montaj și a comunica despre stadiul proiectului.
            </p>
            <h2>Drepturile tale</h2>
            <p>
              Poți solicita oricând acces, rectificarea sau ștergerea datelor tale, contactându-ne
              la {siteConfig.email}.
            </p>
            <h2>Contact</h2>
            <p>
              Pentru întrebări legate de confidențialitatea datelor, ne poți contacta la{" "}
              {siteConfig.email} sau {siteConfig.phone}.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
