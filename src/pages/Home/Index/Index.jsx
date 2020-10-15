import React, { Component } from "react";
import "./Index.css";
import { Main, Side, Show } from "./Index.js";
import { Carousel } from 'antd';
// import 'antd/dist/antd.min.css';
class Index extends Component {
  render() {
    return (
      <div className="contain">
        <Main>
          {/* 主体部分 */}
          <Show>
            {/* <CarouselShow> */}
              {/* 轮播图 */}
              <Carousel  className="Carousel">
                <div className="img-item">
                  <h1>1</h1>
                  <h1>2</h1>
                </div>
               
                
              </Carousel>
              
            {/* </CarouselShow> */}
          </Show>
        </Main>
        <Side>{/* 侧边 */}</Side>
      </div>
    );
  }
}

export default Index;
