import React, { Component } from 'react'
 import './login.css'
 import {Link} from 'react-router-dom'
 import log from './log.svg';
 import reg from './register.svg'
import Header from '../../layout/Header';

export class Login extends Component {
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
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fa fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" name="Login" className="btn solid" />
      </form>
     <Link to={"/register"} style={{textDecoration:'none'}}>
     <p style={{marginLeft:'180px'}}>
      New here ? Register</p>
      </Link>
      <p style={{marginTop:'20px', color:'pink', marginLeft:'180px'}}>
        fogort password?
      </p>
    </div>
    
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <img src={log} className="image" alt />
    </div>
     
    </div>
  </div>
</div>
</div>


        )
    }
}

export default Login
