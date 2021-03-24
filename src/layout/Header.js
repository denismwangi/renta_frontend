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
              <a className="active-link" href="#">Home</a>
              <a href="#">About</a>
              <a  href="#">Contacts</a>
              <a  href="#"><i class="fa fa-user" style={{marginRight:'3px'}}></i>login</a>
              <a  href="#"><i class="fa fa-user" style={{marginRight:'3px'}}></i>Register</a>
          </div>

      </nav>
  )
}

export default Header
