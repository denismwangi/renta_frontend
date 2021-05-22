
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
import Houses from './components/Backend/views/Houses';
import Sales from './components/Backend/views/Sales';
import Cancelled from './components/Backend/views/Cancelled';
import Pending from './components/Backend/views/Pending';
import Chats from './components/Backend/views/Chats';



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
      <Route exact activeClassName="active" path="/admin/users/" component={ListUsers}/>
      <Route exact activeClassName="active" path="/admin/properties/" component={Houses}/>
      <Route exact path="/admin/sales" component={Sales}/>
      <Route exact path="/admin/cancelled" component={Cancelled}/>
      <Route exact path="/admin/pending" component={Pending}/>
      <Route exact path="/admin/sold" component={Sales}/>
     <Route exact path="/admin/chat" component={Chats}/>
      
      
      
      
     
      
     
     
      
      {/* <Preloader/> */}

    </div>
    </Switch>
    </Router>
    </HashRouter>
  );
}

export default App;
