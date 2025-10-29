import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
      <div style={{fontWeight: '700', color: 'var(--text-primary)'}}>
        © {new Date().getFullYear()} Yonatan
      </div>
      <div style={{fontSize: '0.9rem'}}>
        Fullstack Developer • React & Node.js
      </div>
    </div>
    <div className="foot-links">
      <a href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer" title="Visit my GitHub profile">
        🐙 GitHub
      </a>
      <a href="mailto:yonatanhaile06@gmail.com" title="Send me an email">
        📧 Email
      </a>
      <a href="https://www.linkedin.com/in/yonatanhaile1/" target="_blank" rel="noreferrer" title="Connect on LinkedIn">
        💼 LinkedIn
      </a>
    </div>
  </footer>
)

export default Footer
