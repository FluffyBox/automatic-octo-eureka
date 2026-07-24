import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container as C } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Află mai multe despre Parquet Doors și serviciile de consultanță, măsurători și montaj pentru uși de interior.",
};

export default function DespreNoiPage() {
  return (
    <>
      <PageHero
        title="Te ajutăm să alegi ușile potrivite pentru casa ta"
        description="Combinăm consultanța, măsurătorile și montajul pentru a oferi clienților rezidențiali un proces simplu și bine organizat."
      />

      <Section>
        <C className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-primary">Povestea companiei</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Parquet Doors | CMG International SRL oferă soluții pentru clienții care își
              amenajează, renovează sau finalizează locuința și au nevoie de uși de interior
              potrivite spațiului lor.
            </p>
            <p>
              Înțelegem că alegerea poate deveni dificilă atunci când există numeroase modele,
              finisaje și configurații. Rolul nostru este să simplificăm procesul, să oferim
              informații clare și să recomandăm opțiuni adaptate fiecărui proiect.
            </p>
            <p>
              De la discuția inițială până la măsurători și montaj, urmărim ca fiecare etapă să fie
              bine pregătită.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-primary">Misiune</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Să oferim clienților rezidențiali soluții clare și potrivite pentru alegerea și
                instalarea ușilor de interior.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-primary">Viziune</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Să construim relații bazate pe încredere, recomandări corecte și lucrări realizate
                cu atenție.
              </p>
            </div>
          </div>
        </C>
      </Section>

      <CtaBanner
        title="Spune-ne ce fel de proiect ai"
        description="Te ajutăm să identifici soluțiile potrivite și să obții o ofertă personalizată."
        primaryCta={{ label: "Contactează-ne", href: "/contact" }}
      />
    </>
  );
}
