import React from 'react'
import {Link} from 'react-scroll'
import './nav.css'
import {AiTwotoneHome, AiFillProject} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {RiMessage2Fill} from 'react-icons/ri'


const Nav = () => {
  return (
    <nav>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500} ><AiTwotoneHome/></Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={500} ><FaUserAlt/></Link>
      <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}><MdWork/></Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} ><AiFillProject/></Link>
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} ><RiMessage2Fill/></Link>
    </nav>
  )
}


export default Nav