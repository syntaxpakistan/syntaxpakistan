import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PartnersPage } from "@/components/partners-page";

export const metadata: Metadata = {
  title: "Verified Biotech Lab Partners in Pakistan",
  description:
    "Verified institutional partners of the Pakistan Biotechnology Gateway — CAS-NGS at the University of Agriculture Faisalabad and Genexa Analytics bioinformatics services.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Verified Biotech Lab Partners in Pakistan | Syntax of Life",
    description:
      "Accredited sequencing labs and bioinformatics providers in the Syntax of Life verified network.",
    url: "/partners",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <PartnersPage />
      </main>
      <Footer />
    </>
  );
}
