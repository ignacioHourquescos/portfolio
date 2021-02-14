import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';
import pen from '../../images/pen.png'


const Contact = () => { 

   const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_86uzq1f', 'template_29b8q2i', e.target, 'user_QCQLrpkOhJhKGDFs7I4oR')
          .then((result) => {
              console.log("aaaa" + result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
	
	return ( 
        <div className="contact_form">

<div className="izquierda">
                <h2> Contactame</h2>
                <img src={pen}></img> 
            </div>

            <form onSubmit={sendEmail}>

               
                <input type="text" name="user_name" placeholder="Name"/>

                <input type="email" name="user_email" placeholder="email" />

                <textarea className="message" name="message" placeholder="Message" />

                <input className="button" type="submit" value="Send" />
            </form>



      </div>
	);
}

export default Contact;