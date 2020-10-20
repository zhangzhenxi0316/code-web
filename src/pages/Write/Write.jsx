import React, { Component } from "react";
import "./Write.css";
// import Editor from 'for-editor'
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
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
    };
    console.log('a')
  
    this.handleEditorChange = this.handleEditorChange.bind(this);
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
      <div className="write">
        <div className="header">
          <div className="write_title">
          <span className="title_name">
           标题：
          </span>
          <input type="text" className="write_title_input"/>
          </div>
          
          <div className="des">
          <span className="des_title">描述：</span>
        <textarea className="des_textarea"></textarea>
        </div>
        <div className="btn_warpper">
            <div className="btn_item">发布</div>
            <div className="btn_item">取消</div>
          </div>
        </div>
        
        <MdEditor className="MdEditor"
          value={this.state.content}
          style={{ height: "100vh" ,width:'70vw'}}
          renderHTML={(text) => mdParser.render(text)}
          onChange={this.handleEditorChange}
          config={{
            shortcuts: true,
          }}
        />
      </div>
    );
  }
}

export default Write;
