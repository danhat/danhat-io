import React from 'react'
import './portfolio.css'
import {useQuery, gql} from '@apollo/client'
import {AdvancedImage} from '@cloudinary/react'
import {Cloudinary} from '@cloudinary/url-gen'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";



const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      importance
      link
      demo
      hasSite
      hasNotebook
      hasVideo
      projectImage
    }
  }
`


const Portfolio = () => {

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) console.log('loading projects');

  if (error) console.log(error);

  return (
    <section id="portfolio">
      
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <Swiper className="container portfolio__container"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        modules={[Pagination]}
        spaceBetween={40}
      >

        {
          data.projects.sort((a, b) => a.importance - b.importance)
          .map(project => {
            const cld = new Cloudinary({
              cloud: {
                cloudName: process.env.REACT_APP_DANHAT_CLOUDNAME
              }
            })

            const myImage = cld.image(`danhat-api/${project.projectImage.filename}`)
            return (
              <SwiperSlide key={project.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <AdvancedImage cldImg={myImage}/>
                </div>
                <h3>{project.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noreferrer">Repository</a>
                  {project.hasSite === 'true' && <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>}
                  {project.hasNotebook === 'true' && <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Notebook</a>}
                  {project.hasVideo === 'true' && <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Video</a>}
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    

    </section>
  )
}

export default Portfolio
