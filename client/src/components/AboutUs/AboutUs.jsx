import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Target from './useful/target.png'
import Strategy from './useful/strategy.png'
import Value from './useful/value.png'

import './AboutUs.css';

const AboutUs = () => {
  const [informations, setInformations] = useState([]);

  const loadInformations = async () => {
    const res = await axios.get('http://localhost:3001/api/informations');
    setInformations(res.data);
  };

  useEffect(() => {
    loadInformations();
  }, []);

  return(
    <section className="about-us">
      <div className="title-container">
        <h1 className="title-about-us">SOBRE NÓS</h1>
        <div className="background">
          <h2 className="subtitle-about-us">CONHEÇA NOSSA HISTÓRIA</h2>
        </div>
      </div>

      <div className="information-container">
        <img className="owner-picture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEXz9Pa6vsn29/nN0Ni2usa7v8rW2N/o6e3w8fPCxs/GytLi5Oiyt8L19ve0uMW3u8bc3uPe4ebq7O7LztbR1dsrnhpbAAADyUlEQVR4nO2biXabMBQFLTaxFIRt/v9baxZjkBEmINcv7szpyWnSlDC54mlDpxMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAiQRn4pAw+LWSRFknol0Snn5aaEOhcGd+oXMvJsVZG+ceo+tNiA0ERvcGvoyg/LddSptk7EuzIPi3XU0dxeze+H8PumrWIRzHsf9+511Ka9xcNJTTTMut+24nX7jAIkq5l5CK6jM6wKvxetCz+CDOMCr9PTCDOsPJc2OUZ2hkGB4XlGc4zTHVRXA7dnDjDeGJY6qb7Ulan+59NcYaTVpqGZhjFRdl590UFG6ZhpOJh0GXUbkV5htXdMDR3v5Z4b4mVZxj1KvY8w+wdO8sz7DMsT7k1z9g7EpBnOGSoZ220/Xq476LyDIfe4qwsQ7N+j86E5RkOrTFRNtll5b+GkWuhQp7hkOHPDJtbWUqWi608wyHD2hY0mfsem7YqOabx8gyHDC8/qDTh0LEkS/8oz/DeK2RWhtHZVUuasV9ZSlGc4X3kfevxZyGazDWmuT7SNgvlRpzhOHtKr/N26hq1NbOxz3OK8gwfI+9rNOkTHSPvNLQGd08pyjN8zA/TUN0c41iZKHMtT4VPq+R2ivIMp+PPIoyrKjJZ4uoKm4VtAEtRnmE1MSxPqdb64pzhXxf3OeYNVZ5hZJWUlWlh49jmmKUo0XDjLMkuto5yI89w83rp0jO4kKI4w3hjhmm4thM3mWmIM9ya4aqgmoxR5RkuZ6gvc29XkXluqPIMFzPUcTZ72+BVgqotN/11foVhoLN2evhQfJ3gI0V5hgutVLe3aDI9fLpeZB5E3VhWnuFThm2Cqlfs3de6iZlh0n6/PMOnDPW4tN+t1KTbmqhgQztDHY9GtxTLLUVGuOE8w1JPVzNuKW5OUK7hPMNJgp2ico1Ff5HhNMNbkTnwlpRUw+n80ErwSwwf88PyUIJyDccMS739kftVhmOGx5qoXMNxRfhyMEGxhvdaerSJCja8764df5lWqqFzh/RrDJ07pF9jSIa/3jD+esP/oJV+v2H19YbDuLTdVjtKt+soz3DI0Mfr7MMrD9IM7f3Do0g0/PLzFnHk+cxMUFSyDG8V0O854FNTKTGGw9m161vOrn1aruM8nD+MvNIJGs9tfyfvPEMqopGeyuJdgspzgd5PfXR9bRET7z9y4x2dxybyfBA4zrWEI7Ijuk78UuvXP/SfU7Z/7h/64eXSh/GvL74ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCVv9bCR0PZSDA6AAAAAElFTkSuQmCC" alt="dona da Pratas"/>

        <div className="text-and-values">
          <p className="about-us-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>

          <div className="values-container">
            
            <div className="each-value">
              <img className="values-icons" src={Target} alt="mission"/>
              <p className="values-text">Nossa missão é oferecer produtos únicos e com garantia</p>
            </div>

            <div className="each-value">
              <img className="values-icons" src={Strategy} alt="vision"/>
              <p className="values-text">Nossa visão é ser referência na venda online de pratas</p>
            </div>

            <div className="each-value">
            <img className="values-icons" src={Value} alt="value"/>
            <p className="values-text">Nossos valores se baseiam na excelência, transparência, qualidade e segurnça</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );

}

export default AboutUs;
