// Real 2026 price list. Single source of truth for the /preturi page and the
// homepage teaser — see README.md for the pre-launch data checklist.
export type PriceItem = { name: string; price: string; note?: string };
export type PriceCategory = { title: string; items: PriceItem[] };

export const priceCategories: PriceCategory[] = [
  {
    title: "Uși de interior",
    items: [
      { name: "Ușă cu toc plină", price: "1850 lei" },
      { name: "Ușă cu toc decupată", price: "2100 lei" },
      { name: "Ușă stratificată", price: "2450 lei" },
      { name: "Ușă cu baghetă aplicată", price: "1950 lei" },
      { name: "Ușă cu frezări", price: "2100 lei" },
      { name: "Ușă glisantă (plină sau decupată)", price: "2450 lei" },
      { name: "Ușă glisantă masivă", price: "2650 lei" },
    ],
  },
  {
    title: "Debara și accesorii",
    items: [
      { name: "Ușă debara interior", price: "850 lei", note: "/ mp" },
      { name: "Căptușeală, zid 25 cm", price: "350 lei" },
      { name: "Căptușeală, zid 15 cm", price: "175 lei" },
      { name: "Pervaz drept sau semirotund", price: "250 lei", note: "/ set" },
      { name: "Luminator ușă", price: "450 lei" },
    ],
  },
];

export function priceValue(item: PriceItem): number {
  return parseInt(item.price, 10);
}

export const pricingNotes = [
  "Toate prețurile includ TVA.",
  "Feronerie (balama / broască / mâner) inclusă în preț.",
  "Geam mat sablat inclus.",
  "Pentru ușile vopsite se adaugă 450 lei / ușă (se ia în calcul și pervazurile și căptușeala).",
  "Montaj în București: 305 lei, TVA inclus.",
];
