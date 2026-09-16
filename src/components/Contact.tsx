import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const triggerPopUp = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      // Make section visible
      anime({
        targets: '.contact-section',
        opacity: [0, 1],
        duration: 400,
        easing: 'linear',
      });

      // Headline fades in with subtle slide
      anime({
        targets: '.contact-headline',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        easing: 'easeOutExpo',
      });

      // Form pops up from below with spring bounce
      anime({
        targets: '.contact-form',
        opacity: [0, 1],
        translateY: [180, 0],
        scale: [0.92, 1],
        duration: 950,
        easing: 'cubicBezier(0.18, 0.89, 0.32, 1.15)',
      });
    };

    // Listen for manual trigger from "Let's Get Started" in MasteryAwards
    window.addEventListener('trigger-contact-popup', triggerPopUp);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerPopUp();
            observer.disconnect();
          }
        });
      },
      {
        // Early trigger as visitor approaches or enters the section
        rootMargin: '120px 0px 0px 0px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Also observe mastery-awards section if present so the form pops up as visitor scrolls to it
    const masterySection = document.getElementById('mastery-awards');
    if (masterySection) {
      const masteryObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerPopUp();
              masteryObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      masteryObserver.observe(masterySection);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('trigger-contact-popup', triggerPopUp);
    };
  }, []);

  return (
    <section id="contact" className="relative bg-white dark:bg-gray-950">
      {/* Dark brand-tinted band behind the headline, sized to fit it (not the taller form card) */}
      <div className="absolute inset-x-0 top-0 h-[300px] sm:h-[320px] lg:h-[340px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary via-amber-400 to-yellow-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-yellow-400 via-amber-400 to-primary opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="container contact-section opacity-0 relative py-16 md:py-20" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Left: headline */}
          <div className="contact-headline opacity-0 text-white">
            <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold mb-5 leading-[1.1] text-white">
              You&apos;ve Got <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
              Share a few details about what you need and our team will get back to you with ideas, next steps and a free estimate.
            </p>
          </div>

          {/* Right: raised white card — taller than the band, so it pops out below it */}
          <div className="contact-form opacity-0 relative w-full lg:max-w-[540px] lg:ml-auto rounded-3xl bg-white dark:bg-gray-950 border-2 sm:border-[3px] border-yellow-400 shadow-2xl p-5 sm:p-6">
            <ContactForm title={<>Tell Us About Your <span className="gradient-text">Project</span></>} submitLabel="Send Message" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
