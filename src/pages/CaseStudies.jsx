import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Check, AlertTriangle, TrendingUp, ArrowRight
} from 'lucide-react';

export default function CaseStudies() {
  const [filter, setFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      category: 'marketing',
      title: "Healthcare Digital Marketing",
      client: "Multi-Specialty Hospital",
      challenge: "The hospital had a professional medical team but struggled to attract patients online. Their website had low search engine visibility, limited social media engagement, and they received very few appointment enquiries through digital channels.",
      solutions: [
        "Redesigned the hospital website for better user experience.",
        "Implemented on-page and technical SEO.",
        "Optimized Google My Business profile.",
        "Managed Google Ads campaigns for high-intent medical keywords.",
        "Ran Meta Ads for health awareness campaigns.",
        "Created engaging social media content and videos.",
        "Added online appointment booking and WhatsApp integration."
      ],
      results: [
        { label: "Organic traffic growth", val: "+180%" },
        { label: "Online enquiries growth", val: "+120%" },
        { label: "GMB map view growth", val: "+250%" },
        { label: "Cost-per-lead reduction", val: "-35%" }
      ],
      tag: "SEO, PPC & SMM"
    },
    {
      id: 2,
      category: 'dev',
      title: "Construction Website & CRM",
      client: "Construction & Civil Engineering Company",
      challenge: "The company relied on spreadsheets and phone calls to manage projects, employees, and client communication. This led to delays, data duplication, and limited visibility into project progress.",
      solutions: [
        "Developed a custom Construction Management System.",
        "Added project tracking and progress monitoring.",
        "Implemented employee attendance and task management.",
        "Created client dashboards for project updates.",
        "Integrated invoice and document management.",
        "Deployed the solution securely in the cloud."
      ],
      results: [
        { label: "Project tracking latency", val: "Real-Time" },
        { label: "Admin work reduction", val: "Significant" },
        { label: "Internal sync speedup", val: "Faster" },
        { label: "Timelines & Delivery", val: "Improved" }
      ],
      tag: "Custom CRM & Cloud ERP"
    },
    {
      id: 3,
      category: 'seo',
      title: "Local Business SEO",
      client: "Local Service Business",
      challenge: "The business had a website but wasn't appearing in local search results. Most enquiries came from referrals, limiting growth.",
      solutions: [
        "Performed detailed keyword research.",
        "Optimized website pages for local SEO.",
        "Improved page speed and mobile responsiveness.",
        "Created location-specific landing pages.",
        "Optimized Google Business Profile.",
        "Built high-quality local citations and backlinks."
      ],
      results: [
        { label: "Local target keywords", val: "Page #1" },
        { label: "Organic traffic growth", val: "+160%" },
        { label: "Map view visibility", val: "High Boost" },
        { label: "Direct phone inquiries", val: "Doubled" }
      ],
      tag: "Local SEO Specialist"
    },
    {
      id: 4,
      category: 'marketing',
      title: "Google Ads Lead Gen",
      client: "Taxi & Travel Service",
      challenge: "The company wanted more direct bookings for intercity taxi services but was spending on advertising without consistent results.",
      solutions: [
        "Restructured Google Ads campaigns.",
        "Focused on high-conversion search keywords.",
        "Optimized ad copy and dedicated landing pages.",
        "Added granular conversion tracking.",
        "Used location-specific extensions.",
        "Continuously monitored and optimized bids."
      ],
      results: [
        { label: "Qualified leads growth", val: "+140%" },
        { label: "Cost-per-booking reduction", val: "-30%" },
        { label: "Click-through rate (CTR)", val: "Higher" },
        { label: "Direct taxi bookings", val: "More Calls" }
      ],
      tag: "Google Search PPC"
    },
    {
      id: 5,
      category: 'dev',
      title: "Custom CRM Development",
      client: "Sales & Service Company",
      challenge: "Customer information was stored across multiple Excel files, making lead follow-ups and reporting difficult.",
      solutions: [
        "Developed a secure cloud-based CRM system.",
        "Automated lead assignments & pipelines.",
        "Added custom agent follow-up notifications.",
        "Integrated instant WhatsApp broadcasts.",
        "Built administrative sales charts & reports.",
        "Implemented role-based user access controls."
      ],
      results: [
        { label: "Lead response times", val: "Immediate" },
        { label: "Sales productivity", val: "Optimized" },
        { label: "Database records", val: "Centralized" },
        { label: "Client retention rates", val: "Increased" }
      ],
      tag: "Cloud Database CRM"
    }
  ];

  const resultsThatMatter = [
    "Increased Organic Traffic",
    "Higher Quality Leads",
    "Better Search Engine Rankings",
    "Improved Conversion Rates",
    "Reduced Advertising Costs",
    "Enhanced Customer Experience",
    "Streamlined Business Operations",
    "Increased Revenue Potential",
    "Better Return on Investment (ROI)"
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === filter);

  return (
    <>
      <Helmet>
        <title>Case Studies & Results | KingSparrow Digital Marketing & Custom Software</title>
        <meta name="description" content="Explore real-world case studies detailing how we scaled organic SEO traffic, optimized Google Ads conversion, and developed custom CRM systems." />
        <link rel="canonical" href="https://www.kingsparrows.in/case-studies" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '85vh' }}>
        <div className="container" style={{ maxWidth: '1050px', textAlign: 'center' }}>
          
          {/* Header Title */}
          <div className="reveal active" style={{ marginBottom: '50px' }}>
            <span className="badge">Proof of Growth</span>
            <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Real Results. <span className="text-gradient">Real Business Growth.</span>
            </h1>
            <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Every business faces unique challenges. Our team combines digital marketing expertise and custom software development to create tailored solutions that deliver measurable results. Explore how we've helped clients increase traffic, generate leads, improve efficiency, and achieve their business goals.
            </p>

            {/* Filter Tabs */}
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '8px', background: 'rgba(255, 255, 255, 0.45)', border: '1px solid rgba(184, 144, 71, 0.1)', padding: '5px', borderRadius: '14px', marginTop: '36px' }}>
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'marketing', label: 'Digital Marketing & Ads' },
                { id: 'dev', label: 'Software & CRM Platforms' },
                { id: 'seo', label: 'Search Optimization (SEO)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: filter === tab.id ? 'var(--primary)' : 'transparent',
                    color: filter === tab.id ? '#fff' : 'var(--text-secondary)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Case Studies */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '80px' }}>
            {filteredStudies.map((cs) => (
              <div 
                key={cs.id} 
                className="glass-card reveal active case-study-card" 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '40px', 
                  padding: '40px',
                  textAlign: 'left',
                  alignItems: 'stretch'
                }}
              >
                
                {/* Left Side: Challenge & Solution */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--secondary)',
                      background: 'rgba(184, 144, 71, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid rgba(184, 144, 71, 0.12)'
                    }}>
                      {cs.tag}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '12px' }}>{cs.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Client: {cs.client}</p>
                  </div>

                  <div style={{ background: 'rgba(239, 68, 68, 0.03)', border: '1px solid rgba(239, 68, 68, 0.12)', borderRadius: '12px', padding: '16px', display: 'flex', gap: '10px' }}>
                    <AlertTriangle size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: '#ef4444' }}>The Challenge</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>{cs.challenge}</p>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>Our Solution</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {cs.solutions.map((sol, sIdx) => (
                        <li key={sIdx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          <Check size={14} style={{ color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Results Metrics */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)', 
                  borderRadius: '20px', 
                  padding: '36px', 
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(13, 34, 64, 0.2)'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(52, 211, 153, 0.2)', paddingBottom: '12px', marginBottom: '24px' }}>
                      <TrendingUp style={{ color: '#d4af37' }} size={20} />
                      <h4 style={{ color: '#d4af37', fontSize: '1rem', fontWeight: 750 }}>Measurable Results</h4>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {cs.results.map((res, rIdx) => (
                        <div key={rIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)' }}>{res.label}</span>
                          <strong style={{ fontSize: '1.8rem', color: '#d4af37', fontWeight: 800 }}>{res.val}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="btn btn-cyan" 
                    style={{ width: '100%', padding: '12px', fontSize: '0.85rem', marginTop: '24px' }}
                  >
                    Achieve Similar Results <ArrowRight size={14} />
                  </a>

                </div>

              </div>
            ))}
          </div>

          {/* Process Section */}
          <div style={{ borderTop: '1px solid rgba(184, 144, 71, 0.15)', paddingTop: '60px', marginBottom: '80px' }} className="reveal active">
            <span className="badge">Methodology</span>
            <h2>Our Process</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
              {[
                { step: "1", title: "Understand the Challenge", desc: "We begin by learning about your business goals, current workflows, and core pain points." },
                { step: "2", title: "Build the Right Solution", desc: "Our team designs and implements tailored digital marketing strategies or custom software solutions." },
                { step: "3", title: "Measure Performance", desc: "We track key metrics such as traffic, leads, conversions, and operational efficiency to ensure measurable success." },
                { step: "4", title: "Optimize for Growth", desc: "Using performance insights, we continuously improve campaigns and systems to maximize long-term results." }
              ].map((p, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '24px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(184, 144, 71, 0.15)' }}>{p.step}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 750 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results That Matter Section */}
          <div style={{ marginBottom: '80px' }} className="reveal active">
            <span className="badge">Impact</span>
            <h2>Results That Matter</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 30px auto', color: 'var(--text-secondary)' }}>
              We focus on outcomes that help businesses grow and streamline operations.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '850px', margin: '0 auto' }}>
              {resultsThatMatter.map((item, idx) => (
                <div 
                  key={idx} 
                  className="glass-card"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 650,
                    color: 'var(--text-secondary)',
                    boxShadow: 'none',
                    border: '1px solid rgba(184, 144, 71, 0.12)'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Success */}
          <div className="reveal active" style={{
            background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)',
            borderRadius: '24px',
            padding: '50px 30px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(13, 34, 64, 0.2)',
            border: '1px solid rgba(184, 144, 71, 0.15)'
          }}>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '12px' }}>Ready to Be Our Next Success Story?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Every business is different, and so is every solution we build. Whether you need a high-performing marketing campaign or custom software that transforms your operations, we're ready to help you achieve measurable growth.
            </p>
            <a 
              href="/contact" 
              className="btn btn-cyan"
              style={{ display: 'inline-flex', gap: '8px', padding: '12px 24px', fontSize: '0.85rem' }}
            >
              Book a Free Consultation <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* Styled JSX for Responsive Design */}
      <style>{`
        @media (max-width: 820px) {
          .case-study-card {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
