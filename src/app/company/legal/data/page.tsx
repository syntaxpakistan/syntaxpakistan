import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, Section, Sub } from "@/components/legal";

export const metadata: Metadata = {
  title: "Data & Research Ethics Policy",
  alternates: { canonical: "/company/legal/data" },
  description:
    "How biospecimens, genomic data and research work are governed on the Pakistan Biotechnology Gateway — informed consent, biosafety, material transfer and data lifecycle rules.",
};

export default function DataEthicsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Data & Research Ethics Policy"
      lead="Biotechnology work is sensitive: it involves human samples, genetic data, regulated organisms and results that affect real decisions. This policy sets the non-negotiable rules for samples, data and research conducted through the Gateway, and forms part of our Terms of Service."
      updated="Last updated: November 2026 · Syntax of Life (Pvt) Ltd · Karachi, Pakistan"
    >
      <Section n="1" title="Scope">
        <p>
          This policy applies to every RFQ, project, sample, dataset and deliverable handled through the Gateway —
          sequencing, bioinformatics analysis, multiomics studies and laboratory supply. It binds Customers,
          Providers, Suppliers and Syntax as platform operator.
        </p>
      </Section>

      <Section n="2" title="Sample ownership and custodial duty">
        <p>
          Biological samples remain the property of the Customer. A Provider in possession of samples acts as
          custodian: samples may be used only for the awarded scope of work, handled under documented procedures, and
          returned or disposed of as the project contract directs. Providers must not retain, sub-sample, re-test or
          transfer materials beyond the agreed scope without written authorisation.
        </p>
      </Section>

      <Section n="3" title="Human samples — consent and ethics approval">
        <p>
          Work on human-derived material is permitted only where the Customer holds valid ethics approval and lawful
          consent. By submitting an RFQ involving human samples you warrant that:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>the study has been reviewed and approved by an Institutional Review Board, research ethics committee or competent authority as required in your jurisdiction;</li>
          <li>donor informed consent covers the intended testing, analysis and any transfer of samples, consistent with the Declaration of Helsinki and applicable human-subjects rules;</li>
          <li>samples shared through the platform are labelled and documented without direct identifiers unless the ethics approval expressly permits otherwise;</li>
          <li>you can produce consent and approval documentation on reasonable request.</li>
        </ul>
        <p>
          Providers must decline or flag work where documentation is missing or the scope exceeds the approval.
          The Gateway may suspend projects where ethical documentation cannot be produced.
        </p>
      </Section>

      <Section n="4" title="Genomic and health data rules">
        <Sub title="4.1 Raw data stays off the platform">
          <p>
            The Gateway does not host raw genomic files. FASTQ, BAM, CRAM and equivalent raw read data transfer
            directly between Customer and Provider under their contract. Platform attachments are documents only
            (≤25&nbsp;MB), intended for reports, QC summaries and deliverables.
          </p>
        </Sub>
        <Sub title="4.2 De-identification">
          <p>
            Uploaded documents must not contain direct identifiers of donors or patients. Where pseudonymised data is
            used, the linking key stays with the Customer. De-identification standards consistent with HIPAA
            45&nbsp;C.F.R. §164.514 or GDPR anonymisation guidance are the accepted baseline.
          </p>
        </Sub>
        <Sub title="4.3 Genetic data is special">
          <p>
            Genetic information is inherently identifying — even de-identified sequence data can carry
            re-identification risk. Re-identification attempts, unauthorised secondary analysis, and using project
            data to build external datasets are prohibited. Aggregated, genuinely anonymised statistics may be used
            for platform reporting only where no individual or project is identifiable.
          </p>
        </Sub>
        <Sub title="4.4 Secondary use">
          <p>
            Results and raw data may be used only for the purpose the Customer engaged. Providers may not reuse,
            re-analyse, publish or monetise project data without the Customer&apos;s written consent.
          </p>
        </Sub>
      </Section>

      <Section n="5" title="Material transfer and shipping">
        <p>
          Sample movement follows the project contract. Parties are responsible for lawful packaging, cold-chain
          where required, customs declarations and export/import permits. A Material Transfer Agreement (MTA) is
          recommended for regulated or high-value materials and may be required by a Provider&apos;s own compliance
          rules. Chain-of-custody events are recorded in the project timeline; disputes about shipment condition are
          resolved against that record.
        </p>
      </Section>

      <Section n="6" title="Biosafety and dual-use">
        <p>
          Work must be performed at the biosafety level appropriate to the material, under the provider&apos;s
          institutional biosafety approvals and applicable national rules (for Pakistan, the National Biosafety
          Committee framework and Pakistan Biosafety Rules). The following are prohibited on the Gateway:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>work on select agents or controlled pathogens without the required permits;</li>
          <li>gain-of-function or enhanced-pathogen research intended to increase transmissibility or virulence;</li>
          <li>work intended for the development of biological weapons or other hostile applications;</li>
          <li>transfers that violate export-control or sanctions law.</li>
        </ul>
        <p>
          RFQs with dual-use indicators may be flagged for manual review. Syntax may request additional
          documentation, route to specialist review, or decline the request entirely.
        </p>
      </Section>

      <Section n="7" title="Genetic resources and benefit sharing">
        <p>
          Collection and use of genetic resources (plant, animal, microbial or environmental) must comply with the
          laws of the source country, including access and benefit-sharing obligations under the Nagoya Protocol
          where applicable. Customers must hold the permits and provenance documentation for samples sourced outside
          their jurisdiction, and must not use the platform to circumvent benefit-sharing duties.
        </p>
      </Section>

      <Section n="8" title="Data lifecycle on the platform">
        <ul className="list-disc space-y-1.5 pl-5">
          <li><strong className="text-ink">Draft → release:</strong> result files upload as drafts visible to the performing Provider; they become accessible to the Customer only on release. Until released, file access is denied (HTTP 403) — a technical enforcement, not a convention.</li>
          <li><strong className="text-ink">QC records:</strong> intake QC verdicts (pass / partial / fail with measured metrics) are permanent project records; Customer proceed/resend/cancel decisions pause and resume the SLA clock.</li>
          <li><strong className="text-ink">Retention:</strong> project documents are retained per the project contract and our retention schedule (Privacy Policy §7); financial records follow statutory periods.</li>
          <li><strong className="text-ink">Deletion:</strong> valid deletion requests are honoured subject to legal holds; residual copies expire with backup rotation.</li>
        </ul>
      </Section>

      <Section n="9" title="Data ownership and derived IP">
        <p>
          The Customer owns project results, reports and their underlying data. Provider-developed methods, pipelines
          and general know-how remain the Provider&apos;s. Syntax claims no ownership over project content and uses it
          only to operate the marketplace and meet legal obligations.
        </p>
      </Section>

      <Section n="10" title="Incident handling and complaints">
        <p>
          Suspected misuse of samples or data, biosafety concerns, or unauthorised disclosure must be reported
          through the complaints process or <Link href="/company/contact" className="text-blue hover:underline">
          contact page</Link>. We investigate, may pause the affected project, and will notify affected parties and
          regulators where the law requires. Providers and Suppliers must cooperate in investigations and preserve
          relevant records.
        </p>
      </Section>
    </LegalShell>
  );
}
