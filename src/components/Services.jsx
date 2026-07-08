import React, { useState } from 'react';
import { 
  Search, Share2, MapPin, Target, Send, Mail, 
  ShoppingBag, Monitor, Code, Layout, Terminal 
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('marketing');

  const marketingServices = [
    {
      icon: <Search size={24} />,
      title: 'SEO (Search Engine Optimization)',
      desc: 'Rank on the first page of Google to capture high-intent organic traffic consistently.',
      features: ['Keyword & Competitor Audits', 'On-Page & Technical SEO Optimization', 'High-Quality Backlink Building']
    },
    {
      icon: <Share2 size={24} />,
      title: 'Social Media Marketing (SMM)',
      desc: 'Build a loyal digital community across Facebook, Instagram, LinkedIn, and Twitter.',
      features: ['Creative Campaign Copywriting', 'Targeted Ad Management', 'Audience Growth & Engagement Tracking']
    },
    {
      icon: <MapPin size={24} />,
      title: 'Google My Business (GMB)',
      desc: 'Dominate local search lists. Make it easy for nearby customers to discover your business location.',
      features: ['GMB Map Profile Optimization', 'Positive Review Growth Campaigns', 'Local SEO & Citation Building']
    },
    {
      icon: <Target size={24} />,
      title: 'Lead Generation',
      desc: 'Fuel your sales pipeline with verified, high-intent prospective client contacts.',
      features: ['Automated Lead Magnets', 'Landing Page Conversion Optimization', 'B2B/B2C Audience Research']
    },
    {
      icon: <Send size={24} />,
      title: 'WhatsApp Automation Tool',
      desc: 'Reach thousands of clients instantly with automated alerts, notifications, and broadcasts.',
      features: ['Bulk Campaign Scheduling', 'Contact List CSV Uploads', 'Real-Time ROI Statistics Dashboard']
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Marketing System',
      desc: 'Drive repeated purchases and build brand affinity using automated email flows.',
      features: ['Custom Drag-and-Drop Templates', 'Behavioral Email Triggers', 'A/B Subject Line Split Testing']
    }
  ];

  const devServices = [
    {
      icon: <Code size={24} />,
      title: 'Web App Development',
      desc: 'Custom React JSX application panels, robust backend integrations, and interactive interfaces.',
      features: ['Responsive React & Next.js Frameworks', 'Highly Secure API Architecture', 'Cloud Deployment & Monitoring']
    },
    {
      icon: <ShoppingBag size={24} />,
      title: 'E-Commerce Platforms',
      desc: 'High-conversion online stores with secure checkout, payment gateways, and inventory panels.',
      features: ['Dynamic Cart & Catalog Systems', 'Stripe, PayPal, UPI Integration', 'Custom Admin Management Dashboards']
    },
    {
      icon: <Layout size={24} />,
      title: 'Static Websites',
      desc: 'Lightning-fast, highly optimized marketing landing pages with crisp typography.',
      features: ['Optimized Next.js/Vite Static Exports', 'Perfect Google Lighthouse Scores', 'Hosting on CDN (Vercel, Netlify)']
    },
    {
      icon: <Terminal size={24} />,
      title: 'Dynamic Web Platforms',
      desc: 'Interactive portals with user login sessions, databases, blogs, and content systems.',
      features: ['Headless CMS Integrations', 'Interactive User Dashboards', 'Robust Database Syncing (SQL/NoSQL)']
    },
    {
      icon: <Monitor size={24} />,
      title: 'Desktop Software',
      desc: 'Stand-alone desktop tools with offline compatibility, background sync, and system controls.',
      features: ['Electron.js cross-platform runtimes', 'Native system operations & files', 'Automatic silent updater channels']
    }
  ];

  return (
    <section id="services" style={{ borderTop: '1px solid rgba(16, 185, 129, 0.15)', position: 'relative' }}>
      {/* Decorative Blur circles */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
        top: '20%',
        left: '-100px',
        zIndex: -1
      }} />

      <div className="container">
        <div className="reveal active" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge">Our Expertise</div>
          <h2>Transformative Digital Solutions</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            We design high-converting marketing campaigns and build fast, responsive applications custom-tailored to accelerate your business growth.
          </p>

          {/* Toggle Tabs */}
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
              Digital Marketing & Tools
            </button>
            <button 
              onClick={() => setActiveTab('dev')}
              style={{
                background: activeTab === 'dev' ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'transparent',
                color: activeTab === 'dev' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontFamily: 'var(--heading)',
                fontWeight: 600,
                transition: 'all 0.3s'
              }}
            >
              Websites & Desktop Software
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid-3" style={{ minHeight: '450px' }}>
          {(activeTab === 'marketing' ? marketingServices : devServices).map((service, idx) => (
            <div key={idx} className="glass-card reveal active" style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              gap: '16px',
              animation: `fadeIn 0.5s ease forwards`,
              animationDelay: `${idx * 0.1}s`
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.15)'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 650 }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1 }}>{service.desc}</p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '8px',
                borderTop: '1px solid rgba(16, 185, 129, 0.1)',
                paddingTop: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {service.features.map((feat, fidx) => (
                  <li key={fidx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    color: 'var(--text-primary)'
                  }}>
                    <span style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      boxShadow: '0 0 6px var(--primary)'
                    }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
