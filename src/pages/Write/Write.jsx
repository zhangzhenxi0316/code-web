import React, { Component } from "react";
import "./Write.css";
// import Editor from 'for-editor'
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import Axios from "../../util/index";
import {withRouter} from 'react-router-dom'
import { Popconfirm,message} from 'antd'
import {getCookie} from '../../util/getCookie'
import {Redirect} from 'react-router-dom'
const hljs = require("highlight.js");

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);
// Initialize a markdown parser
const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight: function (str, lang) {
    // 此处判断是否有添加代码语言
    if (lang && hljs.getLanguage(lang)) {
      try {
        // 得到经过highlight.js之后的html代码
        const preCode = hljs.highlight(lang, str, true).value;
        // 以换行进行分割
        const lines = preCode.split(/\n/).slice(0, -1);
        // 添加自定义行号
        let html = lines
          .map((item, index) => {
            return '<div><span class="line-num" ></span>' + item + "</div>";
          })
          .join("");
        html = "<div>" + html + "</div>";
        // 添加代码语言
        if (lines.length) {
          html += '<b class="name">' + lang + "</b>";
        }
        return '<pre class="hljs"><code>' + html + "</code></pre>";
      } catch (__) {}
    }
  },
});
class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      des:'',
      title:''
    };
    // console.log('a')
  this.handleDesChange = this.handleDesChange.bind(this)
  this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancle = this.handleCancle.bind(this)
  }
  handleSubmit(){
    Axios.request({url:'http://localhost:8000/article_create/',method:"POST",data:{
      title:this.state.title,
      des:this.state.des,
      context:this.state.content
    }}).then(res=>{
      message.success('文章发布成功')
    }).catch(err=>{
      message.error('文章发布失败')
    })
  }
  handleCancle(){
    this.props.history.push('/')
  }
  handleDesChange(e){
    this.setState({
      des:e.target.value
    })
  }
  handleTitleChange(e){
    this.setState({
      title:e.target.value
    })
  }
  handleEditorChange(a, b) {
    // console.log('a',a)
    // console.log(html)
    // console.log('b',b)
    this.setState({
      content: a.text,
    });
  }
  render() {
    return (
    getCookie('nick_name')===''?<Redirect to="/user/login"/>:

      <div className="write">
        <div className="header">
         
          
          <div className="des">
          <div className="des_title">描述：</div>
        <textarea className="des_textarea" value={this.state.des} onChange={this.handleDesChange}></textarea>
        </div>
        <div className="btn_warpper">
            <div className="btn_item" onClick={this.handleSubmit}>发布</div>
            <Popconfirm
    title="确认离开吗，你将失去所写内容"
    onConfirm={this.handleCancle}
    onCancel={()=>{return ;}}
    okText="Yes"
    cancelText="No"
  >
     <div className="btn_item" >取消</div>
  </Popconfirm>
           
          </div>
        </div>
        <div className="right">
        <div className="write_title">
          <span className="title_name">
           标题：
          </span>
          <input type="text" className="write_title_input" value={this.state.title} onChange={this.handleTitleChange}/>
          </div>
        <MdEditor className="MdEditor"
          value={this.state.content}
          style={{ height: "90vh" ,width:'100%'}}
          renderHTML={(text) => mdParser.render(text)}
          onChange={this.handleEditorChange}
          config={{
            shortcuts: true,
          }}
        />
        </div>
      </div>
    );
  }
}

export default withRouter(Write) ;
