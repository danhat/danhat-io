import './header.css'
// import React, { useRef, useState } from 'react'
// import emailjs from 'emailjs-com'
import CTA from './CTA'

// import {useQuery, gql} from '@apollo/client'
// import {AdvancedImage} from '@cloudinary/react'
// import {Cloudinary} from '@cloudinary/url-gen'


// const GET_INFO = gql`
//   query GetInfo {
//     infos {
//       intro
//       headshot {
//         filename
//       }
//     }
//   }
// `

const Header = () => {
  // const {loading, error, data} = useQuery(GET_INFO, {
  //   onCompleted: someData =>
  //   console.log('header info loaded')
  // })
  // if (loading) return ''
  // if (error) return `\n${error}`

  // const temp = data.infos.slice()
  // const info = temp[0]

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: process.env.REACT_APP_DANHAT_CLOUDNAME
  //   }
  // })

  // const myImage = cld.image(`${process.env.REACT_APP_CLD_FOLDER}/${info.headshot.filename}`)

  return (

    <header>
      
      <div className="container header__container" id="home">
        
          

          <div className="about_details">
            <h4>Hello, I'm</h4>
            <h1>Danielle Hatten</h1>
            {/* <h5 className="text-light">{info.intro}</h5> */}
            <br></br>
            <h4>Programmer in the Greater Chicago Area</h4>
            <h4>B.S. in Computer Science | University of Illinois at Chicago</h4>
            <br></br>
            <CTA/>

            
          </div>
        
        
      </div>

    </header>
  )
}

export default Header