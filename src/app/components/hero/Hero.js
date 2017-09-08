import React from 'react';
import './hero.scss';
import Button from '../button/Button';

const Hero = (props) => {
    return (
        <div className="hero-container text-center">
            <h3 className="title">{props.title}</h3>
            <span className="subTitle">{props.subTitle}</span>
            <Button classNames="btn-filled upperCase" value={props.buttonValue}/>
        </div>
    )
}

export default Hero;