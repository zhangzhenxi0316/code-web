import React, { Component } from "react";
import index from "./index.module.css";
// codemirror
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Select, Alert ,message} from "antd";
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
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      to_user: "",
      c_time: "",
      descriptions: "",
      demo_scripts: "",
      mode: "javascript",
      id:this.props.match.params.id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
  }
  componentDidMount(){
    // console.log(this.props.match.params.id)
    Axios.request({url:'http://localhost:8000/task_detial?pk='+this.state.id}).then(res=>{
        console.log(res)
        this.setState({
            title:res.title,
            to_user:res.to_user,
            c_time:res.c_time,
            demo_scripts:res.demo_scripts,
            descriptions:res.descriptions
        })
        message.success('请求成功')

    }).catch(e=>{
        console.log('网络出错')
        message.error('网络错误请求失败')
    })
  }
  handleModeChange(e) {
    console.log(e);
    this.setState({
      mode: e,
    });
  }
  handleChange(editor, data, value) {
    // console.log(editor,data,value)
    this.setState({ value });
  }
  render() {
    return (
        // <Popconfirm>
      <div className={index.container}>
        <div className={index.title}>{this.state.title}</div>
        <div className={index.info}>
          <div className={index.auth}>{this.state.author}</div>
          <div className={index.time}>{this.state.c_time}</div>
        </div>
        <div className={index.des}>
          <div className={index.des_title}></div>
          <div className={index.des_content}></div>
        </div>
        <div className={index.codeSelectWrapper}>
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
          <div className={index.runBtn}>点击运行</div>
        </div>
        <div className={index.code}>
          <div className={index.codeLeft}>
            {/* 左侧代码书写 */}

            <CodeMirror
            
            // className={index.CodeMirror + 'react-codemirror2'}
            // className="react-codemirror2"
              value={this.state.value}
              options={{
                
                mode: {
                  name: this.state.mode,
                  // json:true
                },
                lineNumbers: true,
                // autocorrect:true,
                smartIndent: true,
                
              }}
              // onBeforeChange={(editor, data, value) => {
              //   this.setState({ value });
              // }}
              onBeforeChange={this.handleChange}
            />
          </div>
          <div className={index.codeRight}>1</div>
        </div>
      </div>
    //   </Popconfirm>
    );
  }
}
