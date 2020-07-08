import React from "react";

import contactImage from './contact-image.png'
import './Contact.css';

function Contact(){
    return(
        <section className="contact-session">
            <div className="contact-session-form">
                <h1>Contato</h1>
                <form action="" target="_blank">
                    <input type="text" placeholder="Nome" className="first" id="first"/>
                    <input type="text" placeholder="Telefone" className="first"/><br/>
                    <input type="text" placeholder="Email"/><br/>
                    <input type="text" placeholder="Como nos conheceu?"/><br/>
                    <input type="textarea" placeholder="Mensagem" className="message"/><br/>
                    <input type="submit" className="submit"/>
                </form>
            </div> 
            <div className="contact-session-image">
                <img src={contactImage} alt="Contact Session Image"/> 
            </div>
        </section>
    );
}

export default Contact; 