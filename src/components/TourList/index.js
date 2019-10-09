import React, { Component } from 'react'
import Tour from '../Tour'
import './tourlist.scss'
import {tourData} from '../tourData'

export default class TourList extends Component {
    state={
        tours: tourData
    }
    handleRemoveTour = (id) => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }
    render() {
        const {tours} = this.state;
        
        return (
            <section className="tourlist">
                {tours.map(tour => {return <Tour key={tour.id} tour={tour} handleRemoveTour={this.handleRemoveTour} />})}
            </section>
        )
    }
}
