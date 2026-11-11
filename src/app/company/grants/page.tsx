import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaForm } from "@/components/sections/cta-form";
import { GrantsPage } from "@/components/company-pages";

export const metadata: Metadata = {
  title: "Research Grants — Sequencing & Multiomics Funding",
  alternates: { canonical: "/company/grants" },
  description: "Competitive grant programs for spatial transcriptomics and multiomics research.",
};

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <GrantsPage />
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
