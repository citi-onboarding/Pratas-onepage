import React, { useState, useEffect } from "react";
import axios from "axios";

import logoNavBar from './logo-navbar.png';
import iconTelefone from './icon-telefone.png';
import iconFacebook from './icon-facebook.png';
import iconInstagram from './icon-instagram.png';
import iconEmail from './icon-email.png';

import './NavBar.css';


function NavBar(){
    const [links, setLinks] = useState([]);
    const [show, setShow] = useState(true);

    const loadLinks = async () => {
        const res = await axios.get('http://localhost:3001/api/footer');
        setLinks(res.data);
    }
    
    useEffect(()=>{
        loadLinks();
    }, []);

    return(
        <header className="nav-bar">
            <img src={logoNavBar} alt="Logo NavBar" className="logo-header"/>
            <section className="menu-session">
            <div className="menu-toggle" onClick={()=>{
                const menuSession = document.querySelector('.menu-session');
                document.body.style.overflow = show? "hidden" : "initial";
                if (menuSession !== undefined){
                    menuSession.classList.toggle("on", show);
                    setShow(!show);
                }
            }}>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>
            <nav>
                <ul className="nav-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Depoimentos</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
            {links?.map(({ Instragram, Facebook, Email, Telefone })=>(
                <div className="icons-menu">
                    <a href={Telefone}><img src={iconTelefone} alt="Icon Telefone"/></a>
                    <a href={Instragram}><img src={iconInstagram} alt="Icon Instagram"/></a>
                    <a href={Facebook}><img src={iconFacebook} alt="Icon Facebook"/></a>
                    <a href={Email}><img src={iconEmail} alt="Icon Email"/></a>
                </div>
            ))};
            </section>
        </header>
    );
};

export default NavBar;