import React, { Component } from "react";
import "./Push.css";
import { message, Button, Space } from "antd";
// code
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
// import "codemirror/mode/cmake/cmake";
import { Select, Alert } from "antd";
import Axios from "../../../util/index";
const { Option } = Select;
require("codemirror/mode/xml/xml");
require("codemirror/mode/markdown/markdown");
require("codemirror/mode/python/python");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/django/django");
require("codemirror/mode/jsx/jsx");
require("codemirror/mode/php/php");
require("codemirror/mode/clike/clike");
// require('codemirror/mode/sass/sass');
// import "codemirror/mode/clike/clike";

class Push extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      title: "",
      des: "",
      mode: "javascript",
      submitStatus: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDesChange = this.handleDesChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleModeChange(e) {
    console.log(e);
    this.setState({
      mode: e,
    });
  }
  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }
  handleDesChange(e) {
    this.setState({
      des: e.target.value,
    });
  }
  handleChange(editor, data, value) {
    // console.log(editor,data,value)
    this.setState({ value });
  }
  handleSubmit(e) {
    e.preventDefault();
    Axios.request({
      url: "http://localhost:8000/task_create/",
      method: "POST",
      data: {
        sessionid: "",
        title: this.state.title,
        descriptions: this.state.des,
        demo_scripts: this.state.value,
      },
    })
      .then((res) => {
        message.success("发布成功");
      })
      .catch((err) => {
        message.error("发布失败");
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="content-title">
          <label htmlFor="content-input-title">题目:</label>
          <input
            type="text"
            id="content-input-title"
            className="content-input"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="content-title">
          <label htmlFor="content-input-des">描述:</label>
          <textarea
            type="text"
            id="content-input-des"
            className="content-textarea"
            value={this.state.des}
            onChange={this.handleDesChange}
          />
        </div>
        <div className="codeSelectWrapper">
          <Select
            defaultValue="javascript"
            className="push-select"
            onChange={this.handleModeChange}
          >
            <Option className="option" value="javascript">
              javascript
            </Option>
            <Option className="option" value="python">
              python
            </Option>
            <Option className="option" value="jsx">
              jsx
            </Option>
            <Option className="option" value="markdown">
              markdown
            </Option>
            <Option className="option" value="xml">
              xml
            </Option>
            <Option className="option" value="django">
              django
            </Option>
            <Option className="option" value="clike">
              c
            </Option>
          </Select>
        </div>
        <CodeMirror
          value={this.state.value}
          options={{
            mode: {
              name: this.state.mode,
              // json:true
            },
            lineNumbers: true,
            // autocorrect:true,
            smartIndent: false,
          }}
          // onBeforeChange={(editor, data, value) => {
          //   this.setState({ value });
          // }}
          onBeforeChange={this.handleChange}
        />
        <button className="btn">发布</button>
      </form>
    );
  }
}

export default Push;
