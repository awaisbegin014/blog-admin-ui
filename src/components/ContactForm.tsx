import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Search, ArrowRight, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { countries, defaultCountry, Country } from '../data/countries';
import { services } from '../data/content';

interface ContactFormProps {
  /** Optional heading shown above the fields */
  title?: React.ReactNode;
  submitLabel?: string;
  /** Focus the name field on mount (used by the quote modal) */
  autoFocus?: boolean;
}

const OTHER_SERVICE = 'Other / Not sure yet';

// Shared field styles so every control lines up
const fieldClass =
  'w-full h-11 rounded-lg bg-gray-50 border border-gray-200 px-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors';
const labelClass = 'block mb-1.5 text-[13px] font-medium text-gray-700 dark:text-gray-200';

const Required = () => <span className="text-primary ml-0.5" aria-hidden="true">*</span>;

// Shared lead form — used by the Contact section and the "Get a Free Quote" modal.
// Submissions go to the same Google Form either way.
const ContactForm: React.FC<ContactFormProps> = ({ title, submitLabel = 'Submit', autoFocus = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  // Unique per instance — the Contact section and the quote modal can be on the page together
  const uid = useId();
  const fid = (name: string) => `${uid}-${name}`;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    // The Google Form has no service field, so the chosen service leads the description
    const description = formData.service
      ? `Service: ${formData.service}\n\n${formData.message}`
      : formData.message;

    // Create FormData for Google Forms submission
    const googleFormData = new FormData();

    // Replace these entry IDs with your actual Google Form entry IDs
    // You can find these by inspecting your Google Form's HTML
    googleFormData.append('entry.1036662758', formData.name);    // Name field entry ID
    googleFormData.append('entry.1211344924', formData.email);   // Email field entry ID
    googleFormData.append('entry.1305445798', formData.phone ? `${selectedCountry.dial} ${formData.phone}` : ''); // Phone field entry ID
    googleFormData.append('entry.1574019631', description);      // Description field entry ID

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
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (submitted) {
    return (
      <div className="py-8 px-4 text-center" role="status">
        <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-500/15 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Thank you — we&apos;ve received your request
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
          A member of our team will review your project details and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <>
      {title && (
        <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-5">
          {title}
        </h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={fid('name')} className={labelClass}>
              Full name<Required />
            </label>
            <input
              id={fid('name')}
              type="text"
              name="name"
              autoComplete="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              autoFocus={autoFocus}
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor={fid('email')} className={labelClass}>
              Work email<Required />
            </label>
            <input
              id={fid('email')}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={fid('phone')} className={labelClass}>
              Phone number
            </label>
            <div className="flex items-stretch h-11 rounded-lg bg-gray-50 border border-gray-200 focus-within:bg-white dark:focus-within:bg-gray-900 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-colors">
              <div className="relative shrink-0" ref={countryDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCountryOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isCountryOpen}
                  aria-label={`Country code ${selectedCountry.dial}`}
                  className="h-full flex items-center gap-1 pl-3 pr-2 border-r border-gray-200 text-sm text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                >
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
                id={fid('phone')}
                type="tel"
                name="phone"
                autoComplete="tel-national"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 min-w-0 px-3 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor={fid('service')} className={labelClass}>
              Service you&apos;re interested in
            </label>
            <div className="relative">
              <select
                id={fid('service')}
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${fieldClass} appearance-none pr-9 cursor-pointer dark:[color-scheme:dark] ${formData.service ? '' : '!text-gray-400'}`}
              >
                <option value="" disabled>Select a service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title} className="text-gray-900 dark:text-white">{s.title}</option>
                ))}
                <option value={OTHER_SERVICE} className="text-gray-900 dark:text-white">{OTHER_SERVICE}</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor={fid('message')} className={labelClass}>
            Project details<Required />
          </label>
          <textarea
            id={fid('message')}
            name="message"
            placeholder="Briefly describe your project, goals and timeline"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className={`${fieldClass} h-auto py-2.5 resize-none leading-relaxed`}
            required
          ></textarea>
        </div>

        {error && (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 px-3.5 py-2.5 text-sm text-red-700 dark:text-red-300" role="alert">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>We couldn&apos;t send your request. Please check your connection and try again, or call us directly.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-shine group w-full h-12 text-[15px] rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 hover:brightness-105 hover:shadow-xl shadow-lg shadow-yellow-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-gray-950"
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
            </>
          ) : (
            <>
              {submitLabel}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <Lock className="w-3.5 h-3.5" />
          Your information is kept confidential and never shared.
        </p>
      </form>
    </>
  );
};

export default ContactForm;
