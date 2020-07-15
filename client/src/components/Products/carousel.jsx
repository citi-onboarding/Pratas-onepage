import React, { useState } from "react";
import Slider from "react-slick";

import Necklace1 from './images/necklace/necklace.png';
import Necklace2 from './images/necklace/necklace2.png';
import Necklace3 from './images/necklace/necklace3.png';
import Necklace4 from './images/necklace/necklace4.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

const SimpleSlider = (props) => {  
  const { filter, imagesList } = props;

  imagesList.map((product) => { return product.picture })

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const carouselList = imagesList.map((product) => (
    <div className="carousel-image-container">
      <img className="carousel-image" src={product.picture} alt="" />
    </div>
  ));

  return (
    <div className="slide-container">
      <Slider 
        style={{ width: '30rem', overflow: 'hidden' }}
        {...settings}>

          {imagesList.filter((eachItem) => !filter || filter === eachItem.type).map((product) => (
            <div className="carousel-image-container">
              <img className="carousel-image" src={product.picture} alt="" />
            </div>
          ))}

      </Slider>
    </div>
  );
}

export default SimpleSlider;
