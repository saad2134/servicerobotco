import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Integration & Financing Solutions | Service Robot Co.™",
  description: "Learn about our month-to-month RaaS rentals, ERP/WMS integrations, and facility layout design procedures.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-[#FCFAF7] dark:bg-[#0B120E] min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#11361F] text-white py-20 px-6 border-b border-[#8B6E3C]/20 relative">
        <div className="container mx-auto max-w-5xl text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-4 inline-block">Integrator Capabilities</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-none mb-6">
            Integration is step two.
          </h1>
          <p className="text-base text-[#B2C0B8] max-w-xl leading-relaxed">
            We don't just ship boxes. We deploy fully unified automation programs with month-to-month financing flexibility.
          </p>
        </div>
      </section>

      {/* Solutions Details Sections */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl flex flex-col gap-24">
          
          {/* Solution 1: Financing & RaaS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-2 block">Financing Options</span>
              <h2 className="text-3xl font-serif font-bold text-[#11361F] dark:text-white mb-6">Rent monthly or buy outright.</h2>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-4">
                We believe equipment contracts should match operational workflows. We offer month-to-month rentals with zero long-term commitments (Robotics-as-a-Service), standard commercial equipment leasing, and CAPEX purchases.
              </p>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed">
                RaaS contracts mean one clean monthly invoice covers the machinery, software sync, dispatcher call buttons, and all maintenance logs. Uptime is what you buy.
              </p>
            </div>
            <div className="md:col-span-5 bg-[#F4F1E9] dark:bg-[#121C16] border border-[#DFDBD0] dark:border-[#24352B] p-6 rounded-sm text-left">
              <h4 className="font-serif text-lg font-bold text-[#11361F] dark:text-white mb-4">Contract Options</h4>
              <ul className="flex flex-col gap-3 text-xs font-mono text-[#4A5650] dark:text-[#B2C0B8]">
                <li><strong className="text-[#8B6E3C]">RAAS RENTAL:</strong> Month-to-month contract. Full support included.</li>
                <li><strong className="text-[#8B6E3C]">EQUIPMENT LEASE:</strong> 12 - 48 month lease structures.</li>
                <li><strong className="text-[#8B6E3C]">CAPEX PURCHASE:</strong> Outright purchase, annual service SLAs.</li>
              </ul>
            </div>
          </div>

          {/* Solution 2: ERP Systems */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="p-6 bg-[#1E2522] dark:bg-[#071D10] text-[#B2C0B8] border border-[#8B6E3C]/20 shadow-xl rounded font-mono text-[11px] text-left">
                <div className="text-[10px] text-[#8B6E3C] uppercase mb-4 font-bold">API Dispatch Trigger</div>
                <pre className="overflow-x-auto">
{`curl -X POST https://api.servicerobotco.com/v1/dispatch \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "facilityId": "FAC-ORD-01",
    "robotId": "GAUSIUM-S50-12",
    "task": "DOCK_A_CLEAN"
  }'`}
                </pre>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-2 block">System Telemetry</span>
              <h2 className="text-3xl font-serif font-bold text-[#11361F] dark:text-white mb-6">Everything connects to ERP.</h2>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-4">
                We connect the robot fleet directly to the systems your operations crew already runs. We integrate dispatch triggers and status logs to WMS, ERP, POS, and logistics tools.
              </p>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed">
                Whether you run SAP, Oracle, BlueYonder, or custom local databases, our software layers slot the dispatch commands into your dashboard feeds smoothly.
              </p>
            </div>
          </div>

          {/* Solution 3: Path Design & Operations */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-12 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-2 block">Site Layout Mapping</span>
              <h2 className="text-3xl font-serif font-bold text-[#11361F] dark:text-white mb-6">Free facility layouts mapping.</h2>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed mb-4">
                Before any machine lands on your floor, our field engineers conduct a comprehensive route audit. We layout pathing maps, calculate elevator clearances, test visual SLAM triggers in tight spots, and designate localized charging dock targets.
              </p>
              <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] leading-relaxed">
                This removes all operational friction. Your team gets a robot that knows exactly how to work side-by-side with human crew from first startup.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
