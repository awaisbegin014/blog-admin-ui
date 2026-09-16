import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, PhoneCall, CheckCircle2 } from 'lucide-react';
import ContactForm from './ContactForm';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

const promises = ['Free, no-obligation estimate', 'Custom plan for your goals', 'Direct line to our team'];

// "Get a Free Quote" dialog opened from the navbar and footer. Closes on Esc, backdrop click or the X.
// One rich dark brand panel in both themes: headline on the left, white form fields on the right.
const QuoteModal: React.FC<QuoteModalProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-md animate-quote-fade"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg md:max-w-5xl animate-quote-pop"
      >
        {/* Floating close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-yellow-400 text-gray-950 shadow-lg shadow-black/40 ring-4 ring-gray-950 hover:scale-110 transition-transform duration-300"
        >
          <X className="h-5 w-5" strokeWidth={2.75} />
        </button>

        <div className="relative max-h-[calc(100vh-2rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl bg-gray-950 ring-1 ring-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)]">
          {/* Brand backdrop: warm yellow glows, a soft ring and a faint dot texture */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden="true">
            <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-[110px]" />
            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-yellow-400/15 blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[40px] border-primary/10" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
            />
          </div>

          <div className="relative grid md:grid-cols-[5fr_7fr] gap-6 md:gap-10 p-6 sm:p-10 lg:p-12">
            {/* Left: headline */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary ring-1 ring-primary/30">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Free consultation
              </span>

              <h2
                id="quote-modal-title"
                className="mt-4 font-poppins text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.12] text-white dark:text-white"
              >
                It&apos;s Quick <br className="hidden md:block" />
                &amp; <span className="bg-gradient-to-r from-primary via-amber-300 to-yellow-400 bg-clip-text text-transparent">Easy</span>
              </h2>

              <p className="mt-4 hidden sm:block text-sm sm:text-base leading-relaxed text-gray-300">
                Yellow Solutions builds websites, apps and marketing that fit your brand. No templates, no
                nonsense — share your idea and get a tailored plan from our team.
              </p>

              <ul className="mt-6 hidden md:block space-y-2.5">
                {promises.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="tel:+19342035115"
                className="group mt-7 hidden md:inline-flex w-fit items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:ring-primary/50 transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-gray-400">Prefer to talk?</span>
                  <span className="block text-sm font-semibold text-white group-hover:text-primary transition-colors">+1 (934) 203-5115</span>
                </span>
              </a>
            </div>

            {/* Right: form */}
            <div className="flex flex-col justify-center">
              <ContactForm submitLabel="Request a Free Quote" autoFocus />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QuoteModal;
