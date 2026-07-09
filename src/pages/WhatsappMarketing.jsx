import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, Upload, Shield, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatsappMarketing() {
  return (
    <>
      <Helmet>
        <title>Bulk WhatsApp Marketing Tools & Automation | KingSparrow</title>
        <meta name="description" content="Reach thousands of high-intent clients instantly with custom bulk WhatsApp broadcasting software panels, anti-ban structures, and logs." />
        <link rel="canonical" href="https://www.kingsparrows.in/whatsapp-marketing" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="badge">Specialist Software</div>
          <h1 style={{ marginBottom: '24px' }}>
            Bulk WhatsApp Marketing <br />
            <span className="text-gradient">Automation & Broadcasting Panels</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            Broadcasting made simple. We build specialized messaging engines with custom delay intervals, Excel spreadsheet loaders, and call-to-action link previews.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', margin: '40px 0' }}>
            <div className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'left', color: 'var(--primary)', marginBottom: '16px', fontWeight: 700 }}>
                High-Conversion Mobile Broadcasting
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                With open rates exceeding 98%, WhatsApp is the most direct channel to communicate with your current and prospective clients. 
                <br /><br />
                Our custom WhatsApp automation suite allows your campaigns to run smoothly by introducing randomized send delays (anti-ban controls), support buttons (calls-to-action, website references), and real-time statistics logs. We help setup both API cloud panels and native desktop controllers.
              </p>
            </div>

            {/* Features */}
            <div className="grid-2">
              <div className="glass-card">
                <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><Upload size={24} /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Spreadsheet Importer</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Upload your contact directories via standard `.xlsx`, `.csv`, or `.txt` spreadsheets instantly with automatic country code configurations.</p>
              </div>

              <div className="glass-card">
                <div style={{ color: 'var(--secondary)', marginBottom: '12px' }}><Shield size={24} /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Anti-Ban Logic</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Configuring custom milliseconds and seconds send-delays alongside batch limits to safeguard your active numbers.</p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-primary">
              Demo The Broadcaster
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
