import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import metricsData from '../data/metrics.json';

interface HeroSectionProps {
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideo }) => {
  const [handle, setHandle] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanHandle = handle.trim();
    if (!cleanHandle) {
      setErrorMsg('Silakan masukkan handle Telegram (@username) atau email.');
      setStatus('error');
      return;
    }

    // Basic Telegram or Email check
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanHandle);
    const isTg = /^@?[a-zA-Z0-9_]{4,32}$/.test(cleanHandle);

    if (!isEmail && !isTg) {
      setErrorMsg('Format tidak valid. Gunakan @username Telegram atau email aktif.');
      setStatus('error');
      return;
    }

    // Local-First State Persistence
    const newLead = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      contact_handle: cleanHandle,
      type: isEmail ? 'email' : 'telegram',
      source_section: 'hero_input',
      created_at: new Date().toISOString(),
      status: 'verified'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('mcc_leads') || '[]');
      existing.push(newLead);
      localStorage.setItem('mcc_leads', JSON.stringify(existing));
    } catch {
      // Ignore local storage error
    }

    setStatus('success');
    setErrorMsg('');

    // Open official Telegram after 800ms
    setTimeout(() => {
      window.open('https://t.me/MedanCryptoCommunity', '_blank');
    }, 800);
  };

  return (
    <section className="relative overflow-hidden bg-brand-canvas-alt pt-8 pb-16 md:py-20 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Form */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 px-3.5 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-wider text-brand-green-deep uppercase">
                MEDAN'S GRASSROOTS WEB3 HUB
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-gray-900 tracking-tight leading-[1.12]">
                Trade with Real Peers.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-brand-green tracking-tight leading-[1.12]">
                Build in Medan.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              Free Web3 workshops, weekly sports meetups, and direct access to global protocol founders. Zero VIP fees.
            </p>

            {/* Lead Capture Form */}
            <div className="pt-2">
              {status === 'success' ? (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-[12px] text-emerald-800 max-w-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-sm font-medium">
                    Terima kasih! Handle tercatat. Membuka grup Telegram resmi MCC...
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={handle}
                      onChange={(e) => {
                        setHandle(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Your Telegram handle or email..."
                      className="w-full h-14 px-4 bg-white border border-gray-300 rounded-[12px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green shadow-sm text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-14 px-6 bg-brand-green hover:bg-brand-green-hover text-white font-semibold rounded-[12px] shadow-sm hover:shadow flex items-center justify-center gap-2 transition-all duration-200 shrink-0"
                  >
                    <span>Get Free Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-600 mt-2 font-medium">{errorMsg}</p>
              )}
            </div>

            {/* Social Proof Stack */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  src="/images/avatar-1.jpg"
                  alt="Member Avatar 1"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                />
                <img
                  src="/images/avatar-2.jpg"
                  alt="Member Avatar 2"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                />
                <img
                  src="/images/avatar-3.jpg"
                  alt="Member Avatar 3"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">
                <span className="font-bold text-gray-900">3,500+</span> traders and builders across North Sumatra
              </p>
            </div>

            {/* 4 Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brand-border/80">
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-[12px] border border-brand-border">
                <div className="text-2xl font-bold text-gray-900">{metricsData.members_count}</div>
                <div className="text-xs font-medium text-gray-500 mt-0.5">Active Members</div>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-[12px] border border-brand-border">
                <div className="text-2xl font-bold text-gray-900">{metricsData.offline_events}</div>
                <div className="text-xs font-medium text-gray-500 mt-0.5">Offline Events</div>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-[12px] border border-brand-border">
                <div className="text-2xl font-bold text-brand-green">{metricsData.free_education_percent}</div>
                <div className="text-xs font-medium text-gray-500 mt-0.5">Free Education</div>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-[12px] border border-brand-border">
                <div className="text-2xl font-bold text-gray-900">{metricsData.global_partners}</div>
                <div className="text-xs font-medium text-gray-500 mt-0.5">Global Partners</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-elevated border border-brand-border bg-white group">
              <img
                src="/images/hero-community.jpg"
                alt="MCC Community Meetup in Medan"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Floating Recap Video Pill */}
              <div className="absolute bottom-6 left-6 right-6">
                <button
                  onClick={onOpenVideo}
                  className="w-full flex items-center justify-between gap-3 bg-white/95 hover:bg-white backdrop-blur-md p-3.5 rounded-[14px] shadow-lg border border-white/40 transition-all duration-200 group/btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 shadow-sm group-hover/btn:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-gray-900">Watch Medan Meetup Recap</div>
                      <div className="text-[11px] text-gray-500">Video Highlights & Documentation (1:45)</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-green px-2.5 py-1 bg-brand-green/10 rounded-md">
                    Play
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
