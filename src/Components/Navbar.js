import React from 'react'
import "./myCSS/Navbar.css"
import alma from "./Images/alma.png"
import { NavLink } from 'react-router-dom'
import {useState} from 'react';






function Navbar() {

  // to change burger classes
 const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
 const [menu_class, setMenuClass] = useState("menu hidden")
 const [isMenuClicked, setIsMenuClicked] = useState(false)

 //toggle burger menu change
 const updateMenu = () => {
if(!isMenuClicked) {
  setBurgerClass("burger-bar clicked")
  setMenuClass("menu visible")
}
else{
  setBurgerClass("burger-bar unclicked")
  setMenuClass("menu hidden")
}
setIsMenuClicked(!isMenuClicked)
}

  return (
    <div className='mainNavbar'>
      <header className="header">
        <NavLink exact to="/"><img src={alma} alt="almabetter" className="logo" /></NavLink>
        
        <nav className="navbar" id='navbar'>
          
          <ul className="navbar-list m-3">   {/** Adding some bootstrap classes to add margin */}
            
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
          <div className='burger-menu' onClick={updateMenu}>
             <div className={burger_class} ></div>
             <div className={burger_class} ></div>
             <div className={burger_class} ></div>
          </div>
        </nav>
        <div className={menu_class}></div>
      </header></div>
  )
}

export default Navbar