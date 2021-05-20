import React, { Component } from "react";
import MapContainer from "../frontend/MapCointainer";

import BuyModal from './BuyModal';

class About extends Component {
    
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


render() {
    return (
  <MapContainer/>
    );
  }
}
export default About
