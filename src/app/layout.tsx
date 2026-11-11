import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
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

export const metadata: Metadata = {
  title: "Pakistan Biotechnology Gateway — Sequencing, Bioinformatics & Supply Marketplace",
  description:
    "A federated digital marketplace connecting researchers, universities, hospitals and industry with verified sequencing labs, bioinformatics providers and indigenous biotech suppliers across Pakistan.",
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
