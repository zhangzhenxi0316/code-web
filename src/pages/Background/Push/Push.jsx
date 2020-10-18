import React, { Component } from "react";
import "./Push.css";
class Push extends Component {
  render() {
    return (
      <form>
        <div className="content-title">
          <label htmlFor="content-input-title">题目:</label>
          <input type="text" id="content-input-title" className="content-input" />
        </div>
        <div className="content-title">
          <label htmlFor="content-input-des">描述:</label>
          <textarea type="text" id="content-input-des" className="content-textarea" />
        </div>
        <button className="btn">发布</button>
      </form>
    );
  }
}

export default Push;
