import React from 'react'

const Home = () => {
  const badges = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML & CSS', 'AI Engineering', 'REST APIs']
  return (
    <section className="home hero">
      <div className="hero-grid">
        <div className="hero-inner">
          <p className="lead">👋 Welcome to my portfolio</p>
          <h1 className="hero-title">Hi, I'm <span className="accent">Yonatan</span></h1>
          <p className="hero-sub">Fullstack Developer specializing in building responsive, accessible web applications from user interfaces to backend systems. I enjoy integrating modern technologies and AI solutions that provide real value.</p>

          <div className="badges">
            {badges.map(b => <span key={b} className="badge">{b}</span>)}
          </div>

          <div className="cta-row">
            <a className="btn" href="#contact">Get In Touch</a>
            <a className="btn alt" href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>

        <div className="hero-avatar" aria-hidden="true">
          <div className="avatar-inner">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="url(#grad1)"/>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 0.3}} />
                  <stop offset="100%" style={{stopColor: '#6ee7b7', stopOpacity: 0.3}} />
                </linearGradient>
              </defs>
              <path d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-3 0-6 1.5-6 4v1h12v-1c0-2.5-3-4-6-4z" fill="#6ee7b7"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
