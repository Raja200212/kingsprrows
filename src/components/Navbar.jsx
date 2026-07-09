import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
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
      background: scrolled ? 'rgba(255, 255, 255, 0.55)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '16px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontFamily: 'var(--heading)',
          fontWeight: 800,
          fontSize: '1.4rem'
        }}>
          <img src={logoImg} alt="KingSparrow Emblem" style={{
            height: '36px',
            width: '36px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center',
            border: '1.5px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)'
          }} />
          <span>King<span className="text-gradient-purple">Sparrow</span></span>
        </a>

        {/* Desktop Links */}
        <nav style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center',
          '@media (min-width: 768px)': { display: 'flex' }
        }} className="desktop-nav">
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#pricing" style={linkStyle}>Pricing</a>
          <a href="#contact" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Get Quote
          </a>
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
          <a href="#services" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Services</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
            Get Quote <ArrowRight size={16} />
          </a>
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
  borderBottom: '1px solid rgba(16, 185, 129, 0.1)'
};
