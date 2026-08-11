import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsappButton } from "@/components/layout/WhatsappButton";
import { ContactPopup } from "@/components/layout/ContactPopup";
import { CookieBanner } from "@/components/cookie-consent/CookieBanner";
import { AnalyticsGate } from "@/components/cookie-consent/AnalyticsGate";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const defaultTitle = `Uși de interior, măsurători și montaj | ${siteConfig.brandName}`;
const defaultDescription =
  "Descoperă uși de interior potrivite locuinței tale. Beneficiezi de consultanță, măsurători și montaj profesionist. Solicită o ofertă personalizată.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.brandName}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  // Default canonical (home). Every page sets its own via `alternates.canonical`.
  alternates: { canonical: "/" },
  // Let engines quote full passages and show large image previews. Without
  // `max-snippet: -1` Google caps the snippet length, which also limits how much
  // text AI answer engines will lift and attribute.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // Base OpenGraph/Twitter — inherited by pages that don't override them.
  // og:image is supplied automatically by src/app/opengraph-image.tsx.
  openGraph: {
    type: "website",
    siteName: siteConfig.brandName,
    locale: "ro_RO",
    url: siteConfig.url,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground"
        >
          Sari la conținutul principal
        </a>
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsappButton />
        <ContactPopup />
        <CookieBanner />
        <AnalyticsGate />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
