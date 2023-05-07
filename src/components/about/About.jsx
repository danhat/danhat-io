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
          

          <p>
          I am a programmer in the Greater Chicago Area. 

          </p>
        </div>
      </div>

    </section>
  )
}

export default About