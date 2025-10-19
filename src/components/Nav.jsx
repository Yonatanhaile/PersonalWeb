import React, { useState, useEffect } from 'react'

const Nav = ({ current, onNavigate, dark, setDark }) => {
  const [open, setOpen] = useState(false)
  const items = [
    { id: 'home', label: '🏠 Home', icon: '🏠' },
    { id: 'services', label: '💼 Services', icon: '💼' },
    { id: 'about', label: '👤 About', icon: '👤' },
    { id: 'portfolio', label: '📁 Portfolio', icon: '📁' },
    { id: 'contact', label: '📬 Contact', icon: '📬' },
  ]

  const goto = (id) => { 
    onNavigate(id)
    setOpen(false)
  }

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest('.nav')) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  return (
    <nav className={"nav " + (open ? 'open' : '')}>
      <div className="brand" onClick={() => goto('home')} style={{cursor: 'pointer'}}>
        Yonatan
      </div>
      <div className="controls">
        <button 
          className="icon-btn" 
          onClick={() => setDark(!dark)} 
          aria-label="Toggle theme"
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? '🌙' : '☀️'}
        </button>
        <button 
          className="hamburger" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      <ul className={open ? 'show' : ''}>
        {items.map(i => (
          <li key={i.id}>
            <button
              className={i.id === current ? 'active' : ''}
              onClick={() => goto(i.id)}
              aria-current={i.id === current ? 'page' : undefined}
            >
              <span style={{display: 'inline-block', minWidth: '24px'}}>{i.icon}</span>
              <span style={{marginLeft: '0.5rem'}}>{i.label.split(' ')[1]}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
