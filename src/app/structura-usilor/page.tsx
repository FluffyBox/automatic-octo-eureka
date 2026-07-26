import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Structura ușilor de interior",
  description: "Materiale, finisaje și componente ale ușilor de interior Parquet Doors: foaie de ușă, toc, căptușeală, pervazuri și accesorii.",
};

export default function StructuraUsilorPage() {
  return (
    <>
      <PageHero
        title="Structura ușilor de interior"
        description="Ușile de interior realizate de Parquet Doors sunt disponibile în două variante constructive principale: uși cu structură celulară și uși masive, realizate din lemn stratificat, MDF furniruit și furnir natural de stejar."
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <h2>Uși din lemn cu structură celulară</h2>

            <h3>Structura foii de ușă</h3>
            <p>
              Rama foii de ușă este realizată din lemn de brad stratificat și are următoarele
              dimensiuni:
            </p>
            <ul>
              <li>aproximativ 12,5 cm pe laterale și în partea superioară;</li>
              <li>aproximativ 20 cm în partea inferioară.</li>
            </ul>
            <p>
              Interiorul foii de ușă are o structură celulară de tip fagure. Aceasta este placată pe
              ambele fețe cu MDF de 4 mm, furniruit cu furnir natural de stejar.
            </p>
            <p>
              În cazul modelelor care includ decupaje decorative sau inserții, zonele decupate sunt
              încadrate cu elemente din lemn cu o lățime de aproximativ 8–10 cm.
            </p>
            <p>Finisajul foii de ușă este realizat prin aplicarea succesivă a următoarelor straturi:</p>
            <ul>
              <li>baiț;</li>
              <li>grund;</li>
              <li>lac.</li>
            </ul>
            <p>Sunt disponibile mai multe nuanțe de finisaj, printre care:</p>
            <ul>
              <li>stejar auriu;</li>
              <li>nuc;</li>
              <li>wenge;</li>
              <li>mahon;</li>
              <li>cireș;</li>
              <li>alte nuanțe disponibile la cerere.</li>
            </ul>
            <p>Nuanța finală poate varia în funcție de textura și particularitățile naturale ale furnirului.</p>

            <h3>Tocul ușii</h3>
            <p>
              Tocul destinat ușilor cu structură celulară este realizat integral din lemn de brad și
              este furniruit cu furnir natural de stejar.
            </p>
            <p>În funcție de preferințele clientului și de modelul ales, tocul poate fi executat:</p>
            <ul>
              <li>drept;</li>
              <li>semirotund.</li>
            </ul>
            <p>
              Grosimea standard a tocului este de 10 cm și este potrivită pentru ziduri cu grosimea
              de aproximativ 10 cm. Prin utilizarea pervazurilor reglabile pe ambele părți, poate fi
              acoperită o grosime de zid de până la aproximativ 11 cm, fără a fi necesară adăugarea
              unei extensii de toc.
            </p>
            <p>
              Tocul este prevăzut cu garnitură de etanșare. Împreună cu foaia de ușă, aceasta
              contribuie la o închidere mai silențioasă, o etanșare mai bună și îmbunătățirea
              izolării dintre încăperi.
            </p>

            <h3>Extensia de toc</h3>
            <p>
              Pentru zidurile cu o grosime mai mare de 11 cm se utilizează o extensie de toc, numită
              și căptușeală. Extensia permite adaptarea ansamblului ușii la grosimea reală a
              peretelui și contribuie la obținerea unui finisaj uniform pe întreaga lățime a zidului.
            </p>

            <h3>Căptușeala</h3>
            <p>Căptușeala este realizată din PAL și este placată cu furnir natural de stejar, finisată cu baiț, grund și lac, în nuanțe precum stejar auriu, nuc, wenge, mahon sau cireș.</p>

            <h3>Pervazurile</h3>
            <p>
              Pervazurile sunt realizate din MDF, furniruite cu furnir natural de stejar, cu o
              grosime de aproximativ 1,5–1,8 cm și o lățime de aproximativ 7 cm.
            </p>
            <p className="font-medium text-primary">Avantajele pervazurilor reglabile:</p>
            <ul>
              <li>un aspect final mai curat;</li>
              <li>montaj fără elemente de fixare vizibile;</li>
              <li>adaptare mai bună la grosimea peretelui;</li>
              <li>posibilitatea de a acoperi ziduri de până la aproximativ 11 cm fără costuri suplimentare pentru extensii de toc.</li>
            </ul>

            <h3>Baghetele</h3>
            <p>
              Baghetele sunt realizate din lemn de brad și sunt furniruite cu furnir natural de
              stejar. Acestea sunt utilizate pentru fixarea și încadrarea elementelor decorative sau
              vitrate, în funcție de configurația modelului de ușă.
            </p>

            <h3>Balamalele și broasca</h3>
            <p>
              Foaia de ușă este montată pe toc cu ajutorul a trei balamale clasice, fabricate în
              România. Ușile sunt echipate cu broască mecanică în configurație clasică, de
              fabricație românească.
            </p>

            <h2>Uși masive</h2>
            <p>
              În cazul ușilor masive, structura generală și finisajele sunt similare celor utilizate
              pentru ușile celulare. Principala diferență este reprezentată de interiorul foii de
              ușă: la ușile celulare, interiorul este realizat din structură de tip fagure, iar la
              ușile masive, structura celulară este înlocuită cu tăblii din MDF furniruit. Această
              construcție oferă foii de ușă o structură mai plină și o greutate mai mare comparativ
              cu varianta celulară.
            </p>

            <h2>Configurație adaptată proiectului</h2>
            <p>Dimensiunile, grosimea tocului, necesitatea extensiilor, nuanța finisajului și configurația finală sunt stabilite în funcție de:</p>
            <ul>
              <li>grosimea zidurilor;</li>
              <li>dimensiunile golurilor de ușă;</li>
              <li>modelul selectat;</li>
              <li>tipul construcției;</li>
              <li>preferințele estetice ale clientului;</li>
              <li>particularitățile fiecărei locuințe.</li>
            </ul>
            <p>Pentru o ofertă corectă și o configurație potrivită, recomandăm efectuarea măsurătorilor înainte de confirmarea comenzii.</p>

            <p className="text-sm text-muted-foreground">
              Specificațiile de mai sus au fost furnizate direct de producător și pot varia în
              funcție de model, dimensiuni, configurație și cerințele proiectului. Caracteristicile
              finale vor fi confirmate în oferta tehnică și comercială.
            </p>
          </article>
        </Container>
      </Section>

      <CtaBanner
        title="Ai nevoie de ajutor pentru alegerea structurii potrivite?"
        description="Spune-ne câte uși ai nevoie, care este stilul locuinței și în ce localitate se află proiectul. Îți prezentăm variantele disponibile și te ajutăm să alegi configurația potrivită."
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
        secondaryCta={{ label: "Programează măsurătorile", href: "/servicii/consultanta-masuratori" }}
      />
    </>
  );
}
