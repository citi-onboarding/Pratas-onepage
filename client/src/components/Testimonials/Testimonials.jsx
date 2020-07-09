import React from "react";

import './Testimonials.css'

function Testimonials() {
    return(
        <section className="testimonials-session">
            <div className="testimonials-session-title">
                <h1>Depoimentos</h1>
                <div className="session-subtitle">
                    <h2>Veja o que nossos clientes falam</h2>
                </div>
            </div>
            <div className="testimonials-session-carrossel"></div>
        </section>
    );
};

export default Testimonials;