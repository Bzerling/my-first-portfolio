import React from 'react'
import './header.css'
import Cta from './Cta'
import Me from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Maxim Bzerling</h1>
        <h5 className="text-light">React Developer</h5>

        <Cta />
        <Socials />

        <div className="me">
          <img src={Me} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  )
}

export default Header
