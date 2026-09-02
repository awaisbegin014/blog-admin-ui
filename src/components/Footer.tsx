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
import { navItems, services } from '../data/content';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Same logic as Navbar for smooth scroll + routing
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (!href) return;

    if (href === '/') {
      navigate('/');
      return;
    }

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

  // Defensive: ensure we always have an array
  const serviceList = Array.isArray(services) ? services : [];

  // Split services into 2 nearly equal columns
  const half = Math.ceil(serviceList.length / 2);
  const serviceColumns = [serviceList.slice(0, half), serviceList.slice(half)];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <a href="/" onClick={handleNavigation}>
              <img
                src="/images/logotwo.png"
                alt="Yellow Solutions Logo – Light"
                className="w-40 h-auto object-contain"
              />
            </a>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Transforming ideas into powerful software solutions. Your trusted
              partner in digital innovation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61563924716395"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/yellow-solutionss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/yellow._solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              <span className="heading">Quick Links</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    onClick={handleNavigation}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (2-column layout on desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">
              <span className="heading">Our Services</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {serviceColumns.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-2 text-sm">
                  {col.map((service) => {
                    const to = service.slug
                      ? `/service/${service.slug}`
                      : `/service/${slugify(service.title)}`;
                    return (
                      <li key={service.title}>
                        <a
                          href={to}
                          onClick={handleNavigation}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {service.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Yellow Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
