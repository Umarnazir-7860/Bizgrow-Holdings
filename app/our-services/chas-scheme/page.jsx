import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  HardHat,
  ShieldCheck,
  Search,         // FileSearch ki jagah Search zyada stable hai
  CheckCircle2,
  Construction,
  ClipboardCheck,
  TriangleAlert,  // SafetyCone ki jagah TriangleAlert (Construction vibe ke liye best hai)
  Users,          // Users2 ki jagah Users
} from "lucide-react";

const CHASSchemePage = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      
      {/* 🔹 1. HERO SECTION (Prominent Safety Vibe) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/chas-hero.jpg" // Use a high-quality construction/safety image
            alt="CHAS Accreditation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Prominent Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[15rem] font-black text-white/[0.05] leading-none uppercase tracking-tighter">
            SAFETY
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Supply Chain Compliance
              </span>
            </FadeIn>

            <FadeIn direction="right" duration="0.6">
              <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter uppercase">
                CHAS <br />
                <span className="text-[#997819]"> Accreditation</span> Experts.
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium italic">
                "Leading the way in health and safety excellence for UK contractors."
              </p>
            </FadeIn>

            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 flex items-center gap-4">
                <div className="w-32 h-2 bg-[#997819] rounded-full" />
                <HardHat className="text-white/20" size={30} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. BEYOND COMPLIANCE (Asymmetric Layout) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-none uppercase">
                The <span className="text-[#997819]">Safety</span> <br /> Standard.
              </h2>
              <p className="mt-8 text-zinc-500 font-medium text-lg leading-relaxed">
                CHAS is more than just a certificate; it’s a commitment to protecting your workforce and securing your reputation on site.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "SSIP Recognition", d: "Standardize your health & safety data under one globally recognized scheme.", icon: <ShieldCheck /> },
                { t: "Risk Assessments", d: "Detailed H&S documentation prepared to meet the strictest audit standards.", icon: <Search /> },
                { t: "Tender Readiness", d: "Unlock access to local authority and public sector construction projects.", icon: <ClipboardCheck /> },
                { t: "Workforce Safety", d: "Demonstrate a proactive approach to protecting your staff and subcontractors.", icon: <Users /> },
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] ${i % 2 === 0 ? "bg-zinc-50" : "bg-[#12066a] text-white"} transition-transform hover:-translate-y-2 duration-500`}>
                  <div className="mb-6 text-[#997819]">{item.icon}</div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight uppercase italic">{item.t}</h4>
                  <p className={`${i % 2 === 0 ? "text-zinc-500" : "text-blue-100/60"} font-medium`}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. CORE AUDIT AREAS (3-Column Grid) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase">
              What We <span className="text-[#997819]">Audit.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Health & Safety Policy", "H&S Training Records", "Risk Assessments (RAMS)",
              "COSHH Assessments", "Plant & Equipment Records", "Accident Reporting",
              "Subcontractor Competence", "Asbestos Management", "Manual Handling Manuals"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-zinc-200 flex items-center gap-4 hover:border-[#997819] transition-all group">
                <CheckCircle2 size={20} className="text-[#997819]" />
                <span className="font-black text-[#12066a] uppercase text-xs tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 4. CHAS TIERS (New Comparison Layout) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-[0.9] mb-8 uppercase">
                CHAS <br /> <span className="text-[#997819]">Standard vs Elite.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-zinc-500 font-medium">Whether you need the Basic SSIP or the full Common Assessment Standard (CAS), we handle the entire application journey.</p>
                <ul className="space-y-4">
                  {["CHAS Standard (SSIP Only)", "CHAS Advanced (H&S + Ethical)", "CHAS Elite (CAS Gold Standard)"].map((tier, i) => (
                    <li key={i} className="flex items-center gap-3 font-black text-[#12066a] uppercase text-sm italic border-b pb-2">
                      <TriangleAlert className="text-[#997819]" size={16} /> {tier}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <div className="relative">
              <div className="p-2 bg-zinc-100 rounded-[3.5rem]">
                <Image src="/safety-onsite.jpg" alt="Construction Safety" width={600} height={500} className="rounded-[3rem] object-cover h-[400px]" />
              </div>
              <div className="absolute -top-10 -right-10 bg-[#997819] p-8 rounded-[2rem] text-white shadow-2xl hidden md:block">
                 <p className="text-5xl font-black">100%</p>
                 <p className="text-xs font-bold uppercase tracking-widest">Audit Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. CHAS SUBMISSION PROCESS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Gap Analysis", d: "Reviewing existing H&S policies against CHAS criteria." },
              { n: "02", t: "RAMS Prep", d: "Preparing site-specific Risk Assessments and Method Statements." },
              { n: "03", t: "Portal Upload", d: "Managing the CHAS portal submission and assessor queries." },
              { n: "04", t: "Approved", d: "Final verification and issuance of your CHAS certificate." },
            ].map((step, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] border border-zinc-100 hover:bg-[#12066a] group transition-all duration-500">
                <span className="text-5xl font-black text-[#997819]/20 group-hover:text-[#997819] transition-colors">{step.n}</span>
                <h4 className="text-xl font-black text-[#12066a] group-hover:text-white mt-6 mb-3 uppercase tracking-tighter">{step.t}</h4>
                <p className="text-zinc-500 group-hover:text-blue-100/60 text-sm font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 6. DATA DRIVEN SAFETY */}
      <section className="py-32 bg-[#12066a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/build.jpg')] bg-no-repeat bg-cover bg-fixed  opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <Construction className="text-[#997819] mx-auto mb-8" size={60} />
           <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase">
             Build with <span className="text-[#997819]">Confidence.</span>
           </h3>
           <p className="max-w-2xl mx-auto text-blue-100/60 font-medium text-lg italic">
             "Over 500 contractors trust BizGrow for their annual CHAS submissions. We don't just fill forms; we build safety cultures."
           </p>
        </div>
      </section>

      {/* 🔹 7. CTA (Signature Style) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-24 rounded-[4rem] bg-[#12066a] relative overflow-hidden group shadow-2xl text-center flex flex-col items-center">
            <div className="absolute inset-0 bg-[url('/chas-cta.png')] bg-no-repeat bg-cover bg-fixed opacity-40 pointer-events-none" />
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10 uppercase relative z-10">
              Get Your <br /> <span className="text-[#997819]">CHAS Seal.</span>
            </h2>
            <button className="relative z-10 bg-[#997819] text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-[#12066a] transition-all duration-500 shadow-3xl">
              Start Accreditation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CHASSchemePage;