import React from 'react'
import './footer.css'
import {AiFillGithub,AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      {/* <a href="#">Nzx</a> */}
      <ul className="permalinks" >
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/Niyastk"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/niyas-tk-59a30b200/"><AiFillLinkedin/></a>
        <a href="https://instagram.com/_niyas_nz"><AiOutlineInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Niyas. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer