'use client';

import React from 'react';
import Link from 'next/link';
import BusinessCard from './BusinessCard';

export default function LocalBusinessCardView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFAF7] dark:bg-[#0B120E] p-6 text-center print-page-container">
      
      {/* Screen only header info */}
      <div className="no-print mb-8 max-w-md mx-auto">
        <h1 className="font-serif text-3xl font-bold text-[#11361F] dark:text-white mb-2">
          Service Robot Co.™
        </h1>
        <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] max-w-xs mx-auto">
          Operations & Deployment Business Card. Click card to flip front/back, or print the layout to PDF.
        </p>
      </div>

      {/* Screen only interactive card */}
      <div className="no-print mb-8">
        <BusinessCard />
      </div>

      {/* Screen only control buttons */}
      <div className="no-print flex gap-4 justify-center">
        <Link href="/" className="px-6 py-2.5 rounded border border-[#11361F]/20 hover:border-[#11361F]/50 text-[#11361F] dark:text-[#E2EAE5] font-semibold transition">
          ← Back to Homepage
        </Link>
        <button onClick={() => window.print()} className="px-6 py-2.5 rounded bg-[#11361F] text-white hover:bg-[#8B6E3C] font-semibold transition">
          🖨️ Print Card
        </button>
      </div>

      <p className="no-print mt-6 text-[10px] text-[#4A5650] dark:text-[#B2C0B8]/60">
        * Standard US Card Dimensions: 3.5 inches by 2 inches. Print layout prints front and back stacked.
      </p>

      {/* Print only double-sided layout */}
      <div className="print-only-layout hidden">
        <BusinessCard isPrintOnly={true} />
      </div>

    </div>
  );
}
