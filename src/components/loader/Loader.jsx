import React, {useEffect} from 'react'
import './loader.css'
import anime from 'animejs'
import IconLoader from './IconLoader'


const Loader = () => {

  const animate = () => {
    const loader = anime.timeline({
    })

    loader
      .add({
        targets: '#logo #D',
        delay: 100,
        duration: 500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo #A',
        delay: 50,
        duration: 400,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo #N',
        delay: 50,
        duration: 400,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo #H',
        delay: 50,
        duration: 400,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo #A2',
        delay: 50,
        duration: 400,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo #T',
        delay: 50,
        duration: 200,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo #TT',
        delay: 0,
        duration: 200,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo-loader',
        delay: 100,
        transition: 'transform 5s ease',
        opacity: 0
      })
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <div id='logo-loader' className='loader'>
      <div className='logo-wrapper'>
        <IconLoader/>
      </div>
    </div>
  )

  
}


export default Loader