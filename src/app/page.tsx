import type { Metadata } from "next";
import Image from "next/image";
import { Ruler, Hammer, ClipboardList, Users, Wrench, ListChecks, Layers, FileText, MessageSquare } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { IconFeatureGrid } from "@/components/sections/IconFeatureGrid";
import { CardGrid } from "@/components/sections/CardGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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

      <IconFeatureGrid
        eyebrow="De ce Parquet Doors"
        title="Tot ce ai nevoie, de la alegerea modelului până la montaj"
        description="Nu alegi doar o ușă. Alegi un element important din designul și funcționalitatea locuinței tale. De aceea, îți oferim sprijin în fiecare etapă."
        items={[
          {
            icon: Users,
            title: "Consultanță personalizată",
            description:
              "Te ajutăm să alegi modelul, finisajul și configurația potrivite pentru locuința ta, ținând cont de stil, spațiu și buget.",
          },
          {
            icon: Ruler,
            title: "Măsurători corecte",
            description:
              "Realizăm măsurătorile necesare pentru a reduce riscul incompatibilităților și al ajustărilor neprevăzute în timpul instalării.",
          },
          {
            icon: Hammer,
            title: "Montaj profesionist",
            description:
              "Montajul este realizat atent, pentru o funcționare corectă și un rezultat final curat și bine integrat în spațiu.",
          },
          {
            icon: ClipboardList,
            title: "Proces clar",
            description:
              "Primești informații despre etape, opțiuni și costuri, astfel încât să poți lua o decizie informată.",
          },
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

      <CardGrid
        eyebrow="Servicii"
        title="Servicii pentru un proces complet și bine organizat"
        description="Te sprijinim de la alegerea soluției potrivite până la instalarea finală."
        columns={4}
        items={[
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
          {
            icon: ListChecks,
            title: "Asistență pentru alegerea modelului",
            description: "Te ajutăm să compari variantele și să alegi în funcție de design, utilizare, întreținere și compatibilitatea cu interiorul.",
          },
        ]}
      />

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

      <Section>
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Despre noi" title="Soluții potrivite pentru fiecare locuință" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Parquet Doors | CMG International SRL oferă uși de interior și servicii de consultanță,
              măsurători și montaj pentru proiecte rezidențiale. Punem accent pe alegerea corectă a
              produsului, măsurători bine realizate și un proces de instalare atent organizat.
            </p>
            <Button href="/despre-noi" variant="outline" className="mt-6">
              Discută cu un consultant
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Atenție la detalii", text: "Verificăm elementele importante înainte de comandă și montaj." },
              { title: "Recomandări clare", text: "Îți prezentăm opțiunile într-un mod simplu și ușor de înțeles." },
              { title: "Soluții personalizate", text: "Recomandările sunt adaptate spațiului și nevoilor fiecărui client." },
              { title: "Respect pentru locuința ta", text: "Montajul este realizat cu grijă, pentru un rezultat curat și bine integrat." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <IconFeatureGrid
        className="bg-muted/40"
        eyebrow="Diferențiatori"
        title="De ce să alegi Parquet Doors"
        columns={3}
        items={[
          { icon: MessageSquare, title: "Consultanță înainte de comandă", description: "Primești recomandări bazate pe nevoile și particularitățile locuinței tale." },
          { icon: Ruler, title: "Măsurători realizate înainte de montaj", description: "Dimensiunile sunt verificate pentru o pregătire mai bună a proiectului." },
          { icon: Layers, title: "Servicii integrate", description: "Poți beneficia de consultanță, măsurători și montaj printr-un singur furnizor." },
          { icon: FileText, title: "Ofertă adaptată proiectului", description: "Costurile sunt stabilite în funcție de modelele, dimensiunile și serviciile selectate." },
          { icon: ListChecks, title: "Comunicare clară", description: "Primești informații despre pașii următori și detaliile necesare înainte de confirmarea comenzii." },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Proiecte" title="Inspirație pentru locuința ta" description="Descoperă exemple de uși integrate în diferite tipuri de amenajări și folosește-le ca punct de plecare pentru propriul proiect." align="center" className="mx-auto" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["proiect-01", "proiect-02", "proiect-06", "proiect-11"].map((slug) => (
              <div key={slug} className="relative aspect-square overflow-hidden rounded-xl border border-border">
                <Image
                  src={`/images/proiecte/${slug}.webp`}
                  alt="Proiect realizat de Parquet Doors"
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
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
            name: "[NUME CLIENT]",
            location: "[LOCALITATE]",
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
        items={[
          {
            question: "Cum pot solicita o ofertă?",
            answer: "Scrie-ne pe WhatsApp sau trimite-ne un e-mail și menționează numărul aproximativ de uși, localitatea și serviciile de care ai nevoie. Te vom contacta pentru a solicita informațiile suplimentare necesare.",
          },
          {
            question: "Oferiți și servicii de măsurare?",
            answer: "Da. Putem realiza măsurătorile necesare înainte de pregătirea sau confirmarea comenzii.",
          },
          {
            question: "Asigurați montajul ușilor?",
            answer: "Da. Oferim servicii de montaj pentru ușile comandate, în funcție de localitatea proiectului și de disponibilitate.",
          },
        ]}
      />

      <div className="pb-16 text-center">
        <Button href="/intrebari-frecvente" variant="outline">
          Vezi toate întrebările frecvente
        </Button>
      </div>
    </>
  );
}
