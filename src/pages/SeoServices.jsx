import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, ArrowRight, LineChart, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeoServices() {
  return (
    <>
      <Helmet>
        <title>Professional SEO Services in Dindigul | Search Engine Rankings</title>
        <meta name="description" content="Dominate Google rankings with high-intent SEO campaigns in Dindigul, Tamil Nadu. Learn what SEO is, how long it takes, and verify our optimization approach." />
        <link rel="canonical" href="https://www.kingsparrows.in/seo-services" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="badge">Specialist Services</div>
          <h1 style={{ marginBottom: '24px' }}>
            High-Performance <br />
            <span className="text-gradient">Search Engine Optimization (SEO)</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            Capture ready-to-buy organic search queries. We position your business on the first page of Google to drive sustainable revenue without paid ads.
          </p>

          {/* Q&A Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', margin: '40px 0' }}>
            
            {/* Question 1: What is SEO? */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'left', color: 'var(--primary)', marginBottom: '16px', fontWeight: 700 }}>
                What is SEO (Search Engine Optimization)?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                SEO is the structural and content-driven optimization of your website to help it rank higher in search results on search engines like Google. 
                <br /><br />
                It involves optimizing page loading speeds, matching content to search query intent, building structural integrity (technical HTML elements), and establishing high domain authority through backlinks. The goal of SEO is to capture organic visitors who are already searching for your services.
              </p>
            </div>

            {/* Question 2: How long does SEO take? */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'left', color: 'var(--secondary)', marginBottom: '16px', fontWeight: 700 }}>
                How Long Does SEO Take to Show Tangible Results?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                SEO is a long-term compounding asset rather than an overnight patch. Under normal conditions, you will start seeing initial improvements in index crawls and keyword positions within **3 to 6 months**. 
                <br /><br />
                For highly competitive search fields, ranking on Google's top page typically requires **6 to 12 months** of consistent technical optimization, content production, and citation building. However, once established, organic positions generate continuous high-intent traffic without recurring advertising fees.
              </p>
            </div>

            {/* What we optimize */}
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', textAlign: 'center' }}>Our SEO Execution Pillars</h2>
              <div className="grid-3">
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><Globe size={28} /></div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Technical & On-Page SEO</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>PageSpeed audit alignment, semantic HTML code elements, schema integrations, and mobile-responsive viewport setups.</p>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ color: 'var(--secondary)', marginBottom: '12px' }}><MapPin size={28} /></div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Local SEO & GMB</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Dominating map pack queries for clients based in Dindigul, Tamil Nadu through reviews and local citations.</p>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><LineChart size={28} /></div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Backlink Authority</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Acquiring white-hat referral linkages from authoritative domains to grow your Google Domain Rank score.</p>
                </div>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-primary">
              Request Free SEO Audit <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
