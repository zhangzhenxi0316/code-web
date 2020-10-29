import React, { Component } from "react";
import { HeaderWrapper, HeaderContain, LoginWapper } from "./Header.js";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { getCookie } from "./../../util/getCookie";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      nick_name: "",
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    document.cookie = `nick_name=; expires=${new Date()}`;
    console.log(getCookie("nick_name"));
    this.setState({
      isLogin: false,
    });
  }
  componentDidMount() {
    let name = getCookie("nick_name");
    
    // console.log(name==='')
    if (name !== "") {
      this.setState({
        isLogin: true,
        nick_name: name,
      });
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
              <NavLink className="link" exact activeClassName="current" to="/">
                首页
              </NavLink>
              {/* </Tab> */}
              {/* <Tab > */}
              <NavLink className="link" activeClassName="current" to="/talk">
                论坛
              </NavLink>
              {/* </Tab> */}
            </div>
          </div>
          <LoginWapper>

           
            <Link className="login-item" to="/user/write">
              <div className="item">
                <i className="iconfont">&#xe6e5;</i>
                写文章

              </div>
            </Link>
            <div className="login_Wrapper">
              {this.state.isLogin ? (
                <div className="login-item">
                  <div className="item">{this.state.nick_name}</div>
                </div>
              ) : (
                <Link className="login-item" to="/user/login">
                  <div className="item">
                    <i className="iconfont">&#xe668;</i>
                    登录
                  </div>
                </Link>
              )}
              {this.state.isLogin && (
                <div className="tablist">
                  <Link className="tablist_item">后台</Link>
                  <Link className="tablist_item">修改密码</Link>
                  <Link className="tablist_item">我的</Link>
                  <Link className="tablist_item">写文章</Link>
                  <div className="tablist_item" onClick={this.handleLogout}>
                    退出登录
                  </div>
                </div>
              )}
            </div>

            <Link className="login-item" to="/user/registry">
              <div className="item">
                <i className="iconfont">&#xe613;</i>
                注册
              </div>
            </Link>
          </LoginWapper>
        </HeaderContain>
      </HeaderWrapper>
    );
  }
}

// export default Header;
