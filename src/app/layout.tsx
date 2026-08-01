import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Online STEM Tuition, Year 7 to A-Level`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "online STEM tuition",
    "GCSE tutor",
    "A-Level tutor",
    "maths tutor online",
    "physics tutor",
    "chemistry tutor",
    "biology tutor",
    "computer science tutor",
    "Key Stage 3 tuition",
    "UK online tutoring",
    "IELTS preparation",
    "TOEFL preparation",
    "CELPIP preparation",
    "SAT preparation",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Online STEM Tuition, Year 7 to A-Level`,
    description: site.description,
    images: [{ url: "/logo-solid.jpg", width: 1004, height: 683, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Online STEM Tuition`,
    description: site.description,
    images: ["/logo-solid.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Structured data so search engines understand what the Academy is. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  alternateName: "TestPortal",
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo.png`,
  email: site.email.general,
  telephone: `+${site.phone.raw}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "300",
  },
  areaServed: ["United Kingdom", "United States", "Australia", "Canada"],
  slogan: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          // Static, developer-authored object — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
