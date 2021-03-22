import React, { Component } from 'react'
import AllHousesService from './service/House.service';
import SearchSection from '../../components/frontend/SearchSection';
import WhyUs from '../../components/frontend/WhyUs';


export class HouseList extends Component {

  constructor(props){
    super(props)

    this.state = {
      houses : []
    }
  }

  componentDidMount(){
    AllHousesService.getHouses().then((res) =>{
      this.setState({houses: res.data});
    });
  }
    render() {
        return (      
          <div>
            <SearchSection/>
 <section className="property-section latest-property-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="section-title">
          <h4>Latest PROPERTY</h4>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="property-controls">
          <ul>
            <li data-filter="all">All</li>
            <li data-filter=".apart">Apartment</li>
            <li data-filter=".house">House</li>
            <li data-filter=".office">Office</li>
            <li data-filter=".hotel">Hotel</li>
            <li data-filter=".restaurent">Restaurent</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
    
      
    <div className="row property-filter">
    {
      this.state.houses.map(
        house =>
        
     <div class="col-lg-4 col-md-6 mix all restaurent hotel rounded-circle" >
  <div className="property-item">
    <div className="pi-pic set-bg" >
    <img src={house.url} className="img-fluid" alt="" />
      <div className="label">{house.category}</div>
    </div>
    <div className="pi-text">
      <a href="#" className="heart-icon"><span className="icon_heart_alt" /></a>
      <div className="pt-price">{house.price}<span>Ksh</span></div>
      <h5><a href="#">{house.location}</a></h5>
      <p><span className="icon_pin_alt" /> 3 Middle Winchendon Rd, Rindge, NH 03461</p>
      <ul>
        <li><i className="fa fa-bed" />{house.roomSize}</li>
      </ul>
      <div className="pi-agent">
        <div className="pa-item">
          <div className="pa-info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkoThZW6Z4ElVojB16Paxlv85AXglOotItQ&usqp=CAU" alt />
            <h6>Ashton Kutcher</h6>
          </div>
          <div className="pa-text">
            123-455-688
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      )
    }
    </div>
   
    </div>
  </div>
</section>
<WhyUs/>
</div>

            
        )
    }
}

export default HouseList
