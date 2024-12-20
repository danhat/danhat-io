import React from 'react'
import './portfolio.css'
import {useQuery, gql} from '@apollo/client'
import {AdvancedImage} from '@cloudinary/react'
import {Cloudinary} from '@cloudinary/url-gen'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'




const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      description
      importance
      link
      demo
      hasSite
      hasNotebook
      hasVideo
      tags
      projectImage {
        filename
        url
      }
    }
  }
`


const Portfolio = () => {

  const {loading, error, data} = useQuery(GET_PROJECTS, {
    onCompleted: someData =>
    console.log('portfolio data loaded')
  })
  if (loading) return ''
  if (error) return `\n${error}`
  const projects = data.projects.slice()


  return (
    <section id="portfolio">
      
      <h2>Recent Projects</h2>
        
    

      <div className="container portfolio__container">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2
          },
          1030: {
            slidesPerView: 3
          }
        }}
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={40}
      >

        {
          
          projects.sort((a, b) => (a.importance) - (b.importance))
          .map(project => {
            const cld = new Cloudinary({
              cloud: {
                cloudName: process.env.REACT_APP_DANHAT_CLOUDNAME
              }
            })


            const myImage = cld.image(`${process.env.REACT_APP_CLD_FOLDER}/${project.projectImage.filename}`)
            return (
              <SwiperSlide key={project.id} className="portfolio__item">
                <AdvancedImage className="portfolio__item-image" cldImg={myImage}/>
                <div className="portfolio__item-link-group">
                  <a href={project.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /></a>
                  <a href={project.demo} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>

                  
                </div>
                <div className="portfolio__item-overlay">
                  <h3 className="portfolio__item-title">{project.title}</h3>
                  <p className="portfolio__item-descr">{project.description}</p>

                  <div className="portfolio__item-tags">
                    {project.tags.map((tag, i) => 
                      <p className='portfolio__item-tag' key={i} tag={tag}>
                        {tag}
                      </p>
                    )}
                  </div>
                  
                </div>
              </SwiperSlide>

              
            )
          })
        }

      </Swiper>
      </div>
      
    

    </section>
  )
}

export default Portfolio
