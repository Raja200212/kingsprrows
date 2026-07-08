import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, Send, Sparkles, Building, BarChart4 } from 'lucide-react';

export default function GrowthEstimator() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState(['seo', 'webapp']);
  const [budget, setBudget] = useState(1500);
  
  // Client Info States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    { id: 'seo', name: 'SEO & Search Rankings', multiplier: 1.2 },
    { id: 'smm', name: 'Social Media Marketing (SMM)', multiplier: 1.15 },
    { id: 'gmb', name: 'Google My Business (GMB)', multiplier: 1.1 },
    { id: 'whatsapp', name: 'WhatsApp Automation Panel', multiplier: 1.3 },
    { id: 'email', name: 'Email Campaign Setup', multiplier: 1.25 },
    { id: 'webapp', name: 'Custom React Web/App Dev', multiplier: 1.4 },
    { id: 'desktop', name: 'Desktop Software System', multiplier: 1.35 }
  ];

  const handleServiceToggle = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculations
  const serviceMultiplier = selectedServices.reduce((acc, sid) => {
    const s = servicesList.find(item => item.id === sid);
    return acc * (s ? s.multiplier : 1);
  }, 1);

  // Growth Math
  const estimatedClicks = Math.round((budget / 0.45) * (1 + (serviceMultiplier - 1) * 0.3));
  const estimatedLeads = Math.round(estimatedClicks * 0.045 * (1 + (serviceMultiplier - 1) * 0.2));
  const estimatedRevenueMin = Math.round(estimatedLeads * 120);
  const estimatedRevenueMax = Math.round(estimatedLeads * 380);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out your name and email to proceed.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="estimator" style={{ borderTop: '1px solid rgba(16, 185, 129, 0.15)', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
        bottom: '10%',
        right: '-100px',
        zIndex: -1
      }} />

      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge">Interactive Forecast</div>
          <h2>Growth & Budget Estimator</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Select your marketing goals and estimated ad budgets to see custom traffic and lead forecasts instantly.
          </p>
        </div>

        {/* Step Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          position: 'relative',
          padding: '0 8px'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '2px',
            background: 'rgba(16, 185, 129, 0.15)',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: step === 1 ? '0%' : step === 2 ? '50%' : '100%',
            height: '2px',
            background: 'var(--primary)',
            zIndex: 2,
            transition: 'width 0.3s ease'
          }} />
          
          {[1, 2, 3].map((num) => (
            <div key={num} style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: step >= num ? 'var(--primary)' : 'var(--bg-main)',
              border: `2px solid ${step >= num ? 'var(--primary)' : 'rgba(16, 185, 129, 0.2)'}`,
              color: step >= num ? '#fff' : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              zIndex: 3,
              boxShadow: step >= num ? '0 0 10px rgba(16, 185, 129, 0.3)' : 'none',
              transition: 'all 0.3s'
            }}>
              {num}
            </div>
          ))}
        </div>

        {/* Form Sandbox Area */}
        <div className="glass-card" style={{ padding: '36px' }}>
          {submitted ? (
            /* THANK YOU STATE */
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                border: '2px solid var(--primary)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
              }}>
                <Check size={32} />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Your Strategy is Ready!</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 24px auto' }}>
                Thanks, <strong>{name}</strong>! We have locked in your forecast of <strong>{estimatedLeads} leads/mo</strong>. Our digital strategy experts will reach out to <strong>{email}</strong> within 12 hours with a comprehensive audit report.
              </p>
              <button onClick={() => { setStep(1); setSubmitted(false); }} className="btn btn-secondary">
                Calculate Another Strategy
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'left' }}>
              {/* STEP 1: SERVICE CHOICE */}
              {step === 1 && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Step 1: Choose Your Growth Channels</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {servicesList.map((srv) => {
                      const isSelected = selectedServices.includes(srv.id);
                      return (
                        <div 
                          key={srv.id} 
                          onClick={() => handleServiceToggle(srv.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px 20px',
                            borderRadius: '10px',
                            background: isSelected ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.45)',
                            border: `1px solid ${isSelected ? 'var(--primary)' : 'rgba(16, 185, 129, 0.15)'}`,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <span style={{ fontWeight: 500, color: isSelected ? 'var(--secondary)' : 'var(--text-secondary)' }}>
                            {srv.name}
                          </span>
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '4px',
                            border: '1px solid rgba(16, 185, 129, 0.35)',
                            background: isSelected ? 'var(--primary)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff'
                          }}>
                            {isSelected && <Check size={14} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={() => setStep(2)} 
                      disabled={selectedServices.length === 0}
                      className="btn btn-primary"
                      style={{ opacity: selectedServices.length === 0 ? 0.6 : 1 }}
                    >
                      Next Step <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: BUDGET SLIDER */}
              {step === 2 && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Step 2: Estimate Monthly Marketing Budget</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Select the estimated monthly budget you want to allocate for online advertising/tool operations.
                  </p>

                  <div style={{ background: 'rgba(255, 255, 255, 0.45)', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Monthly Budget Allocation</span>
                      <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)' }}>${budget.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="200" 
                      max="15000" 
                      step="200"
                      value={budget} 
                      onChange={(e) => setBudget(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                      <span>$200/mo</span>
                      <span>$15,000/mo</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={() => setStep(1)} className="btn btn-secondary">
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button onClick={() => setStep(3)} className="btn btn-primary">
                      Generate Forecast <BarChart4 size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: RESULTS AND SIGNUP */}
              {step === 3 && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Step 3: Your Performance Forecast</h3>

                  {/* Calculations breakdown */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '28px'
                  }}>
                    <div style={resultCardStyle}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Estimated Monthly Visits</span>
                      <strong style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>{estimatedClicks.toLocaleString()}</strong>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>via optimized PPC & SEO</span>
                    </div>
                    <div style={resultCardStyle}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>High-Value Leads</span>
                      <strong style={{ fontSize: '1.6rem', color: 'var(--secondary)' }}>{estimatedLeads}</strong>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>At avg 4.5% conversion</span>
                    </div>
                    <div style={resultCardStyle}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Projected Sales ROI</span>
                      <strong style={{ fontSize: '1.6rem', color: 'var(--primary)' }}>${estimatedRevenueMin.toLocaleString()} - ${estimatedRevenueMax.toLocaleString()}</strong>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Est. customer lifetime value</span>
                    </div>
                  </div>

                  {/* Signup Details */}
                  <form onSubmit={handleFormSubmit} style={{
                    background: 'rgba(255, 255, 255, 0.45)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    borderRadius: '12px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <div style={{ flex: 1 }}>
                        <label style={labelStyle}>Your Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          style={formInputStyle} 
                          required 
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={labelStyle}>Company Website</label>
                        <input 
                          type="text" 
                          placeholder="example.com" 
                          style={formInputStyle} 
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px' }}>
                      <div style={{ flex: 1 }}>
                        <label style={labelStyle}>Email Address</label>
                        <input 
                          type="email" 
                          placeholder="john@company.com" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          style={formInputStyle} 
                          required 
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={labelStyle}>Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+1 (555) 000-0000" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          style={formInputStyle} 
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <button type="button" onClick={() => setStep(2)} className="btn btn-secondary">
                        <ArrowLeft size={16} /> Edit Budget
                      </button>
                      <button type="submit" className="btn btn-cyan">
                        Lock In Proposal <Send size={16} />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  color: 'var(--text-secondary)',
  marginBottom: '6px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const formInputStyle = {
  width: '100%',
  padding: '10px 14px',
  background: 'rgba(255, 255, 255, 0.55)',
  border: '1px solid rgba(16, 185, 129, 0.15)',
  borderRadius: '6px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.9rem'
};

const resultCardStyle = {
  background: 'rgba(255, 255, 255, 0.4)',
  border: '1px solid rgba(16, 185, 129, 0.12)',
  borderRadius: '8px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '4px'
};
