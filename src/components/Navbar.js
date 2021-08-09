import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'gatsby'
import NavLink from './NavLink'
import { GatsbyContext } from '../context/context'
const Navbar = () => {
  return(<nav data-collapse="small" data-animation="default" data-duration="400" role="banner" className="navbar w-nav">
        <nav role="navigation" className="nav-menu w-nav-menu">
           <Link className="nav-link w-nav-link w--current" to="/">Home</Link>
           <Link className="nav-link w-nav-link" to="/about">About</Link>
           <Link className="nav-link w-nav-link" to="/artists">Gallery</Link>
           <Link className="nav-link w-nav-link" to="/contact">Contact</Link>
        </nav>
        <div className="menu-wrapper w-clearfix w-nav-button">
          <div className="menu">MENU</div>
          <div className="menu-icon w-icon-nav-menu"></div>
        </div>
      </nav>
)
  
}



export default Navbar
