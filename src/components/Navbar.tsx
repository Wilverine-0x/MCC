import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo-mcc.jpg"
            alt="Medan Crypto Community Logo"
            className="w-10 h-10 rounded-lg object-cover border border-brand-border group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 leading-tight tracking-tight">MCC</span>
            <span className="text-[11px] font-medium text-gray-500 leading-none">Medan Crypto Community</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#education" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Education</a>
          <a href="#sports" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Sports Club</a>
          <a href="#events" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Offline Events</a>
          <a href="#partners" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">For Partners</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://t.me/MedanCryptoCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-semibold px-5 py-2.5 rounded-[10px] shadow-sm hover:shadow transition-all duration-200"
          >
            <span>Join Community</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-brand-border bg-white px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-gray-700">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              About
            </a>
            <a
              href="#education"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Education
            </a>
            <a
              href="#sports"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sports Club
            </a>
            <a
              href="#events"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Offline Events
            </a>
            <a
              href="#partners"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              For Partners
            </a>
          </div>
          <div className="pt-2">
            <a
              href="https://t.me/MedanCryptoCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-semibold py-3 rounded-[10px] shadow-sm"
            >
              <span>Join Community</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
