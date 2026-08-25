import React from 'react';
import BusinessCard from '../../components/BusinessCard';

export const metadata = {
  title: "Request a Quote & Assessment | Service Robot Co.™",
  description: "Contact our integration team, book a free facility path mapping assessment, or request pricing estimates.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FCFAF7] dark:bg-[#0B120E] min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#11361F] text-white py-20 px-6 border-b border-[#8B6E3C]/20 relative">
        <div className="container mx-auto max-w-5xl text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B6E3C] mb-4 inline-block">Free Site Assessment</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-none mb-6">
            Book a free demo.
          </h1>
          <p className="text-base text-[#B2C0B8] max-w-xl leading-relaxed">
            We walk your floor. You leave knowing what fits — at no cost.
          </p>
        </div>
      </section>

      {/* Main Content (Split Screen: Form + Business Card Info) */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl font-serif font-bold text-[#11361F] dark:text-white mb-8">
              Find the robot that fits your site.
            </h2>
            <form className="flex flex-col gap-6 bg-[#F4F1E9]/35 dark:bg-[#121C16]/20 border border-[#DFDBD0]/70 dark:border-[#24352B] p-8 rounded shadow-sm">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Full Name</label>
                <input type="text" id="name" required className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B] bg-[#FCFAF7] dark:bg-[#0B120E]" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Company Name</label>
                <input type="text" id="company" required className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B] bg-[#FCFAF7] dark:bg-[#0B120E]" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Work Email</label>
                <input type="email" id="email" required className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B] bg-[#FCFAF7] dark:bg-[#0B120E]" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Robot Category Needed</label>
                <select id="category" className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B] bg-[#FCFAF7] dark:bg-[#0B120E]">
                  <option>Commercial Cleaning Robots</option>
                  <option>Delivery & Bussing Robots</option>
                  <option>Autonomous Mobile Robots (AMRs)</option>
                  <option>CNC & Industrial Arms</option>
                  <option>Security & Surveillance</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#4A5650] dark:text-[#B2C0B8]">Facility Notes</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-[#DFDBD0] dark:border-[#24352B] bg-[#FCFAF7] dark:bg-[#0B120E]"></textarea>
              </div>

              <button type="submit" className="bg-[#11361F] text-white font-semibold py-3.5 rounded hover:bg-[#8B6E3C] transition duration-300">
                Submit Assessment Request
              </button>
            </form>
          </div>

          {/* Right Column: Credentials & Info */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            <h3 className="text-xl font-serif font-bold text-[#11361F] dark:text-white mb-4">Credentials & Contact</h3>
            <p className="text-sm text-[#4A5650] dark:text-[#B2C0B8] mb-8 leading-relaxed">
              Scan the dispatch card to reach our active 24/7 routing centers, or print this format for physical job binders.
            </p>
            <div className="mb-8 flex justify-center lg:justify-start">
              <BusinessCard />
            </div>
            <div className="text-sm text-[#4A5650] dark:text-[#B2C0B8] flex flex-col gap-2 border-t border-[#DFDBD0]/50 pt-6">
              <span className="font-semibold text-[#11361F] dark:text-white">Service Robot Co.™</span>
              <span>Website: servicerobotco.com</span>
              <span>Email: team@servicerobotco.com</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
