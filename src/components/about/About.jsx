import React from 'react'
import './about.css'
// import ME from '../../assets/placeholder-image.png'
import {FaAward, FaHospitalAlt} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    index: 1,
    degree: '<FaAward className="about__icon"/>',
    name: 'Bachelor of Science - Computer Science',
    detail: 'University of Illinois at Chicago'
  },
  {
    index: 2,
    experience: '<FaHospitalAlt className="about__icon"/>',
    name: 'Experience',
    detail: '4+ year programming'
  }
  // {
  //   index: 3,
  //   icon: <FaAward className="about__icon"/>,
  //   name: 'Clients',
  //   detail: '100+ worldwide'
  // },
  // {
  //   index: 4,
  //   icon: <FaAward className="about__icon"/>,
  //   name: 'Projects',
  //   detail: '50+ completed'
  // }
]

const About = () => {
  return (
    <section className='bg-dark' id="about">
      
      <h2>About Me</h2>
      <h5>Get to Know</h5>
      
      <div className="container about__container">
        <Swiper className="about__card-swiper"
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
        >
          {
            data.map(({degree, experience, name, detail}, index) => {
              //const IconTag = React.createElement("FaAward", {className: "about__icon"});
              //console.log(IconTag)
              return (
                <SwiperSlide id={name} key={index} className="about__card">
                  {degree && <FaAward className="about__icon"/>}
                  {experience && <FaHospitalAlt className="about__icon"/>}
                  <h5>{name}</h5>
                  <small>{detail}</small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

        
        

        {/* <article className="about__card">
          <FaAward className="about__icon"/>
          <h5>Bachelor of Science - Computer Science</h5>
          <small>University of Illinois at Chicago</small>
        </article> */}
      

        <div className="about__content">
          {/* {
            data.map(({icon, name, detail}, index) => {
              return (
                <article key={index} className="about__card">
                  <FaAward className="about__icon"/>
                  <h5>{name}</h5>
                  <small>{detail}</small>
                </article>
              )
            })
          } */}
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Bachelor of Science - Computer Science</h5>
              <small>University of Illinois at Chicago</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>...+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>...+ Completed</small>
            </article>
          </div> */}

          <p>
          I am a web developer in the Greater Chicago Area. I seek to put my 
          reignited love of programming into learning and creating what’s new and 
          diverse. <br/> <br/>In my spare time, I like to run, do yoga (beginner), watch 
          horror movies or series, and cook/enjoy food with my family. 

          </p>
        </div>
      </div>

    </section>
  )
}

export default About