import React from 'react'

function Navbar() {
  return (
    <div><header className="header">
    <img src="alma.png" alt="almabetter" className="logo" />
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a className="navbar-link" href="#">Resume Template</a></li>
        <li><a className="navbar-link" href="#">My Resume</a></li>
        <li><a className="navbar-link" href="#">About Us</a></li>
      </ul>
    </nav>
  </header></div>
  )
}

export default Navbar