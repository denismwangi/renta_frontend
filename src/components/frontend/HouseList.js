import React, { Component, useState } from 'react'
import './houselist.css'
import bingo from './bingo.jpg';
import property from '../../assets/images/property.jpg';
import ReactLoading from 'react-loading';
import AllHousesService from './service/House.service';
import { withRouter } from 'react-router';
import account from '../../assets/images/account.png';
import Search from './Search'
import SideView from '../../layout/SideView';
import HouseSkeletons from './HouseSkeletons';
import BuyModal from './BuyModal';
import link from  './external-link-alt-solid.svg'
import star from './star-regular.svg';
import share from './telegram-plane-brands.svg';



export class HouseList extends Component {

   
 

  constructor(props) {
    super(props)
  
    this.state = {
       houses : [],
       searchTerm :'',
       isLoading: true,
       location: '',
       category: '',
       price:'',
       roomSize:'',
       description:'',
       path:'',
       show: false
      
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    
  }
  showModal = () =>{
    this.setState({show:true});
  };
  hideModal = () => {
    this.setState({show:false});
  };


  componentDidMount(){
    
    AllHousesService.getHouses().then((res)  =>{
      this.timerHandle = setTimeout(() => this.setState({houses: res.data, isLoading:false}), 4000);

    });
    
}
componentWillUnmount(){
  if (this.timerHandle) {
    clearTimeout(this.timerHandle);
    this.timerHandle = 0;
  }
}
// componentDidMount(){
//   AllHousesService.createHouse(
//     this.state.category,
//     this.state.roomSize,
//     this.state.price,
//     this.state.description,
//     this.state.location,
//     this.state.image

//   ).then(res) ={

//   }
// }
viewHouse(id){
  this.props.history.push(`property/details/${id}`);
}
  
handleSearch = (e) =>{
  this.setState({searchTerm:e.target.value})
}

  
    render() {
      const { searchTerm}= this.state;
    
      
      // const message = "Oops Not Found!";
      // const filteredHouses = houses.filter(housesp =>(
      //   housesp.House.toLowerCase().includes(searchTerm.toLowerCase())
      // ))
        return ( 
          <div>   
         
          <SideView handleChange={this.handleSearch}/>
         
        <div className="main-p-c">
          <div classname="main-listing">
            <div className="main-h-title">
                <img/>
                <div className="main-h-greeting">
                  
                    <div class="op-wrapper">
                    {/* <Search handleChange={this.handleSearch}/> */}
                  
                    <BuyModal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </BuyModal>
        {/* <button type="button" onClick={this.showModal}>
          Open
        </button> */}
                    <div className="btn-sb">
                    <button type="button" onClick={this.showModal}><i class="fa fa-cart-plus" 
                            aria-hidden="true" style={{marginRight:'7px'}}></i>
          Sell
        </button>
                            <button><i class="fa fa-cart-plus" 
                            aria-hidden="true" style={{marginRight:'7px'}}></i>Buy</button>

                          </div>
                    </div>
                    {/* <div className="listing">
                    <h5>All Houses listings..</h5>
                    </div> */}
                    
                </div>
            </div>
            
            {
              
              // this.state.isLoading ? <ReactLoading type={"spinningBubbles"} 
              // color={"#00E676"} 
              // height={'35%'} 
              // width={'35%'}
              // // delay={'20'}
              // className="loading"
              // />
              this.state.isLoading ? [1,2,3,4,5,6,7,8,9].map((n) => <HouseSkeletons  />)
            :
            
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
                          
                      </div> 
                        <div className="house-img">
                          <img className="h-img" src={house.path} />
                        
                        </div>
                        <div classname="h" id="list" key ={house.id}>
                              {/* <h1>Daily Report</h1> */}
                              <h4><i class="fa fa-map-marker" aria-hidden="true" style={{marginRight:'5px'}}></i>{house.location}</h4>
                              <h5><i class="fa fa-dollar" aria-hidden="true" style={{marginRight:'5px'}}></i>KES {house.price}</h5>
                              <h5><i class="fa fa-bed" aria-hidden="true" style={{marginRight:'5px'}}></i>{house.roomSize}</h5>
                              <h5><i class="fa fa-edit" aria-hidden="true" style={{marginRight:'5px'}}></i>{house.category}</h5>
                              {/* <p><i class="fa fa-map-marker" aria-hidden="true" style={{marginRight:'5px'}}></i>{house.description}</p> */}
                          </div>
                          <hr/>
                          <div className="btn-op">
                            <button onClick= {() => this.viewHouse(house.id)}>
                            <img src={link}  width="20px" style={{marginRight:'5px', marginTop:'2px'}}/>
                              read more
                              </button>
                            <button>
                            <img src={star}  width="20px" style={{marginRight:'5px'}}/>
                            like
                            </button>
                            <button>
                            <img src={share}  width="20px" style={{marginRight:'5px'}}/>
                            share
                            </button>
                            
                          </div>

                    
                          
                    
                    </div>
                  </div>
                   
              )}
         
              </div>
              
              </div>
             
                

</div>
            
        )
    }
}

export default withRouter(HouseList)
