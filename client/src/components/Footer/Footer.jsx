import React, {useEffect, useState} from "react";
import axios from "axios";
import url from '../../global/globalVars'; 
import logoFooter from './assets/logo-footer.png';
import iconFacebook from './assets/icon-facebook.png';
import iconInstagram from './assets/icon-instagram.png';
import iconPortal from './assets/icon-portal.png'

import './Footer.css';

function Footer(){
    const [footer, setFooter] = useState([]);

    const loadFooter = async() => {
        const res = await axios.get(`${url}/api/footer`);
        setFooter(res.data);
    };

    useEffect(()=>{
        loadFooter();
    }, []);

    return(
        <footer>
            {footer?.map(({ AdminURL, Telefone, Email, Facebook, Instragram }) => (
                <footer>
                <section className="footer-session-main">
                    <img src={logoFooter} alt="Jacke Menck Pratas footer" className="logoFooter"/>
                <div>
                    <h3>CONTATO</h3>
                    <p className="sup">{Telefone}</p>
                    <p >{Email}</p>
                </div>
                <div>
                    <h3>SIGA-NOS</h3>
                    <div className="icons-footer">
                        <a href={Facebook} target="_blank" rel="noopener noreferrer" className="sup">
                            <img src={iconFacebook} alt="Facebook" className="icon-footer"/>
                        </a>
                        <a href={Instragram} target="_blank" rel="noopener noreferrer" className="sup">
                            <img src={iconInstagram} alt="Instagram" className="icon-footer"/>
                        </a>
                    </div>
                    <a href={AdminURL} target="_blank" rel="noopener noreferrer">
                    <img src={iconPortal} alt="Portal Administrador" className="icon-portal"/>
                    </a> 
                </div>
                </section>
                <section className="footer-session-secondary">
                    <p>&copy; 2020 CITi - Todos os direitos reservados</p>
                    <p className="made">Made with &lt;&frasl;&gt; and &hearts;</p>
                </section>
                </footer>
            ))};
        </footer>
    );
};

export default Footer;