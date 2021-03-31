import React, { Component } from 'react'
import Chart from '../components/Backend/charts/Chart'

export class RightSide extends Component {
    render() {
        return (
            <div>
                 <div className="charts">
              <div className="charts-left">
                  <div className="chart-left-title">
                      <div>
                          <h1>Daily Report</h1>
                          <p>cuplino , Califonia USA</p>
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
               <Chart/>
              </div>
               <div className="chart-right">
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
               </div>
          </div>
            </div>
        )
    }
}

export default RightSide
