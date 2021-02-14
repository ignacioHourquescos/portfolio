import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_86uzq1f', 'template_29b8q2i', e.target, 'user_QCQLrpkOhJhKGDFs7I4oR')
//       .then((result) => {
//           console.log("aaaa" + result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }


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