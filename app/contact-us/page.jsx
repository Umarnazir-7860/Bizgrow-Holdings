import React from 'react';
import Image from 'next/image';
import FadeIn from "@/components/MotionWrapper";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
// Hum form ko alag component bana kar import karenge
import ContactForm from "@/components/ContactForm"; 

const ContactPage = () => {
  return (
    <main className="bg-white text-zinc-900">
      
     {/* 🔹 1. HERO (Server Side - Consistent Style) */}
<section className="relative h-screen w-full flex items-center bg-[#12066a] overflow-hidden">
  
  {/* 🔹 Step 1: Background Image with Object-Cover behavior */}
  <div 
    className="absolute inset-0 z-0 opacity-40" 
    style={{ 
      backgroundImage: 'url("/10 Ways.jpg")',
      backgroundSize: 'cover',      // Ye 'object-cover' ka kaam karega
      backgroundPosition: 'center', // Image center se crop hogi
      backgroundRepeat: 'no-repeat'
    }}
  ></div>

  {/* 🔹 Step 2: Large Watermark Text (Middle Layer) */}
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-10">
    <h2 className="text-[12rem] md:text-[15rem] font-black text-white/[0.12] leading-none uppercase tracking-tighter">
      CONTACT
    </h2>
  </div>

  {/* 🔹 Step 3: Actual Content (Top Layer) */}
  <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
    <div className="max-w-4xl">
      <FadeIn direction="right" duration="0.4">
        <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs md:text-sm">
          Get In Touch
        </span>
      </FadeIn>

      <FadeIn direction="right" duration="0.6">
        <h1 className="text-6xl md:text-[10rem] font-black text-white mt-6 tracking-tighter leading-[0.85]">
          Let's <span className="text-[#997819]">Talk.</span>
        </h1>
      </FadeIn>

      <FadeIn direction="right" duration="0.8">
        <p className="mt-10 text-white/60 text-sm md:text-3xl max-w-2xl font-medium leading-relaxed">
          "Your vision deserves a strategic backbone. Reach out to the UK's compliance experts."
        </p>
      </FadeIn>

      {/* Signature Decor Line */}
      <FadeIn direction="right" duration="1.0">
        <div className="mt-12 w-32 h-2 bg-[#997819] rounded-full" />
      </FadeIn>
    </div>
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
                <div className="p-10 mt-10 bg-white border border-[#12066a] rounded-[2rem] shadow-sm hover:shadow-xl  transition-all group">
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
              <div className="p-10 bg-[#12066a] rounded-[2rem] text-white overflow-hidden relative group">
                <Clock className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <h4 className="font-bold text-xl mb-2">Fast Response</h4>
                <p className="text-blue-100/60 text-sm">We typically respond to all compliance enquiries within 2-4 business hours.</p>
              </div>
            </FadeIn>
          </div>

          {/* 📝 THE FORM (Right Side - 8 Columns) */}
          <div className="lg:col-span-8">
            <FadeIn direction="up">
              <div className="bg-white p-6 md:p-12 rounded-[3.5rem]">
                {/* Yahan aapka Client-side Form Component aayega */}
                <ContactForm />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

  {/* 🔹 3. GLOBAL REACH MAP (Interactive Google Map) */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col justify-between items-center mb-12 gap-6">
      <FadeIn direction="up">
        <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-xs mb-3 block">
          Our Location
        </span>
        <h3 className="text-4xl md:text-6xl font-black text-[#12066a] tracking-tighter leading-none">
          Strategic UK Presence.
        </h3>
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <p className="text-zinc-400 font-medium max-w-xs text-sm">
          Visit our headquarters for a face-to-face consultation regarding your compliance needs.
        </p>
      </FadeIn>
    </div>

    {/* Map Container */}
    <div className="relative h-[550px] rounded-[3.5rem] overflow-hidden border border-zinc-100 shadow-2xl group transition-all duration-500 hover:shadow-[#997819]/10">
      
      {/* 🔹 Your Specific Google Map Iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.4286773757412!2d0.06951089999999999!3d51.560374499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7efa6261bcd%3A0x776c571a5d1e67d7!2sBizgrow%20Holdings%20Ltd!5e0!3m2!1sen!2s!4v1771237514559!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ 
          border: 0, 
          filter: ' contrast(1.1) brightness(0.9)', // Gray theme to match design
        }} 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="BizGrow Office Location"
        className="relative z-0 transition-all duration-1000 group-hover:grayscale-0"
      ></iframe>

      {/* 🔹 Overlay Detail Card (Optional) */}
      <div className="absolute bottom-10 left-10 z-10 bg-[#12066a] text-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block border border-white/10 backdrop-blur-md bg-opacity-90 transition-transform duration-500 group-hover:-translate-y-2">
         <h4 className="font-bold text-[#997819] uppercase tracking-widest text-xs mb-2">Office Headquarters</h4>
         <p className="text-sm leading-relaxed text-blue-100/80 font-medium">
           Our consultants are ready to assist you. Find us at our strategic UK hub.
         </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default ContactPage;