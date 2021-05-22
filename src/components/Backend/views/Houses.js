import React, { Component } from 'react';
import Sidenav from '../layout/Sidenav';
import Navbar from '../Navbar/Navbar'
import { withRouter } from 'react-router';
import './user.css';
import ReactLoading from 'react-loading';
import AllHousesService from '../../frontend/service/House.service';
import HouuseSkeletons from '../../frontend/HouseSkeletons';
import Skeletons from './Skeletons';


class Houses extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            houses: [],
            isLoading: true
        }
     
    }
    
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
    viewHouse(id){
        this.props.history.push(`property/details/${id}`);
      }

    
    render() {
        return (
            
            <div className="container">
            
            <Navbar/>
            <main>
            <div className="main-container" style={{marginTop:'50px'}}>
            <div className="main-cards">
                <div className="card"> 
                <div className="icon">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    
                    </div>
                    <div className="card-inner">
                        <p className="text-primary-p">nummber of Users</p>
                        <span className="font-bold text-title">34</span>
                    </div>
                </div>
                <div className="card">
                    <i className="fa fa-building-o fa-2x text-red"></i>
                   
                        <div className="card-inner">
                            <p className="text-primary-p">Number of properties</p>
                            <span className="font-bold text-title">56</span>
                        </div>
                </div>
                    <div className="card">
                        <i className="fa fa-user-plus fa-2x text-yellow"></i>

                            <div className="card-inner">
                                <p className="text-primary-p">Number of visitors</p>
                                <span className="font-bold text-title">455</span>
                            </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-cart-plus fa-2x text-green"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Total Sales</p>
                            <span className="font-bold text-title">78</span>
                        </div>
                    </div>
          </div>
          <div className="users-tbl">

          <table>
              <thead>
  <tr>
    <th>House Size</th>
    <th>Location</th>
    <th>Price</th>
    <th>Category</th>
    <th>House Image</th>
    <th>State</th>
    <th>Action</th>
    
   
  </tr>
  </thead>
  

  {
     
        //    this.state.isLoading ? <ReactLoading type={"spinningBubbles"} 
        //       color={"#00E676"} 
        //       height={'15%'} 
        //       width={'15%'}
        //       // delay={'20'}
        //       className="loading"
        //       />
             
        this.state.isLoading ? [1,2,3,3,4,5,6,7].map((n) => <tr><td> <Skeletons  /> </td></tr>)
       
        
       :
                                this.state.houses.map(
                                    house =>
                                    <tr key ={house.id}>
                                        <td>{house.roomSize}</td>
                                        <td>{house.location}</td>
                                        <td>{house.price}</td>
                                        <td>{house.category}</td>
                                        <td><img className="h-img" src={house.path} style={{width:'90px', height:'40px'}}/></td>
                                        <td>Active</td>
                                        <td>
                                        <button onClick= {() => this.viewHouse(house.id)} className="btn-info" style={{marginLeft: '10px'}}>View</button>
                                            <button  className="btn-danger" style={{marginLeft: '10px'}}>Delete</button>
                                        </td>
                                        </tr>
                                        )
  }

</table>
        
          </div>
          </div>
            </main>

           
          <Sidenav/>
            </div>
            
        );
    }
}

export default Houses;