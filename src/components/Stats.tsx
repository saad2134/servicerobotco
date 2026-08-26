'use client';

import React from 'react';

export default function Stats() {
  return (
    <section className="py-12 bg-black border-technical-b relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Stat 1 */}
          <div className="bg-[#0C0C0C] border border-white/10 p-6 flex flex-col justify-between relative group hover:border-[#B4FF00] transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ DEPLOYMENT // 01 ]</span>
              <span className="text-[9px] font-mono text-[#B4FF00] font-bold">// ACTIVE</span>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none mb-2 group-hover:text-[#B4FF00] transition-colors">11+</p>
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Years in Equipment</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#0C0C0C] border border-white/10 p-6 flex flex-col justify-between relative group hover:border-[#B4FF00] transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ REGION // 02 ]</span>
              <span className="text-[9px] font-mono text-[#B4FF00] font-bold">// NATIONWIDE</span>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none mb-2 group-hover:text-[#B4FF00] transition-colors">ALL 50</p>
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-bold">US States Covered</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#0C0C0C] border border-white/10 p-6 flex flex-col justify-between relative group hover:border-[#B4FF00] transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ HOTLINE // 03 ]</span>
              <span className="text-[9px] font-mono text-[#B4FF00] font-bold">// 24H_SUPPORT</span>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none mb-2 group-hover:text-[#B4FF00] transition-colors">24/7</p>
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-bold">On-site Support</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-[#0C0C0C] border border-white/10 p-6 flex flex-col justify-between relative group hover:border-[#B4FF00] transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ OEMs // 04 ]</span>
              <span className="text-[9px] font-mono text-[#B4FF00] font-bold">// COMPATIBLE</span>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none mb-2 group-hover:text-[#B4FF00] transition-colors">15+</p>
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Robot OEMs</p>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="bg-[#0C0C0C] border border-white/10 p-6 flex flex-col justify-between relative group hover:border-[#B4FF00] transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ RESOLUTION // 05 ]</span>
              <span className="text-[9px] font-mono text-[#B4FF00] font-bold">// TELEMETRY</span>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none mb-2 group-hover:text-[#B4FF00] transition-colors">80%</p>
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Remote Resolution</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
