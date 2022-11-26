import React from 'react'

import {useQuery, gql} from '@apollo/client'


const GET_INFO = gql`
  query GetInfo {
    infos {
      cv {
        filename
        url
      }
    }
  }
`

const CTA = () => {
  const {loading, error, data} = useQuery(GET_INFO, {
    onCompleted: someData =>
    console.log('info loaded')
  })
  if (loading) return 'Loading...'
  if (error) return `\n${error}`

  const temp = data.infos.slice()
  const info = temp[0]


  return (
    <div className="cta">
      
      <a href={info.cv.url} className='btn' target='_blank' rel='noreferrer'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Message Me</a>
    </div>
  )
}

export default CTA