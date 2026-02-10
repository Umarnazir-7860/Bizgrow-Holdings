// app/page.jsx
import HeroCarousel from "@components/HeroCarousel";
import FadeIn from "@components/MotionWrapper";
import Image from "next/image";
import {
  Shield,
  Award,
  Users,
  BarChart3,
  CheckCircle2,
  Quote,
  Star,
  Trophy,
  Globe2,
  Briefcase,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understanding your business needs and compliance gaps.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Developing a custom roadmap for your certification.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Executing standards and training your core team.",
  },
  {
    num: "04",
    title: "Certification",
    desc: "Final audit support and achieving your business goals.",
  },
];

const reviews = [
  {
    name: "John Smith",
    role: "Director, Shield Security",
    text: "BizGrow Holdings helped us achieve SIA ACS with an incredible score. Their expertise in the security industry is unmatched.",
  },
  {
    name: "Sarah Ahmed",
    role: "Operations Manager",
    text: "ISO certification seemed daunting until we partnered with BizGrow. They made the entire process seamless and stress-free.",
  },
  {
    name: "David Warner",
    role: "CEO, TechLogix",
    text: "Their business consultancy gave us a clear roadmap for growth. We've seen a 40% increase in efficiency since then.",
  },
];

const coreServices = [
  {
    title: "SIA ACS Support",
    desc: "Achieve and maintain Approved Contractor Scheme status with expert guidance.",
    icon: <Shield className="w-8 h-8 text-[#12066a]" />,
    bgImage: "/sia-home.jpg"
  },
  {
    title: "ISO Certification",
    desc: "Streamline your business with ISO 9001, 14001, and 45001 certifications.",
    icon: <Award className="w-8 h-8 text-[#12066a]" />,
    bgImage: "/iso-home.jpg"
  },
  {
    title: "Business Consultancy",
    desc: "Strategic planning to help your company scale and improve efficiency.",
    icon: <BarChart3 className="w-8 h-8 text-[#12066a]" />,
    bgImage: "/consultancy-home.jpg"
  },
  {
    title: "Training & Development",
    desc: "Empowering your workforce with professional industry-standard training.",
    icon: <Users className="w-8 h-8 text-[#12066a]" />,
    bgImage: "/business.jpg"
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section  */}
      <section className="bg-white">
        <HeroCarousel />
      </section>

      {/* About Us  */}
      <section className="relative mt-10 z-30 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#12066a] rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 border-4 border-white">
            {/* Stat 1 */}
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Trophy className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white text-3xl font-black  leading-none">
                  100+
                </h4>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mt-1">
                  Successful Audits
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl">
                <CheckCircle2 className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white text-3xl font-black  leading-none">
                  99%
                </h4>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mt-1">
                  Pass Rate
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-5">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Globe2 className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white text-3xl font-black  leading-none">
                  UK Wide
                </h4>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mt-1">
                  Coverage
                </p>
              </div>
            </div>

            <button className="bg-white text-[#12066a] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg active:scale-95">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
      {/* Our Services  */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#12066a] tracking-tight">
              Comprehensive <span className="text-[#997819]">Solutions</span>
            </h2>
            <p className="mt-4 text-zinc-500 font-medium max-w-2xl mx-auto italic">
              Tailored consultancy services designed to meet international
              standards and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service, idx) => (
  <div
    key={idx}
    className="group relative p-8 rounded-[2rem] border border-[#997819] overflow-hidden min-h-[320px] flex flex-col justify-end transition-all duration-500 shadow-lg"
  >
    {/* 🔹 Step 1: Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src={service.bgImage} // Array mein har service ki apni image path honi chahiye
        alt={service.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      {/* 🔹 Step 2: Dark Overlay (Taake text clear nazar aaye) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
    </div>

    {/* 🔹 Step 3: Content (Z-index 10 taake image ke upar rahe) */}
    <div className="relative z-10">
      <div className="mb-6 inline-block p-4 bg-white backdrop-blur-md border border-white/20 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
        {/* Icon color white ya gold rakhein taake dark bg par dikhe */}
        <span className="text-[#997819] text-2xl">{service.icon}</span>
      </div>
      
      <h3 className="text-xl font-black text-white mb-3 tracking-wide">
        {service.title}
      </h3>
      
      <p className="text-zinc-300 text-sm leading-relaxed group-hover:text-white transition-colors">
        {service.desc}
      </p>
    </div>
  </div>
))}
          </div>
        </div>
      </section>
      {/* How we work */}
      <section className="py-24 h-screen bg-[#12066a] relative overflow-hidden">
        {/* Decorative Background Text */}
        <Image  
        src="/experts-home.jpg"
        fill
        className="object-cover"
        
        />
        {/* Black Overlay Effect */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        <div className="absolute top-10 right-0 text-[15rem] font-black text-white/10 select-none leading-none -translate-y-1/4">
          BIZGROW
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <span className="text-[#997819] font-black uppercase tracking-[0.3em] text-xs">
              Our Roadmap
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              The Path to <span className="text-[#997819]">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.2} direction="right">
                <div className="relative group">
                  {/* Step Number */}
                  <div className="text-6xl font-black text-white group-hover:text-[#997819] transition-colors duration-500 mb-4">
                    {step.num}
                  </div>

                  {/* Line Decor */}
                  <div className="w-12 h-1 bg-[#997819] mb-6 group-hover:w-24 transition-all duration-500" />

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials  */}
      <section className="py-24 bg-white px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <FadeIn direction="none">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs">
                Success Stories
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#12066a] mt-4 leading-tight">
                Trusted by Leading <br />
                <span className="text-[#997819]">Organizations</span>
              </h2>
              {/* Stars ki jagah ek elegant small bar */}
              <div className="mt-6 w-20 h-1.5 bg-[#997819] mx-auto rounded-full" />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {" "}
            {/* 🔹 items-stretch added */}
            {reviews.map((rev, i) => (
              <FadeIn
                key={i}
                delay={i * 0.2}
                direction="up"
                className="h-full transition-transform hover:scale-105 duration-300"
              >
                {" "}
                {/* 🔹 className h-full passes to wrapper */}
                <div className="p-10 rounded-[3rem] bg-zinc-50 border border-[#12066a] relative hover:shadow-xl transition-all duration-500 group h-full flex flex-col justify-between">
                  {/* 🔹 h-full and flex-col added to the card */}

                  <div className="relative">
                    <Quote
                      className="absolute -top-2 -right-2 text-zinc-200 group-hover:text-[#997819]/20 transition-colors"
                      size={40}
                    />
                    <p className="text-zinc-600 font-medium leading-relaxed mb-10 italic">
                      "{rev.text}"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-black text-[#12066a] text-lg">
                      {rev.name}
                    </h4>
                    <p className="text-[#997819] text-xs font-bold uppercase tracking-widest mt-1">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Watermark */}
      <section className="py-20 px-6 bg-white">
        <FadeIn direction="up">
          <div className="max-w-7xl mx-auto bg-[#12066a] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            {/* 🔹 Background Large Text (Watermark) */}
            <div className="absolute top-0 right-0 text-[10rem] md:text-[15rem] font-black text-white/[0.03] select-none leading-none -translate-x-7 translate-y-6 pointer-events-none uppercase">
              BIZGROW
            </div>

            {/* Background Decor Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#997819]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  Ready to Secure Your
                  <span className="text-[#997819]"> Business Future?</span>
                </h2>
                <p className="text-blue-100/80 mt-6 text-lg font-medium">
                  Our experts are ready to guide you through SIA ACS, ISO
                  certifications, and strategic growth. Let's build something
                  great together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                <button className="bg-[#997819] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-[#12066a] transition-all duration-500 shadow-lg group">
                  Book Free Consultation{" "}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>

                <a
                  href="tel:+447898205035"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
                >
                  <PhoneCall size={18} /> +44 7898205035
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
