import React from 'react';
import Image from 'next/image';
import FadeIn from "@/components/MotionWrapper";
import { ShieldCheck, HardHat, FileText, ClipboardCheck, CheckCircle2, ArrowRight, Construction } from 'lucide-react';

const SafeContractorPage = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      
      {/* 🔹 1. HERO SECTION (Consistent Signature Style) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Step 1: Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Constructions.jpg" // Health & Safety / Site Inspection focused image
            alt="SafeContractor Accreditation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        </div>

        {/* Step 2: Large Watermark Text (Middle Layer) */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[12rem] font-black text-white/[0.05] leading-none uppercase tracking-tighter text-center">
            SAFE <br className="md:hidden" /> CONTRACTOR
          </h2>
        </div>

        {/* Step 3: Actual Content (Top Layer) */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Health & Safety Excellence
              </span>
            </FadeIn>
            
            <FadeIn direction="right" duration="0.6">
              <h1 className="text-4xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
                SafeContractor <br />
                <span className="text-[#997819]">Accreditation</span>
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-8 text-blue-100/80 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
                Demonstrate your commitment to health and safety. We simplify the 
                complex Alcumus SafeContractor assessment, ensuring your business 
                is compliant and visible to top UK clients.
              </p>
            </FadeIn>

            {/* Signature Decor Line */}
            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 w-32 h-2 bg-[#997819] rounded-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. WHY IT MATTERS (Depth Content) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-5xl font-black text-[#12066a] tracking-tighter leading-none mb-8">
                The Gold Standard in <br /> <span className="text-[#997819]">H&S Compliance.</span>
              </h2>
              <div className="space-y-6 text-zinc-500 text-lg leading-relaxed font-medium">
                <p>
                  SafeContractor is one of the UK’s leading health and safety accreditation schemes. For contractors, it’s a way to prove that your health and safety paperwork is up to date and that you operate safely on-site.
                </p>
                <p>
                  At BizGrow Holdings, we take the stress out of the annual audit. We help you build a robust Safety Management System, including Risk Assessments (RAMS), Training Records, and Policy Documents that meet the SSIP core criteria.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <div className="p-10 bg-[#12066a] rounded-[3rem] border border-zinc-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-[#997819] opacity-10"><Construction size={120} /></div>
                <h4 className="text-xl font-black text-white mb-6">Accreditation Benefits:</h4>
                <ul className="space-y-4">
                  {[
                    "Visibility in the Alcumus database (30,000+ clients)",
                    "Pre-qualification for large tenders",
                    "Reduced insurance premiums (often applicable)",
                    "Full SSIP (Safety Schemes in Procurement) recognition",
                    "Proof of legal compliance with H&S laws"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zinc-400 font-bold">
                      <CheckCircle2 size={18} className="text-[#997819] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 3. OUR AUDIT PREP PILLARS */}
      <section className="py-32 bg-[#12066a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4  text-[#997819]">Our Compliance Strategy</h2>
              <p className="text-zinc-500 max-w-2xl mx-auto">We provide the technical expertise to ensure your H&S questionnaire is approved on the first attempt.</p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Policy Development", d: "Creating bespoke Health & Safety policies that reflect your actual business operations, not just templates.", icon: <FileText /> },
              { t: "Risk Management", d: "Development of comprehensive RAMS (Risk Assessments & Method Statements) for your specific trade.", icon: <HardHat /> },
              { t: "Audit Support", d: "Handling the back-and-forth with the Alcumus assessors to resolve any queries quickly.", icon: <ClipboardCheck /> }
            ].map((pillar, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.2}>
                <div className="p-10 border border-white/10 bg-white/5 rounded-[3rem] hover:bg-white hover:text-[#12066a] transition-all duration-700 group">
                  <div className="text-[#997819] mb-8 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{pillar.t}</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-500 font-medium leading-relaxed">{pillar.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* 🔹 NEW SECTION: THE ASSESSMENT PROCESS (Steps) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs">Our Workflow</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter mt-4">
                3 Steps to  Accreditation.
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: "01", 
                t: "Gap Analysis", 
                d: "Hum aapke mojooda Health & Safety documents ka review karte hain aur dekhte hain ke SafeContractor ke standard ke mutabiq kya kami hai." 
              },
              { 
                step: "02", 
                t: "Documentation & Submission", 
                d: "Bespoke RAMS, Training matrices, aur H&S policies tyar karke portal par submit karte hain." 
              },
              { 
                step: "03", 
                t: "Liaison & Approval", 
                d: "Hum SafeContractor ke assessors ke har sawal ka jawab dete hain jab tak aapka certificate issue nahi ho jata." 
              }
            ].map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.2}>
                <div className="relative p-10 bg-white rounded-[2rem] shadow-sm border border-[#12066a] group hover:-translate-y-2 transition-all duration-500">
                  <span className="text-7xl font-black text-zinc-100 absolute top-6 right-8 group-hover:text-[#997819]/10 transition-colors">
                    {item.step}
                  </span>
                  <h4 className="text-2xl font-black text-[#12066a] mb-4 relative z-10">{item.t}</h4>
                  <p className="text-zinc-500 font-medium leading-relaxed relative z-10">{item.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 NEW SECTION: INDUSTRIES COVERED (Visual Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#12066a] rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#997819]/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
                  Sectors We <br /> <span className="text-[#997819]">Empower.</span>
                </h2>
                <p className="text-blue-100/60 text-lg font-medium mb-10">
                  Hum har kism ke contractor ko support karte hain, chahe aap akele kaam karte hon ya aapki badi team ho.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Construction", "Facilities Management", "Security Services", "Cleaning & Hygiene", "Electrical & Plumbing", "Logistics"].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/80 font-bold text-sm">
                      <div className="w-1.5 h-1.5 bg-[#997819] rounded-full"></div> {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                    <div className="h-40 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center p-6 text-center">
                       <p className="text-white font-black text-xs uppercase tracking-widest">100% Approval Rate</p>
                    </div>
                    <div className="h-60 bg-[#997819] rounded-3xl flex items-center justify-center p-6 text-center">
                       <ShieldCheck size={60} className="text-white opacity-40" />
                    </div>
                 </div>
                 <div className="space-y-4 pt-8">
                    <div className="h-60 bg-white/10 rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center p-6 text-center">
                       <p className="text-[#997819] font-black text-4xl leading-none">500+</p>
                       <p className="text-white/60 text-[10px] uppercase font-bold absolute bottom-8">Audits Passed</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🔹 4. CALL TO ACTION (CTA) */}
      <section className="py-24 bg-white px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter">Ready to <span className="text-[#997819]">Get Approved?</span></h2>
            <p className="mt-4 text-zinc-500 font-medium">"Join the elite list of safety-conscious contractors in the UK."</p>
          </div>

          <div 
            className="p-12 md:p-20 rounded-[4rem] text-center text-white relative overflow-hidden group shadow-2xl bg-[#12066a]"
            style={{ 
              backgroundImage: 'url("/10-ways-bg.jpg")', // Consistent CTA background
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-[#12066a]/90 z-0" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black mb-8 tracking-tighter">Get Your SafeContractor Seal This Month</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-12 py-6 bg-[#997819] text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white hover:text-[#12066a] transition-all duration-500 shadow-2xl">
                    Start My Assessment
                </button>
                <button className="px-12 py-6 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/10 transition-all">
                    View H&S Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default SafeContractorPage;