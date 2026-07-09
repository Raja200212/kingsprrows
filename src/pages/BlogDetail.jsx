import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center', minHeight: '80vh' }}>
        <h1 style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>Article Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>The requested blog post could not be located on our server.</p>
        <Link to="/blog" className="btn btn-primary">
          <ArrowLeft size={16} /> Return to Blog
        </Link>
      </div>
    );
  }

  // Find related posts (excluding current post)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://www.kingsparrows.in/blog/${post.slug}`} />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'left' }}>
          
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '40px'
          }}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{post.category}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={13} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={13} /> By {post.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={13} /> {post.readTime}</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', color: 'var(--text-primary)', marginBottom: '32px', textAlign: 'left' }}>
            {post.title}
          </h1>

          {/* Blog Content */}
          <div 
            className="blog-content"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              fontSize: '1.05rem',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Articles Footer */}
          <div style={{ marginTop: '80px', borderTop: '1px solid rgba(16, 185, 129, 0.15)', paddingTop: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '24px' }}>Recommended Reading</h3>
            <div className="grid-2">
              {relatedPosts.map((related, idx) => (
                <Link to={`/blog/${related.slug}`} key={idx} style={{ textDecoration: 'none' }} className="glass-card-link">
                  <div className="glass-card" style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'transform 0.2s ease' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: '600' }}>{related.category}</span>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '700', textAlign: 'left', margin: 0 }}>{related.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: '1.5' }}>
                      {related.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Local blog custom styling */}
      <style>{`
        .blog-content h2 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-top: 40px;
          margin-bottom: 16px;
          text-align: left;
        }
        .blog-content p {
          margin-bottom: 24px;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 24px;
          padding-left: 20px;
        }
        .blog-content li {
          margin-bottom: 12px;
        }
        .glass-card-link:hover .glass-card {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.4) !important;
        }
      `}</style>
    </>
  );
}
