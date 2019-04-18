import React, { Component } from 'react';
import './index.less';
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={require('../../assets/imgs/logo.png')} alt=""/>
                <button>快速定制</button>
            </div>
        )
    }
}
