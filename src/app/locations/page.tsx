import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Service Locations & Regional Depots | Service Robot Co.™",
  description: "Find our regional engineering depots and operations centers supporting commercial machinery across all 50 states.",
};

export default function LocationsPage() {
  const regions = [
    { name: "Northeast Region", depot: "Boston Depot / New York Office", range: "ME, NH, VT, MA, RI, CT, NY, NJ, PA" },
    { name: "Mid-Atlantic & Southeast", depot: "Atlanta Depot / Charlotte Office", range: "DE, MD, VA, WV, NC, SC, GA, FL, AL, MS, TN" },
    { name: "Midwest Region", depot: "Chicago Depot / Indianapolis Office", range: "OH, IN, IL, MI, WI, MN, IA, MO, ND, SD, NE, KS" },
    { name: "South Central Region", depot: "Dallas Depot / Houston Office", range: "KY, AR, LA, OK, TX, NM" },
    { name: "Mountain & Pacific West", depot: "Seattle Depot / Los Angeles Office", range: "CO, WY, MT, ID, UT, AZ, NV, WA, OR, CA, AK, HI" }
  ];

  return (
    <div className="bg-[#FCFAF7] dark:bg-[#0B120E] min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#11361F] text-white py-20 px-6 border-b border-[#8B6E3C]/20 relative">
        <div className="container mx-auto max-w-5xl text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-4 inline-block">Depot Coverage</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-none mb-6">
            Service nationwide.
          </h1>
          <p className="text-base text-[#B2C0B8] max-w-xl leading-relaxed">
            We operate regional support offices and depots in all 50 US states, ensuring on-site response within 24 hours of dispatch.
          </p>
        </div>
      </section>

      {/* Regions Listing */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col gap-12 text-left">
            {regions.map((reg, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#DFDBD0]/40 dark:border-[#24352B]/40 pb-8 last:border-none">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl font-bold text-[#11361F] dark:text-white">{reg.name}</h3>
                </div>
                <div className="md:col-span-8 font-mono text-sm">
                  <p className="text-[#8B6E3C] font-semibold mb-1">{reg.depot}</p>
                  <p className="text-xs text-[#4A5650] dark:text-[#B2C0B8]">{reg.range}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
