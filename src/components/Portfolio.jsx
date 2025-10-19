import React, { useState } from 'react'
import Modal from './Modal'

const projects = [
  { title: 'Project A', desc: 'React frontend with API integration', details: 'Built a responsive SPA using React and fetch-based integration to a REST API. Focus on accessibility and performance.' },
  { title: 'Project B', desc: 'Fullstack MERN app', details: 'End-to-end MERN application with authentication, CRUD, and deployment on Render.' },
  { title: 'Project C', desc: 'AI-assisted tooling prototype', details: 'Prototype integrating ML model for content suggestions and automations.' },
]

const Portfolio = () => {
  const [active, setActive] = useState(null)

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>Selected projects — more on my GitHub.</p>
      <div className="projects">
        {projects.map(p => (
          <article key={p.title} className="project" onClick={() => setActive(p)}>
            <div className="project-inner">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
            <div className="project-action">View</div>
          </article>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        <p>{active?.details}</p>
        <p className="muted">More on <a href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer">GitHub</a>.</p>
      </Modal>
    </section>
  )
}

export default Portfolio
