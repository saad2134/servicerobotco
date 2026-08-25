import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "About Our Integration Standards | Service Robot Co.™",
  description: "Learn about Service Robot Co., our integration methodology, nationwide team of engineers, and brand-independent equipment fleet.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FCFAF7] dark:bg-[#0B120E] min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#11361F] text-white py-20 px-6 border-b border-[#8B6E3C]/20 relative">
        <div className="container mx-auto max-w-5xl text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-4 inline-block">Integration Standards</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-none mb-6">
            We run the best commercial robots.
          </h1>
          <p className="text-base text-[#B2C0B8] max-w-xl leading-relaxed">
            Brand-independent layout planning, month-to-month financing models, and regional service depots.
          </p>
        </div>
      </section>

      {/* Corporate Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-left">
          <div className="prose prose-stone dark:prose-invert flex flex-col gap-8 text-[#4A5650] dark:text-[#B2C0B8] text-base leading-relaxed">
            <p>
              Service Robot Co. is a commercial robotics integrator. We evaluate, finance, deploy, and maintain automated equipment platforms across warehouses, hospitality, healthcare, retail, and manufacturing facilities nationwide.
            </p>
            <p>
              Unlike robot manufacturers who design and sell individual machines, we focus on building complete operations programs. We handle route design, API integrations, staff operations training, and localized depot repairs.
            </p>
            <h3 className="font-serif text-2xl font-bold text-[#11361F] dark:text-white mt-6 mb-2">Our Operating Core</h3>
            <p>
              Our operations core is designed around keeping equipment on the floor. When hardware faults occur: 10-minute remote phone triage, 24-hour engineer depot dispatch, and emergency support dispatch are standard. We handle all upkeep so you pay for operational results.
            </p>
            <p>
              We are brand-independent, deploying machinery from leading manufacturers like Gausium, Pudu Robotics, Standard Robots, Standard Bots, and Universal Robots, matching the best machine to your facility layout parameters.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
