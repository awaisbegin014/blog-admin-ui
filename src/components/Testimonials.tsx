import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import anime from 'animejs';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.testimonial-section',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              easing: 'easeOutExpo',
              complete: () => {
                anime({
                  targets: '.testimonial-card',
                  scale: [0.95, 1],
                  opacity: [0, 1],
                  duration: 500,
                  easing: 'easeOutExpo'
                });
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const goToTestimonial = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-gray-300 dark:text-gray-600'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" ref={containerRef} className="section-padding bg-white dark:bg-black">
      <div className="container testimonial-section opacity-0 relative z-10">
        <h2 className="section-title">
          <span className="heading">Client</span> <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="section-subtitle">
          What our clients say about our software solutions and services
        </p>
        
        <div className="relative max-w-4xl mx-auto px-8 md:px-12">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="overflow-hidden py-12">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="testimonial-card bg-gray-50 dark:bg-gray-900 p-8 md:p-10 text-center opacity-0 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 scale-110"></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-md"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-primary/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"></path>
                      </svg>
                      
                      <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                      
                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <span className="heading">{testimonial.name}</span>
                      </h4>
                      <p className="text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;