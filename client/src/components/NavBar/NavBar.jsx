import React from "react";

import logoNavBar from './logo-navbar.png';
import './NavBar.css';


function NavBar(){
    return(
    <section>
        <header className="nav-bar">
            <img src={logoNavBar} alt="Logo NavBar"/>
            <nav>
                <ul className="nav-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Depoimentos</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </header>
        <p>
            Teste <br/>
            Teste <br/>
            Teste <br/>
            Teste <br/>
        </p>
        </section>
    );
};

export default NavBar;