import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {CgWorkAlt} from 'react-icons/cg'
import {FiPhoneCall} from 'react-icons/fi'
import {useState} from 'react'

function Nav() {
  const [activeNav, SetActiveNav] = useState('#header')
  return (

    <nav>
      <a href="#header" onClick={()=>SetActiveNav('#header')}  className={activeNav === '#header' ? 'active':''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>SetActiveNav('#about')}  className={activeNav==='#about'?'active':''} ><FiUser/></a>
      <a href="#experience" onClick={()=>SetActiveNav('#experience')}  className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>SetActiveNav('#portfolio')}  className={activeNav==='#portfolio'?'active':''}><CgWorkAlt/></a>
      <a href="#contact" onClick={()=>SetActiveNav('#contact')}  className={activeNav==='#contact'?'active':''}><FiPhoneCall/></a>
    </nav>
  )
}

export default Nav