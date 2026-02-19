import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  HardHat,
  Construction,
  Trophy,
  ShieldCheck,
  Target,
  FileSearch,
  ArrowUpRight,
} from "lucide-react";

const ConstructionlinePage = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden font-sans">
      {/* 🔹 1. HERO SECTION (Site-Engineered Look) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden ">
        <div className="absolute inset-0 z-0">
          <Image
            src="/h.jpg"
            alt="Construction Site"
            fill
            className="object-cover  transition-all duration-1000"
            priority
          />
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-3 bg-[#997819]/20 border border-[#997819]/30 px-4 py-2 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#997819] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#997819]"></span>
                </span>
                <span className="text-[#997819] font-black uppercase tracking-[0.3em] text-[10px]">
                  UK Procurement Ready
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                CONSTRUCTION <br />
                <span className="text-[#997819]">LINE.</span>
              </h1>

              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
                Unlock the UK's largest procurement network. We handle your
                Silver, Gold, or Platinum membership from audit to approval.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. THE TIER SELECTOR (Unique Horizontal Card Design) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase">
              Pick Your <br />{" "}
              <span className="text-[#997819]">Membership.</span>
            </h2>
            <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest">
              Tailored Support for every level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: "Silver",
                desc: "PAS91 Compliance & Basic PQQ",
                icon: <Construction />,
              },
              {
                level: "Gold",
                desc: "Full H&S, Quality & Environment",
                icon: <Trophy />,
              },
              {
                level: "Platinum",
                desc: "Maximum Audit & Supply Chain Trust",
                icon: <ShieldCheck />,
              },
            ].map((tier, i) => (
              <div
                key={i}
                className="group p-10 bg-white rounded-[2rem] border border-zinc-100 hover:border-[#997819] transition-all duration-500 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-zinc-100 group-hover:text-[#997819]/10 transition-colors">
                  <span className="text-8xl font-black leading-none italic">
                    {i + 1}
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-[#12066a] group-hover:bg-[#12066a] group-hover:text-white transition-all duration-500 mb-8">
                    {tier.icon}
                  </div>
                  <h4 className="text-3xl font-black text-[#12066a] mb-2">
                    {tier.level}
                  </h4>
                  <p className="text-zinc-400 font-medium text-sm">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 3. WHY IT MATTERS (Blueprint Split Layout) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-zinc-100 rounded-[4rem] -rotate-3" />
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                <Image
                  src="/blueprint-work.jpg"
                  width={600}
                  height={700}
                  alt="Blueprint"
                  className="object-cover h-[430px]"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs mb-6">
                Market Authority
              </h3>
              <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter leading-none mb-10">
                Stop Chasing, <br />{" "}
                <span className="text-[#997819]">Start Winning.</span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    t: "SSIP Mutual Recognition",
                    d: "Automatic H&S accreditation when you go Gold.",
                  },
                  {
                    t: "Tier 1 Visibility",
                    d: "Appear in searches by Balfour Beatty, Kier, and Morgan Sindall.",
                  },
                  {
                    t: "Pre-Qualified Status",
                    d: "No more repetitive PQQ forms for every new job.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-[#997819] mt-3 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="font-black text-[#12066a] text-lg uppercase">
                        {item.t}
                      </h4>
                      <p className="text-zinc-500 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 4. PROCUREMENT METRICS (Dark Dashboard Style) */}
      <section className="py-24 bg-[#12066a] mx-6 rounded-[4rem] my-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { n: "2,500+", t: "Active Buyers" },
              { n: "45k+", t: "Registered Firms" },
              { n: "£1Bn+", t: "Contract Value" },
              { n: "100%", t: "Audit Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center md:text-left border-l border-white/10 pl-8"
              >
                <h5 className="text-5xl font-black text-white tracking-tighter mb-2">
                  {stat.n}
                </h5>
                <p className="text-[#997819] font-black uppercase tracking-widest text-[10px]">
                  {stat.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 5. OUR PROCESS (Refined Left-Aligned Stepper) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE: STEPS */}
            <div className="relative">
              <FadeIn direction="right">
                <h2 className="text-5xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-[0.9] mb-16 uppercase">
                  We take the <br />
                  <span className="text-[#997819]">Complexity</span> out.
                </h2>
              </FadeIn>

              <div className="space-y-10 relative">
                {/* Vertical line connecting numbers (Optional aesthetic) */}
                <div className="absolute left-6 top-10 bottom-10 w-px bg-zinc-100 z-0 hidden md:block" />

                {[
                  {
                    t: "Gap Analysis",
                    d: "We review your current certificates and fill the voids.",
                  },
                  {
                    t: "Document Builder",
                    d: "We write your policies to match Constructionline standards.",
                  },
                  {
                    t: "Portal Management",
                    d: "We upload and manage the entire application on your behalf.",
                  },
                  { t: "Approval", d: "You get the badge. You get the work." },
                ].map((step, i) => (
                  <FadeIn key={i} delay={i * 0.1} direction="up">
                    <div className="flex items-start gap-8 group relative z-10">
                      {/* Step Number */}
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#12066a] font-black text-xl group-hover:bg-[#12066a] group-hover:text-white transition-all duration-500 shadow-sm">
                        0{i + 1}
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="font-black text-[#12066a] uppercase text-base tracking-tight">
                            {step.t}
                          </h4>
                          {/* Horizontal Divider Line */}
                          <div className="h-px flex-1 bg-zinc-100 group-hover:bg-[#997819]/30 transition-all duration-500" />
                        </div>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-md italic">
                          {step.d}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: VISUAL ELEMENT */}
            <div className="sticky top-32">
              <div className="bg-[#12066a] rounded-[3.5rem] p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-[4/5]  w-full bg-zinc-900 rounded-[3rem] overflow-hidden relative">
                  <Image
                    src="/construction-process.jpg"
                    fill
                    className="object-cover opacity-50 group-hover:scale-110 transition-transform  duration-[2s]"
                    alt="Construction Process"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Animated Target Radar */}
                      <div className="absolute inset-0 rounded-full bg-[#997819]/20 animate-ping" />
                      <div className="w-28 h-28 bg-[#997819]/90 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 border-4 border-white/20">
                        <Target className="text-white" size={44} />
                      </div>
                    </div>
                  </div>
                  {/* Bottom Label Overlay */}
                  <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-white font-black uppercase tracking-widest text-[10px]">
                      Project Milestone Tracker
                    </p>
                    <div className="h-1 w-full bg-white/20 mt-3 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-[#997819] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. TECHNICAL CHECKLIST (Minimalist Strip) */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-16 gap-y-10">
          {[
            "Financial Records",
            "H&S Policies",
            "Anti-Bribery Policy",
            "Modern Slavery Statement",
            "Equal Ops",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <ArrowUpRight className="text-[#997819]" size={16} />
              <span className="font-black uppercase tracking-tighter text-[11px] text-[#12066a]">
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 7. CTA SECTION (With Background Image) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3.5rem] p-10 md:p-24 shadow-2xl flex flex-col items-center text-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/constructionline-cta.jpg"
                alt="Constructionline Accreditation"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-[#12066a]/40 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#12066a]/10 via-[#12066a]/30 to-[#12066a] z-20" />
            </div>

            <div className="relative z-30 w-full max-w-4xl flex flex-col items-center">
              <FadeIn direction="up">
                <span className="inline-block text-[#997819] font-black uppercase tracking-[0.5em] text-[10px] bg-white/5 px-6 py-2 rounded-full border border-white/10 mb-10">
                  Ready for Tier-1 Work
                </span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase">
                  Join the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#997819] to-[#d4af37] inline-block mt-2">
                    Elite Ranks.
                  </span>
                </h2>
              </FadeIn>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
                <FadeIn direction="up" delay={0.2}>
                  <button className="relative group/btn overflow-hidden w-full sm:w-64 bg-[#997819] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[10px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(153,120,25,0.4)]">
                    <span className="relative z-40 group-hover/btn:text-[#12066a] transition-colors duration-500">
                      Get Verified Now
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

export default ConstructionlinePage;
