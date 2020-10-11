import React, { Component } from "react";
import "./Registry.css";
import Particles from "react-particles-js";
import { LoginWrapper, Header, Tab, Item, Btn } from "./Registry";
import { Link } from "react-router-dom";
import { Select } from "antd";
import axios from "axios";
const { Option } = Select;
class Registry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuId: "",
      username: "",
      password: "",
      width: "",
      height: "",
      role: 0,
      email: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleStuChange = this.handleStuChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleRegistrySubmit = this.handleRegistrySubmit.bind(this);
  }
  handleRegistrySubmit(e) {
    e.preventDefault();
    let data = {
      password:this.state.password,
      email:this.state.email,

    }
    if(this.state.role){
      // 老师
      data.nick_name = this.state.username
    }else{
data.stuId = this.state.stuId
    }
    axios.request({
      url: "/registry",
      method: "POST",
      data: data,
    }).then(res=>{
      console.log('注册成功')
    });
  }
  handleRoleChange(e) {
    console.log(e);
    this.setState({
      role: parseInt(e),
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: parseInt(e),
    });
  }
  handleUsernameChange(e) {
    // console.log( e.target.value)
    this.setState({
      username: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleStuChange(e) {
    this.setState({
      stuId: e.target.value,
    });
  }
  componentDidMount() {
    let width = document.body.clientWidth;
    let height = document.body.height;
    this.setState({
      width,
      height,
    });
  }
  render() {
    let { username, password, stuId, role } = this.state;
    return (
      <div className="main">
        <Particles
          className="body"
          params={{
            particles: {
              line_linked: {
                opacity: 0.2,
                shadow: {
                  enable: false,
                  color: "#fff",
                  blur: 15,
                  opacity: 0.5,
                },
              },
              number: {
                value: 120,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: "#ccc",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#1C5497",
                },
                polygon: {
                  nb_sides: 3,
                },
              },
              opacity: {
                value: 0,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                  size_min: 0.1,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 200,
                  rotateY: 90,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: ["bubble"],
                  line_linked: {
                    opacity: 1,
                  },
                },
              },
              modes: {
                grab: {
                  distance: 150,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 300,
                  size: 10,
                  duration: 1,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 60,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 20,
                },
                remove: {
                  particles_nb: 20,
                },
              },
            },
            retina_detect: true,
          }}
          style={{
            width: this.state.width,
            height: this.state.height,
            backgroundColor: "#3F9497",
          }}
        />
        <LoginWrapper onSubmit={this.handleRegistrySubmit}>
          <Header>
            <div className="tab">
              <Link to="/login">
                <Tab>登录</Tab>
              </Link>
              <Link to="/registry">
                <Tab className="registry">注册</Tab>
              </Link>
            </div>
          </Header>
          {role === 0 && (
            <Item>
              <span className="item_name">昵称</span>
              <div className="inputWrapper">
                {/* <i className="iconfont">&#xe63f;</i> */}
                <input
                  className="input"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  type="text"
                  placeholder="请输入用户名"
                />
              </div>
            </Item>
          )}
          {role === 1 && (
            <Item>
              <span className="item_name">学号</span>
              <div className="inputWrapper">
                {/* <i className="iconfont">&#xe63f;</i> */}
                <input
                  className="input"
                  type="number"
                  onChange={this.handleStuChange}
                  value={this.state.stuId}
                  placeholder="请输入学号"
                />
              </div>
            </Item>
          )}
          <Item>
            <span className="item_name">密码</span>
            <div className="inputWrapper">
              {/* <i className="iconfont">&#xe7b8;</i> */}
              <input
                className="input"
                type="password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
                placeholder="请输入密码"
              />
            </div>
          </Item>
          <Item>
            <span className="item_name">邮箱</span>
            <div className="inputWrapper">
              {/* <i className="iconfont">&#xe7b8;</i> */}
              <input
                className="email"
                type="email"
                onChange={this.handleEmailChange}
                value={this.state.email}
                placeholder="请输入邮箱"
              />
            </div>
          </Item>
          <div className="selectWrapper">
            <Select
              defaultValue="0"
              className="select"
              onChange={this.handleRoleChange}
            >
              <Option className="option" value="0">
                教师
              </Option>
              <Option className="option" value="1">
                学生
              </Option>
            </Select>
          </div>

          <Btn>
            <button className="btn">注册</button>
          </Btn>
        </LoginWrapper>
      </div>
    );
  }
}

export default Registry;