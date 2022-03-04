import React from 'react'
import './portfolio.css'
import bluemoon from '../../assets/bluemoon.png'
import olx from '../../assets/olx.png'
import netflix from '../../assets/Netflix.png'
import sps from '../../assets/sps.png'
import portfolio from '../../assets/portfolio.png'
import nvidia from '../../assets/nvidia.png'
import acer from '../../assets/acer.png'
import apple from '../../assets/apple.png'

const data =[
  {id:1,
  image:bluemoon,
  title:"BlueMoon ECommerce",
  github:'https://github.com/Niyastk/BlueMoon-Ecommerce',
  // demo:'https://github.com'
},
  {id:2,
  image:olx,
  title:"OLX clone",
  github:'https://github.com/Niyastk/Ract-olx',
  // demo:'https://github.com'
},
  {id:3,
  image:netflix,
  title:"Netflix clone",
  github:'https://github.com/Niyastk/React-netflix-API',
  // demo:'https://github.com'
},
  {id:4,
  image:sps,
  title:"SPS Site clone",
  github:'https://github.com/Niyastk/SPS-site',
  demo:'https://niyastk.github.io/SPS-site/'
},
  {id:5,
  image:portfolio,
  title:"My Portfolio",
  github:'https://github.com/Niyastk/PersonalWebsite-React',
  demo:'https://niyas.tech/'
},
  {id:6,
  image:nvidia,
  title:"Nvidia Site clone",
  github:'https://github.com/Niyastk/NVIDIA-site',
  demo:'https://niyastk.github.io/NVIDIA-site/'
},
  {id:7,
  image:acer,
  title:"Acer site clone",
  github:'https://github.com/Niyastk/Acer-site',
  demo:'https://niyastk.github.io/Acer-site/'
},
  {id:8,
  image:apple,
  title:"Apple Site clone",
  github:'https://github.com/Niyastk/Apple-site',
  demo:'https://niyastk.github.io/Apple-site/'
},
]

const Portfolio = () => {
  return <section id='portfolio'>
    <h5>My Works</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio__item" >
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank" >GitHub</a>
                <a href={demo} className="btn btn-primary" target="__blank">Live Demo</a>
              </div>
            </article>
          )
        })
      }
    </div>
  </section>
}

export default Portfolio
