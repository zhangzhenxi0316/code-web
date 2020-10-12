import React, { Component } from "react";
import "./App.css";
// import Particles from "particlesjs";
import Login from './pages/Login/Login.jsx'
import Registry from './pages/Registry/Registry.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  
  render() {
    return (
      <Router>
      

      <Switch>
          <Route path="/user/login">
          <Login ></Login>
          </Route>
          <Route path="/user/registry">
            <Registry  />
          </Route>
          
        </Switch>
      </Router>
      
    );
  }
}

export default App;
