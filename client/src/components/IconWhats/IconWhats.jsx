import React, { useState, useEffect } from "react";
import axios from "axios";
import url from '../../global/globalVars';
import iconwhats from './icon-whats.png';

import './IconWhats.css';

function IconWhats() {
    const [whats, setWhats] = useState([]);

    const loadWhats = async () => {
        const res = await axios.get(`${url}/api/footer`);
        setWhats(res.data);
    };

    useEffect(()=>{
        loadWhats();
    }, []);

    return(
        <div className="whatsapp-icon">
            {whats?.map(({ Whatsapp })=>(
                <a class="icon-link" target="_blank" rel="noopener noreferrer" href={Whatsapp}>
                    <img className="icon" src={iconwhats} alt="Whatsapp"/>
                </a>
            ))};
        </div>
    ); 
};

export default IconWhats;