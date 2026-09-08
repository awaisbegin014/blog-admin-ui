import React, { useState } from 'react';
import { projects } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title">
          <span className="heading">Our</span> <span className="gradient-text">Work</span>
        </h2>
        <p className="section-subtitle">
          A look at the platforms, apps and systems we've shipped for our clients
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="group card-elegant overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all"
                >
                  Start a similar project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
