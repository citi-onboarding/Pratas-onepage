import React, { useState } from "react";
import Slider from "react-slick";

import nextArrow from './images/arrows/next-arrow.svg'
import prevArrow from './images/arrows/prev-arrow.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, justifyContent:'center', alignContent:'center', width:'0.5rem', display: 'flex', right:'4rem' }}
      onClick={onClick}>
      <img src={ nextArrow } alt=""/>
      </div> 
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  justifyContent:'center', alignContent:'center', zIndex:10, width:'0.5rem', display: 'flex',left:'2rem' }}
      onClick={onClick}>
      <img src={ prevArrow } alt=""/>
      </div> 
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
