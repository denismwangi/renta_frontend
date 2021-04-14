import React, { Component } from 'react'
import './rightpanel.css'
import houseimage from '../assets/images/houseimage.jpg'
export class RightPanel extends Component {
    render() {
        return (
            <div>
            <div className="right-panel">
                    {/* <div className="panel-1">
                        <img src={houseimage} width="150px" style={{marginLeft:'62px'}}/>
                        <h4>Featured Properties</h4><hr/>
                        <p>no featured properties at the moment</p>
                    </div>  */}
                    <div className="panel-2">
                        <div className="feat-p">
                        <h4>Featured Properties</h4><hr/>
                        <p>no featured properties at the moment</p>
                        </div>
                        
                    </div> 
            </div>
            

            </div>
        )
    }
}

export default RightPanel
