import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx'
import './Home.css'
import {Route} from 'react-router-dom'
import Index from './Index/Index.jsx'
import Talk from './Talk/Talk.jsx'
import Article from '../Detail/Article/Article.jsx'
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
             <Route  path="/article/detail/:id">
            <Article></Article>
             </Route>
            </div>
        );
    }
}

export default Home;