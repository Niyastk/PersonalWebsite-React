import React from 'react'
import './about.css'
import Me from '../../assets/about_me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {HiOutlineFolderOpen} from 'react-icons/hi'

function About () {
  return <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">

      <div className="about__me">
        <div className="about__me-image">
          <img src={Me} alt="" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>6 Months of Working</small>
          </article>
          <article className="about__card">
            <FaUserGraduate className="about__icon"/>
            <h5>Education</h5>
            <small>A B.com Student</small>
          </article>
          <article className="about__card">
            <HiOutlineFolderOpen className="about__icon"/>
            <h5>Projects</h5>
            <small>2+ Big Projects</small>
          </article>
        </div>
          <p>
          I am self-taught dedicated python Django developer with a flair for creating
          elegant solutions in the least amount of time. Developed an e-commerce web app with multiple functionality and working on react projects at the moment.
          I am searching for a role that allows me to improve my skill as a web developer.
            </p>
          <a href="#contact" className="btn btn-primary" >Lets Talk</a>
      </div>
    </div>
  </section>
}

export default About
