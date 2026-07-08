import React, { useState } from 'react';
import { ExternalLink, Eye, Monitor, ShoppingCart, MessageSquare, LineChart } from 'lucide-react';

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'WhatsFlow - WhatsApp Broadcast System',
      category: 'Software Tool',
      icon: <MessageSquare size={20} />,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      desc: 'High-speed WhatsApp bulk campaign panels serving over 150 B2B merchants with automated CSV queueing.',
      metric: '3.4M messages sent in 2026',
      tags: ['React JS', 'Node.js', 'Redis', 'Websockets']
    },
    {
      title: 'VogueMart - High Conversion E-Commerce',
      category: 'E-commerce Website',
      icon: <ShoppingCart size={20} />,
      gradient: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
      desc: 'Seamless dynamic online storefront with custom checkout filters, instant payments, and localized delivery hubs.',
      metric: '+180% sales increase post-launch',
      tags: ['React JSX', 'Stripe', 'Dynamic Cart', 'PostgreSQL']
    },
    {
      title: 'ApexRank - SEO Crawler & Analytics',
      category: 'Web Application',
      icon: <LineChart size={20} />,
      gradient: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
      desc: 'Live dashboard analyzing search ranks, site speeds, and local Google My Business listing ratings in real-time.',
      metric: 'Ranked 42 keywords on Page #1',
      tags: ['Google Search API', 'React.js', 'Express', 'Tailwind']
    },
    {
      title: 'TaskForge - Desktop Production Control',
      category: 'Desktop Software',
      icon: <Monitor size={20} />,
      gradient: 'linear-gradient(135deg, #6ee7b7 0%, #047857 100%)',
      desc: 'Native desktop offline coordinator utilizing electron runtime to queue internal database files and sync background threads.',
      metric: '99.9% offline uptime verified',
      tags: ['Electron.js', 'React', 'SQLite', 'Background Threads']
    }
  ];

  return (
    <section id="portfolio" style={{ borderTop: '1px solid rgba(16, 185, 129, 0.15)', background: 'transparent' }}>
      <div className="container">
        <div className="reveal active" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge">Featured Work</div>
          <h2>Designed to Perform</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Take a look at some of the digital platforms, marketing systems, and software tools we have designed and built.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid-2">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card reveal active"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textAlign: 'left',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background gradient hint */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '180px',
                height: '180px',
                background: project.gradient,
                opacity: hoveredIndex === idx ? 0.25 : 0.1,
                filter: 'blur(30px)',
                borderRadius: '50%',
                transition: 'all 0.5s ease'
              }} />

              {/* Mock Window Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(16, 185, 129, 0.15)',
                paddingBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.55)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: hoveredIndex === idx ? 'var(--primary)' : 'var(--text-secondary)',
                    transition: 'all 0.3s'
                  }}>
                    {project.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{project.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.category}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.25)' }} />
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.25)' }} />
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.25)' }} />
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', minHeight: '60px' }}>
                {project.desc}
              </p>

              {/* Performance Statistic Highlight */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.45)',
                border: '1px solid rgba(16, 185, 129, 0.15)',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Verified Metric
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: hoveredIndex === idx ? 'var(--secondary)' : 'var(--text-primary)',
                  transition: 'color 0.3s'
                }}>
                  {project.metric}
                </span>
              </div>

              {/* Tags and Action */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '8px'
              }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{
                      fontSize: '0.7rem',
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid rgba(16, 185, 129, 0.12)',
                      borderRadius: '4px',
                      color: 'var(--text-secondary)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem',
                  color: hoveredIndex === idx ? 'var(--primary)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.3s'
                }}>
                  Live Case <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
