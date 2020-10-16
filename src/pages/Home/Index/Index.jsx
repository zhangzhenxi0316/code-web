import React, { Component } from "react";
import "./Index.css";
import { Main, Side, Show } from "./Index.js";
import { Carousel } from 'antd';
// import 'antd/dist/antd.min.css';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
class Index extends Component {
  render() {
    return (
      <div className="contain">
        <Main>
          {/* 主体部分 */}
          <Show>
            {/* <CarouselShow> */}
              {/* 轮播图 */}
              <Carousel className="Carousel" >
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
                
              </div>
            {/* </CarouselShow> */}
          </Show>
        </Main>
        <Side>
          {/* 侧边 */}
          <div className="race"></div>
          </Side>
      </div>
    );
  }
}

export default Index;
