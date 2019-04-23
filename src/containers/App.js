import React, { Component } from 'react'
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Loading from '../components/Loading';
export default class App extends Component {
    render() {
        return (
            <Loading />
        )
    }
}
{/* <Router>
<div>
    <Route path="/" component={Home}/>
</div>
</Router> */}