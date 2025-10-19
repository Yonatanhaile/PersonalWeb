import React from 'react'

const Home = () => {
  const badges = ['React', 'Node', 'MongoDB', 'AI', 'HTML', 'CSS']
  return (
    <section className="home hero">
      <div className="hero-grid">
        <div className="hero-inner">
          <h1 className="hero-title">Hi, I'm <span className="accent">Yonatan</span></h1>
          <p className="lead">Fullstack developer — from user interfaces to backend</p>
          <p className="hero-sub">I build responsive, accessible web apps and prototypes using modern tools. I enjoy integrating AI where it provides value.</p>

          <div className="badges">
            {badges.map(b => <span key={b} className="badge">{b}</span>)}
          </div>

          <div className="cta-row">
            <a className="btn" href="#contact">Contact Me</a>
            <a className="btn alt" href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="hero-avatar" aria-hidden="true">
          {/* Replace with a real avatar image by dropping an image into public/ or using an external URL */}
          <div className="avatar-inner">
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#0b1220"/><path d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-3 0-6 1.5-6 4v1h12v-1c0-2.5-3-4-6-4z" fill="#6ee7b7"/></svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
