import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Logo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const isHomePage = location.pathname === '/';

  const shouldShowLogoTwo = isHomePage
    ? (isDarkMode || !scrolled)  // ✅ Home: dark mode or not scrolled
    : isDarkMode;                // ✅ Other Pages: only dark mode

  const logoSrc = shouldShowLogoTwo
    ? '/images/logotwo.png'
    : '/images/logoone1.png';

  const logoAlt = shouldShowLogoTwo
    ? 'Yellow Solutions Logo – Light'
    : 'Yellow Solutions Logo – Dark';

  return (
    <a href="#home">
      <img
        src={logoSrc}
        alt={logoAlt}
        className="w-full h-20 object-contain transition-opacity duration-300"
      />
    </a>
  );
};

export default Logo;
