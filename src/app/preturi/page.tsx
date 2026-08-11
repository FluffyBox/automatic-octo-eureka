import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, offerCatalogSchema, webPageSchema } from "@/lib/schema";
import { priceCategories, pricingNotes } from "@/lib/pricing";

export const metadata: Metadata = {
  alternates: { canonical: "/preturi" },
  title: "Prețuri uși de interior 2026 — de la 1.850 lei",
  description:
    "Lista completă de prețuri 2026 pentru uși de interior, debara, căptușeală, pervaz și montaj în București. De la 1.850 lei, TVA și feronerie incluse.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Prețuri", path: "/preturi" },
]);

const page = webPageSchema({
  type: "CollectionPage",
  name: "Prețuri uși de interior 2026",
  description:
    "Lista de prețuri pentru uși de interior, debara, căptușeală, pervaz și montaj. Prețuri actualizate 2026, TVA inclus.",
  path: "/preturi",
});

export default function PreturiPage() {
  return (
    <>
      <JsonLd data={[offerCatalogSchema(), breadcrumb, page]} />
      <PageHero
        title="Prețuri uși de interior 2026"
        description="Lista completă de prețuri, TVA inclus. Prețul final se confirmă întotdeauna după măsurători."
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading title="Lista de prețuri" />

          <div className="mt-10 flex flex-col gap-8">
            {priceCategories.map((category) => (
              <div key={category.title} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-heading text-lg font-semibold text-primary">{category.title}</h3>
                <ul className="mt-6 flex flex-col divide-y divide-border">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <span className="text-foreground">{item.name}</span>
                      <span className="flex items-baseline gap-1 whitespace-nowrap font-semibold text-primary">
                        {item.price}
                        {item.note && <span className="font-normal text-muted-foreground">{item.note}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ul className="mt-10 flex flex-col gap-3">
            {pricingNotes.map((note) => (
              <li key={note} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>

          <article className="prose prose-neutral mt-16 max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <h2>Ce este inclus în preț</h2>
            <p>
              Prețurile de mai sus nu sunt „de la” în sensul obișnuit al cuvântului: fiecare
              include TVA, feroneria completă (trei balamale clasice, broască mecanică și mâner) și
              geamul mat sablat, acolo unde modelul are decupaj. Nu se facturează separat garnitura
              de etanșare a tocului și nici pervazurile drepte standard pentru grosimi de zid de
              până la aproximativ 11 cm.
            </p>
            <p>
              Ce se adaugă: montajul (305 lei în București), vopsirea (450 lei per ușă, calculată
              inclusiv pentru pervazuri și căptușeală) și căptușeala pentru zidurile mai groase de
              11 cm. Detaliile pe fiecare configurație sunt pe paginile de model — de exemplu{" "}
              <Link href="/usi-de-interior/usi-glisante">ușile glisante</Link> sau{" "}
              <Link href="/usi-de-interior/usi-stratificate">ușile stratificate</Link>.
            </p>

            <h2>De ce prețul final se confirmă după măsurători</h2>
            <p>
              Ușile sunt executate pe comandă, în dimensiunile golului tău. Doi factori schimbă cel
              mai des configurația față de varianta standard: grosimea zidului, care poate impune
              căptușeală, și starea golului de ușă, care poate cere ajustări. Ambele se stabilesc
              la{" "}
              <Link href="/servicii/consultanta-masuratori">măsurători</Link>, nu la telefon — de
              aceea prețurile din listă sunt punctul de plecare al ofertei, nu oferta în sine.
            </p>

            <h2>Cum se compară cu ușile de stoc</h2>
            <p>
              O ușă de stoc dintr-un mare magazin costă mai puțin, dar vine în dimensiuni fixe. Dacă
              golul tău nu se încadrează, diferența se rezolvă prin modificarea zidului sau prin
              accesorii suplimentare, iar economia inițială se reduce. Ușile pe comandă pornesc mai
              sus, dar prețul acoperă ansamblul complet, adaptat golului existent.
            </p>

            <h2>Exemplu de calcul</h2>
            <p>
              Pentru un apartament cu patru uși cu toc pline (4 × 1.850 lei) și montaj în București
              (4 × 305 lei), totalul este de{" "}
              <strong>8.620 lei cu TVA</strong>. Dacă zidurile depășesc 11 cm și e nevoie de
              căptușeală pentru zid de 15 cm (4 × 175 lei), totalul devine 9.320 lei. Cifrele sunt
              orientative și se confirmă după măsurători.
            </p>
          </article>
        </Container>
      </Section>

      <CtaBanner
        title="Vrei o ofertă personalizată?"
        description="Spune-ne câte uși ai nevoie, ce stil preferi și unde se află proiectul. Îți transmitem o ofertă adaptată cerințelor tale."
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
        note="Prețurile afișate sunt orientative și pot varia în funcție de dimensiuni și complexitatea proiectului."
      />
    </>
  );
}
