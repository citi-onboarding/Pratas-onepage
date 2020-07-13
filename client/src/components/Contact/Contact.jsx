import React from "react";

import './Contact.css';

function Contact(){
    return(
        <section className="contact-session">
            <div className="contact-session-form">
                <form action="" target="_blank">
                    <h1>Contato</h1>
                    <input type="text" placeholder="Nome" className="first" id="first"/>
                    <input type="text" placeholder="Telefone" className="first"/><br/>
                    <input type="text" placeholder="Email"/><br/>
                    <input type="text" placeholder="Como nos conheceu?"/><br/>
                    <input type="textarea" placeholder="Mensagem" className="message"/><br/>
                    <input type="submit" className="submit"/>
                </form>
            </div> 
            <div className="contact-session-secondary">
            </div>
        </section>
    );
}

export default Contact; 