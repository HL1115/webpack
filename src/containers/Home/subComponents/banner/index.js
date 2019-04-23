import React, { Component } from 'react'
import './index.less';
export default class Banner extends Component {
    constructor(){
        super();
        this.state = {
            inputValue:''
        }
    }
    handleChange = (e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    handleSearch = ()=>{
        // 受控组件
        console.log(this.state.inputValue);


        // 非受控组件
        // console.log(this.inp.value)
        // axios.get('?data='+this.inp.value).then()
    }
    
    render() {
        return (
            <div className="banner">
                <p className="tit">悠游古欧洲   遍览德法瑞意  </p>
                <p className="tit">全程升级热早+1晚5星酒店</p>
                <div className="search">
                    <label>
                        <i className="iconfont icon-weizhi"></i>
                        <span>目的地</span>    
                    </label>
                    <div>
                        <input onChange={this.handleChange} value={this.state.inputValue} ref={(inp)=>this.inp = inp} type="text" placeholder="日本 美国 英国 地中海"/>
                    </div>
                    <button onClick={this.handleSearch}>
                        <i className="iconfont icon-search"></i>
                    </button>
                </div>
            </div>
        )
    }
}
