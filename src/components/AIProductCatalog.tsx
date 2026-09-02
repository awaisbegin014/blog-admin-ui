import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Sparkles,
  ChevronDown,
  X,
  Send,
  Mail,
  Phone,
  Linkedin,
  User,
} from 'lucide-react';
import anime from 'animejs';
import { aiProducts, allUseCases, allIndustries, AIProduct } from '../data/aiProducts';

// ── Read More Detail Modal ────────────────────────────────────────────────────
const ReadMoreModal: React.FC<{
  product: AIProduct;
  onClose: () => void;
  onOpenDemo: (product: AIProduct) => void;
}> = ({ product, onClose, onOpenDemo }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-xl bg-black/60"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-gray-700 shadow-2xl bg-[#0f1115]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-6 float-right mr-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          {/* Title & Badge */}
          <div className="flex items-center gap-4 mb-8 pr-12">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              <span className="text-primary">{product.title}</span>
            </h2>
            <span className="shrink-0 px-3 py-1.5 bg-primary/20 text-primary text-sm font-black rounded-lg border border-primary/30">
              {product.useCaseCount}
            </span>
          </div>

          {/* Tags Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Use Cases */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Use Cases</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((uc) => (
                  <span
                    key={uc}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Industries</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              Overview
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed opacity-90">{product.overview}</p>
          </div>

          {/* Detailed Solution */}
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <span className="w-1.5 h-6 bg-secondary rounded-full" />
              Detailed Solution
            </h3>

            <div className="grid grid-cols-1 gap-8">
              {/* Who Values This */}
              <div>
                <h4 className="text-primary font-black text-base mb-3 uppercase tracking-wider">Who Values This?</h4>
                <ul className="space-y-3">
                  {product.detailedSolution.whoValuesThis.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example Use Case */}
              <div>
                <h4 className="text-primary font-black text-base mb-3 uppercase tracking-wider">Example Use Case:</h4>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                    "{product.detailedSolution.exampleUseCase}"
                  </p>
                </div>
              </div>

              {/* How It Works & Value */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-secondary font-black text-base mb-3 uppercase tracking-wider">How It Works:</h4>
                  <ul className="space-y-3">
                    {product.detailedSolution.howItWorks.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-secondary font-black text-base mb-3 uppercase tracking-wider">Value Delivered:</h4>
                  <ul className="space-y-3">
                    {product.detailedSolution.valueDelivered.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                        <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Expert CTA */}
          <button
            onClick={() => { onClose(); onOpenDemo(product); }}
            className="w-full mt-10 py-5 bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/20 text-white font-black rounded-2xl transition-all duration-500 text-lg flex items-center justify-center gap-3 group"
          >
            Connect With an Expert
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Demo Contact Modal ────────────────────────────────────────────────────────
const DemoModal: React.FC<{
  product: AIProduct;
  onClose: () => void;
}> = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: `We are interested in exploring ${product.title} further. Could you provide a demo or additional details on implementation?`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormData = new FormData();
    googleFormData.append('entry.1036662758', formData.name);
    googleFormData.append('entry.1211344924', formData.email);
    googleFormData.append('entry.1305445798', `AI Product Demo: ${product.title}`);
    googleFormData.append('entry.1574019631', formData.message);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdZfNLaKKp1IYRGWFDT2Bb5nMrNPONm83MhB371wnPCciKWNw/formResponse',
        { method: 'POST', mode: 'no-cors', body: googleFormData }
      );
      setSubmitted(true);
      setTimeout(() => { onClose(); }, 3000);
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-xl bg-black/60"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl border border-gray-700 shadow-2xl bg-[#0f1115] max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: Contact Form */}
            <div className="lg:col-span-3 bg-white/5 rounded-3xl p-6 md:p-8 border border-white/5">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Request Received!</h3>
                  <p className="text-gray-400">Our engineers will be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <Send className="w-5 h-5 text-primary" />
                    <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter">Request Product Demo</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    Connect with our technical team for a deep dive into <span className="text-white font-bold">{product.title}</span>.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-all"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          placeholder="Business Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-all"
                          required
                        />
                      </div>
                    </div>
                    <textarea
                      placeholder="Discuss your specific use case..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-5 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-all resize-none"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary hover:bg-primary/95 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 text-sm md:text-base uppercase tracking-widest shadow-xl shadow-primary/10"
                    >
                      {isSubmitting ? 'Processing...' : 'Send Message'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-7">
              <div>
                <h3 className="text-white font-black text-sm mb-6 uppercase tracking-widest text-primary">Direct Assistance</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">info@theyellowsolutions.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">+1 (201) 210-3607</p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/company/theyellowsolutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-bold hover:text-primary transition-colors"
                      >
                        Yellow Solutions Inc.
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Active Support</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Response window: <span className="text-white">2-4 business hours</span>. Request details are automatically encrypted and routed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const AIProductCatalog: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUseCase, setSelectedUseCase] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [readMoreProduct, setReadMoreProduct] = useState<AIProduct | null>(null);
  const [demoProduct, setDemoProduct] = useState<AIProduct | null>(null);

  useEffect(() => {
    anime({
      targets: '.catalog-hero',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      easing: 'easeOutExpo',
    });
    anime({
      targets: '.product-card',
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(80, { start: 400 }),
      duration: 700,
      easing: 'easeOutExpo',
    });
  }, []);

  const handleContactRedirect = useCallback(() => {
    navigate('/');
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, [navigate]);

  const openDemoModal = (product: AIProduct) => {
    setDemoProduct(product);
  };

  // Filtered products
  const filtered = aiProducts.filter((p) => {
    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchUseCase = !selectedUseCase || p.useCases.includes(selectedUseCase);
    const matchIndustry = !selectedIndustry || p.industries.includes(selectedIndustry);
    return matchSearch && matchUseCase && matchIndustry;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24">
      {/* Modals */}
      {readMoreProduct && (
        <ReadMoreModal
          product={readMoreProduct}
          onClose={() => setReadMoreProduct(null)}
          onOpenDemo={openDemoModal}
        />
      )}
      {demoProduct && (
        <DemoModal product={demoProduct} onClose={() => setDemoProduct(null)} />
      )}

      {/* ── Hero Section ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-12 md:py-4 bg-white dark:bg-[#0a0c10] transition-colors duration-500">
        {/* Background Accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-20 dark:opacity-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] opacity-20 dark:opacity-5" />
        </div>

        <div className="container relative z-10 catalog-hero opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                AI <span className="text-primary italic dark:text-white">Solutions</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
                Browse our comprehensive collection of <span className="text-primary font-bold">enterprise-grade AI solutions</span> designed
                to transform your business operations with <span className="text-primary-600 dark:text-primary-400">dedicated support</span>.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => document.querySelector('#catalog-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 bg-primary hover:bg-primary-600 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5"
                >
                  View All Solutions
                </button>
                <button
                  onClick={handleContactRedirect}
                  className="px-8 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all transform hover:-translate-y-0.5"
                >
                  Request Custom Solution
                </button>
              </div>

              {/* Status Points */}
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400" />
                  <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">24/7 Expert Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-primary-300" />
                  <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Fully Customizable</span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative group max-w-lg lg:ml-auto">
              <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20">
                <img
                  src="/images/ai-hero.png"
                  alt="AI Solutions Visualization"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  // @ts-ignore
                  fetchpriority="high"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-[#0a0c10] via-transparent to-transparent opacity-40 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ──────────────────────────────────────────────────────── */}
      <section className="sticky top-[80px] md:top-[90px] z-30 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-y border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search AI products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            <div className="relative">
              <select
                value={selectedUseCase}
                onChange={(e) => setSelectedUseCase(e.target.value)}
                className="appearance-none w-full md:w-56 px-4 py-2.5 pr-9 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
              >
                <option value="">All Use Cases</option>
                {allUseCases.map((uc) => (
                  <option key={uc} value={uc}>{uc}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="appearance-none w-full md:w-56 px-4 py-2.5 pr-9 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
              >
                <option value="">All Industries</option>
                {allIndustries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────────────────────────── */}
      <section id="catalog-grid" className="section-padding">
        <div className="container">
          <h2 className="section-title">
            <span className="heading">Our AI</span>{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            {filtered.length === aiProducts.length
              ? `Showing all ${aiProducts.length} products`
              : `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No products found</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Try adjusting your filters or search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedUseCase(''); setSelectedIndustry(''); }}
                className="btn btn-primary px-6 py-2.5 text-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="product-card group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                      <span className="heading">{product.title}</span>
                    </h3>

                    {/* Use Case Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {product.useCases.slice(0, 3).map((uc) => (
                        <span
                          key={uc}
                          className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800"
                        >
                          {uc}
                        </span>
                      ))}
                      {product.useCases.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                          +{product.useCases.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Industry Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.industries.slice(0, 3).map((ind) => (
                        <span
                          key={ind}
                          className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                        >
                          {ind}
                        </span>
                      ))}
                      {product.industries.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                          +{product.industries.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => setReadMoreProduct(product)}
                        className="flex-1 btn btn-outline text-sm py-2.5"
                      >
                        Read More
                      </button>
                      <button
                        onClick={() => setDemoProduct(product)}
                        className="flex-1 btn btn-primary text-sm py-2.5 flex items-center justify-center gap-1"
                      >
                        Demo
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 p-10 md:p-16 text-center border border-gray-700">
            <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-secondary/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Need a <span className="text-primary">Custom AI Solution</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                Don't see exactly what you need? Our team builds bespoke AI solutions
                tailored to your unique business challenges. Let's talk.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleContactRedirect}
                  className="btn bg-primary hover:bg-primary/90 text-white px-8 py-3.5 text-base font-bold flex items-center gap-2 shadow-lg shadow-primary/30"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                {/* <button
                  onClick={handleContactRedirect}
                  className="btn border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3.5 text-base font-bold"
                >
                  View Pricing
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      {/* <button
        onClick={handleContactRedirect}
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50 flex items-center font-semibold"
      >
        <span>Get a Demo</span>
        <ArrowRight className="ml-2 w-5 h-5" />
      </button> */}
    </div>
  );
};

export default AIProductCatalog;
