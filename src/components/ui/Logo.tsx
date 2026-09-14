import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoLight from '../../assests/logo.png';
import logoDark from '../../assests/logo-white.png';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-16 w-auto object-contain transition-opacity duration-300' }) => {
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
    ? (isDarkMode || !scrolled)  // ✅ Home: dark mode or not scrolled (over dark hero)
    : isDarkMode;                // ✅ Other Pages: only dark mode

  const logoSrc = shouldShowLogoTwo ? logoDark : logoLight;

  const logoAlt = shouldShowLogoTwo
    ? 'The Yellow Solutions Logo – Light'
    : 'The Yellow Solutions Logo – Dark';

  return (
    <img
      src={logoSrc}
      alt={logoAlt}
      className={className}
    />
  );
};

export default Logo;

