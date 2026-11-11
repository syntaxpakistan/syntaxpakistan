"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Bell, Boxes, ClipboardList,
  Database, Eye, EyeOff, FileCheck, FlaskConical, Gavel,
  Handshake, Lock, Receipt, ShieldCheck,
  Star, TestTubes, Timer, Truck, UserCheck, Workflow,
} from "lucide-react";

import { Reveal, Stagger } from "@/components/motion-primitives";

/* ---------------------------------- data --------------------------------- */

const META = [
  { k: "Product", v: "Pakistan Biotechnology Gateway" },
  { k: "Type", v: "Multi-portal marketplace · SaaS" },
  { k: "Our role", v: "Design, engineering & operations" },
  { k: "Status", v: "Live in production" },
  { k: "Coverage", v: "Sequencing · analysis · supplies" },
  { k: "Access", v: "Public registry + member portals" },
];

const PROBLEMS = [
  {
    t: "Months lost to outsourcing",
    d: "Researchers routinely shipped samples abroad — long queues, customs friction and turnaround measured in months, not days.",
  },
  {
    t: "Opaque, one-off pricing",
    d: "Quotes arrived by email with no comparison. Nobody could see competing offers side-by-side, so nobody knew a fair price.",
  },
  {
    t: "Unverified local capacity",
    d: "Real sequencing capacity existed inside Pakistan — but there was no trusted way to discover it, verify it or route work to it.",
  },
  {
    t: "Data and samples leaving the country",
    d: "Biological material, germplasm and sequence data flowed offshore — ownership, custody and national capacity all eroded.",
  },
];

const LOOP = [
  {
    icon: ClipboardList,
    t: "Post an RFQ",
    d: "Organism, sample count, service category, requested output, deadline, budget hint. Routed to capability-matched labs, or published to the moderated open board.",
  },
  {
    icon: EyeOff,
    t: "Collect sealed quotes",
    d: "Verified labs quote blind — price, tax, guaranteed TAT, platform, deliverables. No lab ever sees a competitor's price; only a sealed-quote count.",
  },
  {
    icon: Gavel,
    t: "Award the project",
    d: "The customer compares quotes side-by-side and selects. The winning lab must accept — providers stay independent by design.",
  },
  {
    icon: FlaskConical,
    t: "Track the wet lab",
    d: "Chain-of-custody shipping, intake QC verdicts and an eight-stage work ladder — accessioning through report review — visible to the customer in real time.",
  },
  {
    icon: FileCheck,
    t: "Release results",
    d: "Files upload as drafts, release to the customer only when the lab decides. Milestone invoicing, payment verification and a closing review complete the loop.",
  },
];

const FEATURES = [
  {
    icon: EyeOff,
    t: "Sealed-bid quoting",
    d: "Labs submit quotes blind and can update them until award. Each sees only 'N sealed' — never a rival's price. Real competition, no signaling.",
  },
  {
    icon: Workflow,
    t: "LIMS-lite work stages",
    d: "Every project runs an eight-stage ladder — accessioning, sample QC, library prep, library QC, sequencing, data processing, analysis, report review — each timestamped and customer-visible.",
  },
  {
    icon: TestTubes,
    t: "QC gates with decisions",
    d: "Structured metrics — Qubit ng/µL, RIN/DV200, 260/280 — scored PASS, PARTIAL or FAIL. Flagged QC pauses for a customer decision: proceed under disclaimer, resend, or cancel.",
  },
  {
    icon: FileCheck,
    t: "Staged result release",
    d: "Uploads sit as private drafts until the lab releases them. Customers get a 403 on unreleased files — results land only when the science is ready.",
  },
  {
    icon: Timer,
    t: "SLA clock with pause",
    d: "The due date is set from the lab's guaranteed TAT at award. Pausing records whose clock the wait sits on — lab or customer — and resumes honestly.",
  },
  {
    icon: Receipt,
    t: "Milestone invoicing",
    d: "Partial invoices per milestone. Customers report payment with method and reference; labs verify; settlement completes on payout.",
  },
  {
    icon: Eye,
    t: "Masked until awarded",
    d: "Customer identity is reduced to org type and city until a quote is selected. Lab internals — technician, storage location, LIMS refs — never render to the customer.",
  },
  {
    icon: UserCheck,
    t: "Verification & moderation",
    d: "Every provider and supplier is reviewed before going live. Board posts and service listings queue for platform review — unapproved work is invisible everywhere.",
  },
];

