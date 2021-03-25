import React, { Component } from 'react'
import reg from './register.svg';
import log from './log.svg';
import {Link } from 'react-router-dom'

export class Register extends Component {
    render() {
        return (
            <div>
                 <div>
  <div class="container-login">
  <div className="forms-container">
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fa fa-user" />
          <input type="text" placeholder="firstname" />
        </div>
        <div className="input-field">
          <i className="fa fa-user" />
          <input type="text" placeholder="lastname" />
        </div>
        <div className="input-field">
          <i className="fa fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fa fa-envelope" />
          <input type="text" placeholder="email" />
        </div>
        <div className="input-field">
          <i className="fa fa-phone" />
          <input type="text" placeholder="phonenumber" />
        </div>
        <div className="input-field">
          <i className="fa fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" defaultValue="Login" className="btn solid" />
      </form>
      <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" className="btn" name="Sign up" />
        
      </form>
      <Link to={"/login"} style={{textDecoration:'none'}}>
     <p style={{marginLeft:'180px'}}>
      Already have account ? Login</p>
      </Link>
      
    </div>
    
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
      <img src={log} className="image" alt />
      </div>
    
    </div>
    <div className="panel right-panel">
    </div>
  </div>
</div>
</div>


            </div>
        )
    }
}

export default Register
