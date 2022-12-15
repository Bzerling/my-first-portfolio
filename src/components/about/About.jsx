import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers, FiFolderPlus } from 'react-icons/fi'
import './about.css'
import Me from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Happy Clients</small>
            </article>
            <article className="about__card">
              <FiFolderPlus className="about__icon" />
              <h5>Projects</h5>
              <small>61+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt
            soluta quidem dolor recusandae consectetur quisquam itaque assumenda
            laboriosam, sequi sed eius animi repudiandae nesciunt iste. Quisquam
            quaerat mollitia sint.
          </p>
          <a href="#contact" className="btn btn-primary">
            Message Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
