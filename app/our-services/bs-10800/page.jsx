import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Users,
  Search,
  Scale,
  Building2,
  FileCheck,
  ShieldAlert,
  ArrowRight,
  HelpCircle,
  ClipboardList,
  PhoneCall,
} from "lucide-react";

const BS10800Page = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      {/* 🔹 1. HERO SECTION (Signature BizGrow Style) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bs10800-hero.jpg"
            alt="BS 10800 Security Standard UK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Prominent Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[15rem] font-black text-white/[0.09] leading-none uppercase tracking-tighter">
            SAFETY
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                British Standard for Security
              </span>
            </FadeIn>

            <FadeIn direction="right" duration="0.6">
              <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter uppercase">
                BS 10800 <br />
                <span className="text-[#997819]">CONSULTANCY.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium italic">
                "The essential benchmark for organizations providing manned
                guarding and professional security operations in the UK."
              </p>
            </FadeIn>

            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 flex items-center gap-4">
                <div className="w-32 h-2 bg-[#997819] rounded-full" />
                <ShieldCheck className="text-white/20" size={30} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. UK COMPLIANCE AUDIT (Grid Layout) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter uppercase mb-16">
            UK SECURITY <br />
            <span className="text-[#997819]">COMPLIANCE.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                t: "Manned Guarding",
                d: "Ensuring onsite security personnel meet British code of practice standards.",
              },
              {
                t: "Vetting (BS 7858)",
                d: "Implementing rigorous background screening for all security personnel.",
              },
              {
                t: "SIA Verification",
                d: "Strict systems to ensure every guard holds a valid SIA license.",
              },
              {
                t: "Command Controls",
                d: "Management structures to oversee security contracts and responses.",
              },
              {
                t: "Tactical PPE",
                d: "Audit of uniforms and radio gear to ensure staff are fully prepared.",
              },
              {
                t: "Incident Logs",
                d: "Standardizing digital and manual logbooks for transparent site monitoring.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 hover:border-[#997819] hover:shadow-xl transition-all group"
              >
                <CheckCircle2 size={20} className="text-[#997819] mb-4" />
                <h4 className="font-black text-[#12066a] uppercase text-xs tracking-widest mb-2">
                  {item.t}
                </h4>
                <p className="text-zinc-500 text-[13px] font-medium leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 3. WHY BS 10800 MATTERS (Strategic Benefits) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
            <h3 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase mb-10">
              STRATEGIC <br />{" "}
              <span className="text-[#997819]">ADVANTAGE.</span>
            </h3>
            <div className="space-y-10">
              {[
                {
                  t: "Win High-Value Tenders",
                  d: "BS 10800 certification UK mein bare contracts hasil karne ke liye lazmi requirement hai.",
                  icon: <FileCheck />,
                },
                {
                  t: "Agency Credibility",
                  d: "Professionalism ka saboot de kar apne clients ka trust aur premium contracts jeetein.",
                  icon: <ShieldCheck />,
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex gap-6 border-l-4 border-zinc-100 pl-8 hover:border-[#997819] transition-all group"
                >
                  <div className="text-[#997819] group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-[#12066a] uppercase text-2xl tracking-tighter">
                      {benefit.t}
                    </h4>
                    <p className="text-zinc-500 font-medium">{benefit.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 rounded-[4rem] overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-700">
            <Image
              src="/security-professional.jpg"
              alt="Security Guard"
              width={600}
              height={600}
              className="object-cover h-92"
            />
          </div>
        </div>
      </section>

      {/* 🔹 4. BS 10800 VS ACS (Competitive Comparison) */}
      <section className="py-24 bg-[#12066a] text-white relative overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl text-center font-black tracking-tighter uppercase mb-12">
            BS 10800 <span className="text-[#997819]">VS ACS.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm">
              <h4 className="text-[#997819] font-black text-2xl mb-4">
                ACS (SIA)
              </h4>
              <p className="text-blue-100/60 text-sm font-medium">
                Primarily focuses on high-level organizational management and
                overall business governance in the security sector.
              </p>
            </div>
            <div className="p-10 bg-[#997819] rounded-[3rem] shadow-2xl">
              <h4 className="text-white font-black text-2xl mb-4 uppercase">
                BS 10800
              </h4>
              <p className="text-white/90 text-sm font-black italic">
                The practical gold standard. It targets operational rigor and
                onsite service delivery, ensuring your guarding personnel
                perform to British code of practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. ROADMAP TO CERTIFICATION (Process Step-by-Step) */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-[#12066a] tracking-tighter uppercase leading-none">
              OUR <span className="text-[#997819]">PROCESS.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                t: "Gap Analysis",
                d: "Reviewing your current security management systems against BS 10800.",
              },
              {
                n: "02",
                t: "Manual Prep",
                d: "Drafting compliant policies, risk assessments, and incident logs.",
              },
              {
                n: "03",
                t: "Staff Vetting",
                d: "Ensuring all personnel meet the strict BS 7858 vetting requirements.",
              },
              {
                n: "04",
                t: "Audit Support",
                d: "Full technical support through the final certification audit process.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[3rem] border border-zinc-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all"
              >
                <span className="text-5xl font-black text-[#997819]/50 mb-6">
                  {step.n}
                </span>
                <h5 className="font-black text-[#12066a] uppercase mb-3 tracking-tighter text-lg">
                  {step.t}
                </h5>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 6. FAQs (SEO Boost) */}
      <section className="py-22 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase mb-20 text-center">
            COMMON <span className="text-[#997819]">QUESTIONS.</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Is BS 10800 mandatory for UK security companies?",
                a: "While not legally mandatory like SIA licensing, it is often a compulsory requirement for winning public sector and high-end private security tenders.",
              },
              {
                q: "How long does the certification process take?",
                a: "Typically, it takes 4-8 weeks depending on the current state of your agency's documentation and staff vetting records.",
              },
              {
                q: "Does BS 10800 replace ISO 9001?",
                a: "No, BS 10800 is a sector-specific standard that works alongside ISO 9001 to prove expertise in security service delivery.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:border-[#997819] transition-all group"
              >
                <h4 className="font-black text-[#12066a] uppercase text-sm mb-4 flex gap-3">
                  <HelpCircle className="text-[#997819]" size={18} /> {faq.q}
                </h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 7. CALL TO ACTION (Fixed Background / Parallax Style) */}
      <section className="py-24 px-6 bg-white relative">
        <FadeIn direction="up">
          <div className="max-w-7xl mx-auto relative rounded-[4rem] overflow-hidden shadow-3xl group">
            {/* --- FIXED BACKGROUND LAYER --- */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: "url('/bs10800-cta.jpg')",
              }}
            >
              {/* Deep Overlay: Text readability ke liye zaroori hai */}
              <div className="absolute inset-0 bg-[#12066a]/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#12066a]/40" />
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 p-12 md:p-24 text-center flex flex-col items-center">
              {/* Background Watermark Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
                BIZGROW
              </div>

              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-10 uppercase relative z-10 leading-[0.9]">
                  BECOME <br />
                  <span className="text-[#997819]">BS 10800 CERTIFIED.</span>
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <p className="text-blue-100/70 mb-12 font-medium max-w-2xl mx-auto text-lg md:text-xl italic">
                  "Elevate your security agency to the gold standard of UK
                  manned guarding. Professionalism, compliance, and trust—all in
                  one certification."
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                  <button className="bg-[#997819] text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-[#12066a] transition-all duration-700 shadow-2xl group flex items-center gap-3">
                    Get Expert Consultancy
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>

                  <a
                    href="tel:+447898205035"
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#12066a] transition-all duration-500 flex items-center gap-3"
                  >
                    <PhoneCall size={18} /> Call Now
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};

export default BS10800Page;
