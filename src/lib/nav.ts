import { doorModels } from "@/lib/doors";

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Acasă", href: "/" },
  { label: "Despre noi", href: "/despre-noi" },
  {
    label: "Uși de interior",
    href: "/usi-de-interior",
    // Model pages hang off the category page so every one of them is reachable
    // from the header on every page, not just from the category page body.
    children: doorModels.map((model) => ({
      label: model.name,
      href: `/usi-de-interior/${model.slug}`,
    })),
  },
  { label: "Prețuri", href: "/preturi" },
  { label: "Structura ușilor", href: "/structura-usilor" },
  {
    label: "Servicii",
    href: "/servicii",
    children: [
      { label: "Consultanță și măsurători", href: "/servicii/consultanta-masuratori" },
      { label: "Montaj", href: "/servicii/montaj" },
    ],
  },
  { label: "Proiecte", href: "/proiecte" },
  { label: "Întrebări frecvente", href: "/intrebari-frecvente" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const navCta = { label: "Solicită o ofertă", href: "/oferta" };

export const footerQuickLinks: NavLink[] = [
  { label: "Acasă", href: "/" },
  { label: "Despre noi", href: "/despre-noi" },
  { label: "Uși de interior", href: "/usi-de-interior" },
  { label: "Prețuri", href: "/preturi" },
  { label: "Servicii", href: "/servicii" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Consultanță", href: "/servicii/consultanta-masuratori" },
  { label: "Măsurători", href: "/servicii/consultanta-masuratori" },
  { label: "Montaj", href: "/servicii/montaj" },
  { label: "Cerere de ofertă", href: "/oferta" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Politica de confidențialitate", href: "/politica-de-confidentialitate" },
  { label: "Politica de cookie-uri", href: "/politica-de-cookie-uri" },
  { label: "Termeni și condiții", href: "/termeni-si-conditii" },
];

export const blogCategories = [
  "Alegerea ușilor",
  "Design interior",
  "Măsurători",
  "Montaj",
  "Întreținere",
  "Ghiduri pentru renovare",
] as const;
