import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import index from './index.module.css'
 class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:0
        }
    }
    componentDidMount(){
        // console.log(this.props.match.params.id)
        this.setState({
            id:this.props.match.params.id
        })
    }
    render() {
        return (
            <div className={index.body}>
            <div className={index.title}>
                Javascript
            </div>
            <div className={index.info}>
                <div className={index.auth}>zzx</div>
                <div className={index.time}>2018-2-2</div>
            </div>
            <div className={index.des}>
                <div className={index.des_title}>描述</div>
                <div className={index.des_content}>发射点发射点发就是哆啦附件是的卡拉附件</div>
            </div>
            </div>
            
        )
    }
}
export default withRouter(Detail)