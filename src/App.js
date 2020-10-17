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
import Write from './pages/Write/Write.jsx'
class App extends Component {
  
  render() {
    return (
      <Router>
      
      {/* <Redirect exact from="/" to="/home"></Redirect> */}

      
        
        <Switch>
          <Route exact path="/user/login">
          <Login ></Login>
          </Route>
          <Route  exact path="/user/registry">
            <Registry  />
          </Route>
          <Route exact path="/user/write">
          <Write></Write>
          </Route>
          <Route   path="/">
          <Home></Home>
        </Route>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
