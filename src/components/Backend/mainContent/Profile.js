import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import AuthService from '../../Auth/service/auth.service';
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
          <Navbar/>
  {(this.state.userReady) ?
  <div className="col-lg-8 col-xlg-9 col-md-12">
  
    <h3 classname="text-center" style={{marginTop:'50px'}}>Admin details</h3>
    <div className="card" style={{backgroundColor: '#F4F4F4'}}>
      <div className="card-body">
        <form className="form-horizontal form-material">
          <div className="form-group mb-4">
            <label className="col-md-12 p-0">First name</label>
            <div className="col-md-12 border-bottom p-0">
              <h3>{currentUser.firstname}</h3>
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="col-md-12 p-0">username</label>
            <div className="col-md-12 border-bottom p-0">
              <h3>{currentUser.username}</h3>
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="col-md-12 p-0">email</label>
            <div className="col-md-12 border-bottom p-0">
              <h3>{currentUser.email}</h3>
            </div>
          </div>
          <div className="form-group mb-4">
            <label className="col-md-12 p-0">Admin Authorities</label>
            <div className="col-md-12 border-bottom p-0">
              <h3>  {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>: null}
            </div>
        )
    }
}

export default Profile
