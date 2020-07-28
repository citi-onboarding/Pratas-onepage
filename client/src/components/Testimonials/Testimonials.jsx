import React, {useState, useEffect } from "react";
import axios from 'axios';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Testimonials.css';
import imgTestimonials from './assets/img-testimonials.png';
import imgAspasD from './assets/img-aspasD.png';
import imgAspasE from './assets/img-aspasE.png';


function Testimonials() {

    const [testimonial, setTestimonial] = useState([]);
    const loadTestimonial = async ()=>{
        const res = await axios.get('http://localhost:3001/api/testimonies');
        setTestimonial(res.data);
    }

    useEffect(()=>{
        loadTestimonial();
    }, []);

     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "carrossel-dots",
     }

    return(
        
        <section className="testimonials-session" id="testimonials">
            <div className="testimonials-session-title">
                <h1 className="title">Depoimentos</h1>
                <div className="session-subtitle">
                    <h2 className="subtitle">Veja o que nossos clientes falam</h2>
                </div>
            </div>
            <div className="testimonials-session-carrossel">
                <Slider {...settings}>
                        {testimonial?.map(({ _id, depoimento, lugar, nome, image })=>(
                        <div>
                            <div className="carrossel-item" id={_id}>
                                <img src={image[0]?.url} alt="Testimonials Imagem" className="carrossel-image"/>
                                <div className="carrossel-text">
                                    <h4 className="text-people">{nome}</h4>
                                        <p className="text-testimonial"><img src={imgAspasE} alt="Aspas Esquerda"/><br/>{depoimento}<img src={imgAspasD} alt="Aspas Direita"/></p>
                                    <h5 className="text-place">{lugar}</h5>    
                                </div>
                            </div>
                        </div>
                        ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;