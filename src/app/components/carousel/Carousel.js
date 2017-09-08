import React from 'react';
import Slider from 'react-slick';
import './carousel.scss';
import Card from '../card/Card';

class Carousel extends React.Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
     <div className='container'>
      <Slider {...settings}>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
      </Slider>
    </div>
    );
  }
}

export default Carousel;
