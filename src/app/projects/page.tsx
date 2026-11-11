import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectsPage } from "@/components/projects-page";

export const metadata: Metadata = {
  title: "Projects — Pakistan Biotechnology Gateway",
  description:
    "The Pakistan Biotechnology Gateway — a live multi-portal marketplace routing sequencing, bioinformatics and supply work to verified providers. Sealed bidding, LIMS-lite tracking, escrow-style payments.",
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
