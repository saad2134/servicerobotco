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
      <div className="no-print flex flex-wrap gap-4 justify-center max-w-xl mx-auto mb-6">
        <Link href="/" className="px-6 py-2.5 rounded border border-[#B4FF00]/30 hover:border-[#B4FF00] text-white font-semibold transition text-xs uppercase tracking-wider">
          ← Back to Homepage
        </Link>
        <button onClick={() => window.print()} className="px-6 py-2.5 rounded bg-[#B4FF00] text-black hover:bg-[#B4FF00]/80 font-bold transition text-xs uppercase tracking-wider">
          🖨️ Print View
        </button>
      </div>

      {/* Download Direct High-Res PNG & PDF Files */}
      <div className="no-print bg-black/60 border border-white/10 p-6 max-w-lg w-full text-left rounded-none mb-4">
        <h3 className="font-mono text-xs font-bold text-[#B4FF00] uppercase tracking-widest mb-3">
          // DOWNLOAD PRINT-READY ASSETS (300 DPI)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <a
            href="/business-card/business-card-full-print.pdf"
            download="ServiceRobotCo_BusinessCard_PrintSheet.pdf"
            className="p-3 border border-white/10 bg-neutral-900 hover:border-[#B4FF00] hover:text-[#B4FF00] transition flex items-center justify-between text-white font-mono"
          >
            <span>Full Print Sheet (PDF)</span>
            <span>↓</span>
          </a>
          <a
            href="/business-card/business-card-front.pdf"
            download="ServiceRobotCo_BusinessCard_Front.pdf"
            className="p-3 border border-white/10 bg-neutral-900 hover:border-[#B4FF00] hover:text-[#B4FF00] transition flex items-center justify-between text-white font-mono"
          >
            <span>Front Card (PDF)</span>
            <span>↓</span>
          </a>
          <a
            href="/business-card/business-card-back.pdf"
            download="ServiceRobotCo_BusinessCard_Back.pdf"
            className="p-3 border border-white/10 bg-neutral-400/10 hover:border-[#B4FF00] hover:text-[#B4FF00] transition flex items-center justify-between text-white font-mono"
          >
            <span>Back Card (PDF)</span>
            <span>↓</span>
          </a>
          <a
            href="/business-card/business-card-front.png"
            download="ServiceRobotCo_BusinessCard_Front.png"
            className="p-3 border border-white/10 bg-neutral-400/10 hover:border-[#B4FF00] hover:text-[#B4FF00] transition flex items-center justify-between text-white font-mono"
          >
            <span>Front Card (PNG 300DPI)</span>
            <span>↓</span>
          </a>
          <a
            href="/business-card/business-card-back.png"
            download="ServiceRobotCo_BusinessCard_Back.png"
            className="p-3 border border-white/10 bg-neutral-400/10 hover:border-[#B4FF00] hover:text-[#B4FF00] transition flex items-center justify-between text-white font-mono sm:col-span-2"
          >
            <span>Back Card (PNG 300DPI)</span>
            <span>↓</span>
          </a>
        </div>
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
