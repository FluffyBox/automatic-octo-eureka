import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalNotice } from "@/components/sections/LegalNotice";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Politica de cookie-uri",
  robots: { index: false },
};

export default function PoliticaCookieUriPage() {
  return (
    <>
      <PageHero
        title="Politica de cookie-uri"
        description="Folosim cookie-uri necesare pentru funcționarea website-ului și, cu acordul tău, cookie-uri pentru analiză și îmbunătățirea experienței de navigare."
      />
      <Section>
        <Container className="max-w-3xl">
          <LegalNotice />
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary">
            <h2>Ce sunt cookie-urile</h2>
            <p>
              Cookie-urile sunt fișiere text mici stocate în browserul tău, care ajută la
              funcționarea corectă a website-ului și la înțelegerea modului în care este utilizat.
            </p>
            <h2>Cookie-uri necesare</h2>
            <p>
              Sunt esențiale pentru funcționarea website-ului (de exemplu, memorarea preferinței
              tale privind cookie-urile) și nu pot fi dezactivate.
            </p>
            <h2>Cookie-uri de analiză</h2>
            <p>
              Sunt activate doar cu acordul tău și ne ajută să înțelegem cum este folosit
              website-ul, pentru a-l îmbunătăți.
            </p>
            <h2>Gestionarea preferințelor</h2>
            <p>
              Îți poți schimba oricând preferința privind cookie-urile ștergând datele de navigare
              stocate de acest website din setările browserului tău.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
