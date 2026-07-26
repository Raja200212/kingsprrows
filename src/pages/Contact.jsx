import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Globe, Send, ShieldCheck, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | KingSparrow Digital Agency in Dindigul</title>
        <meta name="description" content="Reach out to KingSparrow for high-performance SEO audit services, React software consultations, and local marketing support in Dindigul, Tamil Nadu." />
        <link rel="canonical" href="https://www.kingsparrows.in/contact" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="badge">Get In Touch</div>
          <h1 style={{ marginBottom: '24px' }}>
            Coordinate Your Next <span className="text-gradient">Brand Campaign</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            Submit your requirements below. Our team in Dindigul, Tamil Nadu will audit your business visibility and get back to you within 24 hours.
          </p>

          <div className="grid-2" style={{ textAlign: 'left', marginTop: '40px' }}>
            {/* Form & WhatsApp Button */}
            <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {submitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '260px',
                  gap: '16px',
                  textAlign: 'center',
                  color: 'var(--primary)'
                }}>
                  <ShieldCheck size={48} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Message Received!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Thank you for reaching out. We will review your SEO and development requirements and coordinate shortly.</p>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }} htmlFor="form-name">Name</label>
                      <input 
                        type="text" 
                        id="form-name" 
                        placeholder="Enter your name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }} htmlFor="form-email">Email</label>
                      <input 
                        type="email" 
                        id="form-email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }} htmlFor="form-msg">Requirement Details</label>
                      <textarea 
                        id="form-msg" 
                        placeholder="Describe your digital marketing or React development requirements..." 
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{ ...inputStyle, borderRadius: '16px', resize: 'vertical' }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                      Send Message <Send size={16} />
                    </button>
                  </form>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                    <div style={{ height: '1px', background: 'rgba(184, 144, 71, 0.15)', flexGrow: 1 }} />
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>or connect instantly</span>
                    <div style={{ height: '1px', background: 'rgba(184, 144, 71, 0.15)', flexGrow: 1 }} />
                  </div>

                  <a 
                    href="https://wa.me/918903959381?text=Hi%20KingSparrow,%20I'd%20like%20to%20inquire%20about%20your%20services!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      background: '#25D366',
                      color: '#ffffff',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      borderRadius: '9999px',
                      width: '100%',
                      fontSize: '0.9rem',
                      fontWeight: 650
                    }}
                  >
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </>
              )}
            </div>

            {/* Contact Info Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '4px' }}><Mail size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Email Support</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>contact.kingsparrow@gmail.com</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--secondary)', marginTop: '4px' }}><Phone size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Phone / WhatsApp Support</h3>
                  <a href="tel:+918903959381" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
                    +91 89039 59381
                  </a>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: '#ef4444', marginTop: '4px' }}><MapPin size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Local Office</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Dindigul Bypass Road, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--text-muted)', marginTop: '4px' }}><Globe size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Website Domain</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>www.kingsparrows.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map embed */}
          <div className="glass-card reveal active" style={{ marginTop: '40px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textAlign: 'left' }}>
              <MapPin size={20} style={{ color: '#ef4444' }} /> Locate KingSparrow Office
            </h3>
            <div style={{ 
              overflow: 'hidden', 
              borderRadius: '16px', 
              border: '1px solid rgba(184, 144, 71, 0.15)', 
              position: 'relative', 
              width: '100%', 
              height: '350px',
              boxShadow: '0 8px 24px rgba(13, 34, 64, 0.02)'
            }}>
              <iframe 
                src="https://maps.google.com/maps?q=Dindigul%20Bypass%20Road,%20Tamil%20Nadu,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps location of KingSparrow"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

const inputStyle = {
  width: '100%',
  background: '#ffffff',
  border: '1px solid rgba(184, 144, 71, 0.15)',
  borderRadius: '9999px',
  padding: '12px 20px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.9rem',
  transition: 'border-color 0.3s'
};
