import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-neutral-300 border-t border-white/10 py-16 px-6 relative overflow-hidden z-10 no-print">
      {/* Subtle moving grid background */}
      <div className="moving-grid opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Top Area: Brand and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand Info (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 text-left">
            <Link href="/" className="inline-block">
              <img 
                src="/logos/wordmark-white-transparent.png" 
                alt="Service Robot Co." 
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-450 leading-relaxed">
              Your automation partner.<br />
              Commercial robotics systems engineered, financed, and supported nationwide.
            </p>
            
            <div className="flex flex-col gap-3 text-xs font-mono uppercase tracking-wide">
              <span className="font-bold text-[#B4FF00] footer-heading text-xs md:text-sm">Contact</span>
              <a href="tel:16503628736" className="flex items-center gap-2 text-[#B4FF00] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (650) 362-8736</span>
              </a>
              <a href="mailto:team@servicerobotco.com" className="flex items-center gap-2 text-[#B4FF00] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="lowercase">team@servicerobotco.com</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 text-neutral-400 mt-2">
              <a href="https://www.linkedin.com/company/servicerobotco" target="_blank" rel="noopener noreferrer" className="hover:text-[#B4FF00] transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/servicerobotco" target="_blank" rel="noopener noreferrer" className="hover:text-[#B4FF00] transition-colors" aria-label="X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid (col-span-9) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-left">
            
            {/* Column 1: Robots */}
            <div>
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#B4FF00] footer-heading mb-4">Robots</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><Link href="/robots/cleaning" className="hover:text-[#B4FF00] hover:underline transition-colors">Cleaning robots</Link></li>
                <li><Link href="/robots/delivery" className="hover:text-[#B4FF00] hover:underline transition-colors">Delivery & bussing</Link></li>
                <li><Link href="/robots/amr" className="hover:text-[#B4FF00] hover:underline transition-colors">Mobile robots (AMR)</Link></li>
                <li><Link href="/robots/cobot" className="hover:text-[#B4FF00] hover:underline transition-colors">Cobots</Link></li>
                <li><Link href="/robots/humanoid" className="hover:text-[#B4FF00] hover:underline transition-colors">Humanoid robots</Link></li>
                <li><Link href="/solutions/security-robots" className="hover:text-[#B4FF00] hover:underline transition-colors">Security & surveillance</Link></li>
                <li><Link href="/security-trailers" className="hover:text-[#B4FF00] hover:underline transition-colors">Security trailers</Link></li>
                <li><Link href="/robots" className="hover:text-[#B4FF00] hover:underline font-bold text-white transition-colors">All robots</Link></li>
              </ul>
            </div>

            {/* Column 2: Buyer guides */}
            <div>
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#B4FF00] footer-heading mb-4">Buyer Guides</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><Link href="/solutions/cleaning-robots" className="hover:text-[#B4FF00] hover:underline transition-colors">Cleaning robots</Link></li>
                <li><Link href="/solutions/delivery-robots" className="hover:text-[#B4FF00] hover:underline transition-colors">Delivery robots</Link></li>
                <li><Link href="/solutions/material-handling-robots" className="hover:text-[#B4FF00] hover:underline transition-colors">Material handling</Link></li>
                <li><Link href="/solutions/warehouse-automation-integrator" className="hover:text-[#B4FF00] hover:underline transition-colors">Warehouse automation</Link></li>
                <li><Link href="/solutions/amr-vs-agv" className="hover:text-[#B4FF00] hover:underline transition-colors">AMR vs AGV</Link></li>
                <li><Link href="/solutions/industrial-arms-cobots" className="hover:text-[#B4FF00] hover:underline transition-colors">Industrial arms & cobots</Link></li>
                <li><Link href="/solutions/humanoid-robots" className="hover:text-[#B4FF00] hover:underline transition-colors">Humanoid robots</Link></li>
                <li><Link href="/compare" className="hover:text-[#B4FF00] hover:underline font-bold text-white transition-colors">Compare robots</Link></li>
              </ul>
            </div>

            {/* Column 3: Industries */}
            <div>
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#B4FF00] footer-heading mb-4">Industries</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><Link href="/industries/warehouse" className="hover:text-[#B4FF00] hover:underline transition-colors">Warehouses</Link></li>
                <li><Link href="/industries/restaurant" className="hover:text-[#B4FF00] hover:underline transition-colors">Restaurants</Link></li>
                <li><Link href="/industries/hotel" className="hover:text-[#B4FF00] hover:underline transition-colors">Hotels</Link></li>
                <li><Link href="/industries/hospital" className="hover:text-[#B4FF00] hover:underline transition-colors">Hospitals</Link></li>
                <li><Link href="/industries/retail" className="hover:text-[#B4FF00] hover:underline transition-colors">Retail</Link></li>
                <li><Link href="/industries/senior-living" className="hover:text-[#B4FF00] hover:underline transition-colors">Senior living</Link></li>
                <li><Link href="/industries/manufacturing" className="hover:text-[#B4FF00] hover:underline transition-colors">Manufacturing</Link></li>
                <li><Link href="/industries" className="hover:text-[#B4FF00] hover:underline font-bold text-white transition-colors">All industries</Link></li>
              </ul>
            </div>

            {/* Column 4: Locations */}
            <div>
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#B4FF00] footer-heading mb-4">Locations</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><Link href="/locations/los-angeles-ca" className="hover:text-[#B4FF00] hover:underline transition-colors">Los Angeles</Link></li>
                <li><Link href="/locations/san-diego-ca" className="hover:text-[#B4FF00] hover:underline transition-colors">San Diego</Link></li>
                <li><Link href="/locations/san-francisco-ca" className="hover:text-[#B4FF00] hover:underline transition-colors">San Francisco</Link></li>
                <li><Link href="/locations/houston-tx" className="hover:text-[#B4FF00] hover:underline transition-colors">Houston</Link></li>
                <li><Link href="/locations/dallas-tx" className="hover:text-[#B4FF00] hover:underline transition-colors">Dallas</Link></li>
                <li><Link href="/locations/phoenix-az" className="hover:text-[#B4FF00] hover:underline transition-colors">Phoenix</Link></li>
                <li><Link href="/locations/new-york-ny" className="hover:text-[#B4FF00] hover:underline transition-colors">New York</Link></li>
                <li><Link href="/locations" className="hover:text-[#B4FF00] hover:underline font-bold text-white transition-colors">All locations</Link></li>
              </ul>
            </div>

            {/* Column 5: Why SRC */}
            <div>
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#B4FF00] footer-heading mb-4">Why SRC</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><Link href="/about" className="hover:text-[#B4FF00] hover:underline transition-colors">How it works</Link></li>
                <li><Link href="/service" className="hover:text-[#B4FF00] hover:underline transition-colors">Service & support</Link></li>
                <li><Link href="/solutions/financing" className="hover:text-[#B4FF00] hover:underline transition-colors">Financing & RaaS</Link></li>
                <li><Link href="/solutions/erp-integration" className="hover:text-[#B4FF00] hover:underline transition-colors">ERP integration</Link></li>
                <li><Link href="/pricing" className="hover:text-[#B4FF00] hover:underline transition-colors">Pricing</Link></li>
                <li><Link href="/pricing/robot-pricing-guide" className="hover:text-[#B4FF00] hover:underline transition-colors">Pricing guide</Link></li>
              </ul>
            </div>

            {/* Column 6: Company */}
            <div>
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#B4FF00] footer-heading mb-4">Company</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><Link href="/about" className="hover:text-[#B4FF00] hover:underline transition-colors">About us</Link></li>
                <li><Link href="/blog" className="hover:text-[#B4FF00] hover:underline transition-colors">Blog</Link></li>
                <li><Link href="/case-studies" className="hover:text-[#B4FF00] hover:underline transition-colors">Case studies</Link></li>
                <li><Link href="/resources" className="hover:text-[#B4FF00] hover:underline transition-colors">Resources</Link></li>
                <li><Link href="/contact" className="hover:text-[#B4FF00] hover:underline transition-colors">Contact</Link></li>
                <li><Link href="/contact?topic=demo" className="hover:text-[#B4FF00] hover:underline font-bold text-white transition-colors">Book a demo</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Middle Area: Operations Depots */}
        <div className="border-b border-white/10 py-16 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#B4FF00] footer-heading">// REGIONAL OPERATIONS DEPOTS</h4>
            <span className="font-mono text-xs md:text-sm text-[#B4FF00] footer-heading uppercase tracking-widest font-bold mt-2 sm:mt-0">// SERVICE IN ALL 50 STATES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            
            <div className="bg-black/40 border border-white/5 p-3 hover:border-[#B4FF00]/30 transition duration-300 flex flex-col justify-between text-left">
              <div>
                <span className="font-bold text-white font-sans uppercase tracking-tight text-xs md:text-sm block mb-1">Santa Monica (HQ)</span>
                <span className="text-[10px] text-neutral-400 leading-normal block">1541 Ocean Ave, Suite 28<br />Santa Monica, CA 90401</span>
              </div>
              <a href="tel:14247322726" className="font-mono text-[9px] mt-2.5 hover:text-white transition-colors flex items-center gap-1.5 text-[#B4FF00] font-bold uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (424) 732-2726</span>
              </a>
            </div>

            <div className="bg-black/40 border border-white/5 p-3 hover:border-[#B4FF00]/30 transition duration-300 flex flex-col justify-between text-left">
              <div>
                <span className="font-bold text-white font-sans uppercase tracking-tight text-xs md:text-sm block mb-1">Los Angeles</span>
                <span className="text-[10px] text-neutral-400 leading-normal block">14 Breeze Ave<br />Venice, CA 90291</span>
              </div>
              <a href="tel:12133203460" className="font-mono text-[9px] mt-2.5 hover:text-white transition-colors flex items-center gap-1.5 text-[#B4FF00] font-bold uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (213) 320-3460</span>
              </a>
            </div>

            <div className="bg-black/40 border border-white/5 p-3 hover:border-[#B4FF00]/30 transition duration-300 flex flex-col justify-between text-left">
              <div>
                <span className="font-bold text-white font-sans uppercase tracking-tight text-xs md:text-sm block mb-1">San Diego</span>
                <span className="text-[10px] text-neutral-400 leading-normal block">8775 Costa Verde Blvd, Unit 82<br />San Diego, CA 92122</span>
              </div>
              <a href="tel:16193762449" className="font-mono text-[9px] mt-2.5 hover:text-white transition-colors flex items-center gap-1.5 text-[#B4FF00] font-bold uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (619) 376-2449</span>
              </a>
            </div>

            <div className="bg-black/40 border border-white/5 p-3 hover:border-[#B4FF00]/30 transition duration-300 flex flex-col justify-between text-left">
              <div>
                <span className="font-bold text-white font-sans uppercase tracking-tight text-xs md:text-sm block mb-1">Milwaukee</span>
                <span className="text-[10px] text-neutral-400 leading-normal block">2929 N Mayfair Rd, Unit 519<br />Milwaukee, WI 53222</span>
              </div>
              <a href="tel:14144048189" className="font-mono text-[9px] mt-2.5 hover:text-white transition-colors flex items-center gap-1.5 text-[#B4FF00] font-bold uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (414) 404-8189</span>
              </a>
            </div>

            <div className="bg-black/40 border border-white/5 p-3 hover:border-[#B4FF00]/30 transition duration-300 flex flex-col justify-between text-left">
              <div>
                <span className="font-bold text-white font-sans uppercase tracking-tight text-xs md:text-sm block mb-1">Chicago</span>
                <span className="text-[10px] text-neutral-400 leading-normal block">801 S Financial Pl, Apt 2006<br />Chicago, IL 60605</span>
              </div>
              <a href="tel:18722596034" className="font-mono text-[9px] mt-2.5 hover:text-white transition-colors flex items-center gap-1.5 text-[#B4FF00] font-bold uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (872) 259-6034</span>
              </a>
            </div>

            <div className="bg-black/40 border border-white/5 p-3 hover:border-[#B4FF00]/30 transition duration-300 flex flex-col justify-between text-left">
              <div>
                <span className="font-bold text-white font-sans uppercase tracking-tight text-xs md:text-sm block mb-1">San Francisco</span>
                <span className="text-[10px] text-neutral-400 leading-normal block">38 Bluxome St, Suite 4<br />San Francisco, CA 94107</span>
              </div>
              <a href="tel:14159149665" className="font-mono text-[9px] mt-2.5 hover:text-white transition-colors flex items-center gap-1.5 text-[#B4FF00] font-bold uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (415) 914-9665</span>
              </a>
            </div>

            <div className="bg-black/40 border border-white/5 p-3 hover:border-[#B4FF00]/30 transition duration-300 flex flex-col justify-between text-left">
              <div>
                <span className="font-bold text-white font-sans uppercase tracking-tight text-xs md:text-sm block mb-1">Battle Creek</span>
                <span className="text-[10px] text-neutral-400 leading-normal block">157 Barrington Cir<br />Battle Creek, MI 49015</span>
              </div>
              <a href="tel:12695750595" className="font-mono text-[9px] mt-2.5 hover:text-white transition-colors flex items-center gap-1.5 text-[#B4FF00] font-bold uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.272.932-2.307 2.198-2.307h2.728c.64 0 1.22.362 1.47 1.003l1.208 3.082a1.5 1.5 0 0 1-.365 1.637l-1.91 1.91a10.279 10.279 0 0 0 5.185 5.185l1.91-1.91a1.5 1.5 0 0 1 1.637-.365l3.082 1.208c.64.25 1.003.83 1.003 1.47v2.728c0 1.266-1.035 2.198-2.307 2.198H18c-8.837 0-16-7.163-16-16v-.378Z" />
                </svg>
                <span>+1 (269) 575-0595</span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Area: Copyright and Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4 font-mono uppercase tracking-wider">
          <span>© 2026 XEngineering LLC dba Service Robot Co. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#B4FF00] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#B4FF00] transition-colors">Terms</Link>
            <Link href="/image-credits" className="hover:text-[#B4FF00] transition-colors">Image credits</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
