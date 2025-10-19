import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [page, setPage] = useState('home')
  const [dark, setDark] = useState(() => {
    try {
      const v = localStorage.getItem('dark')
      return v ? JSON.parse(v) : true
    } catch (e) {
      return true
    }
  })

  useEffect(() => {
    try { localStorage.setItem('dark', JSON.stringify(dark)) } catch (e) {}
  }, [dark])

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />
      case 'services':
        return <Services />
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className={"app " + (dark ? 'theme-dark' : 'theme-light')}>
      <Nav current={page} onNavigate={setPage} dark={dark} setDark={setDark} />
      <main className="container">{renderPage()}</main>
      <Footer />
    </div>
  )
}
