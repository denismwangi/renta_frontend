import React, { Component } from 'react'
class SearchSection extends Component {
    render() {
        return (
            <div>
               <section className="search-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="section-title">
          <h4>Where would you rather live?</h4>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="change-btn">
          <div className="cb-item">
            <label htmlFor="cb-rent" className="active">
              For Rent
              <input type="radio" id="cb-rent" />
            </label>
          </div>
          <div className="cb-item">
            <label htmlFor="cb-sale">
              For Sale
              <input type="radio" id="cb-sale" />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="search-form-content">
      <form action="#" className="filter-form">
        <select className="sm-width">
          <option value>Chose The City</option>
        </select>
        <select className="sm-width">
          <option value>Location</option>
        </select>
        <select className="sm-width">
          <option value>Property Status</option>
        </select>
        <select className="sm-width">
          <option value>Property Type</option>
        </select>
        <select className="sm-width">
          <option value>No Of Bedrooms</option>
        </select>
        <select className="sm-width">
          <option value>No Of Bathrooms</option>
        </select>
        <div className="room-size-range-wrap sm-width">
          <div className="price-text">
            <label htmlFor="roomsizeRange">Size:</label>
            <input type="text" id="roomsizeRange" readOnly />
          </div>
          <div id="roomsize-range" className="slider" />
        </div>
        <div className="price-range-wrap sm-width">
          <div className="price-text">
            <label htmlFor="priceRange">Price:</label>
            <input type="text" id="priceRange" readOnly />
          </div>
          <div id="price-range" className="slider" />
        </div>
        <button type="button" className="search-btn sm-width">Search</button>
      </form>
    </div>
    <div className="more-option">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-heading active">
            <a data-toggle="collapse" data-target="#collapseOne">
              More Search Options
            </a>
          </div>
          <div id="collapseOne" className="collapse" data-parent="#accordionExample">
            <div className="card-body">
              <div className="mo-list">
                <div className="ml-column">
                  <label htmlFor="air">Air conditioning
                    <input type="checkbox" id="air" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="lundry">Laundry
                    <input type="checkbox" id="lundry" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="refrigerator">Refrigerator
                    <input type="checkbox" id="refrigerator" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="washer">Washer
                    <input type="checkbox" id="washer" />
                    <span className="checkbox" />
                  </label>
                </div>
                <div className="ml-column">
                  <label htmlFor="barbeque">Barbeque
                    <input type="checkbox" id="barbeque" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="lawn">Lawn
                    <input type="checkbox" id="lawn" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="sauna">Sauna
                    <input type="checkbox" id="sauna" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="wifi">Wifi
                    <input type="checkbox" id="wifi" />
                    <span className="checkbox" />
                  </label>
                </div>
                <div className="ml-column">
                  <label htmlFor="dryer">Dryer
                    <input type="checkbox" id="dryer" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="microwave">Microwave
                    <input type="checkbox" id="microwave" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="pool">Swimming Pool
                    <input type="checkbox" id="pool" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="window">Window Coverings
                    <input type="checkbox" id="window" />
                    <span className="checkbox" />
                  </label>
                </div>
                <div className="ml-column last-column">
                  <label htmlFor="gym">Gym
                    <input type="checkbox" id="gym" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="shower">OutdoorShower
                    <input type="checkbox" id="shower" />
                    <span className="checkbox" />
                  </label>
                  <label htmlFor="tv">Tv Cable
                    <input type="checkbox" id="tv" />
                    <span className="checkbox" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            </div>
        )
    }
}

export default SearchSection;
