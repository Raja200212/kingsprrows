import React, { useState } from 'react';
import { 
  Shield, CheckCircle, AlertTriangle, Play, RefreshCw, 
  Download, Calendar, Layout, Smartphone, ArrowRight 
} from 'lucide-react';

export default function WebsiteAuditTool() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [reportReady, setReportReady] = useState(false);

  const scanSteps = [
    "Initiating security handshake and resolving domain IP...",
    "Scanning landing page meta tags (Title, Description, H1-H6 hierarchy)...",
    "Measuring mobile-responsive viewport dimensions and image scales...",
    "Analyzing PageSpeed index & Google Core Web Vitals...",
    "Detecting schema markup configurations & local citation links...",
    "Formatting final SEO audit report..."
  ];

  const handleScan = (e) => {
    e.preventDefault();
    if (!url || !email) return;

    setScanning(true);
    setReportReady(false);
    setScanStep(0);

    // Simulate scanning steps
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < scanSteps.length) {
        setScanStep(step);
      } else {
        clearInterval(interval);
        setScanning(false);
        setReportReady(true);
      }
    }, 1000);
  };

  return (
    <section id="audit-tool" style={{ padding: '60px 0', borderTop: '1px solid rgba(184, 144, 71, 0.1)' }}>
      {/* Decorative Blob */}
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(184, 144, 71, 0.05) 0%, transparent 70%)',
        filter: 'blur(45px)',
        top: '20%',
        right: '5%',
        zIndex: -1
      }} />

      <div className="container" style={{ maxWidth: '850px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge">SEO Optimization Tool</span>
          <h2>Free Instant Website & SEO Audit</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Enter your business URL below. Our system will crawl your page performance, metadata alignments, and security metrics to generate a direct optimization summary.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '36px' }}>
          {!scanning && !reportReady && (
            /* INPUT FORM */
            <form onSubmit={handleScan} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '16px' }} className="audit-form-grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>Website URL</label>
                  <input 
                    type="url" 
                    placeholder="https://yourwebsite.com" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={labelStyle}>Your Email</label>
                  <input 
                    type="email" 
                    placeholder="audit@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                Analyze My Website <Play size={16} />
              </button>
            </form>
          )}

          {scanning && (
            /* SCANNING LOADER */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '260px', gap: '24px' }}>
              <RefreshCw className="spinner" size={48} style={{ color: 'var(--primary)', animation: 'spin 1.5s linear infinite' }} />
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Analyzing {url}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '400px' }}>
                  {scanSteps[scanStep]}
                </p>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(184, 144, 71, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{
                  width: `${((scanStep + 1) / scanSteps.length) * 100}%`,
                  height: '100%',
                  background: 'var(--primary)',
                  transition: 'width 0.5s ease'
                }} />
              </div>
            </div>
          )}

          {reportReady && (
            /* COMPLETED AUDIT REPORT */
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(184, 144, 71, 0.15)', paddingBottom: '16px', marginBottom: '24px' }} className="report-header">
                <div>
                  <h3 style={{ fontSize: '1.4rem' }}>Audit Summary for <span style={{ color: 'var(--primary)' }}>{new URL(url).hostname}</span></h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Report generated: Just now</p>
                </div>
                <span style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '8px', background: 'rgba(184, 144, 71, 0.1)', color: 'var(--secondary)', border: '1px solid rgba(184, 144, 71, 0.15)', fontWeight: 650 }}>
                  Overall Score: 78% (Fair)
                </span>
              </div>

              {/* Grid Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }} className="audit-metrics-grid">
                <div style={metricCardStyle}>
                  <Layout style={{ color: 'var(--primary)', marginBottom: '8px' }} size={20} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SEO Tags</span>
                  <strong style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>85%</strong>
                </div>
                <div style={metricCardStyle}>
                  <Layout style={{ color: 'var(--secondary)', marginBottom: '8px' }} size={20} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Page Speed</span>
                  <strong style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>62%</strong>
                </div>
                <div style={metricCardStyle}>
                  <Smartphone style={{ color: 'var(--primary)', marginBottom: '8px' }} size={20} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mobile Fit</span>
                  <strong style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>92%</strong>
                </div>
                <div style={metricCardStyle}>
                  <Shield style={{ color: '#25d366', marginBottom: '8px' }} size={20} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Security SSL</span>
                  <strong style={{ fontSize: '1.4rem', color: '#25d366' }}>100%</strong>
                </div>
              </div>

              {/* Specific Issues & Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Critical Recommendations</h4>
                
                <div style={issueRowStyle}>
                  <AlertTriangle size={16} style={{ color: '#eab308', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem' }}>Image Alt Tags Missing (SEO Impact: Medium)</strong>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>We detected 14 images on your landing page that lack explanatory alternative text attributes, hindering search index listings.</p>
                  </div>
                </div>

                <div style={issueRowStyle}>
                  <AlertTriangle size={16} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem' }}>Slow Server Response Time (Performance Impact: High)</strong>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Time-to-first-byte (TTFB) is 1.4 seconds. Optimizing server assets and caching would reduce this threshold under 0.3 seconds.</p>
                  </div>
                </div>

                <div style={issueRowStyle}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem' }}>Sitemap & SSL Configurations (PASSED)</strong>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>SSL is active. Standard xml sitemaps are discoverable, and the canonical URLs are configured correctly.</p>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div style={{ display: 'flex', gap: '16px' }} className="report-cta-container">
                <button 
                  onClick={() => alert(`Simulated Download: Preparing PDF report for ${email}...`)} 
                  className="btn btn-secondary"
                  style={{ flex: 1, display: 'flex', gap: '8px', justifyContent: 'center' }}
                >
                  <Download size={16} /> Download Full PDF Audit
                </button>
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                  style={{ flex: 1, display: 'flex', gap: '8px', justifyContent: 'center' }}
                >
                  <Calendar size={16} /> Book Consultation <ArrowRight size={14} />
                </a>
              </div>

              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <button 
                  onClick={() => { setReportReady(false); setUrl(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Scan another website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .spinner {
          animation: spin 1.2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 600px) {
          .audit-form-grid {
            grid-template-columns: 1fr !important;
          }
          .audit-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .report-cta-container {
            flex-direction: column !important;
          }
        }
      `}</style>
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

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(255, 255, 255, 0.75)',
  border: '1px solid rgba(184, 144, 71, 0.15)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.9rem',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit'
};

const metricCardStyle = {
  background: 'rgba(255, 255, 255, 0.4)',
  border: '1px solid rgba(184, 144, 71, 0.12)',
  borderRadius: '12px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const issueRowStyle = {
  display: 'flex',
  gap: '12px',
  background: 'rgba(255, 255, 255, 0.3)',
  border: '1px solid rgba(184, 144, 71, 0.08)',
  borderRadius: '8px',
  padding: '12px 16px',
  alignItems: 'flex-start'
};
