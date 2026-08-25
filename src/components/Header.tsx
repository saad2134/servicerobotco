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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FCFAF7]/95 dark:bg-[#0B120E]/95 shadow-md border-b border-[#DFDBD0]/50 backdrop-blur-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-[#11361F] dark:text-[#F7FAF8]' : 'text-white'
          }`}>
            Service Robot Co<span className="text-[#8B6E3C]">.</span>
            <span className="text-[10px] align-super font-sans font-normal ml-0.5 opacity-80">TM</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Robots Category Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
              scrolled ? 'text-[#4A5650] hover:text-[#11361F] dark:text-[#B2C0B8] dark:hover:text-[#F7FAF8]' : 'text-white/90 hover:text-white'
            }`}>
              Robots
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 z-50 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex gap-8 rounded-lg border border-[#DFDBD0] dark:border-[#24352B] bg-[#FCFAF7] dark:bg-[#121C16] p-6 shadow-xl min-w-[500px]">
                <div className="flex-1">
                  <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-widest text-[#8B6E3C]">By Category</p>
                  <ul className="flex flex-col gap-1 text-sm text-[#4A5650] dark:text-[#B2C0B8]">
                    <li><Link href="/robots/cleaning" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Cleaning Robots</Link></li>
                    <li><Link href="/robots/delivery" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Delivery & Bussing</Link></li>
                    <li><Link href="/robots/amr" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Autonomous Mobile Robots</Link></li>
                    <li><Link href="/robots/cobot" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Cobots & Arms</Link></li>
                    <li><Link href="/robots/humanoid" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Humanoids</Link></li>
                  </ul>
                </div>
                <div className="flex-1 border-l border-[#DFDBD0]/50 dark:border-[#24352B] pl-8">
                  <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-widest text-[#8B6E3C]">Key Models</p>
                  <ul className="flex flex-col gap-1 text-sm text-[#4A5650] dark:text-[#B2C0B8]">
                    <li><Link href="/solutions/cleaning-robots/pudu-cc1" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Pudu CC1</Link></li>
                    <li><Link href="/solutions/cleaning-robots/gausium-scrubber-75" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Gausium Scrubber 75</Link></li>
                    <li><Link href="/solutions/cleaning-robots/gausium-scrubber-50" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Gausium Scrubber 50</Link></li>
                    <li><Link href="/solutions/security-robots" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Security Robots</Link></li>
                    <li><Link href="/security-trailers" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Security Trailers</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
              scrolled ? 'text-[#4A5650] hover:text-[#11361F] dark:text-[#B2C0B8] dark:hover:text-[#F7FAF8]' : 'text-white/90 hover:text-white'
            }`}>
              Solutions
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 z-50 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex gap-8 rounded-lg border border-[#DFDBD0] dark:border-[#24352B] bg-[#FCFAF7] dark:bg-[#121C16] p-6 shadow-xl min-w-[500px]">
                <div className="flex-1">
                  <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-widest text-[#8B6E3C]">Guides</p>
                  <ul className="flex flex-col gap-1 text-sm text-[#4A5650] dark:text-[#B2C0B8]">
                    <li><Link href="/solutions/cleaning-robots" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Cleaning Robots Guide</Link></li>
                    <li><Link href="/solutions/delivery-robots" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Delivery Robots Guide</Link></li>
                    <li><Link href="/solutions/material-handling-robots" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Material Handling</Link></li>
                    <li><Link href="/solutions/warehouse-automation-integrator" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Warehouse Integration</Link></li>
                    <li><Link href="/solutions/financing" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Financing & RaaS</Link></li>
                  </ul>
                </div>
                <div className="flex-1 border-l border-[#DFDBD0]/50 dark:border-[#24352B] pl-8">
                  <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-widest text-[#8B6E3C]">Comparisons</p>
                  <ul className="flex flex-col gap-1 text-sm text-[#4A5650] dark:text-[#B2C0B8]">
                    <li><Link href="/compare" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Compare All Robots</Link></li>
                    <li><Link href="/compare/commercial-cleaning-robots" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Cleaning Robots</Link></li>
                    <li><Link href="/compare/delivery-robots" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">Delivery Robots</Link></li>
                    <li><Link href="/compare/raas-vs-buying-robots" className="block px-2 py-1.5 rounded hover:bg-[#F4F1E9] dark:hover:bg-[#1C2C22] hover:text-[#11361F] transition">RaaS vs Buying</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Industries */}
          <Link href="/industries" className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
            scrolled ? 'text-[#4A5650] hover:text-[#11361F] dark:text-[#B2C0B8] dark:hover:text-[#F7FAF8]' : 'text-white/90 hover:text-white'
          }`}>
            Industries
          </Link>

          {/* Locations */}
          <Link href="/locations" className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
            scrolled ? 'text-[#4A5650] hover:text-[#11361F] dark:text-[#B2C0B8] dark:hover:text-[#F7FAF8]' : 'text-white/90 hover:text-white'
          }`}>
            Locations
          </Link>

          {/* Company */}
          <Link href="/about" className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
            scrolled ? 'text-[#4A5650] hover:text-[#11361F] dark:text-[#B2C0B8] dark:hover:text-[#F7FAF8]' : 'text-white/90 hover:text-white'
          }`}>
            Company
          </Link>

          {/* Printable Business Card */}
          <Link href="/business-card" className={`rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
            scrolled ? 'text-[#8B6E3C] hover:text-[#11361F] dark:text-[#A38652]' : 'text-[#8B6E3C] hover:text-white'
          }`}>
            Business Card
          </Link>

          {/* Get a Quote Button */}
          <Link href="/contact" className={`ml-4 px-4 py-2 text-sm font-semibold tracking-wide rounded transition-all duration-300 ${
            scrolled 
              ? 'bg-[#11361F] text-white hover:bg-[#8B6E3C]' 
              : 'bg-white text-[#11361F] hover:bg-[#8B6E3C] hover:text-white'
          }`}>
            Get a quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className={`w-6 h-6 ${scrolled ? 'text-[#11361F] dark:text-[#F7FAF8]' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="lg:hidden bg-[#FCFAF7] dark:bg-[#0B120E] border-t border-[#DFDBD0]/50 dark:border-[#24352B] w-full py-4 px-6 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg">
          <ul className="flex flex-col gap-4 text-base font-semibold text-[#19201C] dark:text-[#F7FAF8]">
            <li><Link href="/robots" onClick={() => setMobileMenuOpen(false)}>Robots</Link></li>
            <ul className="pl-4 flex flex-col gap-2 text-sm text-[#4A5650] dark:text-[#B2C0B8] font-normal">
              <li><Link href="/robots/cleaning" onClick={() => setMobileMenuOpen(false)}>Cleaning Robots</Link></li>
              <li><Link href="/robots/delivery" onClick={() => setMobileMenuOpen(false)}>Delivery & Bussing</Link></li>
              <li><Link href="/robots/amr" onClick={() => setMobileMenuOpen(false)}>Autonomous Mobile Robots</Link></li>
            </ul>
            <li><Link href="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link></li>
            <li><Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link></li>
            <li><Link href="/locations" onClick={() => setMobileMenuOpen(false)}>Locations</Link></li>
            <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>Company</Link></li>
            <li><Link href="/business-card" onClick={() => setMobileMenuOpen(false)} className="text-[#8B6E3C]">Digital Business Card</Link></li>
            <li className="mt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#11361F] text-white py-2.5 rounded hover:bg-[#8B6E3C]">
                Get a quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
