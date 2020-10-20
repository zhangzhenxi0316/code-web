import React, { Component } from "react";
import "./Push.css";

// code
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
// import "codemirror/mode/cmake/cmake";
import { Select } from "antd";
const { Option } = Select;
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/python/python');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/django/django');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/php/php');
require('codemirror/mode/clike/clike');
// require('codemirror/mode/sass/sass');
// import "codemirror/mode/clike/clike";


class Push extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:'',
      title:'',
      des:'',
      mode:'javascript'
    }
this.handleChange = this.handleChange.bind(this)
this.handleTitleChange = this.handleTitleChange.bind(this)
this.handleDesChange = this.handleDesChange.bind(this)
this.handleModeChange = this.handleModeChange.bind(this)
  }
  handleModeChange(e){
    console.log(e)
this.setState({
  mode:e
})
  }
  handleTitleChange(e){
this.setState({
  title:e.target.value
})
  }
  handleDesChange(e){
    this.setState({
      des:e.target.value
    })
  }
  handleChange(editor, data, value){
    // console.log(editor,data,value)
            this.setState({ value });

  }
  render() {
    return (
      <form>
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
            onChange= {this.handleDesChange}
          />
        </div>
        <div className="codeSelectWrapper">
            <Select
              defaultValue="javascript"
              className="select"
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
            mode:{
              name:this.state.mode,
              // json:true
            },
            lineNumbers:true,
            // autocorrect:true,
            smartIndent:false
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
