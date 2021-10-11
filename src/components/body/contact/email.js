import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zwaecj9', 'outlook_template', form.current, 'user_6OdYAUdpK4aWvwa6KlYA0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="email-button" type="submit" value="Send" />
    </form>
  );
};



export default Email