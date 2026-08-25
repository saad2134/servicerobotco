import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Target Deployment Industries | Service Robot Co.™",
  description: "Explore the specific commercial environments we configure and support, from logistics warehouses to healthcare campuses.",
};

export default function IndustriesPage() {
  const industries = [
    {
      title: "Warehouses and logistics",
      focus: "Heavy-payload logistics, material transport routes, and loading bay sweeps.",
      tech: "Heavy AMRs, high-capacity sweepers, and WMS sync."
    },
    {
      title: "Manufacturing",
      focus: "Machine tending loops, CNC parts loader cobots, and tool runner logistics.",
      tech: "Universal Robots arms, safety-fenced cobots, and discrete telemetries."
    },
    {
      title: "Retail and shopping malls",
      focus: "High-traffic floor cleaning, scheduled overnight runs, and tableside hospitality.",
      tech: "Gausium Scrubber 75, visual obstacle evasion SLAM."
    },
    {
      title: "Airports and transit",
      focus: "24/7 continuous terminal scrubbing, perimeter sweeps, and cargo docks.",
      tech: "Heavy industrial sweepers, remote dispatcher triage."
    },
    {
      title: "Healthcare and senior living",
      focus: "Medication tray runs, supply cabinet transports, and sanitize wash loops.",
      tech: "SLAM delivery runners, HEPA vacuum sweepers."
    },
    {
      title: "Hotels, casinos, and resorts",
      focus: "Lobby carpet vacuuming, dining tableside bussing, and cargo transport links.",
      tech: "Pudu BellaBot delivery fleets, visual dock targets."
    },
    {
      title: "Offices and corporate campuses",
      focus: "Overnight hallway vacuuming, conference room sanitizing runs.",
      tech: "Co-bot sweepers, scheduling calendar syncs."
    },
    {
      title: "Education",
      focus: "Gymnasium hall sweepings, school corridor scrubbers, and outdoor lots.",
      tech: "Medium scrubbers, outdoor surveillance trailers."
    },
    {
      title: "Grocery and food service",
      focus: "Spill cleaning dispatch, aisle scans, and tableside food runs.",
      tech: "Spill response call buttons, restaurant bussers."
    },
    {
      title: "Parking structures and large facilities",
      focus: "Outdoor perimeter monitoring, night gate patrols, lot sweepings.",
      tech: "Surveillance trailers, heavy sweepers."
    }
  ];

  return (
    <div className="bg-[#FCFAF7] dark:bg-[#0B120E] min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#11361F] text-white py-20 px-6 border-b border-[#8B6E3C]/20 relative">
        <div className="container mx-auto max-w-5xl text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-4 inline-block">Environments Supported</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-none mb-6">
            Wherever you run a floor.
          </h1>
          <p className="text-base text-[#B2C0B8] max-w-xl leading-relaxed">
            From logistics hubs to active healthcare wards, we build and support operations maps that slot directly into your environment.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, index) => (
              <div key={index} className="bg-[#FCFAF7] dark:bg-[#121C16]/30 border border-[#DFDBD0] dark:border-[#24352B] p-8 rounded-sm hover:border-[#8B6E3C] transition-all duration-300 text-left relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#8B6E3C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <h3 className="font-serif text-2xl font-bold text-[#11361F] dark:text-white mb-3">{ind.title}</h3>
                <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-6">{ind.focus}</p>
                <div className="text-xs font-mono text-[#8B6E3C]">
                  <span className="uppercase block mb-1">Equipment Deployed</span>
                  <span className="text-[#19201C] dark:text-[#E2EAE5]">{ind.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
