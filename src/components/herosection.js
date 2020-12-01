import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import './hero.css'
import myImage from './images/work.svg'

function HeroSection({
    lightBg, topLine,lightText, lightTextDesc, headline, description, button , img, alt, imgStart, buttonLabel
                     }) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBG'}>
                <div className="container">
                    <div className="row home__hero-row" style={{display : 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={ lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ?'home__hero-subtitle': 'home__hero-subtitle dark'}>{description}</p>
                                <Link to="/signup">
                                    <Button buttonSize='btn--wide'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                    <img src={myImage} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection