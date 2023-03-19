import React from 'react'
import "../assets/allCSS/componentCSS/Navbar.css"
import alma from "../assets/Images/alma.png"
import { NavLink } from 'react-router-dom'
import {useState} from 'react';



function Navbar() {
  const[activeState,setActiveState] = useState(false);
  // we use "useState" to toggle between two classes
  let activeStateToggler = () => setActiveState(!activeState);
  // function for toggling
  return (
    <header className="header">

      <nav className="navbar" id='navbar'>

        <NavLink to="/"><img src={alma} alt="almabetter" className="logo" /></NavLink>

        <i className="bi bi-list" onClick={activeStateToggler}></i> 

        <ul className={activeState ? "navbar-list m-3 active" : "navbar-list m-3"}>   {/** Adding some bootstrap classes to add margin */}
          {/* the above terenary operator is for toggling between classes */}
          <li><NavLink style={({ isActive }) => ({
            color: isActive ? 'rgb(20, 122, 218)' : 'rgb(112, 111, 111)'
          })} className={"navbar-link"} to="/" >ResumeTemplate</NavLink></li>

          <li><NavLink style={({ isActive }) => ({
            color: isActive ? 'rgb(20, 122, 218)' : 'rgb(112, 111, 111)'
          })} className={"navbar-link"} to="/my_resume" >My Resume</NavLink></li>

          <li><NavLink style={({ isActive }) => ({
            color: isActive ? 'rgb(20, 122, 218)' : 'rgb(112, 111, 111)'
          })} className={"navbar-link"} to="/about_us" >About Us</NavLink></li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar