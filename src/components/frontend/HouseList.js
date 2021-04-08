import React, { Component } from 'react'
import './houselist.css'
import bingo from './bingo.jpg';
import property from '../../assets/images/property.jpg';

import AllHousesService from './service/House.service';
import { withRouter } from 'react-router';
import account from '../../assets/images/account.png';
import Search from './Search'



export class HouseList extends Component {

   
  

  constructor(props) {
    super(props)
  
    this.state = {
       houses : [],
       searchTerm :''
      
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
      const { searchTerm}= this.state;
      // const message = "Oops Not Found!";
      // const filteredHouses = houses.filter(housesp =>(
      //   housesp.House.toLowerCase().includes(searchTerm.toLowerCase())
      // ))
        return (      
      
        
        <div className="main-p-c">
          <div classname="main-listing">
            <div className="main-h-title">
                <img/>
                <div className="main-h-greeting">
                  <Search handleSearch={(e) => this.setState({searchTerm:e.target.value})}/>
                    {/* <div class="op-wrapper">
                 
                    <div className="btn-op">
                            <button>Buy</button>
                            <button>Hire</button>
                            <button>Sell</button>

                          </div>
                    </div> */}
                    <div className="listing">
                    <h5>All Houses listings..</h5>
                    </div>
                    
                </div>
            </div>
          
            {
              this.state.houses.filter((val)=>{
                if(searchTerm == ""){
                  return "notfound"
                
                }else if(val.location.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val

                }
                else if(val.price.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val

                }
                else if(val.roomSize.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val

                }
                else if(val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val

                }
                // else{
                //   return message;

                // }
              }).map(
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
