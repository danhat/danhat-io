import React from 'react'
import './experience.css'

const frontend_data = [
  {
    id: 1,
    name: 'HTML'
  },
  {
    id: 2,
    name: 'CSS'
  },
  {
    id: 3,
    name: 'JavaScript'
  },
  {
    id: 4,
    name: 'React'
  },
  {
    id: 5,
    name: 'Bootstrap'
  },
  {
    id: 6,
    name: 'Angular'
  }
]

const backend_data = [
  {
    id: 1,
    name: 'Python'
  },
  {
    id: 2,
    name: 'Java'
  },
  {
    id: 3,
    name: 'Scala'
  },
  {
    id: 4,
    name: 'Node JS'
  },
  {
    id: 6,
    name: 'MySQL'
  }
]

const Experience = () => {
  return (
    <section id="experience">
      
      <h2>My Experience</h2>
      <h5>What Skills I Have</h5>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            {
              frontend_data.map(({id, name, level}) => {
                return (
                  <article className="experience__details">
                    <div>
                      <h4>{name}</h4>
                      <small className="text-dark">{level}</small>
                    </div>
                  </article>
                )
              })
            }
            
            
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            {
              backend_data.map(({id, name, level}) => {
                return (
                  <article className="experience__details">
                    <div>
                      <h4>{name}</h4>
                      <small className="text-dark">{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience