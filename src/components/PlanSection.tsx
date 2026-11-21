import React from 'react';
import { Check } from 'lucide-react';

export const PlanSection: React.FC = () => {
  const plans = [
    {
      step: 'STEP 01',
      title: '1. Join Our Telegram Group',
      body: 'Join our Telegram group to meet local peers and access free beginner study guides.',
      checks: [
        '24/7 active discussions with local peers',
        'Zero spam or unsolicited promotional DMs',
        '100% free starter educational guides'
      ]
    },
    {
      step: 'STEP 02',
      title: '2. Show Up to Sports or Coffee',
      body: 'Show up for weekly padel, Sunday badminton, or casual weekend coffee meetups across Medan.',
      checks: [
        'Weekly padel & badminton court bookings',
        'Weekend coffee & market roundtables',
        'Welcoming space with zero ego or elitism'
      ]
    },
    {
      step: 'STEP 03',
      title: '3. Trade, Build & Host Events',
      body: 'Compete in live trading cups, build hackathon projects, or cohost official offline summits.',
      checks: [
        'Live trading contests with verified prizes',
        'Protocol founder intros & grant referrals',
        'Turnkey Medan offline event production'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-brand-canvas-alt border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-green/10 border border-brand-green/20 text-brand-green-deep px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            HOW TO JOIN US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-gray-900 tracking-tight leading-tight">
            Three Simple Steps. Zero Cost to Join.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            You do not need a developer background or large portfolio. Getting involved starts with a simple hello.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] border border-brand-border p-7 shadow-subtle hover:shadow-elevated transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block text-[11px] font-extrabold tracking-wider px-3 py-1 bg-gray-100 text-gray-700 rounded-md">
                  {p.step}
                </span>

                <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.body}
                </p>
              </div>

              {/* Checkmarks */}
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                {p.checks.map((chk, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
