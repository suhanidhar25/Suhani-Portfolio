import React, { useState } from 'react'
import './MyNavbar.css'

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid px-3 px-lg-5 py-2">
        <a className="navbar-brand fw-bold text-white" href="#">Suhani's Portfolio</a>
        <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#aboutme">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}