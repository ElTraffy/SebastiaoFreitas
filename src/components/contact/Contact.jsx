import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const contact = () => {
  return (
    <section id='contact'> 
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
      
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4> Email</h4>
          <h5> sebsfrets@gmail.com</h5>
          <a href="mailto:sebsfrets@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4> WhatsApp</h4>
          <h5> +351912963489</h5>
          <a href="https://api.whatsapp.com/send?phone=351912963489" target="_blank">Send a message</a>
        </article>

      </div>
    </div>
    </section>
  )
}

export default contact