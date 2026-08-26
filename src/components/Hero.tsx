'use client';

import React from 'react';
import Link from 'next/link';
import AnimatedImage from './AnimatedImage';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center justify-center border-technical-b pt-28 md:pt-36 pb-16 md:pb-24 lg:pb-28 overflow-hidden bg-black">
      {/* Full-Bleed Hero Background Image - Flows behind navbar */}
      <img
        src="/media/hero-hotel-cleaning.avif"
        alt="Hero Hotel Cleaning Background"
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity pointer-events-none z-0"
      />

      {/* Dynamic Background Telemetry Radar Scan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        {/* Radial dark mask to vignette and fade edges to solid black */}
        <div className="absolute inset-0 bg-radial-mask pointer-events-none z-10" />

        {/* Radar Scanner System */}
        <div className="relative w-[50vh] h-[50vh] sm:w-[60vh] sm:h-[60vh] md:w-[70vh] md:h-[70vh] flex items-center justify-center opacity-100">
          {/* Concentric radar rings */}
          <div className="radar-circle radar-circle-1" />
          <div className="radar-circle radar-circle-2" />
          <div className="radar-circle radar-circle-3" />

          {/* Rotating radar sweep */}
          <div className="radar-sweep-line" />

          {/* Center Coordinates & Crosshair */}
          <div className="absolute w-8 h-[1px] bg-[#B4FF00]/40" />
          <div className="absolute h-8 w-[1px] bg-[#B4FF00]/40" />
          <div className="absolute w-full h-[1px] bg-white/5 border-dashed" />
          <div className="absolute h-full w-[1px] bg-white/5 border-dashed" />

          {/* Concentric static helper rings */}
          <div className="absolute w-[66%] h-[66%] border border-white/5 rounded-full" />
          <div className="absolute w-[33%] h-[33%] border border-white/5 rounded-full" />

          {/* Monospace telemetry metadata */}
          <span className="absolute top-4 left-4 font-mono text-[8px] text-neutral-600 tracking-widest uppercase">SYS_SCAN_ACTIVE // 50Hz</span>
          <span className="absolute bottom-4 right-4 font-mono text-[8px] text-neutral-600 tracking-widest uppercase">LAT: 37.7749 // LNG: -122.4194</span>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column - Hero Description */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#B4FF00] inline-block" />
            COMMERCIAL ROBOTICS INTEGRATION & RaaS
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans font-black uppercase tracking-tighter leading-[0.85] mb-8">
            ROBOTICS INTEGRATED.<br />UPTIME SECURED<span className="text-[#B4FF00]">.</span>
          </h1>

          <p className="text-base text-neutral-400 max-w-lg mb-10 leading-relaxed">
            We select, finance, deploy, and service commercial robots—floor scrubbers, delivery units, and security trailers—across all 50 states. We own the deployment and uptime risk, so your team doesn't have to.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#contact" className="bg-[#B4FF00] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-none hover:bg-transparent hover:text-[#B4FF00] border border-[#B4FF00] transition-all duration-300 text-center">
              Book free assessment
            </Link>
            <Link href="/robots" className="border border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-none transition-all duration-300 text-center">
              Explore catalog
            </Link>
          </div>
        </div>

        {/* Right Column - Architectural Visual Frame */}
        <div className="lg:col-span-5 flex justify-center w-full relative z-20">
          <div className="relative p-2 bg-[#0C0C0C] border border-white/10 shadow-2xl max-w-md w-full">
            <div className="relative overflow-hidden aspect-[4/5] border border-white/5 bg-neutral-900">
              <AnimatedImage
                src="/media/gausium-retail-cleaning.webp"
                animatedSrc="/media/gausium-retail-cleaning-animated.webp"
                alt="Service Robot Co. floor cleaning integration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left font-mono z-30">
                <p className="text-[10px] uppercase tracking-widest text-[#B4FF00] mb-1">// DEPLOYMENT STATUS</p>
                <p className="text-xs uppercase font-bold tracking-tight">GAUSIUM S75 SCRUBBER OPERATIONAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
