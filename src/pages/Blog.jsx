import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Calendar, User, Clock, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog & Digital Strategy Resource Center | KingSparrow</title>
        <meta name="description" content="Read digital marketing insights, search engine tips, and React development updates from our Dindigul marketing agency experts." />
        <link rel="canonical" href="https://www.kingsparrows.in/blog" />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div className="badge">Insights & Articles</div>
          <h1 style={{ marginBottom: '24px' }}>
            Resource Hub & <span className="text-gradient">Digital Strategy Blog</span>
          </h1>
          
          {/* Cadence Notification */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '9999px',
            padding: '8px 24px',
            fontSize: '0.9rem',
            color: 'var(--primary)',
            fontWeight: '600',
            marginBottom: '40px'
          }}>
            <RefreshCw size={16} className="spin-slow" />
            <span>We publish 1–2 fresh articles per week to help scale your business.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
            {blogPosts.map((post, idx) => (
              <article key={idx} className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{post.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {post.date}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={14} /> {post.author}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {post.readTime}</div>
                </div>
                
                <h2 style={{ fontSize: '1.5rem', textAlign: 'left', fontWeight: 700, margin: '8px 0' }}>
                  <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="blog-title-link">
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{post.description}</p>
                
                <Link to={`/blog/${post.slug}`} className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.85rem', marginTop: '10px' }}>
                  Read Article <ChevronRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .blog-title-link:hover {
          color: var(--primary) !important;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow {
          animation: spinSlow 8s linear infinite;
        }
      `}</style>
    </>
  );
}
