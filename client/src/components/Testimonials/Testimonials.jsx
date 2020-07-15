import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Testimonials.css';
import imgTestimonials from './img-testimonials.png';
import imgAspasD from './img-aspasD.png';
import imgAspasE from './img-aspasE.png';


function Testimonials() {

     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "carrossel-dots",
     }

    return(
        <section className="testimonials-session">
            <div className="testimonials-session-title">
                <h1 className="testimonial-title">Depoimentos</h1>
                <div className="session-subtitle">
                    <h2 className="calling-to-testimonial">Veja o que nossos clientes falam</h2>
                </div>
            </div>
            <div className="testimonials-session-carrossel">
                <Slider {...settings}>
                    <div className="carousel-div-between-items">
                        <div className="carrossel-item-testimonial">
                            <img src={imgTestimonials} alt="Testimonials Imagem" className="carrossel-image-testimonial"/>
                            <div className="carrossel-text-testimonial">
                                <h4 className="client-name-testimonial">Josimeire Pinheiro</h4>
                                <p className="testimonial-itself"><img src={imgAspasE} className="aspas-testimonial" alt="Aspas Esquerda"/><br/>Eu amo Prata! Gosto de usar muitas coisas ao mesmo tempo. 
                                Eu não uso apenas acessórios, e sim alegorias e adereços... rsrsrs. 
                                Quem me conhece sabe disso! E depois que conheci Jaqueline (Jack Menck Pratas)
                                , há mais de 12 anos, tudo aumentou! Muitos anéis, muito tudo. Pois ela tem produtos
                                exclusivos de qualidade e bom preço. Tudo de excelência. Sempre disponível e a disposição 
                                para agradar as clientes. Hoje é minha amiga. Mora no coração. <img src={imgAspasD} className="aspas-testimonial" alt="Aspas Direita"/></p>
                                <h5 className="city-client-testimonial">- Juazeiro (Bahia)</h5>    
                            </div>
                        </div>
                    </div>
                    <div className="carousel-div-between-items">
                        <div className="carrossel-item-testimonial">
                            <img src={imgTestimonials} alt="Testimonials Imagem" className="carrossel-image-testimonial"/>
                            <div className="carrossel-text-testimonial">
                                <h4 className="client-name-testimonial">Josimeire Pinheiro</h4>
                                <p className="testimonial-itself"><img src={imgAspasE} className="aspas-testimonial" alt="Aspas Esquerda"/><br/>Eu amo Prata! Gosto de usar muitas coisas ao mesmo tempo. 
                                Eu não uso apenas acessórios, e sim alegorias e adereços... rsrsrs. 
                                Quem me conhece sabe disso! E depois que conheci Jaqueline (Jack Menck Pratas)
                                , há mais de 12 anos, tudo aumentou! Muitos anéis, muito tudo. Pois ela tem produtos
                                exclusivos de qualidade e bom preço. Tudo de excelência. Sempre disponível e a disposição 
                                 para agradar as clientes. Hoje é minha amiga. Mora no coração. <img src={imgAspasD} className="aspas-testimonial" alt="Aspas Direita"/></p>
                                <h5 className="city-client-testimonial">- Juazeiro (Bahia)</h5>    
                            </div>
                        </div>
                    </div>
                    <div className="carousel-div-between-items">
                        <div className="carrossel-item-testimonial">
                            <img src={imgTestimonials} alt="Testimonials Imagem" className="carrossel-image-testimonial"/>
                            <div className="carrossel-text-testimonial">
                                <h4 className="client-name-testimonial">Josimeire Pinheiro</h4>
                                <p className="testimonial-itself"><img src={imgAspasE} className="aspas-testimonial" alt="Aspas Esquerda"/><br/>Eu amo Prata! Gosto de usar muitas coisas ao mesmo tempo. 
                                Eu não uso apenas acessórios, e sim alegorias e adereços... rsrsrs. 
                                Quem me conhece sabe disso! E depois que conheci Jaqueline (Jack Menck Pratas)
                                , há mais de 12 anos, tudo aumentou! Muitos anéis, muito tudo. Pois ela tem produtos
                                exclusivos de qualidade e bom preço. Tudo de excelência. Sempre disponível e a disposição 
                                 para agradar as clientes. Hoje é minha amiga. Mora no coração. <img src={imgAspasD} className="aspas-testimonial" alt="Aspas Direita"/></p>
                                <h5 className="city-client-testimonial">- Juazeiro (Bahia)</h5>    
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;