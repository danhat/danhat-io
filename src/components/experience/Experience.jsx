import React from 'react'
import './experience.css'

const frontend_data = [
  {
    id: 1,
    name: 'HTML',
    level: 'Experienced'
  },
  {
    id: 2,
    name: 'CSS',
    level: 'Experienced'
  },
  {
    id: 3,
    name: 'JavaScript',
    level: 'Experienced'
  },
  {
    id: 4,
    name: 'React',
    level: 'Experienced'
  },
  {
    id: 5,
    name: 'Bootstrap',
    level: 'Experienced'
  },
  {
    id: 6,
    name: 'Angular',
    level: 'Intermediate'
  }
]

const backend_data = [
  {
    id: 1,
    name: 'Python',
    level: 'Experienced'
  },
  {
    id: 2,
    name: 'Java',
    level: 'Experienced'
  },
  {
    id: 3,
    name: 'Scala',
    level: 'Intermediate'
  },
  {
    id: 4,
    name: 'Node JS',
    level: 'Experienced'
  },
  {
    id: 5,
    name: 'PHP',
    level: 'Intermediate'
  },
  {
    id: 6,
    name: 'MySQL',
    level: 'Intermediate'
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