import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  ShieldCheck,
  Building2,
  Navigation,
  CheckCircle2,
  Clock,
  MapPin,
  FileText,
  PhoneCall,
  ArrowRight,
  UserCheck,
  ShieldAlert
} from "lucide-react";

const BS7499Page = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      
      {/* 🔹 1. HERO SECTION (BizGrow Signature Style) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/guarding-hero.jpg" // Image of a professional security guard at a high-end site
            alt="BS 7499 Static Site Guarding Standard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Tactical Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[16rem] font-black text-white/[0.08] leading-none uppercase tracking-tighter">
            GUARDING
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Static Guarding & Mobile Patrols
              </span>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <h1 className="text-5xl md:text-8xl font-black text-white mt-6 leading-[1.1] tracking-tighter uppercase">
                BS 7499 <br />
                <span className="text-[#997819]">OPERATIONS.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <p className="mt-10 text-blue-100/60 text-lg md:text-xl max-w-2xl leading-relaxed font-medium italic">
                "The primary British code of practice for static site guarding and mobile patrol services, ensuring operational excellence on the ground."
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. OPERATIONAL STANDARDS (Core Focus) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter uppercase mb-16 leading-none">
            SITE <br /><span className="text-[#997819]">PROTOCOLS.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Static Guarding", d: "Standardizing duties for guards stationed at fixed locations and entry points.", icon: <Building2 /> },
              { t: "Mobile Patrols", d: "Effective management of vehicle patrols and multi-site security visits.", icon: <Navigation /> },
              { t: "Assignment Instructions", d: "Drafting clear, site-specific AI logs that guards must follow strictly.", icon: <FileText /> },
              { t: "Response Procedures", d: "Defining emergency response times and escalation matrices.", icon: <ShieldAlert /> },
              { t: "Keyholding Integration", d: "Managing secure access and keyholding in line with BS 7984.", icon: <MapPin /> },
              { t: "Duty Rostering", d: "Ensuring 24/7 coverage with compliant rest periods for security staff.", icon: <Clock /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 hover:border-[#997819] hover:shadow-xl transition-all group">
                <div className="text-[#997819] mb-6">{item.icon}</div>
                <h4 className="font-black text-[#12066a] uppercase text-xs tracking-widest mb-3">{item.t}</h4>
                <p className="text-zinc-500 text-[13px] font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 3. THE BIZGROW ADVANTAGE (Why Us) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <h3 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase mb-10 leading-tight">
                GROUND-LEVEL <br /> <span className="text-[#997819]">COMPLIANCE.</span>
              </h3>
              <p className="text-zinc-500 font-medium mb-12 text-lg">
               BS 7499 is the definitive benchmark for your agency's field performance. At BizGrow, we ensure every security officer is "Site Ready" and fully aligned with comprehensive Assignment Instructions (AIs), transforming standard guarding into a high-performance security asset.
              </p>
              <div className="space-y-6">
                 {["Improved Service Reliability", "Reduced Insurance Liabilities", "SIA ACS Score Enhancement"].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="text-[#997819]" size={22} />
                      <span className="font-black text-[#12066a] uppercase text-sm italic tracking-wide">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-[4rem] overflow-hidden shadow-2xl">
                <Image src="/t.jpg" alt="Security Patrol" width={600} height={600} className="object-cover h-[500px]" />
            </div>
        </div>
      </section>

      {/* 🔹 4. BS 7499 vs BS 10800 (Comparison) */}
      <section className="py-24 bg-[#12066a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12">THE SCOPE <span className="text-[#997819]">DIFFERENCE.</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem]">
              <h4 className="text-white font-black text-2xl mb-6">BS 10800</h4>
              <p className="text-blue-100/60 text-sm font-medium leading-relaxed">Top-level management framework that oversees all security services provided by an organization.</p>
            </div>
            <div className="p-12 bg-[#997819] rounded-[3rem] text-white shadow-2xl">
              <h4 className="font-black text-2xl mb-6 uppercase tracking-tighter">BS 7499</h4>
              <p className="font-black text-sm leading-relaxed italic">Specific "On-Ground" operational code of practice specifically for static and mobile guarding activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. OUR AUDIT ROADMAP (Steps) */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20"><h2 className="text-5xl font-black text-[#12066a] tracking-tighter uppercase leading-none text-center">AUDIT <span className="text-[#997819]">PROCESS.</span></h2></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Site Survey", d: "Reviewing existing Assignment Instructions and site logs." },
              { n: "02", t: "System Build", d: "Standardizing patrol routes and emergency protocols." },
              { n: "03", t: "Training", d: "Inducting security staff into BS 7499 operational habits." },
              { n: "04", t: "Compliance", d: "Final audit to ensure every site meets British Standards." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] flex flex-col items-center text-center shadow-sm">
                <span className="text-5xl font-black text-[#997819]/50 mb-6">{step.n}</span>
                <h5 className="font-black text-[#12066a] uppercase mb-3 tracking-tighter text-lg">{step.t}</h5>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 6. FAQs (SEO Boost) */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase mb-20 text-center">COMMON <span className="text-[#997819]">QUERIES.</span></h2>
          <div className="space-y-6">
            {[
              { q: "Is BS 7499 different from BS 10800?", a: "Yes, BS 10800 is the management standard, while BS 7499 is the specific operational code for static guarding." },
              { q: "Do mobile patrol vehicles need to be audited?", a: "Yes, under BS 7499, the frequency of patrols and the integrity of the patrol vehicles are part of the compliance audit." },
              { q: "What are Assignment Instructions (AI)?", a: "These are site-specific rules that BS 7499 requires for every guard to ensure they know exactly how to protect a particular premises." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:border-[#997819] transition-all group">
                <h4 className="font-black text-[#12066a] uppercase text-sm mb-4 tracking-tighter">{faq.q}</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 7. CALL TO ACTION (Fixed Parallax Style) */}
      <section className="py-24 px-6 bg-white relative">
        <FadeIn direction="up">
          <div className="max-w-7xl mx-auto relative rounded-[4rem] overflow-hidden shadow-3xl group">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: "url('/guarding-cta.jpg')" }}
            >
              <div className="absolute inset-0 bg-[#12066a]/85 mix-blend-multiply" />
            </div>

            <div className="relative z-10 p-12 md:p-24 text-center flex flex-col items-center">
              <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-10 uppercase leading-[0.9]">
                STANDARDIZE YOUR <br/><span className="text-[#997819]">GUARDING OPERATIONS.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-[#997819] text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#12066a] transition-all duration-700 shadow-2xl group flex items-center gap-3">
                  Audit My Operations
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <a href="tel:+447898205035" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 transition-all duration-500">
                  <PhoneCall size={18} /> Call Consultant
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
};

export default BS7499Page;