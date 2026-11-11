import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaForm } from "@/components/sections/cta-form";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Request a Sequencing Quote in Pakistan",
  description:
    "Reach the Pakistan Biotechnology Gateway team — quotes, partnerships and scientific consultation for NGS sequencing, bioinformatics and biotech supply.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Sequencing Quote in Pakistan | Syntax of Life",
    description:
      "Get a blind, side-by-side quote from verified sequencing labs across Pakistan.",
    url: "/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <ContactPage />
        <CtaForm type="contact" />
      </main>
      <Footer />
    </>
  );
}
