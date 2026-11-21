import React from 'react';
import { X, MapPin, Users, ExternalLink, Trophy } from 'lucide-react';
import eventsData from '../data/events.json';

interface EventModalProps {
  eventId: string | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ eventId, onClose }) => {
  if (!eventId) return null;

  const event = eventsData.find((e) => e.id === eventId);
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-[20px] border border-brand-border text-gray-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner image */}
        <div className="relative h-64 overflow-hidden bg-gray-900">
          <img
            src={event.image_src}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 bg-brand-green text-white rounded-md uppercase">
              {event.tag}
            </span>
            <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-brand-green" />
              <span>{event.stats}</span>
            </div>
            {event.venue && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>{event.venue}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Community Hosted</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Tentang Kegiatan</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {event.description}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Acara ini diselenggarakan secara transparan dan inklusif untuk seluruh pegiat Web3, trader independen, maupun builder teknologi di Kota Medan dan sekitarnya.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">Dokumentasi & diskusi event di Telegram</span>
            <a
              href="https://t.me/MedanCryptoCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-[10px] transition-colors"
            >
              <span>Buka Grup Diskusi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
