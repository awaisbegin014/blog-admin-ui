import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight, Search } from 'lucide-react';
import anime from 'animejs';
import { countries, defaultCountry, Country } from '../data/countries';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dial.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Close the country dropdown when clicking outside it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setIsCountryOpen(false);
        setCountrySearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData for Google Forms submission
    const googleFormData = new FormData();

    // Replace these entry IDs with your actual Google Form entry IDs
    // You can find these by inspecting your Google Form's HTML
    googleFormData.append('entry.1036662758', formData.name);    // Name field entry ID
    googleFormData.append('entry.1211344924', formData.email);   // Email field entry ID
    googleFormData.append('entry.1305445798', formData.phone ? `${selectedCountry.dial} ${formData.phone}` : ''); // Phone field entry ID
    googleFormData.append('entry.1574019631', formData.message); // Description field entry ID

    try {
      // Replace this URL with your actual Google Form URL
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdZfNLaKKp1IYRGWFDT2Bb5nMrNPONm83MhB371wnPCciKWNw/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: googleFormData,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);

    } catch (error) {
      console.error('Form submission failed:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative bg-white dark:bg-gray-950">
      {/* Black band behind the headline, tinted with the navbar's yellow-marketing gradient */}
      <div className="absolute inset-x-0 top-0 h-[360px] sm:h-[400px] lg:h-[420px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary via-amber-400 to-yellow-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-yellow-400 via-amber-400 to-primary opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="container contact-section opacity-0 relative py-16 lg:py-20" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Left: headline */}
          <div className="contact-headline opacity-0 text-white lg:pt-4">
            <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold mb-5 leading-[1.1] text-white">
              You&apos;ve Got <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
              It is easier. It is free. Fill out the form and discuss your queries with us. Our team is always ready to help you move forward.
            </p>
          </div>

          {/* Right: card with form */}
          <div className="contact-form opacity-0 rounded-2xl bg-white dark:bg-gray-900 border-2 sm:border-[3px] border-yellow-400 shadow-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-600 dark:text-green-300">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold mb-6">
                  It's Quick &amp; <span className="gradient-text">Easy</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="flex items-stretch rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-colors">
                    <div className="relative shrink-0" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={isCountryOpen}
                        className="h-full flex items-center gap-1.5 pl-4 pr-3 border-r border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        <span className="text-xs font-bold tracking-wide px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                          {selectedCountry.code}
                        </span>
                        <span className="font-medium">{selectedCountry.dial}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isCountryOpen && (
                        <div className="absolute z-20 top-full left-0 mt-2 w-64 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
                          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 dark:border-gray-700">
                            <Search className="w-4 h-4 text-gray-400 shrink-0" />
                            <input
                              type="text"
                              autoFocus
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country or code"
                              className="w-full bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                            />
                          </div>
                          <ul role="listbox" className="max-h-60 overflow-y-auto py-1">
                            {filteredCountries.length === 0 ? (
                              <li className="px-4 py-3 text-sm text-gray-400">No countries found</li>
                            ) : (
                              filteredCountries.map((country) => (
                                <li key={country.code}>
                                  <button
                                    type="button"
                                    role="option"
                                    aria-selected={country.code === selectedCountry.code}
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setIsCountryOpen(false);
                                      setCountrySearch('');
                                    }}
                                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left hover:bg-primary/10 hover:text-primary transition-colors ${
                                      country.code === selectedCountry.code
                                        ? 'text-primary font-semibold bg-primary/5'
                                        : 'text-gray-700 dark:text-gray-300'
                                    }`}
                                  >
                                    <span className="w-8 shrink-0 text-xs font-bold tracking-wide text-gray-500 dark:text-gray-400">
                                      {country.code}
                                    </span>
                                    <span className="flex-1 truncate">{country.name}</span>
                                    <span className="font-medium text-gray-500 dark:text-gray-400">{country.dial}</span>
                                  </button>
                                </li>
                              ))
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(021) 23456789"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 min-w-0 px-4 py-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Enter a Brief Description"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg rounded-xl font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 hover:brightness-105 shadow-lg shadow-yellow-400/20 group disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-950"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <span>Submit</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
