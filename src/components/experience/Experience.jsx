import React from 'react'
import './experience.css'

import {useQuery, gql} from '@apollo/client'



const GET_SKILLS = gql`
  query GetSkills {
    skills {
      name
      importance
      skillType
    }
  }
`


const Experience = () => {
  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;


  return (
    <section id="experience">
      
      <h2>My Experience</h2>
      <h5>What Skills I Have</h5>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            {
              data.skills.filter(skill => skill.skillType === 'frontend').map(filteredSkill => {
                return (
                  <article className="experience__details">
                    <div>
                      <h4>{filteredSkill.name}</h4>
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
              data.skills.filter(skill => skill.skillType === 'backend').map(filteredSkill => {
                return (
                  <article className="experience__details">
                    <div>
                      <h4>{filteredSkill.name}</h4>
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