import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Banner.css';

import Logo from './useful/logo.svg';

function Banner() {
  const [bannerElements, setBannerElements] = useState([]);

  const loadBannerElements = async () => {
    const res = await axios.get('http://localhost:3001/api/bannerElements');
    setBannerElements(res.data);
  };

  useEffect(() => {
    loadBannerElements();
  }, []);

  return(
    <section className="banner-container">
      <div className="brand-container">
        <img className="logo-banner" src={Logo} alt="logo"/>
        <h1 className="title-banner">JAQUE MENCK PRATAS</h1>
        <p className="subtitle-banner">Joias em prata de diferentes lugares do mundo</p>
      </div>

      <button className="products-button-banner">
        VEJA NOSSOS PRODUTOS
      </button>
    </section>
  );
};

export default Banner;