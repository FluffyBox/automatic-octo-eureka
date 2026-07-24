// PLACEHOLDER VALUES — replace every field below with real business info before launch.
// See README.md for the full pre-launch checklist.
export const siteConfig = {
  brandName: "Parquet Doors",
  legalName: "CMG International SRL",
  url: "https://www.parquetdoors.ro", // PLACEHOLDER — set to the real production domain
  phone: "+40 700 000 000", // PLACEHOLDER
  phoneHref: "+40700000000", // PLACEHOLDER — digits only, used in tel: links
  email: "placeholder@mail.com", // PLACEHOLDER
  whatsappNumber: "40700000000", // PLACEHOLDER — country code + number, no + or spaces (wa.me format)
  address: "Completează adresa aici", // PLACEHOLDER
  hours: "Luni - Vineri, 09:00 - 18:00", // PLACEHOLDER
  socialLinks: {
    facebook: "", // PLACEHOLDER
    instagram: "", // PLACEHOLDER
  },
};

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

export const defaultWhatsappMessage =
  "Bună ziua! Doresc o ofertă pentru uși de interior. Proiectul se află în [LOCALITATE], iar numărul aproximativ de uși este [NUMĂR]. Mă interesează și serviciile de [CONSULTANȚĂ / MĂSURĂTORI / MONTAJ].";
