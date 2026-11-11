import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaForm } from "@/components/sections/cta-form";
import { ServiceDetail } from "@/components/service-detail";
import { getBioPage } from "@/lib/bioinformatics-pages";

const overview = getBioPage("overview")!;

export const metadata: Metadata = {
  title: "Bioinformatics Services in Pakistan",
  description: overview.tagline,
  alternates: { canonical: "/bioinformatics" },
  openGraph: {
    title: "Bioinformatics Services in Pakistan | Syntax of Life",
    description: overview.tagline,
    url: "/bioinformatics",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BioinformaticsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <ServiceDetail s={overview} />
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
