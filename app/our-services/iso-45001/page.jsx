import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import { 
  ShieldAlert, 
  Users, 
  HardHat, 
  Activity, 
  Stethoscope, 
  ClipboardCheck, 
  HeartPulse 
} from "lucide-react";

const ISO45001Page = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      {/* 🔹 1. HERO SECTION (Bold Industrial Vibe) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#12066a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/iso-45001-hero.jpg" 
            alt="Workplace Safety"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12066a] via-[#12066a]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <FadeIn direction="right">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#997819]" />
                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs">
                  Health & Safety Excellence
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                ISO 45001 <br />
                <span className="text-[#997819]">Safe-Guard</span> Systems.
              </h1>
              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl leading-relaxed font-medium">
                Protecting your most valuable asset—your people—while 
                building a culture of zero-harm and operational trust.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. RISK & PROTECTION GRID (Unique Asymmetric Layout) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 p-12 bg-zinc-50 rounded-[3rem] flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-black text-[#12066a] tracking-tighter mb-6">
                Risk is <span className="text-[#997819]">Inevitable.</span> <br />
                Injury is Not.
              </h2>
              <p className="text-zinc-500 font-medium text-lg leading-relaxed">
                ISO 45001 shifts your business from reactive firefighting to 
                proactive risk management.
              </p>
            </div>
            {[
              { t: "Worker Wellbeing", d: "Reduce absenteeism through better health monitoring.", icon: <HeartPulse />, bg: "bg-[#12066a] text-white" },
              { t: "Legal Defense", d: "Solid evidence of due diligence in case of accidents.", icon: <ShieldAlert />, bg: "bg-white border border-zinc-100" },
            ].map((item, i) => (
              <div key={i} className={`p-10 rounded-[3rem] ${item.bg} flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500`}>
                <div className="text-[#997819]">{item.icon}</div>
                <div>
                  <h4 className="text-2xl font-black mb-3 tracking-tight uppercase">{item.t}</h4>
                  <p className="opacity-70 text-sm font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 3. THE SAFETY PILLARS (Vertical Split Layout) */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            <div className="lg:w-1/2 bg-[#12066a] rounded-[4rem] p-16 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-10 tracking-tight">Standard Pillars</h3>
                    <div className="space-y-12">
                        {['Hazard Identification', 'Emergency Preparedness', 'Incident Investigation'].map((text, idx) => (
                            <div key={idx} className="flex items-start gap-6 border-l-2 border-[#997819] pl-6">
                                <span className="text-[#997819] font-black italic">0{idx+1}</span>
                                <p className="font-bold text-xl uppercase tracking-tighter">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Activity className="absolute -bottom-10 -right-10 text-white/5" size={300} />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Workforce Security</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter leading-none mb-8">
                Build a <br /> <span className="text-[#997819]">Safety-First</span> <br /> Culture.
              </h2>
              <p className="text-zinc-500 font-medium text-lg leading-relaxed mb-10">
                It’s not just about ticking boxes; it’s about ensuring every member of your team 
                returns home safely, every single day.
              </p>
              <div className="flex gap-4">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-3">
                      <Users className="text-[#997819]" />
                      <span className="font-black text-[10px] uppercase tracking-widest">Team Engagement</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-3">
                      <HardHat className="text-[#997819]" />
                      <span className="font-black text-[10px] uppercase tracking-widest">PPE Compliance</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 4. COMPLIANCE JOURNEY (Horizontal Line Track) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-black text-[#12066a] tracking-tighter mb-24">The Road to <span className="text-[#997819]">Zero-Harm.</span></h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-100 -translate-y-1/2 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                { t: "Initial Audit", d: "Evaluating your current H&S gaps." },
                { t: "Policy Design", d: "Creating the OHSMS framework." },
                { t: "Staff Training", d: "Implementing safety behaviors." },
                { t: "Final Review", d: "Official UKAS accreditation." }
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 text-center group">
                  <div className="w-16 h-16 bg-[#12066a] text-[#997819] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#997819] group-hover:text-white transition-all duration-500 font-black">
                    {i+1}
                  </div>
                  <h4 className="font-black text-[#12066a] uppercase text-sm mb-2">{step.t}</h4>
                  <p className="text-zinc-400 text-xs font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. DOCUMENTATION (Industrial Dark List) */}
      <section className="py-24 bg-[#12066a] rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">Safety <br/> <span className="text-[#997819]">Instruments.</span></h3>
              <p className="text-blue-100/40 max-w-md font-medium">The essential documentation required to maintain international safety standards.</p>
           </div>
           <div className="grid md:grid-cols-2 gap-4">
              {[
                "Hazard Register & Risk Assessments",
                "Incident & Accident Logs",
                "Workplace Health Monitoring Reports",
                "Emergency Evacuation Procedures",
                "Contractor Safety Guidelines",
                "Equipment Maintenance Records"
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white transition-all duration-500">
                  <span className="text-white group-hover:text-[#12066a] font-bold tracking-tight">{doc}</span>
                  <ClipboardCheck className="text-[#997819]" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 6. METRICS (Bold Numbers) */}
      <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
             <div>
                <span className="text-7xl font-black text-[#12066a]">0%</span>
                <p className="text-[#997819] font-black uppercase tracking-widest text-[10px] mt-4">Tolerance for Non-Compliance</p>
             </div>
             <div>
                <span className="text-7xl font-black text-[#12066a]">85%</span>
                <p className="text-[#997819] font-black uppercase tracking-widest text-[10px] mt-4">Lower Workplace Accidents</p>
             </div>
             <div>
                <span className="text-7xl font-black text-[#12066a]">100%</span>
                <p className="text-[#997819] font-black uppercase tracking-widest text-[10px] mt-4">Peace of Mind</p>
             </div>
          </div>
      </section>

      {/* 🔹 7. CTA SECTION (With Background Image & Flex-Col) */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3.5rem] p-10 md:p-24 shadow-2xl flex flex-col items-center text-center">
            
            <div className="absolute inset-0 z-0">
              <Image 
                src="/iso-45001-cta.jpg" 
                alt="ISO 45001 CTA"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
             {/* Layer 1: Color Overlay - Reduced opacity to 60% so image is visible */}
  <div className="absolute inset-0 bg-[#12066a]/60 mix-blend-multiply z-10" />
  
  {/* Layer 2: Gradient for Text Clarity - Making it transparent at the top */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#12066a] via-[#12066a]/20 to-transparent z-20" />
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
              <FadeIn direction="up">
                <span className="inline-block text-[#997819] font-black uppercase tracking-[0.5em] text-[10px] bg-white/5 px-6 py-2 rounded-full border border-white/10 mb-10">
                  Secure Your Workforce
                </span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                  Ready to Protect <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#997819] to-[#d4af37] inline-block mt-2">
                    Your People?
                  </span>
                </h2>
              </FadeIn>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
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

export default ISO45001Page;