import React from 'react'

const Services = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Git & GitHub',
    'RESTful APIs',
    'EJS Templates',
    'Deployment (Render, Vercel)',
    'AI Engineering',
  ]

  return (
    <section className="services">
      <h2>Services & Skills</h2>
      <p>From UI to backend — I can take a project end-to-end.</p>
      <ul className="skills-grid">
        {skills.map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}

export default Services
