import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Check, Mail, MapPin, Globe, Send, ShieldCheck, 
  ChevronDown, ChevronUp, Clock, BookOpen, Star, 
  Award, ArrowRight, Settings, Users, Phone
} from 'lucide-react';
import { getSeoPageData } from '../data/seoPagesData';

export default function DynamicSeoPage() {
  const { slug } = useParams();
  const [activeFaq, setActiveFaq] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const data = getSeoPageData(slug);

  // Scroll to section handler
  const handleScrollTo = (id, index) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(index);
    }
  };

  // On mount and scroll, observe which section is active
  useEffect(() => {
    if (!data) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Navbar offset + breathing room
      
      for (let i = 0; i < data.sections.length; i++) {
        const el = document.getElementById(`section-${i}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  if (!data) {
    return (
      <div className="container" style={{ padding: '160px 24px 100px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '24px' }}>Page Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            The requested SEO landing page could not be located in our directory. Please return to the homepage or check our primary service sections.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Toggle FAQ Accordion
  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Determine local coordinate points for Google LocalBusiness Schema
  let latitude = "10.3673";
  let longitude = "77.9803";
  let addressLocality = "Dindigul";
  let addressRegion = "Tamil Nadu";
  let streetAddress = "Dindigul Bypass Road";
  let postalCode = "624001";

  if (data.city === "madurai") {
    latitude = "9.9252";
    longitude = "78.1198";
    addressLocality = "Madurai";
    streetAddress = "Anna Nagar Main Road";
    postalCode = "625020";
  } else if (data.city === "karur") {
    latitude = "10.9601";
    longitude = "78.0766";
    addressLocality = "Karur";
    streetAddress = "Sengunthapuram Main Road";
    postalCode = "639002";
  } else if (data.city === "trichy") {
    latitude = "10.7905";
    longitude = "78.7047";
    addressLocality = "Trichy";
    streetAddress = "Thillai Nagar East";
    postalCode = "620018";
  }

  // Compile JSON-LD schema files
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kingsparrows.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": data.serviceName || data.industryName || data.softwareName,
        "item": `https://www.kingsparrows.in/${data.slug}`
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Kingsprrow - ${data.cityCased} Office`,
    "image": "https://www.kingsparrows.in/logo.png",
    "@id": `https://www.kingsparrows.in/${data.slug}#localbusiness`,
    "url": `https://www.kingsparrows.in/${data.slug}`,
    "telephone": "+91-8903959381",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.serviceName || data.softwareName || data.industryName,
    "provider": {
      "@type": "Organization",
      "name": "Kingsprrow",
      "url": "https://www.kingsparrows.in/"
    },
    "description": data.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`https://www.kingsparrows.in/${data.slug}`} />
        <meta name="robots" content="index, follow" />
        
        {/* Inject JSON-LD Schema scripts */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        {data.faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      {/* Hero Header Section */}
      <section style={heroStyle}>
        <div className="container" style={{ zIndex: 2 }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            {data.type.toUpperCase()} | {data.cityCased} NETWORKS
          </div>
          <h1 style={h1Style}>{data.h1}</h1>
          <p style={heroSubStyle}>
            {data.description.split('.')[0]}. Partner with Kingsprrow to experience modern, conversion-focused digital designs.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
            <button onClick={() => handleScrollTo('audit-form', 0)} className="btn btn-primary">
              Contact Consultant <ArrowRight size={16} />
            </button>
            <button onClick={() => handleScrollTo('section-0', 0)} className="btn btn-secondary" style={{ border: '1px solid var(--primary)', color: 'var(--primary)', background: 'transparent' }}>
              Explore Content
            </button>
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container dynamic-seo-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 380px', gap: '40px' }}>
          
          {/* Left Column: Table of Contents & Article Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Sticky Table of Contents Header */}
            <div className="glass-card" style={tocContainerStyle}>
              <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Navigation
              </div>
              <div style={tocGridStyle}>
                {data.sections.map((sec, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleScrollTo(`section-${idx}`, idx)}
                    style={{
                      ...tocLinkStyle,
                      color: activeSection === idx ? 'var(--primary)' : 'var(--text-secondary)',
                      fontWeight: activeSection === idx ? '700' : '400',
                      borderLeft: activeSection === idx ? '2px solid var(--primary)' : '2px solid transparent'
                    }}
                  >
                    {idx + 1}. {sec.title.split('|')[0].split(':')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Signature Quality Assurance Notice Badge */}
            <div style={qualityNoticeStyle}>
              <div style={{ color: 'var(--primary)', marginBottom: '8px' }}><Award size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
                Kingsprrow Quality Guarantee
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                Google <strong>does not rank a website #1 simply because it contains many keywords</strong>. It rewards websites that provide genuinely useful, original content, a good user experience, strong local signals, and trusted backlinks. If you consistently follow this strategy and create content that is genuinely better than competitors, you'll give your site a strong foundation for ranking well in Dindigul and nearby expanding cities.
              </p>
            </div>

            {/* Long-Form SEO Content Blocks (1500+ words) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {data.sections.map((sec, idx) => (
                <article 
                  key={idx} 
                  id={`section-${idx}`}
                  className="glass-card" 
                  style={{ padding: '36px', scrollMarginTop: '100px' }}
                >
                  <h2 style={sectionH2Style}>
                    {sec.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem', whiteSpace: 'pre-line' }}>
                    {sec.content}
                  </p>
                </article>
              ))}
            </div>

            {/* Collapsible FAQ Section */}
            {data.faqs.length > 0 && (
              <section className="glass-card" style={{ padding: '36px' }}>
                <h2 style={{ fontSize: '1.6rem', textAlign: 'left', marginBottom: '24px', color: 'var(--text-primary)' }}>
                  Frequently Asked Questions (FAQ)
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {data.faqs.map((faq, idx) => (
                    <div key={idx} style={faqItemStyle}>
                      <button 
                        onClick={() => toggleFaq(idx)}
                        style={faqQuestionStyle}
                      >
                        <span style={{ textAlign: 'left', fontWeight: '600' }}>{faq.q}</span>
                        {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      
                      <div style={{
                        ...faqAnswerContainerStyle,
                        maxHeight: activeFaq === idx ? '200px' : '0',
                        opacity: activeFaq === idx ? 1 : 0,
                        padding: activeFaq === idx ? '16px 20px' : '0 20px'
                      }}>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Internal Links Map */}
            <section className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.4rem', textAlign: 'left', marginBottom: '20px', color: 'var(--text-primary)' }}>
                Related Service Networks & Solutions
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Explore our local service networks and specialized custom business software systems across Tamil Nadu:
              </p>
              <div style={internalLinksGridStyle}>
                {data.internalLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    to={link.path}
                    style={internalLinkStyle}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar (Sticky Form & Highlights) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
            
            {/* Sticky Form */}
            <div id="audit-form" className="glass-card" style={sidebarCardStyle}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <Clock size={20} style={{ color: 'var(--primary)' }} /> Request Business Consultation
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '8px 0 16px 0' }}>
                Submit your local requirements. Our engineers will audit your business footprint and get back to you within 24 hours.
              </p>
              
              {submitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '220px',
                  gap: '12px',
                  textAlign: 'center',
                  color: 'var(--primary)'
                }}>
                  <ShieldCheck size={48} />
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Request Submitted!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>We will audit your operations and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={labelStyle} htmlFor="sidebar-name">Name</label>
                    <input 
                      type="text" 
                      id="sidebar-name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={labelStyle} htmlFor="sidebar-email">Email Address</label>
                    <input 
                      type="email" 
                      id="sidebar-email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={labelStyle} htmlFor="sidebar-msg">Project Description</label>
                    <textarea 
                      id="sidebar-msg"
                      placeholder="Describe your goals..."
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ ...inputStyle, borderRadius: '12px', resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                    Submit Request <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Tech Stack & Tools Showcase */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Settings size={18} style={{ color: 'var(--primary)' }} /> Technology Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {data.toolsUsed.map((tool, idx) => (
                  <span 
                    key={idx} 
                    style={badgeStyle}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Citations */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Star size={16} style={{ color: 'var(--primary)', fill: 'var(--primary)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Local rating: 4.9/5 stars</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Users size={16} style={{ color: 'var(--primary)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>50+ Successful audits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--primary)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>+91-8903959381</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core styling overrides */}
      <style>{`
        .dynamic-seo-grid {
          grid-template-columns: minmax(0, 1fr) 380px;
        }
        @media (max-width: 991px) {
          .dynamic-seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

// Inline Styles
const heroStyle = {
  padding: '160px 0 100px 0',
  textAlign: 'center',
  background: 'linear-gradient(135deg, rgba(13, 34, 64, 0.04) 0%, rgba(184, 144, 71, 0.05) 100%)',
  borderBottom: '1px solid rgba(184, 144, 71, 0.12)',
  position: 'relative'
};

const h1Style = {
  fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
  lineHeight: '1.2',
  fontWeight: '800',
  color: 'var(--text-primary)',
  maxWidth: '900px',
  margin: '0 auto 16px auto',
  fontFamily: 'var(--heading)'
};

const heroSubStyle = {
  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
  color: 'var(--text-secondary)',
  maxWidth: '750px',
  margin: '0 auto 24px auto',
  lineHeight: '1.6'
};

const tocContainerStyle = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  position: 'sticky',
  top: '90px',
  zIndex: 10,
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)'
};

const tocGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px 24px'
};

const tocLinkStyle = {
  background: 'transparent',
  border: 'none',
  padding: '4px 8px 4px 12px',
  fontSize: '0.85rem',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'all 0.2s',
  display: 'flex',
  alignItems: 'center'
};

const qualityNoticeStyle = {
  padding: '24px 32px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, rgba(184, 144, 71, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%)',
  border: '1px dashed rgba(184, 144, 71, 0.4)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px'
};

const sectionH2Style = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: 'var(--text-primary)',
  marginBottom: '16px',
  textAlign: 'left'
};

const faqItemStyle = {
  border: '1px solid rgba(13, 34, 64, 0.06)',
  borderRadius: '16px',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.4)'
};

const faqQuestionStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  padding: '18px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  fontSize: '0.98rem',
  color: 'var(--text-primary)',
  transition: 'background 0.2s'
};

const faqAnswerContainerStyle = {
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderTop: '1px solid rgba(13, 34, 64, 0.02)',
  background: '#ffffff'
};

const internalLinksGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: '12px',
  marginTop: '16px'
};

const internalLinkStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 16px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.8)',
  border: '1px solid rgba(184, 144, 71, 0.1)',
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: '600',
  transition: 'all 0.2s'
};

const sidebarCardStyle = {
  padding: '28px',
  position: 'sticky',
  top: '90px'
};

const inputStyle = {
  width: '100%',
  background: '#ffffff',
  border: '1px solid rgba(184, 144, 71, 0.15)',
  borderRadius: '9999px',
  padding: '10px 16px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.85rem',
  transition: 'border-color 0.3s'
};

const labelStyle = {
  fontSize: '0.8rem',
  fontWeight: 650,
  color: 'var(--text-primary)'
};

const badgeStyle = {
  fontSize: '0.75rem',
  padding: '6px 12px',
  borderRadius: '9999px',
  background: 'rgba(184, 144, 71, 0.08)',
  color: 'var(--primary)',
  fontWeight: '600',
  border: '1px solid rgba(184, 144, 71, 0.15)'
};
