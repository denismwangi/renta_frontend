import React, { Component } from 'react'
import UserService from '../../Auth/service/user.service';
import MainContent from './MainContent';

export class BoardLand extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          content: ""
        };
      }
    
      componentDidMount() {
          
        UserService.getLandlordBoard().then(
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
              <div className="sideview">
        <div className="sidebar-title">
        </div>
        <div className="sidebar-menu">
          <div className="sideview-link">
            {/* <i className="fa fa-sort"></i>
            <a href="#">Sort by</a> */}
            {/* <hr/> */}
          </div>
         
          <h2>Properties</h2>
          <hr/>
          <div className="sideview-link">
            <a href="#">All Properties</a>
            </div>
            <div className="sideview-link">
            <a href="#">Sold Properties</a>
            </div>
        
          <h2>Customers</h2>
          <hr/>
          <div className="sideview-link">
            <a href="#">All Customers</a>
          </div>
          
          <div className="sideview-link">
            <a href="#">Kiambu</a>
          </div>
          </div>
  

      </div>
                
          <div className="container">
            <header className="jumbotron">
              <h3>{this.state.content}</h3>
            </header>
          </div>
          </div>
        );
      }
}

export default BoardLand;
