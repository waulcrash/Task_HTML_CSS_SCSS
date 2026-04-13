import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppRouter } from './shared/config/router'
import './styles/App.css'

const Navigation: React.FC = () => {
  const location = useLocation()
  
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link to="/button-up" className={`navigation__link ${location.pathname === '/button-up' ? 'active' : ''}`}>
          Кнопка Up
        </Link>
        <Link to="/tooltip" className={`navigation__link ${location.pathname === '/tooltip' ? 'active' : ''}`}>
          Tooltip
        </Link>
        <Link to="/grid-flex" className={`navigation__link ${location.pathname === '/grid-flex' ? 'active' : ''}`}>
          Grid vs Flex
        </Link>
        <Link to="/about" className={`navigation__link ${location.pathname === '/about' ? 'active' : ''}`}>
          О нас
        </Link>
      </div>
    </nav>
  )
}

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <main className="app__main">
        <AppRouter />
      </main>
    </div>
  )
}

export default App