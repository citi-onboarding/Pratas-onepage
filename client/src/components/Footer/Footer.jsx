import React from "react";

import './Footer.css';

function Footer(){
    return(
        <footer className="footer-session">
            <img src="" alt="Jacke Menck Pratas footer"/>
            <section className="footer-session-social">
                <div>
                    <img src="" alt="Instagram" className="footer-img"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Instagram<br></br>/@jacquemenckpratas</a>
                    <img src="" alt="Email" className="footer-img"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">jacqueline.guerra@hotmail.com</a>
                </div>
                <div>
                    <img src="" alt="Facebook" className="footer"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Facebook<br></br>/@jacquemenckpratas</a>
                    <img src="" alt="Telefone" className="footer-img"/>
                    <a href="http://" target="_blank" rel="noopener noreferrer">(87) 99634-2494</a>
                </div>
            </section>
            <section className="footer-session-end">
                <div className="footer-session-adm">
                    <img src="" alt="Portal Administrador"/>
                    <p>Portal do Adminitrador</p>
                </div>
                <div className="footer-session-citi">
                    <p>Made with &lt;&frasl;&gt; and &lt;3 by CITi</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;