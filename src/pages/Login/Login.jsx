import React, { Component } from "react";
import "./Login.css";
import Particles from 'react-particles-js';
import {Link} from 'react-router-dom'
import {LoginWrapper,Header,Tab,Item,Btn} from './Login'
import axios from 'axios'
import { Alert } from "antd";
import {withRouter} from 'react-router-dom'
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            loginStatus:{}
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        
    }
    handleLoginSubmit(e){
      // console.dir(this.state)
      e.preventDefault()
      if(this.state.username===''||this.state.password===''){
        this.setState({
          loginStatus:{
            type:'warning',
            msg:'用户名密码不能为空'
          }
        })
        return
      }
      
      console.log(this.state.username)
      axios.request({url: "http://localhost:8000/user/login/",method:'POST',data:{
        nick_name:this.state.username,
        password:this.state.password
      }}).then(res=>{
        if(res.status===200){
          this.setState({
            loginStatus:{
              type:'success',
              msg:'登录成功正在跳转'
            }
          })
          setTimeout(()=>{
            this.props.history.push('/index')
          },500)
        }else if(res.status===206){
          this.setState({
            loginStatus:{
              type:'error',
              msg:'用户名密码不正确'
            }
          })
        }else{
          this.setState({
            loginStatus:{
              type:'error',
              msg:'登录失败'
            }
          })
        }
      }).catch(err=>{
        this.setState({
          loginStatus:{
            type:'error',
            msg:'登录失败'
          }
        })
      })
      // console.log(data)
    }
    handleUsernameChange(e){
      // console.log( e.target.value)
      this.setState ({
        username:e.target.value
      }) 
    }
    handlePasswordChange(e){
      this.setState ({
        password:e.target.value
      }) 
    }
  componentDidMount(){
      
  }
  render() {
    return (
      <div className="main" >
        {this.state.loginStatus.msg&&<Alert  className="loginStatus" message={this.state.loginStatus.msg} type={this.state.loginStatus.type} showIcon closable onClose={()=>{this.setState({loginStatus:{}})}}/>}
          <Particles  className="body"
              params={{
            		particles: {
            			line_linked: {
                    opacity:0.3,
            				shadow: {
            					enable: false,
            					color: "#fff",
                      blur: 15,
                      opacity:0.5
            				}
                  },
                  number: {
                    value: 120,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  },
                  color: {
                    value: "#ccc"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#1C5497"
                    },
                    "polygon": {
                      "nb_sides": 3
                    }
                  },
                  "opacity": {
                    "value": 0,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 5,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": false,
                    "attract": {
                      "enable": true,
                      "rotateX": 200,
                      "rotateY": 90
                    }
                  },
                  
                
          
                },
                interactivity: {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": ["bubble"],
                      "line_linked":{
                        "opacity":1
                      }
                    }
                  },
                  "modes": {
                    "grab": {
                      "distance": 150,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 300,
                      "size": 10,
                      "duration": 1,
                      "opacity": 0.8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 60,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 20
                    },
                    "remove": {
                      "particles_nb": 20
                    }
                  }
                },
                retina_detect:true
            	}}
              style={{
                backgroundColor: "#3F9497" 
              }}
            />
            <LoginWrapper onSubmit={this.handleLoginSubmit}>
                <Header>
                  <div className="tab">
                  <Link to="/user/login">
                  <Tab className="login" >登录</Tab>
                  </Link>
                  <Link to="/user/registry">
                  <Tab >注册</Tab>
                  </Link>
                  </div>
                    
                </Header>
                <Item>
                    <span className="item_name">用户名</span>
                    <div className="inputWrapper">
                      <i className="iconfont">&#xe63f;</i>
                    <input className="input" value={this.state.username} onChange={this.handleUsernameChange} type="text" placeholder="请输入用户名"/>
                    </div>
                </Item>
                <Item>
                    <span className="item_name">密码</span>
                    <div className="inputWrapper">
                    <i className="iconfont">&#xe7b8;</i>
                    <input className="input"  value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="请输入密码"/>
                    </div>
                </Item>
                <Btn>
                  <button className="btn">登录</button>
                </Btn>
            </LoginWrapper>
      </div>
    );
  }
}

export default withRouter(Login);
