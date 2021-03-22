import React, { Component , useState} from 'react'
import Sidenav from '../layout/Sidenav'
import Topnav from '../layout/Topnav'
import Main from '../main/Main'
import Navbar from '../Navbar/Navbar'
import './main.css'



const MainContent = ()=> {

const [sidebarOpen, setSidebarOpen] = useState(false);

const openSidebar = () => {
  setSidebarOpen(true);
}
const closeSidebar = () =>{
  setSidebarOpen(false);
}
        return (
            <div className="container">
              <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
              <Main/>
              <Sidenav sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            </div>
        )
    }


export default MainContent
