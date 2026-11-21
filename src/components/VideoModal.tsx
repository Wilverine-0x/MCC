import React from 'react';
import { X, Play, Users, MapPin, Calendar, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-brand-dark-botanical rounded-[20px] border border-white/10 text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Medan Meetup Recap & Documentation</h3>
              <p className="text-xs text-gray-400">Offline Gathering & Builder Summits in North Sumatra</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Main Visual Showcase */}
          <div className="relative rounded-[14px] overflow-hidden bg-black/50 aspect-video group">
            <img
              src="/images/hero-community.jpg"
              alt="MCC Meetup Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
              <a
                href="https://www.instagram.com/medancrypto_community/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-brand-green hover:bg-brand-green-hover text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 mb-3"
              >
                <Play className="w-7 h-7 fill-current ml-1" />
              </a>
              <span className="text-sm font-bold text-white drop-shadow">Watch on Official Instagram Reels</span>
              <span className="text-xs text-gray-300">Live footage from Baqa Cafe & Tenank Beach</span>
            </div>
          </div>

          {/* Key Facts & Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-[12px] bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                <Users className="w-4 h-4" />
                <span>Attendees</span>
              </div>
              <div className="text-xl font-bold text-white">150+ Verified</div>
              <div className="text-[11px] text-gray-400">Traders & builders</div>
            </div>

            <div className="p-4 rounded-[12px] bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span>Venues</span>
              </div>
              <div className="text-xl font-bold text-white">Baqa & Tenank</div>
              <div className="text-[11px] text-gray-400">Medan, North Sumatra</div>
            </div>

            <div className="p-4 rounded-[12px] bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                <Calendar className="w-4 h-4" />
                <span>Activities</span>
              </div>
              <div className="text-xl font-bold text-white">Padel & Trading</div>
              <div className="text-[11px] text-gray-400">Zero admission fee</div>
            </div>
          </div>

          {/* Narrative text */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Medan Crypto Community (MCC) secara konsisten menyelenggarakan event tatap muka berkualitas tinggi di berbagai venue terkemuka di Kota Medan. Mulai dari sesi bedah chart santai, diskusi arsitektur AI Web3, hingga turnamen padel antar komunitas.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-white/10 flex items-center justify-between bg-black/20">
          <span className="text-xs text-gray-400">Join next meetup via Telegram</span>
          <a
            href="https://t.me/MedanCryptoCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-[10px] transition-colors"
          >
            <span>Open Telegram Group</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
