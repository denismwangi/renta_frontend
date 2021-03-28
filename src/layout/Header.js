import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.css';
import logo from '../assets/images/logo.png'
import MainContent from '../components/Backend/mainContent/MainContent';
import { render } from '@testing-library/react';
import AuthService from '../components/Auth/service/auth.service';


class Header extends Component {
    constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
  
      this.state = {
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined,
      };
    }
  
    componentDidMount() {
        
      const user = AuthService.getCurrentUser();
  
      if (user) {
        this.setState({
          currentUser: user,
          showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
          showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        });
      }
    }
  
    logOut() {
      AuthService.logout();
    }
  
    render() {
      const { currentUser, showLandlordBoard, showAdminBoard } = this.state;
  return (
      <nav className="header-nav">
          {/* <div className="nav-icon" onClick={() =>openSidebar()}> */}
          <div className="nav-icon">
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
             
              {showLandlordBoard && (
              <Link to={"/landlord"}>

                  </Link>
              )}
              {showAdminBoard && (
                  <Link to={"/Admin"}>
                  Admin
                  </Link>
              )}

                {currentUser ? (
                    <div header-right>
                     <Link to={"/profile"} style={{textDecoration:'none', color:'#a5aaad', marginRight:'3px'}} >
                     {currentUser.firstname}
                   </Link>
                   <a href="/" onClick={this.logOut} style={{textDecoration:'none', color:'red', marginLeft:'6px'}}>Logout</a>
                   
                 </div>
                ): (
                    <div header-right >
                    <Link to={"/login"} style={{textDecoration:'none', color:'#a5aaad', marginRight:'3px'}}>
                    <i class="fa fa-user" style={{marginRight:'6px'}}></i>
                    login
                    </Link>
                    <Link to={"/register"} style={{textDecoration:'none', color:'#a5aaad', marginLeft:'13px'}}>
                    <i class="fa fa-user" style={{marginRight:'6px'}}></i>
                    Register
                    </Link>
                     </div>
                )}

          </div>

      </nav>
  )
}
}
export default Header
