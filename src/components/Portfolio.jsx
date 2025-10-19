import React, { useState } from 'react'
import Modal from './Modal'

const projects = [
  { 
    title: '🎨 Modern Web App', 
    desc: 'React SPA with REST API integration', 
    details: 'Built a responsive single-page application using React with modern hooks and state management. Integrated with a RESTful API using fetch for dynamic data. Focused on accessibility (ARIA labels, keyboard navigation) and performance optimization (code splitting, lazy loading). Implemented responsive design patterns for seamless mobile experience.',
    tech: 'React, JavaScript, REST API, CSS3'
  },
  { 
    title: '🚀 MERN Stack Platform', 
    desc: 'Full-stack e-commerce application', 
    details: 'End-to-end MERN stack application featuring user authentication with JWT, CRUD operations, shopping cart functionality, and payment integration. Implemented secure backend with Express.js and MongoDB, including data validation and error handling. Successfully deployed on Render with continuous integration.',
    tech: 'MongoDB, Express.js, React, Node.js'
  },
  { 
    title: '🤖 AI Content Assistant', 
    desc: 'AI-powered content generation tool', 
    details: 'Developed an innovative prototype integrating machine learning models for intelligent content suggestions and workflow automation. Features include natural language processing, context-aware recommendations, and customizable templates. Built with modern JavaScript and integrated with third-party AI APIs.',
    tech: 'Node.js, AI/ML APIs, React, Express'
  },
  { 
    title: '📱 Responsive Portfolio', 
    desc: 'Professional portfolio showcase', 
    details: 'Designed and developed a modern, fully responsive portfolio website showcasing projects and skills. Implements dark/light theme toggle, smooth animations, and optimized performance. Built with accessibility in mind following WCAG guidelines. Features include dynamic content loading and SEO optimization.',
    tech: 'React, CSS3, Responsive Design'
  },
]

const Portfolio = () => {
  const [active, setActive] = useState(null)

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p style={{fontSize: '1.15rem', marginBottom: '2rem'}}>
        Here are some of my recent projects demonstrating my full-stack capabilities. 
        Click on any project to learn more about the technologies and features.
      </p>
      <div className="projects">
        {projects.map(p => (
          <article key={p.title} className="project" onClick={() => setActive(p)}>
            <div className="project-inner">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
            <div className="project-action">View →</div>
          </article>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        <p style={{lineHeight: '1.8', fontSize: '1.05rem'}}>{active?.details}</p>
        <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(110, 231, 183, 0.05)', borderRadius: '8px', borderLeft: '3px solid var(--accent)'}}>
          <strong style={{color: 'var(--accent)'}}>Technologies:</strong>
          <p style={{marginTop: '0.5rem', color: 'var(--muted)'}}>{active?.tech}</p>
        </div>
        <p style={{marginTop: '1.5rem', color: 'var(--muted)'}}>
          Want to see more? Check out my <a href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer" style={{color: 'var(--accent)', fontWeight: 'bold'}}>GitHub profile</a> for additional projects and code samples.
        </p>
      </Modal>
    </section>
  )
}

export default Portfolio
