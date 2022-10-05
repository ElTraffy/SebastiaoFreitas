import React from 'react'
import './portfolio.css'
import HeavyLight from '../../assets/heavylight.png'
import VoidScape from '../../assets/voidscape.png'


const data = [
  {
    id: 1,
    image: VoidScape,
    title: 'VoidScape',
    description: "A very early version of a first-person rogue-like dungeon crawler. Centered around a complex weapon crafting system, over 50 gameplay changing features and procedural generated maps.",
    demo:'https://sebastiaofreitas.itch.io/voidscape'
  },
  {
    id: 2,
    image: HeavyLight,
    title: 'HeavyLight',
    description: "A small WebGL 2D puzzle platformer. This game was made with the intent of being reusable in future projects that would be completed within a very short time.",
    demo:'https://sebastiaofreitas.itch.io/HeavyLight'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'> 
      <h2>Unity Projects</h2>
      <div className='container portfolio__container'>

        {
          data.map(({id, image, title, description, demo}) => {
            return (        
            <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className='.portfolio__item-cta' >
              <a href={demo} className='btn btn.primary' target = '_blank'>Play Now</a>
            </div>
            <h5 className='portfolio__description'>{description}</h5>

          </article>)
          }) 
        }



      </div>
    </section>
  )
}

export default Portfolio