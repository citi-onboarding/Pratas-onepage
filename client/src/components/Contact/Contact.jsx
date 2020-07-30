import React, {useState} from "react";
import axios from "axios";
import url from '../../global/globalVars'; 
import './Contact.css';

function Contact(){
    const sendEmail = async (event) => {
        event.preventDefault();
        axios.post(`${url}/api/contact`, {
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
                    <div className="first-line-contact">
                        <input type="text" placeholder="Nome" className="nome" value={name} onChange={(event) => setName(event.target.value)} />
                        <input type="text" placeholder="Telefone" className="telefone" value={telephone} onChange={(event) => setTelephone(event.target.value)} />
                    </div>  
                    <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <select 
                        id="meeting"
                        className="meeting-dropdown"
                        value={meeting}
                        onChange={(event) => setMeeting(event.target.value)}
                    >
                        <option className="option-meeting" value="" selected disabled>Como nos conheceu?</option>
                        <option className="option-meeting" value="Amigo">Indicação de amigos</option>
                        <option className="option-meeting" value="Instagram">Instagram</option>
                        <option className="option-meeting" value="Facebook">Facebook</option>
                        <option className="option-meeting" value="Outro">Outro</option>
                    </select> 
                    <textarea placeholder="Mensagem" className="message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                    <input type="submit" className="submit" value="Enviar" onClick={() => alert('Enviado')}/>
                </form>
            </div> 
            <div className="contact-session-secondary">
            </div>
        </section>
    );
}

export default Contact; 