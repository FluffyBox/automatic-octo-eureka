// Service-area pages.
//
// Deliberately only two entries. Spinning up one page per Bucharest sector with
// the same text and a swapped place name is a doorway-page pattern that Google
// penalises. These two exist because there is something genuinely different to
// say about each: Sector 3 is where the workshop is, and Ilfov changes how
// measurement and installation visits are scheduled. If a third is ever added,
// it needs its own real content — not a find-and-replace of these.
export type Zone = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  /** Paragraphs of area-specific body copy. */
  body: { heading: string; paragraphs: string[] }[];
  /** Localities or neighbourhoods named on the page. */
  places: string[];
};

export const zones: Zone[] = [
  {
    slug: "bucuresti-sector-3",
    name: "București, Sectorul 3",
    metaTitle: "Uși de interior în Sectorul 3, București",
    metaDescription:
      "Uși de interior pe comandă în Sectorul 3, București. Atelierul nostru este pe Strada Vitejilor 29. Măsurători la domiciliu și montaj de la 305 lei.",
    heroTitle: "Uși de interior în Sectorul 3, București",
    heroDescription:
      "Atelierul nostru se află pe Strada Vitejilor 29, în Sectorul 3. Este zona în care ajungem cel mai repede pentru măsurători și montaj.",
    places: ["Titan", "Dristor", "Vitan", "Unirii", "Nicolae Grigorescu", "Baba Novac"],
    body: [
      {
        heading: "Zona în care ajungem cel mai repede",
        paragraphs: [
          "Sediul și atelierul nostru sunt pe Strada Vitejilor 29, în apropierea stației de metrou Mihai Bravu. Pentru clienții din Sectorul 3 — Titan, Dristor, Vitan, Unirii, Nicolae Grigorescu sau Baba Novac — asta înseamnă că măsurătorile se pot programa, de regulă, mai repede decât în restul orașului, iar o eventuală revenire pentru un reglaj nu presupune o deplasare lungă.",
          "Dacă vrei să vezi mostre de furnir și finisaje înainte de a comanda, Sectorul 3 este și zona din care se ajunge cel mai simplu la noi.",
        ],
      },
      {
        heading: "Ce înseamnă fondul locativ din Sectorul 3 pentru uși",
        paragraphs: [
          "O bună parte din Sectorul 3 este formată din blocuri construite între anii ’60 și ’80, în Titan, Dristor și Balta Albă. În aceste apartamente golurile de ușă sunt, de obicei, apropiate de dimensiunile tipizate, dar rareori perfect drepte după decenii de tasare și de renovări succesive. De aceea măsurăm fiecare gol în parte, chiar și acolo unde toate ușile par identice — diferențe de un centimetru între camere sunt frecvente.",
          "În zonele nou construite din jurul Splaiului Unirii și din Vitan, situația este inversă: golurile sunt drepte, dar dimensiunile variază de la un dezvoltator la altul, iar grosimile de zid depășesc adesea 11 cm, ceea ce înseamnă că este nevoie de căptușeală. Costul acesteia (175 lei pentru zid de 15 cm, 350 lei pentru 25 cm) se stabilește la măsurători.",
        ],
      },
      {
        heading: "Montaj în Sectorul 3",
        paragraphs: [
          "Montajul costă 305 lei cu TVA per ușă, același tarif ca în restul Bucureștiului. Pentru apartamentele la bloc, singurul aspect care cere planificare din timp este accesul: dimensiunea liftului și programul de liniște al asociației. Spune-ne la ce etaj se află apartamentul și dacă liftul funcționează, ca să pregătim livrarea corespunzător.",
        ],
      },
    ],
  },
  {
    slug: "ilfov",
    name: "Județul Ilfov",
    metaTitle: "Uși de interior în Ilfov — măsurători și montaj",
    metaDescription:
      "Uși de interior pe comandă în județul Ilfov: Voluntari, Otopeni, Popești-Leordeni, Pantelimon, Chiajna, Bragadiru. Măsurători la domiciliu și montaj.",
    heroTitle: "Uși de interior în județul Ilfov",
    heroDescription:
      "Livrăm și montăm în localitățile din jurul Bucureștiului. Tariful de montaj și programarea se confirmă în funcție de adresă.",
    places: [
      "Voluntari",
      "Otopeni",
      "Popești-Leordeni",
      "Pantelimon",
      "Chiajna",
      "Bragadiru",
      "Popești",
      "Domnești",
    ],
    body: [
      {
        heading: "Localitățile în care ajungem",
        paragraphs: [
          "Acoperim localitățile apropiate de București: Voluntari, Otopeni, Popești-Leordeni, Pantelimon, Chiajna, Bragadiru și Domnești, împreună cu satele din jurul lor. Pentru adrese mai îndepărtate din județ, disponibilitatea se confirmă când ne transmiți localitatea — nu refuzăm din principiu, dar preferăm să spunem din start dacă putem respecta un termen rezonabil.",
        ],
      },
      {
        heading: "Ce diferă față de lucrările din București",
        paragraphs: [
          "Diferența principală nu este tehnică, ci de programare. În Ilfov predomină casele individuale, unde măsurătorile durează mai mult decât într-un apartament: sunt mai multe uși, iar grosimile de zid variază de la o încăpere la alta, mai ales la construcțiile ridicate în etape. Din acest motiv preferăm să programăm o singură vizită mai lungă, în care măsurăm tot, în locul mai multor deplasări scurte.",
          "Al doilea aspect este grosimea zidurilor. La casele cu zidărie de 25 cm sau cu termosistem interior, căptușeala nu este opțională, ci necesară — 350 lei pentru zid de 25 cm. La un proiect cu opt uși, aceasta este o linie de cost care merită anticipată, nu descoperită la ofertă.",
        ],
      },
      {
        heading: "Montaj și deplasare în Ilfov",
        paragraphs: [
          "Tariful de montaj de 305 lei cu TVA este valabil pentru București. Pentru județul Ilfov, tariful final se confirmă în funcție de adresă și de numărul de uși — la proiectele cu mai multe uși, deplasarea se distribuie pe întreaga lucrare, așa că diferența per ușă rămâne mică.",
          "Casele au, de regulă, acces mai simplu decât apartamentele la bloc: nu depindem de lift și nu există program de liniște impus de asociație. În schimb, e util să știm din timp dacă drumul de acces permite intrarea unei mașini de marfă.",
        ],
      },
    ],
  },
];

export function getZone(slug: string) {
  return zones.find((z) => z.slug === slug) ?? null;
}
