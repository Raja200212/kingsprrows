import React, { useState } from 'react';
import { Send, Zap, MessageCircle, X, ChevronRight, Mail, Phone, MapPin, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatSent, setChatSent] = useState(false);
  const [showDirectory, setShowDirectory] = useState(false);

  // Handle WhatsApp Widget Click / Message Send
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatSent(true);
    setChatMessage('');
    
    // Simulate redirection to whatsapp or a success notification
    setTimeout(() => {
      alert(`Simulated Action: Opening WhatsApp chat. Message sent: "${chatMessage}"`);
      setChatSent(false);
      setShowChat(false);
    }, 1200);
  };

  return (
    <footer id="contact" style={{
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(184, 144, 71, 0.15)',
      padding: '60px 0 30px 0',
      position: 'relative'
    }}>
      <div className="container footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        textAlign: 'left',
        marginBottom: '40px'
      }}>
        
        {/* Col 1: About */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--heading)',
            fontWeight: 800,
            fontSize: '1.3rem'
          }}>
          <img src={logoImg} alt="KingSparrow Emblem" style={{
            height: '32px',
            width: 'auto',
            objectFit: 'contain'
          }} />
          <span>King<span className="text-gradient-purple">Sparrow</span></span>
          </Link>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Empowering modern businesses with high-converting SEO marketing campaigns, WhatsApp broadcast software, and custom desktop and mobile-responsive website portals.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
            <a href="https://facebook.com/kingsparrows" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a href="https://instagram.com/kingsparrows" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
            <a href="https://twitter.com/kingsparrows" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <TwitterIcon size={16} />
            </a>
            <a href="https://linkedin.com/company/kingsparrows" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Services</h4>
          <ul style={listStyle}>
            <li><Link to="/seo-services" style={linkStyle}><ChevronRight size={12} /> Search Engine Optimization</Link></li>
            <li><Link to="/social-media-marketing" style={linkStyle}><ChevronRight size={12} /> Social Media Marketing</Link></li>
            <li><Link to="/google-business-profile" style={linkStyle}><ChevronRight size={12} /> Google My Business SEO</Link></li>
            <li><Link to="/services" style={linkStyle}><ChevronRight size={12} /> Lead Gen Campaigns</Link></li>
          </ul>
        </div>

        {/* Col 3: Core Tools */}
        <div>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Specialist Products</h4>
          <ul style={listStyle}>
            <li><Link to="/whatsapp-marketing" style={linkStyle}><ChevronRight size={12} /> WhatsApp Broadcaster</Link></li>
            <li><Link to="/services" style={linkStyle}><ChevronRight size={12} /> Email ROI Planner</Link></li>
            <li><Link to="/pricing" style={linkStyle}><ChevronRight size={12} /> Live Budget Estimator</Link></li>
            <li><Link to="/web-development" style={linkStyle}><ChevronRight size={12} /> React Web Applications</Link></li>
            <li><Link to="/pricing" style={linkStyle}><ChevronRight size={12} /> Pricing Plans</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>Get In Touch</h4>
          <div style={contactItemStyle}><Mail size={14} style={{ color: 'var(--primary)' }} /> <span>contact.kingsparrow@gmail.com</span></div>
          <div style={contactItemStyle}><MapPin size={14} style={{ color: '#ef4444' }} /> <span>Dindigul Bypass Road, Tamil Nadu, India</span></div>
          <div style={contactItemStyle}><Globe size={14} style={{ color: 'var(--text-muted)' }} /> <span>www.kingsparrows.in</span></div>
        </div>

      </div>

      {/* Collapsible Site Directory for SEO */}
      <div className="container" style={{
        borderTop: '1px solid rgba(184, 144, 71, 0.12)',
        paddingTop: '20px',
        paddingBottom: '10px',
        marginTop: '20px',
        textAlign: 'left'
      }}>
        <button 
          type="button"
          onClick={() => setShowDirectory(!showDirectory)}
          style={{
            background: 'transparent',
            border: 'none',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '10px 0',
            color: 'var(--text-primary)',
            outline: 'none'
          }}
        >
          <span style={{ fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
            Our Network & Solutions Directory
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--primary)', fontWeight: '750' }}>
            {showDirectory ? 'Hide Directory' : 'Show Directory'}
            {showDirectory ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>

        <div style={{
          display: showDirectory ? 'block' : 'none',
          marginTop: '20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            paddingBottom: '20px'
          }}>
            <div>
              <h5 style={dirHeaderStyle}>Dindigul Services</h5>
              <ul style={dirListStyle}>
                <li><Link to="/digital-marketing-company-dindigul" style={dirLinkStyle}>Digital Marketing Dindigul</Link></li>
                <li><Link to="/seo-company-dindigul" style={dirLinkStyle}>SEO Company Dindigul</Link></li>
                <li><Link to="/google-ads-agency-dindigul" style={dirLinkStyle}>Google Ads Agency Dindigul</Link></li>
                <li><Link to="/web-development-company-dindigul" style={dirLinkStyle}>Web Development Dindigul</Link></li>
                <li><Link to="/software-development-company-dindigul" style={dirLinkStyle}>Software Company Dindigul</Link></li>
              </ul>
            </div>
            <div>
              <h5 style={dirHeaderStyle}>Regional Offices</h5>
              <ul style={dirListStyle}>
                <li><Link to="/digital-marketing-company-madurai" style={dirLinkStyle}>Digital Marketing Madurai</Link></li>
                <li><Link to="/seo-company-madurai" style={dirLinkStyle}>SEO Services Madurai</Link></li>
                <li><Link to="/digital-marketing-company-karur" style={dirLinkStyle}>Digital Marketing Karur</Link></li>
                <li><Link to="/seo-company-karur" style={dirLinkStyle}>SEO Services Karur</Link></li>
                <li><Link to="/digital-marketing-company-trichy" style={dirLinkStyle}>Digital Marketing Trichy</Link></li>
                <li><Link to="/seo-company-trichy" style={dirLinkStyle}>SEO Services Trichy</Link></li>
              </ul>
            </div>
            <div>
              <h5 style={dirHeaderStyle}>Industry Solutions</h5>
              <ul style={dirListStyle}>
                <li><Link to="/digital-marketing-healthcare" style={dirLinkStyle}>Healthcare Marketing</Link></li>
                <li><Link to="/digital-marketing-real-estate" style={dirLinkStyle}>Real Estate Marketing</Link></li>
                <li><Link to="/digital-marketing-construction" style={dirLinkStyle}>Construction Marketing</Link></li>
                <li><Link to="/digital-marketing-schools" style={dirLinkStyle}>Schools & Colleges</Link></li>
                <li><Link to="/digital-marketing-doctors" style={dirLinkStyle}>Branding for Doctors</Link></li>
              </ul>
            </div>
            <div>
              <h5 style={dirHeaderStyle}>Custom Software</h5>
              <ul style={dirListStyle}>
                <li><Link to="/crm-software-development" style={dirLinkStyle}>CRM Systems Development</Link></li>
                <li><Link to="/erp-software-development" style={dirLinkStyle}>ERP Software Dev</Link></li>
                <li><Link to="/construction-management-software" style={dirLinkStyle}>Construction Management</Link></li>
                <li><Link to="/hospital-management-software" style={dirLinkStyle}>Hospital Software HMS</Link></li>
                <li><Link to="/inventory-management-software" style={dirLinkStyle}>Inventory Stock Control</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom" style={{
        borderTop: '1px solid rgba(184, 144, 71, 0.15)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} KingSparrow Technologies. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>

      {/* FLOATING WHATSAPP CHAT WIDGET */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999
      }}>
        {/* Toggle Button */}
        <button 
          onClick={() => setShowChat(!showChat)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#25d366',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          className="whatsapp-float-btn"
          aria-label="Open WhatsApp Chat Support"
        >
          {showChat ? <X size={26} /> : <MessageCircle size={26} />}
        </button>

        {/* Chat Drawer Window */}
        {showChat && (
          <div className="glass-card" style={{
            position: 'absolute',
            bottom: '80px',
            right: 0,
            width: '320px',
            padding: 0,
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(184, 144, 71, 0.25)',
            background: 'rgba(255, 255, 255, 0.85)',
            textAlign: 'left',
            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #128c7e 0%, #25d366 100%)',
              padding: '16px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  👑
                </div>
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  border: '2px solid rgba(255, 255, 255, 0.85)'
                }} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700 }}>KingSparrow Agent</h4>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)' }}>Online • Strategy Team</p>
              </div>
            </div>

            {/* Message Body */}
            <div style={{
              padding: '16px',
              maxHeight: '200px',
              overflowY: 'auto',
              background: 'radial-gradient(circle at center, #fcfefe 0%, #f0fdf4 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid rgba(184, 144, 71, 0.15)',
                borderRadius: '8px',
                padding: '10px 12px',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                alignSelf: 'flex-start',
                maxWidth: '90%'
              }}>
                Hello! Thanks for checking out KingSparrow. Type a quick description of your digital marketing or website app needs, and let's coordinate!
              </div>

              {chatSent && (
                <div style={{
                  background: '#dcf8c6',
                  border: '1px solid rgba(37, 211, 102, 0.2)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  fontSize: '0.8rem',
                  color: '#075e54',
                  alignSelf: 'flex-end',
                  maxWidth: '90%'
                }}>
                  Connecting to API ... 🚀
                </div>
              )}
            </div>

            {/* Send Input */}
            <form onSubmit={handleChatSubmit} style={{
              borderTop: '1px solid rgba(184, 144, 71, 0.15)',
              padding: '12px',
              display: 'flex',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.65)'
            }}>
              <input 
                type="text" 
                placeholder="Type your project description..." 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                style={{
                  flexGrow: 1,
                  background: '#ffffff',
                  border: '1px solid rgba(184, 144, 71, 0.15)',
                  borderRadius: '9999px',
                  padding: '8px 14px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '0.8rem'
                }}
                aria-label="Type your project description"
              />
              <button type="submit" style={{
                background: '#25d366',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer'
              }}>
                <Send size={14} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Embed responsive media styles */}
      <style>{`
        .footer-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
        }
        .footer-bottom {
          display: flex !important;
        }
        .whatsapp-float-btn:hover {
          transform: scale(1.1);
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(13, 34, 64, 0.05);
          color: var(--text-primary) !important;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(13, 34, 64, 0.08);
        }
        .social-link:hover {
          background: var(--primary);
          color: #ffffff !important;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(184, 144, 71, 0.3);
          border-color: var(--primary);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

const listStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const linkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.85rem',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'color 0.2s'
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '0.85rem',
  color: 'var(--text-secondary)'
};

const dirHeaderStyle = {
  fontSize: '0.8rem',
  fontWeight: '700',
  color: 'var(--text-primary)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '12px'
};

const dirListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const dirLinkStyle = {
  fontSize: '0.78rem',
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'inline-block'
};

// Custom SVG Icons for Social Links to bypass older Lucide package limitations
const FacebookIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
