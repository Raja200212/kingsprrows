import React, { useState } from 'react';
import { Check, ArrowRight, Calculator, ShieldCheck } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('combos');

  const combos = [
    {
      title: "Website + Google Ads",
      price: "₹15,000",
      period: "starter bundle",
      desc: "Perfect combination to launch your business and start acquiring leads instantly.",
      features: [
        "Business Website (5-10 Pages)",
        "Google Ads Campaign Setup",
        "Basic Landing Page Optimization",
        "Contact Form & Lead Capture",
        "WhatsApp Click-to-Chat Integration"
      ],
      popular: false
    },
    {
      title: "Website + Google & Meta Ads",
      price: "₹18,000",
      period: "growth bundle",
      desc: "Expanded reach across both Google search and Facebook/Instagram social feeds.",
      features: [
        "Business Website (5-10 Pages)",
        "Google Ads Setup & Campaign Launch",
        "Meta Ads Setup & Ad Groups Configuration",
        "Facebook Pixel Setup & Tracking Integration",
        "WhatsApp & Analytics Configurations"
      ],
      popular: false
    },
    {
      title: "Complete Digital Marketing",
      price: "₹25,000",
      period: "monthly retainer",
      desc: "Full-scale marketing support covering SEO, paid search, social feeds, and graphics.",
      features: [
        "Monthly SEO (Basic Optimization Tiers)",
        "Google Ads Daily Budget Coordination",
        "Meta Ads Management & Retargeting",
        "Social Media Management (Planning & Scheduling)",
        "Graphic Design (Posts & Banners)",
        "Monthly Performance Reports & Strategy Consultation"
      ],
      popular: true
    },
    {
      title: "Premium Marketing + SEO",
      price: "₹35,000",
      period: "monthly retainer",
      desc: "Maximum scaling using advanced content, maps optimizations, reels, and video hooks.",
      features: [
        "Advanced SEO Tiers & Competitor Analysis",
        "Google Ads Management & Optimization",
        "Meta Ads Management & Lookalike Targeting",
        "Social Media & Video/Reels Marketing Tiers",
        "Professional Content Writing & Local Citations",
        "Google Business Profile Optimization (GMB)",
        "Detailed Performance Reports & Monthly Review Meetings"
      ],
      popular: false
    }
  ];

  const standaloneTiers = [
    {
      category: "Website Development Tiers",
      items: [
        { name: "Landing Page Website", price: "₹2,500 – ₹5,000", note: "Single scroll layout" },
        { name: "Business Website (5–10 Pages)", price: "₹12,000 – ₹20,000", note: "Corporate & service sites" },
        { name: "E-Commerce Website", price: "₹30,000 – ₹1,00,000+", note: "Payment gateways & cart panels" },
        { name: "Google Business Profile Setup", price: "₹1,500 – ₹3,000", note: "GMB optimization & map configurations" }
      ],
      features: [
        "Mobile Responsive Design", "SEO-Friendly Structure", "Contact Form Integration",
        "WhatsApp Integration", "Google Maps Setup", "SSL Guidance", "Basic Performance Tuneup"
      ]
    },
    {
      category: "SEO Packages",
      items: [
        { name: "Basic SEO Package", price: "₹7,000 – ₹10,000 / Month", note: "Includes Keywords, On-Page, Meta Tags, GSC Setup, Monthly Report" },
        { name: "Advanced SEO Package", price: "₹20,000 – ₹40,000 / Month", note: "Basic + Local, Link Building, Competitor Strategy, Monthly Strategic Review" }
      ]
    },
    {
      category: "Paid Ads Management (Monthly)",
      items: [
        { name: "Google Ads (Setup)", price: "₹3,000 – ₹5,000", note: "One-time onboarding" },
        { name: "Google Ads (Management)", price: "₹4,000 – ₹15,000 / Month", note: "Optimizations & keyword bidding reviews" },
        { name: "Meta Ads (Setup)", price: "₹4,500 – ₹8,000", note: "Facebook/Instagram onboard" },
        { name: "Meta Ads (Management)", price: "₹5,000 – ₹10,000 / Month", note: "Pixel analytics & retargeting setup" }
      ]
    },
    {
      category: "Creative Content & Assets",
      items: [
        { name: "Social Media Management", price: "₹5,000 – ₹20,000 / Month", note: "Caption writing, hashtags, planning, posts scheduling" },
        { name: "Graphic Design (10 Posts)", price: "₹2,000 – ₹3,000", note: "Banners, products, festival flyers" },
        { name: "Reels & Short Videos (10 Reels)", price: "₹3,000 – ₹10,000", note: "Subtitles, transitions, video editing" },
        { name: "Logo Design", price: "₹500 – ₹2,500", note: "Concepts, PNG, SVG vectors" },
        { name: "Content Writing", price: "₹300 – ₹1,500 / Article", note: "Web copy, SEO blog posts, sales descriptions" },
        { name: "Google Analytics & GTM Setup", price: "₹5,000 – ₹15,000", note: "Event triggers, conversion tracking dashboards" }
      ]
    }
  ];

  const customSoftwareSolutions = [
    "CRM Software", "ERP Systems", "HR Management Systems", 
    "Inventory Management", "Construction Management Software", 
    "Hospital Management Software", "School & College Management Systems", 
    "E-Commerce Platforms", "Mobile Applications", "Custom Business Dashboards"
  ];

  return (
    <section id="pricing" style={{ padding: '80px 0', borderTop: '1px solid rgba(16, 185, 129, 0.15)', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
        filter: 'blur(50px)',
        top: '10%',
        right: '-100px',
        zIndex: -1
      }} />

      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Title Header */}
        <div className="reveal active" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge">Flexible Pricing</span>
          <h2>Transparent Pricing for Every Business</h2>
          <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.5' }}>
            Whether you're launching a new business, improving your online presence, or scaling with custom software, we offer flexible pricing designed to fit your goals and budget. Every project is customized to your requirements, ensuring you receive the best value and measurable results.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '16px' }}>
            * Note: Prices below are starting estimates. Final pricing may vary based on project scope, features, and customization requirements.
          </p>

          {/* Toggle Tabs */}
          <div className="tab-container" style={{ marginTop: '30px' }}>
            <button 
              onClick={() => setActiveTab('combos')}
              className={`tab-button ${activeTab === 'combos' ? 'active' : ''}`}
            >
              Digital Marketing Combos
            </button>
            <button 
              onClick={() => setActiveTab('individual')}
              className={`tab-button ${activeTab === 'individual' ? 'active' : ''}`}
            >
              Standalone Rate Card
            </button>
            <button 
              onClick={() => setActiveTab('custom')}
              className={`tab-button ${activeTab === 'custom' ? 'active' : ''}`}
            >
              Custom Software Development
            </button>
          </div>
        </div>

        {/* Tab 1: Combos Grid */}
        {activeTab === 'combos' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
            {combos.map((combo, idx) => (
              <div 
                key={idx} 
                className="glass-card reveal active" 
                style={{ 
                  padding: '30px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '20px', 
                  border: combo.popular ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  position: 'relative'
                }}
              >
                {combo.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: 'var(--primary)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase'
                  }}>
                    Recommended
                  </span>
                )}
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Package Tier</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0 12px 0' }}>{combo.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)' }}>{combo.price}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ {combo.period}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginTop: '12px' }}>
                    {combo.desc}
                  </p>
                </div>
                <div style={{ height: '1px', background: 'rgba(16, 185, 129, 0.12)' }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                  {combo.features.map((feat, fidx) => (
                    <li key={fidx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '12px' }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Individual Tiers Table */}
        {activeTab === 'individual' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
            {standaloneTiers.map((tier, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 850, borderBottom: '1px solid rgba(16, 185, 129, 0.15)', paddingBottom: '12px', marginBottom: '20px', color: 'var(--primary)' }}>
                  {tier.category}
                </h3>
                
                {/* Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {tier.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{ maxWidth: '70%' }}>
                        <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.name}</strong>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>{item.note}</p>
                      </div>
                      <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>{item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Features (if website development section) */}
                {tier.features && (
                  <div style={{ marginTop: '20px', borderTop: '1px solid rgba(16, 185, 129, 0.08)', paddingTop: '16px' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>Included Features:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
                      {tier.features.map((feat, fidx) => (
                        <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <Check size={14} style={{ color: 'var(--primary)' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Google Ads Budget Guide Block */}
            <div className="glass-card ads-budget-card" style={{ padding: '30px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'center' }}>
              <div>
                <span className="badge">Google Ads Budget Guide</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '10px 0 12px 0' }}>Google Ads Budget Guide</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Advertising campaign spend is paid directly by the client to Google. Our management fees are charged separately.
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'rgba(16, 185, 129, 0.05)', padding: '12px 16px', borderRadius: '10px', marginTop: '16px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                  <Calculator size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Example: spend ₹15,000 + management fee ₹5,000 = ₹20,000 total investment.
                  </span>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)', borderRadius: '16px', padding: '24px', color: '#fff' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(52, 211, 153, 0.2)' }}>
                      <th style={{ textAlign: 'left', padding: '10px 0', color: '#34d399' }}>Daily Budget</th>
                      <th style={{ textAlign: 'right', padding: '10px 0', color: '#34d399' }}>Monthly Ad Spend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '12px 0' }}>₹300/day</td>
                      <td style={{ textAlign: 'right', padding: '12px 0', fontWeight: 700 }}>₹9,000</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 0' }}>₹500/day</td>
                      <td style={{ textAlign: 'right', padding: '12px 0', fontWeight: 700 }}>₹15,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Custom Software Development */}
        {activeTab === 'custom' && (
          <div className="glass-card" style={{ padding: '40px', textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'stretch' }} className="software-pricing-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span className="badge">Custom Architectures</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '10px 0 12px 0' }}>Custom Software Development</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Every business has unique requirements. We provide custom-built software solutions tailored specifically to your workflow, dashboard parameters, and scaling objectives.
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
                  {customSoftwareSolutions.map((sol, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }} />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Pricing is evaluated case-by-case based on project scope, features, database integrations, and developmental timelines.
                </p>
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)', 
                borderRadius: '24px', 
                padding: '36px', 
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(6, 44, 30, 0.2)'
              }}>
                <div>
                  <h4 style={{ color: '#34d399', fontSize: '1.15rem', fontWeight: 750, marginBottom: '12px' }}>Request a Custom Quotation</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.5' }}>
                    Speak directly with our software architects to review system logic, databases configurations, and estimate your custom implementation plans.
                  </p>
                </div>
                <a href="/contact" className="btn btn-cyan" style={{ width: '100%', marginTop: '24px' }}>
                  Request Free Consultation <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Section: Why Choose Our Pricing */}
        <div style={{ borderTop: '1px solid rgba(16, 185, 129, 0.15)', paddingTop: '60px', marginTop: '60px', marginBottom: '60px' }} className="reveal active">
          <span className="badge">Benefits</span>
          <h2>Why Choose Our Pricing?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '40px', textAlign: 'left' }}>
            {[
              { title: "Transparent Pricing", desc: "Clearly itemized rates. You know exactly what is included in your deliverables." },
              { title: "No Hidden Charges", desc: "No sudden billing spikes. All configuration scopes are locked in upfront." },
              { title: "Flexible Packages", desc: "Tiers that fit startups, localized businesses, or global companies." },
              { title: "Customized Solutions", desc: "We align channels and feature configurations to match your exact budget parameters." }
            ].map((p, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <ShieldCheck size={20} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 750 }}>{p.title}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Need a Custom Quote CTA */}
        <div className="reveal active" style={{
          background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)',
          borderRadius: '24px',
          padding: '50px 30px',
          color: '#fff',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(6, 44, 30, 0.2)',
          border: '1px solid rgba(16, 185, 129, 0.15)'
        }}>
          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '12px' }}>Need a Custom Quote?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '650px', margin: '0 auto 24px auto', fontSize: '0.9rem', lineHeight: '1.5' }}>
            Every business is different, and we believe your solution should be too. If your project requires custom features or a tailored marketing strategy, our team will prepare a personalized proposal based on your goals and budget.
          </p>
          <a 
            href="/contact" 
            className="btn btn-cyan"
            style={{ display: 'inline-flex', gap: '8px', padding: '12px 24px', fontSize: '0.85rem' }}
          >
            Get Free Consultation & Quote <ArrowRight size={16} />
          </a>
        </div>

      </div>

      {/* Styled JSX for Responsive Grid Overrides */}
      <style>{`
        @media (max-width: 820px) {
          .ads-budget-card, .software-pricing-card {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
