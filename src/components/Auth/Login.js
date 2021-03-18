import React, { Component } from 'react'

export class Login extends Component {
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
    <div className="auth-box row">
      <div className="col-lg-7 col-md-5 modal-bg-img" style={{backgroundImage: 'url(assets/images/big/3.jpg)'}}>
      </div>
      <div className="col-lg-5 col-md-7 bg-white">
        <div className="p-3">
          <div className="text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm14R9mTUcIDzFATDIn7heceVGs3UszEWMiA&usqp=CAU" alt="wrapkit" />
          </div>
          <h2 className="mt-3 text-center">Sign In</h2>
          <form className="mt-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="text-dark" htmlFor="uname">Username</label>
                  <input className="form-control" id="uname" type="text" placeholder="enter your username" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="text-dark" htmlFor="pwd">Password</label>
                  <input className="form-control" id="pwd" type="password" placeholder="enter your password" />
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button type="submit" className="btn btn-block btn-dark">Sign In</button>
              </div>
              <div className="col-lg-12 text-center mt-5">
                Don't have an account? <a href="/Register" className="text-danger">Sign Up</a>
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

export default Login
