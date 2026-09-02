import React, { useRef, useEffect } from 'react';
import { MapPin, ArrowRight, Globe } from 'lucide-react';
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
              easing: 'easeOutExpo',
              duration: 900,
            });
            anime({
              targets: '.office-badge',
              opacity: [0, 1],
              scale: [0.7, 1],
              delay: 400,
              easing: 'easeOutBack',
              duration: 600,
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
    <section id="offices" className="bg-gray-50 dark:bg-gray-900 section-padding">
      {/* ── Section heading ────────────────────────────────────────────────── */}
      <div className="container text-center mb-16">
        <h2 className="section-title">
          <span className="heading">Our</span>{' '}
          <span className="gradient-text">Offices</span>
        </h2>
        <p className="section-subtitle">
          Visit our global locations where innovation meets excellence
        </p>
      </div>

      {/* ── Hero card ──────────────────────────────────────────────────────── */}
      <div className="container" ref={cardRef}>
        <div
          className="office-hero-card group opacity-0 max-w-5xl mx-auto cursor-pointer"
          onClick={() => navigate('/office/germany')}
        >
          {/* Card shell */}
          <div className="
            flex flex-col md:flex-row
            bg-white dark:bg-gray-800
            rounded-3xl shadow-xl hover:shadow-2xl
            transition-all duration-500 hover:-translate-y-2
            overflow-hidden border border-gray-100 dark:border-gray-700
            isolate
          ">

            {/* ── Left: image (40%) ───────────────────────────────────────── */}
            <div className="relative w-full md:w-[40%] h-64 md:h-auto shrink-0 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
              <img
                src="/images/de.jpg"
                alt="Yellow Solutions Germany HQ"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

              {/* HQ badge */}
              <div className="office-badge opacity-0 absolute top-5 left-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/15 border border-white/30">
                  <Globe className="w-3 h-3 text-yellow-400" />
                  <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
                    Headquarters
                  </span>
                </div>
              </div>

              {/* Country label at bottom of image */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Country</p>
                <p className="text-white text-xl font-bold">Germany</p>
              </div>
            </div>

            {/* ── Right: content (60%) ───────────────────────────────────── */}
            <div className="flex flex-col justify-center p-8 md:p-12 flex-1">

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Global Operations
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                European<br />
                <span className="gradient-text">Operations</span>
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 mb-6">
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
              <div className="w-full h-px bg-gray-100 dark:bg-gray-700 mb-6" />

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: 'Berlin', label: 'City' },
                  // { value: 'CET', label: 'Timezone' },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 px-4 py-3">
                    <p className="text-gray-900 dark:text-white font-bold text-lg">{value}</p>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate('/office/germany'); }}
                  className="
                    inline-flex items-center gap-3
                    px-6 py-3.5 rounded-2xl
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
    </section>
  );
};

export default Offices;
