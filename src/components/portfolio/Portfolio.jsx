import React from 'react'
import './portfolio.css'

import GIF15 from '../../assets/15puzzle.gif'
import PLACEHOLDERIMG from '../../assets/placeholder-image.png'
import TWEETSIMG from '../../assets/twitter.png'
import YELPIMG from '../../assets/yelp.png'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";


const projects = [
  {
    id: 1,
    image: PLACEHOLDERIMG,
    title: "Play Nanogram!",
    github: "https://github/danhat",
    demo: "https://github.com/danhat"
  },
  {
    id: 2,
    image: GIF15,
    title: "15 Puzzle",
    github: "https://github/danhat/15Puzzle",
    notebook: "https://github.com/danhat/15Puzzle/blob/master/15puzzle.ipynb"
  },
  {
    id: 3,
    image: PLACEHOLDERIMG,
    title: "Huffman Coding",
    github: "https://github.com/danhat/HuffmanCoding"
  },
  {
    id: 4,
    image: TWEETSIMG,
    title: "Classifying Tweets",
    github: "https://github.com/danhat/classifying_tweets",
    notebook: "https://github.com/danhat/classifying_tweets/blob/main/tweets.ipynb"
  },
  {
    id: 5,
    image: YELPIMG,
    title: "Yelp Search",
    github: "https://github/danhat/yelp_search",
    notebook: "https://github.com/danhat/yelp_search/blob/main/yelp_search.ipynb"
  }
]


const Portfolio = () => {
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
          projects.map(({id, image, title, github, demo, notebook}) => {
            return (
              <SwiperSlide key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  {demo && <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>}
                  {notebook && <a href={notebook} className="btn btn-primary" target="_blank" rel="noreferrer">Jupyter Notebook</a>}
                  {/* <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    {demo ? "Live Demo" :
                    notebook ? "Jupyter Notebook" :
                    "Demo"}
                  </a> */}
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
