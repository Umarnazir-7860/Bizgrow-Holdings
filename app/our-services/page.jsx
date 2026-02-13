import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import {
  ShieldCheck,
  Target,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  HardHat,
  Lock,
  Search,
  BarChart3,
  Cpu,
  ClipboardCheck,
  Award,
  Layers,
  ShieldAlert,
  FileText,
} from "lucide-react";

const ServicesPage = () => {
const services = [
  {
    title: "SIA ACS Support",
    desc: "We provide end-to-end guidance for the Security Industry Authority’s Approved Contractor Scheme. From gap analysis to final audit, we ensure your management systems meet and exceed the required scoring criteria for UK security firms.",
    icon: <ShieldCheck size={30} />,
  },
  {
    title: "ISO 9001:2015",
    desc: "Enhance your operational efficiency with the world’s most recognized Quality Management System. We help you streamline processes, reduce errors, and ensure consistent service delivery that keeps your clients coming back.",
    icon: <Award size={30} />,
  },
  {
    title: "ISO 14001:2015",
    desc: "Demonstrate your commitment to environmental sustainability. Our consultants help you implement systems to manage environmental impact, reduce waste, and comply with evolving green regulations in the UK market.",
    icon: <Globe size={30} />,
  },
  {
    title: "ISO 45001:2018",
    desc: "Prioritize your team's safety with the global standard for Occupational Health and Safety. We help you identify risks and implement controls to prevent workplace injuries, ensuring a safe and productive environment.",
    icon: <HardHat size={30} />,
  },
  {
    title: "Cyber Essentials",
    desc: "Protect your business from 80% of common cyber-attacks. We guide you through the government-backed certification process, making your organization eligible for sensitive UK central government contracts.",
    icon: <Lock size={30} />,
  },
  {
    title: "Cyber Essentials Plus",
    desc: "Take your digital security to the next level with a hands-on technical verification. This advanced certification proves to your clients that your cyber defenses are robust and independently tested.",
    icon: <ShieldCheck size={30} />, // Missing Service 1
  },
  {
    title: "ConstructionLine",
    desc: "Accelerate your tender process. We assist you in achieving Silver, Gold, or Platinum membership, ensuring your business is pre-qualified for major construction projects across the United Kingdom.",
    icon: <Layers size={30} />,
  },
  {
    title: "CHAS Accreditation",
    desc: "Showcase your health and safety competence. We manage your CHAS application and documentation, helping you gain the UK’s leading accreditation for supply chain risk management.",
    icon: <ClipboardCheck size={30} />,
  },
  {
    title: "SafeContractor",
    desc: "Reduce risk and build trust. We streamline your SafeContractor audit, ensuring your health, safety, and ethical policies are fully compliant with modern industry standards.",
    icon: <CheckCircle2 size={30} />,
  },
  {
    title: "BS 7858 Vetting",
    desc: "Ensure your staff are trustworthy. We help you implement the British Standard for security screening, covering background checks and financial history for personnel working in secure environments.",
    icon: <Search size={30} />,
  },
  {
    title: "BS 10800",
    desc: "The gold standard for the operational management of security companies. We help you implement this framework to provide a solid foundation for all security-specific British Standards.",
    icon: <FileText size={30} />, // Missing Service 2
  },
  {
    title: "BS 7499",
    desc: "Expert guidance on the provision of static guarding and mobile patrol services. We ensure your operations comply with the latest code of practice for manned security excellence.",
    icon: <ShieldAlert size={30} />, // Missing Service 3
  },
  {
    title: "NASDU Compliance",
    desc: "Expert support for K9 security providers. We ensure your dog handling operations meet the National Association of Security Dog Users standards for safety and effectiveness.",
    icon: <ShieldAlert size={30} />,
  },
  {
    title: "SMAS Worksafe",
    desc: "Get your SSIP certificate without the stress. Our team prepares all necessary H&S documentation to prove your competence to major UK housebuilders and developers.",
    icon: <Zap size={30} />,
  },
  {
    title: "COP 119",
    desc: "Specialized code of practice for the provision of manual and electronic security. We ensure your firm meets the rigorous standards required for high-level security contracts.",
    icon: <BarChart3 size={30} />,
  },
];

  return (
    <main className="bg-white text-zinc-900">
      {/* 🔹 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/h.png"
            alt="BizGrow Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <FadeIn direction="up" duration={1}>
            <h2 className="text-[10rem] md:text-[16rem] font-black text-white/[0.05] leading-none uppercase select-none">
              Services
            </h2>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <FadeIn direction="right">
            <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
              Comprehensive Solutions
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-6 leading-[1.1]">
              Elevating UK Business <br />{" "}
              <span className="text-[#997819]">Compliance</span> Standards
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              From ISO certifications to security-specific accreditations, we
              provide the technical expertise and strategic support needed to
              scale your business in a regulated world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 2. INTRO PARAGRAPH SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-black text-[#12066a] mb-8 tracking-tighter">
              Expertise That Drives Growth
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-medium">
              BizGrow Holdings specializes in transforming complex regulatory
              requirements into simplified, manageable processes. We don't just
              help you pass audits; we build robust management systems that
              improve your bottom line and enhance your professional reputation
              across the UK.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 3. SERVICES GRID */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="p-10 bg-zinc-50 border border-[#12066a] rounded-[3rem] hover:bg-white hover:shadow-2xl hover:border-[#997819] transition-all duration-500 group h-full flex flex-col">
                  {/* 🔹 Modern Icon Container (No more rotating background) */}
                  <div className="mb-8 relative">
                    {/* Soft background shape that scales on hover */}
                    <div className="w-16 h-16 bg-[#12066a]/5 rounded-2xl absolute inset-0 group-hover:scale-125 group-hover:bg-[#997819]/10 transition-all duration-500 ease-out" />

                    {/* Icon that shifts slightly up */}
                    <div className="relative z-10 text-[#12066a] group-hover:text-[#997819] group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center w-16 h-16">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[#12066a] mb-4 tracking-tighter">
                    {service.title}
                  </h3>

                  <p className="text-zinc-500 font-medium leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>

                  {/* Premium Button Style */}
                  <div className="pt-6 border-t border-zinc-200/60">
                    <button className="flex items-center gap-2 text-[#997819] font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300">
                      Enquire Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 4. METHODOLOGY (Bonus Section for Length & Authority) */}
      <section className="py-32 bg-white/40 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-6xl text-[#12066a] font-black mb-8 leading-tight tracking-tighter ">
                Our Proven <br />{" "}
                <span className="text-[#997819]">Methodology</span>
              </h2>
              <p className="text-black text-lg mb-12 font-medium">
                We follow a rigorous four-step process to ensure every client
                achieves a 100% success rate in their certification journey.
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    t: "Gap Analysis",
                    d: "We identify exactly what your business is missing to meet standards.",
                  },
                  {
                    step: "02",
                    t: "System Design",
                    d: "We create custom policies that fit your actual workflow.",
                  },
                  {
                    step: "03",
                    t: "Implementation",
                    d: "We help your team adopt new standards with zero downtime.",
                  },
                  {
                    step: "04",
                    t: "Internal Audit",
                    d: "We run a 'mock audit' to guarantee success before the final inspection.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-6 border-l border-white/10 pl-6"
                  >
                    <span className="text-[#997819] font-black text-xl">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.t}</h4>
                      <p className="text-white/50 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-square bg-[#0a0a0a] rounded-[4rem] overflow-hidden border border-white/5">
                <Image
                  src="/methodology.jpg"
                  alt="Compliance Process"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#997819] p-10 rounded-full animate-pulse">
                    <ShieldCheck size={60} className="text-white" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

        {/* 🔹 5. IMPACT STATEMENT (Call to Action) */}
      <section className="py-40 text-center relative bg-white/30 overflow-hidden">
        {/* Large Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[10rem] md:text-[16rem] font-black uppercase">BizGrow</h2>
        </div>

        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-[#12066a] mb-8  tracking-tighter">
                " Turning Vision Into <span className="text-[#997819]">Execution.</span> "
              </h2>
              <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                  Join BizGrow Holdings in redefining the future of your organization. 
                  Our mission is your growth, and our vision is your success.
              </p>
              <button className="px-12 py-5 bg-[#12066a] text-white font-black uppercase tracking-widest hover:bg-[#997819] hover:scale-105 duration-500 transition-all rounded-2xl flex items-center gap-3 mx-auto shadow-xl">
                  Connect With Our Team <ArrowRight size={20} />
              </button>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};

export default ServicesPage;
