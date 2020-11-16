import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import index from './index.module.css'
import ReactMarkdown from 'react-markdown' 
import axios from '../../../util'
 class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:0,
            content:'# Hello, *world*!',
            title:'',
            author:'',
            c_time:'',
            des:''
        }
    }
    componentDidMount(){
        // console.log(this.props.match.params.id)
        this.setState({
            id:this.props.match.params.id
        },()=>{
            axios.request({url:'http://localhost:8000/article_detial?pk='+this.id}).then(res=>{
                console.log(res)
                  this.setState({
                      content:res.content,
                      title:res.title,
                      author:res.author,
                      c_time:res.c_time,
                      des:res.des
                  })
            })
        })
     
    }
    render() {
        return (
            <div className={index.body}>
            <div className={index.title}>
                {this.state.title}
            </div>
            <div className={index.info}>
        <div className={index.auth}>{this.state.author}</div>
        <div className={index.time}>{this.state.c_time}</div>
            </div>
            <div className={index.des}>
                <div className={index.des_title}>描述</div>
        <div className={index.des_content}>{this.state.des}</div>
            </div>
            <div className={index.content}>
        <ReactMarkdown >{this.state.content}</ReactMarkdown>
            </div>
            </div>
            
        )
    }
}
export default withRouter(Article)