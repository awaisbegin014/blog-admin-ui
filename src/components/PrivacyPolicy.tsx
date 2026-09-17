import React from 'react';
import LegalPage, { LegalSection } from './LegalPage';

const sections: LegalSection[] = [
  {
    heading: 'Who We Are',
    body: [
      'Yellow Solutions ("Yellow Solutions", "we", "us" or "our") is a software development and digital marketing company. We build websites, web and mobile applications, e-commerce stores, AI automation and marketing campaigns for clients worldwide.',
      'Our United States office is at 675 Hawkins Road East, Coram, NY 11727, and our European office is in Berlin, Germany. This Privacy Policy explains what personal information we collect through theyellowsolutions.com (the "Site"), why we collect it, and the choices you have.',
    ],
  },
  {
    heading: 'Information You Give Us',
    body: [
      'Most of the information we hold is information you choose to share with us, for example when you request a quote, book a consultation, apply for a role or send us a message.',
    ],
    bullets: [
      'Contact details — your name, email address, phone number and company name.',
      'Project details — the budget, timeline, requirements and any files or briefs you send us.',
      'Booking details — the consultation type, preferred date and time slot you select.',
      'Career applications — your CV, cover letter, work history and portfolio links.',
      'Correspondence — the content of emails, WhatsApp messages, contact forms and calls with our team.',
    ],
  },
  {
    heading: 'Information Collected Automatically',
    body: [
      'Like most websites, we collect a limited amount of technical information automatically when you browse the Site. This helps us keep the Site fast, secure and working correctly.',
    ],
    bullets: [
      'Device and browser information, such as browser type, operating system and screen size.',
      'Usage information, such as the pages you visit, the links you click and how long you stay.',
      'Approximate location derived from your IP address (city or region level, never a precise address).',
      'Referral information, such as the search engine, advertisement or website that brought you here.',
    ],
  },
  {
    heading: 'Cookies and Similar Technologies',
    body: [
      'We use a small number of cookies and browser storage keys. Strictly necessary cookies keep the Site working — they remember your theme preference and keep forms functioning. Analytics cookies help us understand which pages are useful so we can improve them.',
      'You can block or delete cookies at any time through your browser settings. Blocking strictly necessary cookies may stop parts of the Site from working as intended.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    bullets: [
      'To respond to your enquiries, prepare quotes and schedule consultations.',
      'To deliver the services you have engaged us for, and to manage the project through to launch.',
      'To send invoices, process payments and keep accurate financial records.',
      'To send service updates and, where you have opted in, occasional marketing about our work.',
      'To improve the Site, our services and the quality of our support.',
      'To keep the Site secure, prevent fraud and misuse, and meet our legal obligations.',
    ],
  },
  {
    heading: 'Legal Basis for Processing',
    body: [
      'Where the GDPR applies to you — for example if you are in the European Union or the United Kingdom — we rely on the following legal bases: your consent (for marketing emails and non-essential cookies), the performance of a contract (to deliver the work you have hired us for), our legitimate interests (to run and improve our business securely), and compliance with a legal obligation (such as tax and accounting rules).',
    ],
  },
  {
    heading: 'How We Share Information',
    body: [
      'We do not sell your personal information, and we never rent or trade it. We share it only where it is necessary to run our business, and only with parties that are bound to protect it.',
    ],
    bullets: [
      'Service providers — hosting, email, analytics, payment processing and form handling providers that operate on our behalf.',
      'Professional advisers — accountants and lawyers, where required and under a duty of confidentiality.',
      'Legal and safety — where we are required to do so by law, court order or to protect our rights and the safety of others.',
      'Business transfers — if our business is merged or acquired, your information may transfer as part of that transaction.',
    ],
  },
  {
    heading: 'International Transfers',
    body: [
      'We operate across the United States, Europe and South Asia, so your information may be transferred to and stored in a country other than your own. Where information moves out of the European Economic Area or the United Kingdom, we put appropriate safeguards in place, such as Standard Contractual Clauses, so that it remains protected to the same standard.',
    ],
  },
  {
    heading: 'How Long We Keep Information',
    body: [
      'We keep personal information only for as long as we need it. Enquiries that do not become projects are kept for up to 24 months so we can pick up the conversation if you come back. Project and financial records are kept for as long as required by tax and contract law, typically seven years. Career applications are kept for up to 12 months unless you ask us to remove them sooner.',
    ],
  },
  {
    heading: 'How We Protect Information',
    body: [
      'We use HTTPS across the Site, restrict access to client data to the team members who need it, and require confidentiality from everyone who works with us. No method of transmission or storage is completely secure, so while we take security seriously, we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Your Rights and Choices',
    body: [
      'Depending on where you live, you may have some or all of the rights below. To exercise any of them, email us at info@theyellowsolutions.com and we will respond within the timeframe the law allows, usually within 30 days.',
    ],
    bullets: [
      'Access — request a copy of the personal information we hold about you.',
      'Correction — ask us to fix information that is wrong or incomplete.',
      'Deletion — ask us to erase your information where we have no ongoing need to keep it.',
      'Objection and restriction — object to certain processing, or ask us to pause it.',
      'Portability — receive your information in a portable, machine-readable format.',
      'Withdraw consent — opt out of marketing at any time using the unsubscribe link or by emailing us.',
      'Non-discrimination — we will never treat you differently for exercising any of these rights.',
    ],
  },
  {
    heading: 'Third-Party Links',
    body: [
      'The Site links to third-party websites and platforms, including our social media profiles and, where relevant, our clients’ sites. We are not responsible for the privacy practices of those sites, and we encourage you to read their policies before sharing information with them.',
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      'Our services are aimed at businesses, and the Site is not directed at children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us with information, contact us and we will delete it.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy as our services and the law evolve. When we do, we will revise the "Last updated" date at the top of this page. If the changes are significant, we will give you clearer notice, for example by email or a notice on the Site.',
    ],
  },
];

const PrivacyPolicy: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    intro="Your privacy matters to us. This page explains what information Yellow Solutions collects, how we use it, who we share it with, and the control you have over it."
    lastUpdated="17 September 2026"
    icon="shield"
    sections={sections}
  />
);

export default PrivacyPolicy;
