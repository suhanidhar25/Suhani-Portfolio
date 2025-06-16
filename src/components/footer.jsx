import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 py-md-4">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-12">
            <p className="mb-0 text-light">
              © {new Date().getFullYear()} Suhani Dhar | Built with React & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}