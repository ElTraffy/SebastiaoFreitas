import React from 'react'
import './portfolio.css'
import HeavyLight from '../../assets/heavylight.png'
import VoidScape from '../../assets/voidscape.png'


const data = [
  {
    id: 1,
    image: VoidScape,
    title: 'VoidScape',
    demo:'https://sebastiaofreitas.itch.io/voidscape'
  },
  {
    id: 2,
    image: HeavyLight,
    title: 'HeavyLight',
    demo:'https://sebastiaofreitas.itch.io/HeavyLight'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'> 
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

        {
          data.map(({id, image, title, demo}) => {
            return (        
            <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className='.portfolio__item-cta' >
              <a href={demo} className='btn btn.primary' target = '_blank'> Play Now</a>
            </div>
          </article>)
          }) 
        }



      </div>
    </section>
  )
}

export default Portfolio