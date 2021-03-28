import React, { Component } from 'react'
 import './login.css'
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthService from './service/auth.service';
import Footer from '../../layout/Footer';

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
          this.props.history.push("/profile");
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
        
        <Container fluid fluid className="container-auth" style={{height:'400px'}}>
          <h3>Sign in</h3>
          <Row style={{marginTop:"0px"}}>
          <Col sm="12" md={{ size: 3, offset: 4 }}>
            <div style={{marginBottom: "0px"}}>
              {/* <img src={avatar} alt="Avatar" className="avatar center" 
                style={{width: "50%", height: "auto"}}/> */}
            </div>
            <Form  onSubmit={this.doLogin} style={{marginTop:'0px'}}>
              <FormGroup style={{marginTop:'80px'}}>
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
            </Col>
          </Row>
        </Container>
        <div className="footer" style={{marginTop:'100px'}}>
       <Footer/>
        </div>
      </div>);
  }
}

export default Login
