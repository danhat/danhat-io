import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot.png'

const Header = () => {
  return (

    <header>

      <div className="container header__container" id="home">
        <h5>Hello, I'm</h5>
        <h1>Danielle Hatten</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

      </div>

    </header>
  )
}

export default Header