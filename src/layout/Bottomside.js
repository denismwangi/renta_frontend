import React, { Component } from 'react'

export class Bottomside extends Component {
    render() {
        return (
            <div>
                <div className="bottomview">
        <div className="sidebar-title">
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-link active-menu-link">
            <i className="fa fa-home"></i>
            <a href="#">Dashboard</a>
          </div>
          <h2>Properties</h2>
          <div className="sidebar-link">
            <i className="fa fa-building"></i>
            <a href="#">All Properties</a>

          </div>
          <div className="sidebar-link">
            <i className="fa fa-building-o"></i>
            <a href="#">Sold Properties</a>

          </div>
          <h2>Customers</h2>
          <div className="sidebar-link">
            <i className="fa fa-user"></i>
            <a href="#">All customers</a>

          </div>
          <h2>Transactions</h2>
          <div className="sidebar-link">
            <i className="fa fa-money"></i>
            <a href="#">All Transactions</a>

          </div>
          <div className="sidebar-link">
            <i className="fa fa-money"></i>
            <a href="#">All Transactions</a>

          </div>
        </div>

      </div>
            </div>
        )
    }
}

export default Bottomside
