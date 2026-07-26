import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { 
  Check, ArrowRight, HelpCircle, ChevronDown, 
  MessageCircle, Mail, Phone, MapPin
} from 'lucide-react';

export default function Home() {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const processSteps = [
    { num: "1", name: "Consultation", desc: "We understand your business goals, target audience, and operational challenges." },
    { num: "2", name: "Planning", desc: "We create a customized digital strategy, software architecture roadmap, and project timeline." },
    { num: "3", name: "Development", desc: "Our developers and marketers design, build, optimize, and test your custom solution." },
    { num: "4", name: "Launch", desc: "We deploy your project to production servers and ensure everything runs smoothly." },
    { num: "5", name: "Growth", desc: "We provide ongoing digital marketing optimization, maintenance, and expert support." }
  ];

  const whyChooseUs = [
    "Experienced Digital Marketing Professionals",
    "Custom Software Built for Your Business",
    "SEO-Friendly Website Development",
    "Transparent Reporting & Metrics",
    "Affordable Pricing & Value Tiers",
    "Dedicated Support Team",
    "Fast Project Delivery Checkpoints",
    "Latest Technologies & AI Integration"
  ];

  const industries = [
    "Healthcare", "Construction", "Real Estate", "Education", 
    "Travel & Tourism", "Taxi Services", "Restaurants", 
    "Retail & E-Commerce", "Manufacturing", "Startups", 
    "Finance", "Professional Services"
  ];

  const recentProjects = [
    { title: "Hospital Website & SEO", desc: "Doubled local organic patient appointments in 90 days." },
    { title: "Construction Management Software", desc: "Custom web platform to track site labor, inventory, and invoices." },
    { title: "CRM for Sales Teams", desc: "Integrated pipeline tracking with WhatsApp CRM notifications." },
    { title: "Taxi Booking Website", desc: "Real-time landing page with booking forms for local cabs." },
    { title: "E-Commerce Store", desc: "High-performance store with local UPI gateway checkout." },
    { title: "School Management System", desc: "Administration portal for fees, grades, and parent notifications." },
    { title: "WhatsApp CRM Tool", desc: "Broadcast utility with automated contact list grouping." },
    { title: "AI Chatbot Solutions", desc: "Automated support bot that handles 70% of basic web inquiries." }
  ];

  const testimonials = [
    {
      quote: "Our website traffic doubled within three months, and we started receiving high-quality leads consistently.",
      author: "Local Hospital Admin"
    },
    {
      quote: "The CRM system simplified our operations and significantly improved team productivity.",
      author: "Operations Manager"
    },
    {
      quote: "Professional service, timely delivery, and excellent communication throughout the project.",
      author: "E-commerce Founder"
    }
  ];

  const faqs = [
    {
      q: "How long does SEO take?",
      a: "SEO generally takes 3–6 months to show significant improvements, depending on search competition, target keyword difficulty, and your website's current technical state."
    },
    {
      q: "Do you build custom software?",
      a: "Yes. We develop custom CRM, ERP portals, database web applications, cross-platform mobile apps, and other standalone utility software tailored to your workflow requirements."
    },
    {
      q: "Do you manage Google and Meta Ads?",
      a: "Yes. We design, launch, audit, and manage high-performing paid ads campaigns across Google Search, Facebook, and Instagram to optimize your conversion rates."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Absolutely. We provide server hosting maintenance, security patch updates, content revisions, and on-call technical support after project launch."
    }
  ];

  return (
    <>
      <Helmet>
        <title>KingSparrow | Digital Marketing & Custom Software Agency</title>
        <meta name="description" content="KingSparrow is a leading Digital Marketing and Software Development company in Dindigul, Tamil Nadu offering high-converting SEO, SMM, Google/Meta Ads, Web Development, and CRM solutions." />
        <link rel="canonical" href="https://www.kingsparrows.in/" />
      </Helmet>

      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. Trusted Partner Section */}
      <section style={{ padding: '80px 0', background: 'rgba(184, 144, 71, 0.02)', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <span className="badge">Your Growth Partner</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Your Technology Partner for Business Growth</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Whether you're a startup, small business, or enterprise, we build digital solutions that generate measurable results. From attracting new customers via search and social ads to streamlining your daily operations with custom CRM systems, our team in Dindigul, Tamil Nadu is committed to helping your business grow.
          </p>
        </div>
      </section>

      {/* 3. Our Services Tabs Showcase */}
      <div id="services-section">
        <Services />
      </div>

      {/* 4. Why Choose Us Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">Our Commitments</span>
            <h2>We Deliver Results, Not Just Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Why do businesses trust KingSparrow? Here are the principles that separate our digital workflows.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '20px 24px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(184, 144, 71, 0.1)',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  <Check size={16} />
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 650, color: 'var(--text-primary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process Section */}
      <section style={{ padding: '80px 0', background: 'rgba(184, 144, 71, 0.02)', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">Roadmap</span>
            <h2>Simple. Transparent. Effective.</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              How we take your project from consultation to live business growth.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px' 
          }} className="process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', position: 'relative' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(184, 144, 71, 0.15)',
                  lineHeight: '1',
                  fontFamily: 'var(--heading)'
                }}>
                  0{step.num}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 750 }}>{step.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge">Niche Expertise</span>
            <h2>Industries We Serve</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              We proudly work with businesses across multiple local and digital industries.
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '12px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {industries.map((ind, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  padding: '10px 20px', 
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(184, 144, 71, 0.12)',
                  boxShadow: 'none'
                }}
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Recent Projects Section */}
      <section style={{ padding: '80px 0', background: 'rgba(184, 144, 71, 0.02)', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">Portfolio Preview</span>
            <h2>Delivering Success Across Industries</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Take a look at some of our recent digital setups and software utilities.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '24px' 
          }}>
            {recentProjects.map((proj, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', padding: '24px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)' }}>Project Highlight</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 750 }}>{proj.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. What Our Clients Say (Testimonials) Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">Reviews</span>
            <h2>What Our Clients Say</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {testimonials.map((test, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyGap: '16px', textAlign: 'left' }}>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.5', flexGrow: 1 }}>
                  "{test.quote}"
                </p>
                <div style={{ borderTop: '1px solid rgba(184, 144, 71, 0.1)', paddingTop: '12px', marginTop: '16px' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>- {test.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (FAQ) Section */}
      <section style={{ padding: '80px 0', background: 'rgba(184, 144, 71, 0.02)', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge">FAQ Section</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ 
                    padding: '16px 24px', 
                    cursor: 'pointer',
                    borderColor: isOpen ? 'var(--primary)' : 'var(--border-color)',
                    background: isOpen ? 'var(--bg-card-hover)' : 'var(--bg-card)'
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <HelpCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      {faq.q}
                    </h3>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
                        transition: 'transform 0.3s',
                        color: 'var(--text-muted)'
                      }} 
                    />
                  </div>
                  
                  {isOpen && (
                    <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)', borderTop: '1px solid rgba(184, 144, 71, 0.08)', paddingTop: '12px', lineHeight: '1.5' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CTA Area: Ready to Grow Your Business? */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)',
            borderRadius: '32px',
            padding: '50px 40px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 15px 40px rgba(13, 34, 64, 0.2)',
            border: '1px solid rgba(184, 144, 71, 0.15)'
          }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 650,
              color: '#d4af37',
              background: 'rgba(52, 211, 153, 0.1)',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(52, 211, 153, 0.25)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Connect With Us
            </span>
            <h2 style={{ color: '#fff', fontSize: '2.2rem', marginTop: '20px', marginBottom: '16px' }}>Ready to Grow Your Business?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 32px auto', fontSize: '1rem', lineHeight: '1.5' }}>
              Whether you need more customers through digital marketing or want custom software to improve your operations, we're here to help. Let's build something great together.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/contact" 
                className="btn btn-cyan"
                style={{ padding: '14px 30px' }}
              >
                Request a Free Quote <ArrowRight size={16} />
              </a>
              <a 
                href="https://wa.me/918903959381?text=Hi%20KingSparrow,%20I'd%20like%20to%20schedule%20a%20consultation!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#25D366',
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                  padding: '14px 30px'
                }}
              >
                <MessageCircle size={18} /> Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Quick Contact Details */}
      <section style={{ padding: '40px 0 80px 0', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', textAlign: 'left' }}>
            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Phone style={{ color: 'var(--primary)' }} size={20} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Call Us</span>
                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}><a href="tel:+918903959381" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>+91 89039 59381</a></p>
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Mail style={{ color: 'var(--secondary)' }} size={20} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Us</span>
                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}><a href="mailto:contact.kingsparrow@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>contact.kingsparrow@gmail.com</a></p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <MapPin style={{ color: '#ef4444' }} size={20} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Visit Us</span>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Dindigul Bypass Rd, TN, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
