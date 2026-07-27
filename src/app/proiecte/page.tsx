import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";

export const metadata: Metadata = {
  alternates: { canonical: "/proiecte" },
  title: "Proiecte realizate",
  description: "Descoperă exemple de uși integrate în diferite tipuri de amenajări, din proiectele realizate de Parquet Doors.",
};

const projectCount = 21;
const projectImages = Array.from({ length: projectCount }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/images/proiecte/proiect-${num}.webp`,
    alt: "Ușă de interior instalată de Parquet Doors într-un proiect real",
  };
});

export default function ProiectePage() {
  return (
    <>
      <PageHero
        title="Inspirație pentru locuința ta"
        description="Descoperă exemple de uși integrate în diferite tipuri de amenajări și folosește-le ca punct de plecare pentru propriul proiect."
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />

      <Section>
        <Container>
          <ProjectGallery images={projectImages} />
        </Container>
      </Section>

      <CtaBanner
        title="Îți place ce vezi?"
        description="Spune-ne câte uși ai nevoie și ce stil preferi, iar noi îți pregătim o ofertă adaptată proiectului tău."
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />
    </>
  );
}
