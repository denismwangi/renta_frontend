import logo from './logo.svg';

import './App.css';
import Header from './layout/Header';
import SearchSection from './components/frontend/SearchSection';
import Footer from './layout/Footer';
import WhyUs from './components/frontend/WhyUs';
import HouseList from './components/frontend/HouseList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register'
import { HashRouter } from 'react-router-dom'
import Img from './img3.jpg';
import { Topnav } from './components/Backend/layout/Topnav';
import MainContent from './components/Backend/mainContent/MainContent';



function App() {
  return (
  <HashRouter>
    <Router>
      <Switch>
      
     
      
    <div className="App">
 
  
      <Route  exact path="/" component={HouseList}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="#"/>
      <Route path="/Admin" exact component={MainContent}/>
      {/*<Footer/> */}
      

    </div>
    </Switch>
    </Router>
    </HashRouter>
  );
}

export default App;
