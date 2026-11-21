import React from 'react';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';

interface CTASectionProps {
  onOpenPartnerModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large High-Contrast CTA Container */}
        <div className="relative rounded-[20px] bg-brand-green overflow-hidden p-8 sm:p-12 lg:p-16 text-white shadow-elevated">
          {/* Subtle geometric pattern/overlay */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-black/10 blur-3xl pointer-events-none"></div>

          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase text-white border border-white/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% FREE COMMUNITY</span>
            </div>

            {/* Headline in exactly 2 distinct lines */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight flex flex-col items-center">
              <span>Stop Trading Alone.</span>
              <span className="mt-1">Connect with Medan's Web3 Hub.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
              Learn tested risk rules, swap market ideas with seasoned peers, and come play padel on the weekend. We charge zero membership fees and run zero paid groups.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://t.me/MedanCryptoCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-brand-green font-bold text-base rounded-[12px] shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Join Our Telegram Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-base rounded-[12px] border-2 border-white flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Building2 className="w-5 h-5" />
                <span>Host an Event in Medan</span>
              </button>
            </div>

            {/* Trust Notes */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-white/90">
              <span>⚡ Free Forever</span>
              <span className="opacity-60">•</span>
              <span>3,500+ Active Members</span>
              <span className="opacity-60">•</span>
              <span>Hosted with Bybit and FLAP Indonesia</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
