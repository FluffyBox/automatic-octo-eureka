import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, offerCatalogSchema, webPageSchema } from "@/lib/schema";
import { priceCategories, pricingNotes } from "@/lib/pricing";

export const metadata: Metadata = {
  alternates: { canonical: "/preturi" },
  title: "Prețuri uși de interior 2026",
  description:
    "Lista de prețuri pentru uși de interior, debara, căptușeală, pervaz și montaj. Prețuri actualizate 2026, TVA inclus.",
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
