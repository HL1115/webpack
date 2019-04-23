import React, { Component } from 'react'
import './index.less';
export default class Banner extends Component {
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
                </div>
            </div>
        )
    }
}
