import React from 'react'
import {Link} from 'react-scroll'
import './nav.css'
import {useState, useEffect, Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faList, faBriefcase, faMessage } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {

  const [isSmall, setSmall] = useState(window.innerWidth <= 600);

  const updateNav = () => {
    setSmall(window.innerWidth <= 600)
  }

  useEffect(() => {
    window.addEventListener("resize", updateNav);
    return () => window.removeEventListener("resize", updateNav);
  });

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
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
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faHouse} /> : 'Home'}</Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faUser} /> : 'About'}</Link>
      <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}>{isSmall ? <FontAwesomeIcon icon={faList} /> : 'Skills'}</Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faBriefcase} /> : 'Portfolio'}</Link>
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FontAwesomeIcon icon={faMessage} /> : 'Contact'}</Link>
    </nav>
    </Fragment>
    
  )
}


export default Nav