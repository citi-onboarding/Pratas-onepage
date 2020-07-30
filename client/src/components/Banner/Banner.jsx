import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";
import url from '../../global/globalVars'; 
import './Banner.css';

import Logo from './useful/logo.svg';
function Banner() {
  const [bannerElements, setBannerElements] = useState([]);

  const loadBannerElements = async () => {
    const res = await axios.get(`${url}/api/banner`);
    setBannerElements(res.data);
  };

  useEffect(() => {
    loadBannerElements();
  }, []);
  return(
    <div id="home">
      {bannerElements && bannerElements[0]?
      <section className="banner-container" style={{backgroundImage:`url('${bannerElements[0].background[0]?.url}')`}}>
          <div key={bannerElements[0]._id} className="brand-container">
            <img className="logo-banner" src={Logo} alt="logo"/>
            <h1 className="title-banner">{bannerElements[0].text}</h1>
            <p className="subtitle-banner">Joias em prata de diferentes lugares do mundo</p>
          </div>
          
          <Link  
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="products-button-banner">
              VEJA NOSSOS PRODUTOS
          </button>
          </Link>
      </section>
      : false}
  </div>
  );
  
};

export default Banner;