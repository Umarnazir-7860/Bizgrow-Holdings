import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  ShieldCheck,
  Cpu,
  Zap,
  CheckCircle2,
  Fingerprint,
  Search,
  Lock,
  Globe,
} from "lucide-react";

const CyberEssentialsPlusPage = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      
      {/* 🔹 1. HERO SECTION (Advanced Watermark) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cyber-plus-hero-org.jpg" 
            alt="Cyber Essentials Plus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[15rem] font-black text-white/[0.13] leading-none uppercase tracking-tighter">
            VERIFIED
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Highest Level of Security Assurance
              </span>
            </FadeIn>

            <FadeIn direction="right" duration="0.6">
              <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
                CYBER ESSENTIALS <br />
                <span className="text-[#997819]">PLUS+</span> CERTIFIED.
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium italic">
                "Moving beyond self-assessment to a rigorous, expert-led technical verification of your defenses."
              </p>
            </FadeIn>

            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 flex items-center gap-6">
                 <div className="w-32 h-2 bg-[#997819] rounded-full" />
                 <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Vulnerability Scanned</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. THE RIGOROUS AUDIT (Asymmetric Grid) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-none uppercase">
                WHY THE <br />
                <span className="text-[#997819]">PLUS?</span>
              </h2>
              <p className="mt-8 text-zinc-500 font-medium text-lg leading-relaxed">
                While standard CE is a self-assessment, **CE Plus** involves a technical audit of your systems to verify that the controls are actually working.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "Verified Security", d: "An independent assessor performs a technical audit of your workstation and servers.", icon: <Search /> },
                { t: "Vulnerability Scans", d: "Internal and external scans to identify weaknesses that hackers could exploit.", icon: <Fingerprint /> },
                { t: "Browser Security", d: "Testing if malicious files can be executed or downloaded to your system.", icon: <Globe /> },
                { t: "MFA Verification", d: "Ensuring Multi-Factor Authentication is active and properly configured across apps.", icon: <Lock /> },
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] ${i % 2 === 0 ? "bg-zinc-50" : "bg-[#12066a] text-white"} transition-all hover:scale-[1.02] duration-500`}>
                  <div className="mb-6 text-[#997819]">{item.icon}</div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight uppercase italic">{item.t}</h4>
                  <p className={`${i % 2 === 0 ? "text-zinc-500" : "text-blue-100/60"} font-medium`}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. TECHNICAL AUDIT COVERAGE (3-Column SMAS Style) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-[#12066a] tracking-tighter uppercase">
              FULL AUDIT <br />
              <span className="text-[#997819]">COVERAGE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Internal Network Scan", "External Perimeter Test", "Email Malware Delivery",
              "Workstation Configuration", "Mobile Device Security", "Cloud Service Audit",
              "Admin Account Controls", "Legacy Software Review", "Antivirus Verification"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-zinc-200 flex items-center gap-4 hover:shadow-xl transition-all group">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[#997819] transition-colors">
                  <CheckCircle2 size={18} className="text-[#997819] group-hover:text-white" />
                </div>
                <span className="font-black text-[#12066a] uppercase text-sm tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 4. THE ROADMAP (Horizontal Journey) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Pre-Audit Prep", d: "We review your CE self-assessment to ensure you're ready for the audit." },
              { n: "02", t: "Technical Scan", d: "Running internal vulnerability scans to catch issues early." },
              { n: "03", t: "Formal Assessment", d: "IASME certified assessor conducts the official technical audit." },
              { n: "04", t: "Seal of Approval", d: "Official CE Plus certification issued and verified on NCSC." },
            ].map((step, i) => (
              <div key={i} className="p-10 bg-[#12066a] rounded-[3rem] group hover:bg-[#997819] transition-all duration-700">
                <span className="text-5xl font-black text-white/10 group-hover:text-white/30 transition-colors">{step.n}</span>
                <h4 className="text-xl font-black text-[#997819] group-hover:text-white mt-8 mb-4 uppercase tracking-tighter">{step.t}</h4>
                <p className="text-blue-100/60 group-hover:text-white/80 text-sm font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 5. DATA & SECURITY (Metrics) */}
      <section className="py-32 bg-[#12066a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern-2.jpg')] bg-no-repeat bg-cover bg-fixed bg-center opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
               <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
                ELIMINATE <br /> <span className="text-[#997819]">THE VULNERABLE.</span>
              </h3>
              <p className="text-blue-100/60 font-medium text-lg italic mb-10 border-l-4 border-[#997819] pl-6">
                "Standard CE tells you what to do; CE Plus proves you've actually done it."
              </p>
              <div className="flex gap-4">
                 <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <p className="text-3xl font-black text-[#997819]">100%</p>
                    <p className="text-[10px] text-white uppercase font-bold tracking-widest">Compliance Verification</p>
                 </div>
                 <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <p className="text-3xl font-black text-[#997819]">24H</p>
                    <p className="text-[10px] text-white uppercase font-bold tracking-widest">Post-Scan Reporting</p>
                 </div>
              </div>
            </div>
            <div className="relative">
               <div className="rounded-[4rem] overflow-hidden border-[15px] border-white/5 shadow-2xl">
                  <Image src="/audit-tech.jpg" alt="Technical Audit" width={600} height={600} className="object-cover h-[450px]" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. CTA (Cyber Protect Design) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-34 rounded-[4rem] bg-[#12066a] relative overflow-hidden group shadow-2xl text-center flex flex-col items-center">
            
            {/* Background Pattern Fix Applied */}
            <div className="absolute inset-0 bg-[url('/cyber-plus-cta.jpg')] bg-no-repeat bg-cover bg-fixed bg-center opacity-50 pointer-events-none" />
            
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10 uppercase relative z-10">
              UPGRADE TO <br /> <span className="text-[#997819]">CYBER PLUS.</span>
            </h2>
            <button className="relative z-10 bg-[#997819] text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-[#12066a] transition-all duration-500 shadow-3xl">
              Book Your Technical Audit
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default CyberEssentialsPlusPage;