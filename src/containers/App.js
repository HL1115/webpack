import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Loading from '../components/Loading';
import axios from 'axios';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoad: false
        }
    }
    componentDidMount() {
        axios.get('/api/list').then((data)=>{
            console.log(data.data);
        })
        setTimeout(() => {
            this.setState({
                isLoad:true
            })
            
        }, 300);
    }
    render() {
        return (
                this.state.isLoad ?
                    <Router>
                        <div>
                            <Route path="/" component={ Home } />
                        </div>
                    </Router>
                    : <Loading />
        )
    }
}