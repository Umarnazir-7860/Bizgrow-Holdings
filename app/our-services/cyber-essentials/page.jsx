import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  ShieldCheck,
  Lock,
  Zap,
  CheckCircle2,
  Server,
  Network,
  ShieldAlert,
  UserCheck,
} from "lucide-react";

const CyberEssentialsPage = () => {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      
      {/* 🔹 1. HERO SECTION (BIZGROW Style Watermark) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cyber-hero.jpg" // Change image path
            alt="Cyber Essentials Certification"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[10rem] md:text-[15rem] font-black text-white/[0.07] leading-none uppercase tracking-tighter">
            SECURE
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
          <div className="max-w-4xl">
            <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                NCSC Backed Standard
              </span>
            </FadeIn>

            <FadeIn direction="right" duration="0.6">
              <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
                CYBER <br />
                <span className="text-[#997819]"> ESSENTIALS</span>
              </h1>
            </FadeIn>

            <FadeIn direction="right" duration="0.8">
              <p className="mt-10 text-blue-100/60 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium italic">
                "Not just a badge, but a technical fortress against 80% of common cyber threats."
              </p>
            </FadeIn>

            <FadeIn direction="right" duration="1.0">
              <div className="mt-12 w-32 h-2 bg-[#997819] rounded-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. THE TECHNICAL DEFENCE (Asymmetric Pillar Grid) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-none uppercase">
                TECHNICAL <br />
                <span className="text-[#997819]">CONTROLS.</span>
              </h2>
              <p className="mt-8 text-zinc-500 font-medium text-lg leading-relaxed">
                Cyber Essentials focuses on 5 key technical areas to ensure your business perimeter is impenetrable.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "Firewalls", d: "Boundary protection to prevent unauthorized access to your private networks.", icon: <Network /> },
                { t: "Secure Config", d: "Ensuring systems are configured to reduce vulnerabilities from default settings.", icon: <Server /> },
                { t: "User Access", d: "Restricting account privileges to only those who strictly need them.", icon: <UserCheck /> },
                { t: "Patch Mgmt", d: "Automated updates to fix known security flaws before hackers exploit them.", icon: <Zap /> },
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] ${i % 2 === 0 ? "bg-zinc-50" : "bg-[#12066a] text-white"} transition-transform hover:-translate-y-2 duration-500`}>
                  <div className="mb-6 text-[#997819]">{item.icon}</div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight italic uppercase">{item.t}</h4>
                  <p className={`${i % 2 === 0 ? "text-zinc-500" : "text-blue-100/60"} font-medium`}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. MARKET AUTHORITY: THE TENDER ADVANTAGE */}
      <section className="py-22 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#12066a]/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Compliance Strategy</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-[0.9] mb-8 uppercase">
                Essential for <br /> <span className="text-[#997819]">UK Tenders.</span>
              </h2>
              <div className="space-y-8 italic">
                <p className="text-zinc-500 font-medium text-lg border-l-4 border-[#997819] pl-6">
                  Cyber Essentials is a mandatory requirement for government contracts and large-scale supply chains in the UK.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="p-2 bg-zinc-100 rounded-[3.5rem]">
                <div className="bg-[#12066a] rounded-[3rem] p-12 text-center relative overflow-hidden">
                  <h3 className="text-white font-black text-2xl mb-10 tracking-tight italic uppercase">The CE Plus Advantage</h3>
                  <div className="space-y-6">
                    {["Hands-on Technical Audit", "Vulnerability Scanning", "IASME Certified Verification", "Board-Level Security Report"].map((item, idx) => (
                      <div key={idx} className="py-4 border-b border-white/10 text-blue-100/80 font-bold flex justify-between items-center group">
                        <span>{item}</span>
                        <ShieldCheck className="text-[#997819]" size={20} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 4. IMPLEMENTATION JOURNEY */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter uppercase">Rapid <span className="text-[#997819]">Certification.</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Assessment", d: "We evaluate your current technical infrastructure against CE standards." },
              { n: "02", t: "Gap Fixes", d: "Technical remediation to ensure 100% compliance with security controls." },
              { n: "03", t: "Submission", d: "Managing the portal and documentation submission on your behalf." },
              { n: "04", t: "Verified", d: "Official certification awarded and added to the NCSC registry." },
            ].map((step, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 hover:bg-[#12066a] group transition-all duration-500">
                <span className="text-5xl font-black text-[#997819]/20 group-hover:text-[#997819] transition-colors">{step.n}</span>
                <h4 className="text-xl font-black text-[#12066a] group-hover:text-white mt-6 mb-3 uppercase tracking-tighter">{step.t}</h4>
                <p className="text-zinc-500 group-hover:text-blue-100/60 text-sm font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 5. SECURITY CHECKLIST (Detailed List) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-100 pt-24">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeIn direction="right">
                <h3 className="text-5xl font-black text-[#12066a] tracking-tight mb-6 uppercase">Technical <br /> <span className="text-[#997819]">Readiness</span></h3>
                <div className="grid sm:grid-cols-1 gap-4">
                  {["Malware Protection", "Password Policy Enforcement", "Multi-Factor Auth (MFA)", "Secure BYOD Policy", "Software Whitelisting"].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl font-black text-[10px] uppercase tracking-widest border-l-4 border-[#12066a] hover:border-[#997819] transition-all">
                      <CheckCircle2 size={16} className="text-[#997819]" /> {doc}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2 relative">
              <FadeIn direction="left">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-zinc-50">
                  <Image src="/cyber-shield.jpg" alt="Security" width={600} height={700} className="object-cover h-[500px]" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#12066a] p-8 rounded-[2rem] text-white shadow-xl">
                  <p className="text-3xl font-black leading-none text-[#997819]">80%</p>
                  <p className="text-[10px] uppercase font-bold opacity-80">Threat Reduction</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 6. CYBER METRICS (Parallax Background) */}
      <section className="py-32 bg-[#12066a] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: 'url("/cyber-bg.jpg")', backgroundSize: "cover", backgroundAttachment: "fixed" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12066a] via-[#12066a]/40 to-transparent z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#997819] h-64 rounded-[3rem] p-8 flex flex-col justify-end">
                  <span className="text-4xl font-black text-white">0%</span>
                  <p className="text-white text-xs font-bold uppercase mt-2 italic">Tolerance Policy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md h-64 rounded-[3rem] p-8 flex flex-col justify-end border border-white/20">
                  <ShieldAlert className="text-[#997819] mb-4" size={40} />
                  <p className="text-white font-bold uppercase text-xs">Risk Mitigation Focus</p>
                </div>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">Defend <br /> <span className="text-[#997819]">Against Breach.</span></h3>
              <p className="text-blue-100/60 font-medium text-lg italic">We don't just help you pass; we help you stay secure long after the certificate is issued.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 7. CTA (Signature Design) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-24 rounded-[4rem] bg-[#12066a] relative overflow-hidden group shadow-2xl text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10 uppercase relative z-10">Protect Your <br /> <span className="text-[#997819]">Digital Assets.</span></h2>
            <button className="relative z-10 bg-[#997819] text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-[#12066a] transition-all duration-500 shadow-3xl">
              Start Cyber Assessment
            </button>
           {/* Updated Background Pattern Line */}
<div className="absolute inset-0 bg-[url('/grid-pattern.jpg')] bg-no-repeat bg-cover bg-fixed bg-center opacity-30 pointer-events-none" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CyberEssentialsPage;