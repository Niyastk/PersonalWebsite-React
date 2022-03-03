import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className="cta" >
      <a className="btn" href={CV} download >Download CV</a>
      <a className="btn btn-primary" href="#contact">Lets Talk</a>
    </div>
  )
}

export default CTA