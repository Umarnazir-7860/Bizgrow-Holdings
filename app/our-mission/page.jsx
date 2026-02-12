"use client";

import React from 'react';
import Image from 'next/image';
import FadeIn from "@/components/MotionWrapper";
import { Target, Eye, ShieldCheck, Globe, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const MissionPage = () => {
  return (
    <main className="bg-white text-zinc-900">
      
      {/* 🔹 1. HERO SECTION (Premium Background with Light Overlay) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/our-mission-hero.jpg"
            alt="BizGrow Mission"
            fill
            className="object-cover"
            priority
          />
          {/* Slightly lighter overlay for better transition to white bg */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
          <FadeIn direction="up" duration={1}>
            <h2 className="text-[12rem] md:text-[18rem] font-black text-white/[0.05] leading-none uppercase">
              Mission
            </h2>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <FadeIn direction="right" delay={0.2}>
              <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                Strategy & Vision
              </span>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.4}>
              <h1 className="text-4xl md:text-7xl font-black text-white mt-6 leading-[1.1]">
                Our Mission to <br />
                <span className="text-[#997819]">Redefine</span> Success
              </h1>
            </FadeIn>

            <FadeIn direction="right" delay={0.6}>
              <p className="mt-8 text-blue-100/90 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
                We empower businesses to navigate the complexities of UK 
                regulations while fostering an environment for 
                unprecedented professional growth.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="mt-10 w-24 h-1.5 bg-[#997819] rounded-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 2. CORE PHILOSOPHY (Clean White Section) */}
     <section className="py-32 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
    
    {/* 🔹 Left Side: Professional Image */}
    <FadeIn direction="left">
      <div className="relative group">
        {/* Decorative Gold Frame */}
        <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#997819] rounded-tl-[3rem] z-10"></div>
        
        {/* Image Container */}
        <div className="relative aspect-square md:aspect-[4/5] bg-zinc-100 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-200">
          <Image
            src="/the core.jpg" // Yahan apni professional image ka path dein
            alt="Strategic Business Meeting"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-[#12066a]/10 group-hover:bg-transparent transition-colors duration-500"></div>
          
          {/* Floating Badge (Optional: isay hata bhi sakte hain) */}
          <div className="absolute bottom-8 left-8 bg-[#997819] p-6 rounded-2xl text-white shadow-xl z-20">
             <Target size={30} className="mb-2" />
             <p className="text-xs uppercase font-black tracking-widest">Growth Focused</p>
          </div>
        </div>
      </div>
    </FadeIn>
    
    {/* 🔹 Right Side: Text Content */}
    <div className="space-y-8">
      <FadeIn direction="right">
        <h2 className="text-[#997819] font-bold text-sm tracking-widest uppercase italic">01. The Core</h2>
        <h3 className="text-4xl md:text-6xl font-black text-[#12066a] leading-tight mt-4 tracking-tighter italic">
          Global Standards. <br/>Local Expertise.
        </h3>
      </FadeIn>
      
      <FadeIn direction="right" delay={0.2}>
        <p className="text-zinc-600 text-lg leading-relaxed font-medium">
            At BizGrow Holdings, our mission is built on the belief that compliance is 
            not a burden—it’s a competitive edge. We provide the structural backbone 
            required to excel in the UK’s most demanding industries.
        </p>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <ul className="space-y-4 pt-4">
          {["SIA ACS Integration", "ISO Quality Management", "UK Market Leadership"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-[#12066a] font-bold">
              <CheckCircle2 className="text-[#997819]" size={20} /> {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>

  </div>
</section>

      {/* 🔹 3. VISION & PILLARS (Light Grey Soft Background) */}
<section className="py-32 bg-zinc-50 border-y border-zinc-200">
  <div className="max-w-7xl mx-auto px-6">
     <FadeIn direction="up">
       <div className="text-center mb-24">
         <h2 className="text-[#997819] font-black tracking-[0.3em] uppercase text-sm mb-4">02. Strategic Vision</h2>
         <h3 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tight">Our Future Landmarks</h3>
       </div>
     </FadeIn>

     <div className="grid md:grid-cols-3 gap-8">
       {[
         { icon: <Globe size={40}/>, title: "Market Leadership", desc: "Setting the gold standard for consultancy across UK's security and construction sectors." },
         { icon: <ShieldCheck size={40}/>, title: "Ethical Integrity", desc: "Building a foundation of trust through 100% transparent professional standards." },
         { icon: <Zap size={40}/>, title: "Fast-Track Innovation", desc: "Leveraging digital tools to streamline your path to ISO and ACS certification." }
       ].map((item, i) => (
         <FadeIn key={i} direction="up" delay={i * 0.2}>
           <div className="p-12 bg-white border border-zinc-200 rounded-[3rem] hover:shadow-2xl hover:border-[#997819] transition-all duration-500 group h-full">
             
             {/* 🔹 Yahan hai wo 360 Rotating Animation */}
             <div className="text-[#12066a] mb-8 inline-block p-4 bg-zinc-50 rounded-2xl group-hover:bg-[#997819] group-hover:text-white group-hover:rotate-[360deg] duration-700 transition-all ease-in-out">
               {item.icon}
             </div>

             <h4 className="text-2xl font-black text-zinc-900 mb-4 tracking-tighter">{item.title}</h4>
             <p className="text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
           </div>
         </FadeIn>
       ))}
     </div>
  </div>
</section>

      {/* 🔹 4. IMPACT STATEMENT (Call to Action) */}
      <section className="py-40 text-center relative bg-white overflow-hidden">
        {/* Large Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[10rem] md:text-[20rem] font-black uppercase">BizGrow</h2>
        </div>

        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-[#12066a] mb-8 italic tracking-tighter">
                "Turning Vision Into <span className="text-[#997819]">Execution.</span>"
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

export default MissionPage;