import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Commercial Robots Catalog | Service Robot Co.™",
  description: "Browse the commercial cleaning, delivery, AMR, and industrial robotic equipment we integrate, finance, and support.",
};

export default function RobotsPage() {
  const categories = [
    {
      title: "Commercial Cleaning Robots",
      desc: "Autonomous scrubbers, sweepers, and vacuums designed to handle repetitive, large-floor cleaning duties on a scheduled run.",
      models: ["Pudu CC1", "Gausium Scrubber 50", "Gausium Scrubber 75"],
      specs: { coverage: "Up to 3,000 sqm/hr", batteries: "LFP / 6-8 hr runtime", navigation: "LiDAR + 3D Depth Cameras" },
      pricing: "Buy: $22k - $96k | RaaS: $600 - $2,000/mo",
      link: "/robots/cleaning",
      image: "/media/gausium-retail-cleaning.webp"
    },
    {
      title: "Hospitality & Delivery Robots",
      desc: "Tableside delivery, bussing, and internal supply runners built to optimize service staff efficiency in busy environments.",
      models: ["Pudu Bellabot", "Pudu KettyBot", "Pudu HolaBot"],
      specs: { payload: "Up to 40kg capacity", batteries: "Lithium / 12 hr runtime", navigation: "SLAM Visual + LiDAR" },
      pricing: "Buy: $12k - $28k | RaaS: $450 - $900/mo",
      link: "/robots/delivery",
      image: "/media/haidilao-bellabot-01.webp"
    },
    {
      title: "Autonomous Mobile Robots (AMRs)",
      desc: "Industrial heavy-load tuggers, under-cart lifts, and forklift AMRs to automate transport routes in manufacturing and shipping.",
      models: ["Standard Robots Oasis 300UL", "Standard Robots Oasis 600UL"],
      specs: { capacity: "300kg - 1200kg payloads", safety: "Dual Safety LiDAR + Bumper", communication: "WMS API Sync / WiFi" },
      pricing: "Buy: $38k - $85k | RaaS: $1,200 - $2,800/mo",
      link: "/robots/amr",
      image: "/media/standard-robots-trusco-warehouse.webp"
    },
    {
      title: "Cobots & Industrial Arms",
      desc: "Collaborative robotic arms configured for machine tending, palletizing, parts loading, and automated testing loops.",
      models: ["Universal Robots UR10e", "Universal Robots UR20", "Standard Bots Ro1"],
      specs: { reach: "Up to 1750mm", precision: "±0.03mm repeatability", payload: "3kg - 20kg limits" },
      pricing: "Buy: $28k - $68k | RaaS: $950 - $2,200/mo",
      link: "/robots/cobot",
      image: "/media/standard-bots-cnc-shop.webp"
    }
  ];

  return (
    <div className="bg-[#FCFAF7] dark:bg-[#0B120E] min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#11361F] text-white py-20 px-6 border-b border-[#8B6E3C]/20 relative">
        <div className="container mx-auto max-w-5xl text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-4 inline-block">Integration Options</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-none mb-6">
            Pick the robot that fits.
          </h1>
          <p className="text-base text-[#B2C0B8] max-w-xl leading-relaxed">
            Service Robot Co. is brand-independent. We evaluate the market, deploy the hardware, integrate the dispatch queues, and manage ongoing support.
          </p>
        </div>
      </section>

      {/* Categories Catalog */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl flex flex-col gap-20">
          {categories.map((cat, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-[#DFDBD0]/40 dark:border-[#24352B]/40 pb-16 last:border-0 last:pb-0">
              {/* Image Frame */}
              <div className="lg:col-span-5 relative group">
                <div className="p-2 bg-white dark:bg-[#121C16] border border-[#DFDBD0] dark:border-[#24352B] shadow-xl rounded-sm">
                  <div className="overflow-hidden aspect-video bg-[#F4F1E9] dark:bg-[#1C2C22] border border-[#DFDBD0]/60 dark:border-[#24352B]/60 relative">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Specs & Description */}
              <div className="lg:col-span-7 flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B6E3C] mb-2">{cat.pricing}</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#11361F] dark:text-white mb-4">{cat.title}</h2>
                <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-6">{cat.desc}</p>
                
                {/* Tech Specs block */}
                <div className="bg-[#F4F1E9]/40 dark:bg-[#121C16]/30 border border-[#DFDBD0]/50 dark:border-[#24352B]/40 p-4 rounded-sm text-xs font-mono mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(cat.specs).map(([key, val], idx) => (
                    <div key={idx}>
                      <span className="text-[#8B6E3C] uppercase block mb-1">{key}</span>
                      <span className="text-[#19201C] dark:text-[#E2EAE5]">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={cat.link} className="text-xs font-bold uppercase tracking-widest text-[#11361F] dark:text-white hover:text-[#8B6E3C] transition">
                    View Catalog Models →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
