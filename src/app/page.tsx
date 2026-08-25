import React from 'react';
import Link from 'next/link';
import BusinessCard from '../components/BusinessCard';

export default function HomePage() {
  return (
    <div className="bg-[#FCFAF7] dark:bg-[#0B120E] text-[#19201C] dark:text-[#F7FAF8]">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FCFAF7] dark:bg-[#0B120E]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(var(--primary-green) 1.5px, transparent 1.5px), radial-gradient(var(--primary-green) 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }} />
        
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Hero Description */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#11361F]/5 dark:bg-white/5 border border-[#11361F]/10 dark:border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8B6E3C] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#8B6E3C] animate-pulse" />
              Robotics Integration & Support
            </span>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#11361F] dark:text-white tracking-tight leading-[0.95] mb-8">
              Get ahead with automation.
            </h1>
            
            <p className="text-lg text-[#4A5650] dark:text-[#B2C0B8] max-w-xl mb-12 font-sans leading-relaxed">
              We design, finance, install, and service systems that fit your needs. From first facility mapping to 24/7 engineer dispatch coverage, we own the uptime risk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="bg-[#11361F] hover:bg-[#8B6E3C] text-white font-semibold text-center px-8 py-4 rounded transition-all duration-300 shadow-lg hover:shadow-xl">
                Book a free assessment
              </Link>
              <Link href="/robots" className="border border-[#11361F]/20 hover:border-[#11361F]/40 dark:border-white/20 dark:hover:border-white/40 text-[#11361F] dark:text-white font-semibold text-center px-8 py-4 rounded transition-all duration-300">
                Explore catalog
              </Link>
            </div>
          </div>

          {/* Right Column - Architectural Visual Frame */}
          <div className="lg:col-span-5 relative z-10 flex justify-center">
            <div className="relative p-3 bg-white dark:bg-[#121C16] border border-[#DFDBD0] dark:border-[#24352B] shadow-2xl rounded-sm max-w-md">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#F4F1E9] dark:bg-[#1C2C22] border border-[#DFDBD0]/60 dark:border-[#24352B]/60">
                <img 
                  src="/media/gausium-retail-cleaning.webp" 
                  alt="Service Robot Co. floor cleaning integration"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D10]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#A38652] mb-1">Live Deployment</p>
                  <p className="font-serif text-lg font-bold">Floor Scrubbing Program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Grid Divider */}
      <section className="bg-[#11361F] text-white py-16 border-y border-[#8B6E3C]/20 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center stats-grid">
            <div className="border-r border-white/10 last:border-0 pr-4">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-[#8B6E3C] mb-1">11+</p>
              <p className="text-[10px] text-[#B2C0B8] uppercase tracking-widest font-bold">Years in Equipment</p>
            </div>
            <div className="border-r border-white/10 last:border-0 pr-4">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-[#8B6E3C] mb-1">All 50</p>
              <p className="text-[10px] text-[#B2C0B8] uppercase tracking-widest font-bold">US States Covered</p>
            </div>
            <div className="border-r border-white/10 last:border-0 pr-4">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-[#8B6E3C] mb-1">24/7</p>
              <p className="text-[10px] text-[#B2C0B8] uppercase tracking-widest font-bold">On-site Support</p>
            </div>
            <div className="border-r border-white/10 last:border-0 pr-4">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-[#8B6E3C] mb-1">15+</p>
              <p className="text-[10px] text-[#B2C0B8] uppercase tracking-widest font-bold">Robot OEMs</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold text-[#8B6E3C] mb-1">80%</p>
              <p className="text-[10px] text-[#B2C0B8] uppercase tracking-widest font-bold">Remote Resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Integrator Proposition */}
      <section className="py-28 px-6 bg-[#FCFAF7] dark:bg-[#0B120E]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">One Partner. Full Lifecycle.</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#11361F] dark:text-[#E2EAE5] leading-none mt-4 mb-8">
                We are a commercial integrator, not a manufacturer.
              </h2>
              <p className="text-base text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-6">
                A robotics integrator handles everything the robot manufacturer does not: site assessment, software integration, deployment, staff training, and ongoing service. You get one partner responsible for a working robot in your facility — not just a machine on a pallet.
              </p>
              <p className="text-base text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed">
                We are brand-independent. We evaluate the leading OEMs to select the machine that fits your floor plans. We arrange financing, configure integrations, and manage repair logistics. If it breaks down, you call us.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="p-3 bg-white dark:bg-[#121C16] border border-[#DFDBD0] dark:border-[#24352B] shadow-2xl rounded-sm">
                <div className="overflow-hidden aspect-video border border-[#DFDBD0]/60 dark:border-[#24352B]/60 relative">
                  <img 
                    src="/media/industrial_robot_integration.jpg" 
                    alt="Service Robot Co. engineer setting robotic arm payload parameters"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Redesigned Premium Catalog Cards */}
      <section className="py-28 px-6 bg-[#F4F1E9] dark:bg-[#121C16] border-y border-[#DFDBD0]/50 dark:border-[#24352B]">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-20 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">Equipment Lineup</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#11361F] dark:text-[#E2EAE5] mt-4 mb-4">
              Pick the robot that fits.
            </h2>
            <p className="text-[#4A5650] dark:text-[#B2C0B8] text-base leading-relaxed">
              We deploy and support standard floor, delivery, and surveillance equipment optimized for commercial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Cleaning */}
            <div className="bg-[#FCFAF7] dark:bg-[#0B120E] border border-[#DFDBD0] dark:border-[#24352B] p-8 rounded-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden aspect-[4/3] border border-[#DFDBD0]/50 dark:border-[#24352B]/50 bg-white mb-8 relative">
                  <img 
                    src="/media/gausium-retail-cleaning.webp" 
                    alt="Floor scrubber cleaning supermarket aisle"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#11361F] dark:text-white mb-3">Floors done every night.</h3>
                <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-8">
                  Commercial scrubbers and vacuums that run your floor on a schedule — no staff, no callbacks. Autonomous sweepers built for malls, transit hubs, and warehouses.
                </p>
              </div>
              <Link href="/robots/cleaning" className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] hover:text-[#11361F] dark:hover:text-white transition flex items-center gap-1 border-t border-[#DFDBD0]/50 pt-4">
                Explore Cleaning Robots →
              </Link>
            </div>

            {/* Card 2: Delivery */}
            <div className="bg-[#FCFAF7] dark:bg-[#0B120E] border border-[#DFDBD0] dark:border-[#24352B] p-8 rounded-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden aspect-[4/3] border border-[#DFDBD0]/50 dark:border-[#24352B]/50 bg-white mb-8 relative">
                  <img 
                    src="/media/haidilao-bellabot-01.webp" 
                    alt="Haidilao restaurant bussing robot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#11361F] dark:text-white mb-3">Runs that run themselves.</h3>
                <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-8">
                  Delivery robots handle every plate run, medication round, and supply loop — staff stay with guests. Optimized for restaurants, senior living, and hotels.
                </p>
              </div>
              <Link href="/robots/delivery" className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] hover:text-[#11361F] dark:hover:text-white transition flex items-center gap-1 border-t border-[#DFDBD0]/50 pt-4">
                Explore Delivery Robots →
              </Link>
            </div>

            {/* Card 3: Security */}
            <div className="bg-[#FCFAF7] dark:bg-[#0B120E] border border-[#DFDBD0] dark:border-[#24352B] p-8 rounded-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden aspect-[4/3] border border-[#DFDBD0]/50 dark:border-[#24352B]/50 bg-white mb-8 relative">
                  <img 
                    src="https://servicerobotco.com/solutions/security/trailers/trailer-01.jpg" 
                    alt="Autonomous security trailer with camera mast"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#11361F] dark:text-white mb-3">Patrol without the headcount.</h3>
                <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-8">
                  Autonomous patrol units and mobile camera systems that watch your site around the clock. Heavy-duty surveillance trailers built for construction and lots.
                </p>
              </div>
              <Link href="/solutions/security-robots" className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] hover:text-[#11361F] dark:hover:text-white transition flex items-center gap-1 border-t border-[#DFDBD0]/50 pt-4">
                Explore Security Systems →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Work - Typography Waterfall Timeline */}
      <section className="py-28 px-6 bg-[#FCFAF7] dark:bg-[#0B120E]">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-2xl mb-24 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">The Deployment Timeline</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#11361F] dark:text-[#E2EAE5] mt-4 mb-4">
              Results on the floor.
            </h2>
            <p className="text-[#4A5650] dark:text-[#B2C0B8] text-base leading-relaxed">
              We manage the complete implementation lifecycle, delivering operational value in weeks, not months.
            </p>
          </div>

          <div className="flex flex-col gap-24 relative pl-8 border-l border-[#DFDBD0] dark:border-[#24352B]">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#8B6E3C] border-4 border-[#FCFAF7] dark:border-[#0B120E]" />
              <div className="absolute right-0 -top-12 text-8xl font-serif font-bold text-[#11361F]/5 dark:text-white/5 select-none pointer-events-none">01</div>
              <span className="inline-block rounded-full bg-[#11361F]/5 text-[#11361F] dark:text-[#B2C0B8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                01 — Design
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-3">We map your operation.</h3>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-xl leading-relaxed">
                We run a free site assessment first, assessing elevator heights, floor materials, narrow corridors, and layout maps before any hardware is picked.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#8B6E3C] border-4 border-[#FCFAF7] dark:border-[#0B120E]" />
              <div className="absolute right-0 -top-12 text-8xl font-serif font-bold text-[#11361F]/5 dark:text-white/5 select-none pointer-events-none">02</div>
              <span className="inline-block rounded-full bg-[#11361F]/5 text-[#11361F] dark:text-[#B2C0B8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                02 — Integrate
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-3">We wire it to your systems.</h3>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-xl leading-relaxed">
                We sync the equipment dispatch queue directly to the systems your team already runs — WMS, ERP, POS, or local database tools — so it communicates telemetry automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#8B6E3C] border-4 border-[#FCFAF7] dark:border-[#0B120E]" />
              <div className="absolute right-0 -top-12 text-8xl font-serif font-bold text-[#11361F]/5 dark:text-white/5 select-none pointer-events-none">03</div>
              <span className="inline-block rounded-full bg-[#11361F]/5 text-[#11361F] dark:text-[#B2C0B8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                03 — Deploy
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-3">Robots on the floor. In weeks.</h3>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-xl leading-relaxed">
                We handle the delivery, boundaries pathing configuration, and initial layout programming. The robot goes live as a working part of your team.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#8B6E3C] border-4 border-[#FCFAF7] dark:border-[#0B120E]" />
              <div className="absolute right-0 -top-12 text-8xl font-serif font-bold text-[#11361F]/5 dark:text-white/5 select-none pointer-events-none">04</div>
              <span className="inline-block rounded-full bg-[#11361F]/5 text-[#11361F] dark:text-[#B2C0B8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                04 — Finance
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-3">Rent monthly or own it.</h3>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-xl leading-relaxed">
                Leasing, outright equipment purchase, and monthly rentals (RaaS) are all supported. We outline every pricing structure clearly so your finance team picks the best fit.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#8B6E3C] border-4 border-[#FCFAF7] dark:border-[#0B120E]" />
              <div className="absolute right-0 -top-12 text-8xl font-serif font-bold text-[#11361F]/5 dark:text-white/5 select-none pointer-events-none">05</div>
              <span className="inline-block rounded-full bg-[#11361F]/5 text-[#11361F] dark:text-[#B2C0B8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                05 — Train Your Staff
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-3">Your team runs it from day one.</h3>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-xl leading-relaxed">
                We train your existing staff to operate, dispatch, and clean the payload bins. They learn how to work side-by-side with the equipment as utility operators.
              </p>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#8B6E3C] border-4 border-[#FCFAF7] dark:border-[#0B120E]" />
              <div className="absolute right-0 -top-12 text-8xl font-serif font-bold text-[#11361F]/5 dark:text-white/5 select-none pointer-events-none">06</div>
              <span className="inline-block rounded-full bg-[#11361F]/5 text-[#11361F] dark:text-[#B2C0B8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                06 — Service
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-3">Never your problem again.</h3>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-xl leading-relaxed">
                We manage all mechanical service, hardware repairs, and fleet upkeep. If an issue pops up, we handle it — keeping downtime risk fully covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ERP Integration - Technical Detail Card */}
      <section className="py-28 px-6 bg-[#F4F1E9] dark:bg-[#121C16] border-y border-[#DFDBD0]/50 dark:border-[#24352B]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side - content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">Systems Compatibility</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#11361F] dark:text-[#E2EAE5] mt-4 mb-6">
                Everything connects to ERP.
              </h2>
              <p className="text-base text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-6">
                Integration is step two of every deployment. We connect the robot to the systems your team already runs — WMS, ERP, POS, or custom ops tools — so it reads from and writes back to your existing data from day one.
              </p>
              <h3 className="font-serif text-xl font-bold text-[#11361F] dark:text-white mb-2">Robots slot in. No rip-and-replace.</h3>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed">
                Our APIs support immediate synchronizations with SAP, Oracle, and leading logistics networks, translating payload events and status changes to your dashboards automatically.
              </p>
            </div>

            {/* Right side - styled JSON telemetry card */}
            <div className="lg:col-span-5">
              <div className="p-6 bg-[#1E2522] dark:bg-[#071D10] text-[#B2C0B8] border border-[#8B6E3C]/30 shadow-2xl rounded font-mono text-xs text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B6E3C] to-[#A38652]" />
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/15 text-[10px] uppercase tracking-wider text-[#8B6E3C]">
                  <span>Telemetry Payload Schema</span>
                  <span className="text-green-500">● LIVE CONNECTION</span>
                </div>
                <pre className="overflow-x-auto">
{`{
  "integrator": "Service Robot Co.",
  "endpoint": "/api/v1/telemetry",
  "telemetry": {
    "robotId": "GAUSIUM-S75-04",
    "status": "RUNNING",
    "battery": 82.5,
    "currentTask": "MAIN_CORRIDOR_SCRUB",
    "syncState": "SYNCED_TO_WMS",
    "emergencyStatus": "CLEAR"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industries We Serve */}
      <section className="py-28 px-6 bg-[#FCFAF7] dark:bg-[#0B120E]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">Target Deployments</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#11361F] dark:text-[#E2EAE5] mt-4 mb-4">
              Wherever you run a floor.
            </h2>
            <p className="text-[#4A5650] dark:text-[#B2C0B8]">
              We integrate and maintain robotics fleets across a wide range of commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Warehouses and logistics",
              "Manufacturing",
              "Retail and shopping malls",
              "Airports and transit",
              "Healthcare and senior living",
              "Hotels, casinos, and resorts",
              "Offices and corporate campuses",
              "Education",
              "Grocery and food service",
              "Parking structures and large facilities"
            ].map((industry, index) => (
              <div key={index} className="flex items-center gap-4 bg-[#F4F1E9]/35 dark:bg-[#121C16]/30 border border-[#DFDBD0] dark:border-[#24352B]/40 rounded-sm p-5 hover:border-[#8B6E3C] transition duration-300">
                <div className="w-2 h-2 rounded-full bg-[#8B6E3C]" />
                <span className="text-sm font-semibold text-[#19201C] dark:text-[#E2EAE5]">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Emergency Support Details */}
      <section className="py-24 px-6 bg-[#11361F] text-white border-y border-[#8B6E3C]/20 relative">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-4 inline-block">Support Networks</span>
          <h2 className="text-4xl font-serif font-bold text-white mb-6">24/7 service for our machines.</h2>
          <p className="text-[#B2C0B8] mb-16 max-w-2xl mx-auto leading-relaxed">
            Service Robot Co. manages service and maintenance. When an issue occurs: 10-minute remote phone triage during business hours, 24-hour nationwide on-site dispatch, and emergency response hotlines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 rounded-sm p-8 bg-[#071D10]/35 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8B6E3C]" />
              <h4 className="font-serif text-xl font-bold text-white mb-3">10-Minute</h4>
              <p className="text-xs text-[#B2C0B8] leading-relaxed">Remote phone triage with regional operations dispatchers.</p>
            </div>
            <div className="border border-white/10 rounded-sm p-8 bg-[#071D10]/35 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8B6E3C]" />
              <h4 className="font-serif text-xl font-bold text-white mb-3">24-Hour</h4>
              <p className="text-xs text-[#B2C0B8] leading-relaxed">Nationwide on-site engineer dispatch for quick hardware triage.</p>
            </div>
            <div className="border border-white/10 rounded-sm p-8 bg-[#071D10]/35 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8B6E3C]" />
              <h4 className="font-serif text-xl font-bold text-white mb-3">Emergency</h4>
              <p className="text-xs text-[#B2C0B8] leading-relaxed">24/7 dedicated hotlines for active healthcare and warehouse sites.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="font-serif text-xl font-bold text-[#8B6E3C] mb-2">Service nationwide.</h3>
            <p className="text-xs text-[#B2C0B8]">We run operations depots and support offices in all 50 states.</p>
          </div>
        </div>
      </section>

      {/* 9. OEM Manufacturers Lineup */}
      <section className="py-24 px-6 bg-[#FCFAF7] dark:bg-[#0B120E] text-center">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-4">
            We run the best commercial robots — and service them ourselves.
          </h2>
          <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-2xl mx-auto mb-12 leading-relaxed">
            We integrate and service equipment across leading OEMs including Pudu Robotics, Gausium, Standard Bots, Standard Robots, and Universal Robots.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-75 transition duration-300">
            <span className="font-serif text-lg font-bold text-[#19201C] dark:text-[#F7FAF8]">PUDU ROBOTICS</span>
            <span className="font-serif text-lg font-bold text-[#19201C] dark:text-[#F7FAF8]">GAUSIUM</span>
            <span className="font-sans text-base font-bold tracking-wider text-[#19201C] dark:text-[#F7FAF8]">STANDARD BOTS</span>
            <span className="font-sans text-base font-bold tracking-wider text-[#19201C] dark:text-[#F7FAF8]">UNIVERSAL ROBOTS</span>
          </div>
          <p className="text-[10px] text-[#4A5650] dark:text-[#B2C0B8]/60 mt-12 max-w-xl mx-auto">
            Manufacturer names and trademarks are the property of their respective owners. Listing reflects the equipment we deploy and service and does not imply partnership or endorsement.
          </p>
        </div>
      </section>

      {/* 10. Native Details Summary FAQs */}
      <section className="py-28 px-6 bg-[#F4F1E9] dark:bg-[#121C16] border-y border-[#DFDBD0]/50 dark:border-[#24352B]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">Common Enquiries</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#11361F] dark:text-[#E2EAE5] mt-4 mb-4">
              Quick answers.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                What does a robotics integrator do?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                A robotics integrator handles everything the robot manufacturer does not: site assessment, software integration, deployment, staff training, and ongoing service. You get one partner responsible for a working robot in your facility — not just a machine on a pallet.
              </p>
            </details>

            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                How much does a cleaning or delivery robot cost?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                Purchase, lease, and month-to-month rental options are all available. Service Robot Co. surfaces every structure upfront so your finance team picks what fits before any hardware decision. We arrange financing; we are not a bank or lender.
              </p>
            </details>

            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                How long does deployment take?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                Weeks, not months. We run a free site assessment first, then phase the rollout around your schedule. The robot goes live as a working part of your operation — not a side project with a long runway.
              </p>
            </details>

            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                Do robots work with our existing WMS or ERP?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                Integration is step two of every deployment. We connect the robot to the systems your team already runs — WMS, ERP, POS, or custom ops tools — so it reads from and writes back to your existing data from day one.
              </p>
            </details>

            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                What if the robot breaks down?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                Regional service engineers and depots in all 50 states. When something breaks: 10-minute remote triage during business hours, 24-hour nationwide on-site dispatch, and 24/7 emergency response. 80% of issues are resolved in 10 minutes by phone — no truck needed.
              </p>
            </details>

            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                Do we need to hire a robot technician?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                No. Service Robot Co. handles all service and maintenance. Your staff learn to operate the robot during deployment — that is different from maintaining it. If something breaks, you call us.
              </p>
            </details>

            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                What robots do you carry?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                Cleaning robots, delivery robots, autonomous mobile robots (AMRs), security robots, mobile surveillance trailers, industrial arms, cobots, and humanoids. We work across warehouses, hotels, hospitals, restaurants, retail, senior living, schools, casinos, airports, and manufacturing.
              </p>
            </details>

            <details className="group border border-[#DFDBD0] dark:border-[#24352B] rounded-sm p-5 bg-[#FCFAF7] dark:bg-[#0B120E] transition-all duration-300">
              <summary className="font-serif font-semibold text-lg text-[#11361F] dark:text-white cursor-pointer list-none flex justify-between items-center select-none">
                Can we rent instead of buy?
                <span className="text-[#8B6E3C] transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed border-t border-[#DFDBD0]/30 pt-4">
                Yes. Month-to-month rental with no long-term commitment is available alongside purchase and lease. Robotics as a Service (RaaS) means one monthly fee covers the hardware, deployment, integration, training, and ongoing service — you pay for uptime, not a capital asset.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 11. Embedded Operations Business Card */}
      <section className="py-28 px-6 bg-[#FCFAF7] dark:bg-[#0B120E] text-center no-print">
        <div className="container mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">Credentials & Triage</span>
          <h2 className="font-serif text-4xl font-bold text-[#11361F] dark:text-white mt-4 mb-2">
            Operations Dispatch Card
          </h2>
          <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-lg mx-auto mb-12">
            Hover to tilt, click to flip the card, or scan the dispatcher QR code. Use the printable digital card for physical dispatch folders.
          </p>
          <div className="mb-12">
            <BusinessCard />
          </div>
          <Link href="/business-card" className="bg-[#11361F] hover:bg-[#8B6E3C] text-white px-8 py-3.5 rounded font-semibold inline-block transition shadow-md">
            View Printable Digital Card →
          </Link>
        </div>
      </section>

      {/* 12. Book a Free Assessment Contact Form */}
      <section className="py-28 px-6 bg-[#F4F1E9] dark:bg-[#121C16] border-t border-[#DFDBD0]/50 dark:border-[#24352B]" id="contact">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C]">Request Facility Mapping</span>
            <h2 className="text-4xl font-serif font-bold text-[#11361F] dark:text-white mt-4 mb-3">
              Book a free demo.
            </h2>
            <h3 className="text-base text-[#4A5650] dark:text-[#B2C0B8]">
              Find the robot that fits your site.
            </h3>
            <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] mt-2">
              We walk your floor. You leave knowing what fits — at no cost.
            </p>
          </div>

          <form className="flex flex-col gap-6 bg-[#FCFAF7] dark:bg-[#0B120E] border border-[#DFDBD0] dark:border-[#24352B] p-8 rounded shadow-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Full Name</label>
              <input type="text" id="name" required className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B]" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Company Name</label>
              <input type="text" id="company" required className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B]" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Work Email</label>
              <input type="email" id="email" required className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B]" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Robot Category Needed</label>
              <select id="category" className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B]">
                <option>Commercial Cleaning Robots</option>
                <option>Delivery & Bussing Robots</option>
                <option>Autonomous Mobile Robots (AMRs)</option>
                <option>CNC & Industrial Arms</option>
                <option>Security & Surveillance</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Facility Notes</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B]"></textarea>
            </div>

            <button type="submit" className="bg-[#11361F] text-white font-semibold py-3.5 rounded hover:bg-[#8B6E3C] transition duration-300 shadow-md">
              Submit Assessment Request
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
