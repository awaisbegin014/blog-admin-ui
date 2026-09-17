import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { pricingCategories, PricingTier } from '../data/content';
import PackagesRibbon from './ui/PackagesRibbon';
import { Reveal, Stagger, StaggerItem } from './ui/Motion';

// Keep the grid balanced whatever number of tiers a group has
const gridColumns = (count: number) =>
  count === 6
    ? 'max-w-6xl lg:grid-cols-3'
    : count === 5
    ? 'max-w-7xl lg:grid-cols-5'
    : count === 4
    ? 'max-w-6xl lg:grid-cols-4'
    : 'max-w-5xl lg:grid-cols-3';

const TierCard: React.FC<{ tier: PricingTier }> = ({ tier }) => (
  <div
    className="relative h-full flex flex-col justify-between p-5 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-primary/25 hover:border-primary dark:hover:border-primary transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
  >
    {/* Vibrant Orange & Yellow Gradient Hover Effect matching Services section */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {tier.highlighted && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-gray-950 text-[10px] font-extrabold uppercase tracking-wider shadow-sm z-20 transition-all duration-500 group-hover:bg-gray-950 group-hover:text-yellow-400 group-hover:shadow-md">
        Most Popular
      </span>
    )}

    {/* Card Header */}
    <div className="relative z-10 mb-2">
      <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-950 dark:group-hover:text-gray-950 transition-colors duration-500 truncate">
        {tier.name}
      </h4>
      <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-900 font-medium transition-colors duration-500 line-clamp-2 h-[32px] mt-0.5 leading-snug">
        {tier.description}
      </p>
    </div>

    {/* Price block */}
    <div className="relative z-10 mb-3 pb-2.5 border-b border-gray-100 dark:border-gray-800 group-hover:border-black/15 dark:group-hover:border-black/15 transition-colors duration-500">
      {tier.originalPrice && (
        <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 group-hover:text-black/60 dark:group-hover:text-black/60 line-through transition-colors duration-500">
          {tier.originalPrice}
        </div>
      )}
      <div className="flex items-baseline gap-1 mt-0.5">
        <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white group-hover:text-gray-950 dark:group-hover:text-gray-950 tracking-tight transition-colors duration-500">
          {tier.price}
        </span>
        {tier.period && (
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-800 transition-colors duration-500">
            {tier.period}
          </span>
        )}
      </div>
    </div>

    {/* Features List (Compact fixed height with custom scrollbar) */}
    <div className="relative z-10 h-[145px] overflow-y-auto pr-1 mb-4 pricing-feature-list">
      <ul className="space-y-2">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 group-hover:text-gray-950 dark:group-hover:text-gray-950 font-medium transition-colors duration-500 leading-snug"
          >
            <Check className="w-3.5 h-3.5 text-primary group-hover:text-gray-950 dark:group-hover:text-gray-950 mt-0.5 shrink-0 transition-colors duration-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Bottom CTA Button */}
    <a
      href="#contact"
      className={`relative z-10 w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-500 flex items-center justify-center gap-1.5 shadow-sm active:scale-95 ${
        tier.highlighted
          ? 'bg-primary text-gray-950 group-hover:bg-gray-950 group-hover:text-white group-hover:border-gray-950'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary group-hover:bg-gray-950 group-hover:text-white group-hover:border-gray-950'
      }`}
    >
      <span>Get Started</span>
      <svg
        className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

const Pricing: React.FC = () => {
  const [activeId, setActiveId] = useState(pricingCategories[0].id);
  const active = pricingCategories.find((c) => c.id === activeId) ?? pricingCategories[0];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-white dark:bg-black">
      <div className="container">
        {/* Intro: "Our Packages" ribbon + headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-10 lg:gap-16 mb-12 md:mb-20">
          <Reveal direction="right" className="w-full max-w-[280px] sm:max-w-md lg:max-w-lg mx-auto">
            <PackagesRibbon />
          </Reveal>

          <Reveal direction="left" delay={0.3} className="text-center lg:text-left">
            {/* Two-tone accent bar */}
            <div className="flex h-1.5 w-56 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden">
              <span className="w-1/3 bg-gray-950 dark:bg-white" />
              <span className="flex-1 bg-gradient-to-r from-primary via-amber-400 to-yellow-400" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.2] text-gray-900 dark:text-white mb-6">
              Design <span className="text-primary">That Sells.</span> Cost That Fits.
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Professional web design and digital solutions made affordable. Premium quality tailored to your
              budget and growth stage. Every plan can be customized - reach out for a tailored quote.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="btn-shine px-8 py-3.5 rounded-full font-bold bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 shadow-lg shadow-yellow-400/25 hover:brightness-105 hover:scale-105 transition-all duration-500"
              >
                Get a Free Quote
              </a>
              <a
                href="#pricing-plans"
                className="px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wide bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-500"
              >
                Let&apos;s Get Started
              </a>
            </div>
          </Reveal>
        </div>

        {/* Category tabs — "Let's Get Started" scrolls here */}
        <div id="pricing-plans" className="scroll-mt-28">
          <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-500 ${
                  activeId === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-gray-950 shadow-lg shadow-primary/30'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </Reveal>
        </div>

        {/* Heading and cards are re-keyed per category so they animate in again on switch */}
        <Reveal key={`heading-${activeId}`} className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {active.heading}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{active.subheading}</p>
        </Reveal>

        {/* Tier cards */}
        <Stagger
          key={`tiers-${activeId}`}
          stagger={0.07}
          className={`mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 ${gridColumns(active.tiers.length)}`}
        >
          {active.tiers.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <TierCard tier={tier} />
            </StaggerItem>
          ))}
        </Stagger>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
          Prices shown are starting estimates and may vary based on project scope. Contact us for an exact quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
