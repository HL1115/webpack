import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd-mobile/dist/antd-mobile.css'; 
import './assets/common.less';
import './assets/fonts/iconfont.css';
import './index.less';
import App from './containers/App';
import {Provider} from 'react-redux';
import store from './store';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
