import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Users,
  FileCheck,
  Search,
  Award,
  ArrowRight,
  ShieldAlert,
  BarChart,
  ClipboardList,
  Briefcase,
  Zap,
} from "lucide-react";

const SIAACSPage = () => {
  return (
    <main className="bg-white text-zinc-900">
      {/* 🔹 1. HERO SECTION (Consistent with About/Home) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* 🔹 Step 1: Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sia-acs-hero.jpg" // Is page ke liye specific image
            alt="SIA ACS Accreditation"
            fill
            className="object-cover"
            priority
          />
          {/* Black Overlay Effect for Text Readability */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        </div>

        {/* 🔹 Step 3: Large Watermark Text (Middle Layer) */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[12rem] md:text-[25rem] font-black text-white/[0.12] leading-none uppercase tracking-tighter">
            ACS
          </h2>
        </div>

        {/* 🔹 Step 4: Actual Content (Top Layer) */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Industry Gold Standard
              </span>
            </FadeIn>

            <FadeIn direction="right" duration="0.6">
              <h1 className="text-4xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
                SIA ACS <br />
                <span className="text-[#997819]">Consultancy</span> Excellence
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-8 text-blue-100/80 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
                We help UK security firms navigate the Approved Contractor
                Scheme with a 100% success rate, ensuring higher scores and
                elite market positioning.
              </p>
            </FadeIn>

            {/* Signature Decor Line */}
            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 w-32 h-2 bg-[#997819] rounded-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. DEEP INTRO PARAGRAPH (SEO & Authority) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-5xl font-black text-[#12066a] tracking-tighter mb-8">
                  Mastering the{" "}
                  <span className="text-[#997819]">
                    Approved Contractor Scheme
                  </span>
                </h2>
                <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-medium">
                  <p>
                    The Security Industry Authority (SIA) Approved Contractor
                    Scheme (ACS) is the hallmark of quality for security
                    providers in the UK. At BizGrow Holdings, we understand that
                    the accreditation process can be daunting. It requires a
                    meticulous alignment of your management systems with the
                    SIA’s rigorous Self-Assessment Workbook (SAW).
                  </p>
                  <p>
                    Our consultancy goes beyond simple document templates. We
                    embed quality into your DNA, ensuring that your business
                    processes—from recruitment and vetting to site supervision
                    and financial management—meet the 88 individual indicators
                    required for high-scoring success.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 bg-[#12066a] p-10 rounded-[3rem] border border-zinc-100 shadow-sm mt-10">
              <h4 className="text-white font-black uppercase tracking-widest text-md mb-6">
                Sectors We Cover:
              </h4>
              <ul className="space-y-4">
                {[
                  "Manned Guarding",
                  "Key Holding",
                  "Public Space CCTV",
                  "Door Supervision",
                  "Close Protection",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-white font-bold"
                  >
                    <CheckCircle2 size={18} className="text-[#997819]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. THE 7 CORE CRITERIA (Technical Depth) */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn direction="up">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs mb-4 block">
                The Audit Framework
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter ">
                The 7 Pillars of <span className="text-[#997819]">ACS</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "Strategy",
                d: "Clearly defined business goals and leadership direction.",
              },
              {
                t: "Service Delivery",
                d: "Processes for ensuring consistent client satisfaction.",
              },
              {
                t: "Commercial Relationship",
                d: "Ethical marketing and transparent contract management.",
              },
              {
                t: "Financial Management",
                d: "Proof of financial stability and proper tax compliance.",
              },
              {
                t: "Resource Management",
                d: "Efficient allocation of personnel and equipment.",
              },
              {
                t: "People",
                d: "Rigorous vetting (BS 7858) and staff training.",
              },
              {
                t: "Leadership",
                d: "Demonstrating accountability at the highest level.",
              },
              {
                t: "Customer Experience",
                d: "Effective complaint handling and client feedback loops.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-zinc-200 rounded-3xl hover:border-[#997819] transition-transform hover:scale-110 duration-300 cursor-pointer group"
              >
                <h4 className="text-xl font-black text-[#12066a] mb-3 group-hover:text-[#997819] transition-colors">
                  {pillar.t}
                </h4>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                  {pillar.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 4. OUR PROCESS (Roadmap) */}
      <section className="py-32 bg-[#12066a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
                Our Path to <br />
                <span className="text-[#997819]">Success.</span>
              </h2>
              <div className="space-y-12">
                {[
                  {
                    n: "01",
                    t: "Gap Analysis",
                    d: "We conduct a thorough audit of your current systems against SIA SAW standards.",
                  },
                  {
                    n: "02",
                    t: "Documentation",
                    d: "We create or refine Quality Manuals, SOPs, and Vetting files to be audit-ready.",
                  },
                  {
                    n: "03",
                    t: "Implementation",
                    d: "We train your office staff and guards on the new compliance requirements.",
                  },
                  {
                    n: "04",
                    t: "Pre-Audit Check",
                    d: "A final walkthrough to ensure 100% readiness for the external assessor.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-4xl font-black text-white group-hover:text-[#997819] transition-colors duration-500">
                      {step.n}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">
                        {step.t}
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {step.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10">
                <Image
                  src="/methodology.jpg"
                  alt="Compliance Audit"
                  fill
                  className="object-cover opacity-50 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12066a]/80 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <p className="text-[#997819] font-black uppercase tracking-widest text-xs mb-2">
                    Did you know?
                  </p>
                  <p className="text-sm font-medium">
                    Firms in the top 25% of ACS scores often see a 40% increase
                    in successful contract tenders.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 5. PRICING & CALL TO ACTION (CTA) */}
      <section className="py-22 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-[#12066a] tracking-tighter">
              Ready to <span className="text-[#997819]">Ascend?</span>
            </h2>
            <p className="mt-4 text-zinc-500 text-sm font-medium">
              Bespoke pricing based on your company size and sector complexity.
            </p>
          </div>

          {/* Background Image Container */}
          <div className="bg-[#12066a] p-12 md:p-32 rounded-[4rem] text-center text-white relative overflow-hidden group shadow-2xl">
            {/* 🔹 Step 1: Background Image for CTA */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-1000">
              <Image
                src="/secure.jpg" // CTA ke liye koi dark corporate image
                alt="CTA Background"
                fill
                className="object-cover"
              />
            </div>

            {/* 🔹 Step 2: Dark Overlay to keep text readable */}
            <div className="absolute inset-0 bg-[#12066a]/30 z-0" />

            {/* 🔹 Step 3: Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#997819] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity z-10"></div>

            {/* Content Layer (z-10) */}
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black mb-8 tracking-tighter">
                Secure Your SIA ACS Status Today
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-12 py-6 bg-[#997819] text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white hover:text-[#12066a] transition-all duration-500 shadow-2xl">
                  Request Full Audit Prep
                </button>
                <button className="px-12 py-6 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/10 transition-all">
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SIAACSPage;
