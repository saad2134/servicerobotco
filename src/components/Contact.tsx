'use client';

import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#0C0C0C] border-t border-white/10 relative overflow-hidden z-10" id="contact">
      {/* Subtle moving grid background */}
      <div className="moving-grid" />
      
      <div className="container mx-auto max-w-xl text-left relative z-10">
        <div className="text-left mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// FACILITY ASSESSMENT</span>
          <h2 className="text-4xl font-sans font-black text-white mt-4 mb-3 uppercase">
            REQUEST FACILITY MAPPING<span className="text-[#B4FF00]">.</span>
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed uppercase font-bold">
            We walk your floor. You leave knowing what fits — at no cost.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8 bg-black border border-white/10 p-8 rounded-none shadow-xl">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">Full Name</label>
            <input type="text" id="name" required className="w-full px-4 py-3 border-b border-white/20 text-white bg-transparent" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">Company Name</label>
            <input type="text" id="company" required className="w-full px-4 py-3 border-b border-white/20 text-white bg-transparent" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">Work Email</label>
            <input type="email" id="email" required className="w-full px-4 py-3 border-b border-white/20 text-white bg-transparent" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">Robot Category Needed</label>
            <select id="category" className="w-full px-4 py-3 border-b border-white/20 text-white bg-transparent">
              <option className="bg-black text-white">Commercial Cleaning Robots</option>
              <option className="bg-black text-white">Delivery & Bussing Robots</option>
              <option className="bg-black text-white">Autonomous Mobile Robots (AMRs)</option>
              <option className="bg-black text-white">CNC & Industrial Arms</option>
              <option className="bg-black text-white">Security & Surveillance</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">Facility Notes</label>
            <textarea id="message" rows={4} className="w-full px-4 py-3 border-b border-white/20 text-white bg-transparent"></textarea>
          </div>

          <button type="submit" className="bg-[#B4FF00] text-black font-bold py-4 rounded-none border border-[#B4FF00] hover:bg-transparent hover:text-[#B4FF00] transition duration-300 uppercase tracking-widest text-xs">
            Submit Assessment Request
          </button>
        </form>
      </div>
    </section>
  );
}
