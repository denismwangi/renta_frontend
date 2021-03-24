import React, { Component } from 'react'
import AllHousesService from './service/House.service';
import SearchSection from '../../components/frontend/SearchSection';
import WhyUs from '../../components/frontend/WhyUs';
import './houselist.css'
import bingo from './bingo.jpg';


export class HouseList extends Component {

  
    render() {
        return (      
      
         <main>
        <div className="main-container">
            <div className="main-title">
                <img/>
                <div className="main-greeting">
                    <div class="input-wrapper">
                      <input id="stuff" placeholder="Search ........."/>
                      <label for="stuff" class="fa fa-search input-icon"></label>
                    </div>
                    <div className="listing">
                    <h5>All listings</h5>
                    </div>
                    
                </div>
                
            </div>
              <div className="house">
                <div className="house-left">
                  <div className="house-left-title">
                    <div className="house-img">
                      <img src={bingo}/>

                    </div>
                      <div>
                          <h1>Daily Report</h1>
                          <h4>cuplino , Califonia USA</h4>
                          <h5>Ksh 1.2M</h5>
                          <p>added 2 mins ago</p>
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
                </div>
                </div>
                <div className="house">
                <div className="house-left">
                  <div className="house-left-title">
                  <div className="house-img">
                      <img src={bingo}/>

                    </div>
                      <div>
                      <h1>Daily Report</h1>
                          <h4>cuplino , Califonia USA</h4>
                          <h5>Ksh 1.2M</h5>
                          <p>added 2 mins ago</p>
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
                </div>
                </div>
             
                
            
               {/* <div className="chart-right">
                   <div className="chart-right-title">
                       <div>
                           <h1>stats reports</h1>
                           <p>cuplino , Califonia USA</p>
                       </div>
                       <i className="fa fa-usd"></i>
                   </div>
                <div className="charts-right-cards">
                    <div className="card1">
                        <h1>Income</h1>
                        <p>$876</p>
                    </div>
                    <div className="card2">
                        <h1>Sales</h1>
                        <p>$87698</p>
                    </div>
                    <div className="card3">
                        <h1>Users</h1>
                        <p>900</p>
                    </div>
                    <div className="card4">
                        <h1>Order</h1>
                        <p>876</p>
                    </div> 
                </div> 
        </div>*/}
          </div>
     
    </main>


            
        )
    }
}

export default HouseList
