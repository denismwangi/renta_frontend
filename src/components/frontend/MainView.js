import React, { useState } from 'react'
import Bottomside from '../../layout/Bottomside';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header'
import RightPanel from '../../layout/RightPanel';
import SideView from '../../layout/SideView';
import Sidenav from '../Backend/layout/Sidenav';
import Main from '../Backend/main/Main';
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
              

              <SideView/>
              <RightPanel/>
              <div className="container">
                <Header/>
                
            <HouseList/>
           
           
            
              </div> 
              
             <div>
             {/* <Footer/> */}
             </div>
        
              {/* <Sidenav sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/> */}
        
            </div>
            
        )
    
}

export default MainView