const SURFACES = [
  {
    icon: Boxes,
    t: "Service marketplace",
    d: "Providers publish priced service listings with per-listing price visibility — public, members-only or quote-only — each moderated before it reaches the catalog.",
  },
  {
    icon: Truck,
    t: "Supplies marketplace",
    d: "Indigenous kits, reagents and consumables. Enquiry → priced offer → invoice → paid → fulfilled — the full Quartzy-style loop, inside the same account.",
  },
  {
    icon: Star,
    t: "Verified registry",
    d: "A public directory of approved facilities — platforms, sample types, HPC capacity and review ratings earned from completed projects.",
  },
];

const TRUST = [
  { icon: Lock, t: "Strict role isolation", d: "Every account is confined to its own portal — server-enforced on each request." },
  { icon: ShieldCheck, t: "Audit everything", d: "RFQ created, quote submitted, award, release, payout — every action logged with its actor." },
  { icon: Bell, t: "20+ notification events", d: "In-app bell plus email copies across every state change in the loop." },
  { icon: Database, t: "Data stays home", d: "Samples, sequence data and outputs remain with Pakistani scientists and institutions." },
];

const IMPACT = [
  { t: "Turnaround in days", d: "Work routes to local verified facilities — no export queues, no customs limbo." },
  { t: "Real price discovery", d: "Sealed competing quotes replace single-vendor email pricing." },
  { t: "Capacity made visible", d: "Every lab, platform and supplier is reviewed and searchable in one place." },
  { t: "Data stays sovereign", d: "Biological material and sequence data remain with Pakistani institutions." },
  { t: "Accountable delivery", d: "Stages, QC gates and milestone payments make progress verifiable, not promised." },
  { t: "Local expertise compounds", d: "Every project builds sequencing and bioinformatics capacity inside the country." },
];

/* ---------------------------------- page ---------------------------------- */

