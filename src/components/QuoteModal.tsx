import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

// "Get a Free Quote" dialog opened from the navbar. Closes on Esc, backdrop click or the X.
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-quote-fade"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[calc(100vh-1.5rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl bg-white dark:bg-gray-950 dark:ring-1 dark:ring-white/10 shadow-2xl animate-quote-pop"
      >
        {/* Header */}
        <div className="relative flex items-start justify-between gap-4 bg-gray-950 px-6 sm:px-7 py-4 border-b border-white/10">
          <div>
            <h2 id="quote-modal-title" className="font-poppins text-lg sm:text-xl font-bold text-white dark:text-white leading-snug">
              Get a Free <span className="text-primary">Quote</span>
            </h2>
            <p className="mt-0.5 text-[13px] text-gray-400 leading-relaxed">
              Tell us about your project and we&apos;ll send a tailored proposal.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 -mr-2 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 sm:px-7 py-5">
          <ContactForm submitLabel="Request a Free Quote" autoFocus />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QuoteModal;
