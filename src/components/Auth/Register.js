import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div>
                <div className="main-wrapper">
  <div className="preloader">
    <div className="lds-ripple">
      <div className="lds-pos" />
      <div className="lds-pos" />
    </div>
  </div>
  <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative" style={{background: 'url(assets/images/big/auth-bg.jpg) no-repeat center center'}}>
    <div className="auth-box row text-center">
      <div className="col-lg-7 col-md-5 modal-bg-img" style={{backgroundImage: 'url(assets/images/big/3.jpg)'}}>
      </div>
      <div className="col-lg-5 col-md-7 bg-white">
        <div className="p-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm14R9mTUcIDzFATDIn7heceVGs3UszEWMiA&usqp=CAU" alt="wrapkit" />
          <h2 className="mt-3 text-center">Sign Up for Free</h2>
          <form className="mt-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="your name" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="email address" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control" type="password" placeholder="password" />
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button type="submit" className="btn btn-block btn-dark">Sign Up</button>
              </div>
              <div className="col-lg-12 text-center mt-5">
                Already have an account? <a href="/Login" className="text-danger">Sign In</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}

export default Register
