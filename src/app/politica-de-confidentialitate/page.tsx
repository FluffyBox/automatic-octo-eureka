import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
};

export default function PoliticaConfidentialitatePage() {
  return (
    <>
      <PageHero title="Politica de confidențialitate" description={`${siteConfig.brandName} | ${siteConfig.legalName}`} />
      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary">
            <h2>Operatorul de date</h2>
            <p>
              Operatorul datelor cu caracter personal colectate prin acest website este{" "}
              {siteConfig.legalName}, cu sediul în {siteConfig.address}, înregistrată la Registrul
              Comerțului cu numărul {siteConfig.registrationNumber}, CUI {siteConfig.vatId}{" "}
              <em>(date de identificare provizorii, ce vor fi actualizate cu datele reale ale
              societății)</em>, contact: {siteConfig.email} / {siteConfig.phone}.
            </p>

            <h2>Ce date colectăm</h2>
            <p>
              Acest website nu conține formulare care transmit date către noi. Solicitările de
              ofertă se fac exclusiv prin canalele de contact pe care le alegi tu însuți — WhatsApp,
              telefon sau e-mail — caz în care datele transmise (nume, număr de telefon, adresă de
              e-mail, detalii despre proiect) sunt cele pe care le incluzi voluntar în mesaj.
              Suplimentar, dacă alegi să accepți cookie-urile de analiză, colectăm date statistice
              anonimizate despre modul de navigare pe site (a se vedea{" "}
              <a href="/politica-de-cookie-uri">Politica de cookie-uri</a>).
            </p>

            <h2>Temeiul și scopul prelucrării</h2>
            <ul>
              <li>
                <strong>Executarea unor măsuri precontractuale, la cererea ta</strong> (art. 6 alin.
                (1) lit. b) GDPR) — atunci când ne contactezi pentru a solicita o ofertă, o
                consultanță sau o măsurătoare.
              </li>
              <li>
                <strong>Consimțământ</strong> (art. 6 alin. (1) lit. a) GDPR) — pentru cookie-urile de
                analiză, activate doar dacă alegi „Acceptă toate” în bannerul de cookie-uri.
              </li>
              <li>
                <strong>Interes legitim</strong> (art. 6 alin. (1) lit. f) GDPR) — pentru
                funcționarea corectă și securitatea website-ului.
              </li>
            </ul>

            <h2>Destinatarii datelor</h2>
            <p>
              Nu vindem și nu închiriem datele tale către terți. Datele pot ajunge la următorii
              destinatari, doar în măsura acțiunilor pe care le inițiezi tu:
            </p>
            <ul>
              <li>
                <strong>WhatsApp / Meta Platforms Ireland Ltd.</strong> — dacă alegi să ne contactezi
                prin butonul WhatsApp, mesajul este transmis și stocat direct în infrastructura
                WhatsApp, conform{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  politicii de confidențialitate WhatsApp
                </a>
                , independent de acest website.
              </li>
              <li>
                <strong>Google Ireland Ltd.</strong> — harta afișată pe pagina de contact este
                încărcată de la Google Maps, doar la cererea ta explicită sau dacă ai acceptat
                cookie-urile de analiză, și poate seta propriile cookie-uri conform{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  politicii de confidențialitate Google
                </a>
                .
              </li>
              <li>
                <strong>Vercel Inc.</strong> — furnizorul de găzduire și, dacă ai acceptat
                cookie-urile de analiză, furnizorul serviciului de analiză web anonimizată
                (Vercel Analytics).
              </li>
            </ul>
            <p>
              Unii dintre acești destinatari pot procesa date în afara Spațiului Economic European
              (de exemplu SUA); în aceste cazuri, transferul se bazează pe clauzele contractuale
              standard și mecanismele de conformitate proprii furnizorilor respectivi.
            </p>

            <h2>Perioada de stocare</h2>
            <p>
              Mesajele transmise prin e-mail sau telefon sunt păstrate doar pe durata necesară
              soluționării solicitării și, ulterior, conform obligațiilor legale de arhivare fiscală/
              comercială aplicabile. Preferința privind cookie-urile este păstrată local, în
              browserul tău, până când o ștergi sau o modifici.
            </p>

            <h2>Drepturile tale</h2>
            <p>Conform GDPR, ai dreptul de a solicita:</p>
            <ul>
              <li>acces la datele tale cu caracter personal;</li>
              <li>rectificarea datelor inexacte sau incomplete;</li>
              <li>ștergerea datelor („dreptul de a fi uitat”);</li>
              <li>restricționarea prelucrării;</li>
              <li>portabilitatea datelor;</li>
              <li>opoziția față de prelucrare, în anumite condiții;</li>
              <li>retragerea oricând a consimțământului acordat, fără a afecta legalitatea prelucrărilor anterioare.</li>
            </ul>
            <p>
              Pentru exercitarea oricăruia dintre aceste drepturi, ne poți contacta la{" "}
              {siteConfig.email} sau {siteConfig.phone}.
            </p>

            <h2>Dreptul de a depune o plângere</h2>
            <p>
              Dacă apreciezi că prelucrarea datelor tale încalcă legislația privind protecția
              datelor, ai dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a
              Prelucrării Datelor cu Caracter Personal (ANSPDCP):{" "}
              <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
                www.dataprotection.ro
              </a>
              .
            </p>

            <h2>Modificări ale acestei politici</h2>
            <p>
              Această politică poate fi actualizată periodic. Versiunea aplicabilă este cea publicată
              pe această pagină la momentul vizitei tale.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
