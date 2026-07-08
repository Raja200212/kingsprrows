import React, { useState } from 'react';
import { Check, Zap, Sparkles, Code, Globe, Database, ShoppingBag, Smartphone, Monitor } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('marketing');

  const marketingPlans = [
    {
      name: 'Gold Plan',
      price: 'Rs. 15,000',
      period: 'one-time',
      desc: 'Perfect for small brands looking to build an initial active social presence.',
      icon: <Zap size={24} style={{ color: 'var(--primary)' }} />,
      features: [
        '4 Professionally Designed Posters',
        '6 High-Converting Short Videos',
        'Campaign Target Research',
        'Standard Email Support',
        'Deliverables within 10 days'
      ],
      popular: false
    },
    {
      name: 'Silver Plan',
      price: 'Rs. 25,000',
      period: 'one-time',
      desc: 'Our most popular plan for businesses wanting high engagement and automated reach.',
      icon: <Sparkles size={24} style={{ color: 'var(--secondary)' }} />,
      features: [
        '12 Professionally Designed Posters',
        '8 High-Converting Short Videos',
        'WhatsApp Campaign Panel (1 Month Free)',
        'Audience Segment Configuration',
        'Priority Chat Support',
        'Deliverables within 14 days'
      ],
      popular: true
    },
    {
      name: 'Prime Plan',
      price: 'Rs. 30,000',
      period: 'one-time',
      desc: 'Ultimate campaign scaling with custom AI video generation and broadcast tools.',
      icon: <Zap size={24} style={{ color: 'var(--primary)' }} />,
      features: [
        '12 High-Converting Videos',
        '3 Advanced AI-Generated Videos',
        'WhatsApp Bulk Broadcasting Tools Suite',
        'Target Competitor Intelligence Report',
        '24/7 Priority Account Manager',
        'Custom Campaigns Coordination'
      ],
      popular: false
    }
  ];

  const devPlans = [
    {
      name: 'Static Website',
      price: 'Rs. 2,000',
      desc: 'Fast, sleek landing pages or brochure websites to showcase your services online.',
      icon: <Globe size={24} style={{ color: 'var(--primary)' }} />,
      features: [
        'Custom React JSX Layout',
        'Fully Responsive & Mobile Optimized',
        'SEO Metadata Setup',
        'Perfect PageSpeed Scores',
        'Contact Form Integration'
      ]
    },
    {
      name: 'Dynamic Portal',
      price: 'Rs. 15,000',
      desc: 'Interactive platforms requiring databases, user dashboards, and custom controls.',
      icon: <Database size={24} style={{ color: 'var(--secondary)' }} />,
      features: [
        'Structured SQL/NoSQL Database Sync',
        'Secure User Login & Session Management',
        'Interactive Administrative Dashboard',
        'Real-time Data Fetching APIs',
        'Role-Based User Permissions'
      ]
    },
    {
      name: 'E-Commerce Store',
      price: 'Rs. 30,000',
      desc: 'Complete digital storefront with product inventories and checkout gateways.',
      icon: <ShoppingBag size={24} style={{ color: 'var(--primary)' }} />,
      features: [
        'Upload & Manage up to 25 Products',
        'Secure Payment Gateways (Stripe, UPI, Cards)',
        'Shopping Cart & Checkout System',
        'Order History Admin Panel',
        'Localized Delivery Configuration'
      ],
      popular: true
    },
    {
      name: 'Mobile Application',
      price: 'Rs. 25,000',
      desc: 'Dedicated cross-platform mobile apps for Android and iOS systems.',
      icon: <Smartphone size={24} style={{ color: 'var(--secondary)' }} />,
      features: [
        'Universal Android & iOS Support',
        'API Core synchronization',
        'Real-time Push Notifications',
        'Native GPS/Camera access setup',
        'App Store publishing channel guides'
      ]
    },
    {
      name: 'Desktop App (Electron)',
      price: 'Rs. 20,000',
      desc: 'Cross-platform native desktop utility software with offline system access.',
      icon: <Monitor size={24} style={{ color: 'var(--primary)' }} />,
      features: [
        'Cross-platform runtimes (Windows/Mac)',
        'Native File Operations & system access',
        'Local SQLite Database Integration',
        'Automatic silent updates channels',
        'Offline background syncing'
      ]
    }
  ];

  return (
    <section id="pricing" style={{ borderTop: '1px solid rgba(16, 185, 129, 0.15)', position: 'relative' }}>
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

      <div className="container">
        <div className="reveal active" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge">Transparent Pricing</div>
          <h2>Packages Fit For Growth</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Choose the perfect campaign bundle or custom software tier to accelerate your business pipelines.
          </p>

          {/* Selector Switch Button */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.55)',
            border: '1px solid rgba(16, 185, 129, 0.15)',
            padding: '6px',
            borderRadius: '9999px',
            marginTop: '32px'
          }}>
            <button 
              onClick={() => setActiveTab('marketing')}
              style={{
                background: activeTab === 'marketing' ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'transparent',
                color: activeTab === 'marketing' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontFamily: 'var(--heading)',
                fontWeight: 600,
                transition: 'all 0.3s'
              }}
            >
              Marketing Campaigns
            </button>
            <button 
              onClick={() => setActiveTab('development')}
              style={{
                background: activeTab === 'development' ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'transparent',
                color: activeTab === 'development' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontFamily: 'var(--heading)',
                fontWeight: 600,
                transition: 'all 0.3s'
              }}
            >
              Software & Web Development
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: activeTab === 'marketing' ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          alignItems: 'stretch'
        }} className="pricing-grid">
          {(activeTab === 'marketing' ? marketingPlans : devPlans).map((plan, idx) => (
            <div 
              key={idx} 
              className="glass-card reveal active" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                padding: '36px',
                gap: '24px',
                position: 'relative',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                boxShadow: plan.popular ? '0 15px 40px rgba(16, 185, 129, 0.08)' : '0 10px 40px rgba(6, 44, 30, 0.04)',
                transform: plan.popular ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              {plan.popular && (
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  background: 'var(--primary)',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Most Popular
                </span>
              )}

              {/* Title & Price Header */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {plan.icon}
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{plan.name}</h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{plan.desc}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '12px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(16, 185, 129, 0.15)' }} />

              {/* Features List */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                flexGrow: 1
              }}>
                {plan.features.map((feat, fidx) => (
                  <li key={fidx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <Check size={16} style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Action Button */}
              <a 
                href="#contact" 
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', marginTop: '12px' }}
              >
                Get Started Now
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom responsive overrides */}
      <style>{`
        @media (max-width: 968px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
