import React, { Component } from 'react'
import "./app.scss"
import Navbar from './components/navbar/navbar'
import TourList from './components/TourList'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <TourList />
            </div>
        )
    }
}
