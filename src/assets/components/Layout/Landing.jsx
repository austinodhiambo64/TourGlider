import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Home from './Home'

function Landing() {
  return (
    <div className='home'>
        <Header />
        <Menu />
        <Home />
        <Footer/>
    </div>
  )
}

export default Landing