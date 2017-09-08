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
    const images = ['app/assets/carousel1.svg', 'app/assets/carousel2.svg', 'app/assets/carousel3.svg', 'app/assets/carousel1.svg', 'app/assets/carousel2.svg', 'app/assets/carousel3.svg', 'app/assets/carousel1.svg', 'app/assets/carousel2.svg', 'app/assets/carousel3.svg'];
    return (
      <div className="container carousel-wrapper">
       <Slider {...settings}>
        {
         images.map((image, index) => (
          <div key={index}><Card image={image}/></div>
        ))
        }
         
       </Slider>
     </div>
     );
  }
}

export default Carousel;
