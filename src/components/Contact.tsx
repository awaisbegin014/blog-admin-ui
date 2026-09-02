import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import anime from 'animejs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.contact-section',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              easing: 'easeOutExpo',
              complete: () => {
                anime({
                  targets: ['.contact-info', '.contact-form'],
                  scale: [0.95, 1],
                  opacity: [0, 1],
                  delay: anime.stagger(100),
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData for Google Forms submission
    const googleFormData = new FormData();
    
    // Replace these entry IDs with your actual Google Form entry IDs
    // You can find these by inspecting your Google Form's HTML
    googleFormData.append('entry.1036662758', formData.name);      // Name field entry ID
    googleFormData.append('entry.1211344924', formData.email);     // Email field entry ID  
    googleFormData.append('entry.1305445798', formData.subject);   // Subject field entry ID
    googleFormData.append('entry.1574019631', formData.message);   // Message field entry ID

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
      setFormData({ name: '', email: '', subject: '', message: '' });
      
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
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container contact-section opacity-0" ref={containerRef}>
        <h2 className="section-title">
          <span className="heading">Get in</span> <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Ready to start your next project? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="contact-info bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md opacity-0">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                <span className="heading">Contact Information</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      <span className="heading">Email</span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">info@theyellowsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      <span className="heading">Phone</span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">+1 (201) 210-3607</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      <span className="heading">Address</span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      1225 Cailloux Blvd N<br />
                      Apt. 1103<br />
                      Kerrville, TX 78028
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-white">
                  <span className="heading">Business Hours (US Central Time)</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="contact-form bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md opacity-0">
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
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
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full sm:w-auto group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        <span>Send Message</span>
                        <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;