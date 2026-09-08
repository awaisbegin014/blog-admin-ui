import React from 'react';
import { Code2 } from 'lucide-react';
import { platforms } from '../data/content';

const PlatformsSection: React.FC = () => {
  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8">
          Technologies &amp; Platforms We Work With
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {platforms.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors"
            >
              <Code2 className="w-4 h-4 text-primary" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
