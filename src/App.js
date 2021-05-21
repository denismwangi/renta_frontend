
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
import About from './components/pages/About';
import MainContent from './components/Backend/mainContent/MainContent';
import Landing from './components/frontend/Landing';
import ListUsers from './components/Backend/views/ListUsers';



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
     
     
      <Route  exact path="/" component={Landing}/>
      <Route  exact path="/home" component={Landing}/>
      <Route  exact path="/feed" component={MainView}/>
      <Route path="/property/details/:id" component={Housedetails}/>
      <Route path="/Login" component={Login}/>
      <Route  path="/Register" component={Register}/>
      <Route  path="/admin" exact component={MainContent} />
      <Route  path="/admin/dashboard" exact component={MainContent} />
      <Route path="/user" component={BoardUser} />
      <Route path="/landlord" component={BoardLand}/>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/about" component={About} />
      <Route exact path="/admin/users/" component={ListUsers}/>
     
      
      {/* <Preloader/> */}

    </div>
    </Switch>
    </Router>
    </HashRouter>
  );
}

export default App;
