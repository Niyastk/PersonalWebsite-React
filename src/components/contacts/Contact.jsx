import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {IoLogoInstagram} from 'react-icons/io'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mtyhdnn', 'template_4u3jk4h', form.current, 'IaWxYfP416b0-Nx6G')
    alert("Message has been submitted")
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
        <HiOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>niyastk9562@gmail.com</h5>
          <a href="mailto:niyastk9562@gmail.com">Send a Message</a>
        </article>
        <article className="contact__option">
        <IoLogoInstagram className="contact__option-icon"/>
          <h4>Instagram</h4>
          <h5>_niyas_nz</h5>
          <a href="https://instagram.com/_niyas_nz" target="__blank">Send a Message</a>
        </article>
        <article className="contact__option">
        <ImWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <a href="https://api.whatsapp.com/send?phone=+919562127608" target="__blank" >Send a Message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
        <button className="btn btn-primary" type="submit" >Send Message</button>
      </form>
    </div>
  </section>
}

export default Contact
