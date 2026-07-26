import React, { useState, useEffect } from 'react';
import { X, Send, Check } from 'lucide-react';

export default function OnboardingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    'SEO & Rankings',
    'Web Development',
    'Google Business (GMB)',
    'Social Media Marketing',
    'WhatsApp Marketing',
    'Creative Branding'
  ];

  useEffect(() => {
    // Show popup after a slight delay (1.5 seconds) on first visit in the session
    const isDismissed = sessionStorage.getItem('onboardingDismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem('onboardingDismissed', 'true');
  };

  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill in the required fields (Name, Email, and Phone Number).');
      return;
    }
    
    // Simulate submission
    setSubmitted(true);
    
    // Close modal after showing success state
    setTimeout(() => {
      handleDismiss();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(13, 34, 64, 0.45)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div className="glass-card popup-card-animation" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        padding: '36px 32px',
        background: 'rgba(255, 255, 255, 0.98)',
        border: '1px solid rgba(184, 144, 71, 0.25)',
        boxShadow: '0 25px 50px -12px rgba(13, 34, 64, 0.25)',
        textAlign: 'left'
      }}>
        {/* Close Button at Top */}
        <button 
          onClick={handleDismiss}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(13, 34, 64, 0.05)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          className="popup-close-btn"
          aria-label="Close Popup"
        >
          <X size={18} />
        </button>

        {submitted ? (
          /* SUCCESS STATE */
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(184, 144, 71, 0.1)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              border: '2px solid var(--primary)',
              boxShadow: '0 0 20px rgba(184, 144, 71, 0.2)'
            }}>
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Inquiry Registered!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Thank you, <strong>{name}</strong>! We have received your request. Our consultants will reach out to you shortly.
            </p>
          </div>
        ) : (
          /* FORM STATE */
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="badge" style={{ marginBottom: '8px' }}>Partner with Us</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>Get a Free Consult</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Fill in your details below to request a callback and customized digital strategy proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  required 
                />
              </div>

              <div className="popup-form-row">
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    required 
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="+91-89039-59381" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={inputStyle}
                    required 
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Business Address</label>
                <input 
                  type="text" 
                  placeholder="Dindigul, Tamil Nadu, India" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Service List */}
              <div>
                <label style={labelStyle}>Services of Interest</label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px',
                  marginTop: '6px'
                }}>
                  {services.map((srv, idx) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <div 
                        key={idx} 
                        onClick={() => handleServiceToggle(srv)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(184, 144, 71, 0.08)' : 'rgba(13, 34, 64, 0.02)',
                          border: `1px solid ${isSelected ? 'var(--primary)' : 'rgba(13, 34, 64, 0.05)'}`,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)'
                        }}
                      >
                        <div style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '3px',
                          border: '1px solid rgba(184, 144, 71, 0.35)',
                          background: isSelected ? 'var(--primary)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff'
                        }}>
                          {isSelected && <Check size={10} />}
                        </div>
                        <span>{srv}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-cyan" 
                style={{ 
                  marginTop: '10px', 
                  width: '100%', 
                  padding: '12px', 
                  fontSize: '0.95rem' 
                }}
              >
                Submit Details <Send size={14} />
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .popup-close-btn:hover {
          background: rgba(13, 34, 64, 0.1) !important;
          transform: rotate(90deg);
        }
        .popup-form-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .popup-card-animation {
          animation: popupFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: scale(0.9) translateY(20px);
        }
        @keyframes popupFadeIn {
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @media (min-width: 480px) {
          .popup-form-row {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.72rem',
  color: 'var(--text-secondary)',
  marginBottom: '4px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.04em'
};

const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  background: 'rgba(255, 255, 255, 0.6)',
  border: '1px solid rgba(184, 144, 71, 0.18)',
  borderRadius: '6px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.85rem',
  transition: 'border-color 0.2s'
};
