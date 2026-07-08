import React, { useState, useEffect, useRef } from 'react';
import { Send, Play, Sparkles, Mail, CheckCircle2, AlertCircle, Trash, RefreshCw } from 'lucide-react';

export default function ToolsShowcase() {
  const [activeTool, setActiveTool] = useState('whatsapp');

  // WhatsApp States
  const [campaignName, setCampaignName] = useState('Product Launch Promo');
  const [message, setMessage] = useState('Hello {name}, we have a special 20% discount coupon for you: SPECIAL20. Claim now!');
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [csvName, setCsvName] = useState('');
  const [sending, setSending] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sentCount, setSentCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);
  const [logs, setLogs] = useState([]);
  const logEndRef = useRef(null);

  // Email ROI States
  const [subscribers, setSubscribers] = useState(15000);
  const [campaigns, setCampaigns] = useState(4);
  const [orderValue, setOrderValue] = useState(45);
  const [industryOpenRate, setIndustryOpenRate] = useState(0.22); // 22%
  const [clickRate, setClickRate] = useState(0.028); // 2.8% CTR
  const [convRate, setConvRate] = useState(0.015); // 1.5% conversion of clicks

  // Scroll logs to bottom
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // WhatsApp Simulation Handler
  const startWhatsappSimulation = () => {
    if (!campaignName || !message) {
      alert('Please fill out the campaign name and message template.');
      return;
    }
    setSending(true);
    setProgress(0);
    setSentCount(0);
    setFailedCount(0);
    setLogs([
      { time: getTimestamp(), type: 'info', text: `Initializing Campaign: "${campaignName}"` },
      { time: getTimestamp(), type: 'info', text: 'Securing connection to API Gateway...' },
    ]);

    let currentProgress = 0;
    let index = 0;
    const namesList = ['Oliver', 'Emma', 'Liam', 'Sophia', 'Lucas', 'Mia', 'Noah', 'Ava', 'Mason', 'Isabella'];
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      const isFailed = Math.random() < 0.08; // 8% failure rate
      const activeName = namesList[index % namesList.length];
      const phoneNum = `+1 (555) 019-${Math.floor(1000 + Math.random() * 9000)}`;
      
      if (isFailed) {
        setFailedCount(prev => prev + 1);
        setLogs(prev => [
          ...prev,
          { time: getTimestamp(), type: 'error', text: `Failed to deliver to ${activeName} (${phoneNum}) - Timeout` }
        ]);
      } else {
        setSentCount(prev => prev + 1);
        setLogs(prev => [
          ...prev,
          { time: getTimestamp(), type: 'success', text: `Delivered message to ${activeName} (${phoneNum})` }
        ]);
      }

      index++;

      if (currentProgress >= 100) {
        clearInterval(interval);
        setSending(false);
        setLogs(prev => [
          ...prev,
          { time: getTimestamp(), type: 'info', text: `🎉 Broadcast Complete! Successful: ${index - failedCount - 1}, Failed: ${failedCount + 1}` }
        ]);
      }
    }, 700);
  };

  const getTimestamp = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCsvName(file.name);
      setCsvUploaded(true);
      setLogs(prev => [
        ...prev,
        { time: getTimestamp(), type: 'success', text: `Uploaded recipient list: ${file.name} (detected 250 contacts)` }
      ]);
    }
  };

  // Calculations for Email ROI
  const emailOpens = Math.round(subscribers * campaigns * industryOpenRate);
  const emailClicks = Math.round(emailOpens * clickRate);
  const emailConversions = Math.round(emailClicks * convRate);
  const projectedRevenue = Math.round(emailConversions * orderValue);

  return (
    <section id="tools" style={{ borderTop: '1px solid rgba(16, 185, 129, 0.15)' }}>
      <div className="container">
        <div className="reveal active" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge">Interactive Sandboxes</div>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Experience our cloud-based marketing tools in real-time. Test the WhatsApp Panel simulator or calculate your Email campaign ROI below.
          </p>

          {/* Toggle buttons */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.55)',
            border: '1px solid rgba(16, 185, 129, 0.15)',
            padding: '6px',
            borderRadius: '12px',
            marginTop: '32px'
          }}>
            <button 
              onClick={() => setActiveTool('whatsapp')}
              style={{
                background: activeTool === 'whatsapp' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: activeTool === 'whatsapp' ? 'var(--secondary)' : 'var(--text-muted)',
                border: activeTool === 'whatsapp' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                padding: '10px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--heading)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s'
              }}
            >
              <Send size={18} /> WhatsApp Tool
            </button>
            <button 
              onClick={() => setActiveTool('email')}
              style={{
                background: activeTool === 'email' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: activeTool === 'email' ? 'var(--primary)' : 'var(--text-muted)',
                border: activeTool === 'email' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                padding: '10px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--heading)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s'
              }}
            >
              <Mail size={18} /> Email ROI Tool
            </button>
          </div>
        </div>

        {/* Sandbox Content */}
        <div className="reveal active">
          {activeTool === 'whatsapp' ? (
            /* WHATSAPP SANDBOX */
            <div className="grid-2" style={{ gap: '32px' }}>
              
              {/* Simulator Inputs */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
                  Campaign Configurator
                </h3>

                <div>
                  <label style={labelStyle}>Campaign Name</label>
                  <input 
                    type="text" 
                    value={campaignName} 
                    onChange={(e) => setCampaignName(e.target.value)} 
                    disabled={sending}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message Template</label>
                  <textarea 
                    rows="4" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    disabled={sending}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Use `{'{name}'}` to personalize messages.</span>
                </div>

                <div>
                  <label style={labelStyle}>Upload Recipient List (.csv)</label>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <label style={{
                      ...btnFileStyle,
                      pointerEvents: sending ? 'none' : 'auto',
                      opacity: sending ? 0.6 : 1
                    }}>
                      Choose CSV File
                      <input 
                        type="file" 
                        accept=".csv" 
                        onChange={handleFileUpload} 
                        style={{ display: 'none' }} 
                        disabled={sending}
                      />
                    </label>
                    <span style={{ fontSize: '0.85rem', color: csvUploaded ? 'var(--secondary)' : 'var(--text-muted)' }}>
                      {csvUploaded ? csvName : 'No file chosen (Default demo list loaded)'}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={startWhatsappSimulation} 
                  disabled={sending}
                  className="btn btn-cyan" 
                  style={{ width: '100%', marginTop: '10px' }}
                >
                  {sending ? (
                    <>
                      <RefreshCw className="spinner" size={18} style={{ animation: 'spin 1.5s linear infinite' }} /> Sending Broadcast...
                    </>
                  ) : (
                    <>
                      <Play size={18} /> Launch Bulk Broadcast
                    </>
                  )}
                </button>
              </div>

              {/* Simulator Execution Output */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>Live Console</h3>
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    background: sending ? 'rgba(234, 179, 8, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                    color: sending ? '#eab308' : 'var(--primary)',
                    border: '1px solid currentColor'
                  }}>
                    {sending ? 'Sending...' : 'Idle'}
                  </span>
                </div>

                {/* Counter statistics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  <div style={counterCardStyle}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sent</span>
                    <strong style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>{sentCount + failedCount}</strong>
                  </div>
                  <div style={counterCardStyle}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Success</span>
                    <strong style={{ fontSize: '1.6rem', color: 'var(--primary)' }}>{sentCount}</strong>
                  </div>
                  <div style={counterCardStyle}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Failed</span>
                    <strong style={{ fontSize: '1.6rem', color: '#ef4444' }}>{failedCount}</strong>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Send Progress</span>
                    <span style={{ color: 'var(--secondary)' }}>{progress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${progress}%`,
                      height: '100%',
                      background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                      transition: 'width 0.3s ease',
                      boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
                    }} />
                  </div>
                </div>

                {/* Logger Panel */}
                <div style={{
                  flexGrow: 1,
                  background: '#041b11',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: '12px',
                  padding: '16px',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.8rem',
                  color: '#4ade80',
                  minHeight: '200px',
                  maxHeight: '230px',
                  overflowY: 'auto',
                  textAlign: 'left'
                }}>
                  {logs.length === 0 ? (
                    <div style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '60px' }}>
                      Console output is empty. Launch the broadcast to simulate campaign delivery.
                    </div>
                  ) : (
                    logs.map((log, idx) => (
                      <div key={idx} style={{ marginBottom: '6px', display: 'flex', gap: '8px' }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>[{log.time}]</span>
                        {log.type === 'success' && <CheckCircle2 size={12} style={{ color: '#86efac', marginTop: '2px' }} />}
                        {log.type === 'error' && <AlertCircle size={12} style={{ color: '#fca5a5', marginTop: '2px' }} />}
                        <span style={{
                          color: log.type === 'success' ? '#86efac' : log.type === 'error' ? '#fca5a5' : '#6ee7b7'
                        }}>
                          {log.text}
                        </span>
                      </div>
                    ))
                  )}
                  <div ref={logEndRef} />
                </div>
              </div>
            </div>
          ) : (
            /* EMAIL ROI CALCULATOR */
            <div className="grid-2" style={{ gap: '32px' }}>
              
              {/* Sliders Container */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '28px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
                  ROI Parameter Sliders
                </h3>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={labelStyle}>Total Subscribers</label>
                    <strong style={{ color: 'var(--primary)' }}>{subscribers.toLocaleString()}</strong>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="100000" 
                    step="1000" 
                    value={subscribers} 
                    onChange={(e) => setSubscribers(Number(e.target.value))}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <span>1k</span>
                    <span>100k</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={labelStyle}>Campaigns per Month</label>
                    <strong style={{ color: 'var(--primary)' }}>{campaigns} campaigns</strong>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    step="1" 
                    value={campaigns} 
                    onChange={(e) => setCampaigns(Number(e.target.value))}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <span>1/mo</span>
                    <span>12/mo</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={labelStyle}>Average Cart / Order Value</label>
                    <strong style={{ color: 'var(--primary)' }}>${orderValue}</strong>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    step="5" 
                    value={orderValue} 
                    onChange={(e) => setOrderValue(Number(e.target.value))}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <span>$10</span>
                    <span>$500</span>
                  </div>
                </div>

                {/* Stats toggles */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Open Rate (%)</label>
                    <select 
                      style={selectStyle} 
                      value={industryOpenRate} 
                      onChange={(e) => setIndustryOpenRate(Number(e.target.value))}
                    >
                      <option value="0.15">15% (E-Commerce)</option>
                      <option value="0.22">22% (Marketing/Agency)</option>
                      <option value="0.28">28% (Finance/B2B)</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Click Rate of Opens</label>
                    <select 
                      style={selectStyle} 
                      value={clickRate} 
                      onChange={(e) => setClickRate(Number(e.target.value))}
                    >
                      <option value="0.015">1.5% CTR</option>
                      <option value="0.028">2.8% CTR (Avg)</option>
                      <option value="0.045">4.5% (High Eng.)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Calculations Output Card */}
              <div className="glass-card" style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(240, 253, 244, 0.6) 100%)'
              }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>Campaign ROI Forecast</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Estimated delivery pipeline numbers based on industry standard formulas.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                    <div style={statCardStyle}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Opens</span>
                      <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{emailOpens.toLocaleString()}</strong>
                    </div>
                    <div style={statCardStyle}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Clicks</span>
                      <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{emailClicks.toLocaleString()}</strong>
                    </div>
                    <div style={statCardStyle}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sales</span>
                      <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{emailConversions.toLocaleString()}</strong>
                    </div>
                  </div>

                  {/* Funnel chart preview */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
                        <span>Emails Delivered</span>
                        <span>{(subscribers * campaigns).toLocaleString()} (100%)</span>
                      </div>
                      <div style={{ height: '6px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '3px' }}>
                        <div style={{ width: '100%', height: '100%', background: 'var(--text-primary)', borderRadius: '3px' }} />
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
                        <span>Expected Opens</span>
                        <span>{emailOpens.toLocaleString()} ({Math.round(industryOpenRate * 100)}%)</span>
                      </div>
                      <div style={{ height: '6px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '3px' }}>
                        <div style={{ width: `${industryOpenRate * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: '3px' }} />
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
                        <span>Conversions (1.5% purchases)</span>
                        <span>{emailConversions.toLocaleString()} ({Math.round(convRate * 100 * 10) / 10}%)</span>
                      </div>
                      <div style={{ height: '6px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '3px' }}>
                        <div style={{ width: `${(emailConversions / (subscribers * campaigns)) * 1000}%`, height: '100%', background: 'var(--secondary)', borderRadius: '3px' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Revenue */}
                <div style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Projected Monthly Revenue
                  </span>
                  <h2 style={{
                    fontSize: '3rem',
                    color: 'var(--secondary)',
                    margin: '8px 0 0 0',
                    fontWeight: 800,
                    textShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                  }}>
                    ${projectedRevenue.toLocaleString()}
                  </h2>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Estimated ROI of {Math.round((projectedRevenue / (subscribers * 0.05)) * 100)}% based on custom campaign optimization rates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* CSS Spin effect for loader */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

// Styling Variables
const labelStyle = {
  display: 'block',
  fontSize: '0.8rem',
  color: 'var(--text-secondary)',
  marginBottom: '6px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(255, 255, 255, 0.55)',
  border: '1px solid rgba(16, 185, 129, 0.15)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.9rem',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit'
};

const selectStyle = {
  width: '100%',
  padding: '12px',
  background: 'rgba(255, 255, 255, 0.75)',
  border: '1px solid rgba(16, 185, 129, 0.15)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.85rem'
};

const btnFileStyle = {
  display: 'inline-block',
  padding: '10px 18px',
  background: 'rgba(255, 255, 255, 0.5)',
  border: '1px solid rgba(16, 185, 129, 0.15)',
  borderRadius: '6px',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const counterCardStyle = {
  background: 'rgba(255, 255, 255, 0.4)',
  border: '1px solid rgba(16, 185, 129, 0.12)',
  borderRadius: '8px',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const statCardStyle = {
  background: 'rgba(255, 255, 255, 0.4)',
  border: '1px solid rgba(16, 185, 129, 0.12)',
  borderRadius: '8px',
  padding: '10px 4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};
