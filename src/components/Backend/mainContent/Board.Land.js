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
                <MainContent/>
          {/* <div className="container">
            <header className="jumbotron">
              <h3>{this.state.content}</h3>
            </header>
          </div> */}
          </div>
        );
      }
}

export default BoardLand;
