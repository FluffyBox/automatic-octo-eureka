// schema.org JSON-LD builders. Kept in one place so structured data stays
// consistent with the business info in `site-config.ts`.
import { siteConfig, canonicalUrl, socialProfiles } from "@/lib/site-config";

const ORG_ID = `${siteConfig.url}/#organization`;
const BUSINESS_ID = `${siteConfig.url}/#localbusiness`;

/** Organization node — referenced by other nodes via ORG_ID. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    vatID: siteConfig.vatId,
    ...(socialProfiles().length ? { sameAs: socialProfiles() } : {}),
  };
}

/** LocalBusiness (HomeAndConstructionBusiness) node with full NAP + hours + rating. */
export function localBusinessSchema() {
  const a = siteConfig.addressParts;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    vatID: siteConfig.vatId,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: siteConfig.priceRange,
    areaServed: siteConfig.areaServed,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: a.streetAddress,
      postalCode: a.postalCode,
      addressLocality: a.addressLocality,
      addressRegion: a.addressRegion,
      addressCountry: a.addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    ...(socialProfiles().length ? { sameAs: socialProfiles() } : {}),
    ...(siteConfig.googleRating.count > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.googleRating.value,
            reviewCount: siteConfig.googleRating.count,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

/** FAQPage from a list of question/answer pairs. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export type ProductOffer = {
  name: string;
  description: string;
  price: number; // "from" price, in RON
};

/**
 * A Product with an aggregated Offer, built from the pricing tiers.
 * `lowPrice` is the cheapest tier; each tier becomes an Offer.
 */
export function productSchema({
  name,
  description,
  image,
  offers,
}: {
  name: string;
  description: string;
  image?: string;
  offers: ProductOffer[];
}) {
  const prices = offers.map((o) => o.price);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    ...(image ? { image: `${siteConfig.url}${image}` } : {}),
    brand: { "@type": "Brand", name: siteConfig.brandName },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "RON",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: offers.length,
      availability: "https://schema.org/InStock",
      seller: { "@id": ORG_ID },
      offers: offers.map((o) => ({
        "@type": "Offer",
        name: o.name,
        description: o.description,
        price: o.price,
        priceCurrency: "RON",
        availability: "https://schema.org/InStock",
      })),
    },
  };
}

/** BreadcrumbList. `items` are ordered ancestors→current; paths relative to the site root. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
