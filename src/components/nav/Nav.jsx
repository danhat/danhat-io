import React from 'react'
import {Link} from 'react-scroll'
import './nav.css'
import {AiTwotoneHome, AiFillProject} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {RiMessage2Fill} from 'react-icons/ri'
import {useState, useEffect, Fragment} from 'react'


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
    // <nav>
    //   <Link to="home" spy={true} smooth={true} offset={-100} duration={500} ><AiTwotoneHome/></Link>
    //   <Link to="about" spy={true} smooth={true} offset={-100} duration={500} ><FaUserAlt/></Link>
    //   <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}><MdWork/></Link>
    //   <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} ><AiFillProject/></Link>
    //   <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} ><RiMessage2Fill/></Link>
    // </nav>
    <Fragment>
    <nav className={colorChange ? 'navColorChange' : ''}>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <AiTwotoneHome/> : 'Home'}</Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <FaUserAlt/> : 'About'}</Link>
      <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}>{isSmall ? <MdWork/> : 'Experience'}</Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <AiFillProject/> : 'Portfolio'}</Link>
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >{isSmall ? <RiMessage2Fill/> : 'Contact'}</Link>
    </nav>
    </Fragment>
    
  )
}


export default Nav