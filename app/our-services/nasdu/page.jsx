import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import { 
  ShieldCheck, 
  Search, 
  Eye, 
  Lock, 
  Award, 
  UserCheck, 
  Dog 
} from "lucide-react";

const NASDUPage = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden font-sans">
      
      {/* 🔹 1. HERO SECTION (Tactical & Authoritative) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Who.jpg" 
            alt="Security K9 Unit"
            fill
            className="object-cover opacity-50  transition-all duration-[2s]"
            priority
          />
          {/* Tactical Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#12066a] via-[#12066a]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg mb-8">
                <ShieldCheck className="text-[#997819]" size={16} />
                <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Elite Security Standard</span>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                NASDU <br />
                <span className="text-[#997819] not-italic">ACCREDITED.</span>
              </h1>
              
              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
                Setting the benchmark for K9 security. We provide the 
                framework for elite dog handling, training, and operational excellence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. OPERATIONAL FOCUS (Asymmetric Grid) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-gray-800 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none">
                    Vigilance Beyond <br/> <span className="text-[#997819]">Human Limits.</span>
                  </h2>
                  <p className="max-w-xl text-zinc-400 font-medium text-lg leading-relaxed">
                    NASDU accreditation proves your handlers and K9 units meet the 
                    highest UK standards for detection, protection, and public safety.
                  </p>
               </div>
               <Dog className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-[#997819]/10 transition-colors duration-700" size={400} />
            </div>
            <div className="lg:col-span-4 bg-[#997819] rounded-[3rem] p-12 flex flex-col justify-between text-white">
               <Eye size={40} className="text-white" />
               <div>
                  <h4 className="text-3xl font-black leading-tight uppercase mb-4 italic text-white">Real-Time <br/> Detection</h4>
                  <p className="text-white/80 font-bold text-sm">Certified units for narcotics, explosives, and patrol.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. CORE DISCIPLINES (Industrial List) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
           <h3 className="text-center text-[#12066a] font-black uppercase tracking-[0.4em] text-xs mb-20">Operational Spheres</h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { t: "General Purpose", d: "Patrol & Protection dogs", icon: <Lock /> },
                { t: "Drug Detection", d: "Passive & Proactive units", icon: <Search /> },
                { t: "Explosive Search", d: "High-risk environment safety", icon: <ShieldCheck /> },
                { t: "Handler Training", d: "SIA Level 2 & 3 Compliance", icon: <UserCheck /> }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-100 hover:shadow-xl transition-all duration-500 group">
                   <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-[#997819] mb-6 group-hover:bg-[#12066a] transition-colors">
                      {item.icon}
                   </div>
                   <h5 className="font-black text-[#12066a] uppercase text-lg mb-2">{item.t}</h5>
                   <p className="text-zinc-400 text-xs font-bold leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 🔹 4. THE BLUEPRINT (Split Image & Stats) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
           <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-tighter mb-12 uppercase">
                The Standard of <br/> <span className="text-[#997819]">Excellence.</span>
              </h2>
              <div className="space-y-10">
                 <div className="flex gap-6">
                    <div className="shrink-0 w-14 h-14 border-2 border-[#12066a] rounded-full flex items-center justify-center font-black">01</div>
                    <p className="text-zinc-500 font-medium pt-2 italic">Comprehensive code of practice following BS 8517 standards.</p>
                 </div>
                 <div className="flex gap-6">
                    <div className="shrink-0 w-14 h-14 border-2 border-[#12066a] rounded-full flex items-center justify-center font-black">02</div>
                    <p className="text-zinc-500 font-medium pt-2 italic">Rigorous annual inspections and field assessments.</p>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/2 relative h-[500px] w-full rounded-[4rem] overflow-hidden shadow-2xl">
              <Image src="/nasdu-discipline.jpg" fill className="object-cover" alt="K9 Discipline" />
           </div>
        </div>
      </section>

      {/* 🔹 5. OUR PROCESS (Left-Aligned Refined Stepper) */}
      <section className="py-32 bg-[#12066a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-16 uppercase ">
                Accreditation <br/> 
                <span className="text-[#997819] not-italic text-4xl md:text-5xl">Protocol.</span>
              </h2>
              <div className="space-y-12 relative">
                {[
                  { t: "Initial Vet Review", d: "Health and welfare checks for all K9 units." },
                  { t: "Handler Competency", d: "Operational drills and theoretical exams." },
                  { t: "Field Assessment", d: "Live environment testing under pressure." },
                  { t: "Final Award", d: "NASDU certification and database listing." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-8 group relative z-10">
                    <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[#997819] font-black text-lg group-hover:bg-[#997819] group-hover:text-white transition-all duration-500">
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-2 border-b border-white/5 pb-8 group-hover:border-[#997819]/50 transition-colors">
                      <h4 className="font-black text-white uppercase text-base tracking-tight mb-2">{step.t}</h4>
                      <p className="text-blue-100/40 text-sm font-medium italic">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-[3rem] p-10 relative overflow-hidden group border border-white/5 shadow-3xl">
               <div className="relative z-10">
                  <Award className="text-[#997819] mb-6" size={50} />
                  <h4 className="text-2xl font-black mb-4">Official Endorsement</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 italic">BizGrow handles the entire compliance trail, ensuring your firm is listed on the national register without the administrative headache.</p>
                  <div className="flex gap-2">
                     <div className="h-1 w-12 bg-[#997819]" />
                     <div className="h-1 w-12 bg-zinc-800" />
                     <div className="h-1 w-12 bg-zinc-800" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. CREDENTIALS (Minimalist Bar) */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-16">
          {["SIA Aligned", "BS 8517-1 Certified", "BS 8517-2 Certified", "Defra Compliant"].map((badge, i) => (
            <span key={i} className="text-[#12066a] font-black uppercase tracking-[0.2em] text-[10px] italic">
               {badge}
            </span>
          ))}
        </div>
      </section>

      {/* 🔹 7. CTA SECTION (Tactical Theme) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3.5rem] p-10 md:p-24 shadow-2xl flex flex-col items-center text-center">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/nasdu-hero.jpg" 
                alt="NASDU Certification"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/40 mix-blend-multiply z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12066a]/40 to-[#12066a] z-20" />
            </div>

            <div className="relative z-30 w-full max-w-4xl flex flex-col items-center">
              <FadeIn direction="up">
                <span className="inline-block text-[#997819] font-black uppercase tracking-[0.5em] text-[10px] bg-white/5 px-6 py-2 rounded-full border border-white/10 mb-10">
                  Command Authority
                </span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase italic">
                  Join the <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#997819] to-[#d4af37] inline-block mt-2 not-italic">
                    K9 Elite.
                  </span>
                </h2>
              </FadeIn>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
                <FadeIn direction="up" delay={0.2}>
                  <button className="relative group/btn overflow-hidden w-full sm:w-64 bg-[#997819] text-white px-8 py-5 rounded-lg font-black uppercase tracking-[0.25em] text-[10px] transition-all duration-500">
                    <span className="relative z-40 group-hover/btn:text-[#12066a] transition-colors duration-500">
                      Get Accredited
                    </span>
                    <div className="absolute inset-0 bg-white translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-30" />
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

export default NASDUPage;