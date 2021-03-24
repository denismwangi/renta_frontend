import React, { Component } from 'react'
import './footer.css'

export class Footer extends Component {
    render() {
        return (
            <div>
   <div className="footer">
  <div className="contain">
    <div className="col">
      <h1>Company</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div className="col">
      <h1>Popular Houses</h1>
      <ul>
        <li>Apartments For Sale</li>
        <li>Apartments For Rent</li>
        <li>Houses For Rent</li>
        <li>Offices</li>
     
        
      </ul>
    </div>
    
    <div className="col">
      <h1>Support</h1>
      <ul>
      <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div className="col social">
      <h1>Social</h1>
      <ul>
        <li><i class="fa fa-facebook" width={32} style={{width: 32}}></i> </li>
        <li><i class="fa fa-twitter" width={32} style={{width: 32}}></i> </li>
        <li><i class="fa fa-instagram" width={32} style={{width: 32}}></i> </li>
        <li><i class="fa fa-linkedin" width={32} style={{width: 32}}></i> </li>
      </ul>
    </div>
    <div className="clearfix" />
  </div>
</div>

         


            </div>
        )
    }
}

export default Footer
