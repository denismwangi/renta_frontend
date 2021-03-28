import React, { Component } from 'react'
import UserService from '../../Auth/service/user.service';
import MainContent from './MainContent';

export class BoardAdmin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          content: ""
        };
      }
    
      componentDidMount() {
          
        UserService.getAdminBoard().then(
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
        <MainContent/>
          
    
    
        );
      
      }
}

export default BoardAdmin
