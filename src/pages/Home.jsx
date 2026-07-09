import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>KingSparrow | Digital Marketing & Custom Software Agency</title>
        <meta name="description" content="KingSparrow specializes in high-converting SEO, social media marketing (SMM), GMB optimization, bulk WhatsApp marketing tools, and custom React web/desktop software development based in Dindigul, Tamil Nadu, India." />
        <link rel="canonical" href="https://www.kingsparrows.in/" />
      </Helmet>

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

      {/* Services Showcase */}
      <div className="reveal active" id="services-section">
        <Services />
      </div>

      {/* Pricing Packages */}
      <div className="reveal active" id="pricing-section">
        <Pricing />
      </div>
    </>
  );
}
