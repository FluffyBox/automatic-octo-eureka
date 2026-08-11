import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { productSchema, breadcrumbSchema } from "@/lib/schema";
import { doorModels } from "@/lib/doors";

export const metadata: Metadata = {
  alternates: { canonical: "/usi-de-interior" },
  title: "Uși de interior pe comandă în București și Ilfov",
  description:
    "Uși de interior din furnir natural de stejar, pe comandă, de la 1.850 lei cu TVA, feronerie și geam inclus. 7 configurații, montaj în București 305 lei.",
};

// Offer tiers — keep in sync with the price list in src/lib/pricing.ts.
const doorProductSchema = productSchema({
  name: "Uși de interior pe comandă Parquet Doors",
  description:
    "Uși de interior din furnir natural de stejar, executate pe comandă în finisaje stejar auriu, wenge, nuc, cireș și mahon. Disponibile cu toc plin, toc decupat, baghetă aplicată, frezări, stratificate, glisante sau glisante masive.",
  image: "/images/usi/stejar-auriu/stejar-auriu-06.webp",
  offers: doorModels.map((m) => ({
    name: m.priceKey,
    description: m.summary,
    price: m.price,
  })),
});

const doorBreadcrumb = breadcrumbSchema([
  { name: "Acasă", path: "" },
  { name: "Uși de interior", path: "/usi-de-interior" },
]);

const finishes = [
  {
    slug: "stejar-auriu",
    name: "Stejar auriu",
    description:
      "Nuanță caldă și luminoasă, cea mai cerută dintre finisajele noastre. Se asortează cu parchet în tonuri de maro cald, bej sau miere și nu întunecă încăperile mici.",
    count: 7,
  },
  {
    slug: "wenge",
    name: "Wenge",
    description:
      "Ton închis, aproape ciocolatiu, pentru amenajări moderne și minimaliste. Funcționează cel mai bine în camere luminoase, în contrast cu pereți deschiși la culoare.",
    count: 7,
  },
  {
    slug: "nuc-ciresi",
    name: "Nuc și cireș",
    description:
      "Nuanțe calde, tradiționale, potrivite locuințelor cu mobilier din lemn masiv. Cireșul are un subton roșcat, iar nucul rămâne într-un maro neutru.",
    count: 7,
  },
  {
    slug: "decupaj-decorativ",
    name: "Decupaj decorativ",
    description:
      "Modele cu inserții vitrate și decupaje încadrate cu elemente din lemn de 8–10 cm. Geamul mat sablat este inclus în preț.",
    count: 1,
  },
];

export default function UsiDeInteriorPage() {
  return (
    <>
      <JsonLd data={[doorProductSchema, doorBreadcrumb]} />
      <PageHero
        title="Uși de interior pe comandă în București și Ilfov"
        description="Uși din furnir natural de stejar, executate pe comandă în șapte configurații, de la 1.850 lei cu TVA. Feronerie, geam mat sablat și consultanță incluse."
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <p className="lead">
              Producem uși de interior pe comandă pentru locuințe din București și Ilfov, în
              dimensiunile rezultate din măsurătorile efectuate la fața locului. Spre deosebire de
              ușile de stoc din marile magazine, fiecare ansamblu — foaie, toc, căptușeală și
              pervazuri — este executat pentru golul tău de ușă, ceea ce înseamnă că nu ești limitat
              la dimensiunile standard și nu ai nevoie de ajustări în zid.
            </p>
            <p>
              Toate modelele folosesc furnir natural de stejar aplicat pe MDF de 4&nbsp;mm, cu ramă
              din lemn de brad stratificat și finisaj în trei straturi (baiț, grund, lac). Detaliile
              constructive complete — grosimi, tipuri de toc, feronerie — sunt descrise pe pagina{" "}
              <Link href="/structura-usilor">structura ușilor</Link>.
            </p>
          </article>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Modele și prețuri"
            description="Prețurile de mai jos includ TVA, feroneria (trei balamale, broască și mâner) și geamul mat sablat acolo unde modelul are decupaj. Nu sunt costuri ascunse pentru elementele standard."
          />

          <div className="mt-10 flex flex-col gap-5">
            {doorModels.map((model) => (
              <Link
                key={model.slug}
                href={`/usi-de-interior/${model.slug}`}
                className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-heading text-lg font-semibold text-primary">{model.name}</h3>
                  <p className="whitespace-nowrap font-semibold text-primary">
                    de la {model.price.toLocaleString("ro-RO")} lei
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {model.summary}
                </p>
                <p className="mt-3 text-sm font-medium text-accent-text">
                  Vezi detalii despre {model.name.toLowerCase()} →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-heading text-lg font-semibold text-primary">Ce se adaugă la preț</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                Montaj în București: 305 lei cu TVA — vezi{" "}
                <Link href="/servicii/montaj" className="text-accent-text underline">
                  ce include montajul
                </Link>
                .
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                Uși vopsite: +450 lei / ușă, calculat inclusiv pentru pervazuri și căptușeală.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                Căptușeală pentru ziduri groase: 175 lei (zid 15 cm) sau 350 lei (zid 25 cm).
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                Pervaz drept sau semirotund: 250 lei / set. Luminator: 450 lei.
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Lista completă, inclusiv ușile de debara, este pe pagina de{" "}
              <Link href="/preturi" className="text-accent-text underline">
                prețuri
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {finishes.map((finish, index) => (
        <Section key={finish.slug} className={index % 2 === 1 ? "bg-muted/40" : undefined}>
          <Container>
            <SectionHeading title={finish.name} description={finish.description} />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {Array.from({ length: finish.count }).map((_, i) => {
                const num = String(i + 1).padStart(2, "0");
                const src = `/images/usi/${finish.slug}/${finish.slug === "decupaj-decorativ" ? "decupaj" : finish.slug === "nuc-ciresi" ? "nuc" : finish.slug}-${num}.webp`;
                return (
                  <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                    <Image
                      src={src}
                      alt={`Ușă de interior finisaj ${finish.name}`}
                      fill
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <h2>Cum se desfășoară o comandă</h2>
            <p>
              Procesul are patru etape și durează, de regulă, câteva săptămâni de la prima discuție
              până la predarea lucrării. Termenul exact depinde de model, finisaj și de numărul de
              uși, și este comunicat în ofertă.
            </p>
            <ol>
              <li>
                <strong>Discuția inițială.</strong> Ne spui câte uși ai nevoie, în ce localitate se
                află proiectul și ce stil preferi. Poți trimite fotografii sau dimensiuni orientative.
              </li>
              <li>
                <strong>
                  <Link href="/servicii/consultanta-masuratori">Consultanță și măsurători</Link>.
                </strong>{" "}
                Verificăm dimensiunile golurilor, grosimea zidurilor și particularitățile spațiului.
                Aici se stabilește dacă e nevoie de căptușeală și ce tip de toc se potrivește.
              </li>
              <li>
                <strong>Oferta fermă.</strong> După măsurători, prețul se confirmă pe configurația
                reală. Prețurile din listă rămân punctul de plecare.
              </li>
              <li>
                <strong>
                  <Link href="/servicii/montaj">Montajul</Link>.
                </strong>{" "}
                Instalarea, verificarea alinierii, testarea deschiderii și predarea lucrării.
              </li>
            </ol>

            <h2>Zona în care livrăm și montăm</h2>
            <p>
              Lucrăm cu clienți din București — inclusiv Sectorul 3, unde se află atelierul nostru de
              pe Strada Vitejilor — și din localitățile apropiate din județul Ilfov. Pentru proiecte
              din afara acestei zone, disponibilitatea montajului se confirmă în funcție de adresă
              atunci când ne{" "}
              <Link href="/contact">contactezi</Link>.
            </p>

            <h2>Nu știi ce model să alegi?</h2>
            <p>
              Dacă ezită între două finisaje sau nu ești sigur dacă îți trebuie ușă glisantă,
              spune-ne cum arată spațiul și cum îl folosești. Cele mai frecvente nelămuriri —
              termene, garanție, comenzi fără montaj — sunt tratate în{" "}
              <Link href="/intrebari-frecvente">întrebările frecvente</Link>, iar exemple din
              lucrări finalizate găsești în{" "}
              <Link href="/proiecte">galeria de proiecte</Link>.
            </p>
          </article>
        </Container>
      </Section>

      <CtaBanner
        title="Cere o recomandare personalizată"
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />
    </>
  );
}