export function ProjectsPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-2 via-navy to-navy pb-20 pt-[185px]">
        <div className="grid-lines on-dark absolute inset-0" />
        <div className="glow-orb left-[-320px] top-[-340px] size-[500px] bg-blue-bright/15" />
        <div className="glow-orb right-[5%] bottom-[-150px] size-[350px] bg-mint/10" />
        <div className="container-x relative">
          <Reveal>
            <p className="mt-5 inline-block rounded-full border border-white/25 px-4 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#c5d2e1]">
              Featured project · 01
            </p>
            <h1 className="h-display on-dark mt-5 max-w-3xl">
              Pakistan <em className="grad-text">Biotechnology</em> Gateway
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#c5d2e1]">
              A federated digital marketplace connecting researchers, universities, hospitals
              and industry with verified sequencing labs, bioinformatics providers and
              indigenous suppliers — one record from request-for-quote to released results.
            </p>
          </Reveal>
          <Reveal delay={1} className="mt-7 flex flex-wrap gap-2.5">
            {["Marketplace", "Multi-portal SaaS", "Sealed bidding", "LIMS-lite", "Escrow-style payments"].map((t) => (
              <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium text-[#c5d2e1]">
                {t}
              </span>
            ))}
          </Reveal>
          <Reveal delay={2} className="mt-9 flex flex-wrap gap-3">
            <span className="btn-wrap">
              <a href="https://pbg-teal.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-white">
                See it live <ArrowUpRight className="size-4" />
              </a>
            </span>
            <Link href="/contact" className="btn-ghost on-dark">Start a project</Link>
          </Reveal>
        </div>
      </section>

      {/* at a glance */}
      <section className="border-b border-line bg-surface py-12">
        <div className="container-x">
          <Stagger className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
            {META.map((m) => (
              <Reveal key={m.k}>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted">{m.k}</p>
                <p className="mt-1.5 text-[13.5px] font-medium leading-snug text-ink">{m.v}</p>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* the problem */}
      <section className="border-b border-line bg-surface py-16">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The problem</p>
            <h2 className="h-section mt-3 max-w-2xl">Pakistani science was sending its samples — and its data — abroad</h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p) => (
              <div key={p.t} className="card p-6">
                <h3 className="text-[15.5px] font-semibold text-ink">{p.t}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{p.d}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* the solution */}
      <section className="border-b border-line bg-paper py-16">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The solution</p>
            <h2 className="h-section mt-3 max-w-2xl">One platform. One record. RFQ to report.</h2>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-body">
              The Gateway doesn't run a lab — it runs the marketplace. Researchers post what
              they need, verified providers compete for it blind, and the winning lab delivers
              inside a single project record: shipping, QC, stages, files and invoices — with
              Syntax of Life operating verification, moderation and settlement.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="btn-wrap">
                <Link href="/contact" className="btn-primary">Request a quote <ArrowRight className="size-4" /></Link>
              </span>
              <Link href="/partners" className="btn-outline">Meet the providers</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* the core loop */}
      <section className="border-b border-line bg-surface py-16">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The core loop</p>
            <h2 className="h-section mt-3">RFQ to results in five moves</h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {LOOP.map((s, i) => (
              <div key={s.t} className="card card-hover flex flex-col p-5">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-navy text-mint">
                    <s.icon className="size-4.5" strokeWidth={1.8} />
                  </span>
                  <span className="font-display text-[13px] font-semibold text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* deep features */}
      <section className="border-b border-line bg-surface py-16">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Engineering highlights</p>
            <h2 className="h-section mt-3">The parts that make it fair — and honest</h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.t} className="card card-hover p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-paper-2 text-navy">
                  <f.icon className="size-4.5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-[14.5px] font-semibold text-ink">{f.t}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{f.d}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* marketplace surfaces */}
      <section className="border-b border-line bg-paper py-16">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Public surfaces</p>
            <h2 className="h-section mt-3">Beyond the project loop</h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-5 md:grid-cols-3">
            {SURFACES.map((s) => (
              <div key={s.t} className="card card-hover p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-(--st-blue-bg) text-(--st-blue-fg)">
                  <s.icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-[15.5px] font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* trust & security — navy band */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-2 via-navy to-navy py-16">
        <div className="grid-lines on-dark absolute inset-0" />
        <div className="glow-orb right-[10%] top-[-180px] size-[400px] bg-blue-bright/12" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow on-dark">Trust &amp; security</p>
            <h2 className="h-section on-dark mt-3">Built to be audited</h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.t} className="card-dark rounded-2xl p-5">
                <t.icon className="size-5 text-mint" strokeWidth={1.8} />
                <h3 className="mt-3.5 text-[14.5px] font-semibold text-white">{t.t}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[#a2c1d7]">{t.d}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* why it matters */}
      <section className="border-b border-line bg-surface py-14">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Why it matters</p>
                <h2 className="h-section mt-3">What changes when capacity stays home</h2>
              </div>
            </div>
          </Reveal>
          <Stagger className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT.map((i) => (
              <div key={i.t} className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 size-4.5 shrink-0 text-(--st-green-fg)" />
                <div>
                  <p className="text-[14px] font-semibold text-ink">{i.t}</p>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted">{i.d}</p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-16">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-2 via-navy to-navy px-8 py-12 text-center sm:px-12">
              <div className="grid-lines on-dark absolute inset-0" />
              <div className="glow-orb left-[15%] top-[-120px] size-[320px] bg-mint/15" />
              <div className="relative">
                <Handshake className="mx-auto size-8 text-mint" strokeWidth={1.5} />
                <h2 className="h-section on-dark mx-auto mt-4 max-w-xl">
                  This is what we build — and run
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-[#c5d2e1]">
                  The Gateway is live and routing real work today. Post your study, or talk to
                  us about what the platform can do for your program.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <span className="btn-wrap">
                    <Link href="/contact" className="btn-primary">
                      Request a quote <ArrowRight className="size-4" />
                    </Link>
                  </span>
                  <a href="https://pbg-teal.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-ghost on-dark">
                    Visit the platform <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
