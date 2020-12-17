import React, { Component } from 'react'
import '../herosection'
import './body.css'
import HeroSection from "../herosection";
import Showcase from "../showcase";
import {homeObjOne} from './content'


class Body extends Component {
    render() {
        return(
            <div>
                <HeroSection {...homeObjOne} />
                <Showcase/>
            </div>
        );
    }
}

export default Body