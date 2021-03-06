import './navbar.css'
import avatar from '../../../assets/images/avatar.jpg'
import React, { Component } from 'react';
import UserService from '../../Auth/service/user.service';
import AuthService from '../../Auth/service/auth.service';
import { Link } from 'react-router-dom';
import Houses from '../views/Houses';


//const Navbar = ({sidebarOpen, openSidebar})=> {
class Navbar extends Component {
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
            showModeratorBoard: user.roles.includes("ROLE_LANDLORD"),
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
        <nav className="navbar">
            {/* <div className="nav-icon" onClick={() =>openSidebar()}> */}
            <div className="nav-icon">
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar-left">
            <i className="fa fa-bell" style={{marginLeft:'10px'}}> Notifications</i>
            <i className="fa fa-cog" style={{marginLeft:'40px'}}> Settings</i>
        
            </div>
          
           
            <div>
                {/* <a>
                <Link to={"/"} >
                    Home
                </Link>
                </a> */}
                {showAdminBoard && (
                    <a>
                    <Link to={"/land"}>Landlord</Link>
                    </a>
                )}
                {showLandlordBoard && (
                    <a>
                    <Link to={"/Admin"}>Admin</Link>
                    </a>
                )}
                
                
               
               
                {/* <p>Signed in as: <a href="/profile">{currentUser.username}</a></p> */}
                
            </div>
            <div className="navbar-right">
            {currentUser ? (
                    <div navbar-right>
                        <b>Hello</b>
                    <Link to={"/profile"} style={{textDecoration:'none' , fontSize:'20px', marginLeft:'10px'}}>
                   <b>  {currentUser.firstname} </b>
                    </Link>
                   

                     {/* <a href="/login" onClick={this.logout}>logout</a> */}
                </div>
                ):(
                    <a>test</a>
                )}
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <img src={avatar} width="30" />
                </a>
            </div>

        </nav>
    );
    }
    
}
export default Navbar;