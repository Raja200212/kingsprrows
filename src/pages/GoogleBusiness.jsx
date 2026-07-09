import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Search, Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GoogleBusiness() {
  return (
    <>
      <Helmet>
        <title>Google Business Profile (GMB) Optimization in Dindigul | KingSparrow</title>
        <meta name="description" content="Dominate local maps. Learn how we configure Google Business Profile listings in Dindigul to secure top ranks for local customers." />
        <link rel="canonical" href="https://www.kingsparrows.in/google-business-profile" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="badge">Local SEO Advantage</div>
          <h1 style={{ marginBottom: '24px' }}>
            Google Business Profile <br />
            <span className="text-gradient">Optimization & Maps Ranking</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            Be the first choice for nearby clients. We setup, claim, configure, and optimize Google My Business (GMB) profiles to lock down the local 3-map pack rankings.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', margin: '40px 0' }}>
            <div className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'left', color: 'var(--primary)', marginBottom: '16px', fontWeight: 700 }}>
                Why GMB Map Optimization Matters
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                When users look up search queries with localized intent (like *"software company near me"* or *"best web agency in Dindigul"*), Google shows maps listings *above* standard organic links. 
                <br /><br />
                Securing a top position in this local map pack instantly drives phone calls, driving-direction requests, and direct website clicks. We optimize category allocations, citation listings, review response workflows, and geo-targeted images to elevate your ranking map score.
              </p>
            </div>

            <div className="grid-3" style={{ margin: '30px 0' }}>
              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><Search size={24} /></div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Keyword Strategy</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Embedding high-search local keywords in your description and product listings.</p>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '12px' }}><Star size={24} /></div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Review Campaigns</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Systematically prompting satisfied clients to provide rich 5-star ratings to boost authority.</p>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '12px' }}><MapPin size={24} /></div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Local Citations</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ensuring uniform Name, Address, and Phone (NAP) details across local directories.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-primary">
              Optimize My Local Listing
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
