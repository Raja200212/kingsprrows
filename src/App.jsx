import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  // Intersection Observer for Reveal Scroll Animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      root: null, // viewport
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Offset trigger point slightly
    };

    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to observe it again
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    revealElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Liquid Background Blobs */}
      <div className="liquid-blob-container">
        <div className="liquid-blob blob-1"></div>
        <div className="liquid-blob blob-2"></div>
        <div className="liquid-blob blob-3"></div>
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* Brand Vision Reveal Section */}
        <section style={{
          padding: '120px 0',
          background: 'rgba(16, 185, 129, 0.02)',
          borderTop: '1px solid rgba(16, 185, 129, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={4}
              blurStrength={10}
              textClassName="text-gradient"
            >
              At KingSparrow, we engineer high-converting digital pipelines. We combine high-intent SEO, automated marketing tools, and premium custom software development to multiply your revenue and scale your brand.
            </ScrollReveal>
          </div>
        </section>

        {/* Services Showcase (SEO, SMM, Web/App Dev) */}
        <div className="reveal" id="services-section">
          <Services />
        </div>



        {/* Pricing Packages */}
        <div className="reveal" id="pricing-section">
          <Pricing />
        </div>

      </main>

      {/* Professional Footer & Floating WhatsApp Chat Widget */}
      <Footer />
    </>
  );
}

export default App;
