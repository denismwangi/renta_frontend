import React, { Component } from 'react';
import Sidenav from '../layout/Sidenav';
import Navbar from '../Navbar/Navbar'
import { withRouter } from 'react-router';
import './user.css';
import ReactLoading from 'react-loading';
import AllHousesService from '../../frontend/service/House.service';
import HouuseSkeletons from '../../frontend/HouseSkeletons';
import Skeletons from './Skeletons';


class Chats extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            
        }
     
    }
    
   
    render() {
        return (
            
            <div className="container">
            
            <Navbar/>
            <main>
            <div className="main-container" style={{marginTop:'50px'}}>
            <div className="charts">
              <div className="charts-left" style={{height:'500px'}}>
                  <div className="chart-left-title">
                      <div>
                          <h1>Chats</h1>
                        
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
              
              </div>
              
          </div>
          
          </div>
            </main>

           
          <Sidenav/>
            </div>
            
        );
    }
}

export default Chats;