'use client';

import React from 'react';
import AnimatedImage from './AnimatedImage';

export default function Timeline() {
  return (
    <section className="py-24 px-6 bg-[#000000] border-technical-b">
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-2xl mb-16 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// IMPLEMENTATION TIMELINE</span>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white mt-4 mb-4">
            RESULTS ON THE FLOOR<span className="text-[#B4FF00]">.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-medium">
            We manage the complete implementation lifecycle, delivering operational value in weeks, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Step 1 */}
          <div className="border border-white/10 p-6 flex flex-col justify-between group">
            <div>
              <div className="overflow-hidden aspect-video border border-white/5 bg-neutral-950 mb-4 relative">
                <AnimatedImage 
                  src="/media/standard-robots-trusco-warehouse.webp" 
                  animatedSrc="/media/standard-robots-trusco-warehouse-animated.webp"
                  alt="Operational mapping and layout design"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-xs text-[#B4FF00] block mb-2">SITE ASSESSMENT</span>
              <h3 className="font-sans text-lg font-bold text-white mb-2 uppercase">We map your operation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                We run a free site assessment first, assessing elevator heights, floor materials, narrow corridors, and layout maps before any hardware is picked.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-white/10 p-6 flex flex-col justify-between group">
            <div>
              <div className="overflow-hidden aspect-video border border-white/5 bg-neutral-950 mb-4 relative">
                <AnimatedImage 
                  src="/media/standard-robots-toyota-plant.webp" 
                  animatedSrc="/media/standard-robots-toyota-plant-animated.webp"
                  alt="WMS / ERP system connection sync"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-xs text-[#B4FF00] block mb-2">SOFTWARE SYNC</span>
              <h3 className="font-sans text-lg font-bold text-white mb-2 uppercase">We wire it to your systems</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                We sync the equipment dispatch queue directly to the systems your team already runs — WMS, ERP, POS, or local database tools — so it communicates telemetry automatically.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border border-white/10 p-6 flex flex-col justify-between group">
            <div>
              <div className="overflow-hidden aspect-video border border-white/5 bg-neutral-950 mb-4 relative">
                <AnimatedImage 
                  src="/media/gausium-retail-cleaning.webp" 
                  animatedSrc="/media/gausium-retail-cleaning-animated.webp"
                  alt="Robots active on supermarket floors"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-xs text-[#B4FF00] block mb-2">CONFIGURATION</span>
              <h3 className="font-sans text-lg font-bold text-white mb-2 uppercase">Robots on the floor in weeks</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                We handle the delivery, boundaries pathing configuration, and initial layout programming. The robot goes live as a working part of your team.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border border-white/10 p-6 flex flex-col justify-between group">
            <div>
              <div className="overflow-hidden aspect-video border border-white/5 bg-neutral-950 mb-4 relative">
                <AnimatedImage 
                  src="/media/universal-robots-palletizing.webp" 
                  animatedSrc="/media/universal-robots-palletizing-animated.webp"
                  alt="Automated material handling solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-xs text-[#B4FF00] block mb-2">CUSTOM FINANCE</span>
              <h3 className="font-sans text-lg font-bold text-white mb-2 uppercase">Rent monthly or own it</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                Leasing, outright equipment purchase, and monthly rentals (RaaS) are all supported. We outline every pricing structure clearly so your finance team picks the best fit.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="border border-white/10 p-6 flex flex-col justify-between group">
            <div>
              <div className="overflow-hidden aspect-video border border-white/5 bg-neutral-950 mb-4 relative">
                <AnimatedImage 
                  src="/media/standard-bots-cnc-shop.webp" 
                  animatedSrc="/media/standard-bots-cnc-shop-animated.webp"
                  alt="CNC shop floor worker training session"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-xs text-[#B4FF00] block mb-2">OPERATOR TRAINING</span>
              <h3 className="font-sans text-lg font-bold text-white mb-2 uppercase">Staff runs it from day one</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                We train your existing staff to operate, dispatch, and clean the payload bins. They learn how to work side-by-side with the equipment as utility operators.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="border border-white/10 p-6 flex flex-col justify-between group">
            <div>
              <div className="overflow-hidden aspect-video border border-white/5 bg-neutral-950 mb-4 relative">
                <AnimatedImage 
                  src="/media/industrial_robot_integration.jpg" 
                  animatedSrc="/media/industrial_robot_integration-animated.webp"
                  alt="Integrator engineer diagnostic updates"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-xs text-[#B4FF00] block mb-2">ONGOING SUPPORT</span>
              <h3 className="font-sans text-lg font-bold text-white mb-2 uppercase">Never your problem again</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                We manage all mechanical service, hardware repairs, and fleet upkeep. If an issue pops up, we handle it — keeping downtime risk fully covered.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
