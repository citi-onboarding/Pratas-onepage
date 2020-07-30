import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../global/globalVars'; 
import Target from './useful/target.png';
import Strategy from './useful/strategy.png';
import Value from './useful/value.png';

import './AboutUs.css';

const AboutUs = () => {
  const [aboutus, setAboutus] = useState([]);

  const loadAboutus = async () => {
    const res = await axios.get(`${url}/api/aboutUs`);
    setAboutus(res.data);
  };

  useEffect(() => {
    loadAboutus();
  }, []);

  return(

    <div id="aboutus">
    {aboutus?.map(({ TextoInspirador, Titulo, Valor, Missao, Visao, Imagem }) => (

      <section id="about-us" className="about-us">
        <div className="title-container-about-us">
        <h1 className="title-about-us">SOBRE NÓS</h1>
        <div className="background-about-us">
        <h2 className="subtitle-about-us">{Titulo}</h2>
        </div>
      </div>

      <div className="information-container-about-us">
        <img className="owner-picture" src={Imagem[0]?.url} alt="dona da Pratas"/>

        <div className="text-and-values">
        <p className="about-us-text">{TextoInspirador}</p>

          <div className="values-container">
            
            <div className="each-value">
              <img className="values-icons" src={Target} alt="mission"/>
              <p className="values-text">{Missao}</p>
            </div>

            <div className="each-value">
              <img className="values-icons" src={Strategy} alt="vision"/>
              <p className="values-text">{Visao}</p>
            </div>

            <div className="each-value">
            <img className="values-icons" src={Value} alt="value"/>
            <p className="values-text">{Valor}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    ))};

    </div>
  );

}

export default AboutUs;
