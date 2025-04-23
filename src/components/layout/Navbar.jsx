import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation(); // This hook tells us which page is active

  return (
    <nav className="navbar navbar-expand-lg p-0" style={{ backgroundColor: '#1E1E22' }}>
      <div className="container-fluid p-0">
        {/* Left Side - 50% width with left padding */}
        <div className="w-50 d-flex align-items-center">
          <span className="navbar-brand text-white m-0 ps-8">Ayush Srivastava</span>
        </div>
        
        {/* Right Side - 50% width */}
        <div className="w-50 d-flex justify-content-end pe-4">
          <button 
            className="navbar-toggler navbar-toggler-sm" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar