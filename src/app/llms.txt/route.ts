import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { priceCategories, pricingNotes } from "@/lib/pricing";
import { getAllPosts } from "@/lib/posts";

/**
 * /llms.txt — the llmstxt.org index format: an H1, a blockquote summary, then
 * H2 sections of `[Title](url): description` links.
 *
 * Worth being clear-eyed about this file: no major AI platform consumes it yet
 * (Google has publicly compared it to meta keywords). It costs nothing to serve
 * and is generated from the same modules as the site, so it cannot go stale —
 * but the structured data in `src/lib/schema.ts` is what actually drives AI
 * citation today. See also /llms-full.txt for the expanded version.
 */
export const dynamic = "force-static";

function priceLines() {
  return priceCategories
    .map((category) => {
      const items = category.items
        .map((item) => `- ${item.name}: ${item.price}${item.note ? ` ${item.note.trim()}` : ""}`)
        .join("\n");
      return `### ${category.title}\n${items}`;
    })
    .join("\n\n");
}

export async function GET() {
  const posts = getAllPosts();

  const body = `# ${siteConfig.brandName} (${siteConfig.legalName})

> ${siteConfig.description}

Uși de interior la comandă, cu finisaje de stejar auriu, wenge, nuc și cireș.
Configurații disponibile: toc plin, toc decupat, stratificată, cu baghetă
aplicată, cu frezări, glisantă și glisantă masivă. Toate prețurile includ TVA,
feronerie (balama, broască, mâner) și geam mat sablat.

## Date de contact

- Telefon: ${siteConfig.phone}
- E-mail: ${siteConfig.email}
- WhatsApp: +${siteConfig.whatsappNumber}
- Adresă: ${siteConfig.address}
- Program: ${siteConfig.hours}
- Zonă deservită: ${siteConfig.areaServed}
- Evaluare Google: ${siteConfig.googleRating.value}/5 din ${siteConfig.googleRating.count} recenzii

## Prețuri 2026 (TVA inclus)

${priceLines()}

Mențiuni:
${pricingNotes.map((note) => `- ${note}`).join("\n")}

## Pagini principale

- [Uși de interior](${canonicalUrl("/usi-de-interior")}): modele și finisaje disponibile, cu galerie foto pe fiecare finisaj.
- [Prețuri](${canonicalUrl("/preturi")}): lista completă de prețuri 2026, TVA inclus.
- [Structura ușilor](${canonicalUrl("/structura-usilor")}): din ce sunt construite ușile și ce înseamnă fiecare strat.
- [Proiecte](${canonicalUrl("/proiecte")}): fotografii din lucrări finalizate.
- [Solicită o ofertă](${canonicalUrl("/oferta")}): cum se cere o ofertă personalizată.
- [Contact](${canonicalUrl("/contact")}): date de contact, adresă și hartă.

## Servicii

- [Consultanță și măsurători](${canonicalUrl("/servicii/consultanta-masuratori")}): alegerea modelului și verificarea dimensiunilor înainte de comandă.
- [Montaj](${canonicalUrl("/servicii/montaj")}): instalare, verificarea alinierii și predarea lucrării. Montaj în București: 305 lei.
- [Toate serviciile](${canonicalUrl("/servicii")}): privire de ansamblu.

## Informații utile

- [Întrebări frecvente](${canonicalUrl("/intrebari-frecvente")}): răspunsuri despre ofertare, măsurători, montaj, garanție și livrare.
- [Despre noi](${canonicalUrl("/despre-noi")}): cine suntem și cum lucrăm.

## Blog

${posts.map((post) => `- [${post.title}](${canonicalUrl(`/blog/${post.slug}`)}): ${post.excerpt}`).join("\n")}

## Optional

- [Politica de confidențialitate](${canonicalUrl("/politica-de-confidentialitate")})
- [Politica de cookie-uri](${canonicalUrl("/politica-de-cookie-uri")})
- [Termeni și condiții](${canonicalUrl("/termeni-si-conditii")})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
