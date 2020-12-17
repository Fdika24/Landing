import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import Carousel from 'react-elastic-carousel'
import './showcase.css'

function Showcase () {
    return (
        <div className="showcase-bg">
            <h1 className="text-center">Projects</h1>
            <div className="card">
            <Carousel itemsToShow={1}>
                <h1>p</h1>
                <h1>pa</h1>
            </Carousel>
            </div>

        </div>
    );
}

export default Showcase