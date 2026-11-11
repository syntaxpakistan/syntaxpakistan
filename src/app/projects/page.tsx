import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectsPage } from "@/components/projects-page";

export const metadata: Metadata = {
  title: "Projects — Pakistan Biotechnology Gateway",
  description:
    "The Pakistan Biotechnology Gateway — a live multi-portal marketplace routing sequencing, bioinformatics and supply work to verified providers. Sealed bidding, LIMS-lite tracking, escrow-style payments.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Pakistan Biotechnology Gateway | Syntax of Life",
    description:
      "A live multi-portal marketplace for sequencing, bioinformatics and biotech supply across Pakistan.",
    url: "/projects",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <ProjectsPage />
      </main>
      <Footer />
    </>
  );
}
