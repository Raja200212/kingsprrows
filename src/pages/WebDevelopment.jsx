import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Terminal, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDevelopment() {
  return (
    <>
      <Helmet>
        <title>React Website & Custom Software Development | KingSparrow</title>
        <meta name="description" content="Get premium custom web applications and desktop tools. Learn why React is our core framework and verify our custom code architecture." />
        <link rel="canonical" href="https://www.kingsparrows.in/web-development" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="badge">Software Engineering</div>
          <h1 style={{ marginBottom: '24px' }}>
            React Applications & <br />
            <span className="text-gradient">Custom Web & Desktop Development</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            We write clean, high-performance code. From interactive dashboards and e-commerce platforms to standalone desktop applications, we develop software that delivers speed and security.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', margin: '40px 0' }}>
            
            {/* Question: Do you develop React websites? */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'left', color: 'var(--primary)', marginBottom: '16px', fontWeight: 700 }}>
                Do You Develop React Websites?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                **Yes, we specialize in React website development.** 
                <br /><br />
                We construct our custom client panels, SaaS platforms, and e-commerce checkouts utilizing React JSX alongside lightweight compilation bundles (like Vite and Next.js). 
                <br /><br />
                Developing in React allows us to implement modular, highly reusable component structures, manage application state smoothly, integrate backend APIs securely, and achieve lightning-fast loading speeds that excel in Google's PageSpeed SEO metrics.
              </p>
            </div>

            {/* Development Focus Grid */}
            <div className="grid-3" style={{ margin: '30px 0' }}>
              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><Code size={24} /></div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Web Panels</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Highly secure administrative dashboards, user roles, databases, and custom API systems.</p>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '12px' }}><Terminal size={24} /></div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>React SPAs</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>High-performance single-page applications with smooth navigation and rich hover animations.</p>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><Monitor size={24} /></div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Desktop Runtimes</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cross-platform Electron desktop software with local databases and system controls.</p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-primary">
              Discuss Your App Requirements <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
