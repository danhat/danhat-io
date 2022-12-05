import React from 'react'
import './skills.css'

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


const Skills = () => {
  const {loading, error, data} = useQuery(GET_SKILLS, {
    onCompleted: someData =>
    console.log('skill data loaded')
  })
  if (loading) return ''
  if (error) return `\n${error}`


  return (
    <section className='bg-dark' id="skills">
      
      <h2>Skills</h2>
      <h5>What Skills I Have</h5>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h2>Frontend Development</h2>

          <div className="skills__content">
            {
              data.skills.filter(skill => skill.skillType === 'frontend')
              .sort((a, b) => a.importance - b.importance)
              .map(filteredSkill => {
                return (
                  <article className="skills__details">
                    <div>
                      <h4>{filteredSkill.name}</h4>
                    </div>
                  </article>
                )
              })
            }
            
            
          </div>
        </div>

        <div className="skills__backend">
        <h2>Backend Development</h2>
          <div className="skills__content">
            {
              data.skills.filter(skill => skill.skillType === 'backend').map(filteredSkill => {
                return (
                  <article className="skills__details">
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

export default Skills