import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';
import pen from '../../images/pen.png'
import useAppContext from '../../Context/UseAppContext';


const Contact = () => { 

    const { languageSelection } = useAppContext();

   const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_86uzq1f', 'template_29b8q2i', e.target, 'user_QCQLrpkOhJhKGDFs7I4oR')
          .then((result) => {
              console.log("aaaa" + result.text);
              alert("your message is been sent");
          }, (error) => {
              console.log(error.text);
          });
      }
	
	return ( 
        <div className="contact_form">

<div className="izquierda">
            {languageSelection ==="Es"
            ? 
                <>
                    <h2> Contactame</h2>
                    <h3> Encantado de ayudar a pasar de la idea a la accion </h3>
                    <img src={pen}></img> 
                </>
            : languageSelection==="En"
            ? 
                <>
                    <h2> Contact me</h2>
                    <h3> Glad to help to transform ideas into action </h3>
                    <img src={pen}></img> 
                </>
                : 
                    <>
                        <h2> Contacte-me</h2>
                        <h3> Um prazer am ajudar a passar das ideias à ação</h3>
                        <img src={pen}></img> 
                    </>
            }

            </div>

            <form onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder={languageSelection==="Es"? "Nombre" : languageSelection==="En" ? "Name" : "Nome"}/>
            
                <input type="email" name="user_email" placeholder="Mail"/>
                <textarea className="message" name="message" placeholder={languageSelection==="Es"? "Mensaje" : languageSelection==="En" ? "Messsage" : "Mensagem"}/>
                <input className="button" type="submit" value={languageSelection==="Es" ? "Enviar" : languageSelection==="En" ? "Send" : "Enviar"}/>
            </form>



      </div>
	);
}

export default Contact;