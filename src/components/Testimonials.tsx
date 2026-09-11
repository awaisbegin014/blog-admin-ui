import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number>(4);
  const [isPaused, setIsPaused] = useState(false);
  const count = testimonials.length;

  // Responsive card count calculation
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // Triple buffer to support infinite circular sliding
  const allCards = useMemo(() => [...testimonials, ...testimonials, ...testimonials], []);
  const [currentIndex, setCurrentIndex] = useState(count);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isMovingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const cardWidth = 100 / visibleCards;

  const handleNext = useCallback(() => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleTransitionEnd = () => {
    isMovingRef.current = false;

    // Seamless wrap-around without animation jump
    if (currentIndex >= count * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - count);
    } else if (currentIndex < count) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + count);
    }
  };

  // Re-enable transition if it was turned off for a wrap reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Auto-sliding: moves after exactly 1.5 seconds lag
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 1500);
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, handleNext]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const activeDot = ((currentIndex % count) + count) % count;

  const handleGoTo = (targetIdx: number) => {
    if (isMovingRef.current) return;
    const delta = targetIdx - activeDot;
    if (delta !== 0) {
      isMovingRef.current = true;
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + delta);
    }
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-[#f5781e] via-[#f99820] to-[#fcc319] text-gray-950 select-none"
    >
      {/* Ambient background glows for premium depth */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight">
              Proven Results, Real Impact — See Why Fast-Growing Brands Trust Us
            </h2>
          </div>

          {/* Navigation Arrows (matching black circle button style from card) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gray-950 hover:bg-black border border-black/10 text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105 shadow-xl cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gray-950 hover:bg-black border border-black/10 text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105 shadow-xl cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport (pauses when hovering over any card) */}
        <div
          className="overflow-hidden pt-6 pb-6 -mx-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}%)`,
              transition: isTransitioning
                ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {allCards.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="shrink-0 px-3"
                style={{ width: `${cardWidth}%` }}
              >
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="bg-white text-gray-900 rounded-3xl p-7 md:p-8 flex flex-col justify-between relative shadow-none h-full min-h-[260px] md:min-h-[280px] text-center border border-white/60 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Distinctive Quote Badge at Top-Right */}
                  <div className="absolute -top-3.5 right-6 text-gray-950 select-none pointer-events-none z-10">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* 5 Solid Gold Stars */}
                  <div className="flex justify-center items-center gap-1.5 mb-4 text-[#f59e0b]">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < item.rating
                            ? 'fill-[#f59e0b] text-[#f59e0b]'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Quote Text — this card stays white in both themes, so
                      avoid text-gray-600/700/800: index.css lightens those under .dark
                      (and Tailwind copies that override into their dark: variants too) */}
                  <p className="text-gray-900 text-sm md:text-[15px] leading-relaxed text-center font-normal flex-1 flex items-center justify-center">
                    "{item.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="mt-5 pt-3 border-t border-gray-100 flex flex-col items-center">
                    <span className="text-xs font-bold text-gray-900 tracking-wider uppercase">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => handleGoTo(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                dotIdx === activeDot
                  ? 'w-8 bg-gray-950 shadow-md'
                  : 'w-2.5 bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;