import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#071D10] text-[#E2EAE5] border-t-4 border-[#8B6E3C] py-16 px-6 no-print">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-white">
            Service Robot Co<span className="text-[#8B6E3C]">.</span>
            <span className="text-[10px] align-super font-sans font-normal ml-0.5 opacity-80">TM</span>
          </Link>
          <p className="text-sm text-[#B2C0B8] leading-relaxed">
            The commercial robotics integration partner for warehouses, hospitality, retail, healthcare, and facilities. We integrate, finance, install, train, and support operations across all 50 states.
          </p>
          <div className="text-xs text-[#B2C0B8] mt-4 flex flex-col gap-1">
            <span className="text-white font-semibold">Service Robot Co.™</span>
            <span>servicerobotco.com</span>
            <span>team@servicerobotco.com</span>
          </div>
        </div>

        {/* Robots column */}
        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6">Robots We Integrate</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#B2C0B8]">
            <li><Link href="/robots/cleaning" className="hover:text-white transition">Floor Scrubbers & Vacuums</Link></li>
            <li><Link href="/robots/delivery" className="hover:text-white transition">Delivery & Bussing Robots</Link></li>
            <li><Link href="/robots/amr" className="hover:text-white transition">Autonomous Mobile Robots (AMRs)</Link></li>
            <li><Link href="/robots/cobot" className="hover:text-white transition">CNC & Machine Tending Cobots</Link></li>
            <li><Link href="/solutions/security-robots" className="hover:text-white transition">Security & Surveillance Robots</Link></li>
          </ul>
        </div>

        {/* Quick Links column */}
        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6">Solutions & Support</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#B2C0B8]">
            <li><Link href="/solutions/financing" className="hover:text-white transition">Robotics-as-a-Service (RaaS)</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition">Equipment Cost & Pricing Guides</Link></li>
            <li><Link href="/solutions/erp-integration" className="hover:text-white transition">WMS, ERP & POS Integrations</Link></li>
            <li><Link href="/service" className="hover:text-white transition">24/7 Service Engineer Network</Link></li>
            <li><Link href="/business-card" className="hover:text-white transition">Digital Business Card</Link></li>
          </ul>
        </div>

        {/* Contact/Action column */}
        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6">Integrate Today</h4>
          <p className="text-sm text-[#B2C0B8] mb-6 leading-relaxed">
            Ready to assess your facility or request a quote? One partner from first layout mapping to ongoing maintenance.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="bg-[#8B6E3C] text-white hover:bg-[#A38652] text-center px-4 py-2.5 rounded font-semibold transition-all">
              Request a Quote
            </Link>
            <Link href="mailto:team@servicerobotco.com" className="border border-white/20 hover:border-white/50 text-center px-4 py-2.5 rounded font-semibold text-white transition-all">
              Email Team
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-[#DFDBD0]/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#B2C0B8] gap-4">
        <span>© {new Date().getFullYear()} Service Robot Co.™ All rights reserved. Integrating commercial robotics nationwide.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
