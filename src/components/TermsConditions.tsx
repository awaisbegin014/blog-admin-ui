import React from 'react';
import LegalPage, { LegalSection } from './LegalPage';

const sections: LegalSection[] = [
  {
    heading: 'Agreement to These Terms',
    body: [
      'These Terms & Conditions ("Terms") govern your use of theyellowsolutions.com (the "Site") and any services provided by Yellow Solutions ("Yellow Solutions", "we", "us" or "our"). By browsing the Site, requesting a quote or engaging us for work, you agree to these Terms.',
      'If you do not agree with any part of these Terms, please do not use the Site or our services.',
    ],
  },
  {
    heading: 'Our Services',
    body: [
      'Yellow Solutions provides website and web application development, mobile application development, e-commerce builds, UI/UX design, hosting and maintenance, AI and business automation, search engine optimisation, paid advertising and social media marketing.',
      'Each engagement is governed by a separate proposal, quotation or statement of work that sets out the scope, deliverables, timeline and price. Where a signed proposal conflicts with these Terms, the signed proposal takes precedence for that project.',
    ],
  },
  {
    heading: 'Quotes, Pricing and Packages',
    body: [
      'Prices shown on the Site, including package and pricing plan pages, are starting estimates in US dollars. They are not a binding offer. The final price depends on the scope agreed in writing, and we will confirm it in your quotation before any work begins.',
    ],
    bullets: [
      'Quotes are valid for 30 days from the date of issue unless stated otherwise.',
      'Prices exclude third-party costs such as domains, hosting, premium plugins, stock media, ad spend and payment gateway fees, unless your quote says they are included.',
      'We may update published package pricing at any time. Changes never affect a project already confirmed in writing.',
    ],
  },
  {
    heading: 'Payments and Invoicing',
    bullets: [
      'Projects normally run on milestone billing, with an advance payment required before work starts.',
      'Invoices are payable within 7 days of issue unless your agreement specifies otherwise.',
      'Recurring services such as hosting, maintenance, SEO and social media management are billed monthly in advance.',
      'Late payments may pause active work and may incur a reasonable late fee where permitted by law.',
      'All fees are non-refundable once the corresponding work has been delivered, except where these Terms or the law provide otherwise.',
    ],
  },
  {
    heading: 'Your Responsibilities',
    body: [
      'Delivering good work on time depends on a working partnership. To keep your project moving, you agree to:',
    ],
    bullets: [
      'Provide accurate, complete content, branding assets and access credentials when they are needed.',
      'Give feedback and approvals within the timeframes agreed in the project plan.',
      'Confirm that all content you supply is accurate and that you own or are licensed to use it.',
      'Ensure your use of the deliverables complies with the laws that apply to your business and industry.',
    ],
  },
  {
    heading: 'Project Timelines and Delays',
    body: [
      'Turnaround times quoted on the Site and in proposals assume timely feedback, content and approvals from you. Delays in receiving materials, approvals or payments will move the delivery dates accordingly.',
      'We are not liable for delays caused by events outside our reasonable control, including outages at third-party providers, changes in platform policies, natural events or civil disruption.',
    ],
  },
  {
    heading: 'Revisions and Change Requests',
    body: [
      'Each package includes the number of revision rounds stated in your quotation. Revisions cover refinements within the agreed scope.',
      'Requests that add new features, pages, platforms or redesigns are treated as change requests. We will quote them separately and begin work once you approve the additional cost and timeline in writing.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'You keep ownership of all content, trademarks and materials you provide to us.',
      'Once a project is paid for in full, ownership of the custom deliverables created specifically for you transfers to you. Until final payment is received, all deliverables remain our property.',
      'We retain ownership of our own pre-existing tools, frameworks, internal libraries and know-how. Third-party components — such as open-source libraries, themes, plugins, fonts and stock media — remain subject to their own licences, which pass through to you on their original terms.',
      'Unless you ask us in writing not to, we may display completed work in our portfolio and marketing materials.',
    ],
  },
  {
    heading: 'Hosting, Maintenance and Third-Party Services',
    body: [
      'Where we provide hosting or maintenance, service levels are set out in your plan. We are not responsible for outages, data loss or policy changes at third-party providers such as hosting companies, domain registrars, payment gateways, advertising platforms or app stores.',
      'You are responsible for keeping accounts you own — such as domain registrars and advertising accounts — in good standing and for paying their fees directly where they are not included in your plan.',
    ],
  },
  {
    heading: 'Marketing and Advertising Results',
    body: [
      'Search engine optimisation, paid advertising and social media results depend on competition, budget, market conditions and platform algorithms, none of which we control. We commit to the agreed strategy, effort and reporting, but we cannot guarantee specific rankings, impressions, conversions or revenue.',
      'Advertising budgets paid to platforms such as Google or Meta are separate from our management fees and are your responsibility unless your agreement states otherwise.',
    ],
  },
  {
    heading: 'Confidentiality',
    body: [
      'Both parties agree to keep confidential any non-public information shared during an engagement, including business plans, credentials, pricing, source code and customer data, and to use it only for the purposes of the project. This obligation continues after the project ends. We are happy to sign your NDA where required.',
    ],
  },
  {
    heading: 'Cancellation and Termination',
    bullets: [
      'Either party may end an engagement by giving written notice.',
      'On cancellation, you remain liable for all work completed and third-party costs incurred up to the termination date.',
      'Advance payments cover work already performed and are non-refundable to that extent.',
      'Recurring services can be cancelled with 30 days’ written notice before the next billing date.',
      'We may suspend or end services if invoices are unpaid, or if the Site or our services are used unlawfully or abusively.',
    ],
  },
  {
    heading: 'Warranties and Bug Fixes',
    body: [
      'We provide a 30-day warranty from launch covering defects in the work we delivered, at no additional cost. The warranty does not cover new feature requests, changes made by you or a third party, third-party platform updates, or issues caused by hosting outside our control.',
      'Beyond the warranty period, ongoing support is available through our maintenance plans.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Yellow Solutions is not liable for indirect, incidental, special or consequential damages, including lost profits, lost revenue, lost data or business interruption.',
      'Our total liability arising from any engagement is limited to the total fees you paid us for the specific services giving rise to the claim in the three months before it arose. Nothing in these Terms excludes liability that cannot lawfully be excluded.',
    ],
  },
  {
    heading: 'Use of the Site',
    body: [
      'You agree not to use the Site in a way that breaks the law, infringes anyone’s rights, or interferes with its operation or security. You may not attempt to gain unauthorised access to any part of the Site, or copy, scrape or republish its content without our written permission.',
      'All text, graphics, logos and code on the Site belong to Yellow Solutions or its licensors and are protected by copyright and trademark law.',
    ],
  },
  {
    heading: 'Privacy',
    body: [
      'Our handling of personal information is described in our Privacy Policy, which forms part of these Terms. Please read it alongside this page.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'These Terms are governed by the laws of the State of New York, United States, without regard to its conflict of law rules. Any dispute will be brought before the courts of New York, unless your signed agreement names a different jurisdiction. Before starting formal proceedings, both parties agree to attempt to resolve the dispute in good faith.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    body: [
      'We may update these Terms from time to time. The revised version takes effect when it is published on this page, and we will update the "Last updated" date to reflect the change. Continuing to use the Site or our services after an update means you accept the revised Terms.',
    ],
  },
];

const TermsConditions: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms & Conditions"
    intro="These Terms set out the rules for using our website and the basis on which Yellow Solutions provides its development, design and marketing services."
    lastUpdated="17 September 2026"
    icon="scroll"
    sections={sections}
  />
);

export default TermsConditions;
