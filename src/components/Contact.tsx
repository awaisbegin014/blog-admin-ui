import React from 'react';
import ContactForm from './ContactForm';
import { Reveal } from './ui/Motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative bg-white dark:bg-gray-950">
      {/* Dark brand-tinted band behind the headline, sized to fit it (not the taller form card) */}
      <div className="absolute inset-x-0 top-0 h-[300px] sm:h-[320px] lg:h-[340px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary via-amber-400 to-yellow-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-yellow-400 via-amber-400 to-primary opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Left: headline */}
          <Reveal direction="right" className="text-white">
            <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold mb-5 leading-[1.1] text-white">
              You&apos;ve Got <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
              Share a few details about what you need and our team will get back to you with ideas, next steps and a free estimate.
            </p>
          </Reveal>

          {/* Right: raised dark brand card (same look as the quote modal) — taller than the band, so it pops out below it */}
          <Reveal delay={0.3} className="relative w-full lg:max-w-[540px] lg:ml-auto overflow-hidden rounded-3xl bg-gray-950 ring-1 ring-primary/40 shadow-2xl shadow-black/30 p-6 sm:p-8">
            <div className="pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full bg-primary/25 blur-[90px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-[100px]" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
              aria-hidden="true"
            />
            <div className="relative">
              <ContactForm title={<>Tell Us About Your <span className="gradient-text">Project</span></>} submitLabel="Send Message" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
