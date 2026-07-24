import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalNotice } from "@/components/sections/LegalNotice";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  robots: { index: false },
};

export default function TermeniSiConditiiPage() {
  return (
    <>
      <PageHero title="Termeni și condiții" description={`${siteConfig.brandName} | ${siteConfig.legalName}`} />
      <Section>
        <Container className="max-w-3xl">
          <LegalNotice />
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary">
            <h2>Utilizarea website-ului</h2>
            <p>
              Prin utilizarea acestui website, ești de acord cu acești termeni și condiții.
              Conținutul website-ului are caracter informativ.
            </p>
            <h2>Ofertele și prețurile</h2>
            <p>
              Prețurile finale sunt stabilite individual, în funcție de model, dimensiuni, finisaj,
              accesorii și serviciile incluse, și sunt comunicate printr-o ofertă personalizată.
            </p>
            <h2>Proprietate intelectuală</h2>
            <p>
              Conținutul acestui website (texte, imagini, logo) aparține {siteConfig.legalName} și
              nu poate fi reprodus fără acord prealabil.
            </p>
            <h2>Contact</h2>
            <p>
              Pentru întrebări legate de acești termeni, ne poți contacta la {siteConfig.email}.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
