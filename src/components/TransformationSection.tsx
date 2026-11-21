import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const personas = [
    {
      img: '/images/trans-traders.jpg',
      tag: 'FOR TRADERS',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      title: 'Disciplined Risk & Sharp Execution',
      body: 'Master position sizing and disciplined risk execution alongside experienced local crypto traders.',
      result: 'Result: Disciplined risk and zero blind FOMO'
    },
    {
      img: '/images/trans-builders.jpg',
      tag: 'FOR BUILDERS',
      tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
      title: 'Global Grants and Builder Partners',
      body: 'Find hackathon teammates, review smart contract architecture, and connect directly with foundation leads.',
      result: 'Result: Direct grant access and builder teammates'
    },
    {
      img: '/images/trans-partners.jpg',
      tag: 'FOR PARTNERS',
      tagColor: 'bg-purple-50 text-purple-800 border-purple-200',
      title: 'Turnkey Events in North Sumatra',
      body: 'Launch your protocol in North Sumatra with turnkey venue production and 150 verified attendees.',
      result: 'Result: Packed venue and authentic local community'
    }
  ];

  return (
    <section id="sports" className="py-20 bg-brand-canvas-alt border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-green/10 border border-brand-green/20 text-brand-green-deep px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            WHAT CHANGES WHEN YOU JOIN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-gray-900 tracking-tight leading-tight">
            Stop Guessing. Trade and Build with Conviction.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Here is how members, builders, and global protocol partners grow once they tap into Medan's most active decentralized network.
          </p>
        </div>

        {/* 3 Persona Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] overflow-hidden border border-brand-border shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Banner */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md border ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.body}
                  </p>
                </div>

                {/* Verified Result Box */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 p-3 bg-brand-canvas rounded-[10px] text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>{p.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
