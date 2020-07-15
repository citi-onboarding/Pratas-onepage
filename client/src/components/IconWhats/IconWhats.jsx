import React from "react";
import iconwhats from './icon-whats.png';

import './IconWhats.css';

function IconWhats() {
    return(
        <div className="whatsapp-icon">
            <a class="icon-link" target="_blank" href="">
                <img className="icon" src={iconwhats} alt="Whatsapp"/>
            </a>
        </div>
    ); 
};

export default IconWhats;