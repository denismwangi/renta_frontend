import React, { Component } from 'react'
import './rightpanel.css'
import houseimage from '../assets/images/houseimage.jpg'
export class RightPanel extends Component {
    render() {
        return (
            <div>
            <div className="right-panel">
                    <div className="panel-1">
                        <img src={houseimage} width="150px"/>
                    </div> 
                    <div className="panel-2">
                        <h1>test</h1> 
                        <h1>test</h1> 
                        <h1>test</h1> 
                    </div> 
            </div>
            

            </div>
        )
    }
}

export default RightPanel
