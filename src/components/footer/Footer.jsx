import React from 'react'
import './footer.css'
import {
  SlSocialVkontakte,
  SlSocialTwitter,
  SlSocialFacebook,
} from 'react-icons/sl'

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Bzerling
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://vk.com" target="_blank">
          <SlSocialVkontakte />
        </a>
        <a href="https://twitter.com" target="_blank">
          <SlSocialTwitter />
        </a>
        <a href="https://facebook.com" target="_blank">
          <SlSocialFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bzerling. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
