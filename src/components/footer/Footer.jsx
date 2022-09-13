import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>danhat</a>

      <div className="footer__socials">
        <a href="https://github.com/danhat" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://linkedin.com/in/danhat" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; danhat. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer