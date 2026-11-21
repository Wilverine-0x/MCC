import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import eventsData from '../data/events.json';

interface GuideSectionProps {
  onSelectEvent: (eventId: string) => void;
}

export const GuideSection: React.FC<GuideSectionProps> = ({ onSelectEvent }) => {
  return (
    <section id="events" className="py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-canvas border border-brand-border text-brand-green-deep px-3.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase">
            COMMUNITY FIRST, ALWAYS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-gray-900 tracking-tight leading-tight whitespace-normal lg:whitespace-nowrap">
            Built by Medan Locals Who Started from Zero.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Founded by Medan locals who learned crypto the hard way. Free workshops, weekly sports, and verified offline summits.
          </p>
        </div>

        {/* 3 Event Cards Grid (Dark Botanical Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventsData.map((evt) => (
            <div
              key={evt.id}
              className="bg-brand-dark-botanical rounded-[16px] overflow-hidden border border-brand-dark-botanical text-white flex flex-col justify-between shadow-elevated group"
            >
              {/* Event Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={evt.image_src}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-botanical via-brand-dark-botanical/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-white border border-white/20 uppercase">
                    {evt.tag}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-brand-green transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-4">
                  {/* Event Stat Pill */}
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-300">
                    <Users className="w-4 h-4 shrink-0 text-brand-green" />
                    <span>{evt.stats}</span>
                  </div>

                  {/* Action Link */}
                  <button
                    onClick={() => onSelectEvent(evt.id)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-green hover:text-white transition-colors group/link"
                  >
                    <span>See Event Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
