import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerQuickLinks, footerServiceLinks, footerLegalLinks } from "@/lib/nav";
import { siteConfig, telHref, mailtoHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-semibold">
            Parquet <span className="text-accent">Doors</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-dark-foreground/70">
            {siteConfig.brandName} | {siteConfig.legalName} oferă uși de interior și servicii de
            consultanță, măsurători și montaj pentru proiecte rezidențiale.
          </p>
          <div className="mt-4 space-y-1 text-sm text-dark-foreground/70">
            <p>
              <a href={telHref()} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={mailtoHref()} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-foreground/50">
            Linkuri rapide
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-dark-foreground/80 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-foreground/50">
            Servicii
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-dark-foreground/80 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-foreground/50">
            Informații juridice
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-dark-foreground/80 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-dark-foreground/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-dark-foreground/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName} | {siteConfig.legalName}. Toate
            drepturile rezervate.
          </p>
        </Container>
      </div>
    </footer>
  );
}
