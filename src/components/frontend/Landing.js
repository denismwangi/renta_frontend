import React, { Component } from 'react';
import bingo  from './landing.svg';
import './Landing.css';


class Landing extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (
            <div>

                <div className="landing-p" style={{display:'flex'}}>
                    <div className="des">
                    <h2>It's time to amplify your real estate business</h2>
                    <div className="btn-l" style={{display:'flex', gap:'10px'}}>
                            <button style={{fontSize:'20px', color:'#fff'}}><a href="/login" style={{textDecoration:'none', color:'#fff'}}>Login</a></button>
                            <button style={{fontSize:'20px', color:'#fff'}}><a href="/register" style={{textDecoration:'none', color:'#fff'}}>Get Started</a></button>

                            </div>
                         
                </div>
                    
               

                <div className="land-img">
                          <img className="l-img" src={bingo} />
                        
                        </div>
                </div>
                </div>
        
                
   

        );
    }
}



export default Landing;