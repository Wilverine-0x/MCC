import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnerBar } from './components/PartnerBar';
import { ProblemSection } from './components/ProblemSection';
import { GuideSection } from './components/GuideSection';
import { PlanSection } from './components/PlanSection';
import { CTASection } from './components/CTASection';
import { TransformationSection } from './components/TransformationSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PartnerModal } from './components/PartnerModal';
import { EventModal } from './components/EventModal';

export const App: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-brand-canvas text-gray-900 selection:bg-brand-green selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onOpenVideo={() => setIsVideoOpen(true)} />

        {/* 3. Partner Strip */}
        <PartnerBar />

        {/* 4. Section 2: The Problem */}
        <ProblemSection />

        {/* 5. Section 3: The Guide (Events Showcase) */}
        <GuideSection onSelectEvent={(id) => setSelectedEventId(id)} />

        {/* 6. Section 4: The Plan */}
        <PlanSection />

        {/* 7. Section 5: Direct & Transitional CTA */}
        <CTASection onOpenPartnerModal={() => setIsPartnerOpen(true)} />

        {/* 8. Section 7: What Changes When You Join */}
        <TransformationSection />
      </main>

      {/* 9. Modern Clean Footer */}
      <Footer onOpenPartnerModal={() => setIsPartnerOpen(true)} />

      {/* Interactive Modals */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <PartnerModal isOpen={isPartnerOpen} onClose={() => setIsPartnerOpen(false)} />
      <EventModal eventId={selectedEventId} onClose={() => setSelectedEventId(null)} />
    </div>
  );
};

export default App;
