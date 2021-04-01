import React, { Component } from 'react'
import './houselist.css'
import bingo from './bingo.jpg';
import RightSide from '../../layout/Rightside.view';
import AllHousesService from './service/House.service';
import { withRouter } from 'react-router';

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
  this.props.history.push(`/details/${id}`);
}
  

  
    render() {
        return (      
      
         <main>
        <div className="main-container">
            <div className="main-title">
                <img/>
                <div className="main-greeting">
                    <div class="input-wrapper">
                      <input id="stuff" placeholder=""/>
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
                    <i className="fa fa-usd"></i>
                        <div className="house-img">
                          <img className="h-img" src={house.imgurl} />
                        </div>
                        <div classname="h" id="list" key ={house.id}>
                              <h1>Daily Report</h1>
                              <h4><i class="fa fa-map-marker" aria-hidden="true"></i>{house.location}</h4>
                              <h5>{house.price}</h5>
                              <h5>{house.roomSize}</h5>
                              <h5>{house.category}</h5>
                              <p>{house.description}</p>
                          </div><hr></hr>
                          <div className="btn-op">
                            <button>Buy</button><button onClick= {() => this.viewHouse(house.id)} style={{marginLeft:'100px', borderRadius:'30px'}}>read more</button>
                          </div>
                          
                    
                    </div>
                  </div>
              )}
                  
               
               
                </div>

                

  
               

                
                
                
                {/* <div className="house-left">
                  <div className="house-left-title">
                    <div className="box house-img">
                      <img src={bingo}/>

                    </div>
                      <div classname="box listing">
                          <h1>Daily Report</h1>
                          <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Karen</h4>
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
                      <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Karen</h4>
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
                      <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Karen</h4>
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
                      <h4><i class="fa fa-map-marker" aria-hidden="true"></i> Karen</h4>
                          <h5>Ksh 1.2M</h5>
                          <p>added 2 mins ago</p>
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
                </div>
                </div> */}
             
                
            
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
          
    </main>


            
        )
    }
}

export default withRouter(HouseList)
