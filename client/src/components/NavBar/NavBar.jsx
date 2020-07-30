import React, { useState, useEffect } from "react";
import axios from "axios";
import url from '../../global/globalVars';
import logoNavBar from './assets/logo-navbar.png';
import iconTelefone from './assets/icon-telefone.png';
import iconFacebook from './assets/icon-facebook.png';
import iconInstagram from './assets/icon-instagram.png';
import iconEmail from './assets/icon-email.png';

import './NavBar.css';


function NavBar(){
    const [links, setLinks] = useState([]);
    const [show, setShow] = useState(true);

    const loadLinks = async () => {
        const res = await axios.get(`${url}/api/footer`);
        setLinks(res.data);
    }

    const menu = () => {
        const menuSession = document.querySelector('.menu-session');
        if (menuSession !== undefined){
            menuSession.classList.toggle("on", show);
            setShow(!show);
        };
    };

    useEffect(()=>{
        loadLinks();
    }, []);

    return(
        <header className="nav-bar">
            <img src={logoNavBar} alt="Logo NavBar" className="logo-header"/>
            <section className="menu-session">
            <div className="menu-toggle" onClick={()=>{menu()}}>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>
            <nav>
                <ul className="nav-bar-menu">
                    <li><a href="#home" onClick={()=>{menu()}}>Home</a></li>
                    <li><a href="#products" onClick={()=>{menu()}}>Produtos</a></li>
                    <li><a href="#aboutus" onClick={()=>{menu()}}>Sobre Nós</a></li>
                    <li><a href="#testimonials" onClick={()=>{menu()}}>Depoimentos</a></li>
                    <li><a href="#contact" onClick={()=>{menu()}}>Contatos</a></li>
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