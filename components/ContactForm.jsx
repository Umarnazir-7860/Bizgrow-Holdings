"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-24 text-center animate-in fade-in zoom-in duration-700 bg-white rounded-[3rem] border border-zinc-100 shadow-2xl">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative w-24 h-24 bg-white border border-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <CheckCircle size={48} strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-4xl font-black text-[#12066a] mb-4 tracking-tighter italic">Submission Successful</h3>
        <p className="text-zinc-500 font-medium max-w-sm mx-auto leading-relaxed">
          Your strategic inquiry has been received. One of our lead consultants will reach out within 4 business hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-12 group flex items-center gap-2 mx-auto text-[#997819] font-black uppercase tracking-widest text-xs border-b-2 border-[#997819]/20 pb-1 hover:border-[#997819] transition-all"
        >
          Send Another Inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    );
  }

  const inputClasses = "w-full bg-transparent border-b border-zinc-200 py-5 outline-none focus:border-[#12066a] transition-all duration-500 peer font-bold text-[#12066a] text-lg placeholder-transparent";
  const labelClasses = "absolute left-0 top-5 text-zinc-400 pointer-events-none transition-all duration-500 peer-focus:-top-6 peer-focus:text-[#997819] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px] uppercase font-black tracking-[0.2em]";

  return (
    <div className="p-8 md:p-14 bg-white/80 backdrop-blur-xl border border-zinc-100 rounded-[4rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden">
      {/* 🔹 Subtle Decorative Background Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#997819]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
        <div className="mb-10">
          <h3 className="text-3xl font-black text-[#12066a] tracking-tighter">Direct Inquiry</h3>
          <p className="text-zinc-400 text-sm font-medium mt-2">Fill out the form below to initiate your strategic consultation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Full Name */}
          <div className="relative" onFocus={() => setActiveField('name')} onBlur={() => setActiveField(null)}>
            <input type="text" required className={inputClasses} placeholder="Name" />
            <label className={labelClasses}>Full Name</label>
            <div className={`absolute bottom-0 left-0 h-[2px] bg-[#997819] transition-all duration-700 ${activeField === 'name' ? 'w-full' : 'w-0'}`}></div>
          </div>

          {/* Email Address */}
          <div className="relative" onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)}>
            <input type="email" required className={inputClasses} placeholder="Email" />
            <label className={labelClasses}>Email Address</label>
            <div className={`absolute bottom-0 left-0 h-[2px] bg-[#997819] transition-all duration-700 ${activeField === 'email' ? 'w-full' : 'w-0'}`}></div>
          </div>

          {/* Company Name */}
          <div className="relative" onFocus={() => setActiveField('company')} onBlur={() => setActiveField(null)}>
            <input type="text" className={inputClasses} placeholder="Company" />
            <label className={labelClasses}>Company / Organization</label>
            <div className={`absolute bottom-0 left-0 h-[2px] bg-[#997819] transition-all duration-700 ${activeField === 'company' ? 'w-full' : 'w-0'}`}></div>
          </div>

          {/* Service Selection */}
          <div className="relative">
            <select className={`${inputClasses} appearance-none cursor-pointer pt-5`}>
              <option value="" disabled selected>Select Requirement</option>
              <option>SIA ACS Consultation</option>
              <option>ISO Certification Flow</option>
              <option>Cyber Essentials Plus</option>
              <option>Strategic Partnership</option>
            </select>
            <label className="absolute left-0 -top-6 text-[#997819] text-[10px] uppercase font-black tracking-[0.2em]">Service Interest</label>
            <div className="absolute right-0 bottom-6 pointer-events-none opacity-30">
               <ArrowRight size={18} className="rotate-90" />
            </div>
          </div>
        </div>

        {/* Message Area */}
        <div className="relative pt-4" onFocus={() => setActiveField('msg')} onBlur={() => setActiveField(null)}>
          <textarea rows={4} required className={`${inputClasses} resize-none`} placeholder="Message"></textarea>
          <label className={labelClasses}>Briefly describe your objectives</label>
          <div className={`absolute bottom-0 left-0 h-[2px] bg-[#997819] transition-all duration-700 ${activeField === 'msg' ? 'w-full' : 'w-0'}`}></div>
        </div>

        {/* Submit Button */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <button className="group relative w-full md:w-auto px-12 py-6 bg-[#12066a] text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(18,6,106,0.2)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-[#997819] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-4">
              Initialize Consultation 
              <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
            </span>
          </button>
          
          <div className="flex flex-col items-end">
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Verified Professional inquiry
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;