'use client';

import React from 'react';
import Link from 'next/link';
import AnimatedImage from './AnimatedImage';

export default function Catalog() {
  return (
    <section className="py-24 px-6 bg-[#0C0C0C] border-technical-b relative overflow-hidden z-10">
      {/* Subtle moving grid background */}
      <div className="moving-grid" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-2xl mb-16 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// ACTIVE LINEUP</span>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white mt-4 mb-4">
            CHOOSE YOUR FLEET<span className="text-[#B4FF00]">.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-medium">
            We deploy and support standard floor, delivery, and surveillance equipment optimized for commercial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Cleaning */}
          <div className="bg-[#000000] border border-white/10 p-8 rounded-none hover:border-[#B4FF00] transition-all duration-300 group flex flex-col justify-between text-left">
            <div>
              <div className="overflow-hidden aspect-[4/3] border border-white/5 bg-neutral-950 mb-8 relative">
                <AnimatedImage
                  src="/media/gausium-retail-cleaning.webp"
                  animatedSrc="/media/gausium-retail-cleaning-animated.webp"
                  alt="Floor scrubber cleaning supermarket aisle"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-white mb-3">FLOOR SCRUBBERS.</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-8 font-medium">
                Commercial scrubbers and vacuums that run your floor on a schedule — no staff, no callbacks. Autonomous sweepers built for malls, transit hubs, and warehouses.
              </p>
            </div>
            <Link href="/robots/cleaning" className="text-[10px] font-mono uppercase tracking-widest text-[#B4FF00] hover:text-white transition flex items-center gap-1 border-t border-white/10 pt-4 font-bold">
              Explore Cleaning Robots →
            </Link>
          </div>

          {/* Card 2: Delivery */}
          <div className="bg-[#B4FF00] text-black border border-[#B4FF00] p-8 rounded-none shadow-2xl transition-all duration-300 group flex flex-col justify-between text-left">
            <div>
              <div className="overflow-hidden aspect-[4/3] border border-black/10 bg-neutral-900 mb-8 relative">
                <AnimatedImage
                  src="/media/haidilao-bellabot-01.webp"
                  animatedSrc="/media/haidilao-bellabot-01-animated.webp"
                  alt="Haidilao restaurant bussing robot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-black text-[#B4FF00] font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 font-bold z-20">
                  BEST SELLER
                </div>
              </div>
              <h3 className="font-sans text-xl font-black uppercase tracking-tight mb-3" style={{ color: '#000000' }}>DELIVERY & BUSSING.</h3>
              <p className="text-xs leading-relaxed mb-8 font-medium" style={{ color: '#000000' }}>
                Delivery robots handle every plate run, medication round, and supply loop — staff stay with guests. Optimized for restaurants, senior living, and hotels.
              </p>
            </div>
            <Link href="/robots/delivery" className="text-[10px] font-mono uppercase tracking-widest hover:text-black/75 transition flex items-center gap-1 border-t border-black/10 pt-4 font-bold" style={{ color: '#000000' }}>
              Explore Delivery Robots →
            </Link>
          </div>

          {/* Card 3: Security */}
          <div className="bg-[#000000] border border-white/10 p-8 rounded-none hover:border-[#B4FF00] transition-all duration-300 group flex flex-col justify-between text-left">
            <div>
              <div className="overflow-hidden aspect-[4/3] border border-white/5 bg-neutral-950 mb-8 relative">
                <AnimatedImage
                  src="/media/industrial_robot_integration.jpg"
                  animatedSrc="/media/industrial_robot_integration-animated.webp"
                  alt="Autonomous security trailer with camera mast"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-white mb-3">SURVEILLANCE TRAILERS.</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-8 font-medium">
                Autonomous patrol units and mobile camera systems that watch your site around the clock. Heavy-duty surveillance trailers built for construction and lots.
              </p>
            </div>
            <Link href="/solutions/security-robots" className="text-[10px] font-mono uppercase tracking-widest text-[#B4FF00] hover:text-white transition flex items-center gap-1 border-t border-white/10 pt-4 font-bold">
              Explore Security Systems →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
