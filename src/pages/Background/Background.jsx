
import React ,{Component} from 'react'
import { Layout, Menu } from 'antd';
import {
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  // UploadOutlined,
} from '@ant-design/icons';
import './Background.css'
import { Link, Route } from 'react-router-dom';
import Push from './Push/Push.jsx'

const { Header, Sider, Content } = Layout;
class Background extends Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
          };
          this.toggle = this.toggle.bind(this)
    }
    toggle  (collapsed) {
        // console.log(collapsed);
        this.setState({ collapsed:!this.state.collapsed });
      };
      render() {
        return (
          <Layout style={{height:'100vh'}}>

          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{marginTop:'100px'}}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/tea/background/list">
                任务列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/tea/background/push">
                发布任务
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item> */}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {this.state.collapsed ? <i style={{color:'#fff',fontSize:'25px',cursor:'pointer'}} className="iconfont" onClick={this.toggle} >&#xe601;</i> : <i style={{color:'#fff',fontSize:'25px',cursor:'pointer'}} className="iconfont" onClick={this.toggle} >&#xe600;</i>}
              <div className="title">后台管理</div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Route path="/tea/background/push">
              <Push></Push>
              </Route>
            </Content>
          </Layout>
        </Layout>
        );
      }
}

export default Background;