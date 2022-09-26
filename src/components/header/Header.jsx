import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot.png'
import Nav from '../nav/Nav'

import {useQuery, gql} from '@apollo/client'
import {AdvancedImage} from '@cloudinary/react'
import {Cloudinary} from '@cloudinary/url-gen'


const GET_INFO = gql`
  query GetInfo {
    infos {
      intro
      headshot {
        filename
      }
    }
  }
`

const Header = () => {
  const {loading, error, data} = useQuery(GET_INFO, {
    onCompleted: someData =>
    console.log(someData)
  })
  if (loading) return 'Loading...'
  if (error) return `\n${error}`

  const temp = data.infos.slice()
  const info = temp[0]

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_DANHAT_CLOUDNAME
    }
  })

  const myImage = cld.image(`${process.env.REACT_APP_CLD_FOLDER}/${info.headshot.filename}`)

  return (

    <header className='bg-light'>

      <Nav/>
      
      <div className="container header__container" id="home">
        
          <div className="about_headshot">
            <div className="me">
              <AdvancedImage cldImg={myImage}/>
            </div>
          
          </div>

          <div className="about_details">
          <h4>Hello, I'm</h4>
          <h1>Danielle Hatten</h1>
          <h5 className="text-light">{info.intro}</h5>
          <CTA/>
          </div>
        
        
      </div>

    </header>
  )
}

export default Header