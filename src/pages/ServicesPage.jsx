import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, Megaphone, Code, Layout, Smartphone, Palette, 
  Search, Target, Share2, Award, MessageCircle, Database, ArrowRight 
} from 'lucide-react';

function getServiceSeoLink(title) {
  switch (title) {
    case "Digital Marketing":
      return "/digital-marketing-company-dindigul";
    case "Software Development":
      return "/software-development-company-dindigul";
    case "Web Development":
      return "/web-development-company-dindigul";
    case "Mobile App Development":
      return "/mobile-app-development-dindigul";
    case "Search Engine Optimization (SEO)":
      return "/seo-company-dindigul";
    case "Google Ads Management":
      return "/google-ads-agency-dindigul";
    case "Meta Ads (Facebook & Instagram)":
      return "/meta-ads-agency-dindigul";
    case "Social Media Marketing":
      return "/social-media-marketing-dindigul";
    case "Branding":
      return "/branding-company-dindigul";
    default:
      return null;
  }
}

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Digital Marketing",
      icon: <Megaphone size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Grow your online presence, generate quality leads, and increase your revenue with data-driven digital marketing strategies.",
      listTitle: "Our Digital Marketing Services",
      items: [
        "Search Engine Optimization (SEO)", "Google Ads (PPC)", "Meta Ads (Facebook & Instagram)", 
        "Social Media Marketing", "Content Marketing", "Email Marketing", 
        "Local SEO", "Google Business Profile Optimization", 
        "Performance Marketing", "Conversion Rate Optimization (CRO)"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "More Website Traffic", "Better Brand Visibility", "Increased Leads & Sales", 
        "Higher Return on Investment (ROI)", "Improved Customer Engagement"
      ]
    },
    {
      title: "Software Development",
      icon: <Code size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "We build secure, scalable, and high-performance software solutions that simplify business operations and improve productivity.",
      listTitle: "Our Expertise",
      items: [
        "Custom Business Software", "ERP Solutions", "CRM Systems", 
        "SaaS Applications", "Enterprise Applications", 
        "Workflow Automation", "Cloud-Based Applications", "API Development & Integration"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Automated Business Processes", "Secure & Scalable Solutions", 
        "Improved Productivity", "Better Data Management", "Long-Term Business Growth"
      ]
    },
    {
      title: "Web Development",
      icon: <Layout size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Your website is your digital storefront. We create modern, responsive, and SEO-friendly websites that convert visitors into customers.",
      listTitle: "We Develop",
      items: [
        "Business Websites", "Corporate Websites", "Portfolio Websites", 
        "E-Commerce Websites", "Landing Pages", "CMS Websites", 
        "Booking Websites", "Custom Web Applications"
      ],
      benefitsTitle: "Features",
      benefits: [
        "Mobile Responsive Design", "Fast Loading Speed", "SEO Optimized", 
        "Secure Hosting Support", "Easy Content Management"
      ]
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Transform your business with powerful Android and iOS applications that deliver exceptional user experiences.",
      listTitle: "Our Mobile App Services",
      items: [
        "Android App Development", "iOS App Development", "Cross-Platform Apps", 
        "Business Applications", "E-Commerce Apps", "Booking Apps", 
        "Healthcare Apps", "Education Apps"
      ],
      benefitsTitle: "Why Choose Us",
      benefits: [
        "Modern UI Design", "High Performance", "Secure Authentication", 
        "Push Notifications", "API Integration"
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Great design creates memorable user experiences. We design interfaces that are attractive, intuitive, and easy to use.",
      listTitle: "Our Design Services",
      items: [
        "Website UI Design", "Mobile App UI Design", "Dashboard Design", 
        "Wireframing", "Prototyping", "User Experience Research", "Design Systems"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Better User Engagement", "Improved Conversion Rates", "Easy Navigation", 
        "Professional Brand Image"
      ]
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: <Search size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Improve your Google rankings and attract customers searching for your products and services.",
      listTitle: "SEO Services",
      items: [
        "Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO", 
        "Off-Page SEO", "Link Building", "SEO Audit", "Monthly Performance Reports"
      ],
      benefitsTitle: "SEO Benefits",
      benefits: [
        "Higher Google Rankings", "More Organic Traffic", "Better Website Performance", 
        "Long-Term Business Growth"
      ]
    },
    {
      title: "Google Ads Management",
      icon: <Target size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Reach potential customers instantly with professionally managed Google Ads campaigns.",
      listTitle: "Our Google Ads Services",
      items: [
        "Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads", 
        "Performance Max Campaigns", "Conversion Tracking", "Landing Page Optimization"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Instant Traffic", "Qualified Leads", "Better ROI", "Detailed Performance Reports"
      ]
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      icon: <Share2 size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Reach your ideal audience through highly targeted Meta advertising campaigns.",
      listTitle: "Campaign Types",
      items: [
        "Lead Generation Campaigns", "Website Traffic Campaigns", "Brand Awareness Campaigns", 
        "Engagement Campaigns", "Remarketing Campaigns", "E-Commerce Sales Campaigns"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Increased Brand Awareness", "More Sales & Leads", "Advanced Audience Targeting", 
        "Cost-Effective Advertising"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: <Share2 size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Build a strong online presence and connect with your audience across social media platforms.",
      listTitle: "Platforms We Manage",
      items: [
        "Facebook", "Instagram", "LinkedIn", "X (Twitter)", "YouTube", "Pinterest"
      ],
      benefitsTitle: "Services",
      benefits: [
        "Content Creation", "Graphic Design", "Reel & Video Marketing", 
        "Social Media Calendar", "Community Management", "Performance Analytics"
      ]
    },
    {
      title: "Branding",
      icon: <Award size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Create a memorable brand identity that builds trust and sets your business apart.",
      listTitle: "Branding Services",
      items: [
        "Logo Design", "Brand Identity", "Business Cards", "Brochures", 
        "Company Profile", "Brand Guidelines", "Packaging Design", "Marketing Collateral"
      ],
      benefitsTitle: "Branding Benefits",
      benefits: [
        "Professional Image", "Customer Trust", "Strong Market Presence", "Better Brand Recognition"
      ]
    },
    {
      title: "WhatsApp Marketing",
      icon: <MessageCircle size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Connect with customers instantly using one of the world's most popular messaging platforms.",
      listTitle: "Services",
      items: [
        "WhatsApp Business Setup", "Bulk Campaign Messages", "Automated Replies", 
        "Chatbot Integration", "Broadcast Campaigns", "Customer Support Automation", "Click-to-WhatsApp Ads"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Faster Customer Communication", "Higher Engagement", "Increased Sales Opportunities", 
        "Better Customer Support"
      ]
    },
    {
      title: "CRM Development",
      icon: <Database size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Manage leads, customers, and business operations from one centralized platform.",
      listTitle: "CRM Features",
      items: [
        "Lead Management", "Sales Pipeline Tracking", "Customer Database", 
        "Task & Follow-Up Management", "Employee Management", "Role-Based Access", 
        "Reports & Analytics", "WhatsApp & Email Integration"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Better Customer Relationships", "Increased Sales Efficiency", 
        "Automated Follow-Ups", "Real-Time Reporting", "Improved Team Collaboration"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing &amp; Software Services | Kingsparrows</title>
        <meta name="description" content="KingSparrow offers digital marketing &amp; software services including Web Development, Mobile Apps, SEO, Google &amp; Meta Ads, and CRM Development." />
        <link rel="canonical" href="https://www.kingsparrows.in/services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Marketing &amp; Software Services | Kingsparrows" />
        <meta property="og:description" content="KingSparrow offers digital marketing &amp; software services including Web Development, Mobile Apps, SEO, Google &amp; Meta Ads, and CRM Development." />
        <meta property="og:url" content="https://www.kingsparrows.in/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing &amp; Software Services | Kingsparrows" />
        <meta name="twitter:description" content="KingSparrow offers digital marketing &amp; software services including Web Development, Mobile Apps, SEO, Google &amp; Meta Ads, and CRM Development." />
      </Helmet>

      <section style={{ padding: '120px 0 80px 0', minHeight: '85vh' }}>
        <div className="container" style={{ maxWidth: '1150px', textAlign: 'center' }}>
          
          {/* Header Title */}
          <div className="reveal active" style={{ marginBottom: '60px' }}>
            <span className="badge">Our Services</span>
            <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Innovative Digital Solutions <br />
              <span className="text-gradient">for Business Growth</span>
            </h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.6' }}>
              We provide end-to-end digital marketing and software development services that help businesses attract customers, improve operations, and achieve sustainable growth. Whether you're a startup, SME, or enterprise, our solutions are tailored to meet your business goals.
            </p>
          </div>

          {/* Grid of Services Details */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px',
            textAlign: 'left'
          }}>
            {servicesList.map((service, idx) => (
              <div 
                key={idx} 
                className="glass-card reveal active" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '20px', 
                  padding: '30px',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                {/* Upper Content */}
                <div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(184, 144, 71, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{service.title}</h3>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                    {service.desc}
                  </p>

                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {service.listTitle}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {service.items.map((item, itemIdx) => (
                        <span 
                          key={itemIdx} 
                          style={{
                            fontSize: '0.72rem',
                            background: 'rgba(255, 255, 255, 0.65)',
                            padding: '4px 8px',
                            borderRadius: '5px',
                            border: '1px solid rgba(184, 144, 71, 0.1)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Benefits Block */}
                <div style={{ 
                  background: 'rgba(184, 144, 71, 0.04)', 
                  border: '1px solid rgba(184, 144, 71, 0.12)', 
                  borderRadius: '12px', 
                  padding: '16px',
                  marginTop: '10px'
                }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>
                    {service.benefitsTitle}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {service.benefits.map((benefit, benIdx) => (
                      <li key={benIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Detailed Service Page Link */}
                {getServiceSeoLink(service.title) && (
                  <div style={{ marginTop: '16px', textAlign: 'right' }}>
                    <Link 
                      to={getServiceSeoLink(service.title)} 
                      style={{ 
                        color: 'var(--primary)', 
                        textDecoration: 'none', 
                        fontSize: '0.82rem', 
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      className="service-detail-link"
                    >
                      Explore Dindigul Services <ArrowRight size={12} />
                    </Link>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* CTA Success */}
          <div className="reveal active" style={{
            background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)',
            borderRadius: '24px',
            padding: '50px 30px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(13, 34, 64, 0.2)',
            border: '1px solid rgba(184, 144, 71, 0.15)',
            marginTop: '80px'
          }}>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '12px' }}>Empower Your Business Today</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '650px', margin: '0 auto 24px auto', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Let's build modern applications and scale your search rankings. Reach out to coordinate custom development schedules.
            </p>
            <a 
              href="/contact" 
              className="btn btn-cyan"
              style={{ display: 'inline-flex', gap: '8px', padding: '12px 24px', fontSize: '0.85rem' }}
            >
              Get Free Consultation <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
