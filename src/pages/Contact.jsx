import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Globe, Send, ShieldCheck } from 'lucide-react';

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
            {/* Form */}
            <div className="glass-card" style={{ padding: '36px' }}>
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
              )}
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '4px' }}><Mail size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Email Support</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>contact.kingsparrow@gmail.com</p>
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
                <div style={{ color: 'var(--secondary)', marginTop: '4px' }}><Globe size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Website Domain</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>www.kingsparrows.in</p>
                </div>
              </div>
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
  border: '1px solid rgba(16, 185, 129, 0.15)',
  borderRadius: '9999px',
  padding: '12px 20px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.9rem',
  transition: 'border-color 0.3s'
};
