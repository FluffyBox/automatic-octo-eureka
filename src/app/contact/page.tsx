import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactOptions } from "@/components/sections/ContactOptions";
import { GoogleMap } from "@/components/sections/GoogleMap";
import { GoogleRatingBadge } from "@/components/sections/GoogleRatingBadge";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact și cereri de ofertă",
  description: "Contactează Parquet Doors pentru uși de interior, consultanță, măsurători și montaj. Solicită o ofertă personalizată.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Hai să discutăm despre proiectul tău"
        description="Ai nevoie de ajutor pentru alegerea ușilor de interior? Contactează-ne și spune-ne ce tip de proiect ai. Îți vom prezenta pașii necesari pentru a primi o ofertă."
      />

      <Section>
        <Container className="max-w-4xl">
          <div className="flex flex-col items-center gap-3">
            <SectionHeading title="Spune-ne cu ce te putem ajuta" align="center" className="mx-auto" />
            <GoogleRatingBadge className="text-primary" />
          </div>
          <div className="mt-12">
            <ContactOptions />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-card p-8 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold text-primary">Adresă</p>
              <p className="mt-1 text-muted-foreground">{siteConfig.address}</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Program</p>
              <p className="mt-1 text-muted-foreground">{siteConfig.hours}</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Date de contact</p>
              <p className="mt-1 text-muted-foreground">
                {siteConfig.phone}
                <br />
                {siteConfig.email}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <GoogleMap />
          </div>
        </Container>
      </Section>
    </>
  );
}
