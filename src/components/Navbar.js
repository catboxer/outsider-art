import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'gatsby'
import { GatsbyContext } from '../context/context'
const Navbar = () => {
  return(
  <nav className="navbar w-nav">
        <nav role="navigation" className="nav-menu w-nav-menu links-container show-container">
           <Link className="nav-link w-nav-link" to="/" activeClassName="w--current">Home</Link>
           <Link className="nav-link w-nav-link" to="/about" activeClassName="w--current">About</Link>
           <Link className="nav-link w-nav-link" to="/submission" activeClassName="w--current">Submission</Link>
           <Link className="nav-link w-nav-link" to="/contact" activeClassName="w--current">Contact</Link>
        </nav>
        <div className="menu-wrapper w-clearfix w-nav-button ">
          <div className="menu">MENU</div>
          <div className="menu-icon w-icon-nav-menu"></div>
        </div>
      </nav>
)
  
}



export default Navbar
