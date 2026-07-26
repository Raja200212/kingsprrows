import React, { useState } from 'react';
import { 
  Calculator, Check, ArrowRight, Info, 
  Settings, ShoppingBag, Search, 
  MapPin, Share2, PenTool, Layout, Activity
} from 'lucide-react';

export default function ServicePricingDetails() {
  // Ads Calculator State
  const [dailyBudget, setDailyBudget] = useState(500); // default to 500/day
  const managementFee = 5000;
  const monthlyAdSpend = dailyBudget * 30;
  const totalCost = monthlyAdSpend + managementFee;

  // Tabs for Rate Sheet Categories
  const [activeCategory, setActiveCategory] = useState('all');

  const packages = [
    {
      title: "Website + Google Ads Setup",
      price: "₹15,000",
      type: "One-Time Setup",
      tagline: "Ideal for launching online local visibility.",
      badge: "Starter Boost",
      features: [
        "High-Speed Landing Page / Landing Website",
        "Google Ads Account Setup & Integration",
        "Target Keyword Strategy Research",
        "Conversion Tracking & Analytics Linkage",
        "1 Round of Design Revisions"
      ],
      popular: false
    },
    {
      title: "Website + Google Ads + Meta Ads",
      price: "₹18,000",
      type: "One-Time Setup",
      tagline: "Maximize visibility across Search & Social.",
      badge: "Dual Setup Special",
      features: [
        "Optimized Multi-Section Landing Page",
        "Google Ads + Facebook & Instagram Pixels Setup",
        "Audience Targeting & Customer Persona Setup",
        "Retargeting Campaign Foundation Setup",
        "Google Analytics & GTM Setup included"
      ],
      popular: true
    },
    {
      title: "Complete Digital Marketing",
      price: "₹25,000",
      type: "Monthly Campaign",
      tagline: "Full-scale marketing to capture warm local leads.",
      badge: "Growth Engine",
      features: [
        "Ongoing Google My Business Optimization",
        "Social Media Management (10 posts/mo)",
        "Search Engine Optimization (Basic SEO)",
        "Ad Campaign Monitoring (Google & Meta Ads)",
        "Monthly Performance & Lead Growth Reports"
      ],
      popular: false
    },
    {
      title: "Premium Marketing + SEO",
      price: "₹35,000",
      type: "Monthly Campaign",
      tagline: "Total domination in search engine rankings and branding.",
      badge: "Elite Authority",
      features: [
        "Advanced SEO & Backlink Building Campaign",
        "Content Writing (3-4 SEO articles/mo)",
        "Reels & Short Video Campaigns (10 Reels/mo)",
        "Social Media Posting (15 Graphic posts/mo)",
        "Dedicated Campaign Manager & Priority Support"
      ],
      popular: false
    }
  ];

  const rateSheet = [
    { name: "Website (Landing Page)", category: "dev", oneTime: "₹2,500 – ₹5,000", monthly: "-", icon: <Layout size={16} /> },
    { name: "Business Website (5-10 Pages)", category: "dev", oneTime: "₹12,000 – ₹20,000", monthly: "-", icon: <Layout size={16} /> },
    { name: "E-commerce Website", category: "dev", oneTime: "₹30,000 – ₹100,000+", monthly: "-", icon: <ShoppingBag size={16} /> },
    { name: "Google Business Profile Setup", category: "marketing", oneTime: "₹1,500 – ₹3,000", monthly: "-", icon: <MapPin size={16} /> },
    { name: "SEO (Basic)", category: "seo", oneTime: "-", monthly: "₹7,000 – ₹10,000", icon: <Search size={16} /> },
    { name: "SEO (Advanced)", category: "seo", oneTime: "-", monthly: "₹20,000 – ₹40,000", icon: <Search size={16} /> },
    { 
      name: "Google Ads Management", 
      category: "marketing", 
      oneTime: "Setup: ₹3,000 – ₹5,000", 
      monthly: "₹4,000 – ₹15,000", 
      icon: <Settings size={16} /> 
    },
    { 
      name: "Meta Ads (Facebook & Instagram)", 
      category: "marketing", 
      oneTime: "Setup: ₹4,500 – ₹8,000", 
      monthly: "₹5,000 – ₹10,000", 
      icon: <Share2 size={16} /> 
    },
    { name: "Social Media Management", category: "marketing", oneTime: "-", monthly: "₹5,000 – ₹20,000", icon: <Share2 size={16} /> },
    { name: "Graphic Design (10 Posts)", category: "creative", oneTime: "₹2,000 – ₹3,000", monthly: "-", icon: <PenTool size={16} /> },
    { name: "Reels (10 Videos)", category: "creative", oneTime: "₹3,000 – ₹10,000", monthly: "-", icon: <PenTool size={16} /> },
    { name: "Content Writing", category: "creative", oneTime: "₹300 – ₹1,500 per article", monthly: "-", icon: <PenTool size={16} /> },
    { name: "Logo Design", category: "creative", oneTime: "₹500 – ₹2,500", monthly: "-", icon: <PenTool size={16} /> },
    { name: "Google Analytics & GTM Setup", category: "dev", oneTime: "₹5,000 – ₹15,000", monthly: "-", icon: <Activity size={16} /> }
  ];

  const filteredRates = activeCategory === 'all' 
    ? rateSheet 
    : rateSheet.filter(item => item.category === activeCategory);

  return (
    <section id="detailed-pricing" style={{ padding: '60px 0', borderTop: '1px solid rgba(16, 185, 129, 0.1)' }}>
      {/* Decorative BG Blob */}
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.05) 0%, transparent 70%)',
        filter: 'blur(45px)',
        bottom: '10%',
        left: '5%',
        zIndex: -1
      }} />

      <div className="container">
        {/* SECTION 1: BUNDLE PACKAGES */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge">Featured Deals</span>
          <h2>Value-Packed Combo Bundles</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Get the best return on investment with our bundled digital marketing & web setup packages, designed for explosive growth.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
          gap: '24px', 
          marginBottom: '80px' 
        }}>
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: pkg.popular ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                boxShadow: pkg.popular ? '0 15px 35px rgba(16, 185, 129, 0.1)' : '0 10px 30px rgba(6, 44, 30, 0.02)',
                position: 'relative',
                transform: pkg.popular ? 'translateY(-4px)' : 'none',
                padding: '28px'
              }}
            >
              {pkg.popular && (
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  background: 'var(--primary)',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                }}>
                  Best Seller
                </span>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 650,
                  color: 'var(--secondary)',
                  background: 'rgba(16, 185, 129, 0.08)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: '1px solid rgba(16, 185, 129, 0.12)'
                }}>
                  {pkg.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{pkg.type}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 750, margin: '8px 0 4px' }}>{pkg.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px', minHeight: '38px' }}>{pkg.tagline}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>{pkg.price}</span>
                {pkg.type.includes("Monthly") && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/month</span>}
              </div>

              <div style={{ height: '1px', background: 'rgba(16, 185, 129, 0.1)', marginBottom: '18px' }} />

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1, marginBottom: '24px' }}>
                {pkg.features.map((feat, fidx) => (
                  <li key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    <Check size={14} style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', fontSize: '0.85rem', padding: '10px 18px' }}
              >
                Inquire Bundle <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* SECTION 2: INTERACTIVE ADS CALCULATOR */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.1fr 0.9fr', 
          gap: '40px', 
          alignItems: 'center', 
          background: 'rgba(255, 255, 255, 0.55)', 
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-color)',
          borderRadius: '32px',
          padding: '40px',
          marginBottom: '80px',
          boxShadow: '0 15px 40px rgba(6, 44, 30, 0.03)'
        }} className="calculator-section">
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Calculator style={{ color: 'var(--primary)' }} size={20} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)' }}>Ad Campaign Tool</span>
            </div>
            <h2 style={{ textAlign: 'left', marginBottom: '16px', fontSize: '1.8rem' }}>Google Ads Budget Planner</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: '1.5' }}>
              Transparency is key. Google Ads are paid directly by you to Google, while we manage, test, and optimize the campaigns to deliver maximum lead conversion. Choose a budget below to see your total cost structure.
            </p>

            {/* Presets */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <button 
                onClick={() => setDailyBudget(300)}
                className="btn"
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  background: dailyBudget === 300 ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'rgba(255, 255, 255, 0.7)',
                  color: dailyBudget === 300 ? '#fff' : 'var(--text-primary)',
                  border: dailyBudget === 300 ? 'none' : '1px solid rgba(16, 185, 129, 0.2)',
                  fontWeight: 650
                }}
              >
                ₹300/Day Preset
                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.8, fontWeight: 400 }}>₹9,000 monthly spend</span>
              </button>

              <button 
                onClick={() => setDailyBudget(500)}
                className="btn"
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  background: dailyBudget === 500 ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'rgba(255, 255, 255, 0.7)',
                  color: dailyBudget === 500 ? '#fff' : 'var(--text-primary)',
                  border: dailyBudget === 500 ? 'none' : '1px solid rgba(16, 185, 129, 0.2)',
                  fontWeight: 650
                }}
              >
                ₹500/Day Preset
                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.8, fontWeight: 400 }}>₹15,000 monthly spend</span>
              </button>
            </div>

            {/* Range Slider for custom values */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 600 }}>Custom Daily Ad Budget</span>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>₹{dailyBudget.toLocaleString()}/day</span>
              </div>
              <input 
                type="range" 
                min="200" 
                max="2000" 
                step="50"
                value={dailyBudget}
                onChange={(e) => setDailyBudget(Number(e.target.value))}
                style={{ cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>Min: ₹200/day</span>
                <span>Max: ₹2,000/day</span>
              </div>
            </div>
          </div>

          {/* Calculator Output Display Card */}
          <div style={{
            background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)',
            borderRadius: '24px',
            padding: '30px',
            color: '#fff',
            boxShadow: '0 10px 30px rgba(6, 44, 30, 0.3)'
          }}>
            <h3 style={{ color: '#34d399', fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid rgba(52, 211, 153, 0.2)', paddingBottom: '12px' }}>
              Monthly Fee Breakdown
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Google Ads Spend:</span>
                <span style={{ fontWeight: 600 }}>₹{monthlyAdSpend.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Management Fee:</span>
                <span style={{ fontWeight: 600 }}>+ ₹{managementFee.toLocaleString()}</span>
              </div>

              <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '4px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ color: '#34d399', fontWeight: 650, fontSize: '0.9rem' }}>Total Monthly:</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>₹{totalCost.toLocaleString()}</span>
              </div>
            </div>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderRadius: '12px', 
              padding: '12px',
              display: 'flex',
              gap: '8px',
              fontSize: '0.75rem',
              lineHeight: '1.4',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <Info size={16} style={{ color: '#34d399', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Math Breakdown:</strong> ₹{monthlyAdSpend.toLocaleString()} (Ad budget) + ₹{managementFee.toLocaleString()} (Management fee) = <strong>₹{totalCost.toLocaleString()}</strong> per month.
              </div>
            </div>

            <a 
              href="#contact" 
              className="btn btn-cyan"
              style={{ width: '100%', marginTop: '20px', padding: '12px 20px', fontSize: '0.85rem' }}
            >
              Start Ad Campaign <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* SECTION 3: COMPREHENSIVE SERVICE RATE SHEET */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="badge">Detailed List</span>
            <h2>Individual Service Rates</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Prefer to pick and choose specific solutions? Here is a breakdown of our stand-alone services and rates.
            </p>

            {/* Category Filter Tabs */}
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '8px', background: 'rgba(255, 255, 255, 0.45)', border: '1px solid rgba(16, 185, 129, 0.1)', padding: '5px', borderRadius: '14px', marginTop: '24px' }}>
              {[
                { id: 'all', label: 'All Services' },
                { id: 'dev', label: 'Web & Development' },
                { id: 'marketing', label: 'Marketing & Local' },
                { id: 'seo', label: 'SEO Services' },
                { id: 'creative', label: 'Creative & Design' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: activeCategory === tab.id ? 'var(--primary)' : 'transparent',
                    color: activeCategory === tab.id ? '#fff' : 'var(--text-secondary)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rate Sheet Cards/Table Layout */}
          <div className="glass-card" style={{ padding: '24px 32px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(16, 185, 129, 0.15)' }}>
                  <th style={{ padding: '16px 8px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>Stand-alone Service Name</th>
                  <th style={{ padding: '16px 8px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>One-Time Charge</th>
                  <th style={{ padding: '16px 8px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>Monthly Management Fee</th>
                  <th style={{ padding: '16px 8px', width: '80px' }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredRates.map((item, idx) => (
                  <tr 
                    key={idx} 
                    style={{ 
                      borderBottom: '1px solid rgba(16, 185, 129, 0.08)',
                      transition: 'background-color 0.2s',
                    }}
                    className="rate-row"
                  >
                    <td style={{ padding: '16px 8px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.06)',
                        color: 'var(--primary)'
                      }}>
                        {item.icon}
                      </div>
                      {item.name}
                    </td>
                    <td style={{ padding: '16px 8px', fontSize: '0.85rem', color: item.oneTime === '-' ? 'var(--text-muted)' : 'var(--text-primary)', fontWeight: item.oneTime !== '-' ? 550 : 400 }}>
                      {item.oneTime}
                    </td>
                    <td style={{ padding: '16px 8px', fontSize: '0.85rem', color: item.monthly === '-' ? 'var(--text-muted)' : 'var(--text-primary)', fontWeight: item.monthly !== '-' ? 550 : 400 }}>
                      {item.monthly}
                    </td>
                    <td style={{ padding: '16px 8px', textAlign: 'right' }}>
                      <a 
                        href="#contact" 
                        style={{ 
                          fontSize: '0.75rem', 
                          color: 'var(--primary)', 
                          textDecoration: 'none', 
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}
                      >
                        Book <ArrowRight size={10} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Styled JSX for Responsive Styles */}
      <style>{`
        @media (max-width: 820px) {
          .calculator-section {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
        .rate-row:hover {
          background-color: rgba(16, 185, 129, 0.03);
        }
      `}</style>
    </section>
  );
}
