import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx'
import './Home.css'
import {Route} from 'react-router-dom'
import Index from './Index/Index.jsx'
import Talk from './Talk/Talk.jsx'
class Home extends Component {
    render() {
        return (
            <div className="page"> 
                <Header></Header>
               
             <Route exact path="/home">
            <Index></Index>
             </Route>
             <Route  path="/home/talk">
            <Talk></Talk>
             </Route>
            </div>
        );
    }
}

export default Home;