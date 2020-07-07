import React from "react";

import './Contact.css';

function Contact(){
    return(
        <section className="contact-session">
            <div className="contact-session-form">
                <h1>Contato</h1>
                <form action="" target="_blank">
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Telefone"/><br/>
                    <input type="text" placeholder="Email"/><br/>
                    <input type="text" placeholder="Como nos conheceu?"/><br/>
                    <input type="textarea" placeholder="Mensagem"/><br/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <img src="" alt="Contato Imagem"/>
        </section>
    );
}

export default Contact; 