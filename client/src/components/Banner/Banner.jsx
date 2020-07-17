import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Banner.css';

import Logo from './useful/logo.svg';

function Banner() {
  const [bannerElements, setBannerElements] = useState([]);

  const loadBannerElements = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    setBannerElements(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadBannerElements();
  }, []);

  return(
    <div id="home">
      {bannerElements?.map(({_id,text,image}) => (
      <section className="banner-container" style={{backgroundImage:`url('${image[0]?.url}')`}}>
          <div key={_id} className="brand-container">
            <img className="logo-banner" src={Logo} alt="logo"/>
            <h1 className="title-banner">{text}</h1>
            <p className="subtitle-banner">Joias em prata de diferentes lugares do mundo</p>
          </div>
          <button className="products-button-banner">
            VEJA NOSSOS PRODUTOS
          </button>
      </section>
      ))}
  </div>
  );
};

export default Banner;