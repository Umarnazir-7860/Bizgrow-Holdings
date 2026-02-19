import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  CheckCircle2,
  Zap,
  FileBadge,
  Clock,
  ShieldCheck,
  ClipboardList,
  BarChart3,
} from "lucide-react";

const SMASPage = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden font-sans">
      {/* 🔹 1. HERO SECTION (Speed & Compliance Vibe) */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#12066a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/smas-h.jpg"
            alt="Safety Compliance"
            fill
            className="object-cover opacity-40 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12066a] via-[#12066a]/40 to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
                <Zap className="text-yellow-400 animate-pulse" size={16} />
                <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">
                  Fast-Track SSIP Accreditation
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                SMAS <br />
                <span className="text-[#997819]">WORKSAFE.</span>
              </h1>

              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed italic">
                Get SSIP recognized in record time. We handle the full H&S
                assessment so you can focus on winning the contract.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. VALUE PROPOSITION (Clean Trio) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              t: "SSIP Certified",
              d: "Nationally recognized Health & Safety standard.",
              icon: <ShieldCheck />,
            },
            {
              t: "Fast Turnaround",
              d: "From audit to certificate in days, not months.",
              icon: <Clock />,
            },
            {
              t: "Full Support",
              d: "We write the policies you're missing.",
              icon: <FileBadge />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#997819] mb-6 group-hover:bg-[#12066a] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-[#12066a] uppercase mb-3">
                {item.t}
              </h4>
              <p className="text-zinc-500 text-sm font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 3. THE COMPLIANCE GRID (Refined Card Layout) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading aur Description Section: In 3 classes ko change kiya hai */}
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter leading-none uppercase">
              Full <span className="text-[#997819]">Audit</span> Coverage.
            </h2>
            {/* max-w-md ko hata kar margin top add kiya hai balance ke liye */}
            <p className="text-zinc-400 max-w-2xl font-medium mt-6 italic">
              We ensure your business meets all 12 core elements of the SSIP
              threshold standard.
            </p>
          </div>

          {/* Grid remains the same */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "H&S Policy & Arrangements",
              "Risk Assessments",
              "COSHH Assessments",
              "Training & Supervision",
              "Sub-contractor Management",
              "Accident Reporting",
            ].map((text, i) => (
              <div
                key={i}
                className="p-8 border border-zinc-100 rounded-[2rem] hover:bg-zinc-50 transition-colors flex items-center gap-6 group"
              >
                <CheckCircle2 className="text-zinc-200 group-hover:text-[#997819] transition-colors" />
                <span className="font-bold text-[#12066a] uppercase text-sm tracking-tight">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 4. DATA BAR (Impact Metrics) */}
      <section className="py-20 bg-[#12066a] mx-6 rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-10">
          {[
            { n: "100%", t: "Pass Rate" },
            { n: "5 Days", t: "Avg. Turnaround" },
            { n: "500+", t: "Firms Audited" },
            { n: "£0", t: "Hidden Fees" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <span className="text-5xl font-black text-white block mb-2 tracking-tighter">
                {stat.n}
              </span>
              <span className="text-[#997819] font-black uppercase text-[10px] tracking-widest">
                {stat.t}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 5. THE PROCESS (Left-Aligned Steps) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Steps on the Left */}
            <div>
              <h2 className="text-5xl font-black text-[#12066a] tracking-tighter leading-none mb-16 uppercase">
                Streamlined <br />{" "}
                <span className="text-[#997819]">Onboarding.</span>
              </h2>
              <div className="space-y-12">
                {[
                  {
                    t: "Evidence Review",
                    d: "We analyze your existing H&S documents.",
                  },
                  {
                    t: "Gap Remediation",
                    d: "We build the missing safety protocols for you.",
                  },
                  {
                    t: "Portal Submission",
                    d: "Our experts manage the SMAS Worksafe portal.",
                  },
                  {
                    t: "Certification",
                    d: "Official SSIP certificate issued to your firm.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-4xl font-black text-zinc-300 group-hover:text-[#997819] transition-colors">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-black text-[#12066a] uppercase text-lg mb-2">
                        {step.t}
                      </h4>
                      <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
                        {step.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual on the Right */}
            <div className="relative h-[600px] bg-zinc-900 rounded-[4rem] overflow-hidden group">
              <Image
                src="/smas-process.jpg"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
                alt="Audit Process"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-10 bg-white shadow-2xl rounded-[2.5rem] flex flex-col items-center">
                  <ClipboardList className="text-[#997819] mb-4" size={48} />
                  <span className="text-[#12066a] font-black uppercase tracking-widest text-xs">
                    Ready for Audit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. SSIP LOGO STRIP (Trust) */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {/* Replace with actual SSIP member logos if available */}
            <span className="font-black text-xl italic uppercase tracking-tighter">
              CHAS Registered
            </span>
            <span className="font-black text-xl italic uppercase tracking-tighter">
              SafeContractor
            </span>
            <span className="font-black text-xl italic uppercase tracking-tighter">
              Constructionline
            </span>
          </div>
        </div>
      </section>

      {/* 🔹 7. CTA SECTION (Fixed Parallax Effect) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3.5rem] p-10 md:p-24 shadow-2xl flex flex-col items-center text-center">
            {/* 🖼️ FIXED PARALLAX BACKGROUND */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed transition-transform duration-300 "
                style={{ backgroundImage: "url('/smas-cta.jpg')" }}
              />
              <div className="absolute inset-0 bg-[#12066a]/40 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12066a]/40 to-[#12066a] z-20" />
            </div>

            <div className="relative z-30 w-full max-w-4xl flex flex-col items-center">
              <FadeIn direction="up">
                <span className="inline-block text-[#997819] font-black uppercase tracking-[0.5em] text-[10px] bg-white/5 px-6 py-2 rounded-full border border-white/10 mb-10">
                  Accreditation Guaranteed
                </span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase">
                  Fast-Track <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#997819] to-[#d4af37] inline-block mt-2">
                    Your Success.
                  </span>
                </h2>
              </FadeIn>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
                <FadeIn direction="up" delay={0.2}>
                  <button className="relative group/btn overflow-hidden w-full sm:w-64 bg-[#997819] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[10px] transition-all duration-500">
                    <span className="relative z-40 group-hover/btn:text-[#12066a] transition-colors duration-500">
                      Get Your SMAS Badge
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-30" />
                  </button>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SMASPage;
