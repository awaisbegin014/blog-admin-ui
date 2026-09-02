import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Offices from './components/Offices';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BlogsSection from './components/BlogsSection';
import BlogsPage from './components/BlogsPage';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import Careers from './components/Careers';
import OfficePage from './components/OfficePage';
import ServicePage from './components/ServicePage';
import YellowMarketing from './components/YellowMarketing';
import AIProductCatalog from './components/AIProductCatalog';
import MarketingServiceDetail from './components/MarketingServiceDetail';
import AdminPage from './components/admin/AdminPage';
import AdminLogin from './components/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';
import PromoBanner from './components/ui/PromoBanner';
import './utils/translator'; // Import translator to initialize global function

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [showPromo, setShowPromo] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Show promo on every homepage visit after a 3-second delay
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowPromo(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowPromo(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Close language dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-dropdown')) {
        // This will be handled by the Navbar component's state
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {showPromo && <PromoBanner onClose={() => setShowPromo(false)} />}
      <ScrollToTop />
      <Routes>
        {/* ── Admin console (full-screen, no Navbar/Footer) ───────────── */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        {/* ── Public site ────────────────────────────────────────────── */}
        <Route path="/*" element={
          <div className="antialiased bg-white">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <Services />
                  <About />
                  {/* <Portfolio /> */}
                  <BlogsSection />
                  <Offices />
                  <Testimonials />
                  <Contact />
                </main>
              } />
              <Route path="/careers" element={<Careers />} />
              <Route path="/office/pakistan" element={<Navigate to="/" replace />} />
              <Route path="/office/:country" element={<OfficePage />} />
              <Route path="/service/:serviceSlug" element={<ServicePage />} />
              <Route path="/yellowmarketing" element={<YellowMarketing />} />
              <Route path="/yellowmarketing/:serviceId" element={<MarketingServiceDetail />} />
              <Route path="/ai-products" element={<AIProductCatalog />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
            </Routes>
            <Footer />
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;