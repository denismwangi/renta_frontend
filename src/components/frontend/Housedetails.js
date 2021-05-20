import React, { Component } from 'react'
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import MainContent from '../Backend/mainContent/MainContent';

import AllHousesService from './service/House.service';

import MapContainer from "./MapCointainer";
import RightPanel from '../../layout/RightPanel';
import link from  './external-link-alt-solid.svg'

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
               
                
        <div className="main-container">
        <div className="ac-h-d" style={{marginLeft:'300px', marginTop:'80px'}}>
                           <h1>{this.state.house.roomSize} House {this.state.house.category} In {this.state.house.location}</h1>
   
                           </div>
               
                </div>
         <div className="main-c"  style={{ display:'flex'}}>
           <div classname="main-listing">
             <div className="main-h-title">
                 <img/>
             </div>
             
             
               <div className="house-d-1" >
 
                     <div class="wrapper">
                     {/* <i className="fa fa-usd"></i> */}
                     <div className="ac-oh">
                           <img src="" width="60px" />
                           
                           
                       </div> 
                         <div className="house-img">
                         <img className="h-img-d" src={this.state.house.path} />
                         <div>
              <MapContainer/>
              </div>
                         
                         </div>
                              
                           </div>
                        
 
                     
                           
                     
                     </div>
                   
                   </div>
                    
                   <div className="rightpanel"  style={{marginLeft:'90px'}}>
                
                    <div className="panel-3" style={{height:'600px'}}>
                        <div className="feat-p">
                      <hr/>
                        <h4>Asking Price</h4>
                       
                        <h4><i class="fa fa-dollar" aria-hidden="true" style={{marginRight:'5px'}}></i>{this.state.house.price}</h4>
                        <h4><i class="fa fa-map-marker" aria-hidden="true" style={{marginRight:'5px'}}></i>{this.state.house.location}</h4>
                        <h4><i class="fa fa-edit" aria-hidden="true" style={{marginRight:'5px'}}></i>{this.state.house.description}</h4>
                        <hr/>
                        
                        </div>
                        <div className="btn-p" >
                            <button style={{fontSize:'20px', color:'#fff'}}>
                            <i class="fa fa-phone" style={{marginRight:'7px', marginTop:'2px'}}></i>
                                CONTACT AGENT</button>
                          </div>
                          <p>
                          <img src={link}  width="20px" style={{marginRight:'5px', marginTop:'2px'}}/>
                              <a href="/feed" style={{textDecoration:'none'}}>load more houses</a>
                              </p>
                        
                    </div> 
                   
            </div>
          
              </div>
              
              
{/* <div>
<Footer/>
</div> */}
              
            </div>
              
            
        )
    }
}

export default Housedetails;
