import React from 'react';
import { AlertTriangle, UserX, Globe2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      tag: 'EXTERNAL PROBLEM',
      icon: AlertTriangle,
      title: 'Paid VIP Groups & Toxic Hype',
      body: 'Anonymous callers promote speculative tokens, leaving retail buyers with heavy losses and zero fundamentals.',
      callout: '78% of solo retail buyers lose money on unvetted token presales.',
    },
    {
      tag: 'INTERNAL PROBLEM',
      icon: UserX,
      title: 'Trading in Total Isolation',
      body: 'Watching charts alone late at night triggers emotional revenge trades and quick burnout.',
      callout: '9 out of 10 solo retail traders quit within their first 6 months.',
    },
    {
      tag: 'PHILOSOPHICAL PROBLEM',
      icon: Globe2,
      title: 'Left Out of Global Deals',
      body: 'Major hackathons and ecosystem grants rarely reach Medan, leaving local builders without institutional support.',
      callout: 'Medan has serious tech and trading talent ready for global teams.',
    }
  ];

  return (
    <section id="about" className="py-20 bg-brand-canvas-alt border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-green/10 border border-brand-green/20 text-brand-green-deep px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            THE PROBLEM WE ARE SOLVING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-gray-900 tracking-tight leading-tight whitespace-normal lg:whitespace-nowrap">
            Trading Crypto Alone Is a Costly Mistake.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Most beginners start in hype channels and trade in isolation. We provide honest local accountability.
          </p>
        </div>

        {/* 3 Problem Cards Grid (Unified Brand Palette, Zero AI Slop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-brand-border p-7 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
                      {prob.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-brand-canvas flex items-center justify-center text-gray-600 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {prob.body}
                  </p>
                </div>

                {/* Stat Callout Box - Brand Palette */}
                <div className="mt-6 p-4 rounded-[12px] bg-brand-canvas border border-brand-border text-xs font-medium text-gray-800 leading-relaxed">
                  {prob.callout}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
