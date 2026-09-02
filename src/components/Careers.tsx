import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';

const positions = [
  'Sales – Cold Calling (Night Shift: 9 PM – 5 AM)'
];

const Careers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.careers-content',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              easing: 'easeOutExpo'
            });
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

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      console.log('Sending form data...');

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdMTRELb-pKjk6OQ_DurqHV1M253SPEo4lvvCnlrFAxcAd8hA/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }
      );

      console.log('Form submitted successfully');
      alert('Application submitted successfully!');
      e.currentTarget.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container careers-content opacity-0" ref={containerRef}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="heading">Join the Team at</span> <span className="gradient-text">Yellow Solutions</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At Yellow Solutions, we're building the future—one line of code at a time. As a forward-thinking software house, 
            we combine cutting-edge technologies, creative problem-solving, and a passion for innovation to deliver 
            exceptional digital solutions. But behind every successful product is a team of talented individuals who 
            make it all possible.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              <span className="heading">Current Openings</span>
            </h2>
            <div className="grid gap-4 mb-8">
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                >
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                    <span className="heading">{position}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              <span className="heading">Apply Now</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="entry.1781500597"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="entry.1640447617"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="entry.297979220"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Position
                </label>
                <select
                  id="position"
                  name="entry.1078004677"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select a position</option>
                  {positions.map((position, index) => (
                    <option key={index} value={position}>{position}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  name="entry.870932133"
                  min="0"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  CV/Resume Drive Link*
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Please upload your resume to Google Drive (make sure the file is accessible via a public or shared link) and paste the link here.
                </p>
                <input
                  type="url"
                  id="resume"
                  name="entry.2040870261"
                  required
                  placeholder="https://drive.google.com/file/d/..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;