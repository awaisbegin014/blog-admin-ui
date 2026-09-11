import React from 'react';
import { platforms, Platform } from '../data/content';

const PlatformCard: React.FC<{ platform: Platform }> = ({ platform }) => (
  // Named group (group/item) so hovering one logo doesn't trigger the outer
  // marquee's `group` hover and animate every logo at once.
  <div className="group/item flex shrink-0 flex-col items-center justify-center gap-4 w-36 sm:w-44 py-2 text-base font-semibold text-gray-700 dark:text-gray-300">
    <img
      src={platform.logo}
      alt={platform.name}
      loading="lazy"
      className={`w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover/item:-translate-y-1 group-hover/item:scale-110 ${
        platform.monoInDark ? 'dark:brightness-0 dark:invert' : ''
      }`}
    />
    <span className="text-center px-2 transition-colors duration-300 group-hover/item:text-primary">{platform.name}</span>
  </div>
);

const PlatformsSection: React.FC = () => {
  // Duplicate the list so the marquee track can loop seamlessly at -50%.
  const track = [...platforms, ...platforms];

  return (
    <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="container">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-12 md:mb-14">
          Technologies &amp; Platforms We Work With
        </p>
      </div>

      <div className="relative group">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />

        <div className="flex w-max gap-8 sm:gap-12 animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((platform, i) => (
            <div
              key={`${platform.name}-${i}`}
              className="animate-[fadeSlide_0.6s_ease-out_both]"
              style={{ animationDelay: `${(i % platforms.length) * 60}ms` }}
            >
              <PlatformCard platform={platform} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
