import React, { Component } from 'react'
import UserService from '../../Auth/service/user.service';
import Sidenav from '../layout/Sidenav';
import Navbar from '../Navbar/Navbar';

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

          <div className="container">
            <header className="jumbotron">
              <h3>{this.state.content}</h3>
            </header>
            <Sidenav/>
          </div>
          </div>
        );
      }
}

export default BoardUser
