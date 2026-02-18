import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  Leaf,
  Globe,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Recycle,
  Wind,
} from "lucide-react";

const ISO14001Page = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      {/* 🔹 1. HERO SECTION (BizGrow Branding) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/iso-14001-hero.jpg"
            alt="ISO 14001 Certification"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[15rem] font-black text-white/[0.04] leading-none uppercase tracking-tighter">
            ISO-14001
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Environmental Management System
              </span>
            </FadeIn>

            <FadeIn direction="right" duration="0.6">
              <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
                ISO 14001:2015 <br />
                <span className="text-[#997819]">Eco-Strategic</span> Growth.
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium italic">
                "Not just for the planet, but for a leaner, more efficient, and
                legally sound business operation."
              </p>
            </FadeIn>

            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 w-32 h-2 bg-[#997819] rounded-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. THE ECO-GRID (Layout Changed to 3-Columns staggered) */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-5xl font-black text-[#12066a] tracking-tighter">
                Beyond <br /> <span className="text-[#997819]">The Green.</span>
              </h2>
              <p className="text-zinc-500 font-medium">
                ISO 14001 helps you manage environmental risks while cutting
                costs through efficiency.
              </p>
              <div className="h-64 bg-[#12066a] rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden relative">
                <Wind
                  className="text-[#997819] absolute -right-4 -top-4 opacity-20"
                  size={150}
                />
                <span className="text-white font-black text-2xl relative z-10 uppercase italic">
                  Net Zero <br /> Strategy
                </span>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                {
                  t: "Cost Reduction",
                  d: "Minimize waste and energy usage to drop overheads.",
                  icon: <Recycle />,
                  bg: "bg-white",
                },
                {
                  t: "Legal Shield",
                  d: "Total compliance with UK environmental laws.",
                  icon: <ShieldCheck />,
                  bg: "bg-white",
                },
                {
                  t: "Market Trust",
                  d: "Stand out in tenders that demand eco-certified partners.",
                  icon: <Globe />,
                  bg: "bg-[#997819] text-white",
                },
                {
                  t: "Resource Focus",
                  d: "Streamline raw material consumption for sustainability.",
                  icon: <Leaf />,
                  bg: "bg-white",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-10 rounded-[3rem] ${item.bg} shadow-sm hover:shadow-xl transition-all duration-500`}
                >
                  <div
                    className={`mb-6 ${
                      i === 2 ? "text-white" : "text-[#997819]"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight uppercase">
                    {item.t}
                  </h4>
                  <p className="opacity-70 font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. FEATURE SPLIT (Visual Change: Image on Left, Content on Right) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs mb-4 block">
                Authority
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter leading-none mb-8">
                Supply Chain <br />{" "}
                <span className="text-[#997819]">Pioneer.</span>
              </h2>
              <div className="border-l-8 border-[#997819] pl-8 py-4">
                <p className="text-xl text-zinc-600 font-bold italic leading-relaxed">
                  "Major UK contractors now prioritize ISO 14001 holders for all
                  large-scale projects."
                </p>
              </div>
              <button className="mt-10 flex items-center gap-4 font-black uppercase tracking-widest text-sm text-[#12066a] hover:text-[#997819] transition-colors">
                Explore Compliance Benefits <CheckCircle2 size={20} />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="w-full relative aspect-square bg-[#12066a] rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/supply-chain.jpg"
                  fill
                  className="object-cover opacity-60 scale-110"
                  alt="Supply Chain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 4. DOCUMENTATION (Now in a Modern List Layout) */}
      <section className="py-32 bg-[#12066a] text-white rounded-[5rem] mx-4 my-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16 text-center lg:text-left">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              EMS <span className="text-[#997819]">Blueprint.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              "Environmental Aspect Register",
              "Legal Compliance Logs",
              "Sustainability Objectives",
              "Emergency Preparedness Plan",
              "Carbon Footprint Reports",
              "Waste Transfer Notes",
            ].map((doc, idx) => (
              <div key={idx} className="group cursor-default">
                <span className="text-[#997819] font-black text-xs block mb-2 opacity-50">
                  0{idx + 1}
                </span>
                <div className="h-px bg-white/10 w-full mb-6 group-hover:bg-[#997819] transition-colors" />
                <h4 className="text-xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">
                  {doc}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 5. CTA SECTION (With Compulsory Background Image) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3.5rem] p-10 md:p-24 shadow-2xl flex flex-col items-center text-center">
            {/* 🖼️ COMPULSORY BACKGROUND IMAGE - REFINED FOR VISIBILITY */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/iso-14001-cta.jpg"
                alt="ISO 14001 CTA Background"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Branding Overlay - Sligthly reduced opacity to let the image breathe */}
              <div className="absolute inset-0 bg-[#12066a]/70 mix-blend-multiply z-10" />

              {/* Gradient to ensure text is readable but image is still visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12066a] via-[#12066a]/40 to-transparent z-20" />
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
              <FadeIn direction="up">
                <span className="inline-block text-[#997819] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs bg-white/5 px-6 py-2 rounded-full border border-white/10 mb-10">
                  Global Sustainability Standard
                </span>

                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                  Ready to Lead the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#997819] to-[#d4af37] inline-block mt-2">
                    Green Revolution?
                  </span>
                </h2>

                <p className="text-blue-100/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                  Don't just meet regulations—master them. Our ISO 14001
                  framework turns environmental duty into a commercial edge.
                </p>
              </FadeIn>

              {/* 🔘 COMPACT BUTTONS GRID */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                <FadeIn direction="up" delay={0.2}>
                  <button className="relative group/btn overflow-hidden w-full sm:w-64 bg-[#997819] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[10px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(153,120,25,0.4)]">
                    <span className="relative z-10 group-hover/btn:text-[#12066a] transition-colors duration-500">
                      Get Your Free Quote
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-0" />
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

export default ISO14001Page;
