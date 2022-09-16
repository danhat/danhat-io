import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot.png'
import Nav from '../nav/Nav'

const Header = () => {
  return (

    <header className='bg-light'>

      <Nav/>
      
      <div className="container header__container" id="home">
        
          <div className="about_headshot">
          <div className="me">
            <img src={ME} alt="me"/>
          </div>
          </div>

          <div className="about_details">
          <h4>Hello, I'm</h4>
          <h1>Danielle Hatten</h1>
          <h5 className="text-light">Web Developer<br></br>Greater Chicago Area</h5>
          <CTA/>
          </div>
        
        
      </div>

    </header>
  )
}

export default Header