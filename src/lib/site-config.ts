// PLACEHOLDER VALUES — replace remaining fields below with real business info before launch.
// See README.md for the full pre-launch checklist.
export const siteConfig = {
  brandName: "Parquet Doors",
  legalName: "CMG International SRL",
  // PLACEHOLDER — replace with the real trade register number (Nr. Reg. Com.) and CUI/VAT id before launch.
  registrationNumber: "J00/0000/0000",
  vatId: "RO00000000",
  url: "https://www.parchet-usi.ro", // canonical production domain (parket-usi.ro redirects here)
  // One-sentence entity description. Reused by the JSON-LD Organization /
  // LocalBusiness / WebSite nodes and by llms.txt, so AI engines get a single
  // consistent answer to "what is this business".
  description:
    "Parquet Doors (CMG International SRL) vinde și montează uși de interior în București și Ilfov, cu servicii de consultanță, măsurători la domiciliu și montaj profesionist.",
  phone: "0722 261 712",
  phoneHref: "+40722261712", // E.164 format for tel: links
  email: "cmg_int@yahoo.com",
  whatsappNumber: "40722261712",
  address: "Strada Vitejilor 29, 031525 București", // from Google Business Profile
  // Structured address (used for LocalBusiness JSON-LD). Keep in sync with `address` above.
  addressParts: {
    streetAddress: "Strada Vitejilor 29",
    postalCode: "031525",
    addressLocality: "București",
    addressRegion: "București",
    addressCountry: "RO",
  },
  hours: "Luni - Vineri, 09:00 - 18:00", // PLACEHOLDER — Google listing only confirms opening time (09:00), not full schedule
  // Machine-readable opening hours for JSON-LD (schema.org OpeningHoursSpecification / string form).
  openingHours: "Mo-Fr 09:00-18:00",
  // Indicative price band for the LocalBusiness (RON). Range of standalone door prices
  // (1850–2650 lei); excludes per-mp (debara) and per-set (pervaz) line items.
  priceRange: "1850–2650 RON",
  areaServed: "București și împrejurimi",
  googleRating: { value: 5.0, count: 6 }, // from Google Business Profile ("Parchet Uși | CMG International SRL")
  socialLinks: {
    facebook: "", // PLACEHOLDER
    instagram: "", // PLACEHOLDER
  },
};

// Fields that still hold placeholder values and MUST be replaced before launch.
// Used to emit a build/runtime warning so they can't ship silently.
export const placeholderFields: Array<keyof typeof siteConfig> = [
  "registrationNumber",
  "vatId",
];

/** True when any launch-blocking placeholder value is still present. */
export function hasPlaceholderContact(): boolean {
  return siteConfig.vatId === "RO00000000";
}

// Warn loudly in development if placeholder business data is still in place.
if (process.env.NODE_ENV !== "production" && hasPlaceholderContact()) {
  console.warn(
    "[site-config] PLACEHOLDER business data detected (Reg. Com. / VAT). " +
      "Replace the placeholder fields in src/lib/site-config.ts before launch — " +
      "the LocalBusiness schema and footer legal line will be wrong until you do."
  );
}

/** Absolute canonical URL for a given path (path should start with "/", "" = home). */
export function canonicalUrl(path: string = ""): string {
  return `${siteConfig.url}${path}`;
}

/** Non-empty social profile URLs, for schema.org `sameAs`. */
export function socialProfiles(): string[] {
  return Object.values(siteConfig.socialLinks).filter(Boolean);
}

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:${siteConfig.phoneHref}`;
}

export function mailtoHref(subject?: string) {
  return subject
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${siteConfig.email}`;
}

export function googleMapsEmbedSrc() {
  return `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;
}

export function googleMapsDirectionsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;
}

export const defaultWhatsappMessage =
  "Bună ziua! Doresc o ofertă pentru uși de interior. Proiectul se află în [LOCALITATE], iar numărul aproximativ de uși este [NUMĂR]. Mă interesează și serviciile de [CONSULTANȚĂ / MĂSURĂTORI / MONTAJ].";
