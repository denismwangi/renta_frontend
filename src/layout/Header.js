import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import '../assets/css/bootstrap.min.css';
// import '../assets/css/font-awesome.min.css';
// import '../assets/style.css';
// import '../assets/css/font-awesome.min.css';
// //import '../assets/css/elegant-icons.css';
// //import '../assets/css/jquery-ui.min.css';
// import '../assets/css/nice-select.css';
// //import '../assets/css/owl.carousel.min.css';
// import '../assets/css/magnific-popup.css';
import './header.css';




const Header = ({sidebarOpen, openSidebar})=> {
  return (
      <nav className="navbar">
          <div className="nav-icon" onClick={() =>openSidebar()}>
              <i className="fa fa-bars"></i>
          </div>
          <div className="navbar-left">
              <a className="active-link" href="#">Home</a>
              <a href="#">About</a>
              <a  href="#">Contacts</a>
          </div>
          <div className="navbar-right">
              <a href="#">
                  <i className="fa fa-search"></i>
              </a>
          </div>

      </nav>
  )
}

export default Header
