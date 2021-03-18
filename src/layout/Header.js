import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/elegant-icons.css';
//import '../assets/css/jquery-ui.min.css';
import '../assets/css/nice-select.css';
//import '../assets/css/owl.carousel.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slicknav.min.css';
//import '.elegant-icons-sass';
import '../assets/extra-libs/c3/c3.min.css';
 import '../assets/libs/chartist/dist/chartist.min.css';
import '../assets/extra-libs/jvector/jquery-jvectormap-2.0.2.css';
//import '../assets/dist/css/style.min.css';



export class Header extends Component {
    render() {
        return (
            <div>
        <div>
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="canvas-close">
      <span className="icon_close" />
    </div>
    <div className="logo">
      <a href="./index.html">
        <img src="img/logo.png" alt />
      </a>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="om-widget">
      <ul>
        <li><i className="icon_mail_alt" /> Aler.support@gmail.com</li>
        <li><i className="fa fa-mobile-phone" /> 125-711-811 <span>125-668-886</span></li>
      </ul>
      <a href="#" className="hw-btn">Submit property</a>
    </div>
    <div className="om-social">
      <a href="#"><i className="fa fa-facebook" /></a>
      <a href="#"><i className="fa fa-twitter" /></a>
      <a href="#"><i className="fa fa-youtube-play" /></a>
      <a href="#"><i className="fa fa-instagram" /></a>
      <a href="#"><i className="fa fa-pinterest-p" /></a>
    </div>
  </div>
</div>



           <header className="header-section">
  
  <div className="hs-nav">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <nav className="nav-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
                <li><Link to="#">Agents</Link></li>
               <li><Link to="#">About</Link></li>
               <li> <Link to="#">Contact</Link></li>
               <li><Link to="/Login">Login</Link></li>
               <li><Link to="/Register">Register</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="hn-social">
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-youtube-play" /></a>
            <a href="#"><i className="fa fa-instagram" /></a>
            <a href="#"><i className="fa fa-pinterest-p" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

            </div>
        )
    }
}

export default Header
