// import React from 'react';
// import { navItems, services } from '../data/content';
// import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

// const slugify = (s: string) =>
//   s
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)+/g, '');

// const Footer: React.FC = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Defensive: ensure we always have an array
//   const serviceList = Array.isArray(services) ? services : [];

//   return (
//     <footer className="bg-black text-white pt-16 pb-8">
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Company Info */}
//           <div>
//             <a href="#home">
//               <img
//                 src="/images/logotwo.png"
//                 alt="Yellow Solutions Logo – Light"
//                 className="w-full h-20 object-contain transition-opacity duration-300"
//               />
//             </a>

//             <p className="mt-4 text-gray-400">
//               Transforming ideas into powerful software solutions. Your trusted partner in digital innovation.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               <a
//                 href="https://www.facebook.com/profile.php?id=61563924716395"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/yellow-solutionss/"
//                 className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.instagram.com/yellow._solutions/"
//                 className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-white">
//               <span className="heading">Quick Links</span>
//             </h3>
//             <ul className="space-y-2">
//               {navItems.map((item) => (
//                 <li key={item.title}>
//                   <a
//                     href={item.href}
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     {item.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-white">
//               <span className="heading">Our Services</span>
//             </h3>
//             <ul className="space-y-2">
//               {serviceList.map((service) => {
//                 const to =
//                   service.slug
//                     ? `/service/${service.slug}`
//                     : `/service/${slugify(service.title)}`;
//                 return (
//                   <li key={service.title}>
//                     <a
//                       href={to}
//                       className="text-gray-400 hover:text-white transition-colors"
//                     >
//                       {service.title}
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* (Optional) 4th column reserved */}
//           {/* Add any extra footer content here if needed */}
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-400 text-center md:text-left order-2 md:order-1">
//             © {new Date().getFullYear()} Yellow Solutions. All rights reserved.
//           </p>
//           {/* <p className="text-gray-400 text-center md:text-right order-1 md:order-2">
//             <a
//               href="https://www.linkedin.com/in/anshkumar13/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white transition-colors"
//             >
//               Developed by Ansh Kumar
//             </a>
//           </p> */}
//         </div>

//         {/* Scroll to Top Button (uncomment to enable) */}
//         {/*
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//           aria-label="Scroll to top"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </button>
//         */}
//       </div>
//     </footer>
//   );
// };

// export default Footer;






















// import React from 'react';
// import { navItems, services } from '../data/content';
// import { Facebook, Linkedin, Instagram } from 'lucide-react';

// const slugify = (s: string) =>
//   s
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)+/g, '');

// const Footer: React.FC = () => {
//   // Defensive: ensure we always have an array
//   const serviceList = Array.isArray(services) ? services : [];

//   // Split services into 2 nearly equal columns
//   const half = Math.ceil(serviceList.length / 2);
//   const serviceColumns = [serviceList.slice(0, half), serviceList.slice(half)];

//   return (
//     <footer className="bg-black text-white pt-12 pb-6">
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
//           {/* Company Info */}
//           <div>
//             <a href="/">
//               <img
//                 src="/images/logotwo.png"
//                 alt="Yellow Solutions Logo – Light"
//                 className="w-40 h-auto object-contain"
//               />
//             </a>

//             <p className="mt-4 text-gray-400 text-sm leading-relaxed">
//               Transforming ideas into powerful software solutions. Your trusted partner in digital innovation.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               <a
//                 href="https://www.facebook.com/profile.php?id=61563924716395"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
//               >
//                 <Facebook className="w-4 h-4" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/yellow-solutionss/"
//                 className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
//               >
//                 <Linkedin className="w-4 h-4" />
//               </a>
//               <a
//                 href="https://www.instagram.com/yellow._solutions/"
//                 className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
//               >
//                 <Instagram className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-white">
//               <span className="heading">Quick Links</span>
//             </h3>
//             <ul className="space-y-2 text-sm">
//               {navItems.map((item) => (
//                 <li key={item.title}>
//                   <a
//                     href={item.href}
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     {item.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services (2-column layout on desktop) */}
//           <div className="lg:col-span-2">
//             <h3 className="text-lg font-semibold mb-4 text-white">
//               <span className="heading">Our Services</span>
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
//               {serviceColumns.map((col, colIdx) => (
//                 <ul key={colIdx} className="space-y-2 text-sm">
//                   {col.map((service) => {
//                     const to =
//                       service.slug
//                         ? `/service/${service.slug}`
//                         : `/service/${slugify(service.title)}`;
//                     return (
//                       <li key={service.title}>
//                         <a
//                           href={to}
//                           className="text-gray-400 hover:text-white transition-colors"
//                         >
//                           {service.title}
//                         </a>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-500 text-xs text-center md:text-left">
//             © {new Date().getFullYear()} Yellow Solutions. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


















