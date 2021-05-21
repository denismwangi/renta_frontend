import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { Button, Form, FormGroup, Input } from "reactstrap";
 import { Alert } from "react-bootstrap"
 import reg from './log.svg';



import AuthService from './service/auth.service';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      message: "",
      successful: false,
      validForm: true,
      errors: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: '',
        password: ''
      }
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
  
    let errors = this.state.errors;

    switch (name) {
      case 'firstname':
        errors.firstname = 
          value.length < 3
            ? 'firstname must be 3 characters long!'
            : '';
        break;
      case 'lastname':
        errors.lastname = 
          value.length < 3
            ? 'lastname must be 3 characters long!'
            : '';
        break;
      case 'username':
        errors.username = 
          value.length < 5
            ? 'username must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'email is not valid!';
        break;
        case 'phone':
        errors.phone = 
          value.length < 10
            ? 'phone no must be 10 characters long!'
            : '';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })  
  }

  signUp = (e) => {
    e.preventDefault();
    const valid = validateForm(this.state.errors);
    this.setState({validForm: valid});
    if(valid){
      
      AuthService.register(
        this.state.firstname,
        this.state.lastname,
        this.state.username,
        this.state.email,
        this.state.phone,
        this.state.password
      ).then(
        () => {
          this.props.history.push("/login");
          window.location.reload();
        
        },
        error => {
          console.log("Fail! Error = " + error.toString());
          
          this.setState({
            successful: false,
            message: "failed! Please try again"
          });
        }
      );  
    }
  }

  render() {
    // const title = <h2>Register User</h2>;
    const errors = this.state.errors;

    let alert = "";

    if(this.state.message){
      if(this.state.successful){
        alert = (
                  <Alert variant="success">
                    {this.state.message}
                  </Alert>
                );
      }else{
        alert = (
                  <Alert variant="danger" style={{color:'red'}}>
                    {this.state.message}
                  </Alert>
                );
      }
    }

    return ( 
      <div>
        

         {/* <Top/> */}

        {/* <Header/> */}

       <div style={{display:'inline-block', display:'flex'}}>
         <img src={reg} width="400px" style={{marginLeft:'50px'}}/>
      
         <Container fluid className="container-auth" style={{height:'550px', marginTop:'40px', marginRight:'1000px'}}>
        
              <h3>Sign Up</h3>
              
            <Form onSubmit={this.signUp} style={{marginTop:'50px'}}>
              <FormGroup controlId="forFirstname" style={{marginTop:'20px'}}>
                <Input 
               
                className="input-field"
                  type="text" 
                  placeholder="Enter firstname"
                  name="firstname" id="firstname"
                  value={this.state.firstname}
                  autoComplete="firstname"
                  onChange={this.changeHandler}
                />
                {
                  errors.firstname && ( 
                      <Alert variant="danger" style={{color:'red'}}>
                        {errors.firstname}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forLastname">
                <Input
                 className="input-field"
                  type="text" 
                  placeholder="Enter lastname"
                  name="lastname" id="lastname"
                  value={this.state.lastname}
                  autoComplete="lastname"
                  onChange={this.changeHandler}
                />
                {
                  errors.lastname && ( 
                    <Alert variant="danger" style={{color:'red'}}>
                        {errors.firstname}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="forUsername">
                <Input
                 className="input-field"
                  type="text" 
                  placeholder="Enter username"
                  name="username" id="username"
                  value={this.state.username}
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
                {
                  errors.username && ( 
                    <Alert variant="danger" style={{color:'red'}}>
                        {errors.username}
                      </Alert>
                    )
                }
              </FormGroup>

              <FormGroup controlId="formEmail">
                <Input
                className="input-field"
                  type="text" 
                  placeholder="Enter email"
                  name="email" id="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.changeHandler}
                />
                {
                  errors.email && ( 
                    <Alert variant="danger" style={{color:'red'}}>
                        {errors.email}
                      </Alert>
                    )
                }
              </FormGroup>
              <FormGroup controlId="">
                <Input
                className="input-field"
                  type="text" 
                  placeholder="Enter phonenumber"
                  name="phone" id="phone"
                  value={this.state.phone}
                  autoComplete="phone"
                  onChange={this.changeHandler}
                />
                {
                  errors.phone && ( 
                    <Alert variant="danger" style={{color:'red'}}>
                        {errors.phone}
                      </Alert>
                    )
                }
                
              </FormGroup>

              <FormGroup controlId="formPassword">
                <Input
                className="input-field"
                  type="password" 
                  placeholder="Enter password"
                  name="password" id="password"
                  value={this.state.password}
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
                {
                  errors.password && ( 
                    <Alert variant="danger" style={{color:'red'}}>
                        {errors.password}
                      </Alert>
                    )
                }
              </FormGroup>

              <Button className="btn" variant="primary" type="submit" >
                Sign Up
              </Button>
              {
                !this.state.validForm && (
                  <Alert key="validForm" variant="danger" style={{color:'red'}}>
                    Please check the inputs again!
                  </Alert>
                )
              }

              {alert}
            </Form>
            
          
            </Container>
        {/* <div className="footer" style={{marginTop:'100px'}}>
        <Footer />
        </div> */}
     
        </div>
        </div>
      );
  }
}

export default Register
