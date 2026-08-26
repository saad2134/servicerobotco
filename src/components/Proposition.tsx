'use client';

import React from 'react';
import AnimatedImage from './AnimatedImage';

export default function Proposition() {
  return (
    <section className="py-24 px-6 border-technical-b bg-[#000000]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// BRAND INDEPENDENT</span>
            <h2 className="text-4xl sm:text-5xl font-sans font-black text-white leading-none mt-4 mb-8">
              WE ARE THE INTEGRATOR, NOT THE BUILDER<span className="text-[#B4FF00]">.</span>
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-medium">
              A robotics integrator handles everything the robot manufacturer does not: site assessment, software integration, deployment, staff training, and ongoing service. You get one partner responsible for a working robot in your facility — not just a machine on a pallet.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-medium">
              We are brand-independent. We evaluate the leading OEMs to select the machine that fits your floor plans. We arrange financing, configure integrations, and manage repair logistics. If it breaks down, you call us.
            </p>
          </div>
          <div className="lg:col-span-5 relative w-full">
            <div className="p-2 bg-[#0C0C0C] border border-white/10 shadow-2xl">
              <div className="overflow-hidden aspect-video border border-white/5 relative bg-neutral-900">
                <AnimatedImage 
                  src="/media/industrial_robot_integration.jpg"
                  animatedSrc="/media/industrial_robot_integration-animated.webp"
                  alt="Service Robot Co. engineer setting robotic arm payload parameters"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
