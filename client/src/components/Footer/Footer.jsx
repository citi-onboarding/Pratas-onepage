import React from "react";
import logoFooter from './logo-footer.png';
import iconFacebook from './icon-facebook.png';
import iconInstagram from './icon-instagram.png';
import iconPortal from './icon-portal.png'

import './Footer.css';

function Footer(){
    return(
        <footer>
            <section className="footer-session-main">
                    <img src={logoFooter} alt="Jacke Menck Pratas footer" className="logo-footer"/>
                <div>
                    <h3 className="title-footer">CONTATO</h3>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="sup">(87) 99634-2494</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="email-footer">jacqueline.guerra@hotmail.com</a>
                </div>
                <div>
                    <h3 className="title-footer">SIGA-NOS</h3>
                    <div className="icons-footer">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="sup">
                            <img src={iconFacebook} alt="Facebook" className="icon-footer"/>
                        </a>
                    
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="sup">
                            <img src={iconInstagram} alt="Instagram" className="icon-footer"/>
                        </a>
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="portal-link">
                    <img src={iconPortal} alt="Portal Administrador" className="icon-portal"/>
                    </a> 
                </div>
            </section>
            <section className="footer-session-secondary">
                    <p className="copyright-credits">&copy; 2020 CITi - Todos os direitos reservados</p>
                    <p className="copyright-credits">Made with &lt;&frasl;&gt; and &hearts;</p>
            </section>
        </footer>
    );
};

export default Footer;