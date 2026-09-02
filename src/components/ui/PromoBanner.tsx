import React, { useEffect, useCallback } from 'react';
import { X, Zap, Globe, TrendingUp, Camera, Check } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ── Types ─────────────────────────────────────────────────────────────────────
interface PromoBannerProps {
  onClose: () => void;
}

// ── Pricing Data (Global USD) ──────────────────────────────────────────────────
const packages = [
  {
    id: 'web',
    title: 'Website Development',
    icon: Globe,
    iconBg: 'bg-amber-400/10 text-amber-400',
    features: [
      'Custom Responsive Design',
      'SEO Optimized Structure',
      'Mobile First Approach',
      '1 Month Free Support',
    ],
    originalPrice: '$2,999',
    discountedPrice: '$1,499',
    priceSuffix: '',
    isPopular: false,
  },
  {
    id: 'seo',
    title: 'SEO Dominance',
    icon: TrendingUp,
    iconBg: 'bg-primary/10 text-primary',
    features: [
      'Complete SEO Audit',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Monthly Reporting',
    ],
    originalPrice: '$999',
    discountedPrice: '$499',
    priceSuffix: '/mo',
    isPopular: true,
  },
  {
    id: 'social',
    title: 'Social Media Growth',
    icon: Camera,
    iconBg: 'bg-rose-500/10 text-rose-500',
    features: [
      '15 Posts per Month',
      '4 Reels per Month',
      'Content Strategy',
      'Engagement Management',
    ],
    originalPrice: '$799',
    discountedPrice: '$399',
    priceSuffix: '/mo',
    isPopular: false,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const PromoBanner: React.FC<PromoBannerProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const handleCTA = () => {
    onClose();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 backdrop-blur-xl bg-black/40"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
      >
        {/* ── Modal Shell ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl max-h-[90vh] md:max-h-fit overflow-y-auto overflow-x-hidden md:overflow-visible rounded-[2rem] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] bg-[#0A0A0B]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Static noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* Ambient Glows */}
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* ── Close Button ──────────────────────────────────────────── */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10 p-6 md:p-8">
            {/* ── Header ────────────────────────────────────────────────── */}
            <div className="flex flex-col items-center text-center mb-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3"
              >
                <div className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-[9px] font-black tracking-[0.25em] uppercase">
                  Startup Launch Offer
                </span>
                <span className="text-white/20">|</span>
                <span className="text-white/60 text-[9px] font-bold uppercase tracking-wider">
                  Ends in 48h
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-black tracking-tighter mb-1"
              >
                <span className="text-white">50% FLAT</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">OFF</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-sm md:text-base font-medium tracking-tight max-w-lg"
              >
                Build your legacy with our premium solutions at half the price.
              </motion.p>
            </div>

            {/* ── Grid ──────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className={`group relative rounded-2xl p-5 border transition-all duration-500 ${
                    pkg.isPopular
                      ? 'border-primary/30 bg-primary/[0.03]'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-5 px-3 py-1 bg-primary rounded-full shadow-lg shadow-primary/20">
                      <span className="text-white text-[8px] font-black tracking-widest uppercase italic">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col h-full mt-1">
                    {/* Icon & Title Group */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${pkg.iconBg}`}>
                        <pkg.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-white font-bold text-base leading-tight group-hover:text-amber-400 transition-colors">
                        {pkg.title.split(' ')[0]} <span className="opacity-50">{pkg.title.split(' ').slice(1).join(' ')}</span>
                      </h3>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-gray-400 text-[13px] font-medium leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-white/5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-600 line-through text-[10px] font-bold">{pkg.originalPrice}</span>
                        <span className="text-white text-2xl font-black tracking-tighter">
                          {pkg.discountedPrice}
                          <span className="text-xs font-bold text-gray-500 ml-0.5">{pkg.priceSuffix}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Footer ────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <button
                onClick={handleCTA}
                className="group relative flex items-center justify-center gap-2 w-full md:w-auto md:min-w-[340px] px-8 py-3.5 bg-primary rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Zap className="relative z-10 w-4 h-4 text-white fill-white animate-pulse" />
                <span className="relative z-10 text-white font-black text-base tracking-tight uppercase">
                  Claim 50% Flat Discount
                </span>
              </button>

              <div className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">
                Limited slots available. Offer ends soon! 🔥
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBanner;
