import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Send } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [partnerName, setPartnerName] = useState('');
  const [contact, setContact] = useState('');
  const [eventType, setEventType] = useState('host_event');
  const [notes, setNotes] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerName.trim() || !contact.trim()) return;

    const partnerInquiry = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      partner_name: partnerName,
      contact: contact,
      event_type: eventType,
      notes: notes,
      created_at: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('mcc_partner_inquiries') || '[]');
      existing.push(partnerInquiry);
      localStorage.setItem('mcc_partner_inquiries', JSON.stringify(existing));
    } catch {
      // Ignore
    }

    setIsSent(true);
    setTimeout(() => {
      window.open('https://t.me/MedanCryptoCommunity', '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-[20px] border border-brand-border text-gray-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Partner with MCC</h3>
              <p className="text-xs text-gray-500">Host an offline summit, hackathon, or grant meetup in Medan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSent ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Inquiry Diterima!</h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                Tim inti Medan Crypto Community akan segera menghubungi Anda. Mengarahkan ke Telegram resmi MCC...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Nama Brand / Protokol / Organisasi *
                </label>
                <input
                  type="text"
                  required
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder="Misal: Bybit, Polygon, Starknet Foundation..."
                  className="w-full h-11 px-3.5 bg-gray-50 border border-gray-300 rounded-[10px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Kontak PIC (Telegram / Email / WhatsApp) *
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="@telegram_handle atau name@company.io"
                  className="w-full h-11 px-3.5 bg-gray-50 border border-gray-300 rounded-[10px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Tipe Kerjasama
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full h-11 px-3 bg-gray-50 border border-gray-300 rounded-[10px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                >
                  <option value="host_event">Host Offline Event / City Tour di Medan</option>
                  <option value="sponsorship">Sponsorship Turnamen & Workshop</option>
                  <option value="grant">Grant & Hackathon Outreach</option>
                  <option value="speaker">Speaker / AMA Sharing Session</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Catatan Tambahan
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Estimasi tanggal, ekspektasi peserta, atau kebutuhan venue..."
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-[10px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm rounded-[10px] shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pengajuan Kolaborasi</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
