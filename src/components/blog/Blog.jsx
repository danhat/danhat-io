import React from 'react'
import './blog.css'

// import {useQuery, gql} from '@apollo/client'


// const {loading, error, data} = useQuery(GET_BLOGS, {
//   onCompleted: someData =>
//   console.log('blog data loaded')
// })
// if (loading) return ''
// if (error) return `\n${error}`
// const blogs = data.blogs.slice()



const Blog = () => {


  return (
    <section className='bg-light' id="blog">
      
      <h2>Blog</h2>
      <h5>Recent Writings</h5>
      <br/>
      <p>
        <center>Under construction...</center>
      </p>


      {/* <div className="container blog__container">
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
          
          blogs.sort((a, b) => (a.importance) - (b.importance))
          .map(blog => {
            const cld = new Cloudinary({
              cloud: {
                cloudName: process.env.REACT_APP_DANHAT_CLOUDNAME
              }
            })


            return (
              <SwiperSlide key={blog.id} className="blog__item">
                
                
              </SwiperSlide>

              
            )
          })
        }

      </Swiper>
      </div> */}

      
    </section>
  )
}

export default Blog

