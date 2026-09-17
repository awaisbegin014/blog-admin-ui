import React from 'react';
import { ShieldCheck, ScrollText, Mail, Phone, MapPin } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './ui/Motion';

export interface LegalSection {
  heading: string;
  /** Paragraphs rendered in order, before the bullet list */
  body?: string[];
  /** Optional bullet list rendered after the paragraphs */
  bullets?: string[];
}

interface LegalPageProps {
  /** Small label above the title, e.g. "Legal" */
  eyebrow: string;
  title: string;
  intro: string;
  /** Human-readable date, e.g. "17 September 2026" */
  lastUpdated: string;
  icon: 'shield' | 'scroll';
  sections: LegalSection[];
}

/**
 * Shared shell for the Privacy Policy and Terms & Conditions pages so both stay
 * visually identical and only their copy differs.
 */
const LegalPage: React.FC<LegalPageProps> = ({
  eyebrow,
  title,
  intro,
  lastUpdated,
  icon,
  sections,
}) => {
  const Icon = icon === 'shield' ? ShieldCheck : ScrollText;

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950">
        {/* Soft brand glow */}
        <div
          className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative py-16 md:py-20">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{eyebrow}</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-primary/15 ring-1 ring-primary/30 items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">{title}</h1>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{intro}</p>
              </div>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 ring-1 ring-white/10">
              Last updated: {lastUpdated}
            </p>
          </Reveal>
        </div>

        {/* Brand stripe */}
        <div className="h-1.5 bg-gradient-to-r from-primary via-amber-400 to-yellow-400" aria-hidden="true" />
      </section>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <Stagger className="space-y-10">
            {sections.map((section, index) => (
              <StaggerItem key={section.heading}>
                <article className="scroll-mt-28" id={`section-${index + 1}`}>
                  <h2 className="flex items-baseline gap-3 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    <span className="text-primary font-black text-base shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{section.heading}</span>
                  </h2>

                  <div className="pl-0 sm:pl-9 space-y-4">
                    {section.body?.map((paragraph) => (
                      <p key={paragraph} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          {/* ── Contact card ─────────────────────────────────────────── */}
          <Reveal className="mt-14">
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Questions about this page?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get in touch and a member of our team will get back to you within one business day.
              </p>

              <ul className="space-y-3.5 text-sm">
                <li>
                  <a
                    href="mailto:info@theyellowsolutions.com"
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors break-all"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    info@theyellowsolutions.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+19342035115"
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    +1 (934) 203-5115
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>675 Hawkins Road East, Coram, NY 11727, United States</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
