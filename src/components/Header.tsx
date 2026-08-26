'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#000000]/90 shadow-md border-white/10 backdrop-blur-md py-3' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Brand Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/logos/wordmark-white-transparent.png" 
              alt="Service Robot Co.™" 
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center Side: Core Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-initial">
          
          {/* Robots Dropdown (Left aligned) */}
          <div className="relative group">
            <button className="nav-link-underline flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-white/80 hover:text-white">
              Robots
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 z-50 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="grid grid-cols-3 gap-8 rounded-none border border-white/10 bg-black p-6 shadow-xl min-w-[650px]">
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">By Type</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/robots/cleaning" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Cleaning robots</Link></li>
                    <li><Link href="/robots/delivery" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Delivery & bussing</Link></li>
                    <li><Link href="/robots/amr" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Autonomous mobile robots</Link></li>
                    <li><Link href="/robots/cobot" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Cobots</Link></li>
                    <li><Link href="/robots/humanoid" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Humanoid robots</Link></li>
                    <li className="mt-1 pt-1.5 border-t border-white/5">
                      <Link href="/robots" className="block px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#B4FF00] hover:text-white transition">All robots →</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Cleaning Models</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/solutions/cleaning-robots/pudu-cc1" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Pudu CC1</Link></li>
                    <li><Link href="/solutions/cleaning-robots/gausium-scrubber-75" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Gausium Scrubber 75</Link></li>
                    <li><Link href="/solutions/cleaning-robots/gausium-scrubber-50" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Gausium Scrubber 50</Link></li>
                    <li><Link href="/solutions/cleaning-robots/gausium-vacuum-40" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Gausium Vacuum 40</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Security</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/solutions/security-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Security & surveillance</Link></li>
                    <li><Link href="/security-trailers" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Security trailers</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown (Left aligned) */}
          <div className="relative group">
            <button className="nav-link-underline flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-white/80 hover:text-white">
              Solutions
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 z-50 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="grid grid-cols-3 gap-8 rounded-none border border-white/10 bg-black p-6 shadow-xl min-w-[700px]">
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Buyer Guides</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/solutions/cleaning-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Cleaning robots</Link></li>
                    <li><Link href="/solutions/delivery-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Delivery robots</Link></li>
                    <li><Link href="/solutions/material-handling-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Material handling</Link></li>
                    <li><Link href="/solutions/warehouse-automation-integrator" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Warehouse automation</Link></li>
                    <li><Link href="/solutions/amr-vs-agv" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">AMR vs AGV</Link></li>
                    <li><Link href="/solutions/trailer-loading-unloading-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Trailer loading / unloading</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Solutions</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/solutions/security-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Security robots</Link></li>
                    <li><Link href="/solutions/industrial-arms-cobots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Industrial arms & cobots</Link></li>
                    <li><Link href="/solutions/humanoid-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Humanoid robots</Link></li>
                    <li><Link href="/solutions/erp-integration" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">ERP integration</Link></li>
                    <li><Link href="/solutions/financing" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Financing & RaaS</Link></li>
                    <li><Link href="/solutions/cleaning-robots-for-bscs" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Cleaning robots for BSCs</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Compare</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/compare" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition font-bold text-[#B4FF00]">All comparisons →</Link></li>
                    <li><Link href="/compare/commercial-cleaning-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Cleaning robots</Link></li>
                    <li><Link href="/compare/delivery-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Delivery robots</Link></li>
                    <li><Link href="/compare/autonomous-forklifts-tuggers" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Forklifts vs tuggers</Link></li>
                    <li><Link href="/compare/raas-vs-buying-robots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">RaaS vs buying</Link></li>
                    <li><Link href="/compare/security-robots-vs-guards" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Robots vs guards</Link></li>
                    <li><Link href="/compare/cobots-vs-industrial-arms" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Cobots vs arms</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown (Centered) */}
          <div className="relative group">
            <button className="nav-link-underline flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-white/80 hover:text-white">
              Industries
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="grid grid-cols-3 gap-8 rounded-none border border-white/10 bg-black p-6 shadow-xl min-w-[720px]">
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Buyer Guides</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/industries/warehouse" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Warehouses</Link></li>
                    <li><Link href="/industries/restaurant" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Restaurants</Link></li>
                    <li><Link href="/industries/hotel" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Hotels</Link></li>
                    <li><Link href="/industries/hospital" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Hospitals</Link></li>
                    <li><Link href="/industries/retail" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Retail</Link></li>
                    <li><Link href="/industries/senior-living" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Senior living</Link></li>
                    <li><Link href="/industries/manufacturing" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Manufacturing</Link></li>
                    <li><Link href="/industries/airport" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Airports & transit</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">More Industries</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/industries/healthcare" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Healthcare</Link></li>
                    <li><Link href="/industries/hospitality" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Hospitality</Link></li>
                    <li><Link href="/industries/facilities" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Facilities</Link></li>
                    <li><Link href="/industries/malls" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Malls & shopping centers</Link></li>
                    <li><Link href="/industries/schools-higher-ed" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Schools & higher ed</Link></li>
                    <li><Link href="/industries/event-venues" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Event venues & stadiums</Link></li>
                    <li><Link href="/industries/casino" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Casinos & gaming</Link></li>
                    <li className="mt-1 pt-1.5 border-t border-white/5">
                      <Link href="/industries" className="block px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#B4FF00] hover:text-white transition">All industries →</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Security & Sites</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/industries/law-enforcement" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Law enforcement</Link></li>
                    <li><Link href="/industries/property" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Property management</Link></li>
                    <li><Link href="/industries/construction" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Builders & GCs</Link></li>
                    <li><Link href="/industries/parking-lots" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Parking & vehicle lots</Link></li>
                    <li><Link href="/warehouses" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Warehouse r</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Locations Dropdown (Right aligned) */}
          <div className="relative group">
            <button className="nav-link-underline flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-white/80 hover:text-white">
              Locations
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full right-0 z-50 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="grid grid-cols-3 gap-8 rounded-none border border-white/10 bg-black p-6 shadow-xl min-w-[650px]">
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">California</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/locations/los-angeles-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Los Angeles</Link></li>
                    <li><Link href="/locations/san-diego-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">San Diego</Link></li>
                    <li><Link href="/locations/san-francisco-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">San Francisco</Link></li>
                    <li><Link href="/locations/san-jose-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">San Jose</Link></li>
                    <li><Link href="/locations/sacramento-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Sacramento</Link></li>
                    <li><Link href="/locations/oakland-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Oakland</Link></li>
                    <li><Link href="/locations/fresno-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Fresno</Link></li>
                    <li><Link href="/locations/riverside-ca" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Riverside</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Southwest & Mountain</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/locations/houston-tx" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Houston</Link></li>
                    <li><Link href="/locations/dallas-tx" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Dallas</Link></li>
                    <li><Link href="/locations/austin-tx" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Austin</Link></li>
                    <li><Link href="/locations/san-antonio-tx" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">San Antonio</Link></li>
                    <li><Link href="/locations/phoenix-az" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Phoenix</Link></li>
                    <li><Link href="/locations/las-vegas-nv" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Las Vegas</Link></li>
                    <li><Link href="/locations/denver-co" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Denver</Link></li>
                    <li><Link href="/locations/salt-lake-city-ut" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Salt Lake City</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Nationwide</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/locations/new-york-ny" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">New York</Link></li>
                    <li><Link href="/locations/chicago-il" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Chicago</Link></li>
                    <li><Link href="/locations/seattle-wa" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Seattle</Link></li>
                    <li><Link href="/locations/atlanta-ga" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Atlanta</Link></li>
                    <li><Link href="/locations/miami-fl" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Miami</Link></li>
                    <li><Link href="/locations/boston-ma" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Boston</Link></li>
                    <li className="mt-1 pt-1.5 border-t border-white/5">
                      <Link href="/locations" className="block px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#B4FF00] hover:text-white transition">All locations →</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Company Dropdown (Right aligned) */}
          <div className="relative group">
            <button className="nav-link-underline flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-white/80 hover:text-white">
              Company
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full right-0 z-50 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="grid grid-cols-2 gap-8 rounded-none border border-white/10 bg-black p-6 shadow-xl min-w-[420px]">
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Company</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/about" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">How it works</Link></li>
                    <li><Link href="/service" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Service & support</Link></li>
                    <li><Link href="/pricing" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Pricing</Link></li>
                    <li><Link href="/pricing/robot-pricing-guide" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Pricing guide</Link></li>
                    <li><Link href="/solutions/financing" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Financing</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#B4FF00]">Learn</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
                    <li><Link href="/blog" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Blog</Link></li>
                    <li><Link href="/case-studies" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Case studies</Link></li>
                    <li><Link href="/resources" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Resources</Link></li>
                    <li><Link href="/compare" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition">Compare robots</Link></li>
                    <li><Link href="/contact" className="block px-2 py-1.5 rounded hover:bg-white/5 hover:text-white transition font-bold text-[#B4FF00]">Contact →</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Right Side: Actions */}
        <div className="hidden lg:flex items-center justify-end gap-4 flex-1">
          {/* Get a Quote Button */}
          <Link href="#contact" className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none bg-[#B4FF00] text-black border border-[#B4FF00] hover:bg-transparent hover:text-[#B4FF00] transition-all duration-300">
            Get a quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 w-full py-4 px-6 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg">
          <ul className="flex flex-col gap-4 text-base font-semibold text-white">
            <li><Link href="/robots" onClick={() => setMobileMenuOpen(false)}>Robots</Link></li>
            <ul className="pl-4 flex flex-col gap-2 text-sm text-neutral-400 font-normal">
              <li><Link href="/robots/cleaning" onClick={() => setMobileMenuOpen(false)}>Cleaning Robots</Link></li>
              <li><Link href="/robots/delivery" onClick={() => setMobileMenuOpen(false)}>Delivery & Bussing</Link></li>
              <li><Link href="/robots/amr" onClick={() => setMobileMenuOpen(false)}>Autonomous Mobile Robots</Link></li>
            </ul>
            <li><Link href="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link></li>
            <li><Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link></li>
            <li><Link href="/locations" onClick={() => setMobileMenuOpen(false)}>Locations</Link></li>
            <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>Company</Link></li>
            <li><Link href="/business-card" onClick={() => setMobileMenuOpen(false)} className="text-[#B4FF00]">Digital Business Card</Link></li>
            <li className="mt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#B4FF00] text-black font-bold py-2.5 rounded-none border border-[#B4FF00] hover:bg-transparent hover:text-[#B4FF00] transition">
                Get a quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
