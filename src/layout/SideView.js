import React, { Component, useState } from 'react'

import './sidenav.css'


const SideView = () =>{
   
    return (
      <div className="sideview">
        <div className="sidebar-title">
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-link side-active-link">
            <i className="fa fa-home"></i>
            <a href="#">Dashboard</a>
          </div>
          <div className="sidebar-link">
            <i className="fa fa-building"></i>
            <a href="#">All Properties</a>

          </div>
          <div className="sidebar-link">
            <i className="fa fa-building-o"></i>
            <a href="#">Sold Properties</a>

          </div>
          <div className="sidebar-link">
            <i className="fa fa-user"></i>
            <a href="#">All customers</a>
          </div>
        </div>

      </div>
    )
}


export default SideView