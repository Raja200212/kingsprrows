import React, { useEffect, useRef } from 'react';
import { ArrowRight, PenTool, Megaphone, Code, TrendingUp, Target, BarChart3 } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = Math.min(40, Math.floor((width * height) / 25000));

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(184, 144, 71, 0.4)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184, 144, 71, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Slow moving mesh grid pattern in background
      ctx.strokeStyle = 'rgba(184, 144, 71, 0.015)';
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" style={{
      padding: '120px 0 80px 0',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Main Grid: Left content, Right Laptop visual */}
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Left Column: Heading & CTA */}
          <div className="reveal active" style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <div style={{
              fontFamily: 'var(--heading)',
              fontSize: '0.9rem',
              fontWeight: '700',
              color: 'var(--primary)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span>Ideas. Solutions. Impact.</span>
              <span style={{ height: '2px', width: '60px', background: 'var(--primary)' }} />
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              lineHeight: '1.1',
              fontWeight: '800',
              color: 'var(--text-primary)',
              margin: '8px 0 0 0'
            }}>
              We Create. <br />
              We Build. <br />
              We <span style={{ color: 'var(--primary)' }}>Elevate</span> Brands.
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: '1.6',
              margin: '8px 0'
            }}>
              Kingsparrow is your growth partner for content, digital marketing and software solutions that drive real results.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
              <a href="/services" className="btn btn-primary" style={{ background: 'var(--primary)', color: '#fff', boxShadow: '0 4px 15px rgba(184, 144, 71, 0.3)' }}>
                Explore Our Services <ArrowRight size={16} />
              </a>
              <a href="/portfolio" className="btn btn-secondary" style={{ border: '1px solid var(--primary)', color: 'var(--primary)', background: 'transparent' }}>
                View Our Work <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Laptop CSS Mockup with Floating Badges */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '20px 0',
            animation: 'float 6s ease-in-out infinite'
          }}>
            {/* Background glowing blob */}
            <div style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(184, 144, 71, 0.15) 0%, transparent 70%)',
              filter: 'blur(30px)',
              top: '-30px',
              right: '-30px',
              zIndex: -1
            }} />

            {/* Laptop HTML/CSS mockup */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '430px',
              zIndex: 2
            }}>
              {/* Screen bezel */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '62.5%', // 16:10 aspect ratio
                background: '#000',
                borderRadius: '12px 12px 0 0',
                border: '10px solid #1e293b',
                borderBottom: 'none',
                boxShadow: '0 20px 40px rgba(13, 34, 64, 0.15)',
                overflow: 'hidden'
              }}>
                {/* Camera dot */}
                <div style={{
                  position: 'absolute',
                  top: '4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#334155',
                  zIndex: 5
                }} />
                
                {/* Screen display */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px'
                }}>
                  <img 
                    src={logoImg} 
                    alt="Kingsparrow Logo" 
                    style={{
                      maxWidth: '90%',
                      maxHeight: '90%',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>

              {/* Laptop base */}
              <div style={{
                position: 'relative',
                width: '112%',
                left: '-6%',
                height: '12px',
                background: '#cbd5e1',
                borderRadius: '0 0 10px 10px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                zIndex: 3
              }}>
                {/* Trackpad notch */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20%',
                  height: '3px',
                  background: '#94a3b8',
                  borderRadius: '0 0 4px 4px'
                }} />
              </div>
            </div>

            {/* Floating Badges */}
            {/* Badge 1: CONTENT (Top) */}
            <div className="floating-badge" style={{
              position: 'absolute',
              top: '-10%',
              left: '35%',
              background: '#ffffff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 10px 25px rgba(13, 34, 64, 0.06)',
              borderRadius: '16px',
              padding: '10px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              zIndex: 4,
              animation: 'floatBadgeContent 5s ease-in-out infinite'
            }}>
              <div style={{
                background: 'rgba(184, 144, 71, 0.08)',
                padding: '4px',
                borderRadius: '6px',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <PenTool size={14} />
              </div>
              <span style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>CONTENT</span>
            </div>

            {/* Badge 2: DIGITAL MARKETING (Left) */}
            <div className="floating-badge" style={{
              position: 'absolute',
              top: '35%',
              left: '-8%',
              background: '#ffffff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 10px 25px rgba(13, 34, 64, 0.06)',
              borderRadius: '16px',
              padding: '10px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              zIndex: 4,
              animation: 'floatBadgeMarketing 6s ease-in-out infinite'
            }}>
              <div style={{
                background: 'rgba(184, 144, 71, 0.08)',
                padding: '4px',
                borderRadius: '6px',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Megaphone size={14} />
              </div>
              <span style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>DIGITAL MARKETING</span>
            </div>

            {/* Badge 3: SOFTWARE (Right) */}
            <div className="floating-badge" style={{
              position: 'absolute',
              top: '20%',
              right: '-8%',
              background: '#ffffff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 10px 25px rgba(13, 34, 64, 0.06)',
              borderRadius: '16px',
              padding: '10px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              zIndex: 4,
              animation: 'floatBadgeSoftware 5.5s ease-in-out infinite'
            }}>
              <div style={{
                background: 'rgba(184, 144, 71, 0.08)',
                padding: '4px',
                borderRadius: '6px',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Code size={14} />
              </div>
              <span style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>SOFTWARE</span>
            </div>

            {/* Badge 4: GROWTH (Bottom Right) */}
            <div className="floating-badge" style={{
              position: 'absolute',
              bottom: '10%',
              right: '-6%',
              background: '#ffffff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 10px 25px rgba(13, 34, 64, 0.06)',
              borderRadius: '16px',
              padding: '10px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              zIndex: 4,
              animation: 'floatBadgeGrowth 7s ease-in-out infinite'
            }}>
              <div style={{
                background: 'rgba(184, 144, 71, 0.08)',
                padding: '4px',
                borderRadius: '6px',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TrendingUp size={14} />
              </div>
              <span style={{ fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>GROWTH</span>
            </div>
          </div>
        </div>

        {/* Horizontal 4-Column key benefits list */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          width: '100%',
          marginTop: '20px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(13, 34, 64, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: '#fff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 8px 20px rgba(13, 34, 64, 0.03)',
              padding: '12px',
              borderRadius: '12px',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <PenTool size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>Content</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>That Connects</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: '#fff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 8px 20px rgba(13, 34, 64, 0.03)',
              padding: '12px',
              borderRadius: '12px',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BarChart3 size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>Digital</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>That Delivers</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: '#fff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 8px 20px rgba(13, 34, 64, 0.03)',
              padding: '12px',
              borderRadius: '12px',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Code size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>Software</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>That Solves</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: '#fff',
              border: '1px solid rgba(13, 34, 64, 0.05)',
              boxShadow: '0 8px 20px rgba(13, 34, 64, 0.03)',
              padding: '12px',
              borderRadius: '12px',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Target size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>Results</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>That Matter</p>
            </div>
          </div>
        </div>

        {/* Trusted by brands section */}
        <div style={{
          width: '100%',
          marginTop: '20px',
          background: '#ffffff',
          border: '1px solid rgba(13, 34, 64, 0.05)',
          boxShadow: '0 12px 35px rgba(13, 34, 64, 0.04)',
          borderRadius: '20px',
          padding: '20px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div style={{ 
            fontSize: '0.9rem', 
            fontWeight: '700', 
            color: 'var(--primary)', 
            letterSpacing: '0.02em',
            borderRight: '1px solid rgba(13, 34, 64, 0.1)',
            paddingRight: '24px'
          }} className="trusted-title">
            Trusted by growing brands
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '32px',
            flexGrow: 1,
            justifyContent: 'space-around'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#0284c7', fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--heading)' }}>medix<span style={{ color: '#10b981' }}>+</span></span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: '600' }}>HEALTHCARE</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#14532d', fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--heading)' }}>UrbanStay</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: '600' }}>HOTELS</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#1e3a8a', fontWeight: 800, fontSize: '1.25rem', fontStyle: 'italic', fontFamily: 'var(--heading)' }}>AutoDrive</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: '600' }}>EXPERTS</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#581c87', fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--heading)' }}>Edu<span style={{ fontWeight: 400 }}>Next</span></span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: '600' }}>LEARNING</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#be123c', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.5px', fontFamily: 'var(--heading)' }}>Shopora</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: '600' }}>E-COMMERCE</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatBadgeContent {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        @keyframes floatBadgeMarketing {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }
        @keyframes floatBadgeSoftware {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes floatBadgeGrowth {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.02); }
        }
        @media (max-width: 768px) {
          .trusted-title {
            border-right: none !important;
            padding-right: 0 !important;
            border-bottom: 1px solid rgba(13, 34, 64, 0.1);
            padding-bottom: 12px;
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
