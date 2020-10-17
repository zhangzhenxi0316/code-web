import React, { Component } from "react";
import './Write.css'
// import Editor from 'for-editor'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
const hljs = require('highlight.js')
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        // 此处判断是否有添加代码语言
      if (lang && hljs.getLanguage(lang)) {
        try {
            // 得到经过highlight.js之后的html代码
          const preCode = hljs.highlight(lang, str, true).value
          // 以换行进行分割
          const lines = preCode.split(/\n/).slice(0, -1)
          // 添加自定义行号
          let html = lines.map((item, index) => {
            return '<div><span class="line-num" ></span>' + item + '</div>'
          }).join('')
          html = '<div>' + html + '</div>'
          // 添加代码语言
          if (lines.length) {
            html += '<b class="name">' + lang + '</b>'
          }
          return '<pre class="hljs"><code>' +
            html +
            '</code></pre>'
        } catch (__) {}
      }
      
    }
  });
class Write extends Component {
    constructor(props){
        super(props) 
        this.state = {
            content:''
        }
        this.handleEditorChange = this.handleEditorChange.bind(this)
    }
    handleEditorChange(a,b){
        // console.log(html)
        // console.log(b)
        this.setState({
            content:a.text
        })
    }
    render(){
        return (
            <div>
                <div className="header">写文章</div>
<MdEditor
            value={this.state.content}
              style={{ height: "1000px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditorChange}
              config={{
                  shortcuts:true
              }}
            />
            <div className="btn_warpper">
            <div className="btn">发布</div>
            <div className="btn">取消</div>
            </div>
            
            </div>
            
          )
    }
}

export default Write;
