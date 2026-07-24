import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Întrebări frecvente",
  description: "Răspunsuri la cele mai frecvente întrebări despre uși de interior, măsurători, montaj, garanție și livrare.",
};

const faqs = [
  {
    question: "Cum pot solicita o ofertă?",
    answer:
      "Scrie-ne pe WhatsApp sau trimite-ne un e-mail și menționează numărul aproximativ de uși, localitatea și serviciile de care ai nevoie. Te vom contacta pentru a solicita informațiile suplimentare necesare.",
  },
  {
    question: "Oferiți și servicii de măsurare?",
    answer: "Da. Putem realiza măsurătorile necesare înainte de pregătirea sau confirmarea comenzii.",
  },
  {
    question: "Asigurați montajul ușilor?",
    answer: "Da. Oferim servicii de montaj pentru ușile comandate, în funcție de localitatea proiectului și de disponibilitate.",
  },
  {
    question: "Pot comanda doar ușile, fără montaj?",
    answer: "Disponibilitatea acestei opțiuni se confirmă în funcție de produs și de condițiile proiectului. Menționează acest lucru atunci când ne contactezi.",
  },
  {
    question: "Cum aleg modelul potrivit?",
    answer: "Te ajutăm să compari modelele în funcție de stilul locuinței, dimensiuni, finisaje, buget și cerințele fiecărei încăperi.",
  },
  {
    question: "Este necesară măsurarea înainte de comandă?",
    answer: "Recomandăm verificarea dimensiunilor înainte de confirmarea comenzii, pentru a reduce riscul apariției unor incompatibilități.",
  },
  {
    question: "Cât durează livrarea și montajul?",
    answer: "Termenul diferă în funcție de model, finisaj, disponibilitate, numărul de uși și localitatea proiectului. Termenul estimativ va fi comunicat în ofertă.",
  },
  {
    question: "Cât costă o ușă de interior?",
    answer: "Prețul depinde de model, dimensiuni, finisaj, accesorii și serviciile incluse. Pentru o estimare corectă, solicită o ofertă personalizată.",
  },
  {
    question: "Pot vedea modelele înainte de comandă?",
    answer: "Opțiunile disponibile pentru prezentarea modelelor vor fi comunicate în urma solicitării. Acestea pot include mostre, cataloage, imagini sau vizionare într-o locație fizică, dacă este disponibilă.",
  },
  {
    question: "În ce localități oferiți montaj?",
    answer: "Zona de acoperire se confirmă în funcție de localitatea proiectului. Menționează adresa sau localitatea atunci când ne contactezi.",
  },
  {
    question: "Oferiți garanție?",
    answer: "Condițiile de garanție diferă în funcție de produs și serviciile incluse și vor fi specificate în documentele aferente comenzii.",
  },
  {
    question: "Pot solicita o ofertă pentru mai multe uși?",
    answer: "Da. Menționează numărul aproximativ de uși și, dacă este posibil, adaugă fotografii sau dimensiuni orientative.",
  },
];

export default function IntrebariFrecventePage() {
  return (
    <>
      <PageHero
        title="Idei și sfaturi pentru alegerea ușilor de interior"
        description="Descoperă informații utile despre modele, finisaje, măsurători, montaj și integrarea ușilor în designul locuinței."
      />

      <Section>
        <Container className="max-w-3xl">
          <Accordion items={faqs} />
        </Container>
      </Section>

      <CtaBanner
        title="Nu ai găsit răspunsul căutat?"
        description="Scrie-ne direct și îți răspundem cât mai curând posibil."
        primaryCta={{ label: "Contactează-ne", href: "/contact" }}
      />
    </>
  );
}
