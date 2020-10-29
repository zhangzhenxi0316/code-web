import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx'
import './Home.css'
import {Route} from 'react-router-dom'
import Index from './Index/Index.jsx'
import Talk from './Talk/Talk.jsx'
import Detail from '../Detail/Detail.jsx'
class Home extends Component {
    render() {
        return (
            <div className="page"> 
                <Header></Header>
               
             <Route exact  path="/">
            <Index></Index>
             </Route>
             <Route  path="/talk">
            <Talk></Talk>
             </Route>
             <Route  path="/task/detail/:id">
            <Detail></Detail>
             </Route>
            </div>
        );
    }
}

export default Home;