import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(13, 34, 64, 0.08)',
      transition: 'all 0.3s ease',
      padding: '12px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <img src={logoImg} alt="KingSparrow Logo" style={{
            height: '55px',
            width: 'auto',
            objectFit: 'contain'
          }} />
        </Link>

        {/* Desktop Links */}
        <nav style={{
          display: 'none',
          gap: '24px',
          alignItems: 'center'
        }} className="desktop-nav">
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/case-studies" style={linkStyle}>Case Studies</Link>
          <Link to="/industries" style={linkStyle}>Industries</Link>
          <Link to="/pricing" style={linkStyle}>Pricing</Link>
          <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
          <Link to="/blog" style={linkStyle}>Blog</Link>

          <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Get In Touch <ArrowRight size={14} />
          </Link>
        </nav>

        {/* Mobile Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'block'
          }}
          className="mobile-toggle-btn"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 99
        }}>
          <Link to="/" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Services</Link>
          <Link to="/case-studies" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Case Studies</Link>
          <Link to="/industries" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Industries</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Pricing</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Portfolio</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {/* Embed media query styles since we are using inline style styling */}
      <style>{`
        .desktop-nav {
          display: none !important;
        }
        .mobile-toggle-btn {
          display: block !important;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
};

const mobileLinkStyle = {
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: '600',
  padding: '8px 0',
  borderBottom: '1px solid rgba(184, 144, 71, 0.1)'
};
