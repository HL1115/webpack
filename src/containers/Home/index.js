import React, { Component } from 'react'
import Header from '../../components/Header';
import Banner from './subComponents/banner';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
            </div>
        )
    }
}
