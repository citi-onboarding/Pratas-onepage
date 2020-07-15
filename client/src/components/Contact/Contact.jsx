import React from "react";

import './Contact.css';

function Contact(){
    return(
        <section className="contact-session">
            <div className="contact-session-form">
                <form className="form-contact" action="" target="_blank">
                    <h1 className="title-contact">Contato</h1>
                    <input type="text" placeholder="Nome" className="first-line" id="first"/>
                    <input type="text" placeholder="Telefone" className="first-line"/><br/>
                    <input type="text" placeholder="Email"/><br/>
                    <input type="text" placeholder="Como nos conheceu?"/><br/>
                    <input type="textarea" placeholder="Mensagem" className="message"/><br/>
                    <input type="submit" className="submit" placeholder="Enviar"/>
                </form>
            </div> 
            <div className="contact-session-secondary">
            </div>
        </section>
    );
}

export default Contact; 