import React, { Component } from 'react'
import Header from '../../components/Header';
import Banner from './subComponents/banner';
import List from '../../components/List';
import axios from 'axios';
import Nav from './subComponents/Nav';
import Theme from './subComponents/Theme';
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    componentDidMount() {
        axios.get('/api/list').then((data)=>{
            this.setState({
                list:data.data
            });
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <List list={this.state.list}/>
                <Nav />
                <Theme />
            </div>
        )
    }
}
