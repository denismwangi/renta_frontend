import React, { Component, useState } from 'react'
import './side.css'


const Sidenav = ({sidebarOpen,closeSidebar }) =>{
   
    return (
      <div className={sidebarOpen ?  "sidebar-responsive" : ""} id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-image">
            <img/>
            <h1>Renta</h1>

          </div>
          <i className="fa fa-times"
          id="sidebar-icon"
          onClick={() =>closeSidebar()}>
          </i>
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
          <div className="sidebar-logout">
            <i className="fa fa-power-off"></i>
            <a href="#">Logout</a>

          </div>
        </div>

      </div>
    )
}


export default Sidenav
