import React from 'react'
import './skills.css'

import {useQuery, gql} from '@apollo/client'
import {AdvancedImage} from '@cloudinary/react'
import {Cloudinary} from '@cloudinary/url-gen'
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'



const GET_SKILLS = gql`
  query GetSkills {
    skills {
      name
      importance
      skillType
      skillImage {
        filename
        url
      }
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
      <h5>What Technologies I Use</h5>

      <div className="container skills__container">
        
        {
          data.skills.slice()
          .sort((a, b) => a.importance - b.importance)
          .map(filteredSkill => {
            const cld = new Cloudinary({
              cloud: {
                cloudName: process.env.REACT_APP_DANHAT_CLOUDNAME
              }
            })
            const myImage = cld.image(`${process.env.REACT_APP_CLD_FOLDER}/${filteredSkill.skillImage.filename}`)
            return (
              <div>
              <div data-tooltip-id='my-tooltip' data-tooltip-content={filteredSkill.name}>
              <AdvancedImage alt={filteredSkill.name} className="skill__image" cldImg={myImage}/>
              
              </div>
              <Tooltip id='my-tooltip'/> 

              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Skills