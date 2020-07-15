import React from "react";

import './IconWhats.css';

function IconWhats() {
    return(
        <div className="whatsapp-icon">
            <a class="icon-link" target="_blank" href="">
                <img className="icon" src="whatsapp.png" alt="Whatsapp"/>
            </a>
        </div>
    ); 
};

export default IconWhats;