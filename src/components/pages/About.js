import React, { Component } from "react";
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
      <main>
        <h1>React Modal</h1>
        <BuyModal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </BuyModal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
        
        
      </main>
    );
  }
}
export default About
