import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { pricingCategories } from '../data/content';

const Pricing: React.FC = () => {
  const [activeId, setActiveId] = useState(pricingCategories[0].id);
  const active = pricingCategories.find((c) => c.id === activeId) ?? pricingCategories[0];

  return (
    <section id="pricing" className="section-padding bg-white dark:bg-black">
      <div className="container">
        <h2 className="section-title">
          <span className="heading">Simple, Transparent</span> <span className="gradient-text">Pricing</span>
        </h2>
        <p className="section-subtitle">
          Packages for every stage of growth - from your first website to enterprise-scale platforms.
          <br className="hidden sm:block" />
          Every plan can be customized - reach out for a tailored quote.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveId(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeId === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {active.heading}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{active.subheading}</p>
        </div>

        {/* Tier cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
            active.tiers.length === 6
              ? 'lg:grid-cols-3'
              : active.tiers.length === 5
              ? 'lg:grid-cols-5'
              : active.tiers.length === 4
              ? 'lg:grid-cols-4'
              : 'lg:grid-cols-3'
          }`}
        >
          {active.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? 'border-primary bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 shadow-xl shadow-primary/10'
                  : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{tier.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 min-h-[40px]">{tier.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{tier.price}</span>
                {tier.period && <span className="text-gray-500 dark:text-gray-400 text-sm">{tier.period}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center btn ${tier.highlighted ? 'btn-primary' : 'btn-outline'}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
          Prices shown are starting estimates and may vary based on project scope. Contact us for an exact quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
