import React, { useState } from 'react';
import { Send, Zap, MessageCircle, X, ChevronRight, Mail, Phone, MapPin, Globe } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatSent, setChatSent] = useState(false);

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
      borderTop: '1px solid rgba(16, 185, 129, 0.15)',
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
          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: 'var(--heading)',
            fontWeight: 800,
            fontSize: '1.3rem'
          }}>
          <img src={logoImg} alt="KingSparrow Emblem" style={{
            height: '32px',
            width: '32px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.15)'
          }} />
          <span>King<span className="text-gradient-purple">Sparrow</span></span>
          </a>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Empowering modern businesses with high-converting SEO marketing campaigns, WhatsApp broadcast software, and custom desktop and mobile-responsive website portals.
          </p>
        </div>

        {/* Col 2: Services Quick Links */}
        <div>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Services</h4>
          <ul style={listStyle}>
            <li><a href="#services" style={linkStyle}><ChevronRight size={12} /> Search Engine Optimization</a></li>
            <li><a href="#services" style={linkStyle}><ChevronRight size={12} /> Social Media Marketing</a></li>
            <li><a href="#services" style={linkStyle}><ChevronRight size={12} /> Google My Business SEO</a></li>
            <li><a href="#services" style={linkStyle}><ChevronRight size={12} /> Lead Gen Campaigns</a></li>
          </ul>
        </div>

        {/* Col 3: Core Tools */}
        <div>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Specialist Products</h4>
          <ul style={listStyle}>
            <li><a href="#services" style={linkStyle}><ChevronRight size={12} /> WhatsApp Broadcaster</a></li>
            <li><a href="#services" style={linkStyle}><ChevronRight size={12} /> Email ROI Planner</a></li>
            <li><a href="#pricing" style={linkStyle}><ChevronRight size={12} /> Live Budget Estimator</a></li>
            <li><a href="#services" style={linkStyle}><ChevronRight size={12} /> React Web Applications</a></li>
            <li><a href="#pricing" style={linkStyle}><ChevronRight size={12} /> Pricing Plans</a></li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>Get In Touch</h4>
          <div style={contactItemStyle}><Mail size={14} style={{ color: 'var(--primary)' }} /> <span>contact.kingsparrow@gmail.com</span></div>
          <div style={contactItemStyle}><Phone size={14} style={{ color: 'var(--secondary)' }} /> <span>+91 89039 59381</span></div>
          <div style={contactItemStyle}><MapPin size={14} style={{ color: '#ef4444' }} /> <span>Dindigul Bypass Road, Tamil Nadu, India</span></div>
          <div style={contactItemStyle}><Globe size={14} style={{ color: 'var(--text-muted)' }} /> <span>www.kingsparrows.in</span></div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom" style={{
        borderTop: '1px solid rgba(16, 185, 129, 0.15)',
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
            border: '1px solid rgba(16, 185, 129, 0.25)',
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
                border: '1px solid rgba(16, 185, 129, 0.15)',
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
              borderTop: '1px solid rgba(16, 185, 129, 0.15)',
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
                  border: '1px solid rgba(16, 185, 129, 0.15)',
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
