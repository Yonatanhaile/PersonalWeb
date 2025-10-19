import React from 'react'

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I'm Yonatan, a passionate Fullstack Developer who loves bringing ideas to life through code. 
        I work across the entire stack — from creating beautiful, intuitive user interfaces to building 
        robust backend systems. My journey in tech has been driven by curiosity and a desire to create 
        meaningful digital experiences.
      </p>

      <h3>🎓 Education & Background</h3>
      <p>
        Information Science Graduate from Mekelle University. During my studies, I developed a strong 
        foundation in software engineering principles, data structures, and modern web technologies.
      </p>

      <h3>💡 Development Philosophy</h3>
      <p>
        I believe in writing clean, maintainable code that scales. My approach emphasizes:
      </p>
      <ul style={{color: 'var(--muted)', marginLeft: '1.5rem', marginTop: '0.75rem', lineHeight: '1.8'}}>
        <li><strong style={{color: 'var(--accent)'}}>Accessibility First:</strong> Building inclusive applications that everyone can use</li>
        <li><strong style={{color: 'var(--accent)'}}>Performance:</strong> Optimizing for speed and efficiency</li>
        <li><strong style={{color: 'var(--accent)'}}>User Experience:</strong> Creating intuitive and delightful interactions</li>
        <li><strong style={{color: 'var(--accent)'}}>Clean Architecture:</strong> Designing systems that are maintainable and scalable</li>
      </ul>

      <h3>🚀 What Drives Me</h3>
      <p>
        I'm constantly learning and exploring new technologies, particularly in AI integration and 
        modern web frameworks. I enjoy solving complex problems and turning challenges into elegant 
        solutions.
      </p>
    </section>
  )
}

export default About
