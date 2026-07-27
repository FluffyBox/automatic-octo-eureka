import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/termeni-si-conditii" },
  title: "Termeni și condiții",
};

export default function TermeniSiConditiiPage() {
  return (
    <>
      <PageHero title="Termeni și condiții" description={`${siteConfig.brandName} | ${siteConfig.legalName}`} />
      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary">
            <h2>Identificarea operatorului website-ului</h2>
            <p>
              Acest website este operat de {siteConfig.legalName}, cu sediul în{" "}
              {siteConfig.address}, înregistrată la Registrul Comerțului cu numărul{" "}
              {siteConfig.registrationNumber}, CUI {siteConfig.vatId}{" "}
              <em>(date de identificare provizorii, ce vor fi actualizate cu datele reale ale
              societății)</em>, contact: {siteConfig.email} / {siteConfig.phone}.
            </p>
            <h2>Utilizarea website-ului</h2>
            <p>
              Prin utilizarea acestui website, ești de acord cu acești termeni și condiții.
              Conținutul website-ului are caracter informativ.
            </p>
            <h2>Ofertele și prețurile</h2>
            <p>
              Prețurile finale sunt stabilite individual, în funcție de model, dimensiuni, finisaj,
              accesorii și serviciile incluse, și sunt comunicate printr-o ofertă personalizată.
              Website-ul nu permite plasarea sau plata de comenzi online — orice ofertă se
              confirmă exclusiv prin contact direct (WhatsApp, telefon sau e-mail).
            </p>
            <h2>Proprietate intelectuală</h2>
            <p>
              Conținutul acestui website (texte, imagini, logo) aparține {siteConfig.legalName} și
              nu poate fi reprodus fără acord prealabil.
            </p>
            <h2>Legea aplicabilă</h2>
            <p>
              Acești termeni sunt guvernați de legislația română și de reglementările aplicabile
              din Uniunea Europeană.
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
