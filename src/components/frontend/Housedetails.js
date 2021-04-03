import React, { Component } from 'react'
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import AllHousesService from './service/House.service';

export class Housedetails extends Component {
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            house: {}

        }
    }

    componentDidMount(){
        AllHousesService.getHouseById(this.state.id).then(res =>{
            this.setState({
                house: res.data
            });
        });
    }
    render() {
        return (
            <div>
                <Header/>
                 <main>
        <div className="main-container">
            <div className="main-title">
                <img/>
                <div className="main-greeting">
                    <div className="listing">
                    <h5>Property Details</h5>
                    </div>
                    
                </div>
            </div>
              <div className="house">
                    <div class="wrapper">
                    <i className="fa fa-usd"></i>
                        <div className="house-img">
                          {/* <img className="h-img" src={bingo} /> */}
                        </div>
                        <div classname="h" id="list">
                              <h1>Daily Report</h1>
                              <h4><i class="fa fa-map-marker" aria-hidden="true"></i>{this.state.house.location}</h4>
                              <h5>{this.state.house.price}</h5>
                              <h5>{this.state.house.roomSize}</h5>
                              <h5>{this.state.house.category}</h5>
                              <p>{this.state.house.description}</p>
                          </div><hr></hr>
                          <div className="btn-op">
                            <button>Buy</button><button  style={{marginLeft:'100px', borderRadius:'30px'}}>read more</button>
                          </div>
                          
                    
                    </div>
                  </div>
            
                  
               
               
                </div>
          
    </main>
    <Footer/>
            </div>
        )
    }
}

export default Housedetails;
