import React, { Component } from 'react'
import reg from './register.svg';
import log from './log.svg';
import {Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "./service/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vfirstname = value =>{
  if(value.length <3 || value.length > 20){
    return(
      <div className="alert alert-danger" role="alert">
        The firstname must be 3 and 20

      </div>
    )
  }
}
const vphone = value =>{
  if(value.length <10 || value.length > 20){
    return(
      <div className="alert alert-danger" role="alert">
        The firstname must be 3 and 20

      </div>
    )
  }
}
const vlastname = value =>{
  if(value.length <3 || value.length >20){
    return(
      <div className="alert alert-danger" role="alert">
        The lastname must be 3 and 20

      </div>
    )
  }
}

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export class Register extends Component {

  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phone:"",
      password: "",
      successful: false,
      message: ""
    };
    
  }

  onChangeFirstname(e){
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastname(e){
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.firstname,
        this.state.lastname,
        this.state.username,
        this.state.phone,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: 'thank you for registering',
            successful: true
          })
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  
  
    render() {
        return (
            <div>
                 <div>
  <div class="container-login">
  <div className="forms-container">
    <div className="signin-signup">         
       <form className="sign-in-form"
       onSubmit={this.handleSubmit} >
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fa fa-user" />
          <input type="text" placeholder="firstname"
          required="" 
          value={this.state.firstname}
          onChange={this.onChangeFirstname}
          />
        </div>
        <div className="input-field">
          <i className="fa fa-user" />
          <input type="text"
           placeholder="lastname"
           required=""
           value={this.state.lastname}
          onChange={this.onChangeLastname}
            />
        </div>
        <div className="input-field">
          <i className="fa fa-user" />
          <input type="text"
           placeholder="Username"
           required=""
           value={this.state.username}
          onChange={this.onChangeUsername}
          />
        </div>
        <div className="input-field">
          <i className="fa fa-envelope" />
          <input type="text"
           placeholder="email"
           required="" 
           value={this.state.email}
          onChange={this.onChangeEmail}
          />
        </div>
        <div className="input-field">
          <i className="fa fa-phone" />
          <input type="text" 
          placeholder="phonenumber"
          required=""
          value={this.state.phone}
          onChange={this.onChangePhone}
         />
        </div>
        <div className="input-field">
          <i className="fa fa-lock" />
          <input type="password"
           placeholder="Password"
           value={this.state.password}
          onChange={this.onChangePassword}
          
           />
        </div>
        <input type="submit" name="register" className="btn solid" />
        <Link to={"/login"} style={{textDecoration:'none'}}>
     <p style={{marginLeft:'180px'}}>
      Already have account ? Login</p>
      </Link>
      </form>
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
