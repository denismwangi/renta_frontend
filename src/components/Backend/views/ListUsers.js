import React, { Component } from 'react';
import Sidenav from '../layout/Sidenav';
import Navbar from '../Navbar/Navbar'
import { withRouter } from 'react-router';
import './user.css';

import AllUsersService from './UsersService';
import Skeletons from './Skeletons';

class ListUsers extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            users: [],
            isLoading: true

        }
     
    }
    
    deleteUser(id){
        AllUsersService.deleteUser(id).then(res =>{
            this.setState({
                users: this.state.users.filter(user => user.id != id)
            });
        });
        
    }
    componentDidMount(){
    
        AllUsersService.getUsers().then((res)  =>{
          this.timerHandle = setTimeout(() => this.setState({users: res.data, isLoading:false}), 4000);
    
        });
        
    }
    componentWillUnmount(){
      if (this.timerHandle) {
        clearTimeout(this.timerHandle);
        this.timerHandle = 0;
      }
    }
    viewUser(id){
        this.props.history.push(`/admin/users/view_user/${id}`);
    }

    render() {
        return (
            <div className="container">
            <Navbar/>
            <main>
            <div className="main-container" style={{marginTop:'50px', height:'100%'}}>
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
    <th>firstname</th>
    <th>lastname</th>
    <th>username</th>
    <th>email</th>
    <th>pnone</th>
    <th>No of Houses</th>
    <th>Action</th>
    
   
  </tr>
  </thead>
 
  {
       this.state.isLoading ? [1,2,3].map((n) => <tr><td> <Skeletons  /> </td></tr>)
       
        
       :
                                this.state.users.map(
                                    user =>
                                    <tr key ={user.id}>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>null</td>
                                        <td>
                                        <button onClick= {() => this.viewUser(user.id)} className="btn-info" style={{marginLeft: '10px'}}>View</button>
                                            <button onClick= {() => this.deleteUser(user.id)} className="btn-danger" style={{marginLeft: '10px'}}>Delete</button>
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

export default ListUsers;