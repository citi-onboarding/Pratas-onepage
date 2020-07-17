import React, { useState } from "react";

import logoNavBar from './logo-navbar.png';
import iconTelefone from './icon-telefone.png';
import iconFacebook from './icon-facebook.png';
import iconInstagram from './icon-instagram.png';
import iconEmail from './icon-email.png';

import './NavBar.css';


function NavBar(){
    const [show, setShow] = useState(true);

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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Produtos</a></li>
                    <li><a href="#aboutus">Sobre Nós</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                    <li><a href="#contact">Contatos</a></li>
                </ul>
            </nav>
            <div className="icons-menu">
                <a href="#"><img src={iconTelefone} alt="Icon Telefone"/></a>
                <a href="#"><img src={iconInstagram} alt="Icon Instagram"/></a>
                <a href="#"><img src={iconFacebook} alt="Icon Facebook"/></a>
                <a href="#"><img src={iconEmail} alt="Icon Email"/></a>
            </div>
            </section>
        </header>
    );
};

export default NavBar;