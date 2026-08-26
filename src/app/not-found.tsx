'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#0C0C0C] text-white min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans pt-28">
      {/* Diagonal moving grid background */}
      <div className="moving-grid" />
      
      <div className="text-center relative z-10 max-w-lg">
        <span className="font-mono text-[10px] tracking-widest text-[#B4FF00] block mb-4 uppercase">
          // STATUS: 404 // PAGE NOT IN ACTIVE SCOPE
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
          PAGE OUT OF SCOPE<span className="text-[#B4FF00]">.</span>
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
          Thank you for exploring Service Robot Co. Please note that this specific page is currently not active, as this submission focuses on a single-page high-fidelity landing page showcase.
        </p>
        <div className="flex justify-center">
          <Link href="/" className="bg-[#B4FF00] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-none hover:bg-transparent hover:text-[#B4FF00] border border-[#B4FF00] transition-all duration-300">
            Return to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}
