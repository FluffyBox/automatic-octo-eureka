// PLACEHOLDER VALUES — replace remaining fields below with real business info before launch.
// See README.md for the full pre-launch checklist.
export const siteConfig = {
  brandName: "Parquet Doors",
  legalName: "CMG International SRL",
  // PLACEHOLDER — replace with the real trade register number (Nr. Reg. Com.) and CUI/VAT id before launch.
  registrationNumber: "J00/0000/0000",
  vatId: "RO00000000",
  url: "https://www.parchet-usi.ro", // canonical production domain (parket-usi.ro redirects here)
  phone: "021 322 7057", // from Google Business Profile
  phoneHref: "+40213227057", // from Google Business Profile (E.164 format for tel: links)
  email: "placeholder@mail.com", // PLACEHOLDER — not listed on the Google Business Profile
  // PLACEHOLDER — the Google Business phone (021...) is a Bucharest landline, not WhatsApp-capable.
  // Set this to a real mobile number once available.
  whatsappNumber: "40700000000",
  address: "Strada Vitejilor 29, 031525 București", // from Google Business Profile
  hours: "Luni - Vineri, 09:00 - 18:00", // PLACEHOLDER — Google listing only confirms opening time (09:00), not full schedule
  googleRating: { value: 5.0, count: 6 }, // from Google Business Profile ("Parchet Uși | CMG International SRL")
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

export function googleMapsEmbedSrc() {
  return `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;
}

export function googleMapsDirectionsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;
}

export const defaultWhatsappMessage =
  "Bună ziua! Doresc o ofertă pentru uși de interior. Proiectul se află în [LOCALITATE], iar numărul aproximativ de uși este [NUMĂR]. Mă interesează și serviciile de [CONSULTANȚĂ / MĂSURĂTORI / MONTAJ].";
