import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.css';
import logo from '../assets/images/logo.png'




const Header = ({sidebarOpen, openSidebar})=> {
  return (
      <nav className="header-nav">
          <div className="nav-icon" onClick={() =>openSidebar()}>
              <i className="fa fa-bars"></i>
          </div>
          <div className="header-left">
          <div className="header-logo-img">
            <img src={logo} width="70px" />
            <h1>Renta</h1>

          </div>
              {/* <a className="active-link" href="#">Home</a>
              <a href="#">About</a>
              <a  href="#">Contacts</a>
              <a  href="#"><i class="fa fa-user" style={{marginRight:'3px'}}></i>login</a>
              <a  href="#"><i class="fa fa-user" style={{marginRight:'3px'}}></i>Register</a> */}
          </div>
          <div className="header-right">
              <Link to={"/"}  className="active-link">
              Home
              </Link>
              <Link to={"/about"}>
              About
              </Link>
              <Link to={"/contacts"}>
             Contacts
              </Link>
              <Link to={"/login"}>
              <i class="fa fa-user" style={{marginRight:'3px'}}></i>
              login
              </Link>
              <Link to={"/register"}>
              <i class="fa fa-user" style={{marginRight:'3px'}}></i>
              Register
              </Link>
              
              
              
              
          </div>

      </nav>
  )
}

export default Header
