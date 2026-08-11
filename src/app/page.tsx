import type { Metadata } from "next";
import Image from "next/image";
import { Ruler, Hammer, ClipboardList, Users, Wrench, ListChecks, Layers, MessageSquare, Target, Eye } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { IconStrip } from "@/components/sections/IconStrip";
import { CardGrid } from "@/components/sections/CardGrid";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { CustomDoorConfigurator } from "@/components/sections/CustomDoorConfigurator";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Uși de interior, măsurători și montaj",
  description:
    "Descoperă uși de interior potrivite locuinței tale. Beneficiezi de consultanță, măsurători și montaj profesionist. Solicită o ofertă personalizată.",
};

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Uși de interior pentru locuințe moderne"
        title="Uși care completează designul casei tale"
        description="Alege uși de interior potrivite stilului, spațiului și nevoilor tale. Te ajutăm cu recomandări, măsurători și montaj, astfel încât întregul proces să fie simplu, clar și bine organizat."
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
        secondaryCta={{ label: "Descoperă modelele", href: "/usi-de-interior" }}
        trustText="Consultanță personalizată • Măsurători • Montaj"
        image={{ src: "/images/usi/stejar-auriu/stejar-auriu-06.webp", alt: "Ușă de interior din stejar auriu, cu toc și pervaz asortate" }}
      />

      <AboutSplit
        eyebrow="Despre noi"
        title="Soluții potrivite pentru fiecare locuință"
        description="Parquet Doors | CMG International SRL oferă uși de interior și servicii de consultanță, măsurători și montaj pentru proiecte rezidențiale. Punem accent pe alegerea corectă a produsului, măsurători bine realizate și un proces de instalare atent organizat."
        stat={{ value: "100%", label: "Furnir natural de stejar" }}
        image={{ src: "/images/usi/stejar-auriu/stejar-auriu-01.webp", alt: "Ușă de interior din stejar auriu, montată într-o locuință" }}
        cta={{ label: "Discută cu un consultant", href: "/despre-noi" }}
        items={[
          {
            icon: Target,
            title: "Misiune",
            description: "Să oferim clienților rezidențiali soluții clare și potrivite pentru alegerea și instalarea ușilor de interior.",
          },
          {
            icon: Eye,
            title: "Viziune",
            description: "Să construim relații bazate pe încredere, recomandări corecte și lucrări realizate cu atenție.",
          },
        ]}
      />

      <IconStrip
        items={[
          { icon: Users, label: "Consultanță personalizată" },
          { icon: Ruler, label: "Măsurători corecte" },
          { icon: Hammer, label: "Montaj profesionist" },
          { icon: ClipboardList, label: "Proces clar" },
          { icon: Layers, label: "Servicii integrate" },
          { icon: MessageSquare, label: "Comunicare clară" },
        ]}
      />

      <CardGrid
        className="bg-muted/40"
        eyebrow="Colecția noastră"
        title="Uși de interior pentru fiecare stil de amenajare"
        description="De la interioare minimaliste la amenajări clasice sau contemporane, te ajutăm să identifici ușa potrivită pentru fiecare încăpere."
        columns={4}
        note="Disponibilitatea modelelor, dimensiunilor și finisajelor se confirmă în momentul solicitării ofertei."
        items={[
          {
            title: "Uși moderne",
            description: "Linii curate, finisaje actuale și un aspect simplu, potrivit locuințelor moderne și minimaliste.",
            image: { src: "/images/usi/wenge/wenge-02.webp", alt: "Ușă modernă din lemn wenge, cu insert vertical din sticlă mată" },
            cta: { label: "Solicită detalii", href: "/usi-de-interior" },
          },
          {
            title: "Uși clasice",
            description: "Modele cu un aspect elegant și echilibrat, potrivite amenajărilor tradiționale sau rafinate.",
            image: { src: "/images/usi/stejar-auriu/stejar-auriu-01.webp", alt: "Ușă clasică din stejar auriu, cu geam mat sectionat" },
            cta: { label: "Solicită detalii", href: "/usi-de-interior" },
          },
          {
            title: "Uși cu inserții decorative",
            description: "Soluții potrivite pentru spațiile în care designul și detaliile vizuale au un rol important.",
            image: { src: "/images/usi/decupaj-decorativ/decupaj-01.webp", alt: "Ușă cu decupaj decorativ trapezoidal din sticlă mată" },
            cta: { label: "Solicită detalii", href: "/usi-de-interior" },
          },
          {
            title: "Uși în finisaje variate",
            description: "Alege din mai multe texturi, nuanțe și variante de finisaj pentru a integra ușile în paleta cromatică a locuinței.",
            image: { src: "/images/usi/nuc-ciresi/nuc-01.webp", alt: "Ușă de interior în finisaj nuc, model cu panou plin" },
            cta: { label: "Vezi opțiunile", href: "/usi-de-interior" },
          },
        ]}
      />

      <ServicesShowcase
        eyebrow="Serviciile noastre"
        title="Servicii complete pentru uși de interior"
        description="Suntem alături de tine de la alegerea modelului până la montajul final, pentru un proces simplu, clar și bine organizat."
        left={[
          {
            icon: MessageSquare,
            title: "Consultanță",
            description: "Analizăm nevoile tale și îți prezentăm opțiuni potrivite pentru stilul locuinței, dimensiunile disponibile și bugetul estimat.",
          },
          {
            icon: Ruler,
            title: "Măsurători",
            description: "Verificăm dimensiunile golurilor de ușă și particularitățile spațiului înainte de comandă și montaj.",
          },
          {
            icon: Wrench,
            title: "Montaj",
            description: "Instalăm ușile cu atenție la aliniere, funcționare și finisaj, pentru un rezultat cât mai curat și durabil.",
          },
        ]}
        right={[
          {
            icon: ListChecks,
            title: "Asistență pentru alegerea modelului",
            description: "Te ajutăm să compari variantele și să alegi în funcție de design, utilizare și compatibilitatea cu interiorul.",
          },
          {
            icon: Layers,
            title: "Servicii integrate",
            description: "Poți beneficia de consultanță, măsurători și montaj printr-un singur furnizor.",
          },
          {
            icon: MessageSquare,
            title: "Comunicare clară",
            description: "Primești informații despre pașii următori și detaliile necesare înainte de confirmarea comenzii.",
          },
        ]}
      />

      <CustomDoorConfigurator />

      <ProcessSteps
        className="bg-muted/40"
        eyebrow="Cum lucrăm"
        title="De la idee la ușa montată, în câțiva pași simpli"
        cta={{ label: "Începe cu o cerere de ofertă", href: "/oferta" }}
        steps={[
          { title: "Ne trimiți solicitarea", description: "Completezi formularul și ne spui câte uși ai nevoie, ce stil preferi și unde se află proiectul." },
          { title: "Discutăm opțiunile", description: "Îți prezentăm variantele disponibile și stabilim ce soluții se potrivesc spațiului tău." },
          { title: "Realizăm măsurătorile", description: "Verificăm dimensiunile și detaliile tehnice necesare pentru pregătirea ofertei și a montajului." },
          { title: "Primești oferta", description: "Îți transmitem o ofertă personalizată, în funcție de modelele selectate, dimensiuni și serviciile solicitate." },
          { title: "Stabilim montajul", description: "După confirmarea comenzii, programăm montajul și finalizăm instalarea." },
        ]}
      />

      <WhyChooseUs
        className="bg-muted/40"
        eyebrow="Diferențiatori"
        title="De ce să alegi Parquet Doors"
        description="Cu accent pe consultanță, măsurători corecte și servicii integrate, te ajutăm să obții un rezultat curat, bine organizat și adaptat proiectului tău."
        checklist={[
          "Consultanță înainte de comandă",
          "Măsurători înainte de montaj",
          "Servicii integrate, un singur furnizor",
          "Ofertă adaptată proiectului",
          "Comunicare clară pe tot parcursul",
        ]}
        stats={[
          { value: "5+", label: "Nuanțe de finisaj disponibile" },
          { value: "3-în-1", label: "Consultanță, măsurători și montaj" },
          { value: "5.0★", label: "Rating Google (6 recenzii)" },
        ]}
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
        images={{
          main: { src: "/images/proiecte/proiect-03.webp", alt: "Ușă de interior instalată de Parquet Doors" },
          secondary: { src: "/images/usi/wenge/wenge-04.webp", alt: "Detaliu ușă modernă din lemn wenge" },
        }}
      />

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Prețuri"
            title="Prețuri orientative pentru uși de interior"
            description="Prețul final se confirmă întotdeauna după măsurători. Vezi lista completă cu toate variantele, accesoriile și montajul."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { name: "Ușă cu toc plină", price: "1850 lei", description: "Cea mai accesibilă variantă, cu toc și feronerie incluse." },
              { name: "Ușă stratificată", price: "2450 lei", description: "Finisaj rezistent, potrivit locuințelor cu trafic ridicat." },
              { name: "Montaj în București", price: "305 lei", description: "Montaj profesionist, realizat după măsurători." },
            ].map((item) => (
              <div key={item.name} className="flex flex-col rounded-2xl border border-border bg-card p-8 text-center">
                <h3 className="font-heading text-lg font-semibold text-primary">{item.name}</h3>
                <p className="mt-4 font-heading text-3xl font-bold text-primary">{item.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/preturi" variant="primary">
              Vezi lista completă de prețuri
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-text">
                <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Proiecte
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-primary sm:text-4xl">
                Inspirație pentru locuința ta
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Descoperă exemple de uși integrate în diferite tipuri de amenajări și folosește-le ca
              punct de plecare pentru propriul proiect.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { slug: "proiect-01", alt: "Ușă de interior modernă montată într-un living amenajat" },
              { slug: "proiect-02", alt: "Ușă de interior din stejar auriu într-un hol luminos" },
              { slug: "proiect-06", alt: "Ușă de interior cu finisaj închis, integrată într-un dormitor" },
              { slug: "proiect-11", alt: "Ușă de interior cu toc și pervaz asortate, montată de Parquet Doors" },
              { slug: "proiect-14", alt: "Ușă de interior contemporană într-o amenajare minimalistă" },
              { slug: "proiect-03", alt: "Ușă de interior instalată profesionist într-un apartament" },
            ].map(({ slug, alt }) => (
              <div key={slug} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <Image
                  src={`/images/proiecte/${slug}.webp`}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/proiecte" variant="outline">
              Vezi proiectele
            </Button>
          </div>
        </Container>
      </Section>

      <Testimonials
        className="bg-muted/40"
        eyebrow="Recenzii"
        title="Experiențele clienților noștri"
        description="Descoperă părerile clienților care au ales serviciile noastre pentru proiectele lor rezidențiale."
        items={[
          {
            quote: "Am primit recomandări clare, iar procesul de măsurare și montaj a fost bine organizat.",
            name: "Andrei Popescu",
            location: "București",
          },
          {
            quote: "Ne-au ajutat să alegem finisajul potrivit pentru fiecare cameră, iar montajul a decurs fără probleme.",
            name: "Maria Ionescu",
            location: "Otopeni",
          },
          {
            quote: "Măsurătorile au fost precise, iar ușile s-au potrivit perfect la montaj, fără ajustări ulterioare.",
            name: "Cristian Dumitru",
            location: "Voluntari",
          },
          {
            quote: "Comunicare clară de la prima discuție până la finalizarea lucrării. Recomand cu încredere.",
            name: "Elena Stan",
            location: "Ploiești",
          },
          {
            quote: "Echipa a fost punctuală și atentă la detalii, iar rezultatul final arată exact cum ne-am dorit.",
            name: "Alexandru Radu",
            location: "Pantelimon",
          },
          {
            quote: "Ne-au oferit variante potrivite bugetului nostru, fără să insiste pe cele mai scumpe modele.",
            name: "Ioana Marin",
            location: "Buftea",
          },
        ]}
      />

      <CtaBanner
        title="Cauți uși potrivite pentru locuința ta?"
        description="Spune-ne câte uși ai nevoie, ce stil preferi și unde se află proiectul. Îți vom solicita informațiile necesare pentru a pregăti o ofertă adaptată cerințelor tale."
        primaryCta={{ label: "Solicită oferta", href: "/oferta" }}
        note="Completarea formularului nu implică nicio obligație de cumpărare."
      />

      <FaqSection
        eyebrow="Întrebări frecvente"
        title="Răspunsuri la întrebările tale"
        items={homeFaqs}
      />
      <JsonLd data={faqSchema(homeFaqs)} />

      <div className="pb-16 text-center">
        <Button href="/intrebari-frecvente" variant="outline">
          Vezi toate întrebările frecvente
        </Button>
      </div>
    </>
  );
}
