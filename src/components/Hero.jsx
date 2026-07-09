import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

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
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
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
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Slow moving mesh grid pattern in background
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.015)';
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
      padding: '100px 0 60px 0',
      minHeight: '85vh',
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
      <div className="container grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Left Side: Content */}
        <div className="reveal active" style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
          <div className="badge" style={{ alignSelf: 'flex-start' }}>
            ✨ All-in-One Digital Growth Partner
          </div>
          <h1>
            Accelerate Growth. <br />
            <span className="text-gradient">Scale Your Brand.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '540px' }}>
            We combine high-performance <strong style={{ color: 'var(--text-primary)' }}>Digital Marketing</strong> (SEO, SMM, GMB) with premium <strong style={{ color: 'var(--text-primary)' }}>Software Development</strong> & custom marketing tools to multiply your revenue.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a href="#pricing" className="btn btn-primary">
              View Packages <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>

          {/* Stats Bar */}
          <div className="stats-grid">
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>99.2%</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Client Retention Rate</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>12M+</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Marketing Messages Sent</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>4.9★</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Clutch & G2 Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Animated Dashboard */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'float 6s ease-in-out infinite'
        }}>
          {/* Background glowing blobs */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
            top: '-50px',
            right: '-50px',
            zIndex: -1
          }} />
          <div style={{
            position: 'absolute',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(30px)',
            bottom: '-50px',
            left: '-50px',
            zIndex: -1
          }} />

          {/* Core Glassmorphism Dashboard */}
          <div className="glass-card" style={{
            width: '100%',
            maxWidth: '480px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            position: 'relative'
          }}>
            {/* Header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>live_campaign_analytics.js</span>
            </div>





            {/* Status alerts */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 14px',
              background: 'rgba(16, 185, 129, 0.08)',
              borderRadius: '8px',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              fontSize: '0.8rem',
              color: 'var(--secondary)'
            }}>
              <ShieldCheck size={16} />
              <span>WhatsApp panel API online. SMTP Server connected successfully.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
