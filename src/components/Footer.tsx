import React from 'react';
import { Send, Twitter, Instagram, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal }) => {
  return (
    <footer id="partners" className="bg-brand-dark-footer text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Geolocation (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-mcc.jpg"
                alt="MCC Logo"
                className="w-10 h-10 rounded-lg object-cover border border-white/20"
              />
              <div>
                <div className="font-bold text-lg text-white tracking-tight leading-none">MCC</div>
                <div className="text-[11px] text-gray-400 mt-1">Medan Crypto Community</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Medan home for honest crypto education, weekly sports meetups, and premier Web3 offline events. 100% free and community owned.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-1">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span>Medan, North Sumatra, Indonesia 🇮🇩</span>
            </div>
          </div>

          {/* Column 2: Community Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              COMMUNITY
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <a href="#education" className="hover:text-white transition-colors">Free Crypto Education</a>
              </li>
              <li>
                <a href="#sports" className="hover:text-white transition-colors">Weekly Padel & Badminton</a>
              </li>
              <li>
                <a href="#sports" className="hover:text-white transition-colors">Sunday Morning Run & Coffee</a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">Trading Cups & Competitions</a>
              </li>
              <li>
                <a href="https://t.me/MedanCryptoCommunity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official Luma Calendar</a>
              </li>
            </ul>
          </div>

          {/* Column 3: For Partners Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              FOR PARTNERS
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <button onClick={onOpenPartnerModal} className="text-left hover:text-white transition-colors">
                  Host an Event in Medan
                </button>
              </li>
              <li>
                <button onClick={onOpenPartnerModal} className="text-left hover:text-white transition-colors">
                  Ecosystem Sponsorships
                </button>
              </li>
              <li>
                <button onClick={onOpenPartnerModal} className="text-left hover:text-white transition-colors">
                  Venue & Production (Tenank)
                </button>
              </li>
              <li>
                <button onClick={onOpenPartnerModal} className="text-left hover:text-white transition-colors">
                  Regional Grant Outreach
                </button>
              </li>
              <li>
                <button onClick={onOpenPartnerModal} className="text-left hover:text-white transition-colors">
                  Speaker & Founder Requests
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Channels (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              OFFICIAL CHANNELS
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Official channels for event announcements, weekly court schedules, and community discussions.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href="https://t.me/MedanCryptoCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-medium text-gray-300 hover:text-white border border-white/5 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-brand-green" />
                <span>t.me/MedanCryptoCommunity</span>
              </a>

              <a
                href="https://x.com/MedanCrypto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-medium text-gray-300 hover:text-white border border-white/5 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5 text-sky-400" />
                <span>x.com/MedanCrypto</span>
              </a>

              <a
                href="https://www.instagram.com/medancrypto_community/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-medium text-gray-300 hover:text-white border border-white/5 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@medancrypto_community</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div>
            © 2026 Medan Crypto Community (MCC). All rights reserved.
          </div>
          <div className="text-gray-400">
            Designed with pride in Medan • Built on FigCraft • Web3 for Everyone
          </div>
        </div>

      </div>
    </footer>
  );
};
