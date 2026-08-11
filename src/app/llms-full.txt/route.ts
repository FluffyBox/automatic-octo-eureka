import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { priceCategories, pricingNotes } from "@/lib/pricing";
import { faqs } from "@/lib/faq";
import { SERVICES } from "@/lib/schema";
import { getAllPosts } from "@/lib/posts";

/**
 * /llms-full.txt — the expanded companion to /llms.txt. Where llms.txt is an
 * index of links, this inlines the facts an assistant would otherwise have to
 * crawl several pages to assemble: full price list, every FAQ answer, service
 * scope and contact details.
 *
 * Everything here is generated from the same modules the pages render from, so
 * it stays in sync automatically.
 */
export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const priceBlock = priceCategories
    .map((category) => {
      const rows = category.items
        .map((item) => `| ${item.name} | ${item.price}${item.note ? ` ${item.note.trim()}` : ""} |`)
        .join("\n");
      return `### ${category.title}\n\n| Produs | Preț (TVA inclus) |\n| --- | --- |\n${rows}`;
    })
    .join("\n\n");

  const body = `# ${siteConfig.brandName} — informații complete

> ${siteConfig.description}

Denumire legală: ${siteConfig.legalName}
Site: ${siteConfig.url}
Ultima actualizare a prețurilor: 2026

## Contact

| Câmp | Valoare |
| --- | --- |
| Telefon | ${siteConfig.phone} |
| E-mail | ${siteConfig.email} |
| WhatsApp | +${siteConfig.whatsappNumber} |
| Adresă | ${siteConfig.address} |
| Program | ${siteConfig.hours} |
| Zonă deservită | ${siteConfig.areaServed} |
| Evaluare Google | ${siteConfig.googleRating.value}/5 (${siteConfig.googleRating.count} recenzii) |

Cererile de ofertă se fac prin WhatsApp, telefon sau e-mail — vezi
${canonicalUrl("/oferta")}. Contactarea nu implică nicio obligație de cumpărare.

## Produse

Uși de interior la comandă pentru locuințe. Finisaje disponibile: stejar auriu,
wenge, nuc, cireș și decupaj decorativ. Configurații: ușă cu toc plină, ușă cu
toc decupată, ușă stratificată, ușă cu baghetă aplicată, ușă cu frezări, ușă
glisantă și ușă glisantă masivă. Se realizează și uși de debara și luminatoare.

Fiecare preț de ușă include feronerie (balama, broască, mâner) și geam mat
sablat, cu TVA inclus.

## Prețuri 2026

${priceBlock}

### Mențiuni de preț

${pricingNotes.map((note) => `- ${note}`).join("\n")}

Prețurile afișate sunt orientative; prețul final se confirmă după măsurători, în
funcție de dimensiuni și de complexitatea proiectului.

## Servicii

${SERVICES.map((service) => `### ${service.name}\n\n${service.description}\n\nPagină: ${canonicalUrl(service.path)}`).join("\n\n")}

## Întrebări frecvente

${faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n")}

## Articole publicate

${posts
  .map(
    (post) =>
      `### ${post.title}\n\nCategorie: ${post.category} · Publicat: ${post.date}\n${post.excerpt}\n${canonicalUrl(`/blog/${post.slug}`)}`
  )
  .join("\n\n")}

## Hartă a site-ului

${[
  "/",
  "/despre-noi",
  "/usi-de-interior",
  "/preturi",
  "/structura-usilor",
  "/servicii",
  "/servicii/consultanta-masuratori",
  "/servicii/montaj",
  "/proiecte",
  "/intrebari-frecvente",
  "/blog",
  "/contact",
  "/oferta",
]
  .map((path) => `- ${canonicalUrl(path)}`)
  .join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
