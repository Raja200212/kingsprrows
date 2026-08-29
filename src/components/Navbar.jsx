import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const handleClose = () => setMoreOpen(false);
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, [moreOpen]);

  return (
    <header className={scrolled ? 'header-scrolled' : ''} style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(13, 34, 64, 0.08)',
      transition: 'all 0.3s ease',
      padding: scrolled ? '8px 0' : '12px 0'
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
          textDecoration: 'none',
          gap: '10px'
        }}>
          <img src={logoImg} alt="KingSparrow Logo" className="header-logo" />
          <span style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            fontFamily: 'var(--heading)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center'
          }}>
            King<span className="text-gradient-purple">Sparrow</span>
          </span>
        </Link>

        <nav style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/portfolio" style={linkStyle}>Our Work</Link>
          <Link to="/pricing" style={linkStyle}>Pricing</Link>

          {/* More Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={(e) => { e.stopPropagation(); setMoreOpen(!moreOpen); }}
              style={{
                ...linkStyle,
                background: 'none',
                border: 'none',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              More <ChevronDown size={14} style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {moreOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '12px',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(13, 34, 64, 0.08)',
                boxShadow: '0 10px 25px rgba(13, 34, 64, 0.08)',
                borderRadius: '12px',
                padding: '12px 0',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '160px',
                zIndex: 10
              }}>
                <Link to="/case-studies" onClick={() => setMoreOpen(false)} className="dropdown-link">Case Studies</Link>
                <Link to="/industries" onClick={() => setMoreOpen(false)} className="dropdown-link">Industries</Link>
                <Link to="/blog" onClick={() => setMoreOpen(false)} className="dropdown-link">Blog</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="btn btn-primary" style={{ padding: '8.5px 22px', fontSize: '0.9rem', fontWeight: '700' }}>
            Book Strategy Call <ArrowRight size={14} />
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
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(13, 34, 64, 0.08)',
          boxShadow: '0 15px 30px rgba(13, 34, 64, 0.08)',
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
        .header-logo {
          height: 42px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        .header-scrolled .header-logo {
          height: 36px;
        }
        .dropdown-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 20px;
          transition: all 0.2s ease;
          cursor: pointer;
          display: block;
          text-align: left;
        }
        .dropdown-link:hover {
          background: rgba(184, 144, 71, 0.08);
          color: var(--primary);
        }
        .desktop-nav a, .desktop-nav button {
          transition: color 0.2s ease;
        }
        .desktop-nav a:hover, .desktop-nav button:hover {
          color: var(--primary) !important;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .header-logo {
            height: 55px;
          }
          .header-scrolled .header-logo {
            height: 46px;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontSize: '1.05rem',
  fontWeight: '700',
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
