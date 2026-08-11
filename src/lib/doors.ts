// Per-model door content, powering the /usi-de-interior/[slug] pages.
//
// Prices are mirrored from `pricing.ts` (which stays the single source of truth
// for the price list itself) so a model page can state its own price without
// importing the whole catalogue. `priceKey` ties each model back to the exact
// line item in that list — keep the two in sync when prices change.
export type DoorModel = {
  slug: string;
  /** Plural, keyword-shaped — used in H1s and nav. */
  name: string;
  /** Matches the `name` of the corresponding item in pricing.ts. */
  priceKey: string;
  price: number;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary, used on the category page and in listings. */
  summary: string;
  /** Lead paragraph on the model page. */
  intro: string;
  /** Which rooms / situations this model suits. */
  bestFor: string[];
  /** Construction facts specific to this model. */
  construction: string[];
  /** Practical considerations — honest trade-offs, not just selling points. */
  considerations: string[];
  /** Slugs of two related models to cross-link. */
  related: string[];
};

export const doorModels: DoorModel[] = [
  {
    slug: "usi-cu-toc-pline",
    name: "Uși cu toc pline",
    priceKey: "Ușă cu toc plină",
    price: 1850,
    metaTitle: "Uși de interior cu toc pline — de la 1.850 lei",
    metaDescription:
      "Uși de interior pline cu toc, din furnir natural de stejar, de la 1.850 lei cu TVA. Feronerie inclusă. Pe comandă, în București și Ilfov.",
    summary:
      "Foaie plină, fără geam. Cea mai accesibilă configurație din listă și cea mai bună pentru izolare fonică.",
    intro:
      "Ușa cu toc plină este configurația de bază din gama noastră și, totodată, cea mai accesibilă. Foaia nu are decupaj vitrat, ceea ce înseamnă o suprafață continuă de furnir natural de stejar și o barieră mai bună între încăperi — atât vizual, cât și acustic.",
    bestFor: [
      "dormitoare, unde contează intimitatea și liniștea;",
      "băi și camere tehnice, unde un geam nu este dorit;",
      "camere care dau direct într-un hol circulat;",
      "proiecte cu buget mai strâns, unde se schimbă toate ușile locuinței deodată.",
    ],
    construction: [
      "ramă din lemn de brad stratificat, cu aproximativ 12,5 cm pe laterale și în partea superioară și 20 cm în partea inferioară;",
      "interior cu structură celulară de tip fagure, placat pe ambele fețe cu MDF de 4 mm;",
      "furnir natural de stejar, finisat în trei straturi: baiț, grund și lac;",
      "toc din lemn de brad furniruit, drept sau semirotund, cu garnitură de etanșare;",
      "trei balamale clasice și broască mecanică, ambele de fabricație românească.",
    ],
    considerations: [
      "Fiind fără geam, nu aduce lumină în holurile fără fereastră — pentru acele treceri, varianta decupată este mai potrivită.",
      "Structura celulară face foaia mai ușoară decât la ușile stratificate. Dacă vrei o senzație mai „solidă” la închidere, compară cu varianta masivă.",
    ],
    related: ["usi-cu-toc-decupate", "usi-stratificate"],
  },
  {
    slug: "usi-cu-bagheta-aplicata",
    name: "Uși cu baghetă aplicată",
    priceKey: "Ușă cu baghetă aplicată",
    price: 1950,
    metaTitle: "Uși de interior cu baghetă aplicată — de la 1.950 lei",
    metaDescription:
      "Uși de interior cu baghete decorative aplicate, din furnir natural de stejar, de la 1.950 lei cu TVA. Pe comandă, în București și Ilfov.",
    summary:
      "Foaie plină cu baghete decorative din lemn aplicate pe suprafață. Relief clasic, fără schimbarea structurii.",
    intro:
      "Ușa cu baghetă aplicată pornește de la aceeași foaie plină, peste care se aplică baghete din lemn de brad furniruit. Rezultatul este un relief geometric — de obicei casete sau linii verticale — care schimbă complet caracterul ușii, la o diferență de preț mică față de varianta simplă.",
    bestFor: [
      "amenajări clasice și neoclasice;",
      "locuințe cu mobilier din lemn masiv, unde o ușă plată ar părea prea seacă;",
      "situații în care vrei un accent decorativ fără costul unei uși masive;",
      "camere de zi și holuri principale, unde ușa este vizibilă permanent.",
    ],
    construction: [
      "aceeași structură celulară și ramă din brad stratificat ca la ușa plină;",
      "baghete din lemn de brad, furniruite cu furnir natural de stejar, aplicate pe suprafața foii;",
      "finisaj unitar peste foaie și baghete, astfel încât nuanța să fie continuă;",
      "toc din brad furniruit, drept sau semirotund, cu garnitură de etanșare.",
    ],
    considerations: [
      "Reliefurile aplicate cer ceva mai multă atenție la curățare decât o suprafață plată — praful se așază în muchii.",
      "Modelul baghetelor se stabilește la comandă. Dacă ai o referință vizuală, trimite-o odată cu cererea de ofertă.",
    ],
    related: ["usi-cu-frezari", "usi-cu-toc-pline"],
  },
  {
    slug: "usi-cu-toc-decupate",
    name: "Uși cu toc decupate",
    priceKey: "Ușă cu toc decupată",
    price: 2100,
    metaTitle: "Uși de interior decupate cu geam — de la 2.100 lei",
    metaDescription:
      "Uși de interior cu decupaj vitrat și geam mat sablat inclus, de la 2.100 lei cu TVA. Furnir natural de stejar, pe comandă în București.",
    summary:
      "Foaie cu decupaj vitrat și geam mat sablat inclus în preț. Lasă lumina să treacă între încăperi.",
    intro:
      "Ușa decupată are una sau mai multe zone vitrate, cu geam mat sablat inclus în preț. Este soluția pentru încăperile care nu au sursă proprie de lumină naturală: geamul mat transmite lumina dintr-o cameră în alta fără a sacrifica intimitatea, pentru că nu se vede prin el.",
    bestFor: [
      "holuri și coridoare fără fereastră;",
      "bucătării și camere de zi, pentru a lega spațiile vizual;",
      "apartamente cu living întunecos, unde lumina vine dintr-o singură direcție;",
      "cazuri în care vrei să vezi dacă lumina e aprinsă într-o cameră, fără să deschizi ușa.",
    ],
    construction: [
      "zonele decupate sunt încadrate cu elemente din lemn cu lățime de aproximativ 8–10 cm;",
      "geam mat sablat inclus în preț — nu este un cost suplimentar;",
      "baghete din brad furniruit pentru fixarea și încadrarea elementelor vitrate;",
      "restul construcției este identică ușii pline: ramă din brad stratificat, MDF de 4 mm, furnir natural de stejar.",
    ],
    considerations: [
      "Geamul mat lasă lumina să treacă, dar transmite și siluete în contralumină. Pentru intimitate totală, alege varianta plină.",
      "Izolarea fonică este ceva mai slabă decât la o foaie plină, din cauza suprafeței vitrate.",
    ],
    related: ["usi-cu-toc-pline", "usi-glisante"],
  },
  {
    slug: "usi-cu-frezari",
    name: "Uși cu frezări",
    priceKey: "Ușă cu frezări",
    price: 2100,
    metaTitle: "Uși de interior cu frezări — de la 2.100 lei",
    metaDescription:
      "Uși de interior cu frezări executate în suprafață, din furnir natural de stejar, de la 2.100 lei cu TVA. Pe comandă în București și Ilfov.",
    summary:
      "Foaie plină cu frezări executate direct în suprafață, care desenează casete sau linii verticale.",
    intro:
      "La ușile cu frezări, modelul este executat în suprafața foii, nu aplicat peste ea. Diferența față de bagheta aplicată este subtilă ca aspect, dar clară la atingere: suprafața rămâne continuă, iar liniile sunt săpate în material. Efectul este mai discret și mai curat.",
    bestFor: [
      "amenajări clasice care cer un model, dar fără relief pronunțat;",
      "spații unde vrei un desen vertical care să înalțe optic încăperea;",
      "locuințe în care se caută un aspect uniform, ușor de întreținut;",
      "combinații cu mobilier modern, unde bagheta aplicată ar fi prea încărcată.",
    ],
    construction: [
      "frezările sunt executate în suprafața foii, care rămâne continuă;",
      "finisajul (baiț, grund, lac) urmează conturul frezării, astfel încât nuanța rămâne unitară;",
      "structură celulară cu ramă din brad stratificat, placată cu MDF de 4 mm furniruit;",
      "toc din brad furniruit cu garnitură de etanșare, drept sau semirotund.",
    ],
    considerations: [
      "Modelul frezării se stabilește la comandă și nu poate fi modificat după execuție.",
      "La același preț cu ușa decupată — alegerea între ele ține de lumină (decupată) versus suprafață continuă (frezată).",
    ],
    related: ["usi-cu-bagheta-aplicata", "usi-cu-toc-decupate"],
  },
  {
    slug: "usi-stratificate",
    name: "Uși stratificate",
    priceKey: "Ușă stratificată",
    price: 2450,
    metaTitle: "Uși de interior stratificate (masive) — de la 2.450 lei",
    metaDescription:
      "Uși de interior stratificate, cu tăblii din MDF furniruit în loc de structură celulară, de la 2.450 lei cu TVA. Pe comandă în București.",
    summary:
      "Construcție masivă, cu tăblii din MDF furniruit în locul structurii celulare. Foaie mai plină și mai grea.",
    intro:
      "Ușa stratificată folosește aceeași ramă, același furnir și același finisaj ca restul gamei, dar interiorul foii este diferit: structura celulară de tip fagure este înlocuită cu tăblii din MDF furniruit. Foaia devine mai plină și mai grea, iar închiderea se simte mai fermă și sună mai „plin”.",
    bestFor: [
      "clienți care asociază calitatea cu greutatea și senzația la închidere;",
      "camere unde se cere izolare fonică peste medie;",
      "uși folosite intens, unde robustețea contează pe termen lung;",
      "locuințe în care ușa este un element de finisaj vizibil, nu doar funcțional.",
    ],
    construction: [
      "interiorul foii este realizat din tăblii de MDF furniruit, nu din structură fagure;",
      "structura generală și finisajele sunt identice celor de la ușile celulare;",
      "greutate sensibil mai mare per foaie, ceea ce solicită mai mult balamalele și tocul;",
      "aceleași trei balamale clasice și broască mecanică de fabricație românească.",
    ],
    considerations: [
      "Greutatea mai mare face montajul mai pretențios — reglajul balamalelor devine important pentru ca ușa să nu „cadă” în timp.",
      "Diferența de preț față de ușa plină este de 600 lei per ușă. La o locuință cu multe uși, merită calculată pe total.",
    ],
    related: ["usi-glisante-masive", "usi-cu-toc-pline"],
  },
  {
    slug: "usi-glisante",
    name: "Uși glisante",
    priceKey: "Ușă glisantă (plină sau decupată)",
    price: 2450,
    metaTitle: "Uși glisante de interior — de la 2.450 lei",
    metaDescription:
      "Uși glisante de interior, pline sau decupate, de la 2.450 lei cu TVA. Recuperează spațiul unei deschideri complete. Pe comandă în București.",
    summary:
      "Culisează pe lângă perete în loc să se deschidă spre interior. Recuperează spațiul unei deschideri complete.",
    intro:
      "Ușa glisantă culisează lateral, pe lângă perete, în loc să se rotească în jurul balamalelor. Câștigul practic este suprafața pe care o ușă batantă o blochează la deschidere — un semicerc cu raza cât lățimea foii, adică aproape un metru pătrat pe care nu poți pune nimic. În apartamentele compacte, acesta este de multe ori argumentul decisiv.",
    bestFor: [
      "apartamente mici, unde fiecare metru pătrat contează;",
      "treceri între living și bucătărie, care rămân deschise cea mai mare parte a timpului;",
      "camere în care mobilierul ar fi lovit de o ușă batantă;",
      "dressinguri, debarale și camere tehnice cu acces frecvent.",
    ],
    construction: [
      "disponibilă atât în variantă plină, cât și decupată, la același preț;",
      "furnir natural de stejar și aceleași nuanțe de finisaj ca restul gamei;",
      "sistemul de culisare și configurația se stabilesc la măsurători, în funcție de peretele disponibil;",
      "necesită o porțiune de perete liberă, egală cu lățimea foii, pe care ușa să gliseze.",
    ],
    considerations: [
      "Izolarea fonică este mai slabă decât la o ușă batantă cu garnitură, pentru că foaia nu se închide în toc pe tot conturul.",
      "Ai nevoie de perete liber lateral. Dacă acolo sunt prize, întrerupătoare sau mobilier până în tavan, soluția trebuie regândită la măsurători.",
    ],
    related: ["usi-glisante-masive", "usi-cu-toc-decupate"],
  },
  {
    slug: "usi-glisante-masive",
    name: "Uși glisante masive",
    priceKey: "Ușă glisantă masivă",
    price: 2650,
    metaTitle: "Uși glisante masive — de la 2.650 lei",
    metaDescription:
      "Uși glisante masive de interior, cea mai solidă configurație din gamă, de la 2.650 lei cu TVA. Pentru deschideri largi. Pe comandă în București.",
    summary:
      "Varianta glisantă cu foaie masivă. Cea mai solidă configurație din gamă, pentru deschideri largi.",
    intro:
      "Ușa glisantă masivă combină cele două opțiuni de top din gamă: mecanismul culisant și foaia stratificată, cu tăblii din MDF furniruit în locul structurii celulare. Este cea mai scumpă configurație din listă și, totodată, cea mai potrivită pentru deschiderile largi, unde o foaie ușoară ar părea fragilă.",
    bestFor: [
      "treceri largi între living și bucătărie sau dining;",
      "spații open-space care se compartimentează ocazional;",
      "proiecte în care ușa este un element de design asumat, nu doar funcțional;",
      "situații în care se dorește atât economia de spațiu, cât și izolarea unei foi masive.",
    ],
    construction: [
      "foaie masivă cu tăblii din MDF furniruit, ca la ușile stratificate;",
      "mecanism de culisare dimensionat pentru greutatea suplimentară a foii;",
      "furnir natural de stejar, finisat în trei straturi, în aceleași nuanțe ca restul gamei;",
      "configurația finală se stabilește după măsurători, în funcție de deschidere și de peretele disponibil.",
    ],
    considerations: [
      "Greutatea foii cere un perete și un sistem de prindere corespunzătoare — se verifică la măsurători.",
      "Este cea mai scumpă opțiune din listă. Dacă spațiul nu impune o foaie masivă, varianta glisantă simplă costă cu 200 lei mai puțin per ușă.",
    ],
    related: ["usi-glisante", "usi-stratificate"],
  },
];

export function getDoorModel(slug: string) {
  return doorModels.find((m) => m.slug === slug) ?? null;
}
