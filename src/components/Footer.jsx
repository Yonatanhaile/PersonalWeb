import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div>© {new Date().getFullYear()} Yonatan — Fullstack Developer</div>
    <div className="foot-links">
      <a href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer">GitHub</a>
      <a href="mailto:yonatanhaile06@gmail.com">Email</a>
    </div>
  </footer>
)

export default Footer