import React from 'react';
import footerLogo from '../assests/logo-white.png';
import { services } from '../data/content';
import { Facebook, Linkedin, Instagram, Mail, Phone, PhoneCall, MapPin, Clock, ArrowRight, ArrowUp, Star } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Reveal, Stagger, StaggerItem } from './ui/Motion';

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const usefulLinks = [
  { title: 'Why Choose Us', href: '#why-us' },
  { title: 'Portfolio', href: '#portfolio' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Blogs', href: '/blogs' },
  { title: 'Careers', href: '/careers' },
  { title: 'Contact Us', href: '#contact' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61563924716395', Icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/yellow-solutionss/', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/yellow._solutions/', Icon: Instagram },
];

// Only the headline services — the full list lives in the Services section
const FEATURED_SERVICE_COUNT = 6;

// Shorter footer labels so long service titles don't wrap
const serviceLabels: Record<string, string> = {
  'Social Media Management and Content Creation': 'Social Media & Content',
  'Search Engine Optimization': 'SEO',
  'AI Automations / AI Business Automation': 'AI Automation',
};

const linkClass = 'text-sm text-gray-400 hover:text-primary transition-colors';

const ColumnHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white dark:text-white">
    {children}
    <span className="mt-2 block h-0.5 w-8 rounded-full bg-primary" aria-hidden="true" />
  </h3>
);

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Logo and "Back to top": smooth-scroll to the top of the home page (navigating there first if needed)
  const handleBackToTop = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // ✅ Same logic as Navbar for smooth scroll + routing
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (!href) return;

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const featuredServices = services.slice(0, FEATURED_SERVICE_COUNT);

  return (
    <footer className="bg-white dark:bg-black px-3 sm:px-4 pt-6 pb-4">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gray-950 text-white ring-1 ring-white/10">
        {/* Soft brand glow */}
        <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" aria-hidden="true" />

        {/* CTA banner */}
        <Reveal className="relative border-b border-white/10 px-5 sm:px-10 lg:px-12 py-7 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Have a project in mind?</p>
              <h2 className="mt-2 font-poppins text-2xl sm:text-3xl font-bold leading-tight text-white dark:text-white">
                Let&apos;s build something <span className="text-primary">great</span> together.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-400">
                Tell us what you need — we&apos;ll reply with ideas, a clear plan and a free estimate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('open-quote-modal'))}
                className="btn-shine group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-sm font-bold bg-gradient-to-r from-primary via-amber-400 to-yellow-400 text-gray-950 shadow-lg shadow-yellow-400/20 hover:brightness-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="tel:+19342035115"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl text-sm font-semibold text-white ring-1 ring-white/20 hover:ring-primary hover:text-primary transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                Call +1 (934) 203-5115
              </a>
            </div>
          </div>
        </Reveal>

        <div className="relative px-5 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-6">
          <Stagger className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-10">
            {/* Brand */}
            <StaggerItem className="col-span-2 lg:col-span-4 lg:pr-6">
              <a
                href="/"
                onClick={handleBackToTop}
                aria-label="Back to top"
                title="Back to top"
                className="group inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-gray-950"
              >
                <img
                  src={footerLogo}
                  alt="The Yellow Solutions Logo"
                  className="h-12 w-auto object-contain transition-transform duration-300 ease-out group-hover:-translate-y-1"
                />
              </a>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
                Websites, apps, AI automation and marketing built around your goals. No templates, no
                shortcuts — just clean work and a team that has your back.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <span className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </span>
                <span className="text-xs font-medium text-gray-300">Trusted by 1000+ satisfied clients</span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Yellow Solutions on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-300 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-gray-950 hover:ring-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </StaggerItem>

            {/* Services */}
            <StaggerItem className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8">
              <ColumnHeading>Services</ColumnHeading>
              <ul className="space-y-2.5">
                {featuredServices.map((service) => (
                  <li key={service.title}>
                    <a href={`/service/${slugify(service.title)}`} onClick={handleNavigation} className={linkClass}>
                      {serviceLabels[service.title] ?? service.title}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a
                    href="#services"
                    onClick={handleNavigation}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-yellow-300 transition-colors"
                  >
                    View all services
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              </ul>
            </StaggerItem>

            {/* Useful links */}
            <StaggerItem className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
              <ColumnHeading>Useful Links</ColumnHeading>
              <ul className="space-y-2.5">
                {usefulLinks.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} onClick={handleNavigation} className={linkClass}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Contact */}
            <StaggerItem className="col-span-2 lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8">
              <ColumnHeading>Contact</ColumnHeading>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="tel:+19342035115" className="group flex items-start gap-3 text-gray-400 hover:text-primary transition-colors">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    +1 (934) 203-5115
                  </a>
                </li>
                <li>
                  <a href="mailto:info@theyellowsolutions.com" className="group flex items-start gap-3 text-gray-400 hover:text-primary transition-colors break-all">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    info@theyellowsolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>675 Hawkins Road East, Coram, NY 11727</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    Mon – Fri, 8:00 AM – 6:00 PM <span className="text-gray-500">(CT)</span>
                  </span>
                </li>
              </ul>
            </StaggerItem>
          </Stagger>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-center text-xs text-gray-500 sm:text-left">
              © {new Date().getFullYear()} Yellow Solutions. All rights reserved.
            </p>
            <button
              type="button"
              onClick={handleBackToTop}
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-primary transition-colors"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-white/15 transition-all group-hover:bg-primary group-hover:text-gray-950 group-hover:ring-primary">
                <ArrowUp className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
