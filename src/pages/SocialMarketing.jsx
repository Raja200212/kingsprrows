import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Share2, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialMarketing() {
  return (
    <>
      <Helmet>
        <title>Social Media Marketing (SMM) Services | KingSparrow</title>
        <meta name="description" content="Engage your target audience on Facebook, Instagram, LinkedIn, and Twitter. Learn what SMM is and how our creative copywriting scales communities." />
        <link rel="canonical" href="https://www.kingsparrows.in/social-media-marketing" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="badge">Specialist Services</div>
          <h1 style={{ marginBottom: '24px' }}>
            High-Impact <br />
            <span className="text-gradient">Social Media Marketing (SMM)</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            Build digital brand affinity. We design custom posters, write scroll-stopping campaign copy, and run targeted ad spends to convert viewers into leads.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', margin: '40px 0' }}>
            
            {/* Question: What is SMM? */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'left', color: 'var(--primary)', marginBottom: '16px', fontWeight: 700 }}>
                What is Social Media Marketing (SMM)?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                Social Media Marketing (SMM) is the deployment of content campaigns, short videos, and organic community interactions on platforms like Instagram, Facebook, LinkedIn, and Twitter to build brand affinity, generate leads, and drive customer retention. 
                <br /><br />
                It combines creative visual design, scriptwriting for short videos, demographic audience segmentation, and paid advertising funnels (like Meta Ads or LinkedIn Campaign Manager) to align your services with consumer behavior.
              </p>
            </div>

            {/* Campaign Options Grid */}
            <div className="grid-2" style={{ margin: '40px 0' }}>
              <div className="glass-card">
                <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><Users size={24} /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Community Management</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Fostering customer trust and active discussions online through interactive stories, helpful product guides, and comments engagement.</p>
              </div>

              <div className="glass-card">
                <div style={{ color: 'var(--secondary)', marginBottom: '12px' }}><Target size={24} /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Targeted Lead Gen Ads</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Configuring targeted customer funnels to collect contact data, emails, and WhatsApp leads directly from social ads.</p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-primary">
              Consult Our Media Strategist <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
