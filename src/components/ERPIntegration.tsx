'use client';

import React from 'react';

export default function ERPIntegration() {
  return (
    <section className="py-24 px-6 bg-[#0C0C0C] border-technical-b relative overflow-hidden z-10">
      {/* Diagonal moving grid background */}
      <div className="moving-grid" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left side - content */}
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B4FF00]">// COMPATIBILITY LAYER</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white mt-4 mb-6">
              CONNECT TO ANY ENTERPRISE WMS OR ERP<span className="text-[#B4FF00]">.</span>
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-medium">
              Integration is step two of every deployment. We connect the robot to the systems your team already runs — WMS, ERP, POS, or custom ops tools — so it reads from and writes back to your existing data from day one.
            </p>
            <h3 className="font-sans text-lg font-bold text-white mb-2 uppercase">Robots slot in. No rip-and-replace</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              Our APIs support immediate synchronizations with SAP, Oracle, and leading logistics networks, translating payload events and status changes to your dashboards automatically.
            </p>
          </div>

          {/* Right side - styled JSON telemetry card */}
          <div className="lg:col-span-5 w-full">
            <div className="p-6 bg-black text-[#B4FF00] border border-[#B4FF00]/30 shadow-2xl rounded-none font-mono text-xs text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#B4FF00]" />
              {/* Diagnostic scan line */}
              <div className="absolute left-0 w-full h-[1px] bg-[#B4FF00]/20 animate-scan-line pointer-events-none z-10" />
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10 text-[9px] uppercase tracking-wider text-neutral-400 font-bold">
                <span>Telemetry Payload Schema</span>
                <span className="text-[#B4FF00]">● CONNECTION_ESTABLISHED</span>
              </div>
              <pre className="overflow-x-auto text-[11px] text-neutral-200">
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
  );
}
