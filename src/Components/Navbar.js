import React from 'react'
import "./myCSS/Navbar.css"
import alma from "./Images/alma.png"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='mainNavbar'>
      <header className="header">
        <NavLink exact to="/"><img src={alma} alt="almabetter" className="logo" /></NavLink>
        
        <nav className="navbar">
          <ul className="navbar-list">
            <li><NavLink exact style={({ isActive }) => ({
              color: isActive ? 'rgb(20, 122, 218)' : 'rgb(112, 111, 111)'
            })} className={"navbar-link"} to="/" >ResumeTemplate</NavLink></li>
            
            <li><NavLink exact style={({ isActive }) => ({
              color: isActive ? 'rgb(20, 122, 218)' : 'rgb(112, 111, 111)'
            })} className={"navbar-link"} to="/my_resume" >My Resume</NavLink></li>
            
            <li><NavLink exact style={({ isActive }) => ({
              color: isActive ? 'rgb(20, 122, 218)' : 'rgb(112, 111, 111)'
            })} className={"navbar-link"} to="/about_us" >About Us</NavLink></li>
          </ul>
        </nav>
      </header></div>
  )
}

export default Navbar