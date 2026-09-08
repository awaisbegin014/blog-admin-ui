import React from 'react';
import { HeartHandshake, Sparkles, RefreshCw, Headset, Clock } from 'lucide-react';
import { whyChooseUs } from '../data/content';

const iconComponents = {
  HeartHandshake,
  Sparkles,
  RefreshCw,
  Headset,
  Clock,
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="section-padding bg-white dark:bg-black">
      <div className="container">
        <h2 className="section-title">
          <span className="heading">Why We're the</span> <span className="gradient-text">Best Choice</span>
        </h2>
        <p className="section-subtitle">
          Five reasons businesses across the US, Germany and beyond trust Yellow Solutions with their growth
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUs.map((item) => {
            const Icon = iconComponents[item.icon as keyof typeof iconComponents];
            return (
              <div
                key={item.title}
                className="card-elegant p-6 text-center flex flex-col items-center hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
