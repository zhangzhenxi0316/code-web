import React, { Component } from "react";
import "./Index.css";
import { Main, Side, Show } from "./Index.js";
import { Carousel } from 'antd';
import Axios from "axios";
// import 'antd/dist/antd.min.css';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskList:[]
    }
  }
  componentDidMount(){
    Axios.request({url:'http://localhost:3000/task',method:"GET"}).then(res=>{
      console.log(res)

    }).catch(err=>{
      alert('网页请求失败')
    })
  }
  render() {
    return (
      <div className="contain">
        <Main>
          {/* 主体部分 */}
          <Show>
            {/* <CarouselShow> */}
              {/* 轮播图 */}
              <Carousel autoplay className="Carousel" >
                <div>
                 <img src="https://www.neuq.edu.cn/images/20200605chensiguangchang.png"></img>
                </div>
                <div>
                <img src="https://www.neuq.edu.cn/images/20200426fanhua2.PNG"></img>
                </div>
                <div>
                <img src="https://www.neuq.edu.cn/images/20200423xiaoliu.JPG"></img>
                </div>
               
              </Carousel>
              <div className="hot_test">
                {/* 热门题目 */}
                <div className="hot_test_title">
                  最新题目
                </div>
                <div className="hot_test_item">
                  <div className="hot_test_item_title">python算法</div>
                  <div className="hot_test_item_author">作者：zzx 时间：2018-09-10</div>
                </div>
                <div className="hot_test_item">
                  <div className="hot_test_item_title">python算法</div>
                  <div className="hot_test_item_author">作者：zzx 时间：2018-09-10</div>
                </div>
                <div className="hot_test_item">
                  <div className="hot_test_item_title">python算法</div>
                  <div className="hot_test_item_author">作者：zzx 时间：2018-09-10</div>
                </div>
              </div>
            {/* </CarouselShow> */}
          </Show>
          <div className="hot-article">
            {/* 热门文章 */}
            <div className="hot-article-title">
              热门文章
            </div>
          <div className="hot-article-items">
          <div className="hot-article-item">
              <div className="hot-article-item-title">javascript</div>
              <div className="hot-article-item-main">文章内容</div>
            </div>
            <div className="hot-article-item">
              <div className="hot-article-item-title">javascript</div>
              <div className="hot-article-item-main">文章内容</div>
            </div>
            <div className="hot-article-item">
              <div className="hot-article-item-title">javascript</div>
              <div className="hot-article-item-main">文章内容</div>
            </div>
          </div>
          </div>
          <div className="all-test">
          <div className="all_test">
                {/* 热门题目 */}
                <div className="all_test_title">
                 全部题目
                </div>
                <div className="all_test_item">
                  <div className="all_test_item_title">python算法</div>
                  <div className="all_test_item_author">作者：zzx 时间：2018-09-10</div>
                </div>
                <div className="all_test_item">
                  <div className="all_test_item_title">python算法</div>
                  <div className="all_test_item_author">作者：zzx 时间：2018-09-10</div>
                </div>
                <div className="all_test_item">
                  <div className="all_test_item_title">python算法</div>
                  <div className="all_test_item_author">作者：zzx 时间：2018-09-10</div>
                </div>
              </div>
          </div>
        </Main>
        <Side>
          {/* 侧边 */}
          <div className="race">
            {/*排行榜 */}
            <div className="race_title">排行榜</div>
            <div className="race_user">
              <div className="race_user_item">
                <div className="race_user_item_name">zzx</div>
                <div className="race_user_item_mark">
                  <span>12道</span>
                  <span>134分</span>
                </div>
              </div>
              <div className="race_user_item">
                <div className="race_user_item_name">zzx</div>
                <div className="race_user_item_mark">
                  <span>12道</span>
                  <span>134分</span>
                </div>
              </div>
            </div>
          </div>
          </Side>
      </div>
    );
  }
}

export default Index;
