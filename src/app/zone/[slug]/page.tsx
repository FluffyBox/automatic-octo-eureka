import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceAreaSchema } from "@/lib/schema";
import { zones, getZone } from "@/lib/zones";

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) return {};
  return {
    title: zone.metaTitle,
    description: zone.metaDescription,
    alternates: { canonical: `/zone/${slug}` },
  };
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: "Acasă", path: "" },
    { name: "Zone deservite", path: "/servicii" },
    { name: zone.name, path: `/zone/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[serviceAreaSchema(zone), breadcrumb]} />
      <PageHero
        title={zone.heroTitle}
        description={zone.heroDescription}
        cta={{ label: "Solicită o ofertă", href: "/oferta" }}
      />

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            {zone.body.map((block) => (
              <section key={block.heading}>
                <h2>{block.heading}</h2>
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </section>
            ))}

            <h2>Modele și prețuri</h2>
            <p>
              Gama și prețurile sunt aceleași indiferent de zonă: șapte configurații, de la 1.850
              lei cu TVA pentru{" "}
              <Link href="/usi-de-interior/usi-cu-toc-pline">ușa cu toc plină</Link> până la 2.650
              lei pentru <Link href="/usi-de-interior/usi-glisante-masive">ușa glisantă masivă</Link>
              . Lista completă este pe pagina de <Link href="/preturi">prețuri</Link>, iar toate
              modelele sunt descrise pe pagina de{" "}
              <Link href="/usi-de-interior">uși de interior</Link>.
            </p>

            <h2>Cum începem</h2>
            <p>
              Spune-ne câte uși ai nevoie și adresa exactă, ca să confirmăm programarea și tariful
              de deplasare. Urmează{" "}
              <Link href="/servicii/consultanta-masuratori">măsurătorile la domiciliu</Link>, după
              care primești o ofertă fermă. Poți scrie pe WhatsApp sau ne poți{" "}
              <Link href="/contact">contacta telefonic</Link>.
            </p>
          </article>
        </Container>
      </Section>

      <CtaBanner
        title={`Ai un proiect în ${zone.name}?`}
        description="Trimite-ne numărul de uși și adresa, iar noi confirmăm programarea măsurătorilor."
        primaryCta={{ label: "Solicită o ofertă", href: "/oferta" }}
        secondaryCta={{ label: "Vezi prețurile", href: "/preturi" }}
      />
    </>
  );
}
