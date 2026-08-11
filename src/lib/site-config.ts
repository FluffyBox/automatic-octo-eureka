// Business identity. The legal fields below are the real registry values,
// verified against ANAF (the Romanian tax authority) on 2026-08-11: the record
// for CUI 22106445 matches this business on both registered address
// (Str. Vitejilor 29, Sector 3) and phone (0722261712).
export const siteConfig = {
  brandName: "Parquet Doors",
  // Exact registered name per ANAF — note it is "…Consult SRL", which is what
  // must appear on the site for Romanian e-commerce disclosure purposes.
  legalName: "CMG International Consult SRL",
  registrationNumber: "J40/13519/2007",
  vatId: "RO22106445",
  url: "https://www.parchet-usi.ro", // canonical production domain (parket-usi.ro redirects here)
  // One-sentence entity description. Reused by the JSON-LD Organization /
  // LocalBusiness / WebSite nodes and by llms.txt, so AI engines get a single
  // consistent answer to "what is this business".
  description:
    "Parquet Doors (CMG International Consult SRL) vinde și montează uși de interior în București și Ilfov, cu servicii de consultanță, măsurători la domiciliu și montaj profesionist.",
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

// Fields that still hold unconfirmed values. The legal identifiers (Reg. Com.,
// CUI) were resolved from the ANAF registry; what remains is data no public
// registry can settle and that the owner has to confirm.
export const placeholderFields: Array<keyof typeof siteConfig> = [
  "hours", // Google Business Profile only confirms the 09:00 opening time
  "socialLinks", // no Facebook/Instagram URLs supplied yet
];

/** True while any unconfirmed business data is still in place. */
export function hasPlaceholderContact(): boolean {
  return !siteConfig.socialLinks.facebook && !siteConfig.socialLinks.instagram;
}

// Warn in development while unconfirmed business data remains.
if (process.env.NODE_ENV !== "production" && hasPlaceholderContact()) {
  console.warn(
    "[site-config] Unconfirmed business data: no social profile URLs are set, " +
      "so schema.org `sameAs` is omitted. The opening hours beyond 09:00 are " +
      "also unconfirmed. See placeholderFields in src/lib/site-config.ts."
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
