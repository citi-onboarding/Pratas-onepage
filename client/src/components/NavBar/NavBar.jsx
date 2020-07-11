import React, { useState } from "react";

import logoNavBar from './logo-navbar.png';
import './NavBar.css';


function NavBar(){

    const [menuSession, setSession] = useState();
    const [show, setShow] = useState(true);

    return(
        <header className="nav-bar">
            <img src={logoNavBar} alt="Logo NavBar"/>
            <section className="menu-session">
            <div className="menu-toggle" onClick={()=>{
                setSession(document.querySelector('.menu-session'));
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
            </section>
        </header>
    );
};

export default NavBar;