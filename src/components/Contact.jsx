import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>If you'd like to work together or just say hi, reach out!</p>

      <ul className="contact-info">
        <li><strong>Email:</strong> <a className="contact-link" href="mailto:yonatanhaile06@gmail.com">yonatanhaile06@gmail.com</a></li>
        <li><strong>Phone:</strong> <span className="contact-link">0914888890</span></li>
        <li><strong>GitHub:</strong> <a className="contact-link" href="https://github.com/Yonatanhaile" target="_blank" rel="noreferrer">github.com/Yonatanhaile</a></li>
      </ul>
    </section>
  )
}

export default Contact
