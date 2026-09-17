import React, { useRef, useEffect } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';

const Offices: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.office-hero-card',
              opacity: [0, 1],
              translateY: [60, 0],
              delay: anime.stagger(150),
              easing: 'easeOutCubic',
              duration: 1300,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="offices" className="bg-white dark:bg-black py-16 md:py-20">
      {/* ── Section heading ────────────────────────────────────────────────── */}
      <div className="container text-center mb-12 md:mb-16">
        <h2 className="section-title">
          <span className="heading">Our</span>{' '}
          <span className="gradient-text">Offices</span>
        </h2>
        <p className="section-subtitle">
          Visit our global locations where innovation meets excellence
        </p>
      </div>

      {/* ── Office cards: Germany (left) · USA (right) ──────────────────────── */}
      <div className="container" ref={cardRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">

          {/* ════════════════ GERMANY ════════════════ */}
          <div
            className="office-hero-card group opacity-0 cursor-pointer h-full"
            onClick={() => navigate('/office/germany')}
          >
            {/* Card shell */}
            <div className="
              flex flex-col h-full
              bg-white dark:bg-gray-900
              rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.5)]
              hover:shadow-2xl
              transition-all duration-500 hover:-translate-y-2
              overflow-hidden border border-gray-100 dark:border-gray-800
              isolate
            ">

              {/* ── Top: image ──────────────────────────────────────────────── */}
              <div className="relative w-full h-44 shrink-0 overflow-hidden rounded-t-3xl">
                <img
                  src="/images/de.jpg"
                  alt="Yellow Solutions Germany HQ"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                {/* German flag accent bar */}
                <div className="absolute top-0 left-0 right-0 flex h-1.5" aria-hidden="true">
                  <span className="flex-1 bg-[#000000]" />
                  <span className="flex-1 bg-[#DD0000]" />
                  <span className="flex-1 bg-[#FFCE00]" />
                </div>

                {/* Country label at bottom of image */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Country</p>
                  <p className="text-white text-xl font-bold">Germany</p>
                </div>
              </div>

              {/* ── Bottom: content ────────────────────────────────────────── */}
              <div className="flex flex-col p-6 flex-1">

                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                    Global Operations
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
                  European<br />
                  <span className="gradient-text">Operations</span>
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Musterstraße 3, Berlin, Germany
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 dark:bg-gray-700 mb-4" />

                {/* City chip */}
                <div className="mb-5">
                  <span className="inline-flex items-baseline gap-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 px-3.5 py-2">
                    <span className="text-gray-900 dark:text-white font-bold text-sm">Berlin</span>
                    <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">City</span>
                  </span>
                </div>

                {/* CTA button */}
                <div className="mt-auto">
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate('/office/germany'); }}
                    className="
                      inline-flex items-center gap-3
                      px-6 py-3 rounded-2xl
                      bg-gradient-to-r from-primary to-yellow-500
                      text-white font-bold text-sm
                      shadow-lg shadow-primary/30
                      hover:shadow-xl hover:shadow-primary/40
                      hover:scale-[1.03]
                      active:scale-[0.98]
                      transition-all duration-300
                    "
                  >
                    Explore Office
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════ UNITED STATES ════════════════ */}
          <div
            className="office-hero-card group opacity-0 cursor-pointer h-full"
            onClick={() => navigate('/office/usa')}
          >
            {/* Card shell */}
            <div className="
              flex flex-col h-full
              bg-white dark:bg-gray-900
              rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.5)]
              hover:shadow-2xl
              transition-all duration-500 hover:-translate-y-2
              overflow-hidden border border-gray-100 dark:border-gray-800
              isolate
            ">

              {/* ── Top: image ──────────────────────────────────────────────── */}
              <div className="relative w-full h-44 shrink-0 overflow-hidden rounded-t-3xl bg-[#3C3B6E]">
                <img
                  src="/images/us-banner.svg"
                  alt="Flag of the United States"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                />
                {/* Gradient overlay — neutral, so the flag keeps its true colours */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                {/* Country label at bottom of image */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Country</p>
                  <p className="text-white text-xl font-bold">United States</p>
                </div>
              </div>

              {/* ── Bottom: content ────────────────────────────────────────── */}
              <div className="flex flex-col p-6 flex-1">

                {/* Eyebrow — US red/white/blue instead of brand yellow */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-px bg-[#B22234]" />
                  <span className="text-[#B22234] text-xs font-bold tracking-[0.2em] uppercase">
                    North American Operations
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
                  American<br />
                  <span className="bg-gradient-to-r from-[#B22234] to-[#3C3B6E] dark:from-[#E4485F] dark:to-[#8C8AD8] bg-clip-text text-transparent">
                    Operations
                  </span>
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#B22234]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#B22234]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      675 Hawkins Road East, Coram, NY 11727
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 dark:bg-gray-700 mb-4" />

                {/* City chip */}
                <div className="mb-5">
                  <span className="inline-flex items-baseline gap-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 px-3.5 py-2">
                    <span className="text-gray-900 dark:text-white font-bold text-sm">Coram, NY</span>
                    <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">City</span>
                  </span>
                </div>

                {/* CTA button — stars & stripes gradient */}
                <div className="mt-auto">
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate('/office/usa'); }}
                    className="
                      inline-flex items-center gap-3
                      px-6 py-3 rounded-2xl
                      bg-gradient-to-r from-primary to-yellow-500
                      text-white font-bold text-sm
                      shadow-lg shadow-primary/30
                      hover:shadow-xl hover:shadow-primary/40
                      hover:scale-[1.03]
                      active:scale-[0.98]
                      transition-all duration-300
                    "
                  >
                    Explore Office
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offices;
