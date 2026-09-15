import React, { useState } from 'react';
import {
  CheckCircle,
  Award,
  Globe,
  Users,
  Target,
  Shield,
  Zap,
  Sparkles,
  ArrowRight,
  Phone,
  Clock,
  Compass,
  Code2,
  Cpu,
  Layers,
  HeartHandshake,
  Building2,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AboutProps {
  isStandalonePage?: boolean;
}

const About: React.FC<AboutProps> = ({ isStandalonePage = false }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'story' | 'values' | 'global' | 'process'>('story');

  const stats = [
    {
      value: '6+',
      label: 'Years of Excellence',
      sublabel: 'Delivering since 2018',
      icon: Clock,
    },
    {
      value: '250+',
      label: 'Projects Delivered',
      sublabel: 'Web, Mobile & AI systems',
      icon: Award,
    },
    {
      value: '3',
      label: 'Global Hubs',
      sublabel: 'USA · Germany · Pakistan',
      icon: Globe,
    },
    {
      value: '99%',
      label: 'Client Retention',
      sublabel: 'Long-term engineering partners',
      icon: HeartHandshake,
    },
  ];

  const features = [
    'Agile methodology for adaptable project management',
    'User-centered design approach for intuitive experiences',
    'Continuous integration and deployment practices',
    'Rigorous testing and quality assurance protocols',
    'Ongoing maintenance and support services',
    'Transparent communication throughout the process',
  ];

  const coreValues = [
    {
      icon: Code2,
      title: 'Architectural Rigor',
      description:
        'We craft resilient, modular, and scalable software foundations that grow smoothly with your enterprise demands.',
      badge: 'Engineering',
    },
    {
      icon: Cpu,
      title: 'AI-First Innovation',
      description:
        'Integrating intelligent machine learning pipelines and conversational agents directly into practical business workflows.',
      badge: 'Intelligence',
    },
    {
      icon: Zap,
      title: 'Velocity & Agility',
      description:
        'Rapid sprint cycles, continuous deployments, and swift time-to-market without ever compromising code security.',
      badge: 'Execution',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description:
        'Strict compliance, data isolation, automated vulnerability scanning, and robust cloud infrastructure design.',
      badge: 'Security',
    },
    {
      icon: Users,
      title: 'Human-Centric UX',
      description:
        'Crafting digital experiences that feel natural, intuitive, and conversion-focused for modern end users.',
      badge: 'Design',
    },
    {
      icon: HeartHandshake,
      title: 'Radical Transparency',
      description:
        'Direct access to senior engineers, clear milestones, real-time progress tracking, and no hidden surprises.',
      badge: 'Partnership',
    },
  ];

  const globalHubs = [
    {
      flag: '🇺🇸',
      country: 'United States',
      city: 'Kerrville, Texas',
      role: 'Global Headquarters & Client Success',
      description:
        'Strategic oversight, enterprise accounts, product roadmapping, and North American partnerships.',
      tag: 'Strategic Hub',
    },
    {
      flag: '🇩🇪',
      country: 'Germany',
      city: 'Berlin',
      role: 'European Operations & Compliance',
      description:
        'Expanding European presence, stringent GDPR compliance, localized enterprise delivery, and DACH clients.',
      tag: 'European Hub',
    },
    {
      flag: '🇵🇰',
      country: 'Pakistan',
      city: 'Karachi',
      role: 'Engineering & Innovation Center',
      description:
        'Dedicated development center powering full-stack architectures, modern cloud pipelines, and AI engineering.',
      tag: 'Development Hub',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Blueprint',
      desc: 'We analyze your core business goals, map user journeys, audit tech feasibility, and architect a robust project roadmap.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'UI/UX & Prototyping',
      desc: 'Interactive clickable wireframes and modern design systems crafted for high conversion and intuitive user engagement.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Agile Engineering',
      desc: 'Sprint-based full-stack development with automated unit tests, continuous integration, and transparent weekly demos.',
      icon: Code2,
    },
    {
      step: '04',
      title: 'Launch & Continuous Scale',
      desc: 'Zero-downtime deployment, cloud optimization, performance monitoring, and ongoing feature enhancements.',
      icon: TrendingUp,
    },
  ];

  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <section
      id="about"
      className={`relative overflow-hidden bg-white dark:bg-black transition-colors duration-300 ${
        isStandalonePage ? 'pt-32 pb-24 md:pt-36 md:pb-28' : 'py-20 md:py-28'
      }`}
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-primary/15 via-amber-400/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 blur-3xl pointer-events-none rounded-full" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-950 dark:text-white tracking-tight leading-tight">
            <span className="heading">Crafting Digital Excellence Since</span>{' '}
            <span className="gradient-text">2018</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            At Yellow Solutions, we combine technical expertise with creative problem-solving to
            deliver software solutions that exceed expectations. Our team of experienced developers,
            designers, and strategists work collaboratively to transform complex challenges into
            elegant digital experiences.
          </p>
        </div>

        {/* ── Impact Stats Bar ──────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold font-poppins text-primary">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>

        {/* ── Interactive Tabbed Navigation ─────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'story', label: 'Our Story & Philosophy', icon: Compass },
            { id: 'values', label: 'Core Pillars & Values', icon: Shield },
            { id: 'global', label: 'Global Footprint', icon: Globe },
            { id: 'process', label: 'How We Deliver', icon: Target },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 shadow-md shadow-amber-400/20 scale-105'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-gray-950' : 'text-primary'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Tab 1: Our Story & Philosophy ─────────────────────────── */}
        {activeTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 dark:text-white">
                  Built on Long-Term Partnerships, Scalable Tech & Trust
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  We believe in building long-term partnerships with our clients, focusing on
                  sustainable growth and continuous innovation. Our commitment to quality and
                  attention to detail ensures that every solution we deliver is robust, scalable, and
                  future-proof.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  From emerging tech ventures to multinational corporations, we act as an extension
                  of your leadership team—bringing the technical capability, product instinct, and
                  unrelenting execution speed necessary to outpace the competition.
                </p>
              </div>

              {/* Bullet features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => handleNav('#contact')}
                  className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 hover:scale-105 transition-transform shadow-lg shadow-yellow-400/20 inline-flex items-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+19342035115"
                  className="px-6 py-3 rounded-full font-semibold text-sm border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call +1 (934) 203-5115</span>
                </a>
              </div>
            </div>

            {/* Right side visual panel */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-1 border border-gray-800 shadow-2xl">
                <div className="p-7 space-y-6 text-white">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      // The Yellow Standard
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                        <Target className="w-4 h-4" />
                        <h4>Our Mission</h4>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        To architect resilient digital products, eliminate technological friction,
                        and accelerate sustainable revenue growth for visionary founders and enterprises.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                        <Sparkles className="w-4 h-4" />
                        <h4>Our Vision</h4>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        To set the global benchmark for modern software craft, AI-augmented development,
                        and human-centered design across every screen and platform.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-2 text-yellow-300 font-bold text-sm mb-1">
                        <Shield className="w-4 h-4" />
                        <h4>Client Commitment</h4>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Zero vendor lock-in. Full code ownership, comprehensive documentation, and
                        dedicated post-launch warranty support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 2: Core Pillars & Values ──────────────────────────── */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-7 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800/80 flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    <span>Engineering Principle #{idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Tab 3: Global Footprint ───────────────────────────────── */}
        {activeTab === 'global' && (
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
                The 24-Hour Synergy Advantage
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                With coordinated hubs across North America, Europe, and South Asia, our teams
                deliver uninterrupted progress, overlapping agile collaboration, and true
                round-the-clock responsiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {globalHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="group p-7 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{hub.flag}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {hub.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
                    {hub.country}
                  </h3>
                  <p className="text-xs font-semibold text-primary mb-3">{hub.city}</p>

                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    {hub.role}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {hub.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-amber-400/10 to-yellow-400/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary text-gray-950 flex items-center justify-center shrink-0 font-bold text-xl">
                  <Globe className="w-6 h-6 text-gray-950" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
                    Looking for office details or local contact info?
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Visit our global offices page to view directions, gallery, and local directors.
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleNav('#offices')}
                className="px-6 py-3 rounded-full font-bold text-sm bg-gray-950 text-white dark:bg-white dark:text-gray-950 hover:scale-105 transition-transform shrink-0"
              >
                Explore Offices
              </button>
            </div>
          </div>
        )}

        {/* ── Tab 4: How We Deliver ─────────────────────────────────── */}
        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative p-6 sm:p-7 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black font-poppins text-primary/40 group-hover:text-primary transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => handleNav('#contact')}
                className="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 hover:scale-105 transition-transform shadow-lg shadow-yellow-400/20 inline-flex items-center gap-2"
              >
                <span>Book a Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;