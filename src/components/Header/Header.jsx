import React, { Component } from "react";
import { HeaderWrapper, HeaderContain, LoginWapper } from "./Header.js";
import "./Header.css";
import { Link,NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContain>
          <div className="logoWrapper">
            <div className="logo">onLine</div>
            <div className="tabWrapper">
              {/* <Tab > */}
                  <NavLink className="link" exact activeClassName="current" to="/home">首页</NavLink>
              {/* </Tab> */}
              {/* <Tab > */}
                  <NavLink className="link" activeClassName="current" to="/home/talk">论坛</NavLink>
              {/* </Tab> */}
            </div>
          </div>
          <LoginWapper>
            <Link className="login-item" to="/user/login">
              <div className="item">
                <i className="iconfont">&#xe668;</i>
                  登录</div>
            </Link>
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

export default Header;
