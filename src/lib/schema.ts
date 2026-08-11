// schema.org JSON-LD builders. Kept in one place so structured data stays
// consistent with the business info in `site-config.ts`.
import {
  siteConfig,
  canonicalUrl,
  socialProfiles,
  googleMapsDirectionsHref,
} from "@/lib/site-config";
import { priceCategories, priceValue } from "@/lib/pricing";

const ORG_ID = `${siteConfig.url}/#organization`;
const BUSINESS_ID = `${siteConfig.url}/#localbusiness`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/** Organization node — referenced by other nodes via ORG_ID. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    image: `${siteConfig.url}/opengraph-image`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    vatID: siteConfig.vatId,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressParts.streetAddress,
      postalCode: siteConfig.addressParts.postalCode,
      addressLocality: siteConfig.addressParts.addressLocality,
      addressRegion: siteConfig.addressParts.addressRegion,
      addressCountry: siteConfig.addressParts.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      contactType: "sales",
      areaServed: "RO",
      availableLanguage: ["ro"],
    },
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
    description: siteConfig.description,
    vatID: siteConfig.vatId,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/icon`,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "RON",
    knowsLanguage: ["ro"],
    hasMap: googleMapsDirectionsHref(),
    // Structured so engines can resolve the served region as a place, not a string.
    areaServed: [
      { "@type": "City", name: "București" },
      { "@type": "AdministrativeArea", name: "Ilfov" },
    ],
    parentOrganization: { "@id": ORG_ID },
    // The full price list lives on /preturi and the services on their own pages,
    // rather than being repeated in this node on every page of the site.
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
    // NOTE: deliberately no `aggregateRating` here.
    //
    // Google treats a rating about entity A published on entity A's own site as
    // "self-serving", and pages using LocalBusiness or Organization markup are
    // ineligible for the star review feature because of it. So this could never
    // render stars — it could only earn a structured-data manual action, which
    // would suppress every other rich result on the site.
    //
    // The Google rating stays visible to humans via <GoogleRatingBadge>, which
    // is fine: the restriction is on the markup, not on showing the number.
    // Star ratings for this business are meant to reach Search through the
    // Google Business Profile instead.
    // https://developers.google.com/search/docs/appearance/structured-data/review-snippet
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

/**
 * The full 2026 price list as an OfferCatalog, built from `pricing.ts`.
 * This is what lets an assistant answer "how much does an interior door cost"
 * with a real number instead of guessing from prose.
 */
export function offerCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Listă de prețuri uși de interior 2026",
    url: canonicalUrl("/preturi"),
    provider: { "@id": BUSINESS_ID },
    itemListElement: priceCategories.map((category) => ({
      "@type": "OfferCatalog",
      name: category.title,
      itemListElement: category.items.map((item) => ({
        "@type": "Offer",
        name: item.name,
        price: priceValue(item),
        priceCurrency: "RON",
        // `note` carries the unit ("/ mp", "/ set") for the per-unit line items.
        ...(item.note ? { description: `Preț ${item.note.trim()}` } : {}),
        availability: "https://schema.org/InStock",
        valueAddedTaxIncluded: true,
        seller: { "@id": BUSINESS_ID },
      })),
    })),
  };
}

/** Canonical service definitions — shared by the service pages and the LocalBusiness node. */
export const SERVICES = [
  {
    name: "Consultanță și măsurători pentru uși de interior",
    description:
      "Consultanță pentru alegerea modelului, finisajului și configurației, plus măsurarea golurilor de ușă înainte de comandă și montaj.",
    serviceType: "Consultanță și măsurători",
    path: "/servicii/consultanta-masuratori",
  },
  {
    name: "Montaj uși de interior",
    description:
      "Montaj profesionist pentru uși de interior, cu verificarea alinierii, testarea deschiderii și predarea lucrării. Montaj în București: 305 lei, TVA inclus.",
    serviceType: "Montaj uși",
    path: "/servicii/montaj",
  },
] as const;

type ServicePath = (typeof SERVICES)[number]["path"];

/** A single `Service` node, provided by the LocalBusiness. Looked up by page path. */
export function serviceSchema(path: ServicePath) {
  const service = SERVICES.find((s) => s.path === path);
  if (!service) throw new Error(`No service defined for path "${path}"`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    url: canonicalUrl(service.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "București" },
      { "@type": "AdministrativeArea", name: "Ilfov" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: canonicalUrl("/oferta"),
      servicePhone: siteConfig.phone,
      serviceLocation: { "@id": BUSINESS_ID },
    },
  };
}

/** WebSite node — ties every page back to one publisher entity. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.brandName,
    description: siteConfig.description,
    inLanguage: "ro-RO",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * A typed WebPage node (ContactPage / AboutPage / CollectionPage / …).
 * Giving each page an explicit type helps engines pick the right page to cite.
 */
export function webPageSchema({
  type,
  name,
  description,
  path,
  primaryImage,
}: {
  type: "ContactPage" | "AboutPage" | "CollectionPage" | "WebPage" | "ItemPage";
  name: string;
  description: string;
  path: string;
  primaryImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "ro-RO",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    ...(primaryImage ? { primaryImageOfPage: `${siteConfig.url}${primaryImage}` } : {}),
  };
}

/** ImageGallery for the projects page — each photo as an ImageObject. */
export function imageGallerySchema({
  name,
  description,
  path,
  images,
}: {
  name: string;
  description: string;
  path: string;
  images: { src: string; alt: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "ro-RO",
    isPartOf: { "@id": WEBSITE_ID },
    associatedMedia: images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${siteConfig.url}${image.src}`,
      caption: image.alt,
      representativeOfPage: false,
    })),
  };
}

/** Blog node listing the published posts. */
export function blogSchema(posts: { slug: string; title: string; excerpt: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog#blog`,
    name: `Blog | ${siteConfig.brandName}`,
    description:
      "Ghiduri și recomandări despre alegerea, măsurarea, întreținerea și montarea ușilor de interior.",
    url: canonicalUrl("/blog"),
    inLanguage: "ro-RO",
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: canonicalUrl(`/blog/${post.slug}`),
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
    })),
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
