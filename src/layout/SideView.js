import React, { Component, useState } from 'react'

import './sidenav.css'


const SideView = () =>{
   
    return (
      <div className="sideview">
        <div className="sidebar-title">
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-link">
            <i className="fa fa-sort"></i>
            <a href="#">Sort by</a>
            <hr/>
          </div>
          <div class="input-sort">
            <input id="sort" placeholder="Sort by"/>
            <label for="sort" class="fa fa-sort input-sort-icon"></label>
          </div>
         
          <h2>Categories</h2>
          <hr/>
          <div className="sideview-link">
            <a href="#"> Apartments for Rent</a>
            </div>
            <div className="sideview-link">
            <a href="#"> Apartments for sale</a>
            </div>
            <div className="sideview-link">
            <a href="#"> Houses for Sale</a>
            </div>
          
            <div className="sideview-link">
            <a href="#"> Bedsitters Rent</a>
          </div>
          <h2>Locations</h2>
          <hr/>
          <div className="sideview-link">
            <a href="#">Nairobi</a>
          </div>
          
          <div className="sideview-link">
            <a href="#">Kiambu</a>
          </div>
          <h2>Price</h2>
          <hr/>
          <div class="input-min-price">
            <input id="min" placeholder="Enter Price"/>
            <label for="min" class="fa fa-sort input-price-min-icon"></label>
          </div>
          </div>
  

      </div>
    )
}


export default SideView