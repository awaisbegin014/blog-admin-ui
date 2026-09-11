import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, User, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenSlide {
  id: string;
  brand: string;
  tagline: string;
  headline: string;
  ctaText: string;
  navLinks: string[];
  image: string;
  accentColor: string;
}

const screenSlides: ScreenSlide[] = [
  {
    id: 'mntn',
    brand: 'MNTN',
    tagline: 'A HIKING GUIDE',
    headline: 'Be Prepared For The Mountains And Beyond!',
    ctaText: 'scroll down ↓',
    navLinks: ['Equipment', 'About us', 'Blog'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#fbbf24',
  },
  {
    id: 'logan',
    brand: 'LOGAN',
    tagline: 'MICHELIN STAR EXPERIENCE',
    headline: 'California Cuisine in the Heart of the Bay',
    ctaText: 'Reserve Table →',
    navLinks: ['Menu', 'Private Dining', 'Wine List'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#f59e0b',
  },
  {
    id: 'velour',
    brand: 'V E L O U R',
    tagline: 'HAUTE COUTURE STUDIO',
    headline: 'Redefining Modern Haute Couture & Aesthetics',
    ctaText: 'Explore Lookbook →',
    navLinks: ['New Arrivals', 'Runway', 'Boutique'],
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#fb7185',
  },
  {
    id: 'architectural',
    brand: 'NOVA ARCH',
    tagline: 'AWARD-WINNING SPACES',
    headline: 'Bespoke Architectural Masterpieces Across The Globe',
    ctaText: 'View Portfolio →',
    navLinks: ['Residential', 'Commercial', 'Awards'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#38bdf8',
  },
  {
    id: 'datapulse',
    brand: 'DATAPULSE',
    tagline: 'NEXT-GEN INTELLIGENCE',
    headline: 'Real-Time Enterprise Telemetry & Cloud Analytics',
    ctaText: 'Launch Console →',
    navLinks: ['Platform', 'Solutions', 'Docs'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#34d399',
  },
];

const MasteryAwards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % screenSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + screenSlides.length) % screenSlides.length);
  }, []);

  // Automatic sliding timer (transitions smoothly every 3.8s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3800);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Trigger contact form pop-up from below
      window.dispatchEvent(new CustomEvent('trigger-contact-popup'));
      setTimeout(() => {
        const nameInput = contactSection.querySelector('input[name="name"]') as HTMLInputElement | null;
        if (nameInput) nameInput.focus();
      }, 700);
    }
  };

  return (
    <section
      id="mastery-awards"
      className="relative py-24 sm:py-28 lg:py-36 bg-gradient-to-r from-[#070a14] via-[#130d0e] to-[#6d2508] text-white overflow-hidden"
    >
      {/* ─── Theme Ambient Glows (Orange / Amber / Warm Flame) ─── */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-[160px] pointer-events-none" />
      <div className="absolute -right-20 top-0 bottom-0 w-[55%] bg-gradient-to-l from-[#ea580c]/30 via-[#c2410c]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-16 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-primary via-secondary to-amber-500 opacity-45 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[480px] h-[480px] rounded-full bg-amber-400/20 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-primary/10 blur-[180px] pointer-events-none" />

      {/* ─── Floating Background Website Wireframe Pages (Atmospheric Depth) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* 1. Left Card: Mobile/Tablet Restaurant Showcase (tilted -12deg) */}
        <div className="absolute -left-12 sm:left-4 top-10 w-[300px] sm:w-[380px] aspect-[9/14] rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-[2px] p-6 transform -rotate-12 opacity-25 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <span className="font-serif italic text-sm text-white/70">Logan</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Welcome to</p>
          <h4 className="font-serif text-lg text-white font-bold leading-tight mb-3">
            California Cuisine in the Heart of the Bay
          </h4>
          <div className="w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-amber-500/20 to-transparent border border-white/10 mb-4 flex items-center justify-center">
            <span className="text-[10px] text-white/40 italic">Fresh Seasonal Menu</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 bg-white/20 rounded" />
            <div className="h-2 w-1/2 bg-white/15 rounded" />
          </div>
        </div>

        {/* 2. Center/Right Card: Desktop Menu Layout behind the laptop (tilted +8deg) */}
        <div className="absolute right-4 sm:right-16 -top-8 w-[380px] sm:w-[480px] aspect-[4/3] rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-[2px] p-6 sm:p-8 transform rotate-8 opacity-30 shadow-2xl">
          <div className="text-center mb-6">
            <h4 className="text-xl sm:text-2xl font-serif text-white/90 font-bold mb-2">
              What We&apos;re Serving
            </h4>
            <p className="text-[11px] text-white/60 max-w-xs mx-auto leading-relaxed">
              We will create a custom menu and proposal that is personalized to your tastes. Explore our catering service options below.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10">
              <div className="w-full h-16 rounded-lg bg-amber-500/20 mb-2" />
              <div className="h-2.5 w-20 bg-white/40 rounded mb-1" />
              <div className="h-2 w-12 bg-primary/50 rounded" />
            </div>
            <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10">
              <div className="w-full h-16 rounded-lg bg-rose-500/20 mb-2" />
              <div className="h-2.5 w-20 bg-white/40 rounded mb-1" />
              <div className="h-2 w-12 bg-primary/50 rounded" />
            </div>
          </div>
        </div>

        {/* 3. Bottom Dish Showcase Card (tilted -5deg) */}
        <div className="absolute right-1/4 -bottom-16 w-[340px] sm:w-[420px] h-[220px] rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-[2px] p-6 transform -rotate-5 opacity-25 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/30 to-primary/20 border border-white/20 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">Fresh &amp; Delicious</p>
              <h5 className="font-serif text-base text-white font-bold leading-snug">
                Artisan Crafted Culinary Experiences
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Content Grid ─── */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ─── Left Column: Headline, Copy & Action ─── */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold text-white leading-[1.12] mb-6 tracking-tight drop-shadow-sm">
              Mastery Proven <br />
              Through Multiple <br />
              Awards
            </h2>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              Our team is adept at designing websites that guide, convert, and sell. Today, our web design agency is among the best companies in the world, having multiple awards to its name. We are proud that we have always been successful in what we wanted.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={handleGetStarted}
                className="group inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-4 rounded-full bg-white text-[#0f2444] font-bold text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:bg-primary hover:text-white hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Let&apos;s Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ─── Right Column: MacBook Pro Mockup with Auto-Sliding Screens ─── */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className="group relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Laptop Screen Lid */}
              <div className="relative rounded-t-[18px] sm:rounded-t-[20px] bg-[#0d0e12] p-2 sm:p-2.5 border border-[#3a3c44] border-b-0 shadow-2xl">
                {/* Webcam dot */}
                <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1e2025] ring-1 ring-white/10 z-30" />

                {/* Screen (16:10) with sliding pages */}
                <div className="relative w-full aspect-[16/10] rounded-[8px] sm:rounded-[10px] overflow-hidden bg-black shadow-inner">
                  {screenSlides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    const isPrev = (index === (currentSlide - 1 + screenSlides.length) % screenSlides.length);

                    return (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          isActive
                            ? 'translate-x-0 opacity-100 scale-100 z-10'
                            : isPrev
                            ? '-translate-x-full opacity-0 scale-95 z-0 pointer-events-none'
                            : 'translate-x-full opacity-0 scale-95 z-0 pointer-events-none'
                        }`}
                      >
                        {/* Slide Background Image */}
                        <img
                          src={slide.image}
                          alt={slide.headline}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" />

                        {/* UI Header */}
                        <div className="relative z-10 flex items-center justify-between px-3 sm:px-4 py-2 text-[8.5px] sm:text-[10px] text-white font-medium border-b border-white/10 backdrop-blur-[2px]">
                          <span className="font-extrabold tracking-widest text-[10px] sm:text-[12px]">
                            {slide.brand}
                          </span>
                          <div className="flex items-center gap-2.5 sm:gap-4 text-white/85 text-[7.5px] sm:text-[9px]">
                            {slide.navLinks.map((link) => (
                              <span key={link} className="hover:text-amber-300 transition-colors cursor-pointer">
                                {link}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-[7.5px] sm:text-[9px] text-white/90">
                            <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span>Account</span>
                          </div>
                        </div>

                        {/* Main Slide Content */}
                        <div className="relative z-10 h-[calc(100%-34px)] flex flex-col items-center justify-center text-center px-4 text-white select-none">
                          {/* Accent Tagline */}
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <span className="w-4 sm:w-6 h-[1.5px]" style={{ backgroundColor: slide.accentColor }} />
                            <span
                              className="text-[7px] sm:text-[8.5px] font-bold tracking-[0.25em] uppercase"
                              style={{ color: slide.accentColor }}
                            >
                              {slide.tagline}
                            </span>
                          </div>

                          {/* Headline */}
                          <h3 className="font-serif italic text-sm sm:text-lg md:text-xl lg:text-2xl font-normal leading-tight text-white max-w-[88%] drop-shadow-md mb-2 sm:mb-3">
                            {slide.headline}
                          </h3>

                          {/* Action Cue */}
                          <span className="text-[7px] sm:text-[8px] text-white/80 tracking-wider">
                            {slide.ctaText}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* ─── Navigation Arrows (Visible on Hover) ─── */}
                  <button
                    onClick={prevSlide}
                    aria-label="Previous screen"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-black/90 hover:scale-110 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next screen"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white/90 hover:bg-black/90 hover:scale-110 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>

                  {/* ─── Slide Indicator Dots ─── */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                    {screenSlides.map((slide, i) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          i === currentSlide
                            ? 'w-4 sm:w-5 h-1 bg-amber-400'
                            : 'w-1 sm:w-1.5 h-1 bg-white/40 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Laptop Lower Chassis / Base */}
              <div className="relative -mt-[1px] h-3.5 sm:h-4 w-full bg-gradient-to-b from-[#b4b7c0] via-[#858892] to-[#51545e] rounded-b-md shadow-2xl flex items-start justify-center">
                {/* Thumb Opening Notch */}
                <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#2c2e35] rounded-b-md" />
              </div>

              {/* Bottom Edge Reflection Lip */}
              <div className="mx-auto w-[104%] -mt-[2px] h-1 bg-gradient-to-r from-transparent via-[#8e929c] to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasteryAwards;
