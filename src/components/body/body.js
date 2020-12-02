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
                <div>
                    <h1>Makan bang</h1>
                </div>
            </div>
        );
    }
}

export default Body