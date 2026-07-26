import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Check, ArrowRight, Activity, Home as HomeIcon, Hammer, 
  GraduationCap, Car, Utensils, ShoppingBag 
} from 'lucide-react';

export default function Industries() {
  const industriesList = [
    {
      title: "Healthcare",
      icon: <Activity size={24} style={{ color: 'var(--primary)' }} />,
      desc: "We help hospitals, clinics, diagnostic centers, pharmacies, and healthcare providers strengthen their digital presence and streamline patient management.",
      solutions: [
        "Hospital Websites", "Appointment Booking Systems", 
        "Healthcare CRM", "SEO & Local SEO", 
        "Google & Meta Ads", "Patient Management Software"
      ]
    },
    {
      title: "Real Estate",
      icon: <HomeIcon size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Generate more property enquiries and manage leads efficiently with our digital marketing and CRM solutions.",
      solutions: [
        "Property Listing Websites", "Lead Management CRM", 
        "Google Ads", "Meta Ads", 
        "Virtual Tour Integration", "Landing Pages"
      ]
    },
    {
      title: "Construction",
      icon: <Hammer size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Digitize project management and improve collaboration with software built for construction businesses.",
      solutions: [
        "Construction Management Software", "Employee Attendance", 
        "Project Tracking", "Inventory Management", 
        "Client Portal", "Invoice Management"
      ]
    },
    {
      title: "Education",
      icon: <GraduationCap size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Support schools, colleges, coaching centers, and online learning platforms with modern digital solutions.",
      solutions: [
        "School & College Websites", "Student Management Systems", 
        "Learning Management Systems (LMS)", "Admission Portals", 
        "Digital Marketing", "Mobile Apps"
      ]
    },
    {
      title: "Taxi Services",
      icon: <Car size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Increase bookings and improve fleet operations with technology-driven solutions.",
      solutions: [
        "Taxi Booking Websites", "Mobile Booking Apps", 
        "Driver Management", "GPS Integration", 
        "Google Ads", "Local SEO"
      ]
    },
    {
      title: "Restaurants",
      icon: <Utensils size={24} style={{ color: 'var(--secondary)' }} />,
      desc: "Help restaurants attract more customers and simplify online ordering.",
      solutions: [
        "Restaurant Websites", "Online Table Reservation", 
        "Food Ordering Systems", "Menu Management", 
        "Social Media Marketing", "Google Business Profile Optimization"
      ]
    },
    {
      title: "E-Commerce",
      icon: <ShoppingBag size={24} style={{ color: 'var(--primary)' }} />,
      desc: "Grow your online store with high-performance websites, mobile apps, and performance marketing campaigns.",
      solutions: [
        "E-Commerce Website Development", "Shopping Apps", 
        "Payment Gateway Integration", "Inventory Management", 
        "Google Shopping Ads", "SEO & Conversion Optimization"
      ]
    }
  ];

  const whyChooseUs = [
    "Experienced Digital Marketing Experts",
    "Skilled Software Development Team",
    "Customized Business Solutions",
    "Transparent Communication",
    "On-Time Project Delivery",
    "Affordable Pricing",
    "Dedicated Technical Support",
    "Focus on Measurable Business Growth"
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Custom Digital Marketing & Software Solutions</title>
        <meta name="description" content="Discover custom CRM systems and local marketing strategies for Healthcare, Construction, Real Estate, Education, Restaurants, Taxi fleet, and E-commerce." />
        <link rel="canonical" href="https://www.kingsparrows.in/industries" />
      </Helmet>

      <section style={{ padding: '120px 0 80px 0', minHeight: '85vh' }}>
        <div className="container" style={{ maxWidth: '1100px', textAlign: 'center' }}>
          
          {/* Hero Intro */}
          <div className="reveal active" style={{ marginBottom: '60px' }}>
            <span className="badge">Niche Verticals</span>
            <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Tailored Digital Solutions <br />
              <span className="text-gradient">for Every Industry</span>
            </h1>
            <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.6' }}>
              We understand that every industry has unique challenges. That's why we create customized marketing strategies and software solutions designed to meet the specific needs of your business.
            </p>
          </div>

          {/* Grid of Industries */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px',
            textAlign: 'left',
            marginBottom: '80px'
          }}>
            {industriesList.map((ind, idx) => (
              <div 
                key={idx} 
                className="glass-card reveal active" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '16px', 
                  padding: '30px',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(184, 144, 71, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {ind.icon}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{ind.title}</h3>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                    {ind.desc}
                  </p>
                </div>

                {/* Solutions List */}
                <div style={{ 
                  background: 'rgba(184, 144, 71, 0.04)', 
                  border: '1px solid rgba(184, 144, 71, 0.12)', 
                  borderRadius: '12px', 
                  padding: '16px' 
                }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '10px' }}>
                    Tailored Solutions
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {ind.solutions.map((sol, solIdx) => (
                      <li key={solIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }} />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

          {/* Section: Why Businesses Choose Us */}
          <div style={{ borderTop: '1px solid rgba(184, 144, 71, 0.15)', paddingTop: '60px', marginBottom: '80px' }} className="reveal active">
            <span className="badge">Our Standards</span>
            <h2>Why Businesses Choose Us</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: 'var(--text-secondary)' }}>
              We offer comprehensive expertise, secure technology stacks, and reliable delivery parameters.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '20px' 
            }}>
              {whyChooseUs.map((pt, idx) => (
                <div key={idx} className="glass-card" style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '20px 24px', textAlign: 'left' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(184, 144, 71, 0.1)',
                    color: 'var(--primary)',
                    flexShrink: 0
                  }}>
                    <Check size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-primary)' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: CTA Let's Build Your Success Together */}
          <div className="reveal active" style={{
            background: 'linear-gradient(135deg, #062c1e 0%, #031810 100%)',
            borderRadius: '24px',
            padding: '50px 30px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(13, 34, 64, 0.2)',
            border: '1px solid rgba(184, 144, 71, 0.15)'
          }}>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '12px' }}>Let's Build Your Success Together</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '650px', margin: '0 auto 24px auto', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Whether you need a powerful marketing strategy, a professional website, a custom CRM, or a complete software solution, we're ready to help your business grow. Contact us today for a free consultation and discover how we can turn your ideas into results.
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
