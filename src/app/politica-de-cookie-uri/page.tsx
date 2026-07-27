import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: { canonical: "/politica-de-cookie-uri" },
  title: "Politica de cookie-uri",
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
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary">
            <h2>Ce sunt cookie-urile</h2>
            <p>
              Cookie-urile și tehnologiile similare (precum stocarea locală a browserului) sunt
              fișiere mici stocate pe dispozitivul tău, care ajută la funcționarea corectă a
              website-ului și la înțelegerea modului în care este utilizat.
            </p>

            <h2>Cookie-urile pe care le folosim</h2>
            <table>
              <thead>
                <tr>
                  <th>Nume</th>
                  <th>Furnizor</th>
                  <th>Scop</th>
                  <th>Durată</th>
                  <th>Categorie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cookie-consent</td>
                  <td>website propriu (stocare locală)</td>
                  <td>Memorează alegerea ta privind cookie-urile</td>
                  <td>Până la ștergere manuală</td>
                  <td>Necesar</td>
                </tr>
                <tr>
                  <td>cookie-consent-timestamp</td>
                  <td>website propriu (stocare locală)</td>
                  <td>Reține data la care ai exprimat alegerea, ca dovadă a consimțământului</td>
                  <td>Până la ștergere manuală</td>
                  <td>Necesar</td>
                </tr>
                <tr>
                  <td>Vercel Analytics</td>
                  <td>Vercel Inc.</td>
                  <td>Statistici anonimizate despre vizitele pe site</td>
                  <td>Sesiune / pe termen scurt</td>
                  <td>Analiză (opțional)</td>
                </tr>
                <tr>
                  <td>Cookie-uri Google Maps</td>
                  <td>Google Ireland Ltd.</td>
                  <td>Afișarea hărții interactive pe pagina de contact</td>
                  <td>Stabilită de Google</td>
                  <td>Analiză / funcțional (opțional, încărcat doar la cerere)</td>
                </tr>
              </tbody>
            </table>

            <h2>Cookie-uri necesare</h2>
            <p>
              Sunt esențiale pentru funcționarea website-ului (de exemplu, memorarea preferinței
              tale privind cookie-urile) și nu pot fi dezactivate.
            </p>

            <h2>Cookie-uri de analiză</h2>
            <p>
              Sunt activate doar cu acordul tău și ne ajută să înțelegem cum este folosit
              website-ul, pentru a-l îmbunătăți. Harta Google de pe pagina de contact se încarcă
              automat doar dacă ai acceptat aceste cookie-uri; altfel, se încarcă doar dacă apeși
              explicit butonul „Afișează harta”.
            </p>

            <h2>Gestionarea preferințelor</h2>
            <p>
              Îți poți schimba oricând preferința privind cookie-urile folosind linkul „Setări
              cookie-uri” din subsolul (footerul) website-ului — acesta redeschide bannerul de
              cookie-uri și îți permite să accepți sau să refuzi din nou cookie-urile opționale.
              Poți, de asemenea, șterge cookie-urile și datele stocate local direct din setările
              browserului tău.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
