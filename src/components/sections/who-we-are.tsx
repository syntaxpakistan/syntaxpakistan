import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";

export function WhoWeAre() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div>
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="h-section mt-4">
              Scientist-driven multiomics, <em className="grad-text">all in one place</em>
            </h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-body">
              We pair advanced technical infrastructure with deep biological expertise, reshaping
              how multi-omic research gets sourced. Doctoral-level scientists across the verified
              network supervise every step — maintaining strict quality control from initial
              library prep through the final bioinformatics report.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <span className="btn-wrap">
                <Link href="/company/about" className="btn-secondary">
                  About the Gateway
                </Link>
              </span>
              <Link href="/contact" className="btn-ghost">
                <MessageCircle className="size-4" /> Speak with a scientist
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
