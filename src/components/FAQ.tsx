'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqItems = [
  {
    question: 'What does a robotics integrator do?',
    answer: 'A robotics integrator handles everything the robot manufacturer does not: site assessment, software integration, deployment, staff training, and ongoing service. You get one partner responsible for a working robot in your facility — not just a machine on a pallet.',
    accent: false,
  },
  {
    question: 'How much does a cleaning or delivery robot cost?',
    answer: 'Purchase, lease, and month-to-month rental options are all available. Service Robot Co. surfaces every structure upfront so your finance team picks what fits before any hardware decision. We arrange financing; we are not a bank or lender.',
    accent: false,
  },
  {
    question: 'How long does deployment take?',
    answer: 'Weeks, not months. We run a free site assessment first, then phase the rollout around your schedule. The robot goes live as a working part of your operation — not a side project with a long runway.',
    accent: false,
  },
  {
    question: 'Do robots work with our existing WMS or ERP?',
    answer: 'Integration is step two of every deployment. We connect the robot to the systems your team already runs — WMS, ERP, POS, or custom ops tools — so it reads from and writes back to your existing data from day one.',
    accent: true,
  },
  {
    question: 'What if the robot breaks down?',
    answer: 'Regional service engineers and depots in all 50 states. When something breaks: 10-minute remote triage during business hours, 24-hour nationwide on-site dispatch, and 24/7 emergency response. 80% of issues are resolved in 10 minutes by phone — no truck needed.',
    accent: false,
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqItems[0]; isOpen: boolean; onToggle: () => void }) {
  const borderBase = item.accent ? 'border-[#B4FF00]/40' : 'border-white/10';
  const borderOpen = item.accent ? 'border-[#B4FF00]' : 'border-[#B4FF00]/50';
  const borderHover = item.accent ? 'hover:border-[#B4FF00]/60' : 'hover:border-white/20';

  return (
    <div
      className={`border ${isOpen ? borderOpen + ' bg-neutral-900/40' : borderBase} ${borderHover} hover:bg-neutral-900/20 rounded-none bg-black transition-all duration-300`}
    >
      <button
        onClick={onToggle}
        className={`w-full p-6 font-sans font-bold text-base cursor-pointer flex justify-between items-center select-none uppercase tracking-wide transition duration-300 ${
          isOpen
            ? (item.accent ? 'text-white' : 'text-[#B4FF00]')
            : (item.accent ? 'text-[#B4FF00]' : 'text-white')
        }`}
      >
        {item.question}
        <span className={`font-mono font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'} text-[#B4FF00]`}>
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className={`px-6 pb-6 text-xs text-neutral-400 leading-relaxed border-t ${item.accent ? 'border-[#B4FF00]/10' : 'border-white/5'} pt-4 mx-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <>
      {/* OEM MANUFACTURERS LINEUP */}
      <section className="py-20 px-6 bg-[#000000] border-technical-b text-left">
        <div className="container mx-auto max-w-5xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// COMPATIBLE OEM HARDWARE</span>
          <h2 className="font-sans text-2xl font-black text-white mt-4 mb-4 uppercase">
            WE RUN THE BEST COMMERCIAL ROBOTS AND SERVICE THEM OURSELVES<span className="text-[#B4FF00]">.</span>
          </h2>
          <p className="text-xs text-neutral-500 max-w-2xl mb-10 leading-relaxed font-bold uppercase">
            We integrate and service equipment across leading OEMs including Pudu Robotics, Gausium, Standard Bots, Standard Robots, and Universal Robots.
          </p>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold text-neutral-400 tracking-wider">
            <span className="border border-white/10 px-4 py-2 hover:border-[#B4FF00]/50 hover:text-white transition-all duration-300 cursor-default">PUDU ROBOTICS</span>
            <span className="border border-white/10 px-4 py-2 hover:border-[#B4FF00]/50 hover:text-white transition-all duration-300 cursor-default">GAUSIUM</span>
            <span className="border border-white/10 px-4 py-2 hover:border-[#B4FF00]/50 hover:text-white transition-all duration-300 cursor-default">STANDARD BOTS</span>
            <span className="border border-white/10 px-4 py-2 hover:border-[#B4FF00]/50 hover:text-white transition-all duration-300 cursor-default">UNIVERSAL ROBOTS</span>
          </div>
        </div>
      </section>

      {/* CALLOUT QUOTE SECTION (OPERATIONS MISSION) */}
      <section className="py-24 px-6 bg-[#0C0C0C] border-technical-b relative overflow-hidden z-10">
        {/* Subtle moving grid background */}
        <div className="moving-grid" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// OPERATIONS MISSION</span>
          <blockquote className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white leading-tight uppercase tracking-tighter">
            "We run the best commercial robots — and service them ourselves. We're brand-independent — we match the machine to your site, then run it for you."
          </blockquote>
          <div className="w-12 h-1 bg-[#B4FF00] mx-auto mt-10" />
        </div>
      </section>

      {/* QUICK ANSWERS FAQs */}
      <section className="py-24 px-6 bg-[#000000] border-technical-b relative">
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-left mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// COMMON ENQUIRIES</span>
            <h2 className="text-4xl sm:text-5xl font-sans font-black text-white mt-4 mb-4">
              QUICK ANSWERS<span className="text-[#B4FF00]">.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
