import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Check, ShieldCheck, Award, Zap, HeartHandshake, Users, 
  BookOpen, ArrowRight, Eye, Sparkles 
} from 'lucide-react';

export default function About() {
  const coreValues = [
    { title: "Innovation", desc: "We embrace new technologies and creative ideas to deliver modern, efficient solutions.", icon: <Sparkles size={20} /> },
    { title: "Integrity", desc: "We believe in honesty, transparency, and ethical business practices in all client relationships.", icon: <ShieldCheck size={20} /> },
    { title: "Customer Success", desc: "Our clients' success is our highest priority. We align our growth pipelines to your KPIs.", icon: <HeartHandshake size={20} /> },
    { title: "Excellence", desc: "We strive for the highest quality in code architecture, design interfaces, and marketing campaigns.", icon: <Award size={20} /> },
    { title: "Collaboration", desc: "We work closely with our clients to understand their workflows and deliver the best outcomes.", icon: <Users size={20} /> },
    { title: "Continuous Learning", desc: "We continuously improve our skills and certifications to stay ahead of evolving digital trends.", icon: <BookOpen size={20} /> }
  ];

  const teamRoles = [
    "Software Developers", "Full-Stack Engineers", "UI/UX Designers", 
    "SEO Specialists", "Google Ads Experts", "Meta Ads Specialists", 
    "Social Media Managers", "Graphic Designers", "Content Writers", 
    "Project Managers", "QA Engineers", "Customer Success Executives"
  ];

  const whyChooseUsPoints = [
    "End-to-End Digital Solutions",
    "Experienced & Skilled Professionals",
    "Custom Software Development",
    "Data-Driven Marketing Strategies",
    "Transparent Communication",
    "On-Time Project Delivery",
    "Scalable & Secure Technologies",
    "Dedicated Customer Support"
  ];

  const techStacks = [
    "Google Ads", "Search Engine Optimization (SEO)", "Meta Ads Management", 
    "Google Analytics", "Google Tag Manager", "WordPress Development", 
    "React.js & Next.js", "Node.js Backend", "Laravel Systems", 
    "Python & Django", ".NET Core Development", "MySQL & PostgreSQL", 
    "AWS Cloud", "REST API Development", "CRM & ERP Solutions", 
    "AI Integration & Automation", "Git & GitHub Workflow"
  ];

  return (
    <>
      <Helmet>
        <title>About Kingsparrows | Digital Marketing &amp; Software Journey</title>
        <meta name="description" content="Discover the story, mission, vision, core values, and technical expertise of KingSparrow, a leading digital marketing and custom software agency." />
        <link rel="canonical" href="https://www.kingsparrows.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Kingsparrows | Digital Marketing &amp; Software Journey" />
        <meta property="og:description" content="Discover the story, mission, vision, core values, and technical expertise of KingSparrow, a leading digital marketing and custom software agency." />
        <meta property="og:url" content="https://www.kingsparrows.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Kingsparrows | Digital Marketing &amp; Software Journey" />
        <meta name="twitter:description" content="Discover the story, mission, vision, core values, and technical expertise of KingSparrow, a leading digital marketing and custom software agency." />
      </Helmet>

      <section style={{ padding: '120px 0 60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          
          {/* Section 1: Hero Intro */}
          <div className="reveal active" style={{ marginBottom: '60px' }}>
            <span className="badge">Who We Are</span>
            <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Building Digital Success <br />
              <span className="text-gradient">Through Innovation</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto', lineHeight: '1.6' }}>
              We are a results-driven Digital Marketing and Software Development company dedicated to helping businesses grow in the digital world. Our mission is to provide innovative marketing strategies and powerful software solutions that improve business performance, increase customer engagement, and accelerate growth.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '850px', margin: '20px auto 0 auto', lineHeight: '1.6' }}>
              From startups to established enterprises, we partner with businesses to create modern websites, mobile applications, custom software, CRM systems, and digital marketing campaigns that deliver measurable results. By combining creativity, technology, and data-driven strategies, we help our clients stay ahead of the competition and achieve long-term success.
            </p>
          </div>

          <div style={{ height: '1px', background: 'rgba(184, 144, 71, 0.15)', margin: '40px 0' }} />

          {/* Section 2: Our Story */}
          <div className="grid-2 reveal active" style={{ textAlign: 'left', alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '12px' }}>Our History</span>
              <h2 style={{ textAlign: 'left', fontSize: '1.8rem', marginBottom: '16px' }}>Our Story</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '12px' }}>
                Every successful business begins with a vision. Our journey started with a simple goal: to help businesses establish a strong online presence and use technology to solve real-world challenges.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '12px' }}>
                We recognized that many businesses struggled to find a reliable partner who could provide both effective digital marketing and high-quality software development under one roof. With a passion for innovation and customer success, we built a company focused on delivering customized solutions that meet each client's unique needs.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Over the years, we have worked with businesses across healthcare, construction, education, retail, real estate, travel, and many other industries. Today, we continue to empower businesses by creating digital experiences that drive growth, improve efficiency, and generate lasting value.
              </p>
            </div>
            
            {/* Visual Callout block */}
            <div className="glass-card" style={{ padding: '36px', borderLeft: '4px solid var(--primary)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)' }}>👑</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 750, color: 'var(--text-primary)' }}>Vision-Driven Solutions</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                \"We bridge the technical gap between software development and digital marketing psychology, creating a unified growth flywheel for modern companies.\"
              </p>
            </div>
          </div>

          {/* Section 3: Mission & Vision */}
          <div className="grid-2 reveal active" style={{ textAlign: 'left', marginBottom: '80px', gap: '30px' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--primary)' }}>
                <Zap size={24} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 750, color: 'var(--text-primary)' }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Our mission is to empower businesses with innovative digital marketing strategies and custom software solutions that help them attract more customers, streamline operations, and achieve sustainable growth. We are committed to delivering high-quality services, maintaining transparency, and building long-term partnerships based on trust and measurable results.
              </p>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--secondary)' }}>
                <Eye size={24} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 750, color: 'var(--text-primary)' }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Our vision is to become one of the most trusted technology and digital marketing companies by delivering innovative, scalable, and future-ready solutions that transform businesses worldwide. We aim to inspire growth through creativity, technology, and continuous innovation while helping organizations succeed in an ever-evolving digital landscape.
              </p>
            </div>
          </div>

          {/* Section 4: Core Values */}
          <div className="reveal active" style={{ marginBottom: '80px' }}>
            <span className="badge">Foundation</span>
            <h2 style={{ marginBottom: '40px' }}>Our Core Values</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '24px' 
            }}>
              {coreValues.map((val, idx) => (
                <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', padding: '24px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(184, 144, 71, 0.08)',
                    color: 'var(--primary)'
                  }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 750 }}>{val.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Team Overview */}
          <div className="reveal active" style={{ marginBottom: '80px', borderTop: '1px solid rgba(184, 144, 71, 0.15)', paddingTop: '60px' }}>
            <span className="badge">Our People</span>
            <h2>Meet Our Team</h2>
            <p style={{ maxWidth: '650px', margin: '0 auto 32px auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Behind every successful project is a passionate team of specialists. Our experts bring together skills in software engineering, UI/UX design, digital marketing, SEO, paid advertising, cloud technologies, and project management.
            </p>

            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '12px',
              maxWidth: '850px',
              margin: '0 auto'
            }}>
              {teamRoles.map((role, idx) => (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ 
                    padding: '8px 18px', 
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 650,
                    color: 'var(--text-primary)',
                    border: '1px solid rgba(184, 144, 71, 0.12)',
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Why Choose Us & Tech Stack */}
          <div className="grid-2 reveal active" style={{ textAlign: 'left', marginBottom: '80px', gap: '40px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '12px' }}>Value Proposition</span>
              <h2 style={{ textAlign: 'left', fontSize: '1.6rem', marginBottom: '24px' }}>Why Choose Us</h2>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {whyChooseUsPoints.map((pt, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Check size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="badge" style={{ marginBottom: '12px' }}>Expertise & Stack</span>
              <h2 style={{ textAlign: 'left', fontSize: '1.6rem', marginBottom: '24px' }}>Certifications & Skills</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {techStacks.map((stack, idx) => (
                  <span 
                    key={idx} 
                    style={{ 
                      fontSize: '0.75rem', 
                      background: 'rgba(255, 255, 255, 0.65)', 
                      padding: '5px 12px', 
                      borderRadius: '6px',
                      border: '1px solid rgba(184, 144, 71, 0.12)',
                      color: 'var(--text-secondary)',
                      fontWeight: 550
                    }}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 7: Final CTA */}
          <div className="reveal active" style={{
            background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)',
            borderRadius: '24px',
            padding: '40px 30px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(13, 34, 64, 0.2)',
            border: '1px solid rgba(184, 144, 71, 0.15)'
          }}>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '12px' }}>Let's Build Your Digital Future</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Whether you need a high-performing website, a custom software solution, or a digital marketing strategy that delivers real results, we're here to help. Let's work together to transform your ideas into impactful digital experiences.
            </p>
            <a 
              href="/contact" 
              className="btn btn-cyan"
              style={{ display: 'inline-flex', gap: '8px', padding: '12px 24px', fontSize: '0.85rem' }}
            >
              Get Started Now <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
