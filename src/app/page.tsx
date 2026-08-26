'use client';

import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FindYourFit from '../components/FindYourFit';
import Proposition from '../components/Proposition';
import Catalog from '../components/Catalog';
import Timeline from '../components/Timeline';
import ERPIntegration from '../components/ERPIntegration';
import Sectors from '../components/Sectors';
import Support from '../components/Support';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen bg-grid-pattern relative overflow-hidden">
      <Hero />
      <Stats />
      <FindYourFit />
      <Proposition />
      <Catalog />
      <Timeline />
      <ERPIntegration />
      <Sectors />
      <Support />
      <FAQ />
      <Contact />
    </div>
  );
}
