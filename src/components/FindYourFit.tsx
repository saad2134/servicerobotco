'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Helper function to map interactive "Find Your Fit" calculations
const getFitResult = (ind: string, gl: string) => {
  let metric = "35% - 50%";
  let metricLabel = "Estimated Labor Savings";
  if (gl === "automate deliveries" || gl === "move materials faster") {
    metric = "3x - 4x";
    metricLabel = "Operational Throughput Speedup";
  } else if (gl === "secure a site" || gl === "add visible deterrence") {
    metric = "100%";
    metricLabel = "Autonomous Patrol Coverage";
  } else if (gl === "run 24/7 without adding staff") {
    metric = "24/7";
    metricLabel = "Uninterrupted Operations Uptime";
  } else if (gl === "scale without hiring") {
    metric = "+40%";
    metricLabel = "Increased Fleet Capacity";
  } else if (gl === "connect robots to our ERP") {
    metric = "< 1s";
    metricLabel = "WMS/ERP Telemetry Latency";
  } else if (gl === "reduce overnight labor costs") {
    metric = "65%";
    metricLabel = "Overnight Shift Savings";
  } else if (gl === "cover a seasonal peak") {
    metric = "24 Hours";
    metricLabel = "Rapid Fleet Scale-Up Latency";
  } else if (gl === "track inventory in real-time") {
    metric = "99.9%";
    metricLabel = "Inventory Scanning Accuracy";
  } else if (gl === "modernize operations") {
    metric = "9-12 Mo";
    metricLabel = "Average Capital Payback";
  }

  let insight = "Integrated autonomous systems handle repetitive tasks with 99.9% uptime, allowing teams to focus on high-value operations.";
  if (ind === "hospital or clinic") {
    insight = "UV and floor robots reduced hospital-acquired infections by up to 30% in peer-reviewed trials.";
  } else if (ind === "warehouse" || ind === "distribution center" || ind === "manufacturing plant") {
    insight = "Autonomous mobile robots (AMRs) reduce inventory transit travel time by up to 70%, doubling order picking efficiency.";
  } else if (ind === "hotel" || ind === "senior living facility") {
    insight = "Autonomous service robots automate 80% of routine room service and linen deliveries, allowing staff to focus on guest care.";
  } else if (ind === "restaurant") {
    insight = "Food running and table-bussing robots handle up to 150 trips per day, reducing front-of-house staff physical fatigue by 45%.";
  } else if (ind === "retail store" || ind === "mall or shopping center") {
    insight = "Autonomous floor care and shelf-scanning units secure clean aisles and real-time inventory validation, increasing store revenue by 2.4%.";
  }

  let fleet = ["Cleaning Robot (Autonomous Floor Care)"];
  if (gl === "automate deliveries" || gl === "move materials faster") {
    fleet = ["Delivery Robot (Runs that run themselves)", "AMR (Autonomous Mobile Robot)"];
  } else if (gl === "secure a site" || gl === "add visible deterrence") {
    fleet = ["Security Robot (Mobile Patrol & Surveillance)", "Security Trailer"];
  } else if (gl === "track inventory in real-time") {
    fleet = ["Barcode Scanners (Real-time Inventory Sync)"];
  } else if (gl === "run 24/7 without adding staff" || gl === "scale without hiring") {
    fleet = ["Cleaning Robot (Autonomous Floor Care)", "Delivery Robot (Runs that run themselves)"];
  }

  // Capitalize for playbook button
  const formattedInd = ind
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const playbookName = `Get your ${formattedInd} Automation Playbook`;

  return { metric, metricLabel, insight, fleet, playbookName };
};

