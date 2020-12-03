import React, { Component } from 'react'
import '../herosection'
import './body.css'
import HeroSection from "../herosection";
import {homeObjOne} from './content'


class Body extends Component {
    render() {
        return(
            <div>
                <HeroSection {...homeObjOne} />
            </div>
        );
    }
}

export default Body