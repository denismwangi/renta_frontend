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
import MainContent from './components/Backend/mainContent/MainContent';
import MainView from './components/frontend/MainView';
import  BoardAdmin from './components/Backend/mainContent/Board.Admin';
import BoardUser from './components/Backend/mainContent/Board.User';
import BoardLand from './components/Backend/mainContent/Board.Land';
import Profile from './components/Backend/mainContent/Profile';

const config = {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    "Access-Control-Allow-Origin" : "",
    "Allow": "POST",
    "Content-type": "Application/json",
}
};
// App.use((req, res, next)=>{
//   res.setHeader('Access-Control-Allow-Origin', "*");
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIOMS, GET, POST, PUT,PATCH, DELETE'
//   );
//   res.setHeader('Access-Control-Allow-headers', 'Content-Type', 'Authorization');
//   next();
// });

function App() {
  return (
  <HashRouter>
    <Router>
      <Switch>
      
     
      
    <div className="App">
     
  
      <Route  exact path="/" component={MainView}/>
      <Route path="/Login" component={Login}/>
      <Route  path="/Register" component={Register}/>
      <Route path="#"/>
      <Route  path="/admin" exact component={BoardAdmin} />
      <Route path="/user" component={BoardUser} />
      <Route path="/landlord" component={BoardLand}/>
      <Route exact path="/profile" component={Profile} />
      
    
      {/* <Route path="/Admin" exact component={MainContent}/> */}

      {/*<Footer/> */}
      

    </div>
    </Switch>
    </Router>
    </HashRouter>
  );
}

export default App;
