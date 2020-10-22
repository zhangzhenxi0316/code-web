import React, { Component } from "react";
import "./Index.css";
import { Main, Side, Show } from "./Index.js";
import { Carousel } from "antd";
import Axios from "../../../util/index";
// import 'antd/dist/antd.min.css';

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      articleList: [],
    };
  }
  componentDidMount() {
    Axios.request({ url: "http://localhost:8000/task", method: "GET" })
      .then((res) => {
        //   console.log(res)
        this.setState({
          taskList: res.data,
        });
        Axios.request({ url: "http://localhost:8000/article" })
          .then((res) => {
            this.setState({
              articleList: res.data,
            });
          })
          .catch((err) => {
            console.log("网络失败");
          });
      })
      .catch((err) => {
        // alert('网页请求失败')
      });
  }
  render() {
    return (
      <div className="contain">
        <Main>
          {/* 主体部分 */}
          <Show>
            {/* <CarouselShow> */}
            {/* 轮播图 */}
            <Carousel autoplay className="Carousel">
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
              <div className="hot_test_title">最新题目</div>
              {this.state.taskList.map((item, index) => {

               if(index<=2) return (
                  <div className="hot_test_item">
                    <div className="hot_test_item_title">{item.title}</div>
                    <div className="hot_test_item_author">
                      作者：{item.to_user} 时间：{item.c_time.slice(0,10)+item.c_time.slice(11,19)}
                    </div>
                  </div>
                );
                else{return null}
              })}
            </div>
            {/* </CarouselShow> */}
          </Show>
          <div className="hot-article">
            {/* 热门文章 */}
            <div className="hot-article-title">热门文章</div>
            <div className="hot-article-items">
              {this.state.articleList.map((item, index) => {
                return (
                  <div
                    className="hot-article-item"
                    data-id={item.id}
                    data-author={item.author}
                    data-c_time={item.c_time}
                  >
                    <div className="hot-article-item-title">{item.title}</div>
                    <div className="hot-article-item-main">{item.des}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="all-test">
            <div className="all_test">
              {/* 热门题目 */}
              <div className="all_test_title">全部题目</div>
              <div className="all_test_item">
                <div className="all_test_item_title">python算法</div>
                <div className="all_test_item_author">
                  作者：zzx 时间：2018-09-10
                </div>
              </div>
              <div className="all_test_item">
                <div className="all_test_item_title">python算法</div>
                <div className="all_test_item_author">
                  作者：zzx 时间：2018-09-10
                </div>
              </div>
              <div className="all_test_item">
                <div className="all_test_item_title">python算法</div>
                <div className="all_test_item_author">
                  作者：zzx 时间：2018-09-10
                </div>
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
