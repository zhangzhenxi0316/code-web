import React, { Component } from "react";
import "./App.css";
// import Particles from "particlesjs";
import Login from './pages/Login/Login.jsx'
import Registry from './pages/Registry/Registry.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
class App extends Component {
  
  render() {
    return (
      <Router>
      
      <Redirect from="/" to="/home"></Redirect>

      
        <Route  path="/home">
          <Home></Home>
        </Route>
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
