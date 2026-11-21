import React from 'react';

export const PartnerBar: React.FC = () => {
  const partners = [
    { name: 'BYBIT INDONESIA', note: 'Official Exchange Partner' },
    { name: 'FLAP INDONESIA', note: 'AI & Web3 Tour Co-Host' },
    { name: 'TENANK NGUMBAN', note: 'Official Beachside Venue' },
    { name: 'LUMA MEDAN', note: 'Event Ticketing & Calendar' },
    { name: 'MEDAN PADEL CLUB', note: 'Weekly Sports Partner' },
  ];

  return (
    <section className="bg-white border-b border-brand-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="shrink-0 text-center lg:text-left">
            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase whitespace-nowrap">
              TRUSTED ECOSYSTEM & EVENT PARTNERS:
            </span>
          </div>

          {/* Partner Items - All in 1 aligned row on desktop */}
          <div className="flex items-center justify-center lg:justify-end gap-6 sm:gap-8 md:gap-10 overflow-x-auto w-full lg:w-auto no-scrollbar">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start shrink-0 group cursor-default"
              >
                <span className="font-extrabold text-xs sm:text-sm text-gray-800 tracking-wider group-hover:text-brand-green transition-colors whitespace-nowrap">
                  {p.name}
                </span>
                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                  {p.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
