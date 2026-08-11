import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/intrebari-frecvente" },
  title: "Întrebări frecvente",
  description: "Răspunsuri la cele mai frecvente întrebări despre uși de interior, măsurători, montaj, garanție și livrare.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Întrebări frecvente", path: "/intrebari-frecvente" },
]);

const page = webPageSchema({
  type: "WebPage",
  name: "Întrebări frecvente despre uși de interior",
  description:
    "Răspunsuri la cele mai frecvente întrebări despre uși de interior, măsurători, montaj, garanție și livrare.",
  path: "/intrebari-frecvente",
});

export default function IntrebariFrecventePage() {
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumb, page]} />
      <PageHero
        title="Întrebări frecvente despre uși de interior"
        description="Răspunsuri clare despre ofertare, măsurători, montaj, garanție și termene de livrare. Dacă nu găsești ce cauți, scrie-ne direct."
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
