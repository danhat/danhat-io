import React from 'react'


import Header from './components/header/Header'
// import Nav from './components/nav/Nav'
import About from './components/about/About'
// import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
// import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <About/>
      {/* <Experinece/> */}
      <Portfolio/>
      {/* <Services/> */}
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App