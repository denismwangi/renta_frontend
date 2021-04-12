import React, { Component } from 'react'
import Header from '../../../layout/Header';
import UserService from '../../Auth/service/user.service';
import Sidenav from '../layout/Sidenav';
import Navbar from '../Navbar/Navbar';
import account from '../../../assets/images/account.png'
import Main from '../main/Main';

export class BoardUser extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          content: ""
        };
      }
    
      componentDidMount() {
          
        UserService.getUserBoard().then(
          response => {
            this.setState({
              content: response.data
            });
          },
          error => {
            this.setState({
              content:
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString()
            });
          }
        );
      }
    
      render() {
        return (
            <div>
             
          <Navbar/>

            <div className="sideview" style={{background:'#8d4de0'}}>
        <div className="sidebar-title">
        </div>
        <div className="sidebar-menu">
          <div className="sideview-link">
          <div className="header-logo-img">
                      <img src={account} width="70px" />
                      </div>
          </div>
          <div className="sidebar-link">
            <i className="fa fa-money"></i>
            <a href="#">All Transactions</a>
            </div>
            <div className="sidebar-link">
            <i className="fa fa-money"></i>
            <a href="#">Settings</a>
          </div>
            <div className="sidebar-link">
            <i className="fa fa-money"></i>
            <a href="#">profile</a>
          </div>
          
          <div className="sidebar-logout" style={{marginTop:'80px'}}>
            <i className="fa fa-power-off"></i>
            <a href="#">Logout</a>

          </div>
          </div>
  

      </div>
      <div className="container">
                <Main/>
                </div>
      
          </div>
        );
      }
}

export default BoardUser
