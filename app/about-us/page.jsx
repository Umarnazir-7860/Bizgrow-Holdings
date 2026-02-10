"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "@/components/MotionWrapper";
import { ShieldCheck, Target, Users, Award, CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="bg-white">
      {/* 1 hero  */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* 🔹 Step 1: Background Image */}
        <div className="absolute inset-0  z-0">
          <Image
            src="/about-hero.webp" // Aapki generated image ka path
            alt="BizGrow Corporate"
            fill
            className="object-cover"
            priority
          />
          {/* Black Overlay Effect */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>

        {/* 🔹 Step 3: Large Watermark Text (Middle Layer) */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <h2 className="text-[15rem] md:text-[15rem] font-black text-white/[0.1] leading-none uppercase">
            About
          </h2>
        </div>

        {/* 🔹 Step 4: Actual Content (Top Layer) */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          
            <div className="max-w-4xl">
                <FadeIn direction="right" duration="0.4">
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Who We Are
              </span>
                </FadeIn>
             
              <FadeIn direction="right" duration="0.6">
              <h1 className="text-4xl md:text-7xl font-black text-white mt-6 leading-[1.1]">
                Driving Business <br />
                <span className="text-[#997819]">Excellence</span> Across UK
              </h1>
              </FadeIn>
              <FadeIn direction="right" duration="0.8">
              <p className="mt-8 text-blue-100/80 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
                BizGrow Holdings is a premier consultancy firm dedicated to
                helping organizations achieve industry-leading certifications
                and sustainable growth.
              </p>
              </FadeIn>

              {/* Optional: Small line decor */}
              <div className="mt-10 w-24 h-1.5 bg-[#997819] rounded-full" />
            </div>
         
        </div>

      </section>

      {/* 2. THE VISION - Image + Text Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/expert-about.jpg" // Placeholder for your image
                alt="BizGrow Consultancy Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 right-10 bg-[#997819] p-8 rounded-[2rem] text-white hidden md:block shadow-xl">
              <div className="text-4xl font-black">10+</div>
              <div className="text-xs uppercase font-bold tracking-widest">
                Years Experience
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-black text-[#12066a] leading-tight">
              Expert Guidance for a 
              <span className="text-[#997819]"> Regulated World.</span>
            </h2>
            <div className="mt-8 space-y-6 text-zinc-600 leading-relaxed font-medium">
              <p>
                Founded on the principles of integrity and expertise, BizGrow
                Holdings has emerged as a trusted partner for security firms and
                construction companies seeking SIA ACS and ISO
                Certifications.
              </p>
              <p>
                We don't just provide a checklist; we integrate quality
                management systems into your core operations, ensuring that
                compliance becomes a catalyst for your business's success rather
                than a hurdle.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Expert-led SIA ACS audit preparation",
                  "Seamless ISO 9001, 14001, & 45001 implementation",
                  "Strategic business scaling & consultancy",
                  "Accredited training and compliance support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#12066a] font-bold"
                  >
                    <CheckCircle2 className="text-[#997819]" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. CORE VALUES - Trust Builders */}
      <section className="py-14 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#12066a]">
              The Values That <span className="text-[#997819]">Define Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Unmatched Expertise",
                desc: "Our consultants are industry veterans with deep knowledge of UK regulatory standards.",
                icon: <ShieldCheck />,
              },
              {
                title: "Client-Centric",
                desc: "Your goals are ours. We tailor our strategies to fit your unique business structure.",
                icon: <Target />,
              },
              {
                title: "Proven Results",
                desc: "We boast a 100% success rate in helping clients achieve their desired certifications.",
                icon: <Award />,
              },
            ].map((val, i) => (
              <FadeIn
                key={i}
                delay={i * 0.2}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#12066a] text-white rounded-2xl flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-4">
                  {val.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION - Double Card */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn
            direction="left"
            className="bg-[#12066a] p-12 md:p-16 rounded-[3rem] text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-[#997819] font-black uppercase tracking-widest text-xs mb-6">
                Our Mission
              </h3>
              <p className="text-2xl font-bold leading-relaxed">
                "To simplify the path to compliance and certification for UK
                businesses, enabling them to compete at the highest level of
                industry standards."
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/[0.03]">
              M
            </div>
          </FadeIn>
          <FadeIn
            direction="right"
            className="bg-zinc-100 p-12 md:p-16 rounded-[3rem] text-[#12066a] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-[#997819] font-black uppercase tracking-widest text-xs mb-6">
                Our Vision
              </h3>
              <p className="text-2xl font-bold leading-relaxed text-zinc-800">
                "To be the UK’s leading catalyst for organizational growth,
                recognized for transforming compliance into a competitive
                advantage."
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-black/[0.03]">
              V
            </div>
          </FadeIn>
        </div>
      </section>

       {/* 5 CTA Section with Background Watermark */}
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
