import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './index.less';
import num from './home';

let ele = <h1>{num}</h1>;
ReactDOM.render(
    ele,
    document.querySelector('#root')
)

// let fn = ()=>{
//     console.log(num+11);
// }
// fn();
// fn();
// class Person{
//     say = ()=>{
//         alert('hello');
//     }
// }
// let p1 = new Person();
// p1.say();