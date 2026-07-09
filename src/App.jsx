import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SeoServices from './pages/SeoServices';
import SocialMarketing from './pages/SocialMarketing';
import GoogleBusiness from './pages/GoogleBusiness';
import WebDevelopment from './pages/WebDevelopment';
import WhatsappMarketing from './pages/WhatsappMarketing';
import BlogDetail from './pages/BlogDetail';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Re-initialize intersection observers for scrolled elements
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    revealElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Liquid Background Blobs */}
      <div className="liquid-blob-container">
        <div className="liquid-blob blob-1"></div>
        <div className="liquid-blob blob-2"></div>
        <div className="liquid-blob blob-3"></div>
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seo-services" element={<SeoServices />} />
          <Route path="/social-media-marketing" element={<SocialMarketing />} />
          <Route path="/google-business-profile" element={<GoogleBusiness />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/whatsapp-marketing" element={<WhatsappMarketing />} />
        </Routes>
      </main>

      {/* Professional Footer & Floating WhatsApp Chat Widget */}
      <Footer />
    </Router>
  );
}

export default App;
