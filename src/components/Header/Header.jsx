import React, { Component } from "react";
import { HeaderWrapper, HeaderContain, LoginWapper } from "./Header.js";
import "./Header.css";
import { Link,NavLink } from "react-router-dom";
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin:false
        }
    }
  render() {
    return (
      <HeaderWrapper current>
        <HeaderContain>
          <div className="logoWrapper">
            <div className="logo">OnlineCoding</div>
            <div className="tabWrapper">
              {/* <Tab > */}
                  <NavLink className="link" exact activeClassName="current"  to="/">首页</NavLink>
              {/* </Tab> */}
              {/* <Tab > */}
                  <NavLink className="link" activeClassName="current" to="/talk">论坛</NavLink>
              {/* </Tab> */}
            </div>
          </div>
          <LoginWapper>
              <div className="login_Wrapper">
              {this.state.isLogin?
               <div className="login-item" >
               <div className="item">
                
                zzx</div>
             </div>
            :
            <Link className="login-item" to="/user/login">
                <div className="item">
                <i className="iconfont">&#xe668;</i>
                  登录
                  </div>
              
            </Link>
           
            }
           {this.state.isLogin && <div className="tablist">
                <Link className="tablist_item">后台</Link>
                <Link className="tablist_item">修改密码</Link>
                <Link className="tablist_item">我的</Link>
                <Link className="tablist_item">写文章</Link>
            </div>}
              </div>
            
            <Link className="login-item" to="/user/registry">

              <div className="item">
            <i className="iconfont">&#xe613;</i>
                  注册</div>
            </Link>
           
          </LoginWapper>
        </HeaderContain>
        
      </HeaderWrapper>
    );
  }
} 

// export default Header;
