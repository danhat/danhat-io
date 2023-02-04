import React from 'react'
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>danhat</a>

      <div className="footer__socials">
        <a href="https://github.com/danhat" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a>
        <a href="https://linkedin.com/in/danhat" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; danhat. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer