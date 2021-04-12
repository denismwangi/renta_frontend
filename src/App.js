
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register'
import { HashRouter } from 'react-router-dom'
import MainView from './components/frontend/MainView';
import  BoardAdmin from './components/Backend/mainContent/Board.Admin';
import BoardUser from './components/Backend/mainContent/Board.User';
import BoardLand from './components/Backend/mainContent/Board.Land';
import Profile from './components/Backend/mainContent/Profile';
import Housedetails from './components/frontend/Housedetails';
import Preloader from './components/frontend/Preloader';



const config = {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    "Access-Control-Allow-Origin" : "",
    "Allow": "POST",
    "Content-type": "Application/json",
}
};


function App() {
  return (
  <HashRouter>
    <Router>
      <Switch>
      
     
      
    <div className="App">
     
       
      <Route  exact path="/" component={MainView}/>
      <Route  exact path="/home" component={MainView}/>
      <Route path="/property/details/:id" component={Housedetails}/>
      <Route path="/Login" component={Login}/>
      <Route  path="/Register" component={Register}/>
      <Route  path="/admin" exact component={BoardAdmin} />
      <Route path="/user" component={BoardUser} />
      <Route path="/landlord" component={BoardLand}/>
      <Route exact path="/profile" component={Profile} />
      {/* <Preloader/> */}

    </div>
    </Switch>
    </Router>
    </HashRouter>
  );
}

export default App;
