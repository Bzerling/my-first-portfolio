import React from 'react'
import './contact.css'
import { TfiEmail } from 'react-icons/tfi'
import { SiTelegram } from 'react-icons/si'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Stay in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>google@gmail.com</h5>
            <a href="mailto:google@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Telegram</h5>
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
