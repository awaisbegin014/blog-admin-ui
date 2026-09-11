import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { pricingCategories } from '../data/content';

// Plan featured in the card — pulled from the pricing data so it never drifts
// from what the pricing section shows.
const webTiers = pricingCategories.find((c) => c.id === 'web')?.tiers ?? pricingCategories[0].tiers;
const featuredTier = webTiers.find((t) => t.name === 'Enterprise Web Design') ?? webTiers[webTiers.length - 1];

const TaglineCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f5781e] via-[#f99820] to-[#fcc319] py-20 md:py-24">
      {/* Soft light waves + glows for depth */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M-100 520 C 200 380, 420 700, 760 560 S 1300 380, 1560 520 L 1560 800 L -100 800 Z" fill="white" opacity="0.12" />
        <path d="M-100 620 C 260 500, 520 780, 860 650 S 1300 520, 1560 640 L 1560 800 L -100 800 Z" fill="white" opacity="0.1" />
      </svg>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[28rem] h-[28rem] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: headline + copy. Headings need dark:text-gray-950 — the base
            h1-h6 style turns headings white in dark mode, but this section
            stays orange in both themes. */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-950 dark:text-gray-950 mb-6">
            From Start-Ups to Enterprises - Our Solutions Scale With You
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-900 max-w-2xl mb-8">
            Whether you're launching your first product or running an established company, we design and
            build digital solutions that grow with you — responsive websites, high-performance apps and
            marketing tailored to your goals at every stage. Get scalable, future-ready work that keeps up
            with your business.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-950 text-white font-semibold shadow-xl hover:bg-black hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right: featured plan card */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border-2 border-gray-950/80 bg-white/10 backdrop-blur-sm p-7 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-gray-950 hover:bg-white/25 hover:shadow-2xl hover:shadow-black/30 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <h3 className="text-2xl font-bold text-gray-950 dark:text-gray-950">{featuredTier.name}</h3>
            {featuredTier.originalPrice && (
              <p className="mt-1 text-sm font-semibold text-gray-950/60 line-through">{featuredTier.originalPrice}</p>
            )}
            <p className="text-3xl font-extrabold tracking-tight text-gray-950">
              {featuredTier.price}
              {featuredTier.period && <span className="ml-1 text-sm font-medium">{featuredTier.period}</span>}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-900">{featuredTier.description}</p>

            <ul className="mt-5 h-40 overflow-y-auto pr-2 space-y-2.5 pricing-feature-list">
              {featuredTier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-gray-950">
                  <CheckCircle2 className="w-5 h-5 shrink-0 fill-gray-950 stroke-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center">
              <a
                href="#contact"
                className="px-12 py-3.5 rounded-full bg-white text-gray-950 font-bold uppercase tracking-wide shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Order Now
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 divide-x divide-gray-950/30 text-sm">
              <div className="pr-4">
                <p className="font-semibold text-gray-950">Share Your Idea?</p>
                <a href="tel:+12012103607" className="font-bold text-gray-950 hover:underline">
                  +1 (201) 210-3607
                </a>
              </div>
              <div className="pl-4 text-right">
                <p className="font-semibold text-gray-950">Want to Discuss?</p>
                <a href="#contact" className="font-bold text-gray-950 hover:underline">
                  Send Us a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaglineCTA;
