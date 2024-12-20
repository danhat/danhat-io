import React, { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'





const CTA = () => {
  const form = useRef();

  const [isOpen, setIsOpen] = useState(false)

  

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);

    alert('Message sent.')
    e.target.reset();
    setIsOpen(!isOpen)
  };


  const togglePopUp = () => {
    setIsOpen(!isOpen)
  }

  
  
  
  return (
    <div className="cta">
      
      <a onClick={togglePopUp} className='btn btn-primary'>Message Me</a>
      {
        isOpen && (
          <div className='popup-inner'>
            <a onClick={togglePopUp} className='closeButton'><FontAwesomeIcon icon={faXmark} /></a>
            <h3>Send me a message about anything!</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="7" placeholder="Your Message" required />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default CTA