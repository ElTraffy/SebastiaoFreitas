import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Portfolio />
        <About /> 

        <Contact />
    </>
  )
}

export default App