export default function FindYourFit() {
  const [industry, setIndustry] = useState('hospital or clinic');
  const [goal, setGoal] = useState('cut cleaning labor');

  const fitData = getFitResult(industry, goal);

  return (
    <section className="py-24 px-6 border-technical-b bg-[#0C0C0C] relative overflow-hidden z-10">
      <div className="moving-grid" />
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="mb-16 text-left border-b border-white/10 pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// INTERACTIVE FLEET BUILDER</span>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white leading-none mt-4 uppercase">
            FIND YOUR FIT<span className="text-[#B4FF00]">.</span>
          </h2>
        </div>

        {/* Selector Sentence Constructor */}
        <div className="bg-black border border-white/10 p-8 md:p-12 relative overflow-hidden text-left mb-8">
          <div className="flex flex-wrap items-center gap-y-4 text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white/90">
            <span className="mr-2">I run a</span>
            <div className="relative inline-block border-b-2 border-white/20 hover:border-[#B4FF00] transition duration-200">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-1 py-1 font-black text-[#B4FF00] outline-none cursor-pointer uppercase"
                style={{ color: '#B4FF00' }}
              >
                <option value="warehouse" className="bg-[#000000] text-[#FFFFFF]">warehouse</option>
                <option value="hotel" className="bg-[#000000] text-[#FFFFFF]">hotel</option>
                <option value="hospital or clinic" className="bg-[#000000] text-[#FFFFFF]">hospital or clinic</option>
                <option value="restaurant" className="bg-[#000000] text-[#FFFFFF]">restaurant</option>
                <option value="retail store" className="bg-[#000000] text-[#FFFFFF]">retail store</option>
                <option value="apartment building" className="bg-[#000000] text-[#FFFFFF]">apartment building</option>
                <option value="office building" className="bg-[#000000] text-[#FFFFFF]">office building</option>
                <option value="parking lot" className="bg-[#000000] text-[#FFFFFF]">parking lot</option>
                <option value="event venue or stadium" className="bg-[#000000] text-[#FFFFFF]">event venue or stadium</option>
                <option value="manufacturing plant" className="bg-[#000000] text-[#FFFFFF]">manufacturing plant</option>
                <option value="distribution center" className="bg-[#000000] text-[#FFFFFF]">distribution center</option>
                <option value="university or campus" className="bg-[#000000] text-[#FFFFFF]">university or campus</option>
                <option value="airport or transit hub" className="bg-[#000000] text-[#FFFFFF]">airport or transit hub</option>
                <option value="casino or gaming floor" className="bg-[#000000] text-[#FFFFFF]">casino or gaming floor</option>
                <option value="property portfolio" className="bg-[#000000] text-[#FFFFFF]">property portfolio</option>
                <option value="senior living facility" className="bg-[#000000] text-[#FFFFFF]">senior living facility</option>
                <option value="school or K-12 campus" className="bg-[#000000] text-[#FFFFFF]">school or K-12 campus</option>
                <option value="mall or shopping center" className="bg-[#000000] text-[#FFFFFF]">mall or shopping center</option>
              </select>
              <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none text-[#B4FF00]">
                <span className="text-[10px]">▼</span>
              </div>
            </div>

            <span className="mx-2">and I want to</span>

            <div className="relative inline-block border-b-2 border-white/20 hover:border-[#B4FF00] transition duration-200">
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-1 py-1 font-black text-[#B4FF00] outline-none cursor-pointer uppercase"
              >
                <option value="cut cleaning labor" className="bg-[#000000] text-[#FFFFFF]">cut cleaning labor</option>
                <option value="automate deliveries" className="bg-[#000000] text-[#FFFFFF]">automate deliveries</option>
                <option value="secure a site" className="bg-[#000000] text-[#FFFFFF]">secure a site</option>
                <option value="run 24/7 without adding staff" className="bg-[#000000] text-[#FFFFFF]">run 24/7 without adding staff</option>
                <option value="scale without hiring" className="bg-[#000000] text-[#FFFFFF]">scale without hiring</option>
                <option value="connect robots to our ERP" className="bg-[#000000] text-[#FFFFFF]">connect robots to our ERP</option>
                <option value="reduce overnight labor costs" className="bg-[#000000] text-[#FFFFFF]">reduce overnight labor costs</option>
                <option value="add visible deterrence" className="bg-[#000000] text-[#FFFFFF]">add visible deterrence</option>
                <option value="cover a seasonal peak" className="bg-[#000000] text-[#FFFFFF]">cover a seasonal peak</option>
                <option value="move materials faster" className="bg-[#000000] text-[#FFFFFF]">move materials faster</option>
                <option value="track inventory in real-time" className="bg-[#000000] text-[#FFFFFF]">track inventory in real-time</option>
                <option value="modernize operations" className="bg-[#000000] text-[#FFFFFF]">modernize operations</option>
              </select>
              <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none text-[#B4FF00]">
                <span className="text-[10px]">▼</span>
              </div>
            </div>
            <span>.</span>
          </div>

          {/* Dynamic Result Panel */}
          <div className="mt-12 bg-black border border-white/10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative overflow-hidden transition-all duration-300">
            {/* Left Column: Metric & Insight */}
            <div className="md:col-span-6 flex flex-col justify-between items-start text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <div>
                <span className="font-mono text-[9px] text-[#B4FF00] uppercase tracking-widest block mb-4">// ESTIMATED TELEMETRY</span>
                <p className="text-5xl sm:text-6xl font-black text-[#B4FF00] tracking-tighter leading-none mb-2 transition-all duration-300">
                  {fitData.metric}
                </p>
                <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider mb-6 font-bold">
                  {fitData.metricLabel}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed max-w-md transition-all duration-300 min-h-[60px]">
                  {fitData.insight}
                </p>
              </div>
              <div className="mt-8 w-full">
                <Link
                  href={`/contact?topic=playbook&industry=${encodeURIComponent(industry)}&goal=${encodeURIComponent(goal)}`}
                  className="inline-block w-full bg-[#B4FF00] text-black font-bold uppercase tracking-widest text-xs px-6 py-4 rounded-none hover:bg-transparent hover:text-[#B4FF00] border border-[#B4FF00] transition-all duration-300 text-center"
                >
                  {fitData.playbookName} →
                </Link>
              </div>
            </div>

            {/* Right Column: Recommended Fleet */}
            <div className="md:col-span-6 flex flex-col justify-between items-start text-left md:pl-8">
              <div className="w-full">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-4">// RECOMMENDED HARDWARE FLEET</span>
                <div className="space-y-4 w-full">
                  {fitData.fleet.map((item, idx) => (
                    <div key={idx} className="border border-white/10 bg-black/40 p-4 flex items-center justify-between group/item hover:border-[#B4FF00]/40 transition duration-300">
                      <div>
                        <p className="text-sm font-sans font-bold text-white uppercase">{item.split(' (')[0]}</p>
                        <p className="font-mono text-[9px] text-neutral-500 uppercase mt-0.5">{item.split(' (')[1]?.replace(')', '') || 'Autonomous Operations'}</p>
                      </div>
                      <span className="text-[#B4FF00] font-mono text-xs font-bold transition-transform duration-300 group-hover/item:translate-x-1">→</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 w-full border-t border-dashed border-white/10 pt-6">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  All recommended units connect directly to our central ERP coordination hub. Select any model to review financing and RaaS options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-dashed border-white/10" />

        {/* Connect Your Stack & Robots Slot In (ERP Hub) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Box: Connect your stack */}
          <div className="lg:col-span-5 bg-black border border-white/10 p-8 flex flex-col justify-between relative group text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// INTEGRATION HUB</span>
              <h3 className="text-3xl font-sans font-black text-white leading-none mt-4 mb-2">CONNECT YOUR STACK.</h3>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                Everything connects to ERP. No manual tracking, no siloed operations. Centralize metrics instantly.
              </p>

              {/* ERP Diagram */}
              <div className="space-y-4 font-mono">
                {/* Central Node */}
                <div className="bg-[#B4FF00] text-black p-4 flex items-center gap-3 font-bold border border-[#B4FF00]">
                  <span className="text-lg">⬡</span>
                  <div>
                    <p className="text-xs uppercase tracking-wider leading-none">ERP Hub</p>
                    <p className="text-[9px] uppercase tracking-widest text-black/70 mt-1">Central data + coordination layer</p>
                  </div>
                </div>

                {/* Connectors */}
                <div className="pl-6 space-y-3 border-l border-white/20 ml-5 pt-2">
                  <div className="bg-black/50 border border-white/5 p-3 flex items-start gap-2.5 hover:border-white/20 transition duration-200">
                    <span className="text-neutral-500 text-[10px] mt-0.5">▪</span>
                    <div>
                      <p className="text-[11px] text-white font-bold uppercase leading-none">Inventory / WMS</p>
                      <p className="text-[8px] text-neutral-500 uppercase mt-1">Stock levels, location data</p>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-white/5 p-3 flex items-start gap-2.5 hover:border-white/20 transition duration-200">
                    <span className="text-neutral-500 text-[10px] mt-0.5">▪</span>
                    <div>
                      <p className="text-[11px] text-white font-bold uppercase leading-none">Camera feeds</p>
                      <p className="text-[8px] text-neutral-500 uppercase mt-1">Real-time floor visibility</p>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-white/5 p-3 flex items-start gap-2.5 hover:border-white/20 transition duration-200">
                    <span className="text-neutral-500 text-[10px] mt-0.5">▪</span>
                    <div>
                      <p className="text-[11px] text-white font-bold uppercase leading-none">POS / Ops data</p>
                      <p className="text-[8px] text-neutral-500 uppercase mt-1">Transactions, schedules</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact?topic=demo" className="inline-block w-full text-center border border-white/20 hover:border-[#B4FF00] hover:text-[#B4FF00] text-white font-bold uppercase tracking-widest text-xs py-4 rounded-none transition-all duration-300">
                Book a free demo →
              </Link>
            </div>
          </div>

          {/* Middle: Connection Arrow */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center py-4 lg:py-0">
            <div className="font-sans text-5xl font-black text-[#B4FF00]/40 rotate-90 lg:rotate-0 tracking-tighter">
              →
            </div>
            <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest mt-2 hidden lg:inline">// PLUG & PLAY</span>
          </div>

          {/* Right Box: Robots slot in */}
          <div className="lg:col-span-5 bg-black border border-[#B4FF00]/20 p-8 flex flex-col justify-between relative group text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// HARDWARE COUPLING</span>
              <h3 className="text-3xl font-sans font-black text-white leading-none mt-4 mb-2">ROBOTS SLOT IN.</h3>
              <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                No rip-and-replace required. Connect AMR units directly to your existing systems.
              </p>

              {/* Robot Slots */}
              <div className="space-y-3">
                <div className="border border-white/10 bg-black/50 p-4 hover:border-[#B4FF00]/40 transition duration-300">
                  <p className="text-xs font-bold text-white uppercase leading-none">Cleaning robot</p>
                  <p className="font-mono text-[9px] text-[#B4FF00] mt-1.5 uppercase">// Autonomous floor care</p>
                </div>

                <div className="border border-white/10 bg-black/50 p-4 hover:border-[#B4FF00]/40 transition duration-300">
                  <p className="text-xs font-bold text-white uppercase leading-none">Delivery robot</p>
                  <p className="font-mono text-[9px] text-[#B4FF00] mt-1.5 uppercase">// Runs that run themselves</p>
                </div>

                <div className="border border-white/10 bg-black/50 p-4 hover:border-[#B4FF00]/40 transition duration-300">
                  <p className="text-xs font-bold text-white uppercase leading-none">Security robot</p>
                  <p className="font-mono text-[9px] text-[#B4FF00] mt-1.5 uppercase">// Mobile patrol & surveillance</p>
                </div>

                <div className="border border-white/10 bg-black/50 p-4 hover:border-[#B4FF00]/40 transition duration-300">
                  <p className="text-xs font-bold text-white uppercase leading-none">Barcode scanners</p>
                  <p className="font-mono text-[9px] text-[#B4FF00] mt-1.5 uppercase">// Inventory sync in real time</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact?topic=demo" className="inline-block w-full text-center bg-[#B4FF00] text-black font-bold uppercase tracking-widest text-xs py-4 rounded-none hover:bg-transparent hover:text-[#B4FF00] border border-[#B4FF00] transition-all duration-300">
                Book a free demo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
