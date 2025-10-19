import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Let's Work Together</h2>
      <p style={{fontSize: '1.15rem', marginBottom: '2rem'}}>
        I'm always interested in hearing about new projects and opportunities. 
        Whether you have a question, want to collaborate, or just want to say hi — 
        I'd love to hear from you!
      </p>

      <div style={{display: 'grid', gap: '1.5rem', marginTop: '2rem'}}>
        <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease'}} 
             onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(110, 231, 183, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'}}
             onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'}}>
          <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>📧</div>
          <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Email</strong>
          <p style={{marginTop: '0.5rem'}}>
            <a className="contact-link" href="mailto:yonatanhaile06@gmail.com" style={{fontSize: '1.05rem'}}>
              yonatanhaile06@gmail.com
            </a>
          </p>
        </div>

        <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease'}}
             onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(110, 231, 183, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'}}
             onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'}}>
          <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>📱</div>
          <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Phone</strong>
          <p style={{marginTop: '0.5rem'}}>
            <span className="contact-link" style={{fontSize: '1.05rem'}}>+251 914 888 890</span>
          </p>
        </div>

        <div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease'}}
             onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(110, 231, 183, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'}}
             onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'}}>
          <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>🐙</div>
          <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>GitHub</strong>
          <p style={{marginTop: '0.5rem'}}>
            <a className="contact-link" href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer" style={{fontSize: '1.05rem'}}>
              github.com/Yonatanhaile
            </a>
          </p>
        </div>
      </div>

      <div style={{marginTop: '2.5rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(110, 231, 183, 0.08) 0%, rgba(96, 165, 250, 0.06) 100%)', borderRadius: '12px', border: '1px solid rgba(110, 231, 183, 0.2)', textAlign: 'center'}}>
        <p style={{fontSize: '1.1rem', margin: 0}}>
          💡 <strong style={{color: 'var(--accent)'}}>Pro Tip:</strong> The best way to reach me is via email. 
          I typically respond within 24 hours!
        </p>
      </div>
    </section>
  )
}

export default Contact
