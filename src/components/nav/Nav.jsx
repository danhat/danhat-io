import React from 'react'
import {Link} from 'react-scroll'
import './nav.css'
import {useState, useEffect, Fragment} from 'react'
import {useMediaQuery} from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBriefcase, faMessage, faBlog, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Toggle from '../toggle/Toggle'



const Nav = ({isDark, setIsDark}) => {
  // const systemPrefersLight = useMediaQuery (
  //   {
  //     query: '(prefers-color-scheme: light)', 
  //   },
  //   undefined, 
  //   (isSystemLight) => setIsLight(isSystemLight)
  // )


  


  const [isSmall, setSmall] = useState(window.innerWidth <= 600);

  const updateNav = () => {
    setSmall(window.innerWidth <= 600)
  }

  useEffect(() => {
    window.addEventListener("resize", updateNav);
    return () => window.removeEventListener("resize", updateNav);
  });





  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  




  return (
    <Fragment>
    <nav className={colorChange ? 'navColorChange' : ''}>
      <Link className='nav-logo' to='home' spy={false} smooth={true} offset={-100} duration={500}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox='5 29 115 64'>
        <g>
          <path id="D logo-path"
            stroke="var(--color-text)"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 20,34
              L 20,59
              L 20,46.5
              C 5,46.5 5,58 20,58
              "
          />
          <path id="A logo-path"
            stroke="var(--color-text)"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 26,49
              C 26,49 38.5,44 36,59
              L 36,59
              C 23.5,59 23.5,53 35,53
              "
          />
          <path id="N logo-path"
            stroke="var(--color-text)"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 41,46.5
              L 41,59
              C 41,44 53.5,44 51,59
              "
          />
          <path id="H logo-path"
            stroke="var(--color-text)"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 56,34
              L 56,59
              C 56,44 68.5,44 66,59
              "
          />
          <path id="A2 logo-path"
            stroke="var(--color-text)"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 71,49
              C 71,49 83.5,44 81,59
              L 81,59
              C 68.5,58 68.5,53 80,53
              "
          />
          <path id="T logo-path"
            stroke="var(--color-text)"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 89,34
              L 89,54
              C 89,59 93,59 95,58.8
              "
          />
          <path id="TT logo-path"
            stroke="var(--color-text)"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 84,48
              L 94,48
              "
          />
        </g>
      </svg>
      </Link>

      

      <div className='nav-links'>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faHouse} /> : 'Home'}</Link>
        {/* <Link to="about" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faUser} /> : 'About'}</Link> */}
        <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faBriefcase} /> : 'Portfolio'}</Link>
        <Link to="blog" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faBlog} /> : 'Blog'}</Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faMessage} /> : 'Contact'}</Link>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        
      </div>      
     
      
    </nav>
    
    </Fragment>
    
  )
}


export default Nav