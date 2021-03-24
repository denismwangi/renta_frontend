import React, { useState } from 'react'
import Bottomside from '../../layout/Bottomside';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header'
import SideView from '../../layout/SideView';
import HouseList from './HouseList';


const MainView = () => {
const [sidebarOpen, setSidebarOpen] = useState(false);

const openSidebar = () => {
  setSidebarOpen(true);
};

// const closeSidebar = () =>{
//   setSidebarOpen(false);
// };

   
        return (
            <div>
              

              <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
              <div className="container">
              <SideView/>
               <HouseList/>
              </div> 
             <div>
             <Footer/>
             </div>
        
              {/* <Sidenav sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/> */}
        
            </div>
            
        )
    
}

export default MainView
