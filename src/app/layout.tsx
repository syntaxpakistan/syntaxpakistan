import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const helixa = Inter({
  variable: "--font-helixa",
  subsets: ["latin"],
});

const luxora = Space_Grotesk({
  variable: "--font-luxora",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.syntaxpakistan.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Biotechnology Company in Pakistan — NGS Sequencing & Bioinformatics | Syntax of Life",
    template: "%s | Syntax of Life — Biotechnology Pakistan",
  },
  description:
    "Syntax of Life is Pakistan's biotechnology gateway — whole-genome sequencing, metagenomics, RNA-Seq, epigenomics and bioinformatics delivered by verified labs nationwide. RFQ-based quoting, blind bidding, tracked pipelines.",
  keywords: [
    "biotechnology company in Pakistan",
    "biotech Pakistan",
    "NGS sequencing Pakistan",
    "next generation sequencing Pakistan",
    "whole genome sequencing Pakistan",
    "DNA sequencing services Pakistan",
    "bioinformatics services Pakistan",
    "metagenomics Pakistan",
    "RNA sequencing Pakistan",
    "Sanger sequencing Pakistan",
    "genomics services Pakistan",
    "multiomics Pakistan",
    "sequencing lab Pakistan",
    "biotech marketplace Pakistan",
    "proteomics Pakistan",
    "variant calling Pakistan",
    "16S amplicon sequencing Pakistan",
    "exome sequencing Pakistan",
    "Syntax of Life",
    "Pakistan Biotechnology Gateway",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Syntax of Life",
    title:
      "Biotechnology Company in Pakistan — NGS Sequencing & Bioinformatics | Syntax of Life",
    description:
      "Pakistan's biotechnology gateway — verified sequencing labs, bioinformatics providers and biotech suppliers on one RFQ-driven platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syntax of Life — Pakistan Biotechnology Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntax of Life — Biotechnology Company in Pakistan",
    description:
      "NGS sequencing, bioinformatics and biotech supply across Pakistan — verified labs, blind quoting, tracked delivery.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${helixa.variable} ${luxora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-body">
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>
        <Providers>{children}</Providers>
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#org`,
                  name: "Syntax of Life",
                  alternateName: "Pakistan Biotechnology Gateway",
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/brand/logo-dark.png`,
                  },
                  description:
                    "Pakistan's biotechnology gateway — a verified network of sequencing labs, bioinformatics providers and biotech suppliers serving researchers, universities, hospitals and industry nationwide.",
                  address: { "@type": "PostalAddress", addressCountry: "PK" },
                  areaServed: "Pakistan",
                  sameAs: ["https://github.com/syntaxpakistan"],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#site`,
                  url: SITE_URL,
                  name: "Syntax of Life — Pakistan Biotechnology Gateway",
                  publisher: { "@id": `${SITE_URL}/#org` },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": `${SITE_URL}/#service`,
                  name: "Syntax of Life",
                  url: SITE_URL,
                  image: `${SITE_URL}/og-image.png`,
                  priceRange: "$$",
                  areaServed: "Pakistan",
                  provider: { "@id": `${SITE_URL}/#org` },
                  knowsAbout: [
                    "NGS sequencing",
                    "whole-genome sequencing",
                    "metagenomics",
                    "transcriptomics",
                    "epigenomics",
                    "bioinformatics",
                    "proteomics",
                    "biotechnology",
                  ],
                },
              ],
            }),
          }}
        />
        {/* Reveal watchdog — if hydration stalls or fails, content SSR'd with
            opacity:0 must not stay invisible. Lenis's html class is our
            hydration marker; if it's absent after a grace period, strip the
            hidden inline styles so the page is readable regardless. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function r(){var h=document.documentElement;if(h.classList.contains('lenis'))return;document.querySelectorAll('[style]').forEach(function(e){var s=e.getAttribute('style')||'';if(s.indexOf('opacity:0')!==-1||s.indexOf('opacity: 0')!==-1){e.style.opacity='';e.style.transform='';}});}setTimeout(r,5000);setTimeout(r,9000);})();`,
          }}
        />
      </body>
    </html>
  );
}
