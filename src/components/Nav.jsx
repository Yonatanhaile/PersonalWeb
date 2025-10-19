import React, { useState } from 'react'

const Nav = ({ current, onNavigate, dark, setDark }) => {
  const [open, setOpen] = useState(false)
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  const goto = (id) => { onNavigate(id); setOpen(false) }

  return (
    <nav className={"nav " + (open ? 'open' : '')}>
      <div className="brand">Yonatan</div>
      <div className="controls">
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? '🌙' : '☀️'}</button>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
      </div>
      <ul className={open ? 'show' : ''}>
        {items.map(i => (
          <li key={i.id}>
            <button
              className={i.id === current ? 'active' : ''}
              onClick={() => goto(i.id)}
            >
              {i.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
