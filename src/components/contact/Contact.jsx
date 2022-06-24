import React, { useRef } from 'react'
import './contact.css'
// import React, { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm();

    alert('Message sent.')
    e.target.reset();
  };

  return (
    <section id="contact">
      
      <h2>Contact Me</h2>
      <h5>Send Me a Message</h5>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact