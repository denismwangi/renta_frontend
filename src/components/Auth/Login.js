import React, { Component } from 'react'
 import './login.css'
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthService from './service/auth.service';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import reg from './log.svg';

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();
   
    AuthService.login(this.state.username,this.state.password)
      .then(
        () => {
          
          this.props.history.push("/feed");
          window.location.reload();
        },
        error => {
          console.log("Login fail: error = { " + error.toString() + " }");
          this.setState({error: "Please check username/password again"});
        }
    );
  }

  render() {
    return ( 
      
      <div>
        {/* <div>
        <Header/>
        </div> */}
        <div style={{ display:'flex'}} className="landing-p">
         {/* <img src={reg}  className="des"/> */}
      
         <Container fluid className="container-auth" style={{height:'470px', marginTop:'80px', marginRight:'1000px'}}>
        
        <h2 className="h-2">Sign In</h2>
        <h4 className="h-4">Login to your account to continue</h4>
        
         
          <Row style={{marginTop:"0px"}}>
          <Col sm="12" md={{ size: 3, offset: 4 }}>
            <div style={{marginBottom: "0px"}}>
              {/* <img src={avatar} alt="Avatar" className="avatar center" 
                style={{width: "50%", height: "auto"}}/> */}
            </div>
            <Form  onSubmit={this.doLogin} style={{marginTop:'0px'}}>
              <FormGroup style={{marginTop:'80px'}}>
                <label>Username</label>
                <Input autoFocus 
                className="input-field"
                  type="text"
                  name="username" id="username"
                  value={this.state.username}
                  placeholder="Enter Username"
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <FormGroup>
                <label>Password</label>
                <Input type="password" 
                className="input-field"
                  name="password" id="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <Button type="submit" variant="primary" size="lg" block>
                Sign In
              </Button>
              {
                this.state.error && (
                  <Alert color="danger" style={{color:'red'}}>
                    {this.state.error}
                  </Alert>
                )
              }
            </Form>
            <h5 className="h-5">Not yet registered? <a href="/register" style={{color:'#4481eb'}}>Register</a></h5>
            </Col>
          </Row>
        </Container>
        {/* <div className="footer" style={{marginTop:'100px'}}>
       <Footer/>
        </div> */}
      </div>
      </div>);
  }
}

export default Login
