import React from 'react'

const Services = () => {
  const skills = [
    '⚛️ React.js',
    '🟢 Node.js',
    '⚡ Express.js',
    '🍃 MongoDB',
    '📜 JavaScript (ES6+)',
    '🎨 HTML5 & CSS3',
    '🔌 REST APIs',
    '🐙 Git & GitHub',
    '🧩 Mongoose ODM',
    '📱 Responsive Design',
    '🚀 Deployment (Render, Vercel)',
    '🤖 AI Engineering',
    '📋 EJS Templates',
    '♿ Web Accessibility',
    '⚙️ Performance Optimization',
  ]

  return (
    <section className="services">
      <h2>Services & Skills</h2>
      <p style={{fontSize: '1.15rem', marginBottom: '2rem'}}>
        I offer full-stack development services, from concept to deployment. 
        Whether you need a sleek frontend, a robust backend, or a complete solution — I've got you covered.
      </p>
      
      <h3>🛠️ Technical Expertise</h3>
      <ul className="skills-grid">
        {skills.map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div style={{marginTop: '2.5rem'}}>
        <h3>💼 What I Offer</h3>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)'}}>
            <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Frontend Development</strong>
            <p style={{marginTop: '0.5rem', fontSize: '1rem'}}>Building responsive, performant user interfaces with React and modern CSS</p>
          </div>
          <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)'}}>
            <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Backend Development</strong>
            <p style={{marginTop: '0.5rem', fontSize: '1rem'}}>Creating scalable APIs and server-side solutions with Node.js and Express</p>
          </div>
          <div style={{padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)'}}>
            <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Full-Stack Projects</strong>
            <p style={{marginTop: '0.5rem', fontSize: '1rem'}}>End-to-end web applications with modern tech stacks (MERN)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
