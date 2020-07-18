import React, {useState} from "react";
import axios from "axios";

import './Contact.css';

function Contact(){
    const sendEmail = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/contact', {
            name,
            telephone,
            email,
            meeting,
            message
        });
    }

    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [meeting, setMeeting] = useState('');
    const [message, setMessage] = useState('');

    return(
        <section className="contact-session" id="contact">
            <div className="contact-session-form">
                <form onSubmit={sendEmail} target="_blank">
                    <h1 className="contact-title">Contato</h1>
                    <input type="text" placeholder="Nome" className="first" id="first" value={name} onChange={(event) => setName(event.target.value)} />
                    <input type="text" placeholder="Telefone" className="first" value={telephone} onChange={(event) => setTelephone(event.target.value)} /><br/>
                    <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} /><br/>
                    <input type="text" placeholder="Como nos conheceu?" value={meeting} onChange={(event) => setMeeting(event.target.value)} /><br/>
                    <input type="textarea" placeholder="Mensagem" className="message" value={message} onChange={(event) => setMessage(event.target.value)} /><br/>
                    <input type="submit" className="submit" placeholder="Enviar"/>
                </form>
            </div> 
            <div className="contact-session-secondary">
            </div>
        </section>
    );
}

export default Contact; 