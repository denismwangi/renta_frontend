import React, { Component } from 'react'
import './houselist.css'
import bingo from './bingo.jpg';
import property from '../../assets/images/property.jpg';

import AllHousesService from './service/House.service';
import { withRouter } from 'react-router';
import account from '../../assets/images/account.png';

export class HouseList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       houses : []
    }
  }

  componentDidMount(){
    
    AllHousesService.getHouses().then((res)  =>{
        this.setState({houses: res.data});

    });
    
}
viewHouse(id){
  this.props.history.push(`property/details/${id}`);
}
  

  
    render() {
        return (      
      
        
        <div className="main-p-c">
          <div classname="main-listing">
            <div className="main-h-title">
                <img/>
                <div className="main-h-greeting">
                    <div class="input-wrapper">
                      <input id="stuff" placeholder="Type Here To Search...."/>
                      <label for="stuff" class="fa fa-search input-icon"></label>
                    </div>
                    <div className="listing">
                    <h5>All Houses listings..</h5>
                    </div>
                    
                </div>
            </div>
          
            {
              this.state.houses.map(
                  house =>
              <div className="house" >
                    <div class="wrapper">
                    {/* <i className="fa fa-usd"></i> */}
                    <div className="ac-oh">
                          <img src={account} width="60px" />
                          <div className="ac-h-d">
                          <h2>James B</h2>
                          <p>april 4</p>

                          </div>
                         
                      </div> <hr/>
                        <div className="house-img">
                          <img className="h-img" src={property} />
                        
                        </div>
                        <div classname="h" id="list" key ={house.id}>
                              {/* <h1>Daily Report</h1> */}
                              <h4><i class="fa fa-map-marker" aria-hidden="true"></i>{house.location}</h4>
                              <h5>{house.price}</h5>
                              <h5>{house.roomSize}</h5>
                              <h5>{house.category}</h5>
                              <p>{house.description}</p>
                          </div>
                          <div className="btn-op">
                            <button onClick= {() => this.viewHouse(house.id)} style={{   borderRadius:'30px'}}>read more</button>
                          </div>
                          
                    
                    </div>
                  </div>
                   
              )}
              </div>
             
                </div>


            
        )
    }
}

export default withRouter(HouseList)
