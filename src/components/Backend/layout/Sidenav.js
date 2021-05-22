import React, { Component, useState } from 'react'
import logo from '../../../assets/images/logo.png'
import './side.css'
import { NavLink } from 'react-router-dom';


const Sidenav = ({sidebarOpen,closeSidebar }) =>{
   
    return (
      <div className={sidebarOpen ?  "sidebar-responsive" : ""} id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-img">
            <img src={logo} width="70px" />
            <h1>Renta</h1>

          </div>
          <i className="fa fa-times"
          id="sidebar-icon"
          onClick={() =>closeSidebar()}>
          </i>
        </div>
        <div className="sidebar-menu">
        <div className="sidebar-link">
            <a><NavLink activeClassName="active" to='/admin/dashboard'>
              <i className="fa fa-home" style={{marginRight:'7px'}}></i>
              Dashboard
              </NavLink>
              </a>
      </div>

          <h2>Users</h2>
          <div className="sidebar-link">
          <a><NavLink activeClassName="active" to='/admin/users'>
              <i className="fa fa-users" style={{marginRight:'7px'}}></i>
              Users
              </NavLink>
              </a>
          </div>
          <div className="sidebar-link">
          <a><NavLink activeClassName="active" to='/admin/chat'>
              <i className="fa fa-comments" style={{marginRight:'7px'}}></i>
              Chats
              </NavLink>
              </a>

          </div>
          <h2>Properties</h2>
          <div className="sidebar-link">
          <a>
            <NavLink activeClassName="active" to='/admin/properties'>
              <i className="fa fa-building-o" style={{marginRight:'7px'}}></i>
            All Properties
              </NavLink>
              </a>

          </div>

          <div className="sidebar-link">
          <a><NavLink activeClassName="active" to='/admin/sold'>
              <i className="fa fa-money" style={{marginRight:'7px'}}></i>
              Sold Properties
              </NavLink>
              </a>


          </div>
          <h2>Sales</h2>
          <div className="sidebar-link">
          <a><NavLink activeClassName="active" to='/admin/sales'>
              <i className="fa fa-money" style={{marginRight:'7px'}}></i>
              All Sales
              </NavLink>
              </a>

          </div>
          <div className="sidebar-link">
          <a><NavLink activeClassName="active" to='/admin/pending'>
              <i className="fa fa-money" style={{marginRight:'7px'}}></i>
              Pending Sales
              </NavLink>
              </a>
          </div>
          <div className="sidebar-link">
          <a><NavLink activeClassName="active" to='/admin/cancelled'>
              <i className="fa fa-money" style={{marginRight:'7px'}}></i>
             Cancelled Sales
              </NavLink>
              </a>
            
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
