import React from 'react';
import Image from 'next/image';
import FadeIn from "@/components/MotionWrapper";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
// Hum form ko alag component bana kar import karenge
import ContactForm from "@/components/ContactForm"; 

const ContactPage = () => {
  return (
    <main className="bg-white text-zinc-900">
      
      {/* 🔹 1. HERO (Server Side) */}
      <section className="relative h-screen pt-40 pb-32 bg-[#12066a] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/pattern-dot.png")', backgroundSize: '30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-8">
              Let's <span className="text-[#997819]">Talk.</span>
            </h1>
            <p className="text-blue-100/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed italic">
              "Your vision deserves a strategic backbone. Reach out to the UK's compliance experts."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 2. INTERACTIVE GRID */}
      <section className="py-24 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* 📍 CONTACT INFO (Left Side - 4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            {[
              { icon: <Phone size={20} />, label: "Direct Line", val: "+44 20 1234 5678" },
              { icon: <Mail size={20} />, label: "Support Email", val: "info@bizgrow.co.uk" },
              { icon: <MapPin size={20} />, label: "HQ Address", val: "London, UK" },
            ].map((item, i) => (
              <FadeIn key={i} direction="left" delay={i * 0.1}>
                <div className="p-8 bg-white border border-zinc-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-[#997819]/20 transition-all group">
                  <div className="flex items-center gap-4 text-[#12066a] mb-4">
                    <span className="p-3 bg-zinc-50 rounded-xl group-hover:bg-[#997819] group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#997819]">{item.label}</span>
                  </div>
                  <p className="text-xl font-bold tracking-tight">{item.val}</p>
                </div>
              </FadeIn>
            ))}
            
            {/* Added: Response Time Card */}
            <FadeIn direction="left" delay={0.4}>
              <div className="p-8 bg-[#12066a] rounded-[2rem] text-white overflow-hidden relative group">
                <Clock className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <h4 className="font-bold text-lg mb-2">Fast Response</h4>
                <p className="text-blue-100/60 text-sm">We typically respond to all compliance enquiries within 2-4 business hours.</p>
              </div>
            </FadeIn>
          </div>

          {/* 📝 THE FORM (Right Side - 8 Columns) */}
          <div className="lg:col-span-8">
            <FadeIn direction="up">
              <div className="bg-white p-6 md:p-12 rounded-[3.5rem] shadow-2xl border border-zinc-50">
                {/* Yahan aapka Client-side Form Component aayega */}
                <ContactForm />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 🔹 3. GLOBAL REACH MAP (Server Side) */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-[#12066a] tracking-tighter">Strategic UK Presence</h3>
          </div>
          <div className="relative h-[450px] rounded-[4rem] overflow-hidden grayscale contrast-125 border border-zinc-200">
             <Image src="/map-bg.jpg" alt="Map" fill className="object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;