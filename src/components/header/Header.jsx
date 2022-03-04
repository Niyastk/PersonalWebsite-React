import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import Me from '../../assets/dp.png'
import HeaderSocial from './HeaderSocial.jsx'

function Header () {
  return (
    <header id='header'>
      <div className='container header__container '>
        <h5>Hello I'm</h5>
        <h1>Niyas T.K</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={Me} alt='' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
