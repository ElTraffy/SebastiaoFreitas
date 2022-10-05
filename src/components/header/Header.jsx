import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1> Sebastian Freitas</h1>
        <h5 className = "text-light">Game Programmer</h5>
        <CTA/>
        <HeaderSocials/>
{/*
  <a href='#contact' className='scroll__down'>Scroll Down</a>*/}
      </div>

    </header>
  )
}

export default Header