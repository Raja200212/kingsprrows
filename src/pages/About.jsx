import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award, Zap, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About KingSparrow | Trusted Digital Marketing Agency in Dindigul</title>
        <meta name="description" content="Discover the story of KingSparrow, a leading digital marketing and custom software agency in Dindigul, Tamil Nadu. Find out why businesses trust our growth pipelines." />
        <link rel="canonical" href="https://www.kingsparrows.in/about" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <div className="badge">Who We Are</div>
          <h1 style={{ marginBottom: '24px' }}>
            We Build High-Converting <br />
            <span className="text-gradient">Digital Growth Pipelines</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 60px auto' }}>
            Based in Dindigul, Tamil Nadu, KingSparrow is a team of tech innovators, search marketing pioneers, and conversion optimization strategists. We fuse local business understanding with world-class custom software development.
          </p>

          {/* Grid Layout */}
          <div className="grid-2" style={{ textAlign: 'left', margin: '40px 0' }}>
            <div className="glass-card">
              <h2 style={{ fontSize: '1.75rem', textAlign: 'left', color: 'var(--primary)', marginBottom: '16px' }}>Our Mission</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                To empower local and global brands by creating measurable digital footprints. We don't just sell services; we build bespoke automation utilities, scale domain visibility, and engineer web platforms that turn clicks into clients.
              </p>
            </div>

            <div className="glass-card">
              <h2 style={{ fontSize: '1.75rem', textAlign: 'left', color: 'var(--secondary)', marginBottom: '16px' }}>Our Story</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                KingSparrow grew out of the demand for software engineers who understand marketing psychology and marketing teams who understand code. We bridge the gap to deliver high-converting organic ranking campaigns and robust desktop applications.
              </p>
            </div>
          </div>

          {/* Q&A Section: Why Choose KingSparrow */}
          <div style={{ marginTop: '80px', borderTop: '1px solid rgba(16, 185, 129, 0.15)', paddingTop: '60px' }}>
            <div className="badge">Client FAQ</div>
            <h2 style={{ marginBottom: '40px' }}>Why Choose KingSparrow?</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                  <Zap style={{ color: 'var(--primary)' }} size={24} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Custom Tech & Software Advantage</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Unlike standard agencies that rely purely on templates, we build custom marketing software tools (like our bulk WhatsApp broadcasting systems) and responsive React platforms tailored exactly to your business logic.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                  <Award style={{ color: 'var(--secondary)' }} size={24} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Local SEO Experts in Dindigul</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  We are deeply rooted in Dindigul, Tamil Nadu. We know exactly how to configure Google Business Profiles, optimize keywords for local demographics, and capture localized search traffic.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                  <HeartHandshake style={{ color: 'var(--primary)' }} size={24} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Transparency & High Retention</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  With a client retention rate of 99.2%, we thrive on transparent reporting. You will always know exactly where your marketing budget is going and how many leads it has generated.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
