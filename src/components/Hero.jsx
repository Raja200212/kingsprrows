import React from 'react';
import { ArrowRight, BarChart3, ShieldCheck, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{
      padding: '100px 0 60px 0',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        {/* Left Side: Content */}
        <div className="reveal active" style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
          <div className="badge" style={{ alignSelf: 'flex-start' }}>
            ✨ All-in-One Digital Growth Partner
          </div>
          <h1>
            Accelerate Growth. <br />
            <span className="text-gradient">Scale Your Brand.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '540px' }}>
            We combine high-performance <strong style={{ color: 'var(--text-primary)' }}>Digital Marketing</strong> (SEO, SMM, GMB) with premium <strong style={{ color: 'var(--text-primary)' }}>Software Development</strong> & custom marketing tools to multiply your revenue.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a href="#pricing" className="btn btn-primary">
              View Packages <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '40px',
            borderTop: '1px solid rgba(16, 185, 129, 0.15)',
            paddingTop: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>99.2%</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Client Retention Rate</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>12M+</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Marketing Messages Sent</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>4.9★</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Clutch & G2 Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Animated Dashboard */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'float 6s ease-in-out infinite'
        }}>
          {/* Background glowing blobs */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
            top: '-50px',
            right: '-50px',
            zIndex: -1
          }} />
          <div style={{
            position: 'absolute',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(30px)',
            bottom: '-50px',
            left: '-50px',
            zIndex: -1
          }} />

          {/* Core Glassmorphism Dashboard */}
          <div className="glass-card" style={{
            width: '100%',
            maxWidth: '480px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            position: 'relative'
          }}>
            {/* Header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>live_campaign_analytics.js</span>
            </div>

            {/* Campaign Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.55)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--secondary)' }}>
                  <TrendingUp size={16} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#10b981' }}>+24.8%</span>
                </div>
                <h4 style={{ fontSize: '1.4rem', margin: '4px 0' }}>$14,280</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>GMB & Ads ROI</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.55)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--primary)' }}>
                  <Users size={16} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)' }}>Active</span>
                </div>
                <h4 style={{ fontSize: '1.4rem', margin: '4px 0' }}>85,420</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Leads Generated</p>
              </div>
            </div>

            {/* Simulated Live Analytics Graph (CSS Bars) */}
            <div style={{ background: 'rgba(255, 255, 255, 0.4)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.6)', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--text-primary)' }}>Traffic & SEO Growth</span>
                <span style={{ color: 'var(--secondary)' }}>Domain Authority: 58</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', height: '100px', gap: '8px', padding: '0 4px' }}>
                {[30, 45, 35, 60, 50, 75, 90, 80, 95].map((h, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: `${h}%`,
                    background: i === 8 ? 'linear-gradient(to top, var(--secondary), var(--accent))' : 'linear-gradient(to top, var(--primary), var(--accent))',
                    borderRadius: '4px 4px 0 0',
                    opacity: 0.85,
                    transition: 'all 0.5s ease',
                    boxShadow: i === 8 ? '0 0 10px rgba(16, 185, 129, 0.3)' : 'none'
                  }} />
                ))}
              </div>
            </div>

            {/* Status alerts */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 14px',
              background: 'rgba(16, 185, 129, 0.08)',
              borderRadius: '8px',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              fontSize: '0.8rem',
              color: 'var(--secondary)'
            }}>
              <ShieldCheck size={16} />
              <span>WhatsApp panel API online. SMTP Server connected successfully.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
