import React from "react";

import './Contact.css';

function Contact(){
    return(
        <footer className="contact-session">
            <img src="" alt="Jacke Menck Pratas footer"/>
            <section className="contact-session-social">
                <div>
                    <img src="" alt="Instagram" className="contact-img"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Instagram<br></br>/@jacquemenckpratas</a>
                    <img src="" alt="Email" className="contact-img"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">jacqueline.guerra@hotmail.com</a>
                </div>
                <div>
                    <img src="" alt="Facebook" className="contact-img"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Facebook<br></br>/@jacquemenckpratas</a>
                    <img src="" alt="Telefone" className="contact-img"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">(87) 99634-2494</a>
                </div>
            </section>
            <section className="contact-session-end">
                <div className="contact-session-adm">
                    <img src="" alt="Portal Administrador"/>
                    <p>Portal do Adminitrador</p>
                </div>
                <div className="contact-session-citi">
                    <p>Made with &lt;&frasl;&gt; and &lt;3 by CITi</p>
                </div>
            </section>
        </footer>
    );
};

export default Contact;