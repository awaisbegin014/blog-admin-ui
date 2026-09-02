// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { navItems, services } from '../data/content';
// import Logo from './ui/Logo';
// import ThemeToggle from './ui/ThemeToggle';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const isTransparent = isHomePage && !scrolled;

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     const href = e.currentTarget.getAttribute('href');
//     if (href?.startsWith('#')) {
//       if (location.pathname !== '/') {
//         navigate('/');
//         setTimeout(() => {
//           const element = document.querySelector(href);
//           element?.scrollIntoView({ behavior: 'smooth' });
//         }, 100);
//       } else {
//         const element = document.querySelector(href);
//         element?.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else if (href) {
//       navigate(href);
//     }
//     setIsOpen(false);
//     setDropdownOpen(false);
//   };

//   // split services into chunks of 6 (desktop dropdown only)
//   const chunkServices = (arr: typeof services, size: number) =>
//     arr.reduce(
//       (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
//       [] as typeof services[]
//     );

//   const serviceChunks = chunkServices(services, 6);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isHomePage
//           ? scrolled
//             ? 'bg-white dark:bg-black shadow-md py-2'
//             : 'bg-transparent py-4'
//           : 'bg-white dark:bg-black shadow-md py-2'
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <Logo forceLogoOne={isHomePage ? !scrolled : false} />

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-4 relative">
//           {navItems.map((item) =>
//             item.title === 'Services' ? (
//               <div
//                 key={item.title}
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <a
//                   href={item.href}
//                   onClick={handleNavigation}
//                   className={`navbar-link ${
//                     isTransparent
//                       ? 'text-white hover:text-white/80'
//                       : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
//                   }`}
//                 >
//                   {item.title}
//                 </a>

//                 {/* Dropdown (desktop only) */}
//                 {dropdownOpen && (
//                   <div
//                     className="absolute left-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 p-4 min-w-[200px]"
//                     style={{
//                       width: `${Math.min(serviceChunks.length * 200, 800)}px`,
//                     }}
//                   >
//                     <div
//                       className="grid gap-6"
//                       style={{
//                         gridTemplateColumns: `repeat(${Math.min(
//                           serviceChunks.length,
//                           4
//                         )}, minmax(180px, 1fr))`,
//                       }}
//                     >
//                       {serviceChunks.map((chunk, idx) => (
//                         <ul key={idx} className="space-y-2">
//                           {chunk.map((service, index) => (
//                             <li key={index}>
//                               <a
//                                 href={`/service/${service.title
//                                   .toLowerCase()
//                                   .replace(/[^a-z0-9]+/g, '-')
//                                   .replace(/-+$/, '')}`}
//                                 onClick={handleNavigation}
//                                 className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
//                               >
//                                 {service.title}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <a
//                 key={item.title}
//                 href={item.href}
//                 onClick={handleNavigation}
//                 className={`navbar-link ${
//                   isTransparent
//                     ? 'text-white hover:text-white/80'
//                     : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
//                 }`}
//               >
//                 {item.title}
//               </a>
//             )
//           )}

//           {/* Yellow Marketing Button */}
//           <a
//             href="/yellowmarketing"
//             onClick={handleNavigation}
//             className={`ml-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
//               isTransparent
//                 ? 'bg-primary/20 backdrop-blur-sm text-white hover:bg-primary/30 border border-white/20'
//                 : 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl'
//             }`}
//           >
//             Yellow Marketing
//           </a>

//           {/* Theme Toggle */}
//           <div className="ml-2">
//             <ThemeToggle />
//           </div>

//           <a
//             href="#contact"
//             onClick={handleNavigation}
//             className={`ml-4 btn ${
//               isTransparent
//                 ? 'bg-primary/20 backdrop-blur-sm text-white hover:bg-primary/30'
//                 : 'btn-primary'
//             }`}
//           >
//             Get Started
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <X
//               className={`w-6 h-6 ${
//                 scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
//               }`}
//             />
//           ) : (
//             <Menu
//               className={`w-6 h-6 ${
//                 scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
//               }`}
//             />
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-black">
//           <div className="px-4 pt-4 pb-6 space-y-2">
//             {navItems.map((item) => (
//               <a
//                 key={item.title}
//                 href={item.href}
//                 onClick={handleNavigation}
//                 className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
//               >
//                 {item.title}
//               </a>
//             ))}

//             {/* ✅ Yellow Marketing button added for mobile */}
//             <a
//               href="/yellowmarketing"
//               onClick={handleNavigation}
//               className="block w-full text-center px-4 py-3 mt-2 rounded-lg font-medium bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all"
//             >
//               Yellow Marketing
//             </a>

//             {/* ❌ Removed "Our Services" list for mobile */}

//             {/* Mobile Theme Toggle */}
//             <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
//               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Theme
//               </span>
//               <ThemeToggle />
//             </div>

//             <a
//               href="#contact"
//               onClick={handleNavigation}
//               className="block w-full text-center mt-6 btn btn-primary py-3"
//             >
//               Get Started
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;












// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { navItems, services } from '../data/content';
// import Logo from './ui/Logo';
// import ThemeToggle from './ui/ThemeToggle';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const isTransparent = isHomePage && !scrolled;

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 🔹 Handle smooth navigation + logo redirect to home
//   const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     const href = e.currentTarget.getAttribute('href');

//     if (href === '/') {
//       navigate('/');
//       setIsOpen(false);
//       setDropdownOpen(false);
//       return;
//     }

//     if (href?.startsWith('#')) {
//       if (location.pathname !== '/') {
//         navigate('/');
//         setTimeout(() => {
//           const element = document.querySelector(href);
//           element?.scrollIntoView({ behavior: 'smooth' });
//         }, 100);
//       } else {
//         const element = document.querySelector(href);
//         element?.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else if (href) {
//       navigate(href);
//     }
//     setIsOpen(false);
//     setDropdownOpen(false);
//   };

//   // split services into chunks of 6 (desktop dropdown only)
//   const chunkServices = (arr: typeof services, size: number) =>
//     arr.reduce(
//       (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
//       [] as typeof services[]
//     );

//   const serviceChunks = chunkServices(services, 6);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isHomePage
//           ? scrolled
//             ? 'bg-white dark:bg-black shadow-md py-2'
//             : 'bg-transparent py-4'
//           : 'bg-white dark:bg-black shadow-md py-2'
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* 🔹 Logo always redirects to home */}
//         <a href="/" onClick={handleNavigation} className="cursor-pointer">
//           <Logo forceLogoOne={isHomePage ? !scrolled : false} />
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-4 relative">
//           {navItems.map((item) =>
//             item.title === 'Services' ? (
//               <div
//                 key={item.title}
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <a
//                   href={item.href}
//                   onClick={handleNavigation}
//                   className={`navbar-link ${
//                     isTransparent
//                       ? 'text-white hover:text-white/80'
//                       : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
//                   }`}
//                 >
//                   {item.title}
//                 </a>

//                 {/* Dropdown (desktop only) */}
//                 {dropdownOpen && (
//                   <div
//                     className="absolute left-0 mt-2 rounded-xl shadow-lg border border-white/20 z-50 p-4 min-w-[200px] 
//                                bg-white/10 dark:bg-black/20 backdrop-blur-md"
//                     style={{
//                       width: `${Math.min(serviceChunks.length * 200, 800)}px`,
//                     }}
//                   >
//                     <div
//                       className="grid gap-6"
//                       style={{
//                         gridTemplateColumns: `repeat(${Math.min(
//                           serviceChunks.length,
//                           4
//                         )}, minmax(160px, 1fr))`,
//                       }}
//                     >
//                       {serviceChunks.map((chunk, idx) => (
//                         <ul key={idx} className="space-y-2">
//                           {chunk.map((service, index) => (
//                             <li key={index}>
//                               <a
//                                 href={`/service/${service.title
//                                   .toLowerCase()
//                                   .replace(/[^a-z0-9]+/g, '-')
//                                   .replace(/-+$/, '')}`}
//                                 onClick={handleNavigation}
//                                 className="block px-3 py-2 text-sm text-white/90 hover:text-white rounded-md 
//                                            border border-transparent hover:border-orange-400 
//                                            transition-all duration-300"
//                               >
//                                 {service.title}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <a
//                 key={item.title}
//                 href={item.href}
//                 onClick={handleNavigation}
//                 className={`navbar-link ${
//                   isTransparent
//                     ? 'text-white hover:text-white/80'
//                     : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
//                 }`}
//               >
//                 {item.title}
//               </a>
//             )
//           )}

//           {/* Yellow Marketing Button */}
//           <a
//             href="/yellowmarketing"
//             onClick={handleNavigation}
//             className={`ml-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
//               isTransparent
//                 ? 'bg-primary/20 backdrop-blur-sm text-white hover:bg-primary/30 border border-white/20'
//                 : 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl'
//             }`}
//           >
//             Yellow Marketing
//           </a>

//           {/* Theme Toggle */}
//           <div className="ml-2">
//             <ThemeToggle />
//           </div>

//           <a
//             href="#contact"
//             onClick={handleNavigation}
//             className={`ml-4 btn ${
//               isTransparent
//                 ? 'bg-primary/20 backdrop-blur-sm text-white hover:bg-primary/30'
//                 : 'btn-primary'
//             }`}
//           >
//             Get Started
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <X
//               className={`w-6 h-6 ${
//                 scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
//               }`}
//             />
//           ) : (
//             <Menu
//               className={`w-6 h-6 ${
//                 scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
//               }`}
//             />
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-black">
//           <div className="px-4 pt-4 pb-6 space-y-2">
//             {navItems.map((item) => (
//               <a
//                 key={item.title}
//                 href={item.href}
//                 onClick={handleNavigation}
//                 className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
//               >
//                 {item.title}
//               </a>
//             ))}

//             {/* ✅ Yellow Marketing button added for mobile */}
//             <a
//               href="/yellowmarketing"
//               onClick={handleNavigation}
//               className="block w-full text-center px-4 py-3 mt-2 rounded-lg font-medium bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all"
//             >
//               Yellow Marketing
//             </a>

//             {/* ❌ Removed "Our Services" list for mobile */}

//             {/* Mobile Theme Toggle */}
//             <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
//               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Theme
//               </span>
//               <ThemeToggle />
//             </div>

//             <a
//               href="#contact"
//               onClick={handleNavigation}
//               className="block w-full text-center mt-6 btn btn-primary py-3"
//             >
//               Get Started
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


























import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems, services } from '../data/content';
import Logo from './ui/Logo';
import ThemeToggle from './ui/ThemeToggle';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 Handle smooth navigation + logo redirect to home
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href === '/') {
      navigate('/');
      setIsOpen(false);
      setDropdownOpen(false);
      return;
    }

    if (href?.startsWith('#')) {
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
    } else if (href) {
      navigate(href);
    }
    setIsOpen(false);
    setDropdownOpen(false);
  };

  // split services into chunks of 6 (desktop dropdown only)
  const chunkServices = (arr: typeof services, size: number) =>
    arr.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
      [] as typeof services[]
    );

  const serviceChunks = chunkServices(services, 6);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? 'bg-white dark:bg-black shadow-md py-2'
            : 'bg-transparent py-4'
          : 'bg-white dark:bg-black shadow-md py-2'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* 🔹 Logo always redirects to home */}
        <a href="/" onClick={handleNavigation} className="cursor-pointer">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          <a
            href="#home"
            onClick={handleNavigation}
            className={`navbar-link text-sm font-semibold ${
              isTransparent
                ? 'text-white hover:text-white/80'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
            }`}
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="#services"
              onClick={handleNavigation}
              className={`navbar-link text-sm font-semibold flex items-center gap-1 ${
                isTransparent
                  ? 'text-white hover:text-white/80'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </a>

            {/* Dropdown (desktop only) */}
            {dropdownOpen && (
              <div
                className="absolute left-0 mt-2 rounded-xl shadow-lg border border-gray-200 dark:border-white/20 z-50 p-4 min-w-[200px] 
                           bg-white dark:bg-black/90"
                style={{
                  width: `${Math.min(serviceChunks.length * 200, 800)}px`,
                }}
              >
                <div
                  className="grid gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(
                      serviceChunks.length,
                      4
                    )}, minmax(180px, 1fr))`,
                  }}
                >
                  {serviceChunks.map((chunk, idx) => (
                    <ul key={idx} className="space-y-2">
                      {chunk.map((service, index) => (
                        <li key={index}>
                          <a
                            href={`/service/${service.title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, '-')
                              .replace(/-+$/, '')}`}
                            onClick={handleNavigation}
                            className="block px-3 py-2 text-sm 
                                       text-gray-800 dark:text-white/90
                                       hover:text-primary dark:hover:text-orange-400
                                       rounded-md border border-transparent 
                                       hover:border-primary/30 transition-all duration-300"
                          >
                            {service.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/ai-products"
            onClick={handleNavigation}
            className={`navbar-link text-sm font-semibold ${
              isTransparent
                ? 'text-white hover:text-white/80'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
            }`}
          >
            AI Products
          </a>

          <a
            href="#blogs"
            onClick={handleNavigation}
            className={`navbar-link text-sm font-semibold ${
              isTransparent
                ? 'text-white hover:text-white/80'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
            }`}
          >
            Blogs
          </a>

          {/* Company Dropdown */}
          <div className="relative group/company">
            <button
              className={`navbar-link text-sm font-semibold flex items-center gap-1 ${
                isTransparent
                  ? 'text-white hover:text-white/80'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Company
              <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl opacity-0 invisible group-hover/company:opacity-100 group-hover/company:visible transition-all duration-300 z-50 overflow-hidden transform origin-top translate-y-2 group-hover/company:translate-y-0">
              <div className="py-2">
                {[
                  { title: 'About', href: '#about' },
                  { title: 'Offices', href: '#offices' },
                  { title: 'Careers', href: '/careers' },
                  { title: 'Contact', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={handleNavigation}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <ThemeToggle />
            
            <a
              href="/yellowmarketing"
              onClick={handleNavigation}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                isTransparent
                  ? 'bg-primary/20 backdrop-blur-sm text-white hover:bg-primary/30 border border-white/20'
                  : 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/95 hover:to-secondary/95 shadow-lg hover:shadow-primary/20'
              }`}
            >
              Yellow Marketing
            </a>

            <a
              href="#contact"
              onClick={handleNavigation}
              className={`btn px-6 py-2.5 text-sm font-bold rounded-xl transition-all ${
                isTransparent
                  ? 'bg-primary/20 backdrop-blur-sm text-white hover:bg-primary/30 border border-white/20'
                  : 'btn-primary shadow-lg shadow-primary/20'
              }`}
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X
              className={`w-6 h-6 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={handleNavigation}
                className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.title}
              </a>
            ))}

            {/* ✅ Yellow Marketing button added for mobile */}
            <a
              href="/yellowmarketing"
              onClick={handleNavigation}
              className="block w-full text-center px-4 py-3 mt-2 rounded-lg font-medium bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all"
            >
              Yellow Marketing
            </a>

            {/* ✅ AI Products button for mobile */}
            <a
              href="/ai-products"
              onClick={handleNavigation}
              className="block w-full text-center px-4 py-3 mt-2 rounded-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              AI Products
            </a>

            {/* ❌ Removed "Our Services" list for mobile */}

            {/* Mobile Theme Toggle */}
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
              </span>
              <ThemeToggle />
            </div>

            <a
              href="#contact"
              onClick={handleNavigation}
              className="block w-full text-center mt-6 btn btn-primary py-3"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
