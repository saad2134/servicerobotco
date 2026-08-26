'use client';

import React from 'react';
import AnimatedImage from './AnimatedImage';

export default function Sectors() {
  return (
    <section className="py-24 px-6 bg-[#000000] border-technical-b">
      <div className="container mx-auto max-w-5xl">
        <div className="text-left max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// TARGET SECTORS</span>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white mt-4 mb-4">
            WHEREVER YOU RUN A FLOOR<span className="text-[#B4FF00]">.</span>
          </h2>
          <p className="text-neutral-400 text-sm font-medium">
            We integrate and maintain robotics fleets across a wide range of commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Warehouses and logistics", image: "/media/standard-robots-trusco-warehouse.webp" },
            { name: "Manufacturing", image: "/media/standard-robots-toyota-plant.webp" },
            { name: "Retail and shopping malls", image: "/media/gausium-retail-cleaning.webp" },
            { name: "Airports and transit", image: "/media/standard-robots-foxconn-factory.webp" },
            { name: "Healthcare and senior living", image: "/media/universal-robots-palletizing.webp" },
            { name: "Hotels, casinos, and resorts", image: "/media/haidilao-bellabot-01.webp" },
            { name: "Offices and corporate campuses", image: "/media/standard-bots-machine-tending.webp" },
            { name: "Education", image: "/media/universal-robots-welding.webp" },
            { name: "Grocery and food service", image: "/media/standard-bots-cnc-shop.webp" },
            { name: "Parking structures and large facilities", image: "/media/industrial_robot_integration.jpg" }
          ].map((industry, index) => (
            <div key={index} className="flex flex-col bg-[#0C0C0C] border border-white/5 hover:border-[#B4FF00] transition duration-300 text-left group">
              <div className="overflow-hidden aspect-video border-b border-white/5 relative bg-neutral-950">
                <AnimatedImage
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4FF00]" />
                <span className="text-xs uppercase font-mono tracking-wider text-neutral-300 font-bold">{industry.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
