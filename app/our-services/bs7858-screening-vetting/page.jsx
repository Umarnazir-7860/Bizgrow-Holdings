import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  ShieldCheck,
  Search,
  UserCheck,
  FileSearch,
  CheckCircle2,
  Lock,
  History,
  Fingerprint,
  PhoneCall,
  ArrowRight
} from "lucide-react";

const BS7858Page = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      
      {/* 🔹 1. HERO SECTION (BizGrow Signature Style) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bs7858-hero.webp" // Cinematic image of a background check or professional interview
            alt="BS 7858 Screening and Vetting Standard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Tactical Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[18rem] font-black text-white/[0.04] leading-none uppercase tracking-tighter italic">
            VETTED
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20 text-center md:text-left">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                The Standard for Secure Recruitment
              </span>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <h1 className="text-5xl md:text-8xl font-black text-white mt-6 leading-[1.1] tracking-tighter uppercase">
                BS 7858 <br />
                <span className="text-[#997819]">SCREENING.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <p className="mt-10 text-blue-100/60 text-lg md:text-xl max-w-2xl leading-relaxed font-medium italic">
                "Comprehensive background screening for individuals working in secure environments. We ensure your workforce is trustworthy, compliant, and fully verified."
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. THE VETTING FRAMEWORK (Core Pillars) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter uppercase mb-16 leading-none text-center md:text-left">
            VETTING <br /><span className="text-[#997819]">PROTOCOL.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "5-10 Year History", d: "Detailed verification of employment, education, and gap periods.", icon: <History /> },
              { t: "Identity Verification", d: "Rigorous checks of passports, right to work, and residency status.", icon: <Fingerprint /> },
              { t: "Financial Integrity", d: "Bankruptcy and CCJ checks to ensure financial stability.", icon: <Lock /> },
              { t: "Criminal Record Check", d: "Alignment with DBS/Basic disclosure requirements for security roles.", icon: <UserCheck /> },
              { t: "Reference Checks", d: "Direct contact with previous employers for performance verification.", icon: <FileSearch /> },
              { t: "Right to Work", d: "Full compliance with UK Home Office immigration and visa regulations.", icon: <Search /> }
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

      {/* 🔹 3. WHY BS 7858 MATTERS (Strategic Value) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <h3 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase mb-10 leading-tight">
                ELIMINATE <br /> <span className="text-[#997819]">INSIDER THREATS.</span>
              </h3>
              <p className="text-zinc-500 font-medium mb-12 text-lg">
                BS 7858 sirf aik recommendation nahi hai, balki UK security sector ke liye aik lazmi requirement hai. Ye aapki agency ko fraud aur unauthorized access se bachata hai.
              </p>
              <div className="space-y-6">
                 {["SIA Approved Contractor Requirement", "Mandatory for ISO 9001 Compliance", "Protecting Business Reputation"].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="text-[#997819]" size={22} />
                      <span className="font-black text-[#12066a] uppercase text-sm italic tracking-wide">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
                <div className="rounded-[4rem] overflow-hidden border-[15px] border-zinc-50 shadow-2xl">
                    <Image src="/vetting-check.jpg" alt="Vetting Process" width={600} height={600} className="object-cover" />
                </div>
            </div>
        </div>
      </section>

      {/* 🔹 4. COMPARISON: BASIC vs BS 7858 (Technical Section) */}
      <section className="py-24 bg-[#12066a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12">THE VETTING <span className="text-[#997819]">GAP.</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem]">
              <h4 className="text-white font-black text-2xl mb-6 flex items-center gap-3">Standard Checks</h4>
              <ul className="space-y-4 text-blue-100/60 text-sm font-medium">
                <li>• Basic Identity Check</li>
                <li>• Current Address Only</li>
                <li>• Basic Criminal Record Disclosure</li>
              </ul>
            </div>
            <div className="p-12 bg-[#997819] rounded-[3rem] text-[#12066a] shadow-2xl">
              <h4 className="font-black text-2xl mb-6">BS 7858 Gold Standard</h4>
              <ul className="space-y-4 font-black uppercase text-xs tracking-widest">
                <li>• Full 5-Year Employment Audit</li>
                <li>• Gap Verification Over 31 Days</li>
                <li>• CCJ & Financial Probity Checks</li>
                <li>• 2 Professional Character References</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. VETTING JOURNEY (Step-by-Step) */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20"><h2 className="text-5xl font-black text-[#12066a] tracking-tighter uppercase leading-none text-center">SCREENING <span className="text-[#997819]">PHASES.</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Initial Form", d: "Collecting detailed history through BS 7858 compliant forms." },
              { n: "02", t: "Analysis", d: "Thorough review of gaps and identifying reference sources." },
              { n: "03", t: "Verification", d: "Direct contact with employers and financial institutions." },
              { n: "04", t: "Final Report", d: "A comprehensive vetting file ready for your SIA/Audit inspection." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] flex flex-col items-center text-center shadow-sm">
                <span className="text-5xl font-black text-[#997819]/20 mb-6">{step.n}</span>
                <h5 className="font-black text-[#12066a] uppercase mb-3 tracking-tighter text-lg">{step.t}</h5>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 6. FAQs (SEO & Clarification) */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase mb-20 text-center">SCREENING <span className="text-[#997819]">FAQS.</span></h2>
          <div className="space-y-6">
            {[
              { q: "Is BS 7858 only for security guards?", a: "No, while it's mandatory for security, many UK businesses use it for any staff in positions of trust or financial responsibility." },
              { q: "What happens if there's a gap in employment?", a: "BS 7858 requires any gap over 31 days to be fully verified through independent evidence or character references." },
              { q: "Can we vet staff internally?", a: "Yes, but many companies outsource it to BizGrow to ensure impartial, expert, and audit-proof documentation." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:border-[#997819] transition-all group">
                <h4 className="font-black text-[#12066a] uppercase text-sm mb-4">Q: {faq.q}</h4>
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
              style={{ backgroundImage: "url('/vetting-cta-bg.jpg')" }}
            >
              <div className="absolute inset-0 bg-[#12066a]/85 mix-blend-multiply" />
            </div>

            <div className="relative z-10 p-12 md:p-24 text-center flex flex-col items-center">
              <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-10 uppercase leading-[0.9]">
                GET YOUR STAFF <br/><span className="text-[#997819]">BS 7858 COMPLIANT.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-[#997819] text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#12066a] transition-all duration-700 shadow-2xl group flex items-center gap-3">
                  Start Vetting Now
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <a href="tel:+447898205035" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3">
                  <PhoneCall size={18} /> Call Specialist
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
};

export default BS7858Page;