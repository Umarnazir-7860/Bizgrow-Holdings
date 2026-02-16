import React from 'react';
import Image from 'next/image';
import FadeIn from "@/components/MotionWrapper";
import { ShieldCheck, Users, FileCheck, Gavel, CheckCircle2, ArrowRight } from 'lucide-react';

const COP119Page = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      
      {/* 🔹 1. HERO SECTION (Consistent Signature Style) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Step 1: Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cop119-hero.jpg" // Labour supply or recruitment themed image
            alt="COP-119 Compliance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Step 2: Large Watermark Text (Middle Layer) */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[12rem] md:text-[20rem] font-black text-white/[0.05] leading-none uppercase tracking-tighter">
            COP119
          </h2>
        </div>

        {/* Step 3: Actual Content (Top Layer) */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Labour Provision Standards
              </span>
            </FadeIn>
            
            <FadeIn direction="right" duration="0.6">
              <h1 className="text-4xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
                COP-119 <br />
                <span className="text-[#997819]">Labour Supply</span> Code
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-8 text-blue-100/80 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
                The essential Code of Practice for security companies supplying 
                labour to the industry, ensuring transparency, ethics, and 
                full regulatory compliance.
              </p>
            </FadeIn>

            {/* Signature Decor Line */}
            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 w-32 h-2 bg-[#997819] rounded-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. THE CORE OF COP-119 (Depth Content) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-none mb-8">
                Securing Your <br /> <span className="text-[#997819]">Supply Chain.</span>
              </h2>
              <div className="space-y-6 text-zinc-500 text-lg leading-relaxed font-medium">
                <p>
                  COP-119 is the Code of Practice for the provision of labour in the security and service environments. It was developed to ensure that companies supplying labour to SIA Approved Contractors meet the same high standards of vetting and management.
                </p>
                <p>
                  Our consultancy ensures your business adheres to the strict criteria of COP-119, mitigating risks associated with sub-contracting and ensuring your workforce is legally and ethically supplied.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <div className="p-10 bg-[#12066a] rounded-[3rem] border border-zinc-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-[#997819] opacity-10"><Gavel size={120} /></div>
                <h4 className="text-2xl font-black text-white mb-6">Critical Requirements:</h4>
                <ul className="space-y-4">
                  {[
                    "Standardized Screening & Vetting (BS 7858)",
                    "Financial & Tax Compliance Proof",
                    "Insurance & Public Liability Verification",
                    "Terms of Business Transparency",
                    "Right to Work Checks"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-bold">
                      <CheckCircle2 size={18} className="text-[#997819] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 3. TECHNICAL PILLARS SECTION */}
      <section className="py-32 bg-[#12066a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4  text-[#997819]">Compliance Pillars</h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">We meticulously prepare you for audit against the core COP-119 criteria.</p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Vetting & Screening", d: "Ensuring all supplied personnel undergo rigorous 5-year background checks as per industry standards.", icon: <Users /> },
              { t: "Payroll & Finance", d: "Verification of PAYE, National Insurance, and VAT compliance to avoid supply chain tax fraud.", icon: <FileCheck /> },
              { t: "Management Systems", d: "Structured processes for assigning, monitoring, and supervising supplied labour.", icon: <ShieldCheck /> }
            ].map((pillar, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.2}>
                <div className="p-10 border border-white/10 bg-white rounded-[3rem] hover:bg-white hover:text-[#12066a] transition-all  duration-700 group">
                  <div className="text-[#997819] mb-8 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                  <h3 className="text-2xl text-[#12066a] font-black mb-4 tracking-tight">{pillar.t}</h3>
                  <p className="text-zinc-600 group-hover:text-zinc-500 font-medium leading-relaxed">{pillar.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 4. PREMIUM CTA SECTION (With BG Image Support) */}
      <section className="py-24 bg-white px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter">Ready to <span className="text-[#997819]">Certify?</span></h2>
            <p className="mt-4 text-zinc-500 font-medium italic">"Become a trusted labour provider for the UK's top security firms."</p>
          </div>

          <div 
            className="p-12 md:p-20 rounded-[4rem] text-center text-white relative overflow-hidden group shadow-2xl bg-[#12066a]"
            style={{ 
              backgroundImage: 'url("/10-ways-bg.jpg")', // As per your requirement
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark Overlay to maintain consistency and readability */}
            <div className="absolute inset-0 bg-[#12066a]/90 z-0" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black mb-8 tracking-tighter">Initiate Your COP-119 Audit Readiness</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-12 py-6 bg-[#997819] text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white hover:text-[#12066a] transition-all duration-500 shadow-2xl">
                    Get Consultation
                </button>
                <button className="px-12 py-6 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/10 transition-all">
                    Download Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default COP119Page;