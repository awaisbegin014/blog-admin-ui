import React from 'react';
import { ArrowRight } from 'lucide-react';

const TaglineCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          From Start-Ups to Enterprises -<br className="hidden sm:block" />
          <span className="text-primary">Our Solutions Scale With You</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
          Whatever stage your business is at, Yellow Solutions builds the technology and marketing engine to get you to the next one.
        </p>
        <a href="#contact" className="btn bg-primary text-white hover:bg-primary/90 group inline-flex">
          <span>Get a Free Quote</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default TaglineCTA;
