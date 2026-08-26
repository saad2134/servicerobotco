'use client';

import React from 'react';

export default function Support() {
  return (
    <section className="py-24 px-6 bg-[#0C0C0C] text-white border-technical-b relative overflow-hidden z-10">
      {/* Subtle moving grid background */}
      <div className="moving-grid" />
      
      <div className="container mx-auto max-w-5xl text-left relative z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// SERVICE NETWORK</span>
        <h2 className="text-4xl font-sans font-black text-white mt-4 mb-6 uppercase">
          24/7 NATIONWIDE UPTIME COVERAGE<span className="text-[#B4FF00]">.</span>
        </h2>
        <p className="text-neutral-400 mb-16 max-w-2xl text-sm leading-relaxed font-medium">
          Service Robot Co. manages service and maintenance. When an issue occurs: 10-minute remote phone triage during business hours, 24-hour nationwide on-site dispatch, and emergency response hotlines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: 10-Minute Response */}
          <div className="border border-white/10 p-8 bg-black text-left relative overflow-hidden group hover:border-[#B4FF00] hover:shadow-[0_0_30px_rgba(180,255,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            {/* Animated glowing top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#B4FF00] group-hover:shadow-[0_0_12px_#B4FF00] transition-all duration-300" />

            <div>
              {/* Telemetry Header Badge with Pulsing Ping */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B4FF00] flex items-center gap-2 font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B4FF00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B4FF00]" />
                  </span>
                  SYS_TRIAGE // LIVE
                </span>
                
                {/* Animated Signal Strength Bars */}
                <div className="flex items-end gap-1 h-3">
                  <div className="w-1 bg-[#B4FF00] h-1.5 animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 bg-[#B4FF00] h-2.5 animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 bg-[#B4FF00] h-3.5 animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              </div>

              <h4 className="font-sans text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#B4FF00] transition-colors duration-300">
                10-Minute Response
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium mb-6">
                Remote phone triage with regional operations dispatchers.
              </p>
            </div>

            {/* Micro Telemetry Counter Animation */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>AVG LATENCY</span>
              <span className="text-[#B4FF00] font-bold">&lt; 08:42 MIN</span>
            </div>
          </div>

          {/* Card 2: 24-Hour Dispatch */}
          <div className="border border-white/10 p-8 bg-black text-left relative overflow-hidden group hover:border-[#B4FF00] hover:shadow-[0_0_30px_rgba(180,255,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            {/* Animated glowing top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#B4FF00] group-hover:shadow-[0_0_12px_#B4FF00] transition-all duration-300" />

            <div>
              {/* Telemetry Header Badge with Rotating Radar Target */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B4FF00] flex items-center gap-2 font-bold">
                  <svg className="w-3.5 h-3.5 text-[#B4FF00] animate-[spin_5s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3m9-9h-3M6 12H3" />
                  </svg>
                  ON-SITE DISPATCH
                </span>

                <span className="font-mono text-[9px] text-neutral-500 font-bold uppercase">50 STATES</span>
              </div>

              <h4 className="font-sans text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#B4FF00] transition-colors duration-300">
                24-Hour Dispatch
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium mb-6">
                Nationwide on-site engineer dispatch for quick hardware triage.
              </p>
            </div>

            {/* Micro Telemetry Counter Animation */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>DEPOT RADIUS</span>
              <span className="text-[#B4FF00] font-bold">ALL 50 STATES</span>
            </div>
          </div>

          {/* Card 3: Emergency Support */}
          <div className="border border-white/10 p-8 bg-black text-left relative overflow-hidden group hover:border-[#B4FF00] hover:shadow-[0_0_30px_rgba(180,255,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            {/* Animated glowing top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#B4FF00] group-hover:shadow-[0_0_12px_#B4FF00] transition-all duration-300" />

            <div>
              {/* Telemetry Header Badge with Animated Heartbeat ECG Line */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B4FF00] flex items-center gap-2 font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B4FF00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B4FF00]" />
                  </span>
                  CRITICAL HOTLINE
                </span>

                {/* Animated Heartbeat ECG Pulse Path */}
                <svg className="w-8 h-4 text-[#B4FF00]" viewBox="0 0 40 20" fill="none" stroke="currentColor">
                  <path
                    d="M0 10 H12 L15 3 L19 17 L23 7 L26 13 L29 10 H40"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              <h4 className="font-sans text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#B4FF00] transition-colors duration-300">
                Emergency Support
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium mb-6">
                24/7 dedicated hotlines for active healthcare and warehouse sites.
              </p>
            </div>

            {/* Micro Telemetry Counter Animation */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>AVAILABILITY</span>
              <span className="text-[#B4FF00] font-bold">24 / 7 / 365</span>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <h3 className="font-mono text-xs font-bold text-[#B4FF00] mb-2 uppercase">// DEPLOYED NATIONWIDE</h3>
          <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">We run operations depots and support offices in all 50 states.</p>
        </div>
      </div>
    </section>
  );
}
