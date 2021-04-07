import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import SideView from '../../../layout/SideView';
import AuthService from '../../Auth/service/auth.service';
import Sidenav from '../layout/Sidenav';
import Navbar from '../Navbar/Navbar';

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }
  componentDidMount() {
      
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div>
        <SideView/>
          <Navbar/>
          
        {(this.state.userReady) ?
  <div className="house" style={{marginLeft:'350px', marginTop:'20px'}}>
                    <div class="wrapper">
                    <i className="fa fa-usd"></i>
                        <div className="house-img">
                          
                        </div>
                        <div classname="h" id="list">
                          <label>firstname</label>
                              <h1>{currentUser.firstname}</h1>
                              <h4>{currentUser.lastname}</h4>
                              <h5>{currentUser.username}</h5>
                              <h5>{currentUser.email}</h5>
                              {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                            
                          </div><hr></hr>
                          <div className="btn-op">
                            <button>Edit Profile</button>

                          </div>
                    
                    </div>
                  </div>: null}
            </div>
        )
    }
}

export default Profile